import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  Compass, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { BRAND_INFO } from '../data/tilesData';

export default function Navbar({ onOpenQuoteModal, onOpenSearchModal, onOpenBookingModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sleek, clean luxury navigation matching the business requirements
  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Collections', href: '#collections', id: 'collections' },
    { name: 'Tiles', href: '#categories', id: 'categories' },
    { name: 'Visualizer', href: '#visualizer', id: 'visualizer', isSpecial: true },
    { name: 'Inspiration', href: '#inspiration', id: 'inspiration' },
    { name: 'Showroom', href: '#showroom', id: 'showroom' },
    { name: 'About Us', href: '#why-us', id: 'why-us' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (id, href) => {
    setActiveNav(id);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Thin Luxury Bar */}
      <div className="bg-[#101114] text-[#C5BEB3] text-[11px] py-1.5 px-4 sm:px-8 border-b border-white/5 tracking-[0.15em] uppercase transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C27D56] animate-pulse"></span>
            <span className="font-light truncate">Italian Porcelain & Ceramic Architectural Surfaces • 2026 Reserve</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-[11px] text-[#A8A297]">
            <button 
              onClick={onOpenBookingModal}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <Compass className="w-3 h-3 text-[#C27D56]" />
              <span>Book VIP Showroom Tour</span>
            </button>
            <span className="opacity-30">|</span>
            <a href={`tel:${BRAND_INFO.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
              {BRAND_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Navbar */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#121316]/95 backdrop-blur-md text-[#FBF9F5] shadow-xl py-3 border-b border-white/10' 
            : 'bg-[#FBF9F5]/95 backdrop-blur-md text-[#1B1C20] py-4 border-b border-[#1B1C20]/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <a 
            href="#home" 
            className="flex items-center gap-3 shrink-0 group focus:outline-none"
            onClick={(e) => { e.preventDefault(); handleNavClick('home', '#home'); }}
          >
            <div className={`w-9 h-9 rounded-sm flex items-center justify-center transition-all duration-300 border ${
              isScrolled 
                ? 'bg-[#1E2025] border-[#C27D56]/40 text-[#DFBD69]' 
                : 'bg-[#1B1C20] border-[#1B1C20] text-[#EBE5DC]'
            } group-hover:border-[#C27D56]`}>
              <span className="font-display-luxury text-lg font-bold tracking-tight">
                A
              </span>
            </div>

            <div className="flex flex-col">
              <span className={`font-display-luxury text-lg sm:text-xl font-bold tracking-[0.22em] leading-none transition-colors ${
                isScrolled ? 'text-white' : 'text-[#121316]'
              }`}>
                {BRAND_INFO.name}
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.28em] font-medium text-[#C27D56] uppercase mt-0.5">
                {BRAND_INFO.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links - Single Clean Row */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
            {navLinks.map((link) => {
              const isActive = activeNav === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id, link.href);
                  }}
                  className={`relative px-3 py-1.5 text-xs tracking-[0.14em] uppercase font-medium whitespace-nowrap transition-all duration-200 rounded-sm flex items-center gap-1.5 ${
                    isScrolled
                      ? isActive
                        ? 'text-[#DFBD69] font-semibold'
                        : 'text-[#D9D0C3] hover:text-white'
                      : isActive
                        ? 'text-[#A85A32] font-semibold'
                        : 'text-[#4E515D] hover:text-[#1B1C20]'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.isSpecial && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C27D56] animate-pulse"></span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-[#C27D56]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-2.5 sm:space-x-3 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearchModal}
              aria-label="Search Collection"
              className={`p-2 rounded-full transition-all duration-200 ${
                isScrolled
                  ? 'bg-white/5 hover:bg-white/15 text-[#D9D0C3] hover:text-white'
                  : 'bg-black/5 hover:bg-black/10 text-[#2A2C33]'
              }`}
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Get Quote Luxury Button */}
            <button
              onClick={onOpenQuoteModal}
              className={`relative overflow-hidden px-4 sm:px-5 py-2 text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-200 flex items-center gap-1.5 shadow-sm hover:scale-[1.02] ${
                isScrolled
                  ? 'bg-[#C27D56] hover:bg-[#A85A32] text-white'
                  : 'bg-[#1B1C20] hover:bg-[#C27D56] text-white'
              }`}
            >
              <span className="whitespace-nowrap">Get Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-sm transition-colors ${
                isScrolled ? 'text-white hover:bg-white/10' : 'text-[#1B1C20] hover:bg-black/5'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div 
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/75 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Sliding Menu Panel */}
        <div 
          className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-[#16171B] text-[#FBF9F5] shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-out border-l border-white/10 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-sm bg-[#C27D56] flex items-center justify-center text-white font-display-luxury font-bold text-sm">
                  A
                </div>
                <div>
                  <span className="font-display-luxury font-bold tracking-widest text-base block">
                    {BRAND_INFO.name}
                  </span>
                  <span className="text-[8px] uppercase tracking-widest text-[#C27D56] block">
                    {BRAND_INFO.tagline}
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6 flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id, link.href);
                  }}
                  className={`text-sm tracking-widest uppercase font-medium py-3 px-3 rounded-sm flex items-center justify-between transition-colors ${
                    activeNav === link.id
                      ? 'bg-[#C27D56]/20 text-[#DFBD69] font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.name}
                    {link.isSpecial && (
                      <span className="text-[9px] px-1.5 py-0.5 bg-[#C27D56] text-white rounded-full">
                        3D
                      </span>
                    )}
                  </span>
                  <span className="text-gray-600 text-xs">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-white/10 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 bg-[#C27D56] hover:bg-[#A85A32] text-white font-semibold text-xs tracking-widest uppercase rounded-sm flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Instant Quote Estimator</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full py-3 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white font-medium text-xs tracking-widest uppercase rounded-sm flex items-center justify-center gap-2 border border-white/10"
            >
              <Compass className="w-3.5 h-3.5 text-[#C27D56]" />
              <span>Book Showroom Tour</span>
            </button>

            <div className="text-center pt-2 text-[11px] text-gray-500">
              Showroom Concierge: {BRAND_INFO.phone}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
