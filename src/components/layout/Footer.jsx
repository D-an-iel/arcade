import React from 'react';
import { ArrowUp } from 'lucide-react';
import { TwitterIcon, LinkedinIcon, GithubIcon, InstagramIcon } from '../common/Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] text-white border-t border-white/10 pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Top Wordmark & Quick Link Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 pb-16 border-b border-white/10">
          <div>
            <a href="#current" className="inline-flex items-center gap-1.5 group">
              <span className="text-4xl md:text-5xl font-black font-display tracking-tight text-white group-hover:text-[#FACC15] transition-colors">
                arcade
              </span>
              <span className="w-3 h-3 rounded-full bg-[#FACC15] shadow-[0_0_15px_#FACC15]" />
            </a>
            <p className="text-zinc-400 text-sm max-w-sm mt-3 leading-relaxed font-light">
              An elite digital studio crafting iconic brands, high-performance web applications, and digital flagships that shape the flow.
            </p>
          </div>

          {/* Navigation Links - Narrative Chapters */}
          <div className="flex flex-wrap gap-8 text-sm font-semibold text-zinc-300">
            <a href="#current" className="hover:text-[#FACC15] transition-colors">The Current</a>
            <a href="#formation" className="hover:text-[#FACC15] transition-colors">Formation</a>
            <a href="#creation" className="hover:text-[#FACC15] transition-colors">Creation</a>
            <a href="#momentum" className="hover:text-[#FACC15] transition-colors">Momentum</a>
            <a href="#impact" className="hover:text-[#FACC15] transition-colors">Impact</a>
            <a href="#creators" className="hover:text-[#FACC15] transition-colors">Creators</a>
            <a href="#contact" className="hover:text-[#FACC15] transition-colors">Start Flow</a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#FACC15] hover:text-black text-zinc-400 flex items-center justify-center transition-all"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#FACC15] hover:text-black text-zinc-400 flex items-center justify-center transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/D-an-iel/arcade"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#FACC15] hover:text-black text-zinc-400 flex items-center justify-center transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#FACC15] hover:text-black text-zinc-400 flex items-center justify-center transition-all"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Legal & Back to Top Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <div>
            © {new Date().getFullYear()} Arcade Digital Agency. All rights reserved. Shaping the flow.
          </div>

          <div className="flex items-center gap-6">
            <a href="#current" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#current" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-[#FACC15] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
