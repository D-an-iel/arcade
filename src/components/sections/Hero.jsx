import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start overflow-hidden bg-[#050505] text-white"
    >
      {/* Central Visual Identity: Luminous, Bright Water Flow Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 filter brightness-[1.08] contrast-[1.05] saturate-[1.1]"
        >
          <source src="/videos/arcade-flow.mp4" type="video/mp4" />
        </video>

        {/* Gentle, non-intrusive scrim preserving maximum water brilliance & sunlight glints */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/15 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/25 pointer-events-none" />
      </div>

      {/* Main Content Container - Aligned left matching Figma artboard */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 sm:px-12 md:px-20 lg:px-24 xl:px-28 py-24 md:py-32">
        <div className="max-w-2xl lg:max-w-3xl flex flex-col items-start text-left">
          
          {/* Monumental Headline: Strict Left Flush Alignment */}
          <div className="w-full flex flex-col items-start font-black font-display tracking-tightest leading-[0.93] text-[#FACC15] select-none [text-shadow:0_4px_30px_rgba(0,0,0,0.55)]">
            
            {/* Line 1: We build */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[108px] xl:text-[124px] text-left block"
            >
              We build
            </motion.div>

            {/* Line 2: Websites (with Animated Red Strikethrough) */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-fit text-6xl sm:text-7xl md:text-8xl lg:text-[108px] xl:text-[124px] text-left block my-0.5 sm:my-1"
            >
              <span className="block">Websites</span>
              {/* Vibrant Red Strikethrough Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.55, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: 'left center' }}
                className="absolute left-[-2%] right-[-2%] top-[55%] -translate-y-1/2 h-[7px] sm:h-[9px] md:h-[11px] lg:h-[13px] bg-[#FF2A2A] rounded-full shadow-[0_0_24px_rgba(255,42,42,0.85)] pointer-events-none"
              />
            </motion.div>

            {/* Line 3: Experience */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[108px] xl:text-[124px] text-left block drop-shadow-[0_0_35px_rgba(250,204,21,0.3)]"
            >
              Experience
            </motion.div>
          </div>

          {/* Subtext description - Perfectly flush with headline left boundary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 md:mt-8 space-y-1 text-[#FACC15] text-sm md:text-base lg:text-lg font-medium max-w-xl leading-relaxed text-left [text-shadow:0_2px_15px_rgba(0,0,0,0.6)]"
          >
            <p>
              Founded by young professionals with industry track records, we craft high-impact digital experiences.
            </p>
            <p>
              Engineering websites, products, and brands that leave competition in the dust.
            </p>
          </motion.div>

          {/* Action CTAs - Flush left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 md:mt-10 flex flex-wrap items-center gap-4 text-left"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#FACC15] hover:bg-yellow-300 text-black font-extrabold text-sm tracking-tight shadow-[0_0_35px_rgba(250,204,21,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 group"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-black/45 hover:bg-black/65 text-[#FACC15] border border-[#FACC15]/40 hover:border-[#FACC15] font-bold text-sm tracking-tight backdrop-blur-md transition-all duration-300 group shadow-lg"
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
