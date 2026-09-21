import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  Sparkles, 
  Maximize2, 
  RotateCcw, 
  Check, 
  Sun, 
  Eye, 
  Sliders, 
  ArrowRight,
  Info
} from 'lucide-react';
import { VISUALIZER_ROOMS } from '../data/tilesData';

export default function RoomVisualizer({ onOpenQuoteModal }) {
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);
  const [selectedSurfaceIndex, setSelectedSurfaceIndex] = useState(0);
  const [sheenMode, setSheenMode] = useState('polished'); // 'polished' | 'matte' | 'natural'
  const [lightingLevel, setLightingLevel] = useState(80); // 50 to 100

  const activeRoom = VISUALIZER_ROOMS[selectedRoomIndex];
  const activeSurface = activeRoom.surfaces[selectedSurfaceIndex] || activeRoom.surfaces[0];

  const handleRoomChange = (idx) => {
    setSelectedRoomIndex(idx);
    setSelectedSurfaceIndex(0);
  };

  return (
    <section id="visualizer" className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-[#EBE5DC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C27D56] font-semibold mb-3">
            <Layers className="w-4 h-4" />
            Interactive Surface Studio
          </div>
          <h2 className="font-display-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1B1C20]">
            Imagine Your Space
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6E717D] font-light">
            Switch architectural spaces and instantly simulate Italian Statuario marble, alpine quartzite, chevron timber, and microcement slabs in real-time.
          </p>
        </div>

        {/* Room Category Tabs */}
        <div className="flex justify-center flex-wrap gap-2 sm:gap-3 mb-8">
          {VISUALIZER_ROOMS.map((room, idx) => (
            <button
              key={room.id}
              onClick={() => handleRoomChange(idx)}
              className={`px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-sm transition-all duration-300 ${
                selectedRoomIndex === idx
                  ? 'bg-[#1B1C20] text-white shadow-md'
                  : 'bg-white text-[#4E515D] hover:bg-[#EBE5DC] border border-[#EBE5DC]'
              }`}
            >
              {room.name}
            </button>
          ))}
        </div>

        {/* Visualizer Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white border border-[#EBE5DC] rounded-sm p-4 sm:p-8 shadow-xl">
          
          {/* Main Interactive Viewport */}
          <div className="lg:col-span-8 relative h-[360px] sm:h-[480px] lg:h-[540px] rounded-sm overflow-hidden bg-[#121316] shadow-inner group">
            
            {/* Background Room Image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={activeRoom.id}
                src={activeRoom.baseImage}
                alt={activeRoom.name}
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.4 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
                style={{
                  filter: `brightness(${lightingLevel}%) contrast(${sheenMode === 'polished' ? '108%' : '98%'})`
                }}
              />
            </AnimatePresence>

            {/* Dynamic Texture & Color Tone Shader Overlay */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeRoom.id}-${activeSurface.id}-${sheenMode}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.42 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 pointer-events-none mix-blend-color-burn"
                style={{ background: activeSurface.textureOverlay }}
              />
            </AnimatePresence>

            {/* Subtle Sheen / Reflection Simulation Overlay */}
            {sheenMode === 'polished' && (
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-60 mix-blend-overlay" />
            )}

            {/* Top Interactive Indicator Badge */}
            <div className="absolute top-4 left-4 z-10">
              <div className="px-3.5 py-1.5 bg-black/70 backdrop-blur-md rounded-sm border border-white/20 text-white text-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeSurface.colorCode }} />
                <span className="font-semibold tracking-wide">{activeSurface.name}</span>
              </div>
            </div>

            {/* Live Spec Overlay at Bottom */}
            <div className="absolute bottom-4 left-4 right-4 z-10 bg-black/80 backdrop-blur-md p-4 rounded-sm border border-white/15 text-white flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3">
                <span className="text-[#C27D56] font-mono font-bold uppercase">{activeSurface.type}</span>
                <span className="hidden sm:inline text-gray-400">•</span>
                <span className="text-gray-300 font-mono">{activeSurface.specs}</span>
              </div>
              <button
                onClick={() => onOpenQuoteModal(activeSurface.name)}
                className="px-4 py-1.5 bg-[#C27D56] hover:bg-[#A85A32] text-white font-semibold uppercase tracking-wider rounded-sm transition-colors text-[11px] flex items-center gap-1.5"
              >
                <span>Calculate Sq.Ft</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Controls & Surface Selection Palettes */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#EBE5DC]">
                <h3 className="font-display-luxury text-lg font-bold text-[#1B1C20]">
                  Select Surface Material
                </h3>
                <span className="text-xs font-mono text-[#C27D56] font-semibold">
                  {activeRoom.surfaces.length} Available
                </span>
              </div>

              {/* Surface Option Cards */}
              <div className="mt-4 space-y-2.5">
                {activeRoom.surfaces.map((surf, idx) => {
                  const isSelected = selectedSurfaceIndex === idx;
                  return (
                    <button
                      key={surf.id}
                      onClick={() => setSelectedSurfaceIndex(idx)}
                      className={`w-full p-3.5 rounded-sm border text-left transition-all duration-300 flex items-center gap-3.5 ${
                        isSelected
                          ? 'border-[#C27D56] bg-[#F5F0E8] shadow-sm'
                          : 'border-[#EBE5DC] bg-white hover:border-[#C27D56]/40 hover:bg-[#FBF9F5]'
                      }`}
                    >
                      {/* Color Swatch / Texture Icon */}
                      <div
                        className="w-10 h-10 rounded-sm shrink-0 border border-black/10 shadow-inner flex items-center justify-center"
                        style={{ backgroundColor: surf.colorCode }}
                      >
                        {isSelected && <Check className="w-4 h-4 text-[#1B1C20]" />}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="text-xs sm:text-sm font-semibold text-[#1B1C20] truncate font-display-luxury">
                          {surf.name}
                        </div>
                        <div className="text-[11px] text-[#6E717D] truncate">
                          {surf.accent}
                        </div>
                      </div>

                      <div className="text-[11px] font-mono text-[#C27D56] font-semibold">
                        {surf.priceIndicator}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Luster & Sheen Selector */}
              <div className="mt-6 pt-4 border-t border-[#EBE5DC]">
                <label className="block text-xs uppercase tracking-widest text-[#4E515D] font-semibold mb-2">
                  Surface Luster & Sheen
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'polished', label: 'Polished Lux' },
                    { id: 'matte', label: 'Honed Matte' },
                    { id: 'natural', label: 'Tactile R11' }
                  ].map((mode) => (
                    <button
                      key={mode.id}
                      onClick={() => setSheenMode(mode.id)}
                      className={`py-2 text-[11px] font-semibold uppercase tracking-wider rounded-sm transition-colors text-center border ${
                        sheenMode === mode.id
                          ? 'bg-[#1B1C20] text-white border-[#1B1C20]'
                          : 'bg-[#FBF9F5] text-[#4E515D] border-[#EBE5DC] hover:border-black/30'
                      }`}
                    >
                      {mode.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Lighting Slider */}
              <div className="mt-5">
                <div className="flex justify-between items-center text-xs text-[#4E515D] mb-1.5">
                  <span className="uppercase tracking-widest font-semibold flex items-center gap-1.5">
                    <Sun className="w-3.5 h-3.5 text-[#C27D56]" />
                    Ambient Light Intensity
                  </span>
                  <span className="font-mono">{lightingLevel}%</span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="115"
                  value={lightingLevel}
                  onChange={(e) => setLightingLevel(Number(e.target.value))}
                  className="w-full accent-[#C27D56] cursor-pointer"
                />
              </div>
            </div>

            {/* Quick Action */}
            <div className="pt-4 border-t border-[#EBE5DC]">
              <button
                onClick={() => onOpenQuoteModal(activeSurface.name)}
                className="w-full py-3.5 bg-[#C27D56] hover:bg-[#A85A32] text-white text-xs font-semibold uppercase tracking-widest rounded-sm transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <span>Request Sample of {activeSurface.name.split(' ')[0]}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
