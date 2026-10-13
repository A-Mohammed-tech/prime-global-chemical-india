import { MotionConfig } from 'framer-motion';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Products from './sections/Products.jsx';
import VisionMission from './sections/VisionMission.jsx';
import Industries from './sections/Industries.jsx';
import WhyChooseUs from './sections/WhyChooseUs.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  return (
    // "user" makes every framer-motion animation respect the visitor's reduced-motion setting.
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-navy-900"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Products />
        <VisionMission />
        <Industries />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
