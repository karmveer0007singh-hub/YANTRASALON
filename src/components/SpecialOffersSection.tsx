import React from 'react';
import { useSalon } from '../context/SalonContext';
import { Tag, MessageCircle, Sparkles, ArrowRight, Clock, ShieldAlert } from 'lucide-react';

export const SpecialOffersSection: React.FC = () => {
  const { offers, setActivePage, salonInfo } = useSalon();

  const handleClaimOffer = (offerTitle: string) => {
    const text = encodeURIComponent(`Hello Yantra Salon, I would like to claim the special offer: "${offerTitle}".`);
    window.open(`https://wa.me/${salonInfo.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="special-offers-section" className="py-20 bg-[#0f0f12] border-t border-[#26242c]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
              <Tag className="w-3.5 h-3.5" />
              <span>Privilege Packages</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#faf8f5]">
              Curated Special Offers
            </h2>
            <p className="text-sm sm:text-base text-[#a3a099] max-w-xl leading-relaxed">
              Seasonal indulgences, multi-member family combinations, and bridal packages crafted for unmatched value.
            </p>
          </div>

          <button
            onClick={() => {
              setActivePage('offers');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#dec16b] hover:text-[#faf8f5] transition-colors group cursor-pointer"
          >
            <span>View All Packages</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Offers Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-[#141417] rounded-xl border border-[#26242c] p-6 hover:border-[#d4af37]/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Gold decorative gradient on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/5 rounded-full blur-2xl group-hover:bg-[#d4af37]/15 transition-all pointer-events-none"></div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-[#1e1e24] text-[#d4af37] border border-[#d4af37]/20">
                    {offer.tag}
                  </span>
                  <Sparkles className="w-4 h-4 text-[#dec16b]" />
                </div>

                <h3 className="font-serif-display text-2xl font-semibold text-[#faf8f5]">
                  {offer.title}
                </h3>

                <p className="text-sm font-medium text-[#dec16b]">
                  {offer.subtitle}
                </p>

                <div className="p-3 bg-[#1a1921] rounded-lg border border-[#26242c] space-y-1">
                  <span className="text-xs uppercase tracking-wider text-[#7a7885] block">
                    Advantage
                  </span>
                  <p className="text-xs font-semibold text-[#faf8f5]">
                    {offer.discountText}
                  </p>
                </div>

                <div className="space-y-1.5 text-xs text-[#a3a099]">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#dec16b]">
                    <Clock className="w-3 h-3" />
                    <span>{offer.validity}</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-[#7a7885]">
                    {offer.terms}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#26242c]">
                <button
                  onClick={() => handleClaimOffer(offer.title)}
                  className="w-full py-2.5 rounded-lg text-xs uppercase tracking-wider font-semibold text-[#0c0c0e] bg-gradient-to-r from-[#dec16b] to-[#d4af37] hover:shadow-lg hover:shadow-[#d4af37]/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Claim via WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#7a7885]">
          <ShieldAlert className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Note: Promotional rates and perks are subject to seasonal validity and salon confirmation.</span>
        </div>

      </div>
    </section>
  );
};
