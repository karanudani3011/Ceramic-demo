import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Calendar, Clock, Compass, CheckCircle2, User, Phone, Mail, Sparkles, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BRAND_INFO } from '../data/tilesData';

export default function ShowroomBookingModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [consultationType, setConsultationType] = useState('In-Person Showroom Visit');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('2026-09-28');
  const [timeSlot, setTimeSlot] = useState('11:00 AM');
  const [attendees, setAttendees] = useState('1-2 Guests');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
    } catch (err) {}
  };

  const inputClass = "w-full px-4 py-3 bg-[#F8F5EF] border border-[#D9CEBC] text-[#34322E] rounded-sm text-xs focus:outline-none focus:border-[#B86F52] placeholder:text-[#777168]/60";
  const labelClass = "block text-xs uppercase tracking-widest text-[#777168] font-semibold mb-1";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-[#34322E]/70 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-xl bg-[#FFFDF9] text-[#34322E] border border-[#EDE5D8] rounded-sm shadow-2xl overflow-hidden z-10 my-8"
      >
        {/* Header */}
        <div className="p-6 border-b border-[#EDE5D8] flex items-center justify-between bg-[#F8F5EF]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-[#B86F52] text-[#FFFDF9] flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display-luxury text-xl sm:text-2xl font-bold text-[#34322E]">
                Book VIP Showroom Experience
              </h3>
              <p className="text-xs text-[#777168]">
                Private gallery tour with dedicated architectural material specialist.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#777168] hover:text-[#34322E] rounded-full hover:bg-[#EDE5D8] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Type Toggle */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-[#EDE5D8] border border-[#D9CEBC] rounded-sm">
                {['In-Person Showroom Visit', 'Virtual 3D Video Tour'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setConsultationType(type)}
                    className={`py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors ${
                      consultationType === type
                        ? 'bg-[#B86F52] text-[#FFFDF9] shadow-md'
                        : 'text-[#777168] hover:text-[#34322E]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Your Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. David Sterling"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="david@sterling-arch.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (212) 555-0198"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Party Size</label>
                  <select
                    value={attendees}
                    onChange={(e) => setAttendees(e.target.value)}
                    className={inputClass}
                  >
                    <option value="1-2 Guests">1–2 Guests (Architect / Homeowner)</option>
                    <option value="3-5 Design Team">3–5 Studio Design Team</option>
                    <option value="Executive Delegation">Developer / Executive Delegation</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Preferred Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Preferred Time</label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className={inputClass}
                  >
                    <option value="10:00 AM">10:00 AM (Morning Daylight)</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="02:00 PM">02:00 PM (Afternoon)</option>
                    <option value="04:00 PM">04:00 PM</option>
                    <option value="05:30 PM">05:30 PM (Evening Ambient)</option>
                  </select>
                </div>
              </div>

              <div className="p-3.5 bg-[#EDE5D8] border border-[#D9CEBC] rounded-sm text-xs text-[#34322E] flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B86F52] shrink-0 mt-0.5" />
                <span>Showroom Location: {BRAND_INFO.address} (Complimentary valet provided)</span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#B86F52] hover:bg-[#A55E42] text-[#FFFDF9] text-xs font-semibold uppercase tracking-widest rounded-sm transition-colors shadow-lg"
                >
                  Confirm Appointment Booking
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 bg-[#B86F52]/15 border border-[#B86F52] text-[#B86F52] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="font-display-luxury text-2xl font-bold text-[#34322E]">
                  VIP Appointment Confirmed!
                </h4>
                <p className="text-xs sm:text-sm text-[#777168] font-light mt-2 max-w-md mx-auto">
                  We look forward to welcoming you, <strong className="text-[#34322E]">{name}</strong>. A private calendar invitation and showroom pass have been emailed to <span className="font-mono text-[#B86F52]">{email}</span>.
                </p>
              </div>

              <div className="p-4 bg-[#EDE5D8] border border-[#D9CEBC] rounded-sm text-xs text-left space-y-2 text-[#777168] max-w-sm mx-auto">
                <div className="flex justify-between">
                  <span>Consultation:</span>
                  <span className="font-semibold text-[#34322E]">{consultationType}</span>
                </div>
                <div className="flex justify-between">
                  <span>Scheduled Date:</span>
                  <span className="font-mono text-[#34322E]">{date} at {timeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span>Assigned Advisor:</span>
                  <span className="text-[#B86F52] font-medium">Senior Surface Specialist</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="px-8 py-3.5 bg-[#B86F52] hover:bg-[#A55E42] text-[#FFFDF9] text-xs font-semibold uppercase tracking-widest rounded-sm transition-colors shadow-lg"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
