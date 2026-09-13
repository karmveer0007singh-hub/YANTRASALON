import React from 'react';
import { useSalon } from '../context/SalonContext';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

export const StickyMobileBar: React.FC = () => {
  const { salonInfo, setActivePage } = useSalon();

  return (
    <div
      id="sticky-mobile-booking-bar"
      className="fixed bottom-0 inset-x-0 z-40 bg-[#0c0c0e]/95 backdrop-blur-md border-t border-[#26242c] p-3 md:hidden shadow-[0_-8px_25px_rgba(0,0,0,0.7)]"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Quick Call */}
        <a
          href={`tel:${salonInfo.phone}`}
          className="w-12 h-12 rounded-xl bg-[#16161b] border border-[#26242c] flex items-center justify-center text-[#d4af37] shrink-0 active:scale-95 transition-transform"
          aria-label="Call Yantra Salon"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Quick WhatsApp */}
        <a
          href={`https://wa.me/${salonInfo.whatsappNumber}?text=Hello%20Yantra%20Salon,%20I%20would%20like%20to%20inquire%20about%20your%20services`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-xl bg-[#16161b] border border-[#26242c] flex items-center justify-center text-[#25D366] shrink-0 active:scale-95 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </a>

        {/* Primary Contact CTA */}
        <button
          onClick={() => {
            setActivePage('contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex-1 h-12 rounded-xl bg-gradient-to-r from-[#dec16b] via-[#d4af37] to-[#c29b28] text-[#0c0c0e] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#d4af37]/20 active:scale-98 transition-all cursor-pointer"
        >
          <MapPin className="w-4 h-4" />
          <span>Contact & Visit</span>
        </button>
      </div>
    </div>
  );
};
