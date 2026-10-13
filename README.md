# Prime Global Chemical India Pvt. Ltd. – Corporate Website

React + Vite + Tailwind CSS + Framer Motion + Lucide React. Single-page site, ready for Vercel.

## Run locally
```bash
npm install
cp .env.example .env     # optional
npm run dev              # http://localhost:5173
npm run build && npm run preview   # production check
```
Requires Node.js 18 or newer.

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. In Vercel choose **Add New → Project**, import the repository. Vercel detects Vite (`vercel.json` is included).
3. Under **Environment Variables** add `VITE_FORM_ENDPOINT` (once you have one) and `VITE_SHOW_DRAFT_TAGS=false` for launch.
4. Click **Deploy**. Or from the terminal: `npm i -g vercel && vercel --prod`.

## Folder structure
```
index.html                 SEO meta, Open Graph, JSON-LD
public/                    favicon.svg, robots.txt (put /images here)
src/
  main.jsx  App.jsx  index.css
  config/site.js           Company facts, address, placeholders, feature flags
  data/content.js          All copy, grouped as confirmed / proposed / draft
  hooks/useActiveSection.js
  components/
    layout/                Navbar (mobile menu), Footer
    ui/                    Button, ContentTag, SectionHeading, TiltCard, Logo
    visual/MoleculeField   Animated 3D molecular canvas (hero)
    contact/               ContactForm, MapEmbed
  sections/                Hero, About, Products, VisionMission, Industries, WhyChooseUs, Contact
```

## Before launch checklist
- [ ] Read `CONTENT_NOTES.md` and get the company to confirm vision, mission and industries.
- [ ] Add verified phone and email in `src/config/site.js` (`contact.phone`, `contact.email`).
- [ ] Connect the contact form: set `VITE_FORM_ENDPOINT` (e.g. a Formspree URL).
- [ ] Add real photography to `public/images/` and set `SITE.images.hero` / `SITE.images.about`.
- [ ] Replace the placeholder wordmark in `Logo.jsx` with the official logo.
- [ ] Add `og:image` and a `canonical` link in `index.html` once the domain is known.
- [ ] Set `VITE_SHOW_DRAFT_TAGS=false`.
