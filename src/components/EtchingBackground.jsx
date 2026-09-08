import { useEffect, useRef } from 'react';

/**
 * EtchingBackground — deterministic corner "etching" for the pf5 portfolio.
 *
 * A fine-line fractal plume (stochastic branching with quadratic curves) grows
 * from the top-right corner diagonally down-left. Seeded by the calendar date,
 * so every day renders a new but reproducible composition. Rendered as a
 * fixed, pointer-transparent overlay canvas whose strokes fade out via both
 * per-segment alpha (deep/short branches are fainter) and a CSS radial mask,
 * so it decorates the corner without stealing attention from content.
 *
 * QA hook: append ?etch=<number> to the URL to preview other day-seeds.
 */
export default function EtchingBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ---- deterministic seed: YYYYMMDD (local), overridable via ?etch= ----
    const now = new Date();
    let seed = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
    const override = /[?&]etch=(\d+)/.exec(window.location.search);
    if (override) seed = parseInt(override[1], 10);

    // ---- seeded PRNG (mulberry32) ----
    const mulberry32 = (a) => () => {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };

    // ---- palette: text colour of the site, drawn faint ----
    const RGB = '232,232,232';
    const BASE_ALPHA = 0.40; // alpha of the trunk (mask + tip fade do the rest)
    const TRUNK_W = 1.6;

    const MAX_SEGS = 2600;
    const MAX_DEPTH = 46;
    const MIN_LEN = 2.4;

    // Root vines sprouting from the corner. Angles in radians (y-down),
    // ~135° = diagonally down-left. Kept just inside the corner so tips don't
    // clip weirdly on the canvas edge.
    const ROOTS = [
      { a: Math.PI * 0.70, s: 1.0 }, // 126° — sweeps along the top, longest
      { a: Math.PI * 0.77, s: 0.92 }, // 139° — main diagonal
      { a: Math.PI * 0.84, s: 0.78 }, // 151° — middle fan
      { a: Math.PI * 0.64, s: 0.60 }, // 115° — hugs the very top
      { a: Math.PI * 0.91, s: 0.52 }, // 164° — right edge vein
      { a: Math.PI * 0.58, s: 0.38 }, // 104° — short top curl
    ];

    let raf = 0;
    let drawn = 0;
    let disposed = false;

    const segColor = (alpha) => `rgba(${RGB},${alpha.toFixed(4)})`;

    function grow(acc, x, y, ang, len, L0, depth, rng, w, h) {
      if (acc.length >= MAX_SEGS || depth > MAX_DEPTH || len < MIN_LEN) return;

      // Gentle steering keeps the plume inside a natural cone (~95°..185°),
      // pulling wanderers back toward the diagonal body.
      const coneMid = Math.PI * 0.75;
      let dAng = ang - coneMid;
      while (dAng > Math.PI) dAng -= Math.PI * 2;
      while (dAng < -Math.PI) dAng += Math.PI * 2;
      if (dAng > 0.9 || dAng < -0.55) ang -= dAng * 0.18;

      const x1 = x + Math.cos(ang) * len;
      const y1 = y + Math.sin(ang) * len;

      // Cull at composition boundaries: don't crawl into the left half or the
      // bottom of the viewport (footer/content zone).
      const endLeft = x1 < w * 0.20;
      const endBottom = y1 > h * 0.93;
      const endOut = x1 > w + 4 || y1 < -4 || y1 > h + 4;

      // Segment style tapers with length ratio: short/deep = thin + faint.
      const r = Math.max(0, Math.min(1, len / L0));
      const width = Math.max(0.35, TRUNK_W * Math.pow(r, 0.9));
      const alpha = Math.min(BASE_ALPHA, BASE_ALPHA * (0.32 + 0.68 * r)) * (0.85 + rng() * 0.3);

      // Quadratic control point along the incoming direction keeps joints
      // near-tangent → continuous engraving curves rather than stick figure.
      const cx = x + Math.cos(ang) * len * 0.5;
      const cy = y + Math.sin(ang) * len * 0.5;

      acc.push({ x, y, cx, cy, x1, y1, width, alpha });

      if (endLeft || endBottom || endOut) return;

      const roll = rng();
      const spawn = (a2, l2) => grow(acc, x1, y1, a2, l2, L0, depth + 1, rng, w, h);

      if (depth === 0) {
        // split the trunk eagerly — fan from the origin immediately
        const d = 0.10 + rng() * 0.20;
        spawn(ang - d, len * (0.72 + rng() * 0.08));
        spawn(ang + d, len * (0.72 + rng() * 0.08));
      } else if (roll < 0.13) {
        // tip — nothing further
      } else if (roll < 0.34) {
        // single continuation with a gentle wiggle (long elegant veins)
        spawn(ang + (rng() - 0.5) * 0.5, len * (0.78 + rng() * 0.08));
      } else if (roll < 0.47) {
        // a curling accent branch — bigger single turn
        const dir = rng() < 0.5 ? -1 : 1;
        spawn(ang + dir * (0.5 + rng() * 0.6), len * (0.72 + rng() * 0.1));
      } else if (roll < 0.80) {
        // symmetric-ish fork
        const d = 0.12 + rng() * 0.24;
        const l2 = len * (0.68 + rng() * 0.1);
        spawn(ang - d, l2);
        spawn(ang + d, l2 * (0.8 + rng() * 0.35));
      } else {
        // asymmetric split
        const d = 0.18 + rng() * 0.3;
        spawn(ang - d * 0.5, len * (0.74 + rng() * 0.1));
        spawn(ang + d, len * (0.6 + rng() * 0.12));
      }
    }

    function generate(w, h) {
      const rng = mulberry32(seed ^ 0x9e3779b9);
      const acc = [];
      const minDim = Math.min(w, h);
      // Trunk length scaled to viewport but capped — reach matters, not girth.
      const L0 = Math.max(90, Math.min(300, minDim * 0.30));
      const ax = w - 6;
      const ay = 8;
      for (const root of ROOTS) {
        grow(acc, ax, ay, root.a, L0 * root.s, L0, 0, rng, w, h);
      }
      return acc;
    }

    const drawSeg = (s) => {
      ctx.strokeStyle = segColor(s.alpha);
      ctx.lineWidth = s.width;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.quadraticCurveTo(s.cx, s.cy, s.x1, s.y1);
      ctx.stroke();
    };

    const drawAll = () => {
      for (const s of segs) drawSeg(s);
      drawn = segs.length;
    };

    let animStart = 0;
    const DURATION = 3400;

    const frame = (t) => {
      if (disposed) return;
      const p = Math.min(1, (t - animStart) / DURATION);
      const ease = 1 - Math.pow(1 - p, 3);
      const target = Math.floor(ease * segs.length);
      while (drawn < target) drawSeg(segs[drawn++]);
      if (drawn < segs.length) raf = requestAnimationFrame(frame);
    };

    let segs = [];
    let resizeTimer = 0;

    const render = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      segs = generate(w, h);
      drawn = 0;
      cancelAnimationFrame(raf);
      if (reduceMotion) {
        drawAll();
        return;
      }
      animStart = performance.now();
      raf = requestAnimationFrame(frame);
    };

    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(render, 160);
    };

    render();
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
        zIndex: 9999,
        pointerEvents: 'none',
        // Fade the strokes out as they travel down-left from the corner so
        // they never reach the content-heavy centre / bottom of the page.
        WebkitMaskImage: 'radial-gradient(130% 125% at 100% 0%, #000 18%, transparent 62%)',
        maskImage: 'radial-gradient(130% 125% at 100% 0%, #000 18%, transparent 62%)',
      }}
    />
  );
}
