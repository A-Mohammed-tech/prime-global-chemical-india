import { MapPin } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import ContactForm from '../components/contact/ContactForm.jsx';
import MapEmbed from '../components/contact/MapEmbed.jsx';
import { SITE } from '../config/site.js';

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-mist py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading title="Contact us" intro="Send an enquiry about a product category or your industrial requirement." />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <MapPin size={22} className="mt-1 shrink-0 text-brand-blue" aria-hidden="true" />
                <div>
                  <h3 className="font-sans text-base font-bold text-navy-900">Address</h3>
                  <address className="mt-2 not-italic leading-relaxed text-slate-600">
                    <span className="font-semibold text-navy-900">{SITE.name}</span>
                    {SITE.address.lines.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </address>
                </div>
              </li>
            </ul>
          </div>

          <ContactForm />
        </div>

        <div className="mt-12">
          <MapEmbed />
        </div>
      </div>
    </section>
  );
}
