import React from 'react';
import { useSalon } from '../context/SalonContext';
import { Tag, MessageCircle, Sparkles, Clock, CheckCircle2, ShieldAlert } from 'lucide-react';

export const OffersPage: React.FC = () => {
  const { offers, salonInfo } = useSalon();

  const handleClaim = (offerTitle: string) => {
    const text = encodeURIComponent(`Hello Yantra Salon, I would like to inquire about claiming the package: "${offerTitle}".`);
    window.open(`https://wa.me/${salonInfo.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="py-12 bg-[#0c0c0e] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#16161b] border border-[#d4af37]/30 text-xs text-[#dec16b]">
            <Tag className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Exclusive Salon Privileges</span>
          </div>
          <h1 className="font-serif-display text-4xl sm:text-5xl font-semibold text-[#faf8f5]">
            Special Offers & Family Packages
          </h1>
          <p className="text-sm sm:text-base text-[#d8d4c8] leading-relaxed">
            Discover curations designed to pamper families, brides, grooms, and weekday self-care enthusiasts in Jodhpur.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-[#141417] rounded-2xl border border-[#26242c] p-8 hover:border-[#d4af37]/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-[#1e1e24] text-[#d4af37] border border-[#d4af37]/30">
                    {offer.tag}
                  </span>
                  <Sparkles className="w-4 h-4 text-[#dec16b]" />
                </div>

                <h2 className="font-serif-display text-2xl sm:text-3xl font-semibold text-[#faf8f5]">
                  {offer.title}
                </h2>

                <p className="text-sm font-medium text-[#dec16b]">
                  {offer.subtitle}
                </p>

                <div className="p-4 bg-[#1a1921] rounded-xl border border-[#26242c] space-y-1">
                  <span className="text-[10px] uppercase tracking-wider text-[#7a7885] block">
                    Featured Privilege
                  </span>
                  <p className="text-sm font-semibold text-[#faf8f5]">
                    {offer.discountText}
                  </p>
                </div>

                <div className="space-y-2 text-xs text-[#a3a099]">
                  <div className="flex items-center gap-1.5 text-xs text-[#dec16b]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{offer.validity}</span>
                  </div>
                  <div className="flex items-start gap-1.5 pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                    <p className="text-xs text-[#7a7885] leading-relaxed">
                      {offer.terms}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-[#26242c]">
                <button
                  onClick={() => handleClaim(offer.title)}
                  className="w-full py-3 rounded-xl text-xs uppercase tracking-wider font-semibold text-[#0c0c0e] bg-gradient-to-r from-[#dec16b] to-[#d4af37] hover:shadow-lg hover:shadow-[#d4af37]/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire via WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* How to avail notice */}
        <div className="p-6 rounded-xl bg-[#141417] border border-[#26242c] max-w-2xl mx-auto text-xs text-[#a3a099] space-y-2 text-center">
          <p className="font-semibold text-[#faf8f5]">How to Avail Offers at Reception:</p>
          <p>
            Mention this offer or show your WhatsApp chat to the reception desk upon arrival in Jodhpur. Special bundle offers cannot be clubbed with other ongoing discounts.
          </p>
        </div>

      </div>
    </div>
  );
};
