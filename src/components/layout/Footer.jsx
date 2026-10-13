import Logo from '../ui/Logo.jsx';
import { NAV_ITEMS, SITE } from '../../config/site.js';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <Logo className="text-white" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
            Chemical distribution for industrial manufacturing sectors, from Chennai, Tamil Nadu.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-sans text-sm font-semibold text-white">Explore</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[...NAV_ITEMS, { id: 'contact', label: 'Contact Us' }].map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="transition-colors hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-sans text-sm font-semibold text-white">Registered address</h2>
          <address className="mt-4 text-sm not-italic leading-relaxed text-slate-400">
            {SITE.name}
            <br />
            {SITE.address.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          {SITE.contact.phone && <p className="mt-3 text-sm">{SITE.contact.phone}</p>}
          {SITE.contact.email && <p className="mt-1 text-sm">{SITE.contact.email}</p>}
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-slate-500 sm:px-8">
          © {new Date().getFullYear()} {SITE.name} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
