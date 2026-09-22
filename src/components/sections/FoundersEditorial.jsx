import React from 'react';
import { motion } from 'framer-motion';

export default function FoundersEditorial() {
  return (
    <section
      id="creators"
      className="relative min-h-screen w-full bg-[#040405] text-white py-32 md:py-48 overflow-hidden select-none border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        
        {/* Chapter 06 Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-8 mb-20 md:mb-28">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#FACC15] uppercase">
              CHAPTER 06
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
            <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
              EDITORIAL // THE CREATORS
            </span>
          </div>
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest hidden sm:inline-block">
            LEADERSHIP & ARCHITECTURE
          </span>
        </div>

        {/* Magazine Editorial Spread Layout (No Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Large Editorial Photography */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Main Dominant Portrait */}
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:mx-0 rounded-[28px] overflow-hidden bg-zinc-900 shadow-[0_30px_90px_rgba(0,0,0,0.9)]">
              <img
                src="/images/team-daniel.png"
                alt="Daniel Vance — Founder & Lead Architect"
                className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-xs font-mono uppercase tracking-widest text-[#FACC15] mb-1">
                  FOUNDER & ARCHITECTURAL LEAD
                </div>
                <h3 className="text-3xl font-black font-display tracking-tight text-white">
                  Daniel Vance.
                </h3>
              </div>
            </div>

            {/* Overlapping Secondary Editorial Portrait */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="hidden sm:block absolute -right-6 lg:-right-12 -bottom-10 w-48 md:w-56 aspect-[4/5] rounded-2xl overflow-hidden border-2 border-zinc-800 shadow-[0_20px_60px_rgba(0,0,0,0.95)] z-20"
            >
              <img
                src="/images/team-elena.png"
                alt="Elena Rostova — Design Director"
                className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#FACC15]">
                  DESIGN DIRECTOR
                </div>
                <div className="text-lg font-bold font-display text-white">
                  Elena Rostova
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Colossal Typographic Statement & Founder Quote */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#FACC15] mb-6 block">
              STUDIO PHILOSOPHY
            </span>

            {/* Huge Editorial Quote */}
            <blockquote className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight leading-[1.08] text-white mb-10">
              “We do not engineer for the present. We build the digital monuments that define market gravity for the next decade.”
            </blockquote>

            <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed mb-10">
              Arcade is purposefully structured without corporate account hierarchies. You work directly with the masters of the craft—architects, typographers, and systems engineers obsessed with perfection.
            </p>

            <div className="flex items-center gap-8 pt-8 border-t border-white/10 text-xs font-mono text-zinc-500 uppercase tracking-widest">
              <div>
                <span className="text-white font-bold block text-lg font-display">SAN FRANCISCO</span>
                GLOBAL HQ
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <span className="text-white font-bold block text-lg font-display">LONDON</span>
                EUROPEAN HUB
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
