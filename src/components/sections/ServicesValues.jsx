import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const growthForces = [
  {
    number: '01',
    vector: 'Strategic Positioning',
    headline: 'Carving Market Dominance',
    description: 'We dismantle industry clichés to define an unassailable value proposition. Identity systems engineered to command immediate premium perception and eliminate competing alternatives.',
    metric: 'Command Perception'
  },
  {
    number: '02',
    vector: 'Digital Engineering',
    headline: 'Flawless Systems Architecture',
    description: 'Bespoke web applications built with sub-second response times, zero layout shifts, and edge scalability. We treat code as an invisible asset that drives undeniable business velocity.',
    metric: 'Sub-Second Latency'
  },
  {
    number: '03',
    vector: 'Product UI/UX & Sensory Design',
    headline: 'Addictive Tactile Intuition',
    description: 'Micro-interactions, haptic pacing, and fluid navigation that turn casual visitors into passionate brand disciples. User experiences so refined they feel weightless.',
    metric: 'Zero-Friction Retention'
  },
  {
    number: '04',
    vector: 'Conversion Velocity',
    headline: 'Relentless Commercial Momentum',
    description: 'Every interaction point is calibrated for measurable conversion, organic referral velocity, and exponential growth. We build digital assets that do not just look iconic—they compound revenue.',
    metric: 'Exponential Compounding'
  }
];

export default function ServicesValues() {
  const [activeForce, setActiveForce] = useState(0);

  return (
    <section
      id="momentum"
      className="relative py-36 md:py-48 bg-[#FACC15] text-black overflow-hidden selection:bg-black selection:text-[#FACC15]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        
        {/* Chapter 04 Header */}
        <div className="mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/10 border border-black/15 mb-8"
          >
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-black">
              Chapter 04
            </span>
            <span className="w-1 h-1 rounded-full bg-black/40" />
            <span className="text-xs font-bold tracking-widest uppercase text-black">
              Momentum · Forces of Growth
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-display tracking-tightest leading-[0.92] lowercase max-w-4xl"
            >
              we deliver results.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl font-normal text-black/85 max-w-md leading-relaxed tracking-tight"
            >
              Not isolated services, but compounding kinetic forces engineered to propel an ambitious brand past the threshold of competition.
            </motion.p>
          </div>
        </div>

        {/* Continuous Flow of Forces (Not Cards — Architectural Bands) */}
        <div className="border-t-2 border-black/20">
          {growthForces.map((force, index) => {
            const isSelected = activeForce === index;
            return (
              <motion.div
                key={force.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setActiveForce(index)}
                className={`group py-12 md:py-16 border-b border-black/20 transition-all duration-500 cursor-pointer ${
                  isSelected ? 'bg-black/[0.03]' : ''
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Force Number & Vector Name */}
                  <div className="lg:col-span-4 flex items-baseline gap-6">
                    <span className="text-4xl md:text-5xl font-black font-display tracking-tightest text-black/40 group-hover:text-black transition-colors duration-300">
                      {force.number}
                    </span>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-widest text-black/60 mb-1">
                        Force Vector
                      </div>
                      <h3 className="text-2xl md:text-3xl font-extrabold font-display tracking-tight text-black">
                        {force.vector}
                      </h3>
                    </div>
                  </div>

                  {/* Headline & Narrative Action */}
                  <div className="lg:col-span-6">
                    <div className="text-xl md:text-2xl font-bold font-display text-black mb-3 group-hover:translate-x-1 transition-transform duration-300">
                      {force.headline}
                    </div>
                    <p className="text-black/75 text-base md:text-lg leading-relaxed font-normal">
                      {force.description}
                    </p>
                  </div>

                  {/* Metric Tag & Arrow Reveal */}
                  <div className="lg:col-span-2 flex items-center justify-between lg:justify-end gap-4 pt-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-black/70 px-3 py-1 rounded-full bg-black/10">
                      {force.metric}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-black group-hover:text-[#FACC15] group-hover:border-black transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Narrative Strategic Transition Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 md:mt-28 p-10 md:p-14 rounded-[36px] bg-[#0A0A0A] text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl border border-white/5"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#FACC15] block mb-2">
              Next Stage · The Climax
            </span>
            <h4 className="text-2xl md:text-4xl font-bold font-display tracking-tight text-white">
              From continuous momentum to undeniable impact.
            </h4>
            <p className="text-zinc-400 mt-2 text-base md:text-lg font-light">
              Witness the digital flagships sculpted by Arcade.
            </p>
          </div>
          <a
            href="#impact"
            className="px-10 py-5 rounded-full bg-[#FACC15] hover:bg-yellow-300 text-black font-extrabold text-base tracking-tight shadow-[0_0_35px_rgba(250,204,21,0.3)] transition-transform duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            Witness the Impact
          </a>
        </motion.div>

      </div>
    </section>
  );
}
