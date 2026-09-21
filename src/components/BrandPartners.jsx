import React from 'react';
import { BRAND_PARTNERS } from '../data/tilesData';

export default function BrandPartners() {
  // Double list for seamless infinite loop
  const list = [...BRAND_PARTNERS, ...BRAND_PARTNERS];

  return (
    <section className="py-12 bg-[#F8F5EF] text-[#34322E] border-b border-[#EDE5D8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#777168] font-semibold">
          Certified Manufacturing Alliances &amp; Global Standards
        </span>
      </div>

      {/* Infinite Scrolling Strip */}
      <div className="relative w-full overflow-hidden flex">
        <div className="animate-marquee flex items-center gap-12 sm:gap-16 whitespace-nowrap">
          {list.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-6 py-3 bg-[#FFFDF9] border border-[#EDE5D8] rounded-sm hover:border-[#B86F52]/50 transition-colors cursor-default shrink-0 group shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-[#C9A875] group-hover:scale-125 transition-transform" />
              <div className="flex flex-col text-left">
                <span className="font-display-luxury text-sm font-bold tracking-widest text-[#34322E] group-hover:text-[#B86F52] transition-colors">
                  {brand.name}
                </span>
                <span className="text-[9px] uppercase font-mono tracking-wider text-[#777168]">
                  {brand.country} • {brand.style}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
