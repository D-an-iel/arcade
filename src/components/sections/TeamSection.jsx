import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { teamData } from '../../data/teamData';
import { TwitterIcon, LinkedinIcon, GithubIcon } from '../common/Icons';

export default function TeamSection() {
  return (
    <section
      id="team"
      className="relative py-36 md:py-44 bg-[#FACC15] text-black overflow-hidden selection:bg-black selection:text-[#FACC15]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header - Editorial Studio Direction */}
        <div className="text-center max-w-3xl mx-auto mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/10 border border-black/15 mb-8"
          >
            <Sparkles className="w-4 h-4 text-black" />
            <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-black">
              The Minds Behind Arcade
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-display tracking-tightest leading-[0.92] text-black mb-8"
          >
            Meet The Team
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl font-normal text-black/85 max-w-2xl mx-auto leading-relaxed"
          >
            Seasoned product architects, creative directors, and systems engineers unified by a relentless obsession with craftsmanship.
          </motion.p>
        </div>

        {/* Studio Editorial Roster Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-[32px] bg-[#0A0A0A] text-white overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-3 flex flex-col justify-between"
            >
              {/* High-Resolution Portrait Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-900">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
                
                {/* Index Pill */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-[#FACC15]">
                  0{index + 1}
                </div>
              </div>

              {/* Editorial Member Meta */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black font-display tracking-tight text-white mb-1 group-hover:text-[#FACC15] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="text-xs font-mono uppercase tracking-widest text-[#FACC15] mb-4">
                    {member.role}
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed font-light line-clamp-3 mb-6">
                    {member.bio}
                  </p>
                </div>

                {/* Social Connect Icons */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                    CONNECT
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${member.name} on Twitter`}
                      className="p-2 rounded-full bg-white/5 hover:bg-[#FACC15] hover:text-black text-zinc-400 transition-colors duration-300"
                    >
                      <TwitterIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="p-2 rounded-full bg-white/5 hover:bg-[#FACC15] hover:text-black text-zinc-400 transition-colors duration-300"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${member.name} on GitHub`}
                      className="p-2 rounded-full bg-white/5 hover:bg-[#FACC15] hover:text-black text-zinc-400 transition-colors duration-300"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
