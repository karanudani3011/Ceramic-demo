import React from 'react';
import { ArrowRight, PhoneCall, Sparkles, Compass } from 'lucide-react';
import { BRAND_INFO } from '../data/tilesData';

export default function CallToAction({ onOpenQuoteModal, onOpenBookingModal }) {
  return (
    <section className="relative py-24 lg:py-32 bg-[#F8F5EF] text-[#34322E] overflow-hidden">
      {/* Background High-res Architectural Interior */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-25"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=85')` }}
      />
      
      {/* Warm soft overlay — NOT black */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F8F5EF]/95 via-[#F8F5EF]/85 to-[#EDE5D8]/75" />
      <div className="absolute inset-0 bg-radial-luxury pointer-events-none" />

      {/* Subtle decorative thin champagne lines */}
      <div className="absolute top-12 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A875]/30 to-transparent pointer-events-none" />
      <div className="absolute bottom-12 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A875]/30 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFDF9]/90 backdrop-blur-md border border-[#C9A875]/40 text-[#B86F52] text-xs uppercase tracking-[0.25em] font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A875]" />
          Direct Architectural Supply &amp; Fabrication
        </div>

        {/* Heading */}
        <h2 className="font-display-luxury text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#34322E] mb-6 leading-[1.1]">
          Let's Create Your <br className="hidden sm:block" />
          <span className="font-serif-luxury italic font-normal text-[#B86F52]">
            Perfect Architectural Space.
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-[#777168] font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Discover surfaces designed to elevate every corner of your home, villa, or commercial development. Request complimentary material samples or discuss your blueprint with our concierge.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href="#collections"
            onClick={(e) => {
              e.preventDefault();
              const elem = document.querySelector('#collections');
              if (elem) elem.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-4 bg-[#B86F52] hover:bg-[#A55E42] text-[#FFFDF9] text-xs sm:text-sm font-semibold tracking-widest uppercase rounded-sm transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 hover:scale-[1.02]"
          >
            <span>Explore Collections</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto px-8 py-4 bg-[#FFFDF9]/80 hover:bg-[#FFFDF9] backdrop-blur-md text-[#34322E] border border-[#C9A875]/50 text-xs sm:text-sm font-semibold tracking-widest uppercase rounded-sm transition-all duration-300 flex items-center justify-center gap-2 hover:border-[#B86F52]/60"
          >
            <span>Calculate Project Quote</span>
          </button>

          <button
            onClick={onOpenBookingModal}
            className="w-full sm:w-auto px-6 py-4 text-[#777168] hover:text-[#B86F52] text-xs sm:text-sm font-medium uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-[#B86F52]" />
            <span>Book Showroom Tour</span>
          </button>
        </div>

        {/* Direct Phone Support */}
        <div className="mt-12 pt-8 border-t border-[#C9A875]/25 text-xs text-[#777168] flex items-center justify-center gap-2">
          <span>Speak directly with a Master Material Specialist:</span>
          <a href="tel:+18007428735" className="text-[#34322E] font-semibold hover:text-[#B86F52] transition-colors">
            {BRAND_INFO.phone}
          </a>
        </div>

      </div>
    </section>
  );
}
