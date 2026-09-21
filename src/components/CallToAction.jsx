import React from 'react';
import { ArrowRight, PhoneCall, Sparkles, Compass } from 'lucide-react';
import { BRAND_INFO } from '../data/tilesData';

export default function CallToAction({ onOpenQuoteModal, onOpenBookingModal }) {
  return (
    <section className="relative py-24 lg:py-32 bg-[#121316] text-[#FBF9F5] overflow-hidden">
      {/* Background High-res Architectural Interior */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-35"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=85')` }}
      />
      
      {/* Dark Luxury Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#121316] via-[#121316]/90 to-[#121316]/80" />
      <div className="absolute inset-0 bg-radial-luxury pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#DFBD69] text-xs uppercase tracking-[0.25em] font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#C27D56]" />
          Direct Architectural Supply & Fabrication
        </div>

        {/* Heading */}
        <h2 className="font-display-luxury text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
          Let's Create Your <br className="hidden sm:block" />
          <span className="font-serif-luxury italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#DFBD69] via-[#C27D56] to-[#E5A882]">
            Perfect Architectural Space.
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-[#D9D0C3] font-light max-w-2xl mx-auto mb-10 leading-relaxed">
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
            className="w-full sm:w-auto px-8 py-4 bg-[#C27D56] hover:bg-[#A85A32] text-white text-xs sm:text-sm font-semibold tracking-widest uppercase rounded-sm transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 hover:scale-[1.02]"
          >
            <span>Explore Collections</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 text-xs sm:text-sm font-semibold tracking-widest uppercase rounded-sm transition-all duration-300 flex items-center justify-center gap-2 hover:border-white/40"
          >
            <span>Calculate Project Quote</span>
          </button>

          <button
            onClick={onOpenBookingModal}
            className="w-full sm:w-auto px-6 py-4 text-[#D9D0C3] hover:text-white text-xs sm:text-sm font-medium uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-[#C27D56]" />
            <span>Book Showroom Tour</span>
          </button>
        </div>

        {/* Direct Phone Support */}
        <div className="mt-12 pt-8 border-t border-white/10 text-xs text-[#A8A297] flex items-center justify-center gap-2">
          <span>Speak directly with a Master Material Specialist:</span>
          <a href="tel:+18007428735" className="text-white font-semibold hover:text-[#C27D56] transition-colors">
            {BRAND_INFO.phone}
          </a>
        </div>

      </div>
    </section>
  );
}
