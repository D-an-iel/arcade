import React from 'react';
import { X, ExternalLink, CheckCircle, ArrowRight, Award } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#121214] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-black/40">
          <div className="flex items-center gap-3">
            <span 
              className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-black"
              style={{ backgroundColor: project.accentColor || '#FACC15' }}
            >
              {project.badge}
            </span>
            <span className="text-sm text-zinc-400 font-medium">
              Client: {project.client}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-6">
          {/* Main Showcase Image */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
            <img
              src={project.heroImage}
              alt={project.alt}
              className="w-full h-auto object-cover max-h-[480px]"
            />
            <div className="absolute top-4 right-4 px-4 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-xs font-bold text-yellow-400 flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>{project.metric}</span>
            </div>
          </div>

          {/* Project Title & Tagline */}
          <div>
            <h3 className="text-2xl md:text-4xl font-extrabold font-display tracking-tight text-white mb-2">
              {project.title}
            </h3>
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Key Deliverables & Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
              <h4 className="text-xs uppercase font-bold tracking-wider text-zinc-400 mb-3">
                Key Deliverables
              </h4>
              <ul className="space-y-2">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-zinc-200">
                    <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col justify-between">
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-zinc-400 mb-2">
                  Impact Metric
                </h4>
                <div className="text-2xl font-black font-display text-yellow-400">
                  {project.metric}
                </div>
                <p className="text-xs text-zinc-400 mt-1">
                  Verified production telemetry measured post deployment.
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-zinc-500">Category: {project.category}</span>
                <a
                  href="#contact"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  <span>Inquire about similar build</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/10 bg-black/40">
          <span className="text-xs text-zinc-500">Arcade Production Studio Case Study</span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}
