import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/tilesData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const item = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-[#F5F0E8] border-b border-[#EBE5DC] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C27D56] font-semibold mb-3">
            <Quote className="w-4 h-4" />
            Architectural Endorsements
          </div>
          <h2 className="font-display-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1B1C20]">
            Trusted by the World's Finest Creators
          </h2>
        </div>

        {/* Testimonial Display Box */}
        <div className="relative bg-white border border-[#EBE5DC] rounded-sm p-8 sm:p-12 md:p-16 shadow-xl">
          
          {/* Subtle Quote Watermark */}
          <div className="absolute top-6 right-8 text-[#EBE5DC] select-none pointer-events-none font-serif-luxury text-8xl opacity-40 leading-none">
            “
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45 }}
              className="space-y-6"
            >
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-[#C27D56]">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Quote Statement */}
              <blockquote className="font-serif-luxury text-xl sm:text-2xl md:text-3xl text-[#1B1C20] italic leading-relaxed font-normal">
                "{item.quote}"
              </blockquote>

              {/* Client Profile */}
              <div className="pt-6 border-t border-[#EBE5DC] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display-luxury text-base sm:text-lg font-bold text-[#1B1C20]">
                      {item.clientName}
                    </span>
                    {item.verified && (
                      <CheckCircle2 className="w-4 h-4 text-[#C27D56]" />
                    )}
                  </div>
                  <div className="text-xs text-[#6E717D] mt-0.5">
                    {item.role} • <span className="text-[#1B1C20]">{item.location}</span>
                  </div>
                </div>

                <div className="px-3 py-1 bg-[#F5F0E8] border border-[#EBE5DC] text-[11px] font-mono uppercase tracking-wider text-[#A85A32] rounded-sm self-start sm:self-auto">
                  Project: {item.projectType}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Arrows */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#EBE5DC]/60">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    currentIndex === idx ? 'w-8 bg-[#C27D56]' : 'w-2 bg-[#D9D0C3]'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev/Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full border border-[#EBE5DC] hover:bg-[#1B1C20] hover:text-white transition-colors"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-full border border-[#EBE5DC] hover:bg-[#1B1C20] hover:text-white transition-colors"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
