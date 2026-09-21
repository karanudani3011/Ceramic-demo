import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStats from './components/TrustStats';
import CategoriesGrid from './components/CategoriesGrid';
import FeaturedCollections from './components/FeaturedCollections';
import RoomVisualizer from './components/RoomVisualizer';
import WhyChooseUs from './components/WhyChooseUs';
import InspirationGallery from './components/InspirationGallery';
import ShowroomExperience from './components/ShowroomExperience';
import Testimonials from './components/Testimonials';
import BrandPartners from './components/BrandPartners';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

// Modals
import TileCalculatorModal from './components/TileCalculatorModal';
import SearchModal from './components/SearchModal';
import ShowroomBookingModal from './components/ShowroomBookingModal';

// Floating Fast-Action Tools
import { Calculator, Sparkles, Layers, ArrowUp } from 'lucide-react';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedTileForQuote, setSelectedTileForQuote] = useState('');

  const handleOpenQuoteModal = (tileName = '') => {
    setSelectedTileForQuote(typeof tileName === 'string' ? tileName : '');
    setQuoteModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5EF] text-[#34322E] font-sans-modern antialiased selection:bg-[#B86F52] selection:text-[#FFFDF9]">
      
      {/* Top Navbar */}
      <Navbar
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onOpenSearchModal={() => setSearchModalOpen(true)}
        onOpenBookingModal={() => setBookingModalOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-grow">
        
        {/* Fullscreen Architectural Hero */}
        <Hero
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onOpenVisualizer={() => {
            const el = document.querySelector('#visualizer');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreCollections={() => {
            const el = document.querySelector('#collections');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Brand Narrative & Count-up Trust Statistics */}
        <TrustStats
          onOpenBookingModal={() => setBookingModalOpen(true)}
        />

        {/* Asymmetric Product Categories Grid */}
        <CategoriesGrid
          onSelectCategory={(category) => {}}
          onOpenQuoteModal={(name) => handleOpenQuoteModal(name)}
        />

        {/* Featured Private Reserve Collections */}
        <FeaturedCollections
          onOpenQuoteModal={(name) => handleOpenQuoteModal(name)}
          onOpenVisualizer={() => {
            const el = document.querySelector('#visualizer');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Interactive "Imagine Your Space" Surface Visualizer */}
        <RoomVisualizer
          onOpenQuoteModal={(name) => handleOpenQuoteModal(name)}
        />

        {/* Craftsmanship & Engineering Principles */}
        <WhyChooseUs
          onOpenBookingModal={() => setBookingModalOpen(true)}
        />

        {/* Masonry Architectural Inspiration & Project Gallery */}
        <InspirationGallery
          onOpenQuoteModal={(name) => handleOpenQuoteModal(name)}
        />

        {/* Showroom Experience & Visit Planner */}
        <ShowroomExperience
          onOpenBookingModal={() => setBookingModalOpen(true)}
        />

        {/* Client & Architect Testimonials */}
        <Testimonials />

        {/* Certified Manufacturing Alliances */}
        <BrandPartners />

        {/* Final Conversion Call To Action */}
        <CallToAction
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onOpenBookingModal={() => setBookingModalOpen(true)}
        />

      </main>

      {/* Luxury Architectural Footer */}
      <Footer
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onOpenBookingModal={() => setBookingModalOpen(true)}
      />

      {/* Modals */}
      <TileCalculatorModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialTileName={selectedTileForQuote}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onOpenQuoteModal={(name) => handleOpenQuoteModal(name)}
      />

      <ShowroomBookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />

      {/* Floating Action Badge - Instant Quote & Surface Tools */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-2.5">
        <button
          onClick={() => handleOpenQuoteModal()}
          className="group flex items-center gap-2.5 px-4 py-3 bg-[#B86F52] hover:bg-[#A55E42] text-[#FFFDF9] text-xs font-semibold uppercase tracking-widest rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
          aria-label="Calculate Tile Estimate"
        >
          <Calculator className="w-4 h-4" />
          <span className="hidden sm:inline">Tile & Box Calculator</span>
        </button>
      </div>

    </div>
  );
}
