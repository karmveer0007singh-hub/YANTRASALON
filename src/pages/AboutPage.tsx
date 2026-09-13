import React from 'react';
import { useSalon } from '../context/SalonContext';
import {
  Sparkles,
  ShieldCheck,
  Heart,
  Award,
  Users,
  CheckCircle,
  MapPin,
  Calendar
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { salonInfo, setActivePage } = useSalon();

  return (
    <div className="py-12 bg-[#0c0c0e] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#16161b] border border-[#d4af37]/30 text-xs text-[#dec16b]">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Our Philosophy & Heritage</span>
          </div>
          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#faf8f5]">
            The Story of Yantra Salon
          </h1>
          <p className="text-sm sm:text-base text-[#d8d4c8] leading-relaxed">
            A sanctuary where geometric harmony meets royal Rajasthani hospitality. Crafted as Jodhpur's premier family salon for women, men, and children.
          </p>
        </div>

        {/* Narrative & Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#faf8f5]">
              Meaning Behind <span className="text-[#d4af37]">Yantra</span>
            </h2>
            <p className="text-sm sm:text-base text-[#a3a099] leading-relaxed">
              In traditional philosophy, a <em>Yantra</em> represents a sacred geometric instrument for harmonizing inner spirit and outer expression. We believe that true grooming is not superficial vanity—it is a conscious alignment of style, comfort, and personal confidence.
            </p>
            <p className="text-sm sm:text-base text-[#a3a099] leading-relaxed">
              {salonInfo.aboutStory}
            </p>

            {/* Founder Quote Card */}
            <div className="p-6 rounded-xl bg-[#141417] border-l-4 border-[#d4af37] border-y border-r border-[#26242c] space-y-2">
              <p className="font-serif-display text-base sm:text-lg italic text-[#faf8f5]">
                "{salonInfo.founderQuote}"
              </p>
              <p className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                — Yantra Salon Philosophy, Jodhpur
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#26242c] shadow-2xl bg-[#141417] aspect-[4/3] group">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=80"
                alt="Yantra Salon Family Interior Lounge demo placeholder"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0c0c0e]/90 backdrop-blur-sm border border-[#26242c]">
                <p className="font-serif-display text-sm text-[#faf8f5] font-medium">
                  Designed for Multi-Generational Comfort
                </p>
                <p className="text-[11px] text-[#a3a099]">
                  Spacious lounge styling stations located on Residency Road, Jodhpur.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars of Excellence */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <h3 className="font-serif-display text-2xl sm:text-3xl text-[#faf8f5]">
              Core Pillars of Our Family Salon
            </h3>
            <p className="text-xs sm:text-sm text-[#a3a099]">
              Every touchpoint is designed with deliberate care, comfort, and uncompromising hygiene.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#141417] border border-[#26242c] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#1e1e24] flex items-center justify-center text-[#d4af37]">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-serif-display text-xl text-[#faf8f5]">All-Generations Care</h4>
              <p className="text-xs text-[#a3a099] leading-relaxed">
                From playful haircuts for young children to specialized grey-coverage blending for seniors and bridal suites for brides and grooms.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#141417] border border-[#26242c] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#1e1e24] flex items-center justify-center text-[#d4af37]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif-display text-xl text-[#faf8f5]">Hospital-Grade Hygiene</h4>
              <p className="text-xs text-[#a3a099] leading-relaxed">
                {salonInfo.hygieneCommitment}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#141417] border border-[#26242c] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#1e1e24] flex items-center justify-center text-[#d4af37]">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-serif-display text-xl text-[#faf8f5]">Master Artistry</h4>
              <p className="text-xs text-[#a3a099] leading-relaxed">
                Regularly updated with global coloring techniques, balayage, keratin smoothing, and authentic Indian festive bridal aesthetics.
              </p>
            </div>
          </div>
        </div>

        {/* CTA banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#16161b] via-[#1e1e24] to-[#16161b] border border-[#d4af37]/30 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="font-serif-display text-2xl sm:text-3xl text-[#faf8f5]">
            Experience the Warmth in Person
          </h3>
          <p className="text-sm text-[#a3a099] leading-relaxed">
            Visit us in Jodhpur or schedule an appointment for your entire family today.
          </p>
          <button
            onClick={() => {
              setActivePage('appointment');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-3 rounded-full text-xs uppercase tracking-wider font-semibold text-[#0c0c0e] bg-[#d4af37] hover:bg-[#dec16b] transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book an Appointment</span>
          </button>
        </div>

      </div>
    </div>
  );
};
