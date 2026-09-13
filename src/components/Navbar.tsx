import React, { useState, useEffect } from 'react';
import { useSalon } from '../context/SalonContext';
import { ActivePage } from '../types';
import {
  Phone,
  Calendar,
  Menu,
  X,
  Sparkles,
  SlidersHorizontal,
  MapPin,
  Clock
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    salonInfo,
    activePage,
    setActivePage,
    setIsCMSOpen,
    setIsBookingModalOpen
  } = useSalon();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: ActivePage; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'offers', label: 'Offers' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (page: ActivePage) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top micro-bar for City and Hours */}
      <div id="top-announcement-bar" className="bg-[#08080a] border-b border-[#26242c] text-xs text-[#d8d4c8] py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#f7f5ef]/90">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              {salonInfo.city}, Rajasthan • {salonInfo.landmark}
            </span>
            <span className="hidden md:inline-block text-[#7a7885]">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-[#d8d4c8]/80">
              <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
              Open Daily: 10:00 AM – 08:30 PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${salonInfo.phone}`}
              className="flex items-center gap-1 hover:text-[#dec16b] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#d4af37]" />
              <span>{salonInfo.displayPhone}</span>
            </a>
            <button
              onClick={() => setIsCMSOpen(true)}
              className="text-[11px] flex items-center gap-1 text-[#d4af37] hover:text-[#f5eed4] bg-[#d4af37]/10 px-2 py-0.5 rounded border border-[#d4af37]/20 transition-all cursor-pointer"
              title="Open Salon Owner CMS"
            >
              <SlidersHorizontal className="w-3 h-3" />
              <span>Owner CMS</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        id="main-navbar-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0c0c0e]/95 backdrop-blur-md border-b border-[#26242c] py-3 shadow-xl shadow-black/40'
            : 'bg-gradient-to-b from-[#0c0c0e] via-[#0c0c0e]/90 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex flex-col items-start text-left group cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rotate-45 bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.6)] group-hover:rotate-90 transition-transform duration-500"></span>
              <span className="font-serif-display text-2xl sm:text-3xl tracking-[0.2em] font-semibold text-[#faf8f5] group-hover:text-[#dec16b] transition-colors">
                YANTRA
              </span>
            </div>
            <span className="text-[10px] tracking-[0.28em] uppercase text-[#d4af37] pl-4 font-medium">
              A Family Salon • Jodhpur
            </span>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 text-sm font-medium tracking-wide transition-all rounded-md cursor-pointer ${
                    isActive
                      ? 'text-[#faf8f5] bg-[#1e1e24] border-b-2 border-[#d4af37]'
                      : 'text-[#d8d4c8] hover:text-[#faf8f5] hover:bg-[#16161b]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsCMSOpen(true)}
              className="lg:hidden p-2 text-[#d4af37] hover:bg-[#1e1e24] rounded border border-[#d4af37]/30"
              title="Salon Owner CMS"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
            <button
              id="nav-contact-salon-btn"
              onClick={() => {
                setActivePage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-[#0c0c0e] bg-gradient-to-r from-[#dec16b] via-[#d4af37] to-[#c29b28] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all cursor-pointer overflow-hidden active:scale-95"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Contact Us</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#f4f2ec] hover:text-[#d4af37] bg-[#16161b] rounded-lg border border-[#26242c]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0c0c0e] border-b border-[#26242c] px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-[#26242c]/60">
              <span className="text-xs text-[#d8d4c8] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                Jodhpur, Rajasthan
              </span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCMSOpen(true);
                }}
                className="text-xs text-[#d4af37] flex items-center gap-1 bg-[#1e1e24] px-2 py-1 rounded border border-[#d4af37]/30"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Owner CMS</span>
              </button>
            </div>
            <div className="grid grid-cols-1 gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm tracking-wide flex items-center justify-between ${
                    activePage === item.id
                      ? 'bg-[#1e1e24] text-[#d4af37] font-semibold border-l-2 border-[#d4af37]'
                      : 'text-[#d8d4c8] hover:bg-[#16161b]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.id === 'offers' && (
                    <span className="text-[10px] bg-[#d4af37]/20 text-[#dec16b] px-2 py-0.5 rounded-full font-medium">
                      Specials
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-[#26242c] flex flex-col gap-2">
              <button
                onClick={() => {
                  handleNavClick('contact');
                }}
                className="w-full py-3 rounded-full text-xs uppercase tracking-wider font-semibold text-[#0c0c0e] bg-[#d4af37] flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Contact & Visit Us</span>
              </button>

              <a
                href={`tel:${salonInfo.phone}`}
                className="w-full py-2.5 rounded-full text-xs font-medium text-[#d8d4c8] bg-[#16161b] border border-[#26242c] flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Call {salonInfo.displayPhone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
