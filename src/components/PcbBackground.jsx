import { useEffect, useRef } from 'react';

/**
 * PcbBackground — generative PCB circuit-trace decoration for the pf5 portfolio.
 *
 * Four gold traces start from plated "mounting" pads in the four corners of the
 * viewport and grow inward on a coarse grid (orthogonal + 45° routing, like a
 * real autorouted board). Traces run straight, then fork — splinters peel off
 * at ±45°/90° and terminate in solder pads / vias. Seeded by the calendar date,
 * so every day routes a different board.
 *
 * Rendered on a fixed canvas on the background layer (z-index 1): below ALL
 * page content, above the flat page background, pointer-transparent. Segments
 * are appended progressively (growth animation), then the finished net stays
 * as static decoration — zero ongoing cost. Respects prefers-reduced-motion
 * (finished board appears instantly).
 *
 * QA hooks: ?pcb=<number> previews other day-seeds, ?page=About etc. shows
 * other pages. (?race= still accepted as an alias.)
 */
export default function PcbBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ---- deterministic seed: YYYYMMDD (local), overridable via ?pcb= / ?race= ----
    const now = new Date();
    let seed = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
    const override = /[?&](?:pcb|race)=(\d+)/.exec(window.location.search);
    if (override) seed = parseInt(override[1], 10);

    // ---- seeded PRNG (mulberry32) ----
    const mulberry32 = (a) => () => {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };

    // ---- look & feel (gold PCB) ----
    const GOLD = '212,175,55'; // classic gold / ENIG finish
    const TRAIL_ALPHA = 0.5; // trace opacity (finished decor)
    const LINE_W = 1.7;
    const SPEED = 620; // px per second each corner trace grows
    const MAX_DEPTH = 4; // splinter generations
    const DIRS = [
      [1, 0], // 0  E
      [1, 1], // 1  SE
      [0, 1], // 2  S
      [-1, 1], // 3  SW
      [-1, 0], // 4  W
      [-1, -1], // 5  NW
      [0, -1], // 6  N
      [1, -1], // 7  NE
    ];

    // ---- build the board net (fully deterministic) ----
    const buildBoard = (rng, w, h) => {
      const G = Math.max(10, Math.min(16, Math.round(Math.min(w, h) / 64))); // routing grid px
      const nx = Math.max(24, Math.floor(w / G)); // lattice points across
      const ny = Math.max(16, Math.floor(h / G));
      const inb = (i, j) => i >= 1 && j >= 1 && i <= nx - 3 && j <= ny - 3;
      const padR = Math.max(3.2, Math.min(6.2, G * 0.42)); // solder pad radius
      const mountR = Math.max(4.5, Math.min(8.5, G * 0.72)); // corner mounting pad
      const cellKey = (i, j) => i * 40000 + j;
      const visited = new Set();
      const has = (i, j) => visited.has(cellKey(i, j));

      // Four corner origins + initial heading (toward board centre)
      const corners = [
        { i: 1, j: 1, dir: 1 }, // top-left → SE
        { i: nx - 3, j: 1, dir: 3 }, // top-right → SW
        { i: 1, j: ny - 3, dir: 7 }, // bottom-left → NE
        { i: nx - 3, j: ny - 3, dir: 5 }, // bottom-right → NW
      ];
      const roots = corners.map(() => ({ segs: [], pads: [] }));

      // Weighted direction choice; straight runs strongly favoured, ±45 ok, ±90 rare.
      const pickDir = (ci, cj, cur) => {
        const cands = [0, 0, 0, 0, 1, -1, 1, -1, 2, -2, 2];
        for (let k = cands.length - 1; k > 0; k--) {
          const q = Math.floor(rng() * (k + 1));
          const tmp = cands[k]; cands[k] = cands[q]; cands[q] = tmp;
        }
        for (const off of cands) {
          const nd = (cur + off + 8) % 8;
          const ni = ci + DIRS[nd][0];
          const nj = cj + DIRS[nd][1];
          if (inb(ni, nj) && !has(ni, nj)) return { nd, ni, nj };
        }
        return null;
      };

      // Recursive trace grower. pool = lattice cells this branch may still consume.
      const grow = (root, si, sj, dir, pool, depth) => {
        const segs = root.segs;
        const pads = root.pads;
        let ci = si;
        let cj = sj;
        let cur = dir;
        let budget = pool;

        const stepTo = (ni, nj) => {
          const x1 = ci * G, y1 = cj * G;
          const x2 = ni * G, y2 = nj * G;
          segs.push({ x1, y1, x2, y2, len: Math.hypot(x2 - x1, y2 - y1) });
          visited.add(cellKey(ni, nj));
          ci = ni;
          cj = nj;
        };

        const endPad = (via) => {
          pads.push({ x: ci * G, y: cj * G, r: via ? padR * 0.6 : padR, via, anchor: segs.length - 1 });
        };

        let firstRun = true;
        while (budget > 0) {
          const runLen = firstRun ? 5 + Math.floor(rng() * 9) : 2 + Math.floor(rng() * 6);
          firstRun = false;
          let stepped = 0;
          while (stepped < runLen && budget > 0) {
            const pick = pickDir(ci, cj, cur);
            if (!pick) {
              endPad(false);
              return;
            }
            stepTo(pick.ni, pick.nj);
            stepped++;
            budget--;
            if (budget <= 0) break;

            // splinter fork: reserve a share of the remaining budget
            if (depth < MAX_DEPTH && rng() < 0.085) {
              const share = Math.max(3, Math.floor(budget * (0.16 + rng() * 0.2)));
              if (budget - share >= 1) {
                const off = rng() < 0.55 ? (rng() < 0.5 ? 1 : -1) : (rng() < 0.5 ? 2 : -2);
                const cdir = (cur + off + 8) % 8;
                const ci2 = ci + DIRS[cdir][0];
                const cj2 = cj + DIRS[cdir][1];
                if (inb(ci2, cj2) && !has(ci2, cj2)) {
                  budget -= share;
                  grow(root, ci, cj, cdir, share, depth + 1);
                }
              }
            }
            // occasional early "tap out" pad along the run
            if (budget > 4 && rng() < 0.03) {
              endPad(false);
              return;
            }
          }
          // after each straight run, small chance of a via at the elbow
          if (segs.length > 3 && rng() < 0.05) endPad(true);
        }
        endPad(false);
      };

      const pool = Math.max(110, Math.min(250, Math.round((Math.min(w, h) / G) * 2.9)));
      corners.forEach((c, k) => {
        const root = roots[k];
        // corner mounting pad first (anchor -1 = visible from the very start)
        root.pads.push({ x: c.i * G, y: c.j * G, r: mountR, via: false, mount: true, anchor: -1 });
        grow(root, c.i, c.j, c.dir, pool, 0);
      });

      return { G, roots };
    };

    let board = null;
    let raf = 0;
    let disposed = false;
    let resizeTimer = 0;
    let lastIdx = [];
    let done = false;

    const strokeSeg = (s) => {
      ctx.beginPath();
      ctx.moveTo(s.x1, s.y1);
      ctx.lineTo(s.x2, s.y2);
      ctx.stroke();
    };

    const strokePad = (p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.stroke();
      if (p.mount || p.r > 4.6) {
        // plated hole
        ctx.beginPath();
        ctx.fillStyle = '#252525';
        ctx.arc(p.x, p.y, p.r * 0.45, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawAll = () => {
      ctx.save();
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.strokeStyle = `rgba(${GOLD},${TRAIL_ALPHA})`;
      ctx.lineWidth = LINE_W;
      ctx.shadowColor = `rgba(${GOLD},0.55)`;
      ctx.shadowBlur = 5;
      for (const root of board.roots) {
        for (const s of root.segs) strokeSeg(s);
        for (const p of root.pads) strokePad(p);
      }
      ctx.restore();
      done = true;
    };

    // append segments from each root as the "head" advances
    const advance = (dt) => {
      let finished = true;
      for (let k = 0; k < board.roots.length; k++) {
        const root = board.roots[k];
        const end = root.segs.length - 1;
        if (lastIdx[k] >= end) continue;
        finished = false;
        let budgetPx = dt * SPEED + carryPx[k];
        let idx = lastIdx[k];
        while (idx < end && budgetPx > 0) {
          idx++;
          const s = root.segs[idx];
          budgetPx -= s.len;
          strokeSeg(s);
          // pads anchored to this segment become visible with it
          for (const p of root.pads) {
            if (p.anchor === idx) strokePad(p);
          }
        }
        lastIdx[k] = idx;
        carryPx[k] = Math.max(0, -budgetPx); // leftover distance rolls into next frame
      }
      return finished;
    };

    const frame = (t) => {
      if (disposed) return;
      if (!frame.last) frame.last = t;
      let dt = (t - frame.last) / 1000;
      frame.last = t;
      if (dt > 0.05) dt = 0.05;
      if (advance(dt)) {
        done = true;
        return; // full net is drawn; canvas holds the finished board, no more frames
      }
      raf = requestAnimationFrame(frame);
    };

    let carryPx = [];

    const render = (animate = true) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const rng = mulberry32(seed ^ 0x5eed1234);
      board = buildBoard(rng, w, h);
      lastIdx = board.roots.map(() => -1);
      carryPx = board.roots.map(() => 0);
      done = false;
      cancelAnimationFrame(raf);
      frame.last = 0;

      // shared stroke style for the whole net
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.strokeStyle = `rgba(${GOLD},${TRAIL_ALPHA})`;
      ctx.lineWidth = LINE_W;
      ctx.shadowColor = `rgba(${GOLD},0.55)`;
      ctx.shadowBlur = 5;

      if (reduceMotion || !animate) {
        drawAll();
        return;
      }
      // corner mounting pads are visible from the very first frame
      for (const root of board.roots) {
        for (const p of root.pads) {
          if (p.anchor === -1) strokePad(p);
        }
      }
      raf = requestAnimationFrame(frame);
    };

    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => render(!done), 160);
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
