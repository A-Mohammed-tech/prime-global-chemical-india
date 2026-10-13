import { useRef } from 'react';

/**
 * Subtle 3D tilt that follows the pointer, with a soft light sheen.
 * Only active on devices with a fine pointer and when reduced motion is not requested.
 */
export default function TiltCard({ children, className = '' }) {
  const ref = useRef(null);

  const canTilt = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches;

  const handleMove = (e) => {
    if (!canTilt() || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    ref.current.style.transform = `perspective(900px) rotateX(${((0.5 - py) * 6).toFixed(2)}deg) rotateY(${((px - 0.5) * 7).toFixed(2)}deg)`;
    ref.current.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`);
    ref.current.style.setProperty('--my', `${(py * 100).toFixed(1)}%`);
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`group relative transition-transform duration-200 ease-out will-change-transform ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.14), transparent 60%)',
        }}
      />
      {children}
    </div>
  );
}
