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
    <section id="why-us" className="py-20 lg:py-28 bg-[#F5F0E8] border-b border-[#EBE5DC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C27D56] font-semibold mb-3">
            <span className="w-6 h-[1px] bg-[#C27D56]"></span>
            The Aurelia Standard
          </div>
          <h2 className="font-display-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1B1C20] leading-[1.15]">
            Engineering Excellence. <br />
            <span className="font-serif-luxury italic font-normal text-[#A85A32]">
              Uncompromising Architectural Integrity.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#6E717D] font-light">
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
                className="bg-[#FBF9F5] p-6 sm:p-8 rounded-sm border border-[#EBE5DC] hover:border-[#C27D56] transition-all duration-500 flex flex-col justify-between group shadow-sm hover:shadow-lg hover:-translate-y-1"
              >
                <div>
                  {/* Icon Container with Animated Border */}
                  <div className="w-12 h-12 rounded-sm bg-[#1B1C20] text-[#EBE5DC] flex items-center justify-center mb-6 group-hover:bg-[#C27D56] group-hover:text-white transition-colors duration-300 shadow-md">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <div className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#C27D56] mb-1">
                    {prop.subtitle}
                  </div>

                  <h3 className="font-display-luxury text-xl font-bold text-[#1B1C20] mb-3 group-hover:text-[#A85A32] transition-colors">
                    {prop.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6E717D] leading-relaxed font-light">
                    {prop.description}
                  </p>
                </div>

                {/* Metric Badge */}
                <div className="mt-6 pt-4 border-t border-[#EBE5DC] flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-[#1B1C20] bg-white px-2.5 py-1 rounded-sm border border-[#EBE5DC]">
                    {prop.metric}
                  </span>
                  <span className="text-[#C27D56] opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Showroom Consultation Callout */}
        <div className="mt-12 p-6 sm:p-8 bg-[#1B1C20] text-white rounded-sm flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-display-luxury text-xl sm:text-2xl font-bold text-white">
              Need Architectural Sizing or Cut-To-Fit Consultation?
            </h4>
            <p className="text-xs sm:text-sm text-[#D9D0C3] font-light">
              Our master stone fabricators and 3D interior stylists assist from initial CAD blueprints to on-site delivery.
            </p>
          </div>

          <button
            onClick={onOpenBookingModal}
            className="shrink-0 px-6 py-3.5 bg-[#C27D56] hover:bg-[#A85A32] text-white text-xs font-semibold uppercase tracking-widest rounded-sm transition-colors flex items-center gap-2 shadow-lg"
          >
            <span>Book Private Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
