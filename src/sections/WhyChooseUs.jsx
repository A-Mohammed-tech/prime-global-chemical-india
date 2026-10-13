import SectionHeading from '../components/ui/SectionHeading.jsx';
import { WHY_US } from '../data/content.js';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative isolate scroll-mt-20 overflow-hidden bg-navy-950 py-24 lg:py-32">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-brand-blue/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-brand-teal/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          onDark
          tag="suggested"
          title="Why choose Prime Global Chemical"
          intro="What a customer can expect from a distribution partner focused on service."
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {WHY_US.map(({ title, text, icon: Icon }) => (
            <li key={title} className="glass-dark flex gap-5 rounded-3xl p-7 sm:p-8">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-teal/15 text-brand-teal ring-1 ring-brand-teal/30">
                <Icon size={24} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-2xl font-normal text-white">{title}</h3>
                <p className="mt-2 leading-relaxed text-slate-300">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
