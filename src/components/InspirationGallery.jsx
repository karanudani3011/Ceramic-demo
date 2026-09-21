import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, MapPin, Building, Eye, X, Layers, Calendar } from 'lucide-react';
import { INSPIRATION_PROJECTS } from '../data/tilesData';

export default function InspirationGallery({ onOpenQuoteModal }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Living Room', 'Bathroom', 'Kitchen', 'Bedroom', 'Commercial Space', 'Outdoor'];

  const filteredProjects = INSPIRATION_PROJECTS.filter(project => {
    if (activeCategory === 'All') return true;
    return project.category === activeCategory;
  });

  return (
    <section id="inspiration" className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-[#EBE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C27D56] font-semibold mb-3">
              <span className="w-6 h-[1px] bg-[#C27D56]"></span>
              Architectural Portfolio
            </div>
            <h2 className="font-display-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1B1C20]">
              Get Inspired
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#6E717D] max-w-xl font-light">
              Explore global luxury residential and commercial installations featuring Aurelia monolithic porcelain and artisan ceramics.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#1B1C20] text-white shadow-md'
                    : 'bg-white text-[#4E515D] hover:bg-[#EBE5DC] border border-[#EBE5DC]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-Style Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => {
            const isTall = idx === 1 || idx === 4;
            
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-sm overflow-hidden bg-[#121316] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <div className={`relative w-full overflow-hidden ${isTall ? 'h-[440px]' : 'h-[360px]'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover luxury-image-zoom transition-transform duration-1000 group-hover:scale-110"
                  />

                  {/* Dark Elegant Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-black/40 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Location / Space Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/20 text-[11px] uppercase tracking-widest text-[#DFBD69] font-medium rounded-full flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-[#C27D56]" />
                      {project.location}
                    </span>
                  </div>

                  {/* Project Info on Bottom */}
                  <div className="absolute bottom-0 inset-x-0 p-6 z-10 flex flex-col justify-end">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C27D56] mb-1">
                      {project.category} • {project.sqft}
                    </span>

                    <h3 className="font-display-luxury text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#DFBD69] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-[#D9D0C3] line-clamp-2 mb-3 font-light">
                      {project.story}
                    </p>

                    {/* View Inspiration Link */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/15 text-xs font-semibold uppercase tracking-widest text-white group-hover:text-[#C27D56] transition-colors">
                      <span className="flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Project Details</span>
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

      {/* Polished Project Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl bg-[#1B1C20] text-white border border-white/15 rounded-sm shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col"
            >
              {/* Image Banner */}
              <div className="relative h-72 sm:h-96 w-full overflow-hidden shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1C20] via-black/40 to-transparent" />
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors border border-white/20"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C27D56] font-semibold mb-1">
                    <span>{selectedProject.category}</span>
                    <span>•</span>
                    <span>{selectedProject.location}</span>
                  </div>
                  <h3 className="font-display-luxury text-3xl sm:text-4xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Modal Details Content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-white/5 border border-white/10 rounded-sm text-xs">
                  <div>
                    <span className="text-[#A8A297] uppercase tracking-wider block mb-1">Architect / Studio</span>
                    <span className="font-semibold text-white">{selectedProject.architect}</span>
                  </div>
                  <div>
                    <span className="text-[#A8A297] uppercase tracking-wider block mb-1">Total Surface Area</span>
                    <span className="font-mono text-white font-bold">{selectedProject.sqft}</span>
                  </div>
                  <div>
                    <span className="text-[#A8A297] uppercase tracking-wider block mb-1">Completion Year</span>
                    <span className="font-mono text-[#DFBD69] font-bold">{selectedProject.year}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#A8A297] font-semibold mb-2">
                    Architectural Story & Specifications
                  </h4>
                  <p className="text-sm sm:text-base text-[#D9D0C3] leading-relaxed font-light">
                    {selectedProject.story}
                  </p>
                </div>

                {/* Materials Featured */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#A8A297] font-semibold mb-2">
                    Aurelia Surfaces Specified
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.materialsUsed.map((mat, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-[#C27D56]/20 text-[#DFBD69] border border-[#C27D56]/30 text-xs font-mono font-medium rounded-sm">
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Modal Actions */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      onOpenQuoteModal(selectedProject.title);
                    }}
                    className="flex-1 py-3.5 bg-[#C27D56] hover:bg-[#A85A32] text-white text-xs font-semibold uppercase tracking-widest rounded-sm transition-colors text-center shadow-lg"
                  >
                    Request Surfaces From This Project
                  </button>

                  <button
                    onClick={() => setSelectedProject(null)}
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
