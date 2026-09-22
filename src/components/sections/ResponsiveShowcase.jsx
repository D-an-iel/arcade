import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, Layers, ShieldCheck } from 'lucide-react';

export default function ResponsiveShowcase() {
  return (
    <section
      id="creation"
      className="relative py-36 md:py-48 bg-[#050608] text-white overflow-hidden"
    >
      {/* Ambient Lighting & Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-r from-teal-900/15 via-[#FACC15]/5 to-cyan-900/15 rounded-full blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header: Chapter 03 · Creation */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8"
          >
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#FACC15]">
              Chapter 03
            </span>
            <span className="w-1 h-1 rounded-full bg-zinc-600" />
            <span className="text-xs font-semibold tracking-widest uppercase text-zinc-300">
              Creation · From Concept to Reality
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tightest leading-[0.98] text-white mb-8"
          >
            Design that Serves{' '}
            <span className="text-[#FACC15]">All Screens</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed"
          >
            This is where concepts solidify into living, high-conversion products. Scaled, stress-tested, and sculpted across desktop monitors, tablets, and handheld devices.
          </motion.p>
        </div>

        {/* Faithful Figma Multi-Device Composition with Layered Depth & Parallax */}
        <div className="relative max-w-5xl mx-auto py-12">
          {/* Main Desktop Centerpiece: Sleek Apple MacBook Pro Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 mx-auto max-w-3xl lg:max-w-4xl shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
          >
            {/* Screen Bezel */}
            <div className="bg-[#1C1D21] rounded-t-[28px] p-3 md:p-4 border-t border-x border-zinc-700/80 shadow-2xl">
              <div className="flex items-center justify-center mb-2">
                <div className="w-3 h-3 rounded-full bg-black border border-zinc-700 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-teal-500/80" />
                </div>
              </div>

              {/* High-Resolution Screen Display */}
              <div className="bg-[#0A0A0A] rounded-xl overflow-hidden aspect-[16/10] border border-white/5 relative group">
                <img
                  src="/images/showcase-pulse.png"
                  alt="MacBook Pro Interface Showcase"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                
                {/* Live Resolution Stamp */}
                <div className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-xs font-mono text-cyan-300">
                  MacBook Pro · 2560 × 1600 Retina ProMotion
                </div>
              </div>
            </div>

            {/* Aluminum Base Chassis */}
            <div className="h-4 md:h-5 bg-gradient-to-b from-zinc-700 to-zinc-900 rounded-b-2xl border-x border-b border-zinc-700 shadow-2xl relative flex justify-center">
              <div className="w-36 h-2 bg-zinc-800 rounded-b-lg border-x border-b border-zinc-600/50" />
            </div>
          </motion.div>

          {/* Layered Floating Device: Tablet Viewport (Left Tilt Parallax) */}
          <motion.div
            initial={{ opacity: 0, x: -60, y: 40 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:block absolute -left-12 lg:-left-20 bottom-10 z-20 w-72 lg:w-80 shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
          >
            <div className="bg-[#18191D] rounded-[32px] p-3.5 border border-zinc-700/80 backdrop-blur-md">
              <div className="bg-[#0A0A0A] rounded-[24px] overflow-hidden aspect-[4/3] border border-white/5 relative">
                <img
                  src="/images/showcase-lifestyle.png"
                  alt="iPad Tablet Interface"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded bg-black/80 text-[10px] font-mono text-[#FACC15]">
                  iPad Pro Touch
                </div>
              </div>
            </div>
          </motion.div>

          {/* Layered Floating Device: Smartphone in Hand / Handheld (Right Tilt Parallax) */}
          <motion.div
            initial={{ opacity: 0, x: 60, y: 40 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:block absolute -right-8 lg:-right-16 -bottom-6 z-20 w-56 lg:w-64 shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
          >
            <div className="bg-[#121316] rounded-[42px] p-3 border-2 border-zinc-700/80">
              <div className="w-16 h-3.5 bg-black rounded-full mx-auto mb-2 border border-zinc-800" />
              <div className="bg-[#0A0A0A] rounded-[32px] overflow-hidden aspect-[9/19] border border-white/5 relative">
                <img
                  src="/images/showcase-brand.png"
                  alt="Mobile iPhone Handheld"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-center px-2 py-1 rounded bg-black/85 text-[10px] font-mono text-emerald-400">
                  Fluid 120Hz Breakpoint
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3 Core Architecture Standards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 rounded-[28px] bg-white/[0.02] border border-white/5 flex items-start gap-5 hover:border-white/15 transition-colors"
          >
            <div className="p-3.5 rounded-2xl bg-[#FACC15]/10 text-[#FACC15]">
              <Gauge className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold font-display text-white mb-2">Zero Layout Shift</h4>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                Every layout is rendered with rigorous aspect ratio bounding boxes, guaranteeing 0.00 CLS across all dynamic viewports.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 rounded-[28px] bg-white/[0.02] border border-white/5 flex items-start gap-5 hover:border-white/15 transition-colors"
          >
            <div className="p-3.5 rounded-2xl bg-cyan-400/10 text-cyan-400">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold font-display text-white mb-2">Touch Adaptive</h4>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                Haptic scroll boundaries, 48px minimum touch targets, and natural gesture responses engineered for mobile dominance.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 rounded-[28px] bg-white/[0.02] border border-white/5 flex items-start gap-5 hover:border-white/15 transition-colors"
          >
            <div className="p-3.5 rounded-2xl bg-emerald-400/10 text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold font-display text-white mb-2">Edge Optimized</h4>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                Sub-second initial paint times with globally distributed edge hydration and pre-compiled asset bundles.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
