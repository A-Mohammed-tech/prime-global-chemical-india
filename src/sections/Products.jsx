import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import TiltCard from '../components/ui/TiltCard.jsx';
import { PRODUCT_CATEGORIES } from '../data/content.js';

export default function Products() {
  const enquire = (title) =>
    window.dispatchEvent(new CustomEvent('pg:enquire', { detail: title }));

  return (
    <section id="products" className="relative isolate scroll-mt-20 overflow-hidden bg-navy-900 py-24 lg:py-32">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="grid-lines absolute inset-0" />
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-brand-blue/25 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-brand-teal/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          onDark
          title="Products and solutions"
          intro="Explore chemical categories and industrial solutions for a range of manufacturing requirements."
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCT_CATEGORIES.map(({ title, text, icon: Icon }) => (
            <li key={title}>
              <TiltCard className="glass-dark flex h-full flex-col rounded-3xl p-7">
                <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-brand-teal ring-1 ring-white/15">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3 className="text-2xl font-normal text-white">{title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-slate-300">{text}</p>
                <a
                  href="#contact"
                  onClick={() => enquire(title)}
                  className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-white transition-colors hover:text-brand-teal"
                >
                  Enquire about {title.toLowerCase()} <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </TiltCard>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
