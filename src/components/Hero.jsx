import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  Compass, 
  Layers, 
  Maximize2, 
  ChevronRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

const HERO_SLIDES = [
  {
    id: 1,
    title: "Transform Spaces.",
    titleHighlight: "Define Elegance.",
    subtitle: "Premium Tiles & Ceramic Surfaces Crafted for Modern Living.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=90",
    badge: "Italian Master Slabs 2026",
    surfaceName: "Calacatta Oro Imperial (160x320cm)",
    finish: "Bookmatched Lustrous Honed"
  },
  {
    id: 2,
    title: "Timeless Textures.",
    titleHighlight: "Pure Architecture.",
    subtitle: "Fluted 3D relief ceramics and monolithic porcelain slabs engineered for grand living.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90",
    badge: "Architectural Reserve Edition",
    surfaceName: "Pietra Di Val Quartzite Slab",
    finish: "Bush-Hammered Anti-Slip R11"
  },
  {
    id: 3,
    title: "Natural Warmth.",
    titleHighlight: "Zero Maintenance.",
    subtitle: "Biophilic timber porcelain capturing the tactile soul of aged Nordic oak with lifetime durability.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=90",
    badge: "Earth & Wood Series",
    surfaceName: "Nordic Smoked Oak Chevron",
    finish: "Synchronized 3D Grain Structure"
  }
];

export default function Hero({ onOpenQuoteModal, onOpenVisualizer, onExploreCollections }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section id="home" className="relative min-h-[92vh] sm:min-h-screen flex items-center bg-[#F8F5EF] text-[#34322E] overflow-hidden">
      {/* Background Slides with Cross-fade & subtle Ken Burns scale */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        </AnimatePresence>

        {/* Warm Light Gradient Overlays — no dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8F5EF]/92 via-[#F8F5EF]/60 to-[#F8F5EF]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#EDE5D8]/60 via-transparent to-transparent" />
        
        {/* Subtle warm grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      </div>

      {/* Floating Architectural Accent — warm card */}
      <div className="absolute top-20 right-10 hidden xl:block z-10">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="p-5 backdrop-blur-xl bg-[#FFFDF9]/90 border border-[#C9A875]/30 rounded-sm shadow-xl max-w-xs"
        >
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#B86F52] font-semibold mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            Featured Material
          </div>
          <p className="font-display-luxury text-sm font-semibold text-[#34322E]">
            {slide.surfaceName}
          </p>
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#EDE5D8] text-[11px] text-[#777168]">
            <span>{slide.finish}</span>
            <span className="text-[#B86F52] font-medium">9mm &amp; 12mm</span>
          </div>
        </motion.div>
      </div>

      {/* Floating soft shape decorations */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A875]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/3 w-64 h-64 bg-[#B86F52]/06 rounded-full blur-3xl pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFDF9]/80 backdrop-blur-md border border-[#C9A875]/40 text-[#34322E] text-xs uppercase tracking-[0.25em] font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#B86F52]"></span>
            <span>{slide.badge}</span>
          </motion.div>

          {/* Main Staggered Heading */}
          <motion.h1
            key={`title-${slide.id}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-display-luxury text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#34322E] leading-[1.08] mb-6"
          >
            {slide.title} <br />
            <span className="text-[#B86F52] italic font-serif-luxury font-normal">
              {slide.titleHighlight}
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            key={`sub-${slide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-base sm:text-xl text-[#777168] font-light leading-relaxed mb-10 max-w-2xl"
          >
            {slide.subtitle}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
          >
            {/* Primary CTA — Terracotta */}
            <a
              href="#collections"
              onClick={(e) => {
                e.preventDefault();
                const elem = document.querySelector('#collections');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-[#B86F52] hover:bg-[#A55E42] text-[#FFFDF9] text-xs sm:text-sm font-semibold tracking-widest uppercase rounded-sm transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-[1.02] group"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Secondary CTA — Soft Olive */}
            <button
              onClick={onOpenQuoteModal}
              className="px-8 py-4 bg-[#7B8065]/15 hover:bg-[#7B8065]/25 backdrop-blur-md text-[#34322E] border border-[#7B8065]/40 text-xs sm:text-sm font-semibold tracking-widest uppercase rounded-sm transition-all duration-300 flex items-center justify-center gap-2 hover:border-[#7B8065]/70"
            >
              <span>Get a Quote</span>
            </button>

            {/* 3D Visualizer Link */}
            <a
              href="#visualizer"
              onClick={(e) => {
                e.preventDefault();
                const elem = document.querySelector('#visualizer');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#777168] hover:text-[#B86F52] transition-colors py-2 px-1"
            >
              <Layers className="w-4 h-4 text-[#B86F52]" />
              <span className="underline underline-offset-4">Try 3D Room Visualizer</span>
            </a>
          </motion.div>

          {/* Quick Value Pillars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-14 pt-8 border-t border-[#C9A875]/30 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-[#777168]"
          >
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#B86F52] shrink-0" />
              <span>Zero-Porosity Vitrification</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#B86F52] shrink-0" />
              <span>Bookmatched Continuous Veining</span>
            </div>
            <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
              <CheckCircle2 className="w-4 h-4 text-[#B86F52] shrink-0" />
              <span>Architectural Sample Delivery</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-6 sm:right-12 z-20 flex items-center gap-3">
        {HERO_SLIDES.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              currentSlide === idx ? 'w-10 bg-[#B86F52]' : 'w-2.5 bg-[#34322E]/25 hover:bg-[#34322E]/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
