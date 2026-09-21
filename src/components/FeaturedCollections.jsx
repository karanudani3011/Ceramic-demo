import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Box, 
  ShieldCheck, 
  Maximize, 
  SlidersHorizontal 
} from 'lucide-react';
import { FEATURED_COLLECTIONS } from '../data/tilesData';

export default function FeaturedCollections({ onOpenQuoteModal, onOpenVisualizer }) {
  const [activeTab, setActiveTab] = useState(0);
  const currentItem = FEATURED_COLLECTIONS[activeTab];

  return (
    <section id="collections" className="py-20 lg:py-28 bg-[#F8F5EF] text-[#34322E] border-b border-[#EDE5D8] relative overflow-hidden">
      {/* Soft decorative architectural grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      {/* Warm radial glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#B86F52]/05 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#C9A875]/08 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B86F52] font-semibold mb-3">
              <span className="w-6 h-[1px] bg-[#B86F52]"></span>
              Private Reserve Slabs
            </div>
            <h2 className="font-display-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#34322E]">
              Featured Collections
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#777168] max-w-xl font-light">
              Master-grade monolithic surfaces engineered from pure Italian quartz, kaolin clay, and calibrated natural pigments.
            </p>
          </div>

          {/* Collection Tab Selector */}
          <div className="flex flex-wrap gap-2">
            {FEATURED_COLLECTIONS.map((col, idx) => (
              <button
                key={col.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all duration-300 ${
                  activeTab === idx
                    ? 'bg-[#B86F52] text-[#FFFDF9] shadow-lg'
                    : 'bg-[#FFFDF9] hover:bg-[#EDE5D8] text-[#777168] border border-[#EDE5D8]'
                }`}
              >
                {col.name.split(' ')[0]} {col.name.split(' ')[1] || ''}
              </button>
            ))}
          </div>
        </div>

        {/* Large Editorial Showcase Container */}
        <motion.div
          key={currentItem.id}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-[#FFFDF9] border border-[#EDE5D8] rounded-sm p-6 sm:p-10 shadow-lg"
        >
          {/* Left Visual Stage */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div className="relative h-[340px] sm:h-[460px] w-full overflow-hidden rounded-sm group">
              <img
                src={currentItem.image}
                alt={currentItem.name}
                className="w-full h-full object-cover luxury-image-zoom transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Warm gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#34322E]/60 via-transparent to-[#34322E]/10" />
              
              {/* Decorative terracotta line accent */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#B86F52] via-[#C9A875] to-transparent" />

              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 bg-[#FFFDF9]/90 backdrop-blur-md border border-[#C9A875]/40 text-[#B86F52] text-xs uppercase tracking-widest font-semibold rounded-full">
                  {currentItem.collectionSeries}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#FFFDF9] bg-[#34322E]/70 backdrop-blur-md p-3 rounded-sm border border-[#FFFDF9]/15">
                <span className="font-mono text-[#EDE5D8]">Origin: {currentItem.origin}</span>
                <span className="text-[#C9A875] font-semibold">{currentItem.thickness}</span>
              </div>
            </div>

            {/* Secondary Thumbnail Strip */}
            <div className="grid grid-cols-3 gap-4">
              <div className="relative h-24 overflow-hidden rounded-sm border border-[#EDE5D8] group cursor-pointer">
                <img src={currentItem.secondaryImage} alt="Detail" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-[#34322E]/25 flex items-center justify-center text-[10px] uppercase font-mono tracking-widest text-[#FFFDF9]">
                  Close Texture
                </div>
              </div>
              <div className="p-3 bg-[#EDE5D8] border border-[#D9CEBC] rounded-sm flex flex-col justify-center">
                <span className="text-[10px] uppercase tracking-widest text-[#777168]">Absorption</span>
                <span className="text-xs font-semibold text-[#34322E] mt-1">{currentItem.absorption}</span>
              </div>
              <div className="p-3 bg-[#EDE5D8] border border-[#D9CEBC] rounded-sm flex flex-col justify-center">
                <span className="text-[10px] uppercase tracking-widest text-[#777168]">Rating</span>
                <span className="text-xs font-semibold text-[#B86F52] mt-1">{currentItem.peiRating}</span>
              </div>
            </div>
          </div>

          {/* Right Specification & Story Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#B86F52] font-semibold mb-2">
                Curated Signature Slab
              </div>

              <h3 className="font-display-luxury text-3xl sm:text-4xl font-bold text-[#34322E] mb-3">
                {currentItem.name}
              </h3>

              <p className="text-base text-[#B86F52] italic font-serif-luxury mb-4">
                "{currentItem.tagline}"
              </p>

              <p className="text-sm text-[#777168] leading-relaxed font-light mb-6">
                {currentItem.description}
              </p>

              {/* Technical Specifications Grid */}
              <div className="space-y-3 pt-4 border-t border-[#EDE5D8]">
                {/* Thin champagne gold accent line */}
                <div className="w-full h-[1px] bg-gradient-to-r from-[#C9A875]/60 to-transparent -mt-[1px] mb-3" />
                <div className="flex justify-between text-xs py-1.5 border-b border-[#EDE5D8]">
                  <span className="text-[#777168] uppercase tracking-wider">Surface Finish</span>
                  <span className="font-semibold text-[#34322E]">{currentItem.finish}</span>
                </div>
                <div className="flex justify-between text-xs py-1.5 border-b border-[#EDE5D8]">
                  <span className="text-[#777168] uppercase tracking-wider">Available Formats</span>
                  <span className="font-mono text-[#34322E] text-right">{currentItem.sizes.join(' • ')}</span>
                </div>
                <div className="flex justify-between text-xs py-1.5 border-b border-[#EDE5D8]">
                  <span className="text-[#777168] uppercase tracking-wider">Ideal Application</span>
                  <span className="font-medium text-[#34322E] text-right">{currentItem.applications}</span>
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-6 space-y-3">
              <button
                onClick={() => onOpenQuoteModal(currentItem.name)}
                className="w-full py-3.5 bg-[#B86F52] hover:bg-[#A55E42] text-[#FFFDF9] text-xs font-semibold uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <span>Request Sample Box &amp; Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#visualizer"
                onClick={(e) => {
                  e.preventDefault();
                  const elem = document.querySelector('#visualizer');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 bg-[#EDE5D8] hover:bg-[#D9CEBC] text-[#34322E] hover:text-[#34322E] text-xs font-medium uppercase tracking-widest rounded-sm transition-colors flex items-center justify-center gap-2 border border-[#D9CEBC]"
              >
                <Layers className="w-4 h-4 text-[#7B8065]" />
                <span>Test In 3D Room Visualizer</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
