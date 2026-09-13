import React from 'react';
import { useSalon } from '../context/SalonContext';
import { ActivePage } from '../types';
import {
  MapPin,
  Phone,
  MessageCircle,
  Instagram,
  Clock,
  ExternalLink,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { salonInfo, setActivePage, setIsCMSOpen } = useSalon();

  const handleNav = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="salon-footer" className="bg-[#08080a] border-t border-[#26242c] text-[#d8d4c8] pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-[#26242c]">
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rotate-45 bg-[#d4af37]"></span>
              <span className="font-serif-display text-2xl tracking-[0.18em] font-bold text-[#faf8f5]">
                YANTRA
              </span>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
              A Family Salon • Jodhpur
            </p>
            <p className="text-sm text-[#a3a099] leading-relaxed">
              Jodhpur’s sanctuary for holistic hair styling, modern skin rejuvenation, couture bridal glamour, and complete family grooming in Rajasthan.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://wa.me/${salonInfo.whatsappNumber}?text=Hello%20Yantra%20Salon,%20I%20would%20like%20to%20inquire%20about%20your%20services`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#16161b] border border-[#26242c] flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0c0c0e] transition-all"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:${salonInfo.phone}`}
                className="w-10 h-10 rounded-full bg-[#16161b] border border-[#26242c] flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0c0c0e] transition-all"
                aria-label="Call Salon"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={salonInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#16161b] border border-[#26242c] flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0c0c0e] transition-all"
                aria-label="Visit Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={salonInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#16161b] border border-[#26242c] flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0c0c0e] transition-all"
                aria-label="Directions on Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[#faf8f5] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#dec16b] transition-colors cursor-pointer text-left"
                >
                  Home & Highlights
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#dec16b] transition-colors cursor-pointer text-left"
                >
                  Complete Service Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#dec16b] transition-colors cursor-pointer text-left"
                >
                  About Yantra Salon & Hygiene
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gallery')}
                  className="hover:text-[#dec16b] transition-colors cursor-pointer text-left"
                >
                  Visual Lookbook & Ambience
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('offers')}
                  className="hover:text-[#dec16b] transition-colors cursor-pointer text-left text-[#dec16b]"
                >
                  Seasonal & Family Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#dec16b] transition-colors cursor-pointer text-left font-medium text-[#faf8f5]"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours of Operation */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[#faf8f5] flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#d4af37]" />
              Opening Hours
            </h3>
            <div className="space-y-2 text-xs">
              {salonInfo.openingHours.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center py-1 border-b border-[#1e1e24]"
                >
                  <span className="text-[#d8d4c8]">{item.day}</span>
                  <span className="text-[#f7f5ef] font-medium">{item.hours}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[#dec16b]/90 flex items-center gap-1.5 pt-1">
              <Sparkles className="w-3 h-3 text-[#d4af37]" />
              Appointments & Walk-ins both welcomed
            </p>
          </div>

          {/* Col 4: Salon Location */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-[#faf8f5] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#d4af37]" />
              Visit Us in Jodhpur
            </h3>
            <div className="p-3.5 bg-[#141417] rounded-xl border border-[#26242c] space-y-2 text-xs">
              <p className="font-medium text-[#faf8f5]">{salonInfo.name}</p>
              <p className="text-[#a3a099] leading-relaxed">{salonInfo.fullAddress}</p>
              <p className="text-[#d4af37] text-[11px]">Landmark: {salonInfo.landmark}</p>
              <div className="pt-2">
                <a
                  href={salonInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#faf8f5] hover:text-[#dec16b] font-medium transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-[#a3a099]">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <span>Certified Hygiene & 100% Sanitized Tools</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Disclaimers & CMS Link */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#7a7885]">
          <div className="text-center md:text-left space-y-1">
            <p>© {new Date().getFullYear()} {salonInfo.name} – A Family Salon. Jodhpur, Rajasthan. All Rights Reserved.</p>
            <p className="text-[11px] text-[#63616b]">
              Notice: Curated imagery and pricing representations serve as demo placeholders until personalized by salon management.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCMSOpen(true)}
              className="text-[#d4af37] hover:text-[#faf8f5] flex items-center gap-1 bg-[#141417] px-3 py-1.5 rounded-lg border border-[#26242c] transition-all cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Salon Owner Content Manager</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
