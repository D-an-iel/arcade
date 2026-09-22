import React from 'react';
import { ArrowUp } from 'lucide-react';
import { TwitterIcon, LinkedinIcon, GithubIcon, InstagramIcon } from '../common/Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020202] text-white border-t border-white/5 pt-20 pb-12 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        
        {/* Top Wordmark & Minimalist Navigation */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 pb-16 border-b border-white/5">
          <div>
            <a href="#current" className="inline-flex items-center gap-1.5 group">
              <span className="text-3xl md:text-4xl font-black font-display tracking-tight text-white group-hover:text-[#FACC15] transition-colors duration-300">
                arcade
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#FACC15] shadow-[0_0_15px_#FACC15]" />
            </a>
            <p className="text-zinc-500 text-sm max-w-sm mt-3 font-light leading-relaxed">
              An interactive digital film and flagship studio crafting category kings through motion, momentum, and undeniable gravity.
            </p>
          </div>

          {/* Chapter Links */}
          <div className="flex flex-wrap gap-8 text-xs font-mono tracking-widest uppercase text-zinc-400">
            <a href="#current" className="hover:text-[#FACC15] transition-colors">01 Current</a>
            <a href="#formation" className="hover:text-[#FACC15] transition-colors">02 Formation</a>
            <a href="#exhibition" className="hover:text-[#FACC15] transition-colors">03 Exhibition</a>
            <a href="#monolith" className="hover:text-[#FACC15] transition-colors">04 Monolith</a>
            <a href="#statement" className="hover:text-[#FACC15] transition-colors">05 Statement</a>
            <a href="#creators" className="hover:text-[#FACC15] transition-colors">06 Creators</a>
          </div>

          {/* Quiet Social Links */}
          <div className="flex items-center gap-2">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="w-9 h-9 rounded-full bg-white/[0.03] hover:bg-[#FACC15] hover:text-black text-zinc-500 flex items-center justify-center transition-all duration-300"
            >
              <TwitterIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-white/[0.03] hover:bg-[#FACC15] hover:text-black text-zinc-500 flex items-center justify-center transition-all duration-300"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/D-an-iel/arcade"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-full bg-white/[0.03] hover:bg-[#FACC15] hover:text-black text-zinc-500 flex items-center justify-center transition-all duration-300"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/[0.03] hover:bg-[#FACC15] hover:text-black text-zinc-500 flex items-center justify-center transition-all duration-300"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-600">
          <div>
            © {new Date().getFullYear()} ARCADE DIGITAL STUDIO. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] hover:bg-white/10 text-zinc-400 hover:text-[#FACC15] transition-colors"
            >
              <span>RETURN TO CURRENT</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
