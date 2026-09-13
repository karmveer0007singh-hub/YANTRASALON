import React from 'react';
import { useSalon } from '../context/SalonContext';
import { PhoneCall, Compass, Sparkles, MapPin, Star, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  const { salonInfo, setActivePage } = useSalon();

  return (
    <section id="hero-section" className="relative overflow-hidden pt-6 pb-16 lg:pt-12 lg:pb-24">
      {/* Subtle decorative gold radial glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[350px] bg-[#c29b28]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16161b] border border-[#d4af37]/30 text-xs text-[#dec16b] mx-auto lg:mx-0 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="tracking-wider uppercase font-medium">A Family Salon • Jodhpur, Rajasthan</span>
            </div>

            {/* Main Headline - exact words requested */}
            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#faf8f5] tracking-tight leading-[1.12]">
              Your Style. <br />
              Your Confidence. <br />
              <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#dec16b] via-[#d4af37] to-[#e6cf8b]">
                Your Yantra.
              </span>
            </h1>

            {/* Short professional subtitle */}
            <p className="text-base sm:text-lg text-[#d8d4c8] max-w-2xl leading-relaxed font-light mx-auto lg:mx-0">
              Welcome to Yantra Salon in Jodhpur. Where every generation of your family experiences refined hair craft, luminous skin therapies, royal bridal artistry, and tranquil wellness rituals in a safe, pristine environment.
            </p>

            {/* Call to actions: Primary Contact Salon, Secondary Explore Services */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                id="hero-primary-contact-btn"
                onClick={() => {
                  setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-full text-sm uppercase tracking-wider font-semibold text-[#0c0c0e] bg-gradient-to-r from-[#dec16b] via-[#d4af37] to-[#c29b28] hover:shadow-[0_0_25px_rgba(212,175,55,0.45)] transition-all cursor-pointer flex items-center justify-center gap-2.5 active:scale-95"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Contact Salon</span>
              </button>

              <button
                id="hero-secondary-services-btn"
                onClick={() => {
                  setActivePage('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium text-[#faf8f5] bg-[#16161b] hover:bg-[#1e1e24] border border-[#26242c] hover:border-[#d4af37]/40 transition-all cursor-pointer flex items-center justify-center gap-2.5"
              >
                <Compass className="w-4 h-4 text-[#d4af37]" />
                <span>Explore Services</span>
              </button>
            </div>

            {/* Trust highlights */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-[#26242c]/70 text-left max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="text-xl sm:text-2xl font-serif-display font-bold text-[#faf8f5]">100%</p>
                <p className="text-xs text-[#a3a099]">Sterilized Tools & Kits</p>
              </div>
              <div className="border-l border-[#26242c] pl-4">
                <p className="text-xl sm:text-2xl font-serif-display font-bold text-[#faf8f5]">All Ages</p>
                <p className="text-xs text-[#a3a099]">Family Salon Care</p>
              </div>
              <div className="border-l border-[#26242c] pl-4">
                <p className="text-xl sm:text-2xl font-serif-display font-bold text-[#d4af37]">Jodhpur</p>
                <p className="text-xs text-[#a3a099]">Residency Road Hub</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Large Salon / Beauty Image Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gold frame */}
              <div className="absolute -inset-2.5 rounded-2xl border border-[#d4af37]/20 pointer-events-none -rotate-1 hidden sm:block"></div>
              
              {/* Main Image Container */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-black/80 border border-[#26242c] bg-[#141417] aspect-[4/5] group">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85"
                  alt="Yantra Salon luxury salon and beauty experience demo placeholder"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.92]"
                />
                
                {/* Gradient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/20 to-transparent"></div>

                {/* Floating badge top */}
                <div className="absolute top-4 left-4 bg-[#0c0c0e]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#d4af37]/40 text-xs font-medium text-[#f7f5ef] flex items-center gap-1.5 shadow-lg">
                  <Star className="w-3.5 h-3.5 fill-[#d4af37] text-[#d4af37]" />
                  <span>Jodhpur’s Family Sanctuary</span>
                </div>

                {/* Floating Card Bottom */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-[#0c0c0e]/90 backdrop-blur-md border border-[#26242c] space-y-1.5 shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                      Yantra Signature
                    </span>
                    <span className="text-[11px] text-[#a3a099] flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#d4af37]" />
                      Jodhpur
                    </span>
                  </div>
                  <p className="text-sm font-serif-display font-medium text-[#faf8f5]">
                    Hair • Skin • Bridal • Nails • Spa • Grooming
                  </p>
                  <p className="text-[11px] text-[#a3a099] italic">
                    Curated demo preview • Contact salon for customized consultations
                  </p>
                </div>
              </div>

              {/* Decorative accent element */}
              <div className="absolute -bottom-4 -right-3 sm:-right-4 bg-[#1e1e24] border border-[#d4af37]/30 p-3.5 rounded-xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#faf8f5]">Safety & Purity First</p>
                  <p className="text-[11px] text-[#a3a099]">Single-use sterile disposables</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
