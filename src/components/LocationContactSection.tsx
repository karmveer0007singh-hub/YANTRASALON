import React from 'react';
import { useSalon } from '../context/SalonContext';
import {
  MapPin,
  Phone,
  MessageCircle,
  Instagram,
  Clock,
  ExternalLink,
  Navigation,
  Sparkles
} from 'lucide-react';

interface LocationContactSectionProps {
  isFullPage?: boolean;
}

export const LocationContactSection: React.FC<LocationContactSectionProps> = ({ isFullPage = false }) => {
  const { salonInfo } = useSalon();

  // Get current day of week to highlight
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayName = daysOfWeek[new Date().getDay()];

  return (
    <section id="location-contact-section" className={`py-20 bg-[#0c0c0e] ${isFullPage ? '' : 'border-t border-[#26242c]/70'} relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Yantra Salon</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#faf8f5]">
            Location & Contact
          </h2>
          <p className="text-sm sm:text-base text-[#a3a099] leading-relaxed">
            Conveniently situated in central Jodhpur with dedicated parking and a calming, air-conditioned family environment.
          </p>
        </div>

        {/* 2-Column Layout: Contact details & Hours on left, Interactive Google Map on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct channels and hours */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            
            {/* Address & Landmark Card */}
            <div className="p-6 rounded-xl bg-[#141417] border border-[#26242c] space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#1e1e24] border border-[#26242c] flex items-center justify-center text-[#d4af37] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-display text-xl font-medium text-[#faf8f5]">
                    {salonInfo.name} – A Family Salon
                  </h3>
                  <p className="text-sm text-[#d8d4c8] leading-relaxed mt-1">
                    {salonInfo.fullAddress}
                  </p>
                  <p className="text-xs text-[#d4af37] font-medium mt-1">
                    Landmark: {salonInfo.landmark}
                  </p>
                </div>
              </div>

              {/* Quick Connect Action Buttons: Phone, WhatsApp, Instagram, Maps */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <a
                  href={`tel:${salonInfo.phone}`}
                  className="p-3 rounded-lg bg-[#16161b] hover:bg-[#1e1e24] border border-[#26242c] hover:border-[#d4af37]/40 text-center transition-all group flex flex-col items-center justify-center gap-1.5"
                >
                  <Phone className="w-4 h-4 text-[#d4af37] group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold text-[#faf8f5]">Call Us</span>
                  <span className="text-[10px] text-[#7a7885]">Direct</span>
                </a>

                <a
                  href={`https://wa.me/${salonInfo.whatsappNumber}?text=Hello%20Yantra%20Salon,%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#16161b] hover:bg-[#1e1e24] border border-[#26242c] hover:border-[#25D366]/60 text-center transition-all group flex flex-col items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold text-[#faf8f5]">WhatsApp</span>
                  <span className="text-[10px] text-[#7a7885]">Instant</span>
                </a>

                <a
                  href={salonInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#16161b] hover:bg-[#1e1e24] border border-[#26242c] hover:border-[#E1306C]/60 text-center transition-all group flex flex-col items-center justify-center gap-1.5"
                >
                  <Instagram className="w-4 h-4 text-[#E1306C] group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold text-[#faf8f5]">Instagram</span>
                  <span className="text-[10px] text-[#7a7885]">Lookbook</span>
                </a>

                <a
                  href={salonInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-[#16161b] hover:bg-[#1e1e24] border border-[#26242c] hover:border-[#4285F4]/60 text-center transition-all group flex flex-col items-center justify-center gap-1.5"
                >
                  <Navigation className="w-4 h-4 text-[#4285F4] group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold text-[#faf8f5]">Navigate</span>
                  <span className="text-[10px] text-[#7a7885]">GPS Map</span>
                </a>
              </div>
            </div>

            {/* Opening Hours Section */}
            <div className="p-6 rounded-xl bg-[#141417] border border-[#26242c] space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#26242c]">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#faf8f5] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#d4af37]" />
                  Salon Opening Hours
                </h4>
                <span className="text-[11px] text-[#25D366] font-medium flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                  Open Today
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {salonInfo.openingHours.map((hour, idx) => {
                  const isToday = hour.day.toLowerCase() === todayName.toLowerCase();
                  return (
                    <div
                      key={idx}
                      className={`p-2 rounded-lg flex justify-between items-center ${
                        isToday
                          ? 'bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#faf8f5] font-medium'
                          : 'bg-[#16161b] text-[#a3a099]'
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        {isToday && <Sparkles className="w-3 h-3 text-[#d4af37]" />}
                        {hour.day}
                      </span>
                      <span className={isToday ? 'text-[#dec16b]' : 'text-[#f4f2ec]'}>
                        {hour.hours}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Embed & Directions button */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="rounded-xl overflow-hidden border border-[#26242c] bg-[#141417] flex-1 flex flex-col shadow-xl min-h-[380px]">
              {/* Map Header */}
              <div className="p-4 bg-[#16161b] border-b border-[#26242c] flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold block">
                    Google Maps
                  </span>
                  <span className="text-sm font-medium text-[#faf8f5]">
                    Yantra Salon • Jodhpur, Rajasthan
                  </span>
                </div>
                <a
                  href={salonInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1e1e24] hover:bg-[#d4af37] text-[#faf8f5] hover:text-[#0c0c0e] border border-[#26242c] transition-all flex items-center gap-1.5"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Embedded Map iframe */}
              <div className="flex-1 relative w-full h-full min-h-[300px] bg-[#0c0c0e]">
                <iframe
                  title="Yantra Salon Jodhpur Google Map Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                  loading="lazy"
                  allowFullScreen
                  src={`https://maps.google.com/maps?q=Shastri+Nagar+Residency+Road+Jodhpur+Rajasthan&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                />
              </div>

              {/* Map footer helper */}
              <div className="p-3 bg-[#16161b] border-t border-[#26242c] flex items-center justify-between text-xs text-[#a3a099]">
                <span>Near Circuit House & Residency Circle</span>
                <span className="text-[#d4af37]">Valet & Parking Available</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
