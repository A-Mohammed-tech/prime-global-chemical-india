import SectionHeading from '../components/ui/SectionHeading.jsx';
import { ABOUT } from '../data/content.js';
import { SITE } from '../config/site.js';

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <SectionHeading title="A Tamil Nadu company, built around the customer." />
          <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-slate-600">
            {ABOUT.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <div className="relative">
          {SITE.images.about && (
            <img
              src={SITE.images.about}
              alt=""
              loading="lazy"
              decoding="async"
              className="mb-6 h-56 w-full rounded-3xl object-cover"
            />
          )}
          <div className="relative overflow-hidden rounded-3xl bg-navy-900 p-8 text-white shadow-lift sm:p-10">
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-blue/30 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-brand-teal/20 blur-3xl"
            />
            <div className="relative">
              <h3 className="font-display text-2xl font-light">Company at a glance</h3>
              <dl className="mt-6 divide-y divide-white/10">
                {ABOUT.facts.map((f) => (
                  <div key={f.label} className="flex items-baseline justify-between gap-6 py-3.5">
                    <dt className="text-sm text-slate-400">{f.label}</dt>
                    <dd className="text-right text-sm font-semibold">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
