import { useEffect, useRef } from 'react';

const COLORS = ['#7FB0FF', '#2BB3A8', '#CFE0FF'];

/**
 * Drifting 3D molecular lattice drawn on a canvas.
 * Slowly rotates, leans toward the pointer, pauses when off-screen or when the tab is hidden,
 * and renders a single still frame when the visitor prefers reduced motion.
 */
export default function MoleculeField({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    const parent = canvas.parentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let w = 0;
    let h = 0;
    let raf = 0;
    let onScreen = true;
    let angle = 0.6;
    let nodes = [];
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

    const build = () => {
      const count = Math.round(Math.min(62, Math.max(26, w / 22)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * 2 - 1,
        y: Math.random() * 2 - 1,
        z: Math.random() * 2 - 1,
        vx: (Math.random() - 0.5) * 0.0011,
        vy: (Math.random() - 0.5) * 0.0011,
        vz: (Math.random() - 0.5) * 0.0011,
        r: 1.4 + Math.random() * 2.6,
        c: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
      draw(false);
    };

    const draw = (advance) => {
      ctx.clearRect(0, 0, w, h);
      if (advance) {
        angle += 0.0014;
        pointer.x += (pointer.tx - pointer.x) * 0.04;
        pointer.y += (pointer.ty - pointer.y) * 0.04;
      }
      const ry = angle + pointer.x * 0.35;
      const rx = pointer.y * 0.25;
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);
      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);
      const wide = w >= 900;
      const cx = wide ? w * 0.68 : w * 0.5;
      const cy = h * 0.5;
      const scale = Math.min(w, h) * (wide ? 0.62 : 0.55);

      const pts = nodes.map((n) => {
        if (advance) {
          n.x += n.vx;
          n.y += n.vy;
          n.z += n.vz;
          if (n.x > 1 || n.x < -1) n.vx *= -1;
          if (n.y > 1 || n.y < -1) n.vy *= -1;
          if (n.z > 1 || n.z < -1) n.vz *= -1;
        }
        const x1 = n.x * cosY - n.z * sinY;
        const z1 = n.x * sinY + n.z * cosY;
        const y1 = n.y * cosX - z1 * sinX;
        const z2 = n.y * sinX + z1 * cosX;
        const persp = 4 / (4 - z2);
        return {
          sx: cx + x1 * scale * persp,
          sy: cy + y1 * scale * persp,
          depth: (z2 + 1.7) / 3.4,
          persp,
          n,
        };
      });

      // Bonds
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dz = a.z - b.z;
          const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (d < 0.6) {
            const alpha = (1 - d / 0.6) * 0.5 * (0.3 + 0.7 * ((pts[i].depth + pts[j].depth) / 2));
            ctx.strokeStyle = `rgba(160, 200, 255, ${alpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(pts[i].sx, pts[i].sy);
            ctx.lineTo(pts[j].sx, pts[j].sy);
            ctx.stroke();
          }
        }
      }

      // Atoms, far to near
      pts
        .slice()
        .sort((p, q) => p.depth - q.depth)
        .forEach((p) => {
          const r = p.n.r * p.persp;
          ctx.globalAlpha = 0.12 + 0.12 * p.depth;
          ctx.fillStyle = p.n.c;
          ctx.beginPath();
          ctx.arc(p.sx, p.sy, r * 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 0.35 + 0.65 * p.depth;
          ctx.beginPath();
          ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
          ctx.fill();
        });
      ctx.globalAlpha = 1;
    };

    const loop = () => {
      if (onScreen && !document.hidden) draw(true);
      raf = requestAnimationFrame(loop);
    };

    const onPointer = (e) => {
      pointer.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    const io = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
    });
    io.observe(parent);

    resize();
    if (!reduceMotion) {
      window.addEventListener('pointermove', onPointer, { passive: true });
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onPointer);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
