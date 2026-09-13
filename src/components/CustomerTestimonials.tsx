import React from 'react';
import { useSalon } from '../context/SalonContext';
import { Star, Quote, CheckCircle, Sparkles } from 'lucide-react';

export const CustomerTestimonials: React.FC = () => {
  const { testimonials } = useSalon();

  return (
    <section id="testimonials-section" className="py-20 bg-[#0c0c0e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Guest Impressions</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#faf8f5]">
            Loved by Families Across Jodhpur
          </h2>
          <p className="text-sm sm:text-base text-[#a3a099] leading-relaxed">
            Real experiences from clients who trust Yantra Salon with their daily hair maintenance and most memorable celebrations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="p-6 rounded-xl bg-[#141417] border border-[#26242c] hover:border-[#d4af37]/40 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="absolute top-6 right-6 text-[#26242c] group-hover:text-[#d4af37]/20 transition-colors">
                <Quote className="w-8 h-8" />
              </div>

              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-[#d4af37]">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4af37]" />
                  ))}
                </div>

                {/* Review body */}
                <p className="text-sm text-[#d8d4c8] leading-relaxed italic">
                  "{test.comment}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#26242c]/80 flex items-center justify-between">
                <div>
                  <h4 className="font-serif-display text-base font-semibold text-[#faf8f5]">
                    {test.clientName}
                  </h4>
                  <p className="text-xs text-[#d4af37] font-medium">
                    {test.serviceReceived}
                  </p>
                  <p className="text-[11px] text-[#7a7885] mt-0.5">
                    {test.location}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-[#dec16b] bg-[#1e1e24] px-2 py-1 rounded border border-[#26242c]">
                  <CheckCircle className="w-3 h-3 text-[#d4af37]" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ratings summary bar */}
        <div className="mt-12 p-4 rounded-xl bg-[#16161b] border border-[#26242c] flex flex-wrap items-center justify-around gap-4 text-center">
          <div>
            <div className="flex items-center justify-center gap-1 text-[#d4af37]">
              <Star className="w-4 h-4 fill-[#d4af37]" />
              <span className="font-bold text-sm text-[#faf8f5]">4.9 / 5.0</span>
            </div>
            <p className="text-[11px] text-[#a3a099] mt-0.5">Client Satisfaction Score</p>
          </div>
          <div className="hidden sm:block w-px h-8 bg-[#26242c]"></div>
          <div>
            <span className="font-bold text-sm text-[#faf8f5]">5,000+</span>
            <p className="text-[11px] text-[#a3a099] mt-0.5">Satisfied Jodhpur Guests</p>
          </div>
          <div className="hidden sm:block w-px h-8 bg-[#26242c]"></div>
          <div>
            <span className="font-bold text-sm text-[#faf8f5]">100% Genuine</span>
            <p className="text-[11px] text-[#a3a099] mt-0.5">Sterile Disposables & Kits</p>
          </div>
        </div>

      </div>
    </section>
  );
};
