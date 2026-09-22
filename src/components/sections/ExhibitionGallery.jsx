import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const exhibits = [
  {
    id: '01',
    title: 'Vitalis',
    category: 'Autonomous Health Intelligence',
    client: 'Vitalis Health Global',
    metric: '+340% User Velocity',
    image: '/images/showcase-health.png',
    curation: 'Sculpted to make clinical data feel weightless, intuitive, and reassuring.'
  },
  {
    id: '02',
    title: 'Kinetix',
    category: 'Brand System in Motion',
    client: 'Kinetix Media Group',
    metric: 'Award Winner 2026',
    image: '/images/showcase-brand.png',
    curation: 'A visceral brand identity establishing undisputed cultural authority.'
  },
  {
    id: '03',
    title: 'Pavithra',
    category: 'Clinical Telemetry Suite',
    client: 'Apollo Health Tech',
    metric: '1.2M Daily Patients',
    image: '/images/showcase-pulse.png',
    curation: 'Precision patient analytics and real-time medical consultation UI.'
  },
  {
    id: '04',
    title: 'SecureSignal',
    category: 'Zero-Trust Cybersecurity Matrix',
    client: 'SignalCore Labs',
    metric: '0.00ms Intercept',
    image: '/images/showcase-security.png',
    curation: 'High-density telemetry visualized with cryptographic clarity.'
  },
  {
    id: '05',
    title: 'Maison',
    category: 'Luxury Haute E-Commerce',
    client: 'Maison Noir Paris',
    metric: '$48M Initial Volume',
    image: '/images/showcase-ecommerce.png',
    curation: 'A bespoke digital flagship redefining digital exclusivity and checkout elegance.'
  }
];

export default function ExhibitionGallery() {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -window.innerWidth * 0.7, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: window.innerWidth * 0.7, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="exhibition"
      className="relative min-h-screen w-full bg-[#030304] text-white py-28 md:py-36 overflow-hidden flex flex-col justify-between"
    >
      {/* Chapter Marker Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 w-full flex items-center justify-between mb-16 md:mb-20">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold tracking-widest text-[#FACC15] uppercase">
            CHAPTER 03
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
          <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
            THE EXHIBITION // PRODUCTION ARCHIVES
          </span>
        </div>

        {/* Gallery Pan Navigation */}
        <div className="flex items-center gap-3">
          <button
            onClick={scrollLeft}
            aria-label="Previous exhibit"
            className="w-12 h-12 rounded-full border border-white/10 hover:border-[#FACC15] bg-white/[0.03] hover:bg-[#FACC15] hover:text-black flex items-center justify-center transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={scrollRight}
            aria-label="Next exhibit"
            className="w-12 h-12 rounded-full border border-white/10 hover:border-[#FACC15] bg-white/[0.03] hover:bg-[#FACC15] hover:text-black flex items-center justify-center transition-all duration-300"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Cinematic Museum Hall (No Cards · Pure Viewport Exhibits) */}
      <div
        ref={containerRef}
        className="flex items-center gap-12 md:gap-20 overflow-x-auto scrollbar-none px-6 md:px-16 w-full cursor-grab active:cursor-grabbing pb-8"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {exhibits.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[85vw] sm:w-[75vw] lg:w-[65vw] xl:w-[58vw] flex flex-col justify-between group"
            style={{ scrollSnapAlign: 'start' }}
          >
            {/* Museum Artifact Image Frame */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A0A0C] rounded-2xl shadow-[0_30px_100px_rgba(0,0,0,0.8)]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover filter brightness-[0.9] group-hover:brightness-105 group-hover:scale-[1.03] transition-all duration-1000 ease-out"
                loading="lazy"
              />

              {/* Museum Exhibit Index Badge */}
              <div className="absolute top-6 left-6 px-3.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono text-[#FACC15]">
                EXHIBIT {item.id} / 05
              </div>

              {/* Verified Metric Stamp */}
              <div className="absolute bottom-6 right-6 px-3.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-xs font-mono text-zinc-300">
                {item.metric}
              </div>
            </div>

            {/* Museum Plaque Description Below Exhibit */}
            <div className="mt-8 flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-t border-white/10 pt-6">
              <div>
                <h3 className="text-4xl md:text-5xl font-black font-display tracking-tight text-white group-hover:text-[#FACC15] transition-colors duration-300">
                  {item.title}.
                </h3>
                <span className="text-xs font-mono uppercase tracking-widest text-[#FACC15] block mt-1">
                  {item.category} · {item.client}
                </span>
              </div>

              <p className="text-zinc-400 text-sm md:text-base font-light max-w-sm leading-relaxed">
                {item.curation}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Museum Sub-indicator */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 w-full pt-8 flex items-center justify-between text-xs font-mono text-zinc-500 uppercase tracking-widest">
        <span>MUSEUM OF CONTEMPORARY DIGITAL COMMERCE</span>
        <span className="hidden sm:inline-block">SCROLL HORIZONTALLY TO EXPLORE</span>
      </div>
    </section>
  );
}
