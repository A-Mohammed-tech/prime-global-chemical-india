import {
  Factory,
  FlaskConical,
  Fuel,
  Droplets,
  Cpu,
  Boxes,
  Cog,
  Package,
  Sprout,
  Car,
  Building2,
  CircuitBoard,
  Shirt,
  Pill,
  HeartHandshake,
  ShieldCheck,
  Truck,
  Headset,
} from 'lucide-react';

/* ---------- CONFIRMED: taken directly from the uploaded documents ---------- */
export const ABOUT = {
  paragraphs: [
    'Prime Global Chemical India Pvt. Ltd. is a Tamil Nadu based company, started in 2013 to meet the specific demands within the chemical markets.',
    'Since inception, the company has continued to expand its operations and now specialises in the distribution of chemicals to a wide range of requirements within the industrial manufacturing sectors.',
    'Its main strategic goal is to be number one in customer satisfaction.',
  ],
  facts: [
    { label: 'Established', value: '2013' },
    { label: 'Based in', value: 'Chennai, Tamil Nadu' },
    { label: 'Core activity', value: 'Chemical distribution' },
    { label: 'Customers', value: 'Industrial manufacturing sectors' },
    { label: 'Strategic goal', value: 'Customer satisfaction' },
  ],
};

/* ---------- PROPOSED: category names come from the profile; descriptions are neutral and generic ---------- */
export const PRODUCT_CATEGORIES = [
  {
    title: 'Industrial Chemicals',
    icon: Factory,
    text: 'Basic chemicals and their derivatives used across general industrial manufacturing processes.',
  },
  {
    title: 'Specialty Chemicals',
    icon: FlaskConical,
    text: 'Application-specific chemistries for customers with particular formulation or process requirements.',
  },
  {
    title: 'Petrochemicals',
    icon: Fuel,
    text: 'Building-block chemicals derived from gas and crude oil fractions, used in polymers and intermediates.',
  },
  {
    title: 'Base Oils',
    icon: Droplets,
    text: 'Refined oil stocks that serve as the foundation for lubricants and other industrial formulations.',
  },
  {
    title: 'Electronics-Grade Chemicals',
    icon: Cpu,
    text: 'Chemistries for sensitive electronics manufacturing, such as etching, cleaning and stripping steps.',
  },
  {
    title: 'Chemical Raw Materials',
    icon: Boxes,
    text: 'Raw material inputs for manufacturers producing plastics, fibres and other chemical-based goods.',
  },
];

/* ---------- DRAFT: placeholder wording until the company confirms its official statements ---------- */
export const VISION_DRAFT =
  'To be recognised by our customers for outstanding satisfaction in chemical distribution.';

export const MISSION_DRAFT = [
  {
    title: 'Quality, health, safety and environment come first',
    text: 'We aim to give quality, health, safety and environmental care priority across our business activities.',
  },
  {
    title: 'Distribution built around the customer',
    text: 'We work to understand each customer’s requirement and to meet it reliably.',
  },
  {
    title: 'Growth that follows market needs',
    text: 'We aim to widen our product and service offering as customer demand develops.',
  },
];

/* ---------- INDUSTRIES: sectors named in the profile's industry overview; confirm active customer segments ---------- */
export const INDUSTRIES = [
  { title: 'Manufacturing', icon: Cog, text: 'Chemical inputs for general industrial manufacturing.' },
  { title: 'Packaging', icon: Package, text: 'Raw materials behind plastics, films and containers.' },
  { title: 'Agriculture', icon: Sprout, text: 'Chemistries within fertiliser and agricultural value chains.' },
  { title: 'Automotive', icon: Car, text: 'Chemical inputs used across automotive manufacturing.' },
  { title: 'Construction', icon: Building2, text: 'Materials such as piping and building products depend on chemical inputs.' },
  { title: 'Electronics', icon: CircuitBoard, text: 'Etching, cleaning and stripping chemistries for sensitive fabrication.' },
  { title: 'Textiles', icon: Shirt, text: 'Inputs for man-made fibres and textile processing.' },
  { title: 'Pharmaceuticals', icon: Pill, text: 'Chemical inputs for pharmaceutical manufacturing.' },
];

/* ---------- SUGGESTED COPY: no certifications, guarantees, export or leadership claims ---------- */
export const WHY_US = [
  {
    title: 'Customer satisfaction',
    icon: HeartHandshake,
    text: 'It is our stated strategic goal, and it shapes how we plan, respond and follow through.',
  },
  {
    title: 'Quality-conscious operations',
    icon: ShieldCheck,
    text: 'Quality, health, safety and environmental care are core considerations in how we work.',
  },
  {
    title: 'Industrial chemical distribution',
    icon: Truck,
    text: 'A focused distribution business serving a wide range of industrial manufacturing requirements.',
  },
  {
    title: 'Customer-focused service',
    icon: Headset,
    text: 'Clear communication and a good understanding of each customer’s requirement.',
  },
];
