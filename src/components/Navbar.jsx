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
      {/* Top Thin Warm Bar */}
      <div className="bg-[#EDE5D8] text-[#777168] text-[11px] py-1.5 px-4 sm:px-8 border-b border-[#D9CEBC] tracking-[0.15em] uppercase transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B86F52] animate-pulse"></span>
            <span className="font-light truncate">Italian Porcelain &amp; Ceramic Architectural Surfaces • 2026 Reserve</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-[11px] text-[#777168]">
            <button 
              onClick={onOpenBookingModal}
              className="flex items-center gap-1.5 hover:text-[#34322E] transition-colors cursor-pointer"
            >
              <Compass className="w-3 h-3 text-[#B86F52]" />
              <span>Book VIP Showroom Tour</span>
            </button>
            <span className="opacity-30">|</span>
            <a href={`tel:${BRAND_INFO.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-[#34322E] transition-colors">
              {BRAND_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Navbar */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#F8F5EF]/95 backdrop-blur-md text-[#34322E] shadow-md py-3 border-b border-[#D9CEBC]' 
            : 'bg-[#F8F5EF]/95 backdrop-blur-md text-[#34322E] py-4 border-b border-[#D9CEBC]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <a 
            href="#home" 
            className="flex items-center gap-3 shrink-0 group focus:outline-none"
            onClick={(e) => { e.preventDefault(); handleNavClick('home', '#home'); }}
          >
            <div className="w-9 h-9 rounded-sm flex items-center justify-center transition-all duration-300 border bg-[#34322E] border-[#34322E] text-[#FFFDF9] group-hover:border-[#B86F52] group-hover:bg-[#B86F52]">
              <span className="font-display-luxury text-lg font-bold tracking-tight">
                A
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-display-luxury text-lg sm:text-xl font-bold tracking-[0.22em] leading-none text-[#34322E] transition-colors">
                {BRAND_INFO.name}
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.28em] font-medium text-[#B86F52] uppercase mt-0.5">
                {BRAND_INFO.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
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
                    isActive
                      ? 'text-[#B86F52] font-semibold'
                      : 'text-[#777168] hover:text-[#34322E]'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.isSpecial && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B86F52] animate-pulse"></span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-[#B86F52] rounded-full" />
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
              className="p-2 rounded-full transition-all duration-200 bg-[#EDE5D8]/70 hover:bg-[#EDE5D8] text-[#34322E] hover:text-[#B86F52]"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Get Quote Button */}
            <button
              onClick={onOpenQuoteModal}
              className="relative overflow-hidden px-4 sm:px-5 py-2 text-xs font-semibold tracking-[0.15em] uppercase rounded-sm transition-all duration-200 flex items-center gap-1.5 shadow-sm hover:scale-[1.02] bg-[#B86F52] hover:bg-[#A55E42] text-[#FFFDF9]"
            >
              <span className="whitespace-nowrap">Get Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-sm transition-colors text-[#34322E] hover:bg-[#EDE5D8] hover:text-[#B86F52]"
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
          className="absolute inset-0 bg-[#34322E]/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Sliding Menu Panel */}
        <div 
          className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-[#FFFDF9] text-[#34322E] shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-out border-l border-[#EDE5D8] ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-[#EDE5D8]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-sm bg-[#B86F52] flex items-center justify-center text-[#FFFDF9] font-display-luxury font-bold text-sm">
                  A
                </div>
                <div>
                  <span className="font-display-luxury font-bold tracking-widest text-base block text-[#34322E]">
                    {BRAND_INFO.name}
                  </span>
                  <span className="text-[8px] uppercase tracking-widest text-[#B86F52] block">
                    {BRAND_INFO.tagline}
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-[#777168] hover:text-[#34322E]"
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
                      ? 'bg-[#B86F52]/10 text-[#B86F52] font-semibold border-l-2 border-[#B86F52]'
                      : 'text-[#777168] hover:text-[#34322E] hover:bg-[#EDE5D8]/50'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.name}
                    {link.isSpecial && (
                      <span className="text-[9px] px-1.5 py-0.5 bg-[#B86F52] text-[#FFFDF9] rounded-full">
                        3D
                      </span>
                    )}
                  </span>
                  <span className="text-[#C9A875] text-xs">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-[#EDE5D8] space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 bg-[#B86F52] hover:bg-[#A55E42] text-[#FFFDF9] font-semibold text-xs tracking-widest uppercase rounded-sm flex items-center justify-center gap-2 shadow-lg transition-colors"
            >
              <span>Instant Quote Estimator</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full py-3 bg-[#EDE5D8] hover:bg-[#D9CEBC] text-[#34322E] hover:text-[#34322E] font-medium text-xs tracking-widest uppercase rounded-sm flex items-center justify-center gap-2 border border-[#D9CEBC] transition-colors"
            >
              <Compass className="w-3.5 h-3.5 text-[#B86F52]" />
              <span>Book Showroom Tour</span>
            </button>

            <div className="text-center pt-2 text-[11px] text-[#777168]">
              Showroom Concierge: {BRAND_INFO.phone}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
