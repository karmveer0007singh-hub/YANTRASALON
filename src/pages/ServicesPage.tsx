import React, { useState } from 'react';
import { useSalon } from '../context/SalonContext';
import { ServiceItem } from '../types';
import {
  Sparkles,
  Search,
  MessageCircle,
  Clock,
  Users,
  Info,
  PhoneCall,
  SlidersHorizontal
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { services, setActivePage, salonInfo } = useSalon();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedAudience, setSelectedAudience] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories: string[] = [
    'All',
    'Hair',
    'Skin',
    'Makeup',
    'Nails',
    'Spa/Beauty',
    'Other salon services'
  ];

  const audiences = ['All', 'Women', 'Men', 'Kids', 'Unisex'];

  const filteredServices = services.filter((service) => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesAudience = selectedAudience === 'All' || service.targetAudience === selectedAudience || service.targetAudience === 'Unisex';
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesAudience && matchesSearch;
  });

  const handleInquire = (serviceName: string) => {
    const text = encodeURIComponent(`Hello Yantra Salon, I would like to inquire about the ${serviceName} service.`);
    window.open(`https://wa.me/${salonInfo.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="py-12 bg-[#0c0c0e] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#16161b] border border-[#d4af37]/30 text-xs text-[#dec16b]">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Complete Salon Menu</span>
          </div>
          <h1 className="font-serif-display text-4xl sm:text-5xl font-semibold text-[#faf8f5]">
            Artisan Services & Rituals
          </h1>
          <p className="text-sm sm:text-base text-[#d8d4c8] leading-relaxed">
            Every service at Yantra Salon is performed using sterile instruments, dermatologist-approved formulations, and personalized consultations in Jodhpur, Rajasthan.
          </p>

          {/* Pricing Disclaimer Box */}
          <div className="p-3.5 rounded-xl bg-[#141417] border border-[#26242c] flex items-center justify-center gap-2 text-xs text-[#a3a099] max-w-2xl mx-auto">
            <Info className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span>
              Prices vary by hair length, skin condition, and customization. Please consult our specialists for transparent quotes.
            </span>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="bg-[#141417] p-5 rounded-2xl border border-[#26242c] mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7a7885]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services (e.g., Balayage, Hydra-Facial, Beard)..."
                className="w-full bg-[#16161b] border border-[#26242c] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#faf8f5] placeholder-[#7a7885] focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            {/* Audience filter */}
            <div className="flex items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
              <span className="text-xs text-[#7a7885] whitespace-nowrap mr-1">For:</span>
              {audiences.map((aud) => (
                <button
                  key={aud}
                  onClick={() => setSelectedAudience(aud)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                    selectedAudience === aud
                      ? 'bg-[#dec16b] text-[#0c0c0e] font-semibold'
                      : 'bg-[#16161b] text-[#a3a099] hover:bg-[#1e1e24]'
                  }`}
                >
                  {aud}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2 border-t border-[#26242c]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium tracking-wide whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#d4af37] text-[#0c0c0e] font-semibold shadow-md shadow-[#d4af37]/20'
                    : 'bg-[#16161b] text-[#d8d4c8] hover:bg-[#1e1e24] border border-[#26242c]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services List Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-[#141417] rounded-xl border border-[#26242c] space-y-3">
            <p className="text-sm text-[#faf8f5] font-medium">No services found matching your criteria.</p>
            <p className="text-xs text-[#7a7885]">Try clearing search or choosing another category.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedAudience('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-lg bg-[#1e1e24] text-xs text-[#d4af37] border border-[#26242c]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-[#141417] rounded-xl border border-[#26242c] overflow-hidden hover:border-[#d4af37]/50 transition-all duration-300 flex flex-col group hover:-translate-y-1 hover:shadow-xl hover:shadow-black/70"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-[#16161b]">
                  <img
                    src={service.image || 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80'}
                    alt={service.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-[0.88]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141417] via-transparent to-transparent"></div>

                  <div className="absolute top-3 left-3 bg-[#0c0c0e]/85 backdrop-blur-sm px-2.5 py-1 rounded-full text-[11px] font-medium text-[#dec16b] border border-[#d4af37]/30">
                    {service.category}
                  </div>

                  <div className="absolute top-3 right-3 bg-[#16161b]/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[11px] text-[#a3a099] flex items-center gap-1 border border-[#26242c]">
                    <Users className="w-3 h-3 text-[#d4af37]" />
                    <span>{service.targetAudience}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif-display text-xl font-medium text-[#faf8f5] group-hover:text-[#dec16b] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-xs text-[#a3a099] leading-relaxed mt-2">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#26242c] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#7a7885] block">
                        Estimated Cost
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
                      onClick={() => handleInquire(service.name)}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-[#1e1e24] hover:bg-[#d4af37] text-[#faf8f5] hover:text-[#0c0c0e] border border-[#26242c] hover:border-[#d4af37] transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <MessageCircle className="w-3 h-3 text-[#25D366]" />
                      <span>Inquire</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Custom Consultation Callout */}
        <div className="mt-16 p-8 rounded-2xl bg-[#141417] border border-[#26242c] text-center max-w-3xl mx-auto space-y-4">
          <h3 className="font-serif-display text-2xl sm:text-3xl text-[#faf8f5]">
            Need a Customized Family or Bridal Consultation?
          </h3>
          <p className="text-sm text-[#a3a099] leading-relaxed">
            Our Senior Creative Directors in Jodhpur offer personalized hair analysis, scalp diagnosis, and bridal trials tailored to your unique requirements.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${salonInfo.whatsappNumber}?text=Hello%20Yantra%20Salon,%20I%20would%20like%20to%20request%20a%20bridal%20or%20family%20consultation`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-xs uppercase tracking-wider font-semibold text-[#0c0c0e] bg-[#d4af37] hover:bg-[#dec16b] transition-all cursor-pointer flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Consultation</span>
            </a>
            <button
              onClick={() => {
                setActivePage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-full text-xs uppercase tracking-wider font-medium text-[#faf8f5] bg-[#16161b] hover:bg-[#1e1e24] border border-[#26242c] transition-all cursor-pointer flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#d4af37]" />
              <span>Contact & Location</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
