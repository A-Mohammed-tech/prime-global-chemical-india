/**
 * Single source of truth for company facts that come from the uploaded letterhead.
 * Anything null is intentionally empty: add it only once the company has verified it.
 */
export const SITE = {
  name: 'Prime Global Chemical India Pvt. Ltd.',
  shortName: 'Prime Global Chemical',
  suffix: 'India Pvt. Ltd.',
  established: 2013,

  address: {
    lines: ['No. 246/A1, Kattabomman Street,', 'Ambal Nagar, Ekkatuthangal,', 'Chennai – 600032, Tamil Nadu, India.'],
    mapQuery: 'Kattabomman Street, Ambal Nagar, Ekkatuthangal, Chennai 600032, Tamil Nadu, India',
  },

  // Add contact details here when verified by the company.
  contact: {
    phone: null, // e.g. '+91 00000 00000'
    email: null, // e.g. 'info@yourdomain.com'
  },

  // Contact form endpoint (Formspree, Getform, your own API...). Empty = form reports "not connected".
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || '',

  // Internal content-status tags are disabled on the public website.
  showContentTags: false,

  // Optional real photography. Put files in /public/images and set the path, e.g. '/images/hero.jpg'.
  // Use only photos the company owns or is licensed to use. Compress to ~200 KB (WebP/AVIF/JPEG).
  images: {
    hero: null,
    about: null,
  },
};

export const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'products', label: 'Products' },
  { id: 'vision-mission', label: 'Vision & Mission' },
  { id: 'industries', label: 'Industries' },
  { id: 'why-us', label: 'Why Choose Us' },
];

export const SECTION_IDS = ['home', ...NAV_ITEMS.map((n) => n.id), 'contact'];
