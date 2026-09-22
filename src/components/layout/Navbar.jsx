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

  const chapters = [
    { label: '01 Current', href: '#current' },
    { label: '02 Formation', href: '#formation' },
    { label: '03 Exhibition', href: '#exhibition' },
    { label: '04 Monolith', href: '#monolith' },
    { label: '05 Impact', href: '#statement' },
    { label: '06 Creators', href: '#creators' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? 'py-4 bg-[#030303]/85 backdrop-blur-2xl border-b border-white/5'
            : 'py-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#current"
            className="group flex items-center gap-1 focus:outline-none"
          >
            <span className="text-2xl md:text-3xl font-black font-display tracking-tightest text-white transition-colors duration-500 group-hover:text-[#FACC15]">
              arcade.
            </span>
          </a>

          {/* Minimalist Chapter Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-mono tracking-widest uppercase text-zinc-400">
            {chapters.map((ch) => (
              <a
                key={ch.label}
                href={ch.href}
                className="hover:text-white transition-colors duration-300"
              >
                {ch.label}
              </a>
            ))}
          </nav>

          {/* Minimal Direct CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#invitation"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FACC15] hover:bg-yellow-300 text-black font-extrabold text-xs tracking-tight shadow-[0_0_25px_rgba(250,204,21,0.25)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Initiate</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#FACC15] focus:outline-none"
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Global Cinematic Scroll Progress Bar */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#FACC15] to-teal-400 transition-all duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#030303]/98 backdrop-blur-3xl flex flex-col justify-between p-8 pt-28 lg:hidden animate-fadeIn">
          <div className="flex flex-col gap-6">
            {chapters.map((ch) => (
              <a
                key={ch.label}
                href={ch.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-black font-display text-white hover:text-[#FACC15] transition-colors"
              >
                {ch.label}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10">
            <a
              href="#invitation"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-4 rounded-full bg-[#FACC15] text-black font-extrabold text-center block text-base"
            >
              Initiate Dialogue
            </a>
          </div>
        </div>
      )}
    </>
  );
}
