import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, Filter, Check, Eye, X } from 'lucide-react';
import { CATEGORIES } from '../data/tilesData';

export default function CategoriesGrid({ onSelectCategory, onOpenQuoteModal }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Surfaces' },
    { id: 'interior', label: 'Interior Flooring & Walls' },
    { id: 'specialty', label: 'Marble & Large Slabs' },
    { id: 'outdoor', label: 'Outdoor & Pavers' },
    { id: 'artisan', label: 'Artisan Ceramics' }
  ];

  const filteredCategories = CATEGORIES.filter(cat => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'interior') return ['floor-tiles', 'wall-tiles', 'bathroom-tiles', 'kitchen-tiles'].includes(cat.id);
    if (activeFilter === 'specialty') return ['large-format', 'marble-finish', 'wood-finish'].includes(cat.id);
    if (activeFilter === 'outdoor') return ['outdoor-tiles'].includes(cat.id);
    if (activeFilter === 'artisan') return ['ceramic-collection', 'wall-tiles'].includes(cat.id);
    return true;
  });

  return (
    <section id="categories" className="py-20 lg:py-28 bg-[#F5F0E8] border-b border-[#EBE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C27D56] font-semibold mb-3">
              <span className="w-6 h-[1px] bg-[#C27D56]"></span>
              Architectural Product Range
            </div>
            <h2 className="font-display-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1B1C20]">
              Explore Our Collections
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#6E717D] max-w-xl font-light">
              Meticulously engineered ceramic, vitrified porcelain, and monolithic architectural surfaces categorized for specific structural and interior applications.
            </p>
          </div>

          {/* Quick Filter Pill Buttons */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider rounded-sm transition-all duration-300 ${
                  activeFilter === f.id
                    ? 'bg-[#1B1C20] text-white shadow-md'
                    : 'bg-white/70 text-[#4E515D] hover:bg-white hover:text-[#1B1C20] border border-[#EBE5DC]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Responsive Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCategories.map((category, index) => {
            // Apply subtle asymmetric spans on desktop for an architectural editorial look
            const isLargeSpan = index === 0 || index === 5;
            
            return (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group relative overflow-hidden rounded-sm bg-[#121316] text-white shadow-md hover:shadow-2xl transition-all duration-700 cursor-pointer ${
                  isLargeSpan ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {/* Image Container with Luxury Zoom */}
                <div className="relative h-80 sm:h-96 lg:h-[420px] w-full overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    loading="lazy"
                    className="w-full h-full object-cover luxury-image-zoom transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Multi-tier Gradient Overlay for readability and atmosphere */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-[#121316]/40 to-black/20 opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  {/* Category Tag Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/15 text-[11px] uppercase tracking-widest text-[#D9D0C3] font-medium rounded-full">
                      {category.tag}
                    </span>
                  </div>

                  {/* Item Count / Formats Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="text-[11px] font-mono tracking-wider text-[#C27D56] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-sm border border-white/10">
                      {category.itemCount}
                    </span>
                  </div>

                  {/* Card Content Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 z-10 flex flex-col justify-end">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C27D56] mb-1.5">
                      {category.subtitle}
                    </div>

                    <h3 className="font-display-luxury text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2 group-hover:text-[#DFBD69] transition-colors">
                      {category.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#D9D0C3] line-clamp-2 mb-4 font-light max-w-xl">
                      {category.description}
                    </p>

                    {/* Featured Sizes / Specs Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {category.featuredSizes.slice(0, 3).map((size, idx) => (
                        <span key={idx} className="text-[10px] uppercase font-mono px-2 py-0.5 bg-white/10 rounded-sm text-gray-300">
                          {size}
                        </span>
                      ))}
                    </div>

                    {/* Explore CTA Button */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/15 text-xs font-semibold uppercase tracking-widest text-white group-hover:text-[#C27D56] transition-colors">
                      <span className="flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Specifications & Formats</span>
                      </span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Category Detail Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedCategory(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl bg-[#1B1C20] text-white border border-white/15 rounded-sm shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header Image */}
              <div className="relative h-60 sm:h-72 w-full overflow-hidden shrink-0">
                <img
                  src={selectedCategory.image}
                  alt={selectedCategory.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1C20] via-black/40 to-transparent" />
                
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors border border-white/20"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6">
                  <span className="text-xs uppercase tracking-widest text-[#C27D56] font-semibold">
                    {selectedCategory.subtitle}
                  </span>
                  <h3 className="font-display-luxury text-3xl font-bold text-white">
                    {selectedCategory.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#A8A297] font-semibold mb-2">
                    Architectural Overview
                  </h4>
                  <p className="text-sm sm:text-base text-[#D9D0C3] leading-relaxed font-light">
                    {selectedCategory.description}
                  </p>
                </div>

                {/* Available Sizes */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#A8A297] font-semibold mb-2">
                    Standard Architectural Formats
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCategory.featuredSizes.map((size, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-white/10 rounded-sm text-xs font-mono text-white border border-white/10">
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Surface Finishes */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#A8A297] font-semibold mb-2">
                    Available Surface Finishes
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCategory.finishes.map((finish, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-[#C27D56]/20 text-[#DFBD69] rounded-sm text-xs font-medium border border-[#C27D56]/30">
                        {finish}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      setSelectedCategory(null);
                      onOpenQuoteModal(selectedCategory.title);
                    }}
                    className="flex-1 py-3.5 bg-[#C27D56] hover:bg-[#A85A32] text-white text-xs font-semibold uppercase tracking-widest rounded-sm transition-colors text-center shadow-lg"
                  >
                    Request Sample Box & Quote
                  </button>

                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white text-xs font-semibold uppercase tracking-widest rounded-sm transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
