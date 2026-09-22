import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass, Code2, Layers, Zap } from 'lucide-react';
import { servicesData } from '../../data/servicesData';

const iconMap = {
  Compass: Compass,
  Code2: Code2,
  Layers: Layers,
  Zap: Zap
};

export default function ServicesValues() {
  return (
    <section
      id="services"
      className="relative py-36 md:py-44 bg-[#FACC15] text-black overflow-hidden selection:bg-black selection:text-[#FACC15]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header - Porsche-inspired Editorial Breathing Room */}
        <div className="mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/10 border border-black/15 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-black" />
            <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-black">
              What We Do Best
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-display tracking-tightest leading-[0.92] lowercase max-w-4xl"
            >
              we deliver results.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl font-normal text-black/85 max-w-md leading-relaxed tracking-tight"
            >
              We eliminate ambiguity. Every wireframe, interaction, and system architecture is engineered for market leadership and undeniable conversion.
            </motion.p>
          </div>
        </div>

        {/* 4 Capabilities Grid - Architectural & Restrained */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Zap;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative p-10 md:p-14 rounded-[32px] bg-[#0A0A0A] text-white border border-black/10 hover:border-black/30 shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Big Architectural Number & Icon */}
                  <div className="flex items-center justify-between mb-10 pb-8 border-b border-white/10">
                    <div className="flex items-baseline gap-4">
                      <span className="text-4xl md:text-5xl font-black font-display text-[#FACC15] tracking-tight">
                        {service.number}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                        Capability
                      </span>
                    </div>

                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:bg-[#FACC15] group-hover:text-black group-hover:border-[#FACC15] transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="text-xs uppercase font-bold tracking-widest text-[#FACC15] mb-3">
                    {service.subtitle}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold font-display tracking-tight text-white mb-5 group-hover:text-[#FACC15] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Narrative Description */}
                  <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                {/* Subtle Editorial Tagline */}
                <div className="pt-8 mt-8 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500 font-mono">
                  <span>SYSTEM ARCHITECTURE</span>
                  <span className="text-zinc-400 group-hover:text-[#FACC15] transition-colors">ESTABLISHED 2026</span>
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
              Next Step · Momentum
            </span>
            <h4 className="text-2xl md:text-4xl font-bold font-display tracking-tight text-white">
              Ready to shape the flow of your industry?
            </h4>
            <p className="text-zinc-400 mt-2 text-base md:text-lg font-light">
              We collaborate with visionary founders to build the next category leaders.
            </p>
          </div>
          <a
            href="#contact"
            className="px-10 py-5 rounded-full bg-[#FACC15] hover:bg-yellow-300 text-black font-extrabold text-base tracking-tight shadow-[0_0_35px_rgba(250,204,21,0.3)] transition-transform duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            Start Your Build
          </a>
        </motion.div>
      </div>
    </section>
  );
}
