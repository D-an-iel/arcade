import React from 'react';
import { motion } from 'framer-motion';

export default function HeroFilm() {
  return (
    <section
      id="current"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#030303] text-white px-6 md:px-16 lg:px-24 pt-32 pb-16 select-none"
    >
      {/* Living Atmospheric Water Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-110 filter brightness-[0.95] contrast-[1.15] saturate-[1.1] opacity-75"
        >
          <source src="/videos/arcade-flow.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Film Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/70 via-transparent to-[#030303] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030303]/60 via-transparent to-[#030303]/40 pointer-events-none" />
      </div>

      {/* Top Film Meta */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex items-center justify-between text-xs font-mono tracking-[0.3em] uppercase text-zinc-400"
      >
        <span>CHAPTER 01 // PURE POTENTIAL</span>
        <span className="hidden sm:inline-block">DIGITAL FLAGSHIP STUDIO · 2026</span>
      </motion.div>

      {/* Massive Typography Dominating The Screen */}
      <div className="relative z-10 my-auto py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start leading-[0.88] tracking-tightest font-black font-display"
        >
          <motion.span
            initial={{ y: '60%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[14vw] sm:text-[13vw] lg:text-[11.5vw] text-white block uppercase"
          >
            WE CREATE
          </motion.span>

          <motion.span
            initial={{ y: '60%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-[14vw] sm:text-[13vw] lg:text-[11.5vw] text-[#FACC15] block uppercase drop-shadow-[0_0_80px_rgba(250,204,21,0.35)]"
          >
            MOMENTUM
          </motion.span>

          <motion.span
            initial={{ y: '60%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-[14vw] sm:text-[13vw] lg:text-[11.5vw] text-zinc-300 block uppercase"
          >
            FOR BRANDS.
          </motion.span>
        </motion.div>
      </div>

      {/* Bottom Quiet Coordinates & Kinetic Flow Trigger */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-t border-white/10 pt-8"
      >
        <div className="max-w-md">
          <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed">
            We shape raw ambition into indelible digital gravity. Built for category leaders who refuse to be ignored.
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-[#FACC15] animate-ping" />
          <span className="tracking-widest uppercase">SCROLL TO WITNESS FORMATION</span>
        </div>
      </motion.div>
    </section>
  );
}
