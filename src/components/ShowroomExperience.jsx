import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Clock, MapPin, Sparkles, CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { BRAND_INFO } from '../data/tilesData';

export default function ShowroomExperience({ onOpenBookingModal }) {
  return (
    <section id="showroom" className="py-20 lg:py-28 bg-[#F8F5EF] border-b border-[#EDE5D8] relative overflow-hidden">
      {/* Warm radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#B86F52]/08 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#C9A875]/06 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text & Narrative */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B86F52] font-semibold mb-3">
                <Compass className="w-4 h-4" />
                Physical Showroom Experience
              </div>

              <h2 className="font-display-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#34322E] leading-[1.15]">
                Immerse Yourself in <br />
                <span className="font-serif-luxury italic font-normal text-[#B86F52]">
                  Tactile Architectural Splendor.
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-[#777168] font-light leading-relaxed">
                Experience our 14,000 sq.ft flagship showroom designed by Milanese architects. Inspect full-scale continuous mega-slabs in natural daylight conditions, compare tactile textures, and consult with our master surface engineers.
              </p>
            </div>

            {/* 4 Key Showroom Amenities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Full-Scale Slab Displays",
                  desc: "Over 120 continuous bookmatched slab fixtures up to 160x320 cm."
                },
                {
                  title: "1-on-1 Material Advisors",
                  desc: "Blueprint review, slip-rating analysis, and custom cut specifications."
                },
                {
                  title: "Natural Lighting Simulators",
                  desc: "Adjustable Kelvins to view tile tones under morning, noon & evening light."
                },
                {
                  title: "Complimentary Sample Kit",
                  desc: "Take home curated material boards for client and site review."
                }
              ].map((item, idx) => (
                <div key={idx} className="p-4 bg-[#FFFDF9] border border-[#EDE5D8] rounded-sm hover:border-[#B86F52]/40 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#34322E] uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#B86F52]" />
                    {item.title}
                  </div>
                  <p className="text-xs text-[#777168]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Location & Visiting Hours Box */}
            <div className="p-5 bg-[#EDE5D8] border border-[#D9CEBC] rounded-sm space-y-2 text-xs text-[#34322E]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B86F52] shrink-0 mt-0.5" />
                <span>{BRAND_INFO.address}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#B86F52] shrink-0 mt-0.5" />
                <span>{BRAND_INFO.hours}</span>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={onOpenBookingModal}
                className="px-8 py-4 bg-[#B86F52] hover:bg-[#A55E42] text-[#FFFDF9] text-xs font-semibold uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl"
              >
                <span>Plan Your VIP Showroom Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Visual Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden border border-[#EDE5D8] shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85"
                alt="Aurelia Luxury Showroom"
                className="w-full h-[460px] sm:h-[540px] object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              {/* Warm gradient at bottom — no full dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#34322E]/70 via-transparent to-transparent" />
              
              {/* Floating Showroom Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#FFFDF9]/92 backdrop-blur-md rounded-sm border border-[#EDE5D8] flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#B86F52] font-semibold block">
                    Flagship Gallery
                  </span>
                  <span className="font-display-luxury text-sm font-bold text-[#34322E]">
                    Madison Avenue Architectural District
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-widest text-[#777168] block">
                    Private Valet Parking
                  </span>
                  <span className="text-xs text-[#B86F52] font-semibold">Available</span>
                </div>
              </div>
            </div>

            {/* Decorative champagne gold accent line */}
            <div className="absolute -bottom-3 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#C9A875]/60 to-transparent" />
          </div>

        </div>

      </div>
    </section>
  );
}
