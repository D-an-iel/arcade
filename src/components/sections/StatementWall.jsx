import React from 'react';
import { motion } from 'framer-motion';

export default function StatementWall() {
  const statements = [
    {
      word: 'RELEVANT.',
      sub: 'GROUNDED IN CONTEMPORARY CULTURE',
      color: 'text-white',
      glow: 'from-white/10 to-transparent'
    },
    {
      word: 'ICONIC.',
      sub: 'RECOGNIZED WITHOUT EXPLANATION',
      color: 'text-[#FACC15] drop-shadow-[0_0_90px_rgba(250,204,21,0.35)]',
      glow: 'from-yellow-500/15 to-transparent'
    },
    {
      word: 'UNSTOPPABLE.',
      sub: 'ACCELERATING BEYOND COMPETITION',
      color: 'text-white',
      glow: 'from-teal-500/15 to-transparent'
    }
  ];

  return (
    <section
      id="statement"
      className="relative bg-[#020202] text-white selection:bg-[#FACC15] selection:text-black select-none"
    >
      {/* Chapter Marker Floater */}
      <div className="sticky top-24 z-30 max-w-7xl mx-auto px-6 md:px-16 w-full flex items-center justify-between pointer-events-none">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
          <span className="text-xs font-mono font-bold tracking-widest text-[#FACC15] uppercase">
            CHAPTER 05
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
          <span className="text-xs font-mono tracking-widest text-zinc-300 uppercase">
            THE STATEMENT WALL
          </span>
        </div>
      </div>

      {/* 3 Viewports: One Word Per Viewport Screen */}
      {statements.map((st, index) => (
        <div
          key={st.word}
          className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6 text-center"
        >
          {/* Subtle Ambient Backlight emerging from darkness */}
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[40vh] bg-gradient-to-b ${st.glow} rounded-full blur-[140px] pointer-events-none`}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.88, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* Monumental Word occupying nearly the whole screen */}
            <h2
              className={`text-[17vw] sm:text-[16vw] lg:text-[15vw] font-black font-display tracking-tightest leading-[0.88] uppercase select-none ${st.color}`}
            >
              {st.word}
            </h2>

            {/* Quiet Subtitle beneath the colossal word */}
            <span className="text-xs sm:text-sm font-mono tracking-[0.35em] text-zinc-500 uppercase mt-8 block">
              0{index + 1} // {st.sub}
            </span>
          </motion.div>
        </div>
      ))}
    </section>
  );
}
