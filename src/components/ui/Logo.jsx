import { SITE } from '../../config/site.js';

/**
 * Placeholder wordmark built for this site (no official logo was supplied).
 * Replace the SVG with the company's official logo file when available.
 */
export default function Logo({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true" fill="none">
        <path d="M20 3 35 11.5v17L20 37 5 28.5v-17z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M20 14 13 25M20 14l7 11M13 25h14" stroke="currentColor" strokeWidth="1.4" opacity=".65" />
        <circle cx="20" cy="14" r="2.8" fill="#2BB3A8" />
        <circle cx="13" cy="25" r="2.8" fill="currentColor" />
        <circle cx="27" cy="25" r="2.8" fill="currentColor" />
      </svg>
      <span className="leading-tight">
        <span className="block font-display text-lg font-medium tracking-tight">{SITE.shortName}</span>
        <span className="block text-[11px] font-medium opacity-70">{SITE.suffix}</span>
      </span>
    </span>
  );
}
