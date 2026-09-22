import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function KeynoteDevices() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);
  const floatX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const floatY = useTransform(smoothY, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      id="monolith"
      onMouseMove={handleMouseMove}
      className="relative min-h-[140vh] w-full bg-[#020203] text-white py-36 overflow-hidden flex flex-col justify-between select-none"
    >
      {/* Interactive Cursor Backlight Glow */}
      <motion.div
        style={{
          x: useTransform(smoothX, [-0.5, 0.5], [-200, 200]),
          y: useTransform(smoothY, [-0.5, 0.5], [-150, 150]),
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-gradient-to-r from-teal-500/10 via-[#FACC15]/8 to-cyan-500/10 rounded-full blur-[180px] pointer-events-none"
      />

      {/* Chapter Marker Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 w-full flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold tracking-widest text-[#FACC15] uppercase">
            CHAPTER 04
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
          <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
            THE MONOLITH // MULTI-SURFACE FIDELITY
          </span>
        </div>
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest hidden sm:inline-block">
          CALIBRATED FOR KEYNOTE PRECISION
        </span>
      </div>

      {/* Giant Floating Device Composition in Space */}
      <div className="relative z-10 w-full max-w-6xl mx-auto my-auto py-16 flex items-center justify-center">
        
        {/* Parallax Container with 3D Depth */}
        <motion.div
          style={{
            rotateX,
            rotateY,
            x: floatX,
            y: floatY,
            transformStyle: 'preserve-3d',
            perspective: 2000
          }}
          className="relative w-full max-w-4xl flex items-center justify-center"
        >
          {/* Main Desktop Centerpiece: Apple MacBook Pro */}
          <div className="relative z-20 w-full max-w-3xl lg:max-w-4xl shadow-[0_40px_120px_rgba(0,0,0,0.95)]">
            {/* Screen Bezel */}
            <div className="bg-[#1B1C20] rounded-t-[28px] p-3 md:p-4 border-t border-x border-zinc-700/80 shadow-2xl">
              <div className="flex items-center justify-center mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-black border border-zinc-700 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-teal-500/90" />
                </div>
              </div>

              {/* Display Screen */}
              <div className="bg-[#0A0A0A] rounded-xl overflow-hidden aspect-[16/10] border border-white/5 relative group">
                <img
                  src="/images/showcase-pulse.png"
                  alt="Desktop Retina Display"
                  className="w-full h-full object-cover"
                />
                
                {/* Screen Ambient Specular Sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 px-3 py-1 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-cyan-300">
                  MacBook Pro · 2560 × 1600 P3 Wide Gamut
                </div>
              </div>
            </div>

            {/* Aluminum Base Chassis */}
            <div className="h-4 md:h-5 bg-gradient-to-b from-zinc-700 to-zinc-900 rounded-b-2xl border-x border-b border-zinc-700 shadow-2xl relative flex justify-center">
              <div className="w-36 h-2 bg-zinc-800 rounded-b-lg border-x border-b border-zinc-600/50" />
            </div>
          </div>

          {/* Floating Left Device: iPad Pro Tablet */}
          <motion.div
            style={{
              x: useTransform(smoothX, [-0.5, 0.5], [30, -30]),
              y: useTransform(smoothY, [-0.5, 0.5], [20, -20]),
              z: 60
            }}
            className="hidden md:block absolute -left-16 lg:-left-28 bottom-6 z-30 w-72 lg:w-80 shadow-[0_30px_90px_rgba(0,0,0,0.95)]"
          >
            <div className="bg-[#16171B] rounded-[34px] p-3.5 border border-zinc-700/80 backdrop-blur-md">
              <div className="bg-[#0A0A0A] rounded-[24px] overflow-hidden aspect-[4/3] border border-white/5 relative">
                <img
                  src="/images/showcase-lifestyle.png"
                  alt="iPad Pro"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded bg-black/80 text-[10px] font-mono text-[#FACC15]">
                  iPad Pro Touch
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Right Device: iPhone Handheld */}
          <motion.div
            style={{
              x: useTransform(smoothX, [-0.5, 0.5], [-25, 25]),
              y: useTransform(smoothY, [-0.5, 0.5], [-20, 20]),
              z: 90
            }}
            className="hidden md:block absolute -right-12 lg:-right-20 -bottom-8 z-30 w-56 lg:w-64 shadow-[0_30px_90px_rgba(0,0,0,0.95)]"
          >
            <div className="bg-[#121316] rounded-[44px] p-3 border-2 border-zinc-700/80">
              <div className="w-16 h-3 bg-black rounded-full mx-auto mb-2 border border-zinc-800" />
              <div className="bg-[#0A0A0A] rounded-[32px] overflow-hidden aspect-[9/19] border border-white/5 relative">
                <img
                  src="/images/showcase-brand.png"
                  alt="iPhone 16 Pro"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-center px-2 py-1 rounded bg-black/85 text-[10px] font-mono text-emerald-400">
                  Fluid 120Hz ProMotion
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Grounding Minimalist Title */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 w-full z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-t border-white/5 pt-8">
        <div>
          <h3 className="text-2xl sm:text-3xl font-black font-display text-white tracking-tight">
            Seamless Hardware Convergence.
          </h3>
          <p className="text-zinc-500 text-sm font-light mt-1">
            Engineered mathematically for sub-pixel consistency across all viewports.
          </p>
        </div>
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
          INTERACTIVE MOUSE DEPTH PARALLAX
        </span>
      </div>
    </section>
  );
}
