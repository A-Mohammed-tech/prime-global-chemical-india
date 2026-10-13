import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, FlaskConical, MapPin } from 'lucide-react';
import Button from '../components/ui/Button.jsx';
import MoleculeField from '../components/visual/MoleculeField.jsx';
import { SITE } from '../config/site.js';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } };
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const FACTS = [
  { icon: CalendarDays, label: 'Established', value: String(SITE.established) },
  { icon: MapPin, label: 'Based in', value: 'Chennai, Tamil Nadu' },
  { icon: FlaskConical, label: 'What we do', value: 'Chemical distribution' },
];

export default function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy-950">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {SITE.images.hero && (
          <img
            src={SITE.images.hero}
            alt=""
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover opacity-40"
          />
        )}
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_75%_40%,rgba(31,111,235,0.35),transparent_70%),radial-gradient(45%_50%_at_15%_95%,rgba(43,179,168,0.2),transparent_70%)]" />
        <div className="grid-lines absolute inset-0" />
        <MoleculeField className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-950/40 to-transparent lg:from-navy-950/70 lg:via-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.p variants={item} className="mb-6 text-base font-semibold text-brand-teal">
            {SITE.name}
          </motion.p>
          <motion.h1
            variants={item}
            className="text-5xl font-light leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Specialty chemicals and industrial solutions, distributed from Chennai.
          </motion.h1>
          <motion.p variants={item} className="mt-7 max-w-xl text-lg leading-relaxed text-slate-300">
            Established in 2013, {SITE.name} distributes chemicals to industrial manufacturing sectors, with customer
            satisfaction as its main strategic goal.
          </motion.p>
          <motion.div variants={item} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="#products" variant="light">
              Explore Our Products <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button href="#contact" variant="glass">
              Contact Us
            </Button>
          </motion.div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass-dark mt-16 grid max-w-3xl divide-y divide-white/10 rounded-2xl sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {FACTS.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3 px-5 py-4">
              <Icon size={20} className="shrink-0 text-brand-teal" aria-hidden="true" />
              <div>
                <dt className="text-xs text-slate-400">{label}</dt>
                <dd className="text-sm font-semibold text-white">{value}</dd>
              </div>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
