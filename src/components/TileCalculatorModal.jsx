import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Calculator, 
  CheckCircle2, 
  Box, 
  Layers, 
  ArrowRight, 
  Sparkles, 
  Send,
  Phone,
  Building,
  User,
  Mail
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { FEATURED_COLLECTIONS, CATEGORIES } from '../data/tilesData';

export default function TileCalculatorModal({ isOpen, onClose, initialTileName = '' }) {
  const [step, setStep] = useState(1); // 1: Specs & Area, 2: Sample Kit & Contact Info, 3: Success Confirmation
  const [selectedMaterial, setSelectedMaterial] = useState(initialTileName || 'Calacatta Oro Imperial (120x278cm)');
  const [unit, setUnit] = useState('sqft'); // 'sqft' | 'sqm'
  const [length, setLength] = useState('20');
  const [width, setWidth] = useState('15');
  const [wastagePercent, setWastagePercent] = useState(10); // 10% standard, 15% diagonal
  const [tileFormat, setTileFormat] = useState('120x278'); // '60x120', '80x160', '120x278', '160x320'

  // Contact Form
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('Luxury Residential');
  const [shippingAddress, setShippingAddress] = useState('');
  const [requestSampleBox, setRequestSampleBox] = useState(true);

  useEffect(() => {
    if (initialTileName) {
      setSelectedMaterial(initialTileName);
    }
  }, [initialTileName]);

  if (!isOpen) return null;

  // Area Calculations
  const numLength = parseFloat(length) || 0;
  const numWidth = parseFloat(width) || 0;
  const baseArea = numLength * numWidth;
  const totalAreaWithWastage = baseArea * (1 + wastagePercent / 100);

  // Approximate Coverage per box depending on format (in sqft)
  const formatCoverages = {
    '60x120': { sqftPerBox: 15.5, label: '60x120 cm (2 pcs / box)' },
    '80x160': { sqftPerBox: 27.5, label: '80x160 cm (2 pcs / box)' },
    '120x278': { sqftPerBox: 35.9, label: '120x278 cm (1 slab / crate)' },
    '160x320': { sqftPerBox: 55.1, label: '160x320 cm (1 mega slab / crate)' }
  };

  const currentCoverage = formatCoverages[tileFormat] || formatCoverages['120x278'];
  const coverageMultiplier = unit === 'sqft' ? 1 : 10.764; // convert sqm if needed
  const effectiveAreaInSqFt = unit === 'sqft' ? totalAreaWithWastage : totalAreaWithWastage * 10.764;
  const boxesNeeded = Math.ceil(effectiveAreaInSqFt / currentCoverage.sqftPerBox) || 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(3);
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // safe fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-2xl bg-[#1B1C20] text-white border border-white/20 rounded-sm shadow-2xl overflow-hidden z-10 my-8"
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#121316]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-[#C27D56] text-white flex items-center justify-center">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display-luxury text-xl sm:text-2xl font-bold text-white">
                Project Area & Quote Estimator
              </h3>
              <p className="text-xs text-[#A8A297]">
                Precision calculation for tile boxes, slab crating, and complimentary sample kits.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="grid grid-cols-3 bg-[#121316]/50 text-center text-xs font-semibold uppercase tracking-wider border-b border-white/10">
          <div className={`py-2.5 border-b-2 transition-colors ${step === 1 ? 'border-[#C27D56] text-[#DFBD69]' : 'border-transparent text-gray-400'}`}>
            1. Dimensions
          </div>
          <div className={`py-2.5 border-b-2 transition-colors ${step === 2 ? 'border-[#C27D56] text-[#DFBD69]' : 'border-transparent text-gray-400'}`}>
            2. Contact & Samples
          </div>
          <div className={`py-2.5 border-b-2 transition-colors ${step === 3 ? 'border-[#C27D56] text-[#DFBD69]' : 'border-transparent text-gray-400'}`}>
            3. Summary
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          
          {/* STEP 1: CALCULATOR */}
          {step === 1 && (
            <div className="space-y-6">
              
              {/* Selected Material */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-[#A8A297] font-semibold mb-2">
                  Select Surface Material / Collection
                </label>
                <select
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  className="w-full px-4 py-3 bg-black/60 border border-white/15 text-white rounded-sm text-xs sm:text-sm focus:outline-none focus:border-[#C27D56]"
                >
                  <option value="Calacatta Oro Imperial (120x278cm)">Calacatta Oro Imperial (120x278cm Mega Slab)</option>
                  <option value="Nero Marquina Nocturne (160x320cm)">Nero Marquina Nocturne (160x320cm Continuous)</option>
                  <option value="Nordic Timbercraft Oak (20x120cm)">Nordic Timbercraft Oak (20x120cm French Parquet)</option>
                  <option value="Pietra Di Val Stone (20mm Paver)">Pietra Di Val Quartzite (60x120x2cm Outdoor Paver)</option>
                  <option value="Arabescato Corchia Monolith">Arabescato Corchia Monolith Kitchen Slab</option>
                  <option value="Moroccan Zellige Ochre">Moroccan Zellige Ochre Artisan Tiles</option>
                  <option value="Custom Blueprint / Architect Specification">Custom Blueprint / Architect Specification</option>
                </select>
              </div>

              {/* Dimensions Input */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs uppercase tracking-widest text-[#A8A297] font-semibold">
                    Room Dimensions
                  </label>
                  <div className="flex items-center gap-1 text-xs">
                    <button
                      type="button"
                      onClick={() => setUnit('sqft')}
                      className={`px-2 py-0.5 rounded-sm ${unit === 'sqft' ? 'bg-[#C27D56] text-white' : 'bg-white/10 text-gray-400'}`}
                    >
                      Feet (Sq.Ft)
                    </button>
                    <button
                      type="button"
                      onClick={() => setUnit('sqm')}
                      className={`px-2 py-0.5 rounded-sm ${unit === 'sqm' ? 'bg-[#C27D56] text-white' : 'bg-white/10 text-gray-400'}`}
                    >
                      Meters (m²)
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[11px] text-gray-400 block mb-1">Length ({unit === 'sqft' ? 'ft' : 'm'})</span>
                    <input
                      type="number"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      min="1"
                      className="w-full px-4 py-3 bg-black/60 border border-white/15 text-white rounded-sm text-sm focus:outline-none focus:border-[#C27D56]"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 block mb-1">Width ({unit === 'sqft' ? 'ft' : 'm'})</span>
                    <input
                      type="number"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      min="1"
                      className="w-full px-4 py-3 bg-black/60 border border-white/15 text-white rounded-sm text-sm focus:outline-none focus:border-[#C27D56]"
                    />
                  </div>
                </div>
              </div>

              {/* Wastage and Tile Format Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#A8A297] font-semibold mb-2">
                    Wastage & Cut Factor
                  </label>
                  <select
                    value={wastagePercent}
                    onChange={(e) => setWastagePercent(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-black/60 border border-white/15 text-white rounded-sm text-xs focus:outline-none focus:border-[#C27D56]"
                  >
                    <option value={10}>10% Standard Straight Pattern</option>
                    <option value={15}>15% Herringbone / Diagonal Cuts</option>
                    <option value={20}>20% Curved / Complex Columns</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#A8A297] font-semibold mb-2">
                    Tile Format Standard
                  </label>
                  <select
                    value={tileFormat}
                    onChange={(e) => setTileFormat(e.target.value)}
                    className="w-full px-4 py-3 bg-black/60 border border-white/15 text-white rounded-sm text-xs focus:outline-none focus:border-[#C27D56]"
                  >
                    <option value="120x278">120x278 cm (Continuous Mega Slab)</option>
                    <option value="160x320">160x320 cm (Monumental Slab)</option>
                    <option value="80x160">80x160 cm (Grand Porcelain Tile)</option>
                    <option value="60x120">60x120 cm (Architectural Standard)</option>
                  </select>
                </div>
              </div>

              {/* Live Calculation Output Card */}
              <div className="p-4 sm:p-5 bg-gradient-to-r from-white/10 to-white/5 border border-[#C27D56]/40 rounded-sm">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 block">Net Room Area</span>
                    <span className="font-mono text-base sm:text-xl font-bold text-white">
                      {baseArea.toFixed(1)} {unit === 'sqft' ? 'sq.ft' : 'm²'}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#C27D56] block">Total with Buffer (+{wastagePercent}%)</span>
                    <span className="font-mono text-base sm:text-xl font-bold text-[#DFBD69]">
                      {totalAreaWithWastage.toFixed(1)} {unit === 'sqft' ? 'sq.ft' : 'm²'}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 block">Est. Crates/Boxes</span>
                    <span className="font-mono text-base sm:text-xl font-bold text-white">
                      {boxesNeeded} Units
                    </span>
                  </div>
                </div>
              </div>

              {/* Next Step Button */}
              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full py-4 bg-[#C27D56] hover:bg-[#A85A32] text-white text-xs font-semibold uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Proceed to Free Sample Kit & Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* STEP 2: CONTACT & SHIPPING */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#A8A297] font-semibold mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Elena Rostova"
                    className="w-full px-4 py-3 bg-black/60 border border-white/15 text-white rounded-sm text-xs focus:outline-none focus:border-[#C27D56]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#A8A297] font-semibold mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="elena@rostova-arch.com"
                    className="w-full px-4 py-3 bg-black/60 border border-white/15 text-white rounded-sm text-xs focus:outline-none focus:border-[#C27D56]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#A8A297] font-semibold mb-1">
                    Direct Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (212) 555-0198"
                    className="w-full px-4 py-3 bg-black/60 border border-white/15 text-white rounded-sm text-xs focus:outline-none focus:border-[#C27D56]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#A8A297] font-semibold mb-1">
                    Project Type
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-4 py-3 bg-black/60 border border-white/15 text-white rounded-sm text-xs focus:outline-none focus:border-[#C27D56]"
                  >
                    <option value="Luxury Residential">Luxury Private Residence / Villa</option>
                    <option value="Architectural Penthouse">Architectural Penthouse</option>
                    <option value="Boutique Hospitality">Boutique Hotel / Spa</option>
                    <option value="Commercial Development">Commercial / Office Complex</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-[#A8A297] font-semibold mb-1">
                  Sample Box Delivery Address
                </label>
                <input
                  type="text"
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  placeholder="Street Address, City, State, Postal Code"
                  className="w-full px-4 py-3 bg-black/60 border border-white/15 text-white rounded-sm text-xs focus:outline-none focus:border-[#C27D56]"
                />
              </div>

              {/* Sample Box Checkbox */}
              <div className="p-3.5 bg-white/5 border border-white/10 rounded-sm flex items-center gap-3">
                <input
                  type="checkbox"
                  id="sampleCheck"
                  checked={requestSampleBox}
                  onChange={(e) => setRequestSampleBox(e.target.checked)}
                  className="w-4 h-4 accent-[#C27D56] rounded"
                />
                <label htmlFor="sampleCheck" className="text-xs text-[#D9D0C3] cursor-pointer">
                  Include complimentary physical touch sample swatches & architectural spec book (Shipped next day via FedEx Priority).
                </label>
              </div>

              {/* Buttons */}
              <div className="pt-4 flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-gray-300 text-xs font-semibold uppercase tracking-widest rounded-sm transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3.5 bg-[#C27D56] hover:bg-[#A85A32] text-white text-xs font-semibold uppercase tracking-widest rounded-sm transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit & Generate Formal Quote</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: SUCCESS CONFIRMATION */}
          {step === 3 && (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 bg-[#C27D56]/20 border border-[#C27D56] text-[#C27D56] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="font-display-luxury text-2xl font-bold text-white">
                  Quotation Request Dispatched!
                </h4>
                <p className="text-xs sm:text-sm text-[#D9D0C3] font-light mt-2 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{fullName || 'Valued Client'}</strong>. Our senior surface specialist has generated Quotation Reference <span className="font-mono text-[#DFBD69]">#AUR-2026-{Math.floor(1000 + Math.random() * 9000)}</span>.
                </p>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 rounded-sm text-xs text-left space-y-2 text-[#A8A297] max-w-md mx-auto">
                <div className="flex justify-between">
                  <span>Specified Surface:</span>
                  <span className="font-semibold text-white">{selectedMaterial}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Surface Area:</span>
                  <span className="font-mono text-white">{totalAreaWithWastage.toFixed(1)} {unit}</span>
                </div>
                <div className="flex justify-between">
                  <span>Crates / Boxes:</span>
                  <span className="font-mono text-white">{boxesNeeded} Units</span>
                </div>
                <div className="flex justify-between">
                  <span>Sample Box Dispatch:</span>
                  <span className="text-[#DFBD69] font-medium">Tracking via {email || 'Email'}</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="px-8 py-3.5 bg-[#C27D56] hover:bg-[#A85A32] text-white text-xs font-semibold uppercase tracking-widest rounded-sm transition-colors shadow-lg"
              >
                Return to Showroom
              </button>
            </div>
          )}

        </div>
      </motion.div>
    </div>
  );
}
