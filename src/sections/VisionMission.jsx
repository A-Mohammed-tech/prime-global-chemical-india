import { Eye, Target } from 'lucide-react';
import { MISSION_DRAFT, VISION_DRAFT } from '../data/content.js';

export default function VisionMission() {
  return (
    <section id="vision-mission" className="scroll-mt-20 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-brand-blue">
              <Eye size={22} aria-hidden="true" />
              <h2 className="font-sans text-base font-bold text-navy-900">Our vision</h2>
            </div>
            <p className="mt-6 font-display text-3xl font-light leading-snug text-navy-900 sm:text-4xl">
              {VISION_DRAFT}
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-brand-blue">
              <Target size={22} aria-hidden="true" />
              <h2 className="font-sans text-base font-bold text-navy-900">Our mission</h2>
            </div>
            <ul className="mt-6 space-y-4">
              {MISSION_DRAFT.map((m) => (
                <li key={m.title} className="rounded-2xl border border-slate-200 bg-mist p-6 sm:p-7">
                  <div className="border-l-2 border-brand-teal pl-5">
                    <h3 className="font-display text-xl font-medium text-navy-900">{m.title}</h3>
                    <p className="mt-2 leading-relaxed text-slate-600">{m.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
