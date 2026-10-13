import { ExternalLink } from 'lucide-react';
import { SITE } from '../../config/site.js';

export default function MapEmbed() {
  const q = encodeURIComponent(SITE.address.mapQuery);
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lift">
      <iframe
        title="Map of the Prime Global Chemical India Pvt. Ltd. address in Ekkatuthangal, Chennai"
        src={`https://www.google.com/maps?q=${q}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[360px] w-full border-0 sm:h-[420px]"
        allowFullScreen
      />
      <div className="flex flex-col gap-2 border-t border-slate-200 px-6 py-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <span className="text-slate-600">Ekkatuthangal, Chennai – 600032</span>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${q}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-semibold text-brand-blue hover:underline"
        >
          Open in Google Maps <ExternalLink size={15} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
