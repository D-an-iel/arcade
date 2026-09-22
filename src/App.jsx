import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/layout/Navbar';
import HeroFilm from './components/sections/HeroFilm';
import FormationScene from './components/sections/FormationScene';
import ExhibitionGallery from './components/sections/ExhibitionGallery';
import KeynoteDevices from './components/sections/KeynoteDevices';
import StatementWall from './components/sections/StatementWall';
import FoundersEditorial from './components/sections/FoundersEditorial';
import InvitationSection from './components/sections/InvitationSection';
import Footer from './components/layout/Footer';

export default function App() {
  // Initialize Lenis Smooth Scrolling with heavy luxury inertia
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.2,
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
    <div className="min-h-screen bg-[#020203] text-white selection:bg-[#FACC15] selection:text-black">
      <Navbar />
      <main className="relative">
        {/* Chapter 01: The Current (Pure Potential) */}
        <HeroFilm />

        {/* Chapter 02: Formation (Floating Statements / Discovered Architecture) */}
        <FormationScene />

        {/* Chapter 03: The Exhibition (Horizontal Cinematic Museum of Work) */}
        <ExhibitionGallery />

        {/* Chapter 04: The Monolith (Keynote Multi-Device Floating Convergence) */}
        <KeynoteDevices />

        {/* Chapter 05: The Statement Wall (One Monumental Word Per Viewport) */}
        <StatementWall />

        {/* Chapter 06: The Creators (High-Fashion Editorial Magazine Spread) */}
        <FoundersEditorial />

        {/* Chapter 07: The Invitation (Massive Question Dominating the Screen) */}
        <InvitationSection />
      </main>
      <Footer />
    </div>
  );
}
