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
    <section id="collections" className="py-20 lg:py-28 bg-[#121316] text-[#FBF9F5] border-b border-[#2A2C33] relative overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C27D56] font-semibold mb-3">
              <span className="w-6 h-[1px] bg-[#C27D56]"></span>
              Private Reserve Slabs
            </div>
            <h2 className="font-display-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Featured Collections
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#A8A297] max-w-xl font-light">
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
                    ? 'bg-[#C27D56] text-white shadow-lg'
                    : 'bg-white/5 hover:bg-white/10 text-[#D9D0C3] border border-white/10'
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
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-[#1B1C20] border border-white/10 rounded-sm p-6 sm:p-10 shadow-2xl"
        >
          {/* Left Visual Stage */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            <div className="relative h-[340px] sm:h-[460px] w-full overflow-hidden rounded-sm group">
              <img
                src={currentItem.image}
                alt={currentItem.name}
                className="w-full h-full object-cover luxury-image-zoom transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 bg-black/60 backdrop-blur-md border border-[#C27D56]/50 text-[#DFBD69] text-xs uppercase tracking-widest font-semibold rounded-full">
                  {currentItem.collectionSeries}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90 bg-black/60 backdrop-blur-md p-3 rounded-sm border border-white/10">
                <span className="font-mono text-[#D9D0C3]">Origin: {currentItem.origin}</span>
                <span className="text-[#C27D56] font-semibold">{currentItem.thickness}</span>
              </div>
            </div>

            {/* Secondary Thumbnail Strip */}
            <div className="grid grid-cols-3 gap-4">
              <div className="relative h-24 overflow-hidden rounded-sm border border-white/10 group cursor-pointer">
                <img src={currentItem.secondaryImage} alt="Detail" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-[10px] uppercase font-mono tracking-widest text-white">
                  Close Texture
                </div>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 rounded-sm flex flex-col justify-center">
                <span className="text-[10px] uppercase tracking-widest text-[#A8A297]">Absorption</span>
                <span className="text-xs font-semibold text-white mt-1">{currentItem.absorption}</span>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 rounded-sm flex flex-col justify-center">
                <span className="text-[10px] uppercase tracking-widest text-[#A8A297]">Rating</span>
                <span className="text-xs font-semibold text-[#DFBD69] mt-1">{currentItem.peiRating}</span>
              </div>
            </div>
          </div>

          {/* Right Specification & Story Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#C27D56] font-semibold mb-2">
                Curated Signature Slab
              </div>

              <h3 className="font-display-luxury text-3xl sm:text-4xl font-bold text-white mb-3">
                {currentItem.name}
              </h3>

              <p className="text-base text-[#DFBD69] italic font-serif-luxury mb-4">
                "{currentItem.tagline}"
              </p>

              <p className="text-sm text-[#D9D0C3] leading-relaxed font-light mb-6">
                {currentItem.description}
              </p>

              {/* Technical Specifications Grid */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex justify-between text-xs py-1.5 border-b border-white/5">
                  <span className="text-[#A8A297] uppercase tracking-wider">Surface Finish</span>
                  <span className="font-semibold text-white">{currentItem.finish}</span>
                </div>
                <div className="flex justify-between text-xs py-1.5 border-b border-white/5">
                  <span className="text-[#A8A297] uppercase tracking-wider">Available Formats</span>
                  <span className="font-mono text-white text-right">{currentItem.sizes.join(' • ')}</span>
                </div>
                <div className="flex justify-between text-xs py-1.5 border-b border-white/5">
                  <span className="text-[#A8A297] uppercase tracking-wider">Ideal Application</span>
                  <span className="font-medium text-white text-right">{currentItem.applications}</span>
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-6 space-y-3">
              <button
                onClick={() => onOpenQuoteModal(currentItem.name)}
                className="w-full py-3.5 bg-[#C27D56] hover:bg-[#A85A32] text-white text-xs font-semibold uppercase tracking-widest rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <span>Request Sample Box & Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#visualizer"
                onClick={(e) => {
                  e.preventDefault();
                  const elem = document.querySelector('#visualizer');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-3 bg-white/5 hover:bg-white/10 text-[#D9D0C3] hover:text-white text-xs font-medium uppercase tracking-widest rounded-sm transition-colors flex items-center justify-center gap-2 border border-white/10"
              >
                <Layers className="w-4 h-4 text-[#C27D56]" />
                <span>Test In 3D Room Visualizer</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
