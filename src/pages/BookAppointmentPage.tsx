import React from 'react';
import { useSalon } from '../context/SalonContext';
import { AppointmentForm } from '../components/AppointmentForm';
import { Sparkles, MapPin, Phone, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';

export const BookAppointmentPage: React.FC = () => {
  const { salonInfo, preselectedService } = useSalon();

  return (
    <div className="py-12 bg-[#0c0c0e] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#16161b] border border-[#d4af37]/30 text-xs text-[#dec16b]">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Online Reservation</span>
          </div>
          <h1 className="font-serif-display text-4xl sm:text-5xl font-semibold text-[#faf8f5]">
            Book Your Yantra Experience
          </h1>
          <p className="text-sm sm:text-base text-[#d8d4c8] leading-relaxed">
            Reserve a seamless luxury salon ritual for yourself or your family in Jodhpur. Transparent consultations and dedicated attention.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Booking Form */}
          <div className="lg:col-span-7 bg-[#141417] p-6 sm:p-8 rounded-2xl border border-[#26242c] shadow-2xl">
            <h2 className="font-serif-display text-2xl text-[#faf8f5] mb-2">
              Appointment Details
            </h2>
            <p className="text-xs text-[#a3a099] mb-6">
              Fill in your contact information and chosen ritual to reserve your specialist.
            </p>
            <AppointmentForm initialService={preselectedService} />
          </div>

          {/* Right Column: Salon Guarantees & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-[#141417] border border-[#26242c] space-y-4">
              <h3 className="font-serif-display text-xl text-[#faf8f5] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#d4af37]" />
                <span>Our Guest Promise</span>
              </h3>
              <ul className="space-y-3 text-xs text-[#d8d4c8]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-1.5"></span>
                  <span><strong>Zero Waiting Guarantee:</strong> Your scheduled slot is reserved strictly for you with zero double-booking.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-1.5"></span>
                  <span><strong>Sterile Hygiene:</strong> Clinical disinfection protocol followed before every guest is seated.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-1.5"></span>
                  <span><strong>Complimentary Consultation:</strong> Stylist analysis of hair texture, scalp condition, and facial geometry.</span>
                </li>
              </ul>
            </div>

            {/* Location & Hours Recap */}
            <div className="p-6 rounded-2xl bg-[#141417] border border-[#26242c] space-y-3 text-xs">
              <div className="flex items-center gap-2 text-[#d4af37]">
                <MapPin className="w-4 h-4" />
                <span className="font-semibold uppercase tracking-wider">Salon Location</span>
              </div>
              <p className="text-[#faf8f5] font-medium">{salonInfo.name} – A Family Salon</p>
              <p className="text-[#a3a099] leading-relaxed">{salonInfo.fullAddress}</p>
              
              <div className="pt-3 border-t border-[#26242c] flex justify-between items-center text-[#d8d4c8]">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                  Operating Hours
                </span>
                <span className="text-[#faf8f5] font-medium">10:00 AM – 8:30 PM Daily</span>
              </div>

              <div className="pt-2 flex justify-between items-center text-[#d8d4c8]">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                  Direct Phone
                </span>
                <a href={`tel:${salonInfo.phone}`} className="text-[#dec16b] font-medium hover:underline">
                  {salonInfo.displayPhone}
                </a>
              </div>
            </div>

            {/* WhatsApp direct assist */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#1e1e24] to-[#141417] border border-[#25D366]/40 text-center space-y-3">
              <p className="text-xs text-[#faf8f5] font-medium">
                Prefer to book directly over WhatsApp?
              </p>
              <a
                href={`https://wa.me/${salonInfo.whatsappNumber}?text=Hello%20Yantra%20Salon,%20I%20would%20like%20to%20book%20an%20appointment%20in%20Jodhpur`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl text-xs font-semibold text-[#0c0c0e] bg-[#25D366] hover:bg-[#20ba59] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Instant WhatsApp Concierge</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
