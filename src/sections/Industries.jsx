import SectionHeading from '../components/ui/SectionHeading.jsx';
import { INDUSTRIES } from '../data/content.js';

export default function Industries() {
  return (
    <section id="industries" className="scroll-mt-20 bg-mist py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          title="Industries we serve"
          intro="Chemical inputs support a wide range of industrial and manufacturing applications."
        />

        <ul className="mt-14 grid overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4 gap-px">
          {INDUSTRIES.map(({ title, text, icon: Icon }) => (
            <li
              key={title}
              className="group bg-white p-7 transition-colors duration-300 hover:bg-navy-900"
            >
              <Icon
                size={28}
                aria-hidden="true"
                className="text-brand-blue transition-colors duration-300 group-hover:text-brand-teal"
              />
              <h3 className="mt-8 text-2xl font-normal text-navy-900 transition-colors duration-300 group-hover:text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-300">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
