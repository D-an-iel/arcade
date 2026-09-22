import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles } from 'lucide-react';

export default function AboutSection() {
  return (
    <section
      id="formation"
      className="relative py-36 md:py-48 bg-[#07080A] text-white overflow-hidden border-t border-white/5"
    >
      {/* Organic Ambient Underglow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-teal-950/20 to-yellow-500/5 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        
        {/* Chapter 02 Header */}
        <div className="mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8"
          >
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#FACC15]">
              Chapter 02
            </span>
            <span className="w-1 h-1 rounded-full bg-zinc-600" />
            <span className="text-xs font-medium tracking-wider uppercase text-zinc-300">
              Formation
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display tracking-tightest leading-[1.02] text-white mb-8">
                Ideas begin taking shape when ambition meets{' '}
                <span className="text-[#FACC15]">craftsmanship</span>.
              </h2>

              <p className="text-lg md:text-xl lg:text-2xl text-zinc-300/85 font-light leading-relaxed mb-8">
                Nothing is born fully formed. Before an experience can dominate an industry, it requires rigorous discovery, architectural discipline, and ruthless refinement.
              </p>

              <p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed">
                Founded by young industry veterans with proven track records across global digital flagships, Arcade eliminates the friction between raw ambition and undisputed category leadership.
              </p>
            </motion.div>

            {/* Editorial Discovery Vignettes */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="p-8 rounded-[28px] bg-white/[0.02] border border-white/10 backdrop-blur-sm relative overflow-hidden group hover:border-[#FACC15]/40 transition-colors duration-500">
                <div className="text-xs font-mono uppercase tracking-widest text-[#FACC15] mb-2">
                  Discovery Phase
                </div>
                <h3 className="text-xl font-bold font-display text-white mb-2">
                  Uncovering Core Resonance
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  We dismantle market noise to reveal the singular narrative current that separates category kings from generic competitors.
                </p>
              </div>

              <div className="p-8 rounded-[28px] bg-white/[0.02] border border-white/10 backdrop-blur-sm relative overflow-hidden group hover:border-[#FACC15]/40 transition-colors duration-500">
                <div className="text-xs font-mono uppercase tracking-widest text-[#FACC15] mb-2">
                  Architectural Blueprint
                </div>
                <h3 className="text-xl font-bold font-display text-white mb-2">
                  Engineering the Foundations
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  Mathematical grid systems, responsive kinetic curves, and sub-second edge runtimes calibrated before the first pixel is rendered.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
