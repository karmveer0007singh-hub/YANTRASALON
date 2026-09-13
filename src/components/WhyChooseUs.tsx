import React from 'react';
import { ShieldCheck, HeartHandshake, Sparkles, Award, Users, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'A True Family Sanctuary',
      description: 'Dedicated spaces ensuring complete comfort for women, gentleman grooming zones, and child-friendly styling care.'
    },
    {
      icon: ShieldCheck,
      title: 'Clinical UV-C Sterilization',
      description: 'Scissors, combs, and tools undergo multi-stage clinical sterilization. Fresh single-use kits for every guest.'
    },
    {
      icon: Award,
      title: 'Certified Master Stylists',
      description: 'Our senior artists bring years of precision training in Balayage, Russian nail artistry, and Indian bridal couture.'
    },
    {
      icon: Sparkles,
      title: '100% Authentic Products',
      description: 'Zero counterfeit compromise. Only genuine, dermatologically tested international & luxury botanical formulations.'
    },
    {
      icon: HeartHandshake,
      title: 'Warm Rajasthani Hospitality',
      description: 'Complimentary herbal teas, relaxed consultations, and attentive staff who genuinely value your personal comfort.'
    }
  ];

  return (
    <section id="why-choose-us-section" className="py-20 bg-[#0c0c0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Yantra Standard</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#faf8f5]">
            Why Choose Yantra Salon
          </h2>
          <p className="text-sm sm:text-base text-[#a3a099] leading-relaxed">
            We are dedicated to elevating beauty and self-care in Jodhpur into a rejuvenating ritual for your whole family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#141417] border border-[#26242c] hover:border-[#d4af37]/40 transition-all duration-300 space-y-3.5 group hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1e1e24] border border-[#26242c] flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#0c0c0e] transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif-display text-xl font-medium text-[#faf8f5]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#a3a099] leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-[11px] text-[#dec16b]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}

          {/* Bonus highlight box */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-[#1e1e24] via-[#16161b] to-[#0c0c0e] border border-[#d4af37]/30 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                Jodhpur Heritage
              </span>
              <h3 className="font-serif-display text-xl font-medium text-[#faf8f5]">
                Tailored for Rajasthan’s Climate
              </h3>
              <p className="text-xs sm:text-sm text-[#a3a099] leading-relaxed">
                Specialized hydrating hair rituals and deep-pore skin treatments designed specifically to counteract desert sun, dust, and dry winds.
              </p>
            </div>
            <div className="pt-4 border-t border-[#26242c]">
              <span className="text-[11px] text-[#dec16b] font-medium">
                Inquire for seasonal hydration regimens →
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
