import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Flame, Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import { VALUE_PROPOSITIONS } from '../data/tilesData';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles,
  Flame: Flame,
  Compass: Compass
};

export default function WhyChooseUs({ onOpenBookingModal }) {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#F8F5EF] border-b border-[#EDE5D8] relative overflow-hidden">
      {/* Subtle warm glow accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#C9A875]/06 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#B86F52]/05 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B86F52] font-semibold mb-3">
            <span className="w-6 h-[1px] bg-[#B86F52]"></span>
            The Aurelia Standard
          </div>
          <h2 className="font-display-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#34322E] leading-[1.15]">
            Engineering Excellence. <br />
            <span className="font-serif-luxury italic font-normal text-[#B86F52]">
              Uncompromising Architectural Integrity.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#777168] font-light">
            We reject mass-produced mediocrity. Each Aurelia surface is a masterwork of high-compaction Italian engineering, pure natural minerals, and lifelong chemical resistance.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {VALUE_PROPOSITIONS.map((prop, idx) => {
            const IconComponent = iconMap[prop.icon] || ShieldCheck;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#FFFDF9] p-6 sm:p-8 rounded-sm border border-[#EDE5D8] hover:border-[#B86F52]/50 transition-all duration-500 flex flex-col justify-between group shadow-sm hover:shadow-lg hover:-translate-y-1"
              >
                <div>
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-sm bg-[#EDE5D8] text-[#B86F52] flex items-center justify-center mb-6 group-hover:bg-[#B86F52] group-hover:text-[#FFFDF9] transition-colors duration-300 shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <div className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#7B8065] mb-1">
                    {prop.subtitle}
                  </div>

                  <h3 className="font-display-luxury text-xl font-bold text-[#34322E] mb-3 group-hover:text-[#B86F52] transition-colors">
                    {prop.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#777168] leading-relaxed font-light">
                    {prop.description}
                  </p>
                </div>

                {/* Metric Badge */}
                <div className="mt-6 pt-4 border-t border-[#EDE5D8] flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-[#34322E] bg-[#EDE5D8] px-2.5 py-1 rounded-sm border border-[#D9CEBC]">
                    {prop.metric}
                  </span>
                  <span className="text-[#B86F52] opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Showroom Consultation Callout — warm terracotta strip */}
        <div className="mt-12 p-6 sm:p-8 bg-[#B86F52] text-[#FFFDF9] rounded-sm flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          {/* Subtle background decorative line */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          <div className="space-y-1 text-center md:text-left relative z-10">
            <h4 className="font-display-luxury text-xl sm:text-2xl font-bold text-[#FFFDF9]">
              Need Architectural Sizing or Cut-To-Fit Consultation?
            </h4>
            <p className="text-xs sm:text-sm text-[#FFFDF9]/80 font-light">
              Our master stone fabricators and 3D interior stylists assist from initial CAD blueprints to on-site delivery.
            </p>
          </div>

          <button
            onClick={onOpenBookingModal}
            className="shrink-0 px-6 py-3.5 bg-[#FFFDF9] hover:bg-[#EDE5D8] text-[#B86F52] text-xs font-semibold uppercase tracking-widest rounded-sm transition-colors flex items-center gap-2 shadow-lg relative z-10"
          >
            <span>Book Private Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
