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
    <section id="inspiration" className="py-20 lg:py-28 bg-[#EDE5D8] border-b border-[#D9CEBC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B86F52] font-semibold mb-3">
              <span className="w-6 h-[1px] bg-[#B86F52]"></span>
              Architectural Portfolio
            </div>
            <h2 className="font-display-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#34322E]">
              Get Inspired
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#777168] max-w-xl font-light">
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
                    ? 'bg-[#34322E] text-[#FFFDF9] shadow-md'
                    : 'bg-[#FFFDF9] text-[#777168] hover:bg-[#F8F5EF] border border-[#D9CEBC] hover:border-[#B86F52]/40'
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
                className="group relative rounded-sm overflow-hidden bg-[#34322E] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <div className={`relative w-full overflow-hidden ${isTall ? 'h-[440px]' : 'h-[360px]'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover luxury-image-zoom transition-transform duration-1000 group-hover:scale-110"
                  />

                  {/* Warm Charcoal gradient overlay ~20% opacity — NOT black */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#34322E]/90 via-[#34322E]/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Location Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-[#FFFDF9]/85 backdrop-blur-md border border-[#C9A875]/30 text-[11px] uppercase tracking-widest text-[#34322E] font-medium rounded-full flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-[#B86F52]" />
                      {project.location}
                    </span>
                  </div>

                  {/* Project Info on Bottom */}
                  <div className="absolute bottom-0 inset-x-0 p-6 z-10 flex flex-col justify-end">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C9A875] mb-1">
                      {project.category} • {project.sqft}
                    </span>

                    <h3 className="font-display-luxury text-xl sm:text-2xl font-bold text-[#FFFDF9] mb-2 group-hover:text-[#C9A875] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-[#EDE5D8] line-clamp-2 mb-3 font-light">
                      {project.story}
                    </p>

                    {/* View Link */}
                    <div className="flex items-center justify-between pt-3 border-t border-[#FFFDF9]/20 text-xs font-semibold uppercase tracking-widest text-[#FFFDF9] group-hover:text-[#B86F52] transition-colors">
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

      {/* Project Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#34322E]/75 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl bg-[#FFFDF9] text-[#34322E] border border-[#EDE5D8] rounded-sm shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col"
            >
              {/* Image Banner */}
              <div className="relative h-72 sm:h-96 w-full overflow-hidden shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#34322E]/80 via-[#34322E]/20 to-transparent" />
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-[#FFFDF9]/85 hover:bg-[#FFFDF9] text-[#34322E] rounded-full transition-colors border border-[#EDE5D8]"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C9A875] font-semibold mb-1">
                    <span>{selectedProject.category}</span>
                    <span>•</span>
                    <span>{selectedProject.location}</span>
                  </div>
                  <h3 className="font-display-luxury text-3xl sm:text-4xl font-bold text-[#FFFDF9]">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Modal Details Content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 bg-[#FFFDF9]">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-[#EDE5D8] border border-[#D9CEBC] rounded-sm text-xs">
                  <div>
                    <span className="text-[#777168] uppercase tracking-wider block mb-1">Architect / Studio</span>
                    <span className="font-semibold text-[#34322E]">{selectedProject.architect}</span>
                  </div>
                  <div>
                    <span className="text-[#777168] uppercase tracking-wider block mb-1">Total Surface Area</span>
                    <span className="font-mono text-[#34322E] font-bold">{selectedProject.sqft}</span>
                  </div>
                  <div>
                    <span className="text-[#777168] uppercase tracking-wider block mb-1">Completion Year</span>
                    <span className="font-mono text-[#B86F52] font-bold">{selectedProject.year}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#777168] font-semibold mb-2">
                    Architectural Story &amp; Specifications
                  </h4>
                  <p className="text-sm sm:text-base text-[#34322E] leading-relaxed font-light">
                    {selectedProject.story}
                  </p>
                </div>

                {/* Materials Featured */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#777168] font-semibold mb-2">
                    Aurelia Surfaces Specified
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.materialsUsed.map((mat, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-[#B86F52]/10 text-[#B86F52] border border-[#B86F52]/25 text-xs font-mono font-medium rounded-sm">
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Modal Actions */}
                <div className="pt-6 border-t border-[#EDE5D8] flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      onOpenQuoteModal(selectedProject.title);
                    }}
                    className="flex-1 py-3.5 bg-[#B86F52] hover:bg-[#A55E42] text-[#FFFDF9] text-xs font-semibold uppercase tracking-widest rounded-sm transition-colors text-center shadow-lg"
                  >
                    Request Surfaces From This Project
                  </button>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3.5 bg-[#EDE5D8] hover:bg-[#D9CEBC] text-[#34322E] text-xs font-semibold uppercase tracking-widest rounded-sm transition-colors"
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
