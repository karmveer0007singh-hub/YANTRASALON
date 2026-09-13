import React, { useState } from 'react';
import { useSalon } from '../context/SalonContext';
import { MessageCircle, ArrowRight, Sparkles, Clock, Users } from 'lucide-react';

export const PopularServices: React.FC = () => {
  const { services, setActivePage, salonInfo } = useSalon();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Hair', 'Skin', 'Makeup', 'Nails', 'Spa/Beauty', 'Other salon services'];

  const filteredServices = selectedCategory === 'All'
    ? services.filter(s => s.popular)
    : services.filter(s => s.category === selectedCategory);

  const handleInquireService = (serviceName: string) => {
    const text = encodeURIComponent(`Hello Yantra Salon, I would like to inquire about ${serviceName} service.`);
    window.open(`https://wa.me/${salonInfo.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="popular-services-section" className="py-20 bg-[#0f0f12] border-y border-[#26242c]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Signature Experiences</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#faf8f5]">
              Popular Salon Rituals
            </h2>
            <p className="text-sm sm:text-base text-[#a3a099] max-w-xl leading-relaxed">
              Designed for women, men, and children. Crafted with dermatologically certified products and bespoke technique.
            </p>
          </div>

          <button
            onClick={() => {
              setActivePage('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#dec16b] hover:text-[#faf8f5] transition-colors group cursor-pointer"
          >
            <span>View All Services Menu</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#d4af37] text-[#0c0c0e] font-semibold shadow-md shadow-[#d4af37]/20'
                  : 'bg-[#16161b] text-[#d8d4c8] hover:bg-[#1e1e24] border border-[#26242c]'
              }`}
            >
              {cat === 'All' ? 'Popular Highlights' : cat}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.slice(0, 6).map((service) => (
            <div
              key={service.id}
              className="bg-[#141417] rounded-xl border border-[#26242c] overflow-hidden hover:border-[#d4af37]/50 transition-all duration-300 flex flex-col group hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60"
            >
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden bg-[#1a1921]">
                <img
                  src={service.image || 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80'}
                  alt={service.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141417] via-transparent to-transparent"></div>
                
                <div className="absolute top-3 left-3 bg-[#0c0c0e]/80 backdrop-blur-sm px-2.5 py-1 rounded-full text-[11px] font-medium text-[#dec16b] border border-[#d4af37]/30">
                  {service.category}
                </div>

                <div className="absolute top-3 right-3 bg-[#16161b]/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[11px] text-[#a3a099] flex items-center gap-1 border border-[#26242c]">
                  <Users className="w-3 h-3 text-[#d4af37]" />
                  <span>{service.targetAudience}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif-display text-xl font-medium text-[#faf8f5] group-hover:text-[#dec16b] transition-colors line-clamp-1">
                    {service.name}
                  </h3>
                  <p className="text-xs text-[#a3a099] leading-relaxed mt-2 line-clamp-2">
                    {service.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#26242c] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#7a7885] block">
                      Pricing
                    </span>
                    <span className="text-xs font-semibold text-[#dec16b]">
                      {service.priceDisplay}
                    </span>
                  </div>

                  {service.duration && (
                    <div className="flex items-center gap-1 text-[11px] text-[#a3a099]">
                      <Clock className="w-3 h-3 text-[#d4af37]" />
                      <span>{service.duration}</span>
                    </div>
                  )}

                  <button
                    onClick={() => handleInquireService(service.name)}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1e1e24] hover:bg-[#d4af37] text-[#faf8f5] hover:text-[#0c0c0e] border border-[#26242c] hover:border-[#d4af37] transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3 h-3 text-[#25D366]" />
                    <span>Inquire</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-[#16161b] via-[#1e1e24] to-[#16161b] border border-[#26242c] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-serif-display text-lg font-semibold text-[#faf8f5]">
              Looking for a custom package or bridal consultation in Jodhpur?
            </p>
            <p className="text-xs text-[#a3a099] mt-0.5">
              We offer bespoke family combos, event styling, and pre-bridal consultations.
            </p>
          </div>
          <button
            onClick={() => {
              setActivePage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-[#0c0c0e] bg-[#d4af37] hover:bg-[#dec16b] transition-colors whitespace-nowrap cursor-pointer"
          >
            Contact for Consultation
          </button>
        </div>

      </div>
    </section>
  );
};
