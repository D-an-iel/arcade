import React from 'react';
import { motion } from 'framer-motion';

export default function FormationScene() {
  const fragments = [
    {
      num: '01',
      title: 'Research.',
      tag: 'DECODING MARKET TRUTH',
      position: 'top-12 left-6 md:left-24',
      align: 'items-start text-left',
      delay: 0.1
    },
    {
      num: '02',
      title: 'Strategy.',
      tag: 'UNASSAILABLE POSITIONING',
      position: 'top-48 right-6 md:right-28',
      align: 'items-end text-right',
      delay: 0.25
    },
    {
      num: '03',
      title: 'Identity.',
      tag: 'THE SENSORY CURRENT',
      position: 'top-[42%] left-1/2 -translate-x-1/2',
      align: 'items-center text-center',
      delay: 0.4
    },
    {
      num: '04',
      title: 'Systems.',
      tag: 'MATHEMATICAL ARCHITECTURE',
      position: 'bottom-48 left-8 md:left-32',
      align: 'items-start text-left',
      delay: 0.55
    },
    {
      num: '05',
      title: 'Motion.',
      tag: 'INERTIA & REACTION',
      position: 'bottom-16 right-8 md:right-32',
      align: 'items-end text-right',
      delay: 0.7
    }
  ];

  return (
    <section
      id="formation"
      className="relative min-h-[160vh] w-full bg-[#050507] text-white overflow-hidden py-32 flex flex-col justify-between select-none"
    >
      {/* Colossal Watermark Word Behind Everything: FORMATION */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[25vw] font-black font-display tracking-tightest text-white/[0.03] uppercase select-none leading-none transform -translate-y-10">
          FORMATION
        </span>
      </div>

      {/* Chapter Marker Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full flex items-center justify-between border-b border-white/5 pb-8">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold tracking-widest text-[#FACC15] uppercase">
            CHAPTER 02
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
          <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
            FORMATION // FRAGMENTS ASSEMBLING
          </span>
        </div>
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest hidden sm:inline-block">
          IDEAS BECOME COHESION
        </span>
      </div>

      {/* Floating Spatial Canvas with Scattered Statements */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex-1 min-h-[110vh] my-12">
        {fragments.map((frag) => (
          <motion.div
            key={frag.title}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 1.2, delay: frag.delay, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute ${frag.position} flex flex-col ${frag.align} max-w-sm`}
          >
            <span className="text-xs font-mono tracking-[0.25em] text-[#FACC15] uppercase mb-2">
              {frag.num} · {frag.tag}
            </span>
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tightest text-white hover:text-[#FACC15] transition-colors duration-500 cursor-default leading-none">
              {frag.title}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Bottom Grounding Narrative Line */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full border-t border-white/5 pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-zinc-500 text-sm font-mono tracking-wider uppercase">
          Disconnected impulses coalesce into an undeniable signature.
        </p>
        <span className="text-xs font-mono text-[#FACC15] uppercase tracking-widest">
          TRANSITIONING TO CREATION →
        </span>
      </div>
    </section>
  );
}
