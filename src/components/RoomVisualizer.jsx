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
  const [sheenMode, setSheenMode] = useState('polished');
  const [lightingLevel, setLightingLevel] = useState(80);

  const activeRoom = VISUALIZER_ROOMS[selectedRoomIndex];
  const activeSurface = activeRoom.surfaces[selectedSurfaceIndex] || activeRoom.surfaces[0];

  const handleRoomChange = (idx) => {
    setSelectedRoomIndex(idx);
    setSelectedSurfaceIndex(0);
  };

  return (
    <section id="visualizer" className="py-20 lg:py-28 bg-[#EDE5D8] border-b border-[#D9CEBC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B86F52] font-semibold mb-3">
            <Layers className="w-4 h-4" />
            Interactive Surface Studio
          </div>
          <h2 className="font-display-luxury text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#34322E]">
            Imagine Your Space
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#777168] font-light">
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
                  ? 'bg-[#34322E] text-[#FFFDF9] shadow-md'
                  : 'bg-[#FFFDF9] text-[#777168] hover:bg-[#F8F5EF] border border-[#D9CEBC] hover:border-[#B86F52]/40'
              }`}
            >
              {room.name}
            </button>
          ))}
        </div>

        {/* Visualizer Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#FFFDF9] border border-[#EDE5D8] rounded-sm p-4 sm:p-8 shadow-xl">
          
          {/* Main Interactive Viewport */}
          <div className="lg:col-span-8 relative h-[360px] sm:h-[480px] lg:h-[540px] rounded-sm overflow-hidden bg-[#34322E] shadow-inner group">
            
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

            {/* Top Indicator Badge */}
            <div className="absolute top-4 left-4 z-10">
              <div className="px-3.5 py-1.5 bg-[#FFFDF9]/90 backdrop-blur-md rounded-sm border border-[#EDE5D8] text-[#34322E] text-xs flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activeSurface.colorCode }} />
                <span className="font-semibold tracking-wide">{activeSurface.name}</span>
              </div>
            </div>

            {/* Live Spec Overlay at Bottom */}
            <div className="absolute bottom-4 left-4 right-4 z-10 bg-[#34322E]/85 backdrop-blur-md p-4 rounded-sm border border-[#FFFDF9]/15 text-[#FFFDF9] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3">
                <span className="text-[#C9A875] font-mono font-bold uppercase">{activeSurface.type}</span>
                <span className="hidden sm:inline text-[#EDE5D8]/50">•</span>
                <span className="text-[#EDE5D8] font-mono">{activeSurface.specs}</span>
              </div>
              <button
                onClick={() => onOpenQuoteModal(activeSurface.name)}
                className="px-4 py-1.5 bg-[#B86F52] hover:bg-[#A55E42] text-[#FFFDF9] font-semibold uppercase tracking-wider rounded-sm transition-colors text-[11px] flex items-center gap-1.5"
              >
                <span>Calculate Sq.Ft</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Controls & Surface Selection Palettes */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#EDE5D8]">
                <h3 className="font-display-luxury text-lg font-bold text-[#34322E]">
                  Select Surface Material
                </h3>
                <span className="text-xs font-mono text-[#B86F52] font-semibold">
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
                          ? 'border-[#B86F52] bg-[#B86F52]/08 shadow-sm'
                          : 'border-[#EDE5D8] bg-[#F8F5EF] hover:border-[#B86F52]/40 hover:bg-[#FFFDF9]'
                      }`}
                    >
                      {/* Color Swatch */}
                      <div
                        className="w-10 h-10 rounded-sm shrink-0 border border-[#34322E]/15 shadow-inner flex items-center justify-center"
                        style={{ backgroundColor: surf.colorCode }}
                      >
                        {isSelected && <Check className="w-4 h-4 text-[#FFFDF9] drop-shadow-sm" />}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="text-xs sm:text-sm font-semibold text-[#34322E] truncate font-display-luxury">
                          {surf.name}
                        </div>
                        <div className="text-[11px] text-[#777168] truncate">
                          {surf.accent}
                        </div>
                      </div>

                      <div className="text-[11px] font-mono text-[#B86F52] font-semibold">
                        {surf.priceIndicator}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Luster & Sheen Selector */}
              <div className="mt-6 pt-4 border-t border-[#EDE5D8]">
                <label className="block text-xs uppercase tracking-widest text-[#777168] font-semibold mb-2">
                  Surface Luster &amp; Sheen
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
                          ? 'bg-[#34322E] text-[#FFFDF9] border-[#34322E]'
                          : 'bg-[#F8F5EF] text-[#777168] border-[#EDE5D8] hover:border-[#34322E]/30'
                      }`}
                    >
                      {mode.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Lighting Slider */}
              <div className="mt-5">
                <div className="flex justify-between items-center text-xs text-[#777168] mb-1.5">
                  <span className="uppercase tracking-widest font-semibold flex items-center gap-1.5">
                    <Sun className="w-3.5 h-3.5 text-[#C9A875]" />
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
                  className="w-full accent-[#B86F52] cursor-pointer"
                />
              </div>
            </div>

            {/* Quick Action */}
            <div className="pt-4 border-t border-[#EDE5D8]">
              <button
                onClick={() => onOpenQuoteModal(activeSurface.name)}
                className="w-full py-3.5 bg-[#B86F52] hover:bg-[#A55E42] text-[#FFFDF9] text-xs font-semibold uppercase tracking-widest rounded-sm transition-colors shadow-md flex items-center justify-center gap-2"
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
