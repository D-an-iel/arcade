import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#home' },
    { label: 'Capabilities', href: '#services' },
    { label: 'Work', href: '#portfolio' },
    { label: 'Systems', href: '#responsive' },
    { label: 'Studio', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 bg-[#050505]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Mark */}
          <a
            href="#home"
            className="group flex items-center gap-1.5 focus:outline-none"
          >
            <span className="text-2xl md:text-3xl font-black font-display tracking-tightest text-white transition-colors duration-300 group-hover:text-[#FACC15]">
              arcade.
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-xs font-medium tracking-wide text-zinc-300 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Direct CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FACC15] hover:bg-yellow-300 text-black font-bold text-xs tracking-tight shadow-[0_0_25px_rgba(250,204,21,0.25)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:text-[#FACC15] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Global Scroll Current Indicator */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#FACC15] to-teal-400 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 md:hidden animate-fadeIn">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-black font-display text-white hover:text-[#FACC15] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10">
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-4 rounded-2xl bg-[#FACC15] text-black font-extrabold text-center block text-base shadow-glow-yellow"
            >
              Start a Project
            </a>
          </div>
        </div>
      )}
    </>
  );
}
