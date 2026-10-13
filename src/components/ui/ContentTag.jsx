import { SITE } from '../../config/site.js';

const KINDS = {
  confirmed: {
    label: 'Confirmed from company documents',
    light: 'bg-teal-50 text-teal-800 ring-teal-600/25',
    dark: 'bg-teal-400/10 text-teal-200 ring-teal-300/30',
  },
  proposed: {
    label: 'Proposed categories',
    light: 'bg-sky-50 text-sky-800 ring-sky-600/25',
    dark: 'bg-sky-400/10 text-sky-200 ring-sky-300/30',
  },
  draft: {
    label: 'Draft wording, pending company approval',
    light: 'bg-amber-50 text-amber-800 ring-amber-600/30',
    dark: 'bg-amber-400/10 text-amber-200 ring-amber-300/30',
  },
  suggested: {
    label: 'Suggested copy',
    light: 'bg-amber-50 text-amber-800 ring-amber-600/30',
    dark: 'bg-amber-400/10 text-amber-200 ring-amber-300/30',
  },
};

/**
 * Marks whether content is confirmed by the source documents or is suggested copy.
 * Hidden automatically when VITE_SHOW_DRAFT_TAGS=false.
 */
export default function ContentTag({ kind = 'draft', onDark = false, label, className = '' }) {
  if (!SITE.showContentTags) return null;
  const k = KINDS[kind];
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${
        onDark ? k.dark : k.light
      } ${className}`}
    >
      {label || k.label}
    </span>
  );
}
