import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle, Mail } from 'lucide-react';

export default function InvitationSection() {
  const [email, setEmail] = useState('');
  const [brief, setBrief] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1000);
  };

  return (
    <section
      id="invitation"
      className="relative min-h-screen w-full bg-[#030304] text-white py-36 md:py-48 overflow-hidden flex flex-col justify-between select-none"
    >
      {/* Living Atmospheric Water Video Layer Bringing Experience Full Circle */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.2] scale-105"
        >
          <source src="/videos/arcade-flow.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030304] via-[#030304]/80 to-[#030304]" />
      </div>

      {/* Chapter Marker Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full flex items-center justify-between mb-16">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold tracking-widest text-[#FACC15] uppercase">
            CHAPTER 07
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
          <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
            THE INVITATION // FULL CIRCLE
          </span>
        </div>
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest hidden sm:inline-block">
          MOMENTUM NEVER STOPS
        </span>
      </div>

      {/* Massive Monumental Invitation: The Hero of the Screen */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full my-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start leading-[0.88] tracking-tightest font-black font-display"
        >
          <span className="text-[12vw] sm:text-[11vw] lg:text-[9.5vw] text-white block uppercase">
            READY TO BUILD
          </span>
          <span className="text-[12vw] sm:text-[11vw] lg:text-[9.5vw] text-[#FACC15] block uppercase drop-shadow-[0_0_80px_rgba(250,204,21,0.3)]">
            SOMETHING
          </span>
          <span className="text-[12vw] sm:text-[11vw] lg:text-[9.5vw] text-white block uppercase">
            UNFORGETTABLE?
          </span>
        </motion.div>

        {/* Secondary Luxury Invitation Interaction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 md:mt-24 max-w-3xl pt-12 border-t border-white/10"
        >
          {isSent ? (
            <div className="py-8 flex items-center gap-4 text-[#FACC15]">
              <CheckCircle className="w-8 h-8" />
              <div>
                <h4 className="text-2xl font-bold font-display text-white">Transmission Received.</h4>
                <p className="text-zinc-400 text-sm font-light mt-1">Our architectural lead will reach out to chart the current.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email..."
                className="flex-1 px-8 py-5 rounded-full bg-white/[0.04] border border-white/15 text-white placeholder-zinc-500 focus:outline-none focus:border-[#FACC15] text-base font-light transition-all backdrop-blur-md"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-10 py-5 rounded-full bg-[#FACC15] hover:bg-yellow-300 text-black font-extrabold text-base tracking-tight shadow-[0_0_40px_rgba(250,204,21,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 whitespace-nowrap"
              >
                <span>Initiate Dialogue</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </form>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-8 text-xs font-mono text-zinc-500 uppercase tracking-widest">
            <a href="mailto:hello@arcade.studio" className="hover:text-[#FACC15] transition-colors flex items-center gap-2">
              <Mail className="w-3.5 h-3.5" />
              HELLO@ARCADE.STUDIO
            </a>
            <span>DIRECT ENGAGEMENT · STRICT CONFIDENTIALITY</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Grounding Line */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full pt-12 flex items-center justify-between text-xs font-mono text-zinc-600 uppercase tracking-widest">
        <span>ARCADE DIGITAL STUDIO · SHAPING THE FLOW</span>
        <span>© 2026</span>
      </div>
    </section>
  );
}
