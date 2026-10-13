import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react';
import Button from '../ui/Button.jsx';
import { SITE } from '../../config/site.js';

const EMPTY = { name: '', email: '', phone: '', company: '', message: '' };

function validate(v) {
  const errors = {};
  if (!v.name.trim()) errors.name = 'Enter your name.';
  if (!v.email.trim()) errors.email = 'Enter your email address.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) errors.email = 'Enter a valid email address, such as name@company.com.';
  if (v.phone.trim() && !/^[+\d\s()-]{6,20}$/.test(v.phone.trim())) errors.phone = 'Use digits, spaces, + or - only.';
  if (v.message.trim().length < 10) errors.message = 'Write at least 10 characters so we can understand your enquiry.';
  return errors;
}

const fieldClass = (hasError) =>
  `mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-base text-navy-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 ${
    hasError
      ? 'border-red-400 focus:ring-red-300'
      : 'border-slate-300 hover:border-slate-400 focus:border-brand-blue focus:ring-brand-blue/30'
  }`;

function Field({ id, label, optional, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-navy-900">
        {label}
        {optional && <span className="ml-1.5 font-normal text-slate-500">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error | unconfigured

  // Products section "Enquire" links prefill the message.
  useEffect(() => {
    const onEnquire = (e) =>
      setValues((v) => ({ ...v, message: `I would like to enquire about ${e.detail}.` }));
    window.addEventListener('pg:enquire', onEnquire);
    return () => window.removeEventListener('pg:enquire', onEnquire);
  }, []);

  const set = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      document.getElementById(`cf-${Object.keys(found)[0]}`)?.focus();
      return;
    }
    if (!SITE.formEndpoint) {
      setStatus('unconfigured');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(SITE.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setValues(EMPTY);
    } catch {
      setStatus('error');
    }
  };

  const aria = (key) => ({
    'aria-invalid': errors[key] ? 'true' : undefined,
    'aria-describedby': errors[key] ? `cf-${key}-error` : undefined,
  });

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lift sm:p-9">
      <h3 className="font-display text-3xl font-light text-navy-900">Send an enquiry</h3>
      <p className="mt-2 text-slate-600">Tell us what you need and we will get back to you.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field id="cf-name" label="Name" error={errors.name}>
          <input id="cf-name" type="text" autoComplete="name" required value={values.name} onChange={set('name')} className={fieldClass(errors.name)} {...aria('name')} />
        </Field>
        <Field id="cf-email" label="Email" error={errors.email}>
          <input id="cf-email" type="email" autoComplete="email" required value={values.email} onChange={set('email')} className={fieldClass(errors.email)} {...aria('email')} />
        </Field>
        <Field id="cf-phone" label="Phone" optional error={errors.phone}>
          <input id="cf-phone" type="tel" autoComplete="tel" value={values.phone} onChange={set('phone')} className={fieldClass(errors.phone)} {...aria('phone')} />
        </Field>
        <Field id="cf-company" label="Company" optional>
          <input id="cf-company" type="text" autoComplete="organization" value={values.company} onChange={set('company')} className={fieldClass(false)} />
        </Field>
        <div className="sm:col-span-2">
          <Field id="cf-message" label="Message" error={errors.message}>
            <textarea id="cf-message" rows={5} required value={values.message} onChange={set('message')} className={fieldClass(errors.message)} {...aria('message')} />
          </Field>
        </div>
      </div>

      {/* Honeypot for bots; hidden from people and assistive tech. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" variant="dark" disabled={status === 'sending'}>
          {status === 'sending' ? (
            <>
              <Loader2 size={18} className="animate-spin" aria-hidden="true" /> Sending
            </>
          ) : (
            <>
              <Send size={18} aria-hidden="true" /> Send enquiry
            </>
          )}
        </Button>

        <div role="status" aria-live="polite" className="text-sm">
          <AnimatePresence mode="wait">
            {status === 'success' && (
              <motion.p key="ok" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 font-medium text-teal-700">
                <CheckCircle2 size={18} aria-hidden="true" /> Thank you. Your enquiry has been sent.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p key="err" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 font-medium text-red-600">
                <AlertCircle size={18} aria-hidden="true" /> Your enquiry could not be sent. Check your connection and try again.
              </motion.p>
            )}
            {status === 'unconfigured' && (
              <motion.p key="cfg" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-start gap-2 font-medium text-amber-700">
                <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" /> This form is not connected to an inbox yet, so your message was not sent.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </form>
  );
}
