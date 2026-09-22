import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import ServicesValues from './components/sections/ServicesValues';
import WorkShowcase from './components/sections/WorkShowcase';
import ResponsiveShowcase from './components/sections/ResponsiveShowcase';
import TeamSection from './components/sections/TeamSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';

export default function App() {
  // Initialize Lenis Smooth Scrolling for continuous momentum and flow
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#FACC15] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <ServicesValues />
        <WorkShowcase />
        <ResponsiveShowcase />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
