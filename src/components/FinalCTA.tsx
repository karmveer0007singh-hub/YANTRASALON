import React from 'react';
import { useSalon } from '../context/SalonContext';
import { Calendar, MessageCircle, Sparkles, PhoneCall } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const { salonInfo, setActivePage } = useSalon();

  return (
    <section id="final-appointment-cta" className="relative py-20 bg-[#0c0c0e] overflow-hidden border-t border-[#26242c]">
      {/* Background with luxury texture */}
      <div className="absolute inset-0 opacity-15">
        <img
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1600&q=80"
          alt="Salon background texture"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover brightness-50"
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16161b]/90 border border-[#d4af37]/40 text-xs text-[#dec16b] shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Experience Refined Grooming in Jodhpur</span>
        </div>

        <div className="space-y-4">
          <h2 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#faf8f5] tracking-tight">
            Elevate Your Everyday Style at <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#dec16b] via-[#d4af37] to-[#f5eed4]">
              Yantra Salon
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#d8d4c8] max-w-2xl mx-auto leading-relaxed font-light">
            Book your personalized consultation or treatment today. Experience the serenity of our family salon located conveniently in Jodhpur, Rajasthan.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={() => {
              setActivePage('appointment');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm uppercase tracking-wider font-semibold text-[#0c0c0e] bg-gradient-to-r from-[#dec16b] via-[#d4af37] to-[#c29b28] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment Online</span>
          </button>

          <a
            href={`https://wa.me/${salonInfo.whatsappNumber}?text=Hello%20Yantra%20Salon,%20I%20would%20like%20to%20book%20an%20appointment%20in%20Jodhpur`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium text-[#faf8f5] bg-[#16161b]/90 hover:bg-[#1e1e24] border border-[#26242c] hover:border-[#25D366]/60 transition-all flex items-center justify-center gap-2.5"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Instant WhatsApp Booking</span>
          </a>
        </div>

        <div className="pt-4 flex items-center justify-center gap-6 text-xs text-[#a3a099]">
          <span className="flex items-center gap-1.5">
            <PhoneCall className="w-3.5 h-3.5 text-[#d4af37]" />
            Call: {salonInfo.displayPhone}
          </span>
          <span>•</span>
          <span>Open Daily: 10:00 AM – 08:30 PM</span>
        </div>
      </div>
    </section>
  );
};
