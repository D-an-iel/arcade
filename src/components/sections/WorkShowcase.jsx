import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Eye } from 'lucide-react';
import { projectsData, categories } from '../../data/projectsData';
import ProjectModal from '../common/ProjectModal';

export default function WorkShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="portfolio"
      className="relative py-36 md:py-48 bg-[#07090A] text-white overflow-hidden"
    >
      {/* Authentic Vertical Teal Light Pillars Backdrop (Figma Reference) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Fluted Vertical Columns Effect */}
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,rgba(13,59,62,0.15)_1px,transparent_1px)] bg-[size:80px_100%]" />
        
        {/* Ambient Teal Luminescence Beams */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#0D3B3E]/40 via-teal-900/15 to-transparent rounded-full blur-[160px]" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-cyan-950/20 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Major Narrative Moment: The User Pauses Here */}
        <div className="text-center max-w-4xl mx-auto mb-28 md:mb-36">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex flex-col items-center gap-2 mb-8"
          >
            <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-[#FACC15]">
              Designed For Today, Built For What Comes Next
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              Future proof your brand strategy
            </span>
          </motion.div>

          {/* Monumental Commanding 3-Line Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-display tracking-tightest leading-[0.92] text-white"
          >
            Relevant.
            <br />
            Iconic.
            <br />
            <span className="text-[#FACC15] drop-shadow-[0_0_40px_rgba(250,204,21,0.25)]">
              Unstoppable.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto mt-10 leading-relaxed"
          >
            A curated index of production applications, high-conversion design systems, and digital flagships engineered to set industry standards.
          </motion.p>
        </div>

        {/* Minimal Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#FACC15] text-black shadow-[0_0_25px_rgba(250,204,21,0.3)] scale-105'
                  : 'bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid: Editorial Staggered Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer rounded-[32px] bg-[#101214] border border-white/10 hover:border-[#FACC15]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/80">
                <img
                  src={project.heroImage}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Overlay Badge */}
                <div className="absolute top-5 left-5">
                  <span
                    className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-black shadow-md backdrop-blur-sm"
                    style={{ backgroundColor: project.accentColor || '#FACC15' }}
                  >
                    {project.badge}
                  </span>
                </div>

                {/* Hover Preview Reveal */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-5 py-2.5 rounded-full bg-white text-black font-bold text-xs tracking-wider flex items-center gap-2 shadow-2xl">
                    <Eye className="w-4 h-4" />
                    <span>VIEW CASE STUDY</span>
                  </span>
                </div>
              </div>

              {/* Card Metadata & Narrative */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-400 mb-3">
                    <span className="font-semibold text-zinc-300 tracking-wider uppercase">{project.client}</span>
                    <span className="font-mono text-[#FACC15] font-bold">{project.metric}</span>
                  </div>

                  <h3 className="text-2xl font-bold font-display tracking-tight text-white mb-2 group-hover:text-[#FACC15] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 text-sm line-clamp-2 leading-relaxed font-light mb-6">
                    {project.tagline}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-5 border-t border-white/10 flex items-center justify-between text-sm font-semibold">
                  <span className="text-zinc-400 group-hover:text-white transition-colors duration-300">
                    Explore Experience
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#FACC15] group-hover:text-black group-hover:border-[#FACC15] transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Alternate Panoramic Banner from Figma (Desktop - 10 / 12) */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-28 p-10 md:p-16 rounded-[36px] bg-gradient-to-r from-[#0D3B3E]/30 via-[#0A0A0A] to-zinc-950/80 border border-teal-500/25 backdrop-blur-2xl relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 w-96 h-full bg-cyan-400/5 blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 block mb-3">
                Static Dynamic E-Commerce
              </span>
              <h3 className="text-3xl md:text-5xl font-black font-display tracking-tight text-white leading-tight">
                For Every Business, Big Or Small — We Build Websites That Work.
              </h3>
            </div>
            <a
              href="#contact"
              className="px-9 py-4 rounded-full bg-white text-black hover:bg-[#FACC15] font-extrabold text-sm tracking-tight transition-colors duration-300 whitespace-nowrap shadow-2xl"
            >
              Start Your Build
            </a>
          </div>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
