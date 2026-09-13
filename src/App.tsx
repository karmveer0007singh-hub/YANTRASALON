/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { SalonProvider, useSalon } from './context/SalonContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { PopularServices } from './components/PopularServices';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GalleryPreview } from './components/GalleryPreview';
import { CustomerTestimonials } from './components/CustomerTestimonials';
import { SpecialOffersSection } from './components/SpecialOffersSection';
import { LocationContactSection } from './components/LocationContactSection';
import { StickyMobileBar } from './components/StickyMobileBar';
import { OwnerCMSModal } from './components/OwnerCMSModal';

import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { OffersPage } from './pages/OffersPage';
import { ContactPage } from './pages/ContactPage';

const SalonAppContent: React.FC = () => {
  const { activePage } = useSalon();

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0c0c0e] text-[#f4f2ec] selection:bg-[#d4af37]/30 selection:text-[#faf8f5]">
      {/* Sticky Top Luxury Header */}
      <Navbar />

      {/* Dynamic View Routing */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <>
            {/* 1. Visually impressive hero with exact required headline & CTAs */}
            <Hero />
            
            {/* 2. Popular services highlight */}
            <PopularServices />
            
            {/* 3. Why choose Yantra Salon */}
            <WhyChooseUs />
            
            {/* 4. Gallery preview */}
            <GalleryPreview />
            
            {/* 5. Customer testimonials */}
            <CustomerTestimonials />
            
            {/* 6. Special offers */}
            <SpecialOffersSection />
            
            {/* 7. Location & contact with interactive Google Maps & hours */}
            <LocationContactSection />
          </>
        )}

        {activePage === 'services' && <ServicesPage />}
        {activePage === 'about' && <AboutPage />}
        {activePage === 'gallery' && <GalleryPage />}
        {activePage === 'offers' && <OffersPage />}
        {activePage === 'contact' && <ContactPage />}
        {activePage === 'appointment' && <ContactPage />}
      </main>

      {/* Luxury Footer */}
      <Footer />

      {/* Sticky Mobile Booking Floating Bar */}
      <StickyMobileBar />

      {/* Salon Owner Responsive Content Management System */}
      <OwnerCMSModal />
    </div>
  );
};

export default function App() {
  return (
    <SalonProvider>
      <SalonAppContent />
    </SalonProvider>
  );
}
