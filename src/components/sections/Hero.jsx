import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start overflow-hidden bg-[#050505] text-white pt-28 pb-20 md:py-0"
    >
      {/* Central Visual Identity: Water Flow Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 filter brightness-[0.85] contrast-[1.15]"
        >
          <source src="/videos/arcade-flow.mp4" type="video/mp4" />
        </video>

        {/* Subtle Vignette so text is ultra-readable while preserving water highlights */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24 w-full">
        <div className="max-w-3xl">
          {/* Monumental Headline: We build Websites (struck through) Experience */}
          <div className="font-black font-display tracking-tightest leading-[0.92] text-[#FACC15] select-none">
            {/* Line 1: We build */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[115px] xl:text-[130px]"
            >
              We build
            </motion.div>

            {/* Line 2: Websites with animated red strike-through */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative inline-block text-6xl sm:text-7xl md:text-8xl lg:text-[115px] xl:text-[130px] my-1 md:my-2"
            >
              <span>Websites</span>
              {/* Animated Red Strikethrough Bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: 'left center' }}
                className="absolute left-[-2%] right-[-2%] top-[52%] -translate-y-1/2 h-[7px] sm:h-[9px] md:h-[12px] lg:h-[14px] bg-[#EF4444] rounded-full shadow-[0_0_20px_rgba(239,68,68,0.7)] pointer-events-none"
              />
            </motion.div>

            {/* Line 3: Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[115px] xl:text-[130px] drop-shadow-[0_0_40px_rgba(250,204,21,0.25)]"
            >
              Experience
            </motion.div>
          </div>

          {/* Subtext description in yellow typography matching Figma */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 md:mt-10 space-y-1 text-[#FACC15]/85 text-sm md:text-base lg:text-lg font-normal max-w-xl leading-relaxed"
          >
            <p>
              Founded by young professionals with industry track records, we craft high-impact digital experiences.
            </p>
            <p>
              Engineering websites, products, and brands that leave competition in the dust.
            </p>
          </motion.div>

          {/* Minimalist Action Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 md:mt-12 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#FACC15] hover:bg-yellow-300 text-black font-extrabold text-sm tracking-tight shadow-[0_0_35px_rgba(250,204,21,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 group"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-black/40 hover:bg-black/60 text-[#FACC15] border border-[#FACC15]/30 hover:border-[#FACC15] font-bold text-sm tracking-tight backdrop-blur-md transition-all duration-300 group"
            >
              <span>Explore Capabilities</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
