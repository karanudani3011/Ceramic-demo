import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Compass, ShieldCheck, Sparkles, Building2, Globe } from 'lucide-react';
import { BRAND_INFO } from '../data/tilesData';

function CounterItem({ value, suffix, label, description, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const end = parseInt(value, 10);
    const duration = 2000;
    const increment = Math.ceil(end / (duration / 25));
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div className="flex flex-col p-6 sm:p-8 bg-[#FFFDF9] border border-[#EDE5D8] rounded-sm hover:border-[#B86F52]/50 transition-all duration-500 group shadow-sm hover:shadow-md">
      <div className="flex items-baseline gap-1 font-display-luxury text-4xl sm:text-5xl lg:text-6xl font-bold text-[#B86F52] group-hover:text-[#A55E42] transition-colors">
        <span>{inView ? count : 0}</span>
        <span className="text-[#C9A875] text-3xl sm:text-4xl">{suffix}</span>
      </div>
      <div className="mt-3 text-sm sm:text-base font-semibold tracking-wider text-[#34322E] uppercase font-display-luxury">
        {label}
      </div>
      <p className="mt-1.5 text-xs sm:text-sm text-[#777168] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function TrustStats({ onOpenBookingModal }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      value: "20",
      suffix: "+",
      label: "Years Heritage",
      description: "Pioneering architectural surface curation and Italian porcelain engineering since 2006."
    },
    {
      value: "500",
      suffix: "+",
      label: "Curated Designs",
      description: "From rare Tuscan Calacatta bookmatches to 20mm monolithic outdoor pavers and artisan zellige."
    },
    {
      value: "10000",
      suffix: "+",
      label: "Prestigious Projects",
      description: "Supplied across private penthouses, 5-star hospitality resorts, and monumental commercial hubs."
    },
    {
      value: "45",
      suffix: "+",
      label: "Global Markets",
      description: "Direct white-glove export logistics across Europe, North America, Middle East, and Asia."
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#F8F5EF] border-b border-[#EDE5D8] relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#B86F52]/06 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#C9A875]/08 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading & Introduction Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-16 lg:mb-24">
          
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B86F52] font-semibold mb-3">
              <span className="w-6 h-[1px] bg-[#B86F52]"></span>
              Architectural Excellence
            </div>
            
            <h2 className="font-display-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#34322E] leading-[1.15]">
              Surfaces That Make a <br />
              <span className="font-serif-luxury italic font-normal text-[#B86F52]">
                Definitive Statement.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-4 text-[#777168] text-sm sm:text-base leading-relaxed font-light">
            <p>
              At <strong className="font-semibold text-[#34322E]">AURELIA Tiles &amp; Ceramics</strong>, we believe every architectural space is defined by its foundational planes. We bridge time-honored Mediterranean stonecraft with cutting-edge Italian vitrification to engineer surfaces that outlive trends.
            </p>
            <p>
              Every collection undergoes rigorous caliber selection, zero-porosity testing, and chromatic calibration to deliver ultra-luxury tactile resilience for architects, interior visionaries, and discerning homeowners worldwide.
            </p>
            <div className="pt-2">
              <button 
                onClick={onOpenBookingModal}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#B86F52] hover:text-[#A55E42] transition-colors border-b border-[#B86F52]/40 pb-1"
              >
                <span>Experience Our New York Flagship Showroom</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Animated Count-up Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <CounterItem
              key={idx}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
              inView={inView}
            />
          ))}
        </div>

        {/* Architectural Trust Badges */}
        <div className="mt-16 pt-10 border-t border-[#EDE5D8] flex flex-wrap items-center justify-between gap-6 text-xs text-[#777168]">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#B86F52]" />
            <span>ISO 9001 &amp; CE Certified European Quality Standards</span>
          </div>
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-[#B86F52]" />
            <span>25-Year Architectural Surface Warranty</span>
          </div>
          <div className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-[#B86F52]" />
            <span>Direct Sourcing From Sassuolo &amp; Castellón</span>
          </div>
        </div>

      </div>
    </section>
  );
}
