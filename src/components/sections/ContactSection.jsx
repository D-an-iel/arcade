import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Full-Cycle Product',
    budget: '$50k - $100k',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Full-Cycle Product',
    'Custom Web App',
    'Design System & Brand',
    'Performance & Scale'
  ];

  const budgets = [
    '< $25k',
    '$25k - $50k',
    '$50k - $100k',
    '$100k+'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative py-36 md:py-48 bg-[#050608] text-white overflow-hidden"
    >
      {/* Bringing the Water Story Full Circle: Subtle Ambient Fluid Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-25">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter brightness-50 contrast-125 scale-105"
        >
          <source src="/videos/arcade-flow.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/85 to-[#050608]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left Column: Narrative Full-Circle Climax */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8"
            >
              <Sparkles className="w-4 h-4 text-[#FACC15]" />
              <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-zinc-300">
                Full Circle · Shaping The Flow
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl font-black font-display tracking-tightest leading-[0.95] text-white mb-8"
            >
              Get In Touch With <span className="text-[#FACC15]">Us</span>.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed mb-12"
            >
              From raw concept to unstoppable momentum. Tell us where you want to take your brand, and our architectural leads will help chart the current.
            </motion.p>

            {/* Direct Studio Channels */}
            <div className="space-y-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FACC15]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">Inquiries</div>
                  <a href="mailto:hello@arcade.studio" className="text-lg text-white font-medium hover:text-[#FACC15] transition-colors">
                    hello@arcade.studio
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FACC15]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">Direct Line</div>
                  <a href="tel:+18002722330" className="text-lg text-white font-medium hover:text-[#FACC15] transition-colors">
                    +1 (800) 272-2330
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FACC15]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">Studio Hubs</div>
                  <div className="text-lg text-white font-medium">
                    San Francisco · New York · London
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tactile Editorial Inquiry Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="p-10 md:p-14 rounded-[36px] bg-[#0E0F12]/90 border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)] backdrop-blur-xl relative"
            >
              {isSubmitted ? (
                <div className="py-20 text-center animate-fadeIn">
                  <div className="w-20 h-20 rounded-full bg-[#FACC15]/10 border border-[#FACC15] text-[#FACC15] flex items-center justify-center mx-auto mb-8 shadow-[0_0_35px_rgba(250,204,21,0.2)]">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold font-display text-white mb-3">
                    Inquiry Received
                  </h3>
                  <p className="text-zinc-400 max-w-md mx-auto mb-10 text-base md:text-lg font-light">
                    Thank you for reaching out to Arcade. Our lead architectural strategist will review your requirements and reach out within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors"
                  >
                    Submit Another Brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase font-bold tracking-widest text-zinc-400 mb-2.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Sarah Jenkins"
                        className="w-full px-5 py-4 rounded-2xl bg-black/60 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FACC15] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-bold tracking-widest text-zinc-400 mb-2.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full px-5 py-4 rounded-2xl bg-black/60 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FACC15] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-xs uppercase font-bold tracking-widest text-zinc-400 mb-3">
                      Focus Area
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {services.map((srv) => (
                        <button
                          type="button"
                          key={srv}
                          onClick={() => setFormData({ ...formData, service: srv })}
                          className={`px-3 py-3 rounded-xl text-xs font-semibold tracking-tight transition-all border text-center ${
                            formData.service === srv
                              ? 'bg-[#FACC15] text-black border-[#FACC15] font-bold shadow-[0_0_20px_rgba(250,204,21,0.25)]'
                              : 'bg-black/40 text-zinc-300 border-white/10 hover:border-white/20'
                          }`}
                        >
                          {srv}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="block text-xs uppercase font-bold tracking-widest text-zinc-400 mb-3">
                      Target Investment Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {budgets.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`px-3 py-3 rounded-xl text-xs font-semibold tracking-tight transition-all border text-center ${
                            formData.budget === b
                              ? 'bg-[#FACC15] text-black border-[#FACC15] font-bold shadow-[0_0_20px_rgba(250,204,21,0.25)]'
                              : 'bg-black/40 text-zinc-300 border-white/10 hover:border-white/20'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Details */}
                  <div>
                    <label className="block text-xs uppercase font-bold tracking-widest text-zinc-400 mb-2.5">
                      Project Goals & Context *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your timeline, ambitions, and what makes your vision unique..."
                      className="w-full px-5 py-4 rounded-2xl bg-black/60 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-[#FACC15] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 rounded-2xl bg-[#FACC15] hover:bg-yellow-300 text-black font-extrabold text-base tracking-tight shadow-[0_0_40px_rgba(250,204,21,0.3)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-full border-2 border-black border-t-transparent animate-spin" />
                        <span>Transmitting Brief...</span>
                      </span>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="text-center text-xs text-zinc-500 font-mono">
                    STRICT CONFIDENTIALITY · NON-DISCLOSURE GUARANTEED
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
