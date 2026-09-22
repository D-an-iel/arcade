import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  const videoRef = useRef(null);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] text-white pt-24 pb-16"
    >
      {/* Central Identity: Looping Water Flow Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60 scale-105 filter brightness-[0.75] contrast-[1.1] transition-transform duration-1000"
        >
          <source src="/videos/arcade-flow.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Vignette & Liquid Blend Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/70 via-transparent to-[#050505]/70 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-black/80 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center flex flex-col items-center justify-center">
        {/* Subtle Identity Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
          <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-zinc-300">
            Shaping the Flow · Digital Agency & Product Studio
          </span>
        </motion.div>

        {/* Monumental Cinematic Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-display tracking-tightest text-white leading-[0.98] max-w-5xl mx-auto mb-8"
        >
          We build brands that{' '}
          <span className="text-yellow-400 inline-block drop-shadow-[0_0_35px_rgba(250,204,21,0.25)]">
            dominate.
          </span>
        </motion.h1>

        {/* Narrative Pitch - Editorial Pacing */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl lg:text-2xl text-zinc-300/90 font-light max-w-3xl mx-auto leading-relaxed mb-12 tracking-wide"
        >
          Founded by young professionals with industry track records, we craft high-impact digital experiences, custom web applications, and iconic brands that leave competition in the dust.
        </motion.p>

        {/* Confident Minimal CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold text-base tracking-tight shadow-[0_0_40px_rgba(250,204,21,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 group"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/[0.05] hover:bg-white/[0.12] text-white border border-white/15 hover:border-white/30 font-semibold text-base tracking-tight backdrop-blur-md transition-all duration-300 group"
          >
            <span>Discover the Current</span>
            <ArrowDown className="w-4 h-4 text-zinc-400 group-hover:text-yellow-400 group-hover:translate-y-1 transition-all" />
          </a>
        </motion.div>
      </div>

      {/* Fluid Bottom Transition Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-yellow-400 via-transparent to-transparent pointer-events-none opacity-0" />
    </section>
  );
}
