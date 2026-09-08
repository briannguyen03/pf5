import { useEffect, useRef } from 'react';

/**
 * RacingLineBackground — a Tron-style "light cycle" trace for the pf5 portfolio.
 *
 * A single glowing line starts at a pad in the top-right corner and races out
 * across the viewport, weaving a deterministic circuit path (axis-aligned
 * segments, 90° elbows — like a light-cycle wall or a PCB trace). Seeded by
 * the calendar date, so every day lays down a different route. The finished
 * trail stays as a subtle background decoration; nothing keeps animating
 * afterwards (zero ongoing cost).
 *
 * The canvas lives on a background layer: z-index below all page content but
 * above the page background, pointer-transparent.
 *
 * QA hooks: ?race=<number> previews other day-seeds, ?page=About etc. shows
 * other pages. Respects prefers-reduced-motion (trail appears instantly).
 */
export default function RacingLineBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ---- deterministic seed: YYYYMMDD (local), overridable via ?race= ----
    const now = new Date();
    let seed = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
    const override = /[?&]race=(\d+)/.exec(window.location.search);
    if (override) seed = parseInt(override[1], 10);

    // ---- seeded PRNG (mulberry32) ----
    const mulberry32 = (a) => () => {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };

    // ---- look & feel ----
    const RGB = '111,227,247'; // soft tron cyan — complements the dark terminal theme
    const TRAIL_ALPHA = 0.42; // finished trail (and trail-while-racing) opacity
    const LINE_W = 1.8;
    const SPEED = 1050; // px per second the head races at
    const STEP = 3.0; // px between sampled path points

    // ---- route (normalised 0..1 coords, y-down) ----
    const buildRoute = (rng) => {
      const route = [{ x: 0.965, y: 0.05 }];
      let x = 0.965;
      let y = 0.05;
      let heading = -1; // start sweeping left
      let guard = 0;
      while (y < 0.84 && guard++ < 30) {
        // horizontal sweep to a band on the far side
        const tx = heading < 0 ? 0.06 + rng() * 0.42 : 0.52 + rng() * 0.42;
        route.push({ x: tx, y });
        x = tx;
        // vertical drop to the next row
        y += 0.055 + rng() * 0.085;
        if (y >= 0.84) break;
        route.push({ x, y });
        heading *= -1;
      }
      // run the final vertical home to the terminal pad
      if (y < 0.87) route.push({ x, y: 0.87 });
      return route;
    };

    // ---- sample route into a px point list ----
    const sampleRoute = (route, w, h) => {
      const pts = [];
      for (let i = 0; i < route.length - 1; i++) {
        const a = route[i];
        const b = route[i + 1];
        const ax = Math.max(3, Math.min(w - 3, a.x * w));
        const ay = Math.max(3, Math.min(h - 3, a.y * h));
        const bx = Math.max(3, Math.min(w - 3, b.x * w));
        const by = Math.max(3, Math.min(h - 3, b.y * h));
        const dx = bx - ax;
        const dy = by - ay;
        const dist = Math.hypot(dx, dy);
        const steps = Math.max(1, Math.ceil(dist / STEP));
        for (let s = 0; s < steps; s++) {
          pts.push({ x: ax + (dx * s) / steps, y: ay + (dy * s) / steps });
        }
      }
      const last = route[route.length - 1];
      pts.push({ x: Math.max(3, Math.min(w - 3, last.x * w)), y: Math.max(3, Math.min(h - 3, last.y * h)) });
      return pts;
    };

    let pts = [];
    let pad = null; // terminal pad px coords
    let raf = 0;
    let disposed = false;
    let resizeTimer = 0;
    let drawnStatic = false;

    const tracePath = (ctx2, from, to) => {
      ctx2.beginPath();
      ctx2.moveTo(pts[from].x, pts[from].y);
      for (let i = from + 1; i <= to; i++) ctx2.lineTo(pts[i].x, pts[i].y);
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (pts.length < 2) return;
      ctx.save();
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      // full trail
      ctx.strokeStyle = `rgba(${RGB},${TRAIL_ALPHA})`;
      ctx.lineWidth = LINE_W;
      ctx.shadowColor = `rgba(${RGB},0.8)`;
      ctx.shadowBlur = 7;
      tracePath(ctx, 0, pts.length - 1);
      ctx.stroke();
      // terminal pad
      if (pad) {
        ctx.shadowBlur = 10;
        ctx.fillStyle = `rgba(${RGB},0.75)`;
        ctx.fillRect(pad.x - 3, pad.y - 3, 6, 6);
      }
      ctx.restore();
      drawnStatic = true;
    };

    const frame = (t) => {
      if (disposed) return;
      if (!frame.start) frame.start = t;
      let dt = (t - frame.last) / 1000;
      frame.last = t;
      if (dt > 0.05) dt = 0.05;

      frame.dist += dt * SPEED;
      const i = Math.min(pts.length - 1, Math.floor(frame.dist / STEP));
      const complete = i >= pts.length - 1;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      if (i > 0) {
        // dim long trail
        ctx.strokeStyle = `rgba(${RGB},${TRAIL_ALPHA})`;
        ctx.lineWidth = LINE_W;
        ctx.shadowColor = `rgba(${RGB},0.7)`;
        ctx.shadowBlur = 5;
        tracePath(ctx, 0, i);
        ctx.stroke();
        // bright beam head (last ~45px)
        const from = Math.max(0, i - Math.floor(45 / STEP));
        ctx.strokeStyle = `rgba(${RGB},0.95)`;
        ctx.lineWidth = LINE_W + 0.7;
        ctx.shadowBlur = 12;
        tracePath(ctx, from, i);
        ctx.stroke();
        // head glow dot
        ctx.fillStyle = `rgba(255,255,255,0.95)`;
        ctx.beginPath();
        ctx.arc(pts[i].x, pts[i].y, 1.9, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      if (complete) {
        drawStatic();
        return;
      }
      raf = requestAnimationFrame(frame);
    };
    frame.start = 0;
    frame.last = 0;
    frame.dist = 0;

    const render = (animate = true) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const rng = mulberry32(seed ^ 0x51ab3f);
      pts = sampleRoute(buildRoute(rng), w, h);
      const lastP = pts[pts.length - 1];
      pad = { x: lastP.x, y: lastP.y };
      drawnStatic = false;
      cancelAnimationFrame(raf);

      if (reduceMotion || !animate) {
        drawStatic();
        return;
      }
      frame.start = 0;
      frame.last = 0;
      frame.dist = 0;
      raf = requestAnimationFrame(frame);
    };

    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => render(!drawnStatic), 160);
    };

    render(true);
    window.addEventListener('resize', onResize);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      window.clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  );
}
