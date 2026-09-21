import React, { useState } from 'react';
import { 
  MessageCircle, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck,
  Globe
} from 'lucide-react';
import { BRAND_INFO, CATEGORIES } from '../data/tilesData';

// Clean inline SVGs for social brands
const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default function Footer({ onOpenQuoteModal, onOpenBookingModal }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 5000);
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Collections', href: '#collections' },
    { name: 'Tile Visualizer', href: '#visualizer' },
    { name: 'Architectural Projects', href: '#inspiration' },
    { name: 'Showroom & Hours', href: '#showroom' },
    { name: 'Why Aurelia', href: '#why-us' },
  ];

  const collectionLinks = [
    { name: 'Italian Marble Finish Slabs', href: '#collections' },
    { name: 'Large Format Porcelain Slabs', href: '#categories' },
    { name: 'High-Traffic Floor Tiles', href: '#categories' },
    { name: 'Relief & Fluted Wall Tiles', href: '#categories' },
    { name: '20mm Monolithic Outdoor Pavers', href: '#categories' },
    { name: 'Artisan Moroccan Zellige', href: '#categories' },
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-[#EDE5D8] text-[#34322E] border-t border-[#D9CEBC] relative overflow-hidden">
      
      {/* Top Newsletter & Catalog Download Banner */}
      <div className="border-b border-[#D9CEBC] py-12 bg-[#E5D9CA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-2">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#B86F52] font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                2026 Master Lookbook
              </span>
              <h3 className="font-display-luxury text-2xl sm:text-3xl font-bold text-[#34322E]">
                Download the Digital Architectural Catalog
              </h3>
              <p className="text-xs sm:text-sm text-[#777168] font-light">
                Receive full technical datasheets, high-res tile textures, slip ratings, and CAD Hatch patterns.
              </p>
            </div>

            <div className="lg:col-span-6">
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter architectural studio email..."
                  required
                  className="flex-1 px-4 py-3.5 bg-[#FFFDF9] border border-[#D9CEBC] text-[#34322E] rounded-sm text-xs focus:outline-none focus:border-[#B86F52] placeholder:text-[#777168]/60"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-[#B86F52] hover:bg-[#A55E42] text-[#FFFDF9] text-xs font-semibold uppercase tracking-widest rounded-sm transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>{subscribed ? 'Catalog Sent!' : 'Get 2026 Catalog'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
              {subscribed && (
                <p className="text-xs text-[#7B8065] mt-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Thank you! The digital lookbook download link has been dispatched to your inbox.
                </p>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-[#B86F52] text-[#FFFDF9] flex items-center justify-center font-display-luxury font-bold text-xl">
                A
              </div>
              <div>
                <span className="font-display-luxury text-2xl font-bold tracking-[0.2em] text-[#34322E] block">
                  {BRAND_INFO.name}
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#B86F52] font-medium block">
                  {BRAND_INFO.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#777168] leading-relaxed font-light">
              Pioneers in high-performance Italian porcelain slabs, architectural ceramic cladding, and rare quarry reproductions. Engineering luxury spaces that endure for generations.
            </p>

            {/* Thin champagne separator */}
            <div className="w-12 h-[1px] bg-[#C9A875]/50" />

            {/* Social Media Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-sm bg-[#FFFDF9] border border-[#D9CEBC] flex items-center justify-center text-[#777168] hover:text-[#FFFDF9] hover:border-[#B86F52] hover:bg-[#B86F52] transition-all"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-sm bg-[#FFFDF9] border border-[#D9CEBC] flex items-center justify-center text-[#777168] hover:text-[#FFFDF9] hover:border-[#B86F52] hover:bg-[#B86F52] transition-all"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-sm bg-[#FFFDF9] border border-[#D9CEBC] flex items-center justify-center text-[#777168] hover:text-[#FFFDF9] hover:border-[#B86F52] hover:bg-[#B86F52] transition-all"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Concierge"
                className="w-9 h-9 rounded-sm bg-[#FFFDF9] border border-[#D9CEBC] flex items-center justify-center text-[#777168] hover:text-[#FFFDF9] hover:border-[#B86F52] hover:bg-[#B86F52] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#34322E] font-bold font-display-luxury pb-2 border-b border-[#D9CEBC]">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#777168]">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="hover:text-[#B86F52] hover:underline underline-offset-4 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#34322E] font-bold font-display-luxury pb-2 border-b border-[#D9CEBC]">
              Surface Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-[#777168]">
              {collectionLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="hover:text-[#B86F52] hover:underline underline-offset-4 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Showroom & Contact Info */}
          <div className="lg:col-span-3 space-y-4 text-xs">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#34322E] font-bold font-display-luxury pb-2 border-b border-[#D9CEBC]">
              Showroom &amp; Concierge
            </h4>
            
            <div className="space-y-3 text-[#777168]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B86F52] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{BRAND_INFO.address}</span>
              </div>
              
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B86F52] shrink-0" />
                <a href={`tel:${BRAND_INFO.phone}`} className="hover:text-[#B86F52] transition-colors">
                  {BRAND_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B86F52] shrink-0" />
                <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-[#B86F52] transition-colors">
                  {BRAND_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#B86F52] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{BRAND_INFO.hours}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBookingModal}
                className="w-full py-2.5 bg-[#FFFDF9] hover:bg-[#B86F52] hover:text-[#FFFDF9] text-[#34322E] border border-[#D9CEBC] hover:border-[#B86F52] rounded-sm text-[11px] uppercase font-semibold tracking-wider transition-all"
              >
                Book VIP Private Tour
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#D9CEBC] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777168]">
          <div>
            © 2026 {BRAND_INFO.fullName}. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6 text-[11px]">
            <span className="hover:text-[#B86F52] transition-colors cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-[#B86F52] transition-colors cursor-pointer">Terms of Specification</span>
            <span>•</span>
            <span className="hover:text-[#B86F52] transition-colors cursor-pointer">Architectural Certifications</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
