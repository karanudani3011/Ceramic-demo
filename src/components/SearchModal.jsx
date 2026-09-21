import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Sparkles, Layers, Box, Tag } from 'lucide-react';
import { CATEGORIES, FEATURED_COLLECTIONS, INSPIRATION_PROJECTS } from '../data/tilesData';

export default function SearchModal({ isOpen, onClose, onOpenQuoteModal }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  const matchingCategories = CATEGORIES.filter(c => 
    c.title.toLowerCase().includes(cleanQuery) || 
    c.description.toLowerCase().includes(cleanQuery) ||
    c.finishes.some(f => f.toLowerCase().includes(cleanQuery))
  );

  const matchingCollections = FEATURED_COLLECTIONS.filter(c =>
    c.name.toLowerCase().includes(cleanQuery) ||
    c.tagline.toLowerCase().includes(cleanQuery) ||
    c.applications.toLowerCase().includes(cleanQuery) ||
    c.finish.toLowerCase().includes(cleanQuery)
  );

  const matchingProjects = INSPIRATION_PROJECTS.filter(p =>
    p.title.toLowerCase().includes(cleanQuery) ||
    p.category.toLowerCase().includes(cleanQuery) ||
    p.location.toLowerCase().includes(cleanQuery)
  );

  const totalResults = (cleanQuery ? (matchingCategories.length + matchingCollections.length + matchingProjects.length) : 0);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-[#34322E]/65 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-2xl bg-[#FFFDF9] text-[#34322E] border border-[#EDE5D8] rounded-sm shadow-2xl overflow-hidden z-10 flex flex-col max-h-[80vh]"
      >
        {/* Search Input Field */}
        <div className="p-4 sm:p-5 border-b border-[#EDE5D8] flex items-center gap-3 bg-[#F8F5EF]">
          <Search className="w-5 h-5 text-[#B86F52] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Calacatta, 20mm pavers, wood plank, bathroom slabs, finishes..."
            className="w-full bg-transparent text-sm sm:text-base text-[#34322E] focus:outline-none placeholder:text-[#777168]/60 font-light"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#777168] hover:text-[#34322E]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs uppercase tracking-wider text-[#777168] hover:text-[#34322E] border border-[#EDE5D8] rounded-sm hover:border-[#D9CEBC]"
          >
            ESC
          </button>
        </div>

        {/* Quick Suggested Tags if query is empty */}
        {!cleanQuery && (
          <div className="p-6 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#777168] font-semibold block">
              Popular Architectural Queries
            </span>
            <div className="flex flex-wrap gap-2">
              {['Calacatta Marble', '20mm Outdoor Paver', 'Fluted 3D Wall', 'Nordic Oak Parquet', 'Moroccan Zellige', 'Continuous Mega Slab'].map((tag, idx) => (
                <button
                  key={idx}
                  onClick={() => setQuery(tag)}
                  className="px-3 py-1.5 bg-[#EDE5D8] hover:bg-[#D9CEBC] text-xs text-[#34322E] hover:text-[#B86F52] rounded-sm border border-[#D9CEBC] hover:border-[#B86F52]/40 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results List */}
        {cleanQuery && (
          <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
            <div className="text-xs text-[#777168] uppercase tracking-wider">
              Found {totalResults} matching results
            </div>

            {/* Collections Results */}
            {matchingCollections.length > 0 && (
              <div className="space-y-3">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#B86F52]">
                  Signature Collections
                </span>
                <div className="space-y-2">
                  {matchingCollections.map((col) => (
                    <div
                      key={col.id}
                      onClick={() => {
                        onClose();
                        onOpenQuoteModal(col.name);
                      }}
                      className="p-3 bg-[#F8F5EF] hover:bg-[#EDE5D8] border border-[#EDE5D8] hover:border-[#B86F52]/40 rounded-sm flex items-center justify-between cursor-pointer transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <img src={col.image} alt={col.name} className="w-12 h-12 object-cover rounded-sm border border-[#EDE5D8]" />
                        <div>
                          <div className="text-sm font-semibold text-[#34322E] group-hover:text-[#B86F52] transition-colors">
                            {col.name}
                          </div>
                          <div className="text-xs text-[#777168]">
                            {col.finish} • {col.origin}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#777168] group-hover:text-[#B86F52] group-hover:translate-x-1 transition-all" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Categories Results */}
            {matchingCategories.length > 0 && (
              <div className="space-y-3">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#B86F52]">
                  Product Categories
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {matchingCategories.map((cat) => (
                    <div
                      key={cat.id}
                      onClick={() => {
                        onClose();
                        const elem = document.querySelector('#categories');
                        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="p-3 bg-[#F8F5EF] hover:bg-[#EDE5D8] border border-[#EDE5D8] hover:border-[#B86F52]/40 rounded-sm flex items-center gap-3 cursor-pointer transition-colors"
                    >
                      <img src={cat.image} alt={cat.title} className="w-10 h-10 object-cover rounded-sm border border-[#EDE5D8]" />
                      <div>
                        <div className="text-xs font-semibold text-[#34322E]">{cat.title}</div>
                        <div className="text-[10px] text-[#777168]">{cat.itemCount}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Projects Results */}
            {matchingProjects.length > 0 && (
              <div className="space-y-3">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#B86F52]">
                  Inspiration Projects
                </span>
                <div className="space-y-2">
                  {matchingProjects.map((proj) => (
                    <div
                      key={proj.id}
                      onClick={() => {
                        onClose();
                        const elem = document.querySelector('#inspiration');
                        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="p-3 bg-[#F8F5EF] hover:bg-[#EDE5D8] border border-[#EDE5D8] hover:border-[#B86F52]/40 rounded-sm flex items-center justify-between cursor-pointer transition-colors group"
                    >
                      <div>
                        <div className="text-xs font-semibold text-[#34322E] group-hover:text-[#B86F52] transition-colors">
                          {proj.title}
                        </div>
                        <div className="text-[10px] text-[#777168]">
                          {proj.category} • {proj.location}
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-[#777168] group-hover:text-[#B86F52] transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {totalResults === 0 && (
              <div className="text-center py-8 text-sm text-[#777168]">
                No exact surfaces matched "{query}". Try searching for "Marble", "Pavers", "Slab", or "Oak".
              </div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
