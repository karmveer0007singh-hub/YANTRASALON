import React, { useState } from 'react';
import { useSalon } from '../context/SalonContext';
import { ServiceItem, SalonOffer, GalleryPhoto, AppointmentBooking } from '../types';
import {
  X,
  SlidersHorizontal,
  Store,
  Scissors,
  Tag,
  Camera,
  CalendarCheck,
  Plus,
  Trash2,
  Edit2,
  Save,
  RotateCcw,
  CheckCircle2,
  MessageCircle,
  ExternalLink
} from 'lucide-react';

export const OwnerCMSModal: React.FC = () => {
  const {
    salonInfo,
    updateSalonInfo,
    services,
    addService,
    updateService,
    deleteService,
    offers,
    addOffer,
    updateOffer,
    deleteOffer,
    gallery,
    addGalleryPhoto,
    deleteGalleryPhoto,
    appointments,
    updateAppointmentStatus,
    deleteAppointment,
    isCMSOpen,
    setIsCMSOpen,
    resetToDefaults
  } = useSalon();

  const [activeTab, setActiveTab] = useState<
    'profile' | 'services' | 'offers' | 'gallery' | 'appointments'
  >('profile');

  // Local form states for Salon Profile
  const [profileForm, setProfileForm] = useState(salonInfo);
  const [profileSaved, setProfileSaved] = useState(false);

  // State for adding a service
  const [isAddingService, setIsAddingService] = useState(false);
  const [newService, setNewService] = useState<Omit<ServiceItem, 'id'>>({
    name: '',
    category: 'Hair',
    description: '',
    targetAudience: 'Unisex',
    priceDisplay: 'Contact for Price',
    duration: '45 mins',
    popular: false,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80'
  });

  // State for adding an offer
  const [isAddingOffer, setIsAddingOffer] = useState(false);
  const [newOffer, setNewOffer] = useState<Omit<SalonOffer, 'id'>>({
    title: '',
    subtitle: '',
    tag: 'Seasonal Special',
    discountText: 'Special Price / Bundle',
    validity: 'Valid this month',
    terms: 'Prior appointment required.'
  });

  // State for adding photo
  const [isAddingPhoto, setIsAddingPhoto] = useState(false);
  const [newPhoto, setNewPhoto] = useState<Omit<GalleryPhoto, 'id'>>({
    title: '',
    category: 'Hair',
    imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
    caption: 'Demo photo placeholder'
  });

  if (!isCMSOpen) return null;

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateSalonInfo(profileForm);
    setProfileSaved(true);
    setTimeout(() => setProfileSaved(false), 2500);
  };

  const handleCreateService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newService.name.trim()) return;
    addService(newService);
    setIsAddingService(false);
    setNewService({
      name: '',
      category: 'Hair',
      description: '',
      targetAudience: 'Unisex',
      priceDisplay: 'Contact for Price',
      duration: '45 mins',
      popular: false,
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80'
    });
  };

  const handleCreateOffer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newOffer.title.trim()) return;
    addOffer(newOffer);
    setIsAddingOffer(false);
    setNewOffer({
      title: '',
      subtitle: '',
      tag: 'Seasonal Special',
      discountText: 'Special Price / Bundle',
      validity: 'Valid this month',
      terms: 'Prior appointment required.'
    });
  };

  const handleCreatePhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPhoto.title.trim() || !newPhoto.imageUrl.trim()) return;
    addGalleryPhoto(newPhoto);
    setIsAddingPhoto(false);
    setNewPhoto({
      title: '',
      category: 'Hair',
      imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
      caption: 'Demo photo placeholder'
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-hidden"
      onClick={() => setIsCMSOpen(false)}
    >
      <div
        className="relative w-full max-w-5xl h-[92vh] bg-[#141417] border border-[#26242c] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-4 sm:p-5 bg-[#16161b] border-b border-[#26242c] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif-display text-lg sm:text-xl font-semibold text-[#faf8f5]">
                Salon Content Manager (CMS)
              </h2>
              <p className="text-[11px] text-[#a3a099]">
                Live editor for Yantra Salon: details, service catalog, offers, lookbook & incoming appointments
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (window.confirm('Reset all edited content to original demo defaults?')) {
                  resetToDefaults();
                  setProfileForm(salonInfo);
                }
              }}
              className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs text-[#a3a099] hover:text-[#faf8f5] bg-[#1e1e24] border border-[#26242c]"
              title="Reset to default template"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <button
              onClick={() => setIsCMSOpen(false)}
              className="w-9 h-9 rounded-lg bg-[#1e1e24] text-[#a3a099] hover:text-[#faf8f5] flex items-center justify-center border border-[#26242c] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-[#0f0f12] px-4 pt-2 border-b border-[#26242c] flex items-center gap-1 overflow-x-auto scrollbar-none shrink-0">
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-4 py-2.5 text-xs font-medium border-b-2 whitespace-nowrap flex items-center gap-2 cursor-pointer transition-colors ${
              activeTab === 'profile'
                ? 'border-[#d4af37] text-[#faf8f5]'
                : 'border-transparent text-[#a3a099] hover:text-[#d8d4c8]'
            }`}
          >
            <Store className="w-4 h-4 text-[#d4af37]" />
            <span>Salon Profile & Contact</span>
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`px-4 py-2.5 text-xs font-medium border-b-2 whitespace-nowrap flex items-center gap-2 cursor-pointer transition-colors ${
              activeTab === 'services'
                ? 'border-[#d4af37] text-[#faf8f5]'
                : 'border-transparent text-[#a3a099] hover:text-[#d8d4c8]'
            }`}
          >
            <Scissors className="w-4 h-4 text-[#d4af37]" />
            <span>Services Menu ({services.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('offers')}
            className={`px-4 py-2.5 text-xs font-medium border-b-2 whitespace-nowrap flex items-center gap-2 cursor-pointer transition-colors ${
              activeTab === 'offers'
                ? 'border-[#d4af37] text-[#faf8f5]'
                : 'border-transparent text-[#a3a099] hover:text-[#d8d4c8]'
            }`}
          >
            <Tag className="w-4 h-4 text-[#d4af37]" />
            <span>Special Offers ({offers.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-4 py-2.5 text-xs font-medium border-b-2 whitespace-nowrap flex items-center gap-2 cursor-pointer transition-colors ${
              activeTab === 'gallery'
                ? 'border-[#d4af37] text-[#faf8f5]'
                : 'border-transparent text-[#a3a099] hover:text-[#d8d4c8]'
            }`}
          >
            <Camera className="w-4 h-4 text-[#d4af37]" />
            <span>Lookbook / Gallery ({gallery.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('appointments')}
            className={`px-4 py-2.5 text-xs font-medium border-b-2 whitespace-nowrap flex items-center gap-2 cursor-pointer transition-colors ${
              activeTab === 'appointments'
                ? 'border-[#d4af37] text-[#faf8f5]'
                : 'border-transparent text-[#a3a099] hover:text-[#d8d4c8]'
            }`}
          >
            <CalendarCheck className="w-4 h-4 text-[#d4af37]" />
            <span>Booked Appointments ({appointments.length})</span>
          </button>
        </div>

        {/* Tab Content Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* TAB 1: SALON PROFILE & CONTACT */}
          {activeTab === 'profile' && (
            <form onSubmit={handleSaveProfile} className="space-y-6 max-w-3xl">
              <div className="flex items-center justify-between pb-3 border-b border-[#26242c]">
                <div>
                  <h3 className="text-sm font-semibold text-[#faf8f5]">
                    Basic Salon Info & Contact Details
                  </h3>
                  <p className="text-xs text-[#a3a099]">
                    Changes will immediately update across all website pages and footers.
                  </p>
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-semibold text-[#0c0c0e] bg-[#d4af37] hover:bg-[#dec16b] flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save Changes</span>
                </button>
              </div>

              {profileSaved && (
                <div className="p-3 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 text-xs text-[#25D366] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Salon profile updated successfully! All pages refreshed.</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#d8d4c8] mb-1">
                    Salon Name
                  </label>
                  <input
                    type="text"
                    value={profileForm.name}
                    onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                    className="w-full bg-[#16161b] border border-[#26242c] rounded-lg px-3.5 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#d8d4c8] mb-1">
                    Subtitle / Tagline
                  </label>
                  <input
                    type="text"
                    value={profileForm.tagline}
                    onChange={(e) => setProfileForm({ ...profileForm, tagline: e.target.value })}
                    className="w-full bg-[#16161b] border border-[#26242c] rounded-lg px-3.5 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#d8d4c8] mb-1">
                  Hero Subtitle Headline
                </label>
                <input
                  type="text"
                  value={profileForm.subTagline}
                  onChange={(e) => setProfileForm({ ...profileForm, subTagline: e.target.value })}
                  className="w-full bg-[#16161b] border border-[#26242c] rounded-lg px-3.5 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#d8d4c8] mb-1">
                    Display Phone Number
                  </label>
                  <input
                    type="text"
                    value={profileForm.displayPhone}
                    onChange={(e) => setProfileForm({ ...profileForm, displayPhone: e.target.value })}
                    className="w-full bg-[#16161b] border border-[#26242c] rounded-lg px-3.5 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#d8d4c8] mb-1">
                    WhatsApp Number (with country code, e.g. 919829000000)
                  </label>
                  <input
                    type="text"
                    value={profileForm.whatsappNumber}
                    onChange={(e) => setProfileForm({ ...profileForm, whatsappNumber: e.target.value })}
                    className="w-full bg-[#16161b] border border-[#26242c] rounded-lg px-3.5 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#d8d4c8] mb-1">
                  Jodhpur Address
                </label>
                <textarea
                  rows={2}
                  value={profileForm.fullAddress}
                  onChange={(e) => setProfileForm({ ...profileForm, fullAddress: e.target.value })}
                  className="w-full bg-[#16161b] border border-[#26242c] rounded-lg px-3.5 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#d8d4c8] mb-1">
                    Prominent Landmark
                  </label>
                  <input
                    type="text"
                    value={profileForm.landmark}
                    onChange={(e) => setProfileForm({ ...profileForm, landmark: e.target.value })}
                    className="w-full bg-[#16161b] border border-[#26242c] rounded-lg px-3.5 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#d8d4c8] mb-1">
                    Instagram Profile Link
                  </label>
                  <input
                    type="text"
                    value={profileForm.instagramUrl}
                    onChange={(e) => setProfileForm({ ...profileForm, instagramUrl: e.target.value })}
                    className="w-full bg-[#16161b] border border-[#26242c] rounded-lg px-3.5 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#d8d4c8] mb-1">
                  Hygiene Standard Commitment
                </label>
                <textarea
                  rows={2}
                  value={profileForm.hygieneCommitment}
                  onChange={(e) => setProfileForm({ ...profileForm, hygieneCommitment: e.target.value })}
                  className="w-full bg-[#16161b] border border-[#26242c] rounded-lg px-3.5 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                ></textarea>
              </div>
            </form>
          )}

          {/* TAB 2: SERVICES MENU */}
          {activeTab === 'services' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#26242c]">
                <div>
                  <h3 className="text-sm font-semibold text-[#faf8f5]">
                    Salon Services Catalog
                  </h3>
                  <p className="text-xs text-[#a3a099]">
                    Add, edit pricing placeholders, or remove services across categories.
                  </p>
                </div>
                <button
                  onClick={() => setIsAddingService(!isAddingService)}
                  className="px-3.5 py-2 rounded-lg text-xs font-medium bg-[#d4af37] text-[#0c0c0e] hover:bg-[#dec16b] flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{isAddingService ? 'Cancel' : 'Add New Service'}</span>
                </button>
              </div>

              {/* Add New Service Form */}
              {isAddingService && (
                <form onSubmit={handleCreateService} className="p-4 rounded-xl bg-[#16161b] border border-[#d4af37]/40 space-y-4">
                  <h4 className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold">
                    New Service Details
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-[#d8d4c8] mb-1">Service Title *</label>
                      <input
                        type="text"
                        required
                        value={newService.name}
                        onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                        placeholder="e.g., Keratin Silk Infusion"
                        className="w-full bg-[#141417] border border-[#26242c] rounded-lg px-3 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-[#d8d4c8] mb-1">Category *</label>
                      <select
                        value={newService.category}
                        onChange={(e) => setNewService({ ...newService, category: e.target.value as any })}
                        className="w-full bg-[#141417] border border-[#26242c] rounded-lg px-3 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                      >
                        <option value="Hair">Hair</option>
                        <option value="Skin">Skin</option>
                        <option value="Makeup">Makeup</option>
                        <option value="Nails">Nails</option>
                        <option value="Spa/Beauty">Spa/Beauty</option>
                        <option value="Other salon services">Other salon services</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs text-[#d8d4c8] mb-1">Audience</label>
                      <select
                        value={newService.targetAudience}
                        onChange={(e) => setNewService({ ...newService, targetAudience: e.target.value as any })}
                        className="w-full bg-[#141417] border border-[#26242c] rounded-lg px-3 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                      >
                        <option value="Unisex">Unisex</option>
                        <option value="Women">Women</option>
                        <option value="Men">Men</option>
                        <option value="Kids">Kids</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs text-[#d8d4c8] mb-1">Price Display *</label>
                      <input
                        type="text"
                        required
                        value={newService.priceDisplay}
                        onChange={(e) => setNewService({ ...newService, priceDisplay: e.target.value })}
                        placeholder="Contact for Price or Custom quote"
                        className="w-full bg-[#141417] border border-[#26242c] rounded-lg px-3 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-[#d8d4c8] mb-1">Duration</label>
                      <input
                        type="text"
                        value={newService.duration}
                        onChange={(e) => setNewService({ ...newService, duration: e.target.value })}
                        placeholder="e.g., 45 mins"
                        className="w-full bg-[#141417] border border-[#26242c] rounded-lg px-3 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-[#d8d4c8] mb-1">Description</label>
                    <textarea
                      rows={2}
                      value={newService.description}
                      onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                      placeholder="Brief description of technique and benefits..."
                      className="w-full bg-[#141417] border border-[#26242c] rounded-lg px-3 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#d4af37] text-[#0c0c0e] font-medium text-xs rounded-lg hover:bg-[#dec16b] cursor-pointer"
                  >
                    Save Service to Menu
                  </button>
                </form>
              )}

              {/* Service Items Table */}
              <div className="divide-y divide-[#26242c] border border-[#26242c] rounded-xl overflow-hidden bg-[#16161b]">
                {services.map((service) => (
                  <div key={service.id} className="p-3.5 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:bg-[#1e1e24] transition-colors">
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-[#faf8f5]">{service.name}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-[#141417] border border-[#26242c] text-[#d4af37]">
                          {service.category}
                        </span>
                        <span className="text-[10px] text-[#a3a099]">({service.targetAudience})</span>
                      </div>
                      <p className="text-xs text-[#7a7885] line-clamp-1">{service.description}</p>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                      <input
                        type="text"
                        value={service.priceDisplay}
                        onChange={(e) => updateService(service.id, { priceDisplay: e.target.value })}
                        className="bg-[#141417] border border-[#26242c] rounded px-2.5 py-1 text-xs text-[#dec16b] w-36 focus:outline-none focus:border-[#d4af37]"
                        title="Edit Price Display"
                      />
                      <button
                        onClick={() => deleteService(service.id)}
                        className="p-1.5 text-[#a3a099] hover:text-red-400 rounded hover:bg-red-400/10 cursor-pointer"
                        title="Delete Service"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: OFFERS */}
          {activeTab === 'offers' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#26242c]">
                <div>
                  <h3 className="text-sm font-semibold text-[#faf8f5]">
                    Special Offers & Packages
                  </h3>
                  <p className="text-xs text-[#a3a099]">
                    Manage seasonal deals, bridal perks, and family combo discounts.
                  </p>
                </div>
                <button
                  onClick={() => setIsAddingOffer(!isAddingOffer)}
                  className="px-3.5 py-2 rounded-lg text-xs font-medium bg-[#d4af37] text-[#0c0c0e] hover:bg-[#dec16b] flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{isAddingOffer ? 'Cancel' : 'Add New Offer'}</span>
                </button>
              </div>

              {isAddingOffer && (
                <form onSubmit={handleCreateOffer} className="p-4 rounded-xl bg-[#16161b] border border-[#d4af37]/40 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-[#d8d4c8] mb-1">Offer Title *</label>
                      <input
                        type="text"
                        required
                        value={newOffer.title}
                        onChange={(e) => setNewOffer({ ...newOffer, title: e.target.value })}
                        placeholder="e.g., Festive Glow Combo"
                        className="w-full bg-[#141417] border border-[#26242c] rounded-lg px-3 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#d8d4c8] mb-1">Badge Tag</label>
                      <input
                        type="text"
                        value={newOffer.tag}
                        onChange={(e) => setNewOffer({ ...newOffer, tag: e.target.value })}
                        placeholder="e.g., Limited Slots"
                        className="w-full bg-[#141417] border border-[#26242c] rounded-lg px-3 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-[#d8d4c8] mb-1">Subtitle Description</label>
                    <input
                      type="text"
                      value={newOffer.subtitle}
                      onChange={(e) => setNewOffer({ ...newOffer, subtitle: e.target.value })}
                      placeholder="e.g., Hair Spa + Hydrating Facial Bundle"
                      className="w-full bg-[#141417] border border-[#26242c] rounded-lg px-3 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-[#d8d4c8] mb-1">Highlight Perk</label>
                      <input
                        type="text"
                        value={newOffer.discountText}
                        onChange={(e) => setNewOffer({ ...newOffer, discountText: e.target.value })}
                        placeholder="e.g., Complimentary Hair Spa"
                        className="w-full bg-[#141417] border border-[#26242c] rounded-lg px-3 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#d8d4c8] mb-1">Validity</label>
                      <input
                        type="text"
                        value={newOffer.validity}
                        onChange={(e) => setNewOffer({ ...newOffer, validity: e.target.value })}
                        placeholder="e.g., Valid this month"
                        className="w-full bg-[#141417] border border-[#26242c] rounded-lg px-3 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#d4af37] text-[#0c0c0e] font-medium text-xs rounded-lg hover:bg-[#dec16b] cursor-pointer"
                  >
                    Save Offer
                  </button>
                </form>
              )}

              <div className="space-y-3">
                {offers.map((offer) => (
                  <div key={offer.id} className="p-4 rounded-xl bg-[#16161b] border border-[#26242c] flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-[#faf8f5]">{offer.title}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-[#141417] text-[#d4af37] border border-[#d4af37]/30">
                          {offer.tag}
                        </span>
                      </div>
                      <p className="text-xs text-[#dec16b]">{offer.subtitle}</p>
                      <p className="text-[11px] text-[#7a7885]">{offer.validity} • {offer.terms}</p>
                    </div>

                    <button
                      onClick={() => deleteOffer(offer.id)}
                      className="p-1.5 text-[#a3a099] hover:text-red-400 cursor-pointer"
                      title="Delete Offer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: GALLERY */}
          {activeTab === 'gallery' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#26242c]">
                <div>
                  <h3 className="text-sm font-semibold text-[#faf8f5]">
                    Lookbook & Ambience Photos
                  </h3>
                  <p className="text-xs text-[#a3a099]">
                    Replace demo imagery with genuine salon photographs and portfolio shots.
                  </p>
                </div>
                <button
                  onClick={() => setIsAddingPhoto(!isAddingPhoto)}
                  className="px-3.5 py-2 rounded-lg text-xs font-medium bg-[#d4af37] text-[#0c0c0e] hover:bg-[#dec16b] flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{isAddingPhoto ? 'Cancel' : 'Add Photo'}</span>
                </button>
              </div>

              {isAddingPhoto && (
                <form onSubmit={handleCreatePhoto} className="p-4 rounded-xl bg-[#16161b] border border-[#d4af37]/40 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-[#d8d4c8] mb-1">Photo Title *</label>
                      <input
                        type="text"
                        required
                        value={newPhoto.title}
                        onChange={(e) => setNewPhoto({ ...newPhoto, title: e.target.value })}
                        placeholder="e.g., Bridal Suite Ambience"
                        className="w-full bg-[#141417] border border-[#26242c] rounded-lg px-3 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#d8d4c8] mb-1">Category</label>
                      <select
                        value={newPhoto.category}
                        onChange={(e) => setNewPhoto({ ...newPhoto, category: e.target.value as any })}
                        className="w-full bg-[#141417] border border-[#26242c] rounded-lg px-3 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                      >
                        <option value="Hair">Hair</option>
                        <option value="Bridal & Makeup">Bridal & Makeup</option>
                        <option value="Skin & Spa">Skin & Spa</option>
                        <option value="Nail Art">Nail Art</option>
                        <option value="Men Grooming">Men Grooming</option>
                        <option value="Salon Ambience">Salon Ambience</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-[#d8d4c8] mb-1">Image URL (or Unsplash photo) *</label>
                    <input
                      type="url"
                      required
                      value={newPhoto.imageUrl}
                      onChange={(e) => setNewPhoto({ ...newPhoto, imageUrl: e.target.value })}
                      placeholder="https://..."
                      className="w-full bg-[#141417] border border-[#26242c] rounded-lg px-3 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[#d8d4c8] mb-1">Caption</label>
                    <input
                      type="text"
                      value={newPhoto.caption}
                      onChange={(e) => setNewPhoto({ ...newPhoto, caption: e.target.value })}
                      placeholder="Brief note or client styling credits..."
                      className="w-full bg-[#141417] border border-[#26242c] rounded-lg px-3 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#d4af37] text-[#0c0c0e] font-medium text-xs rounded-lg hover:bg-[#dec16b] cursor-pointer"
                  >
                    Add to Gallery
                  </button>
                </form>
              )}

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {gallery.map((photo) => (
                  <div key={photo.id} className="relative rounded-xl overflow-hidden bg-[#16161b] border border-[#26242c] group aspect-square">
                    <img
                      src={photo.imageUrl}
                      alt={photo.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-2 inset-x-2">
                      <p className="text-xs text-[#faf8f5] font-medium truncate">{photo.title}</p>
                      <p className="text-[10px] text-[#dec16b]">{photo.category}</p>
                    </div>
                    <button
                      onClick={() => deleteGalleryPhoto(photo.id)}
                      className="absolute top-2 right-2 p-1 rounded-full bg-red-600/80 text-white hover:bg-red-600 transition-colors cursor-pointer"
                      title="Delete Photo"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: APPOINTMENTS */}
          {activeTab === 'appointments' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#26242c]">
                <div>
                  <h3 className="text-sm font-semibold text-[#faf8f5]">
                    Customer Appointments Log
                  </h3>
                  <p className="text-xs text-[#a3a099]">
                    Review and update reservations booked through the online portal.
                  </p>
                </div>
                <span className="text-xs text-[#dec16b] bg-[#1e1e24] px-3 py-1 rounded-full border border-[#26242c]">
                  Total Bookings: {appointments.length}
                </span>
              </div>

              {appointments.length === 0 ? (
                <div className="p-8 text-center text-xs text-[#7a7885] bg-[#16161b] rounded-xl border border-[#26242c]">
                  No appointments logged yet. Try booking one from the website form!
                </div>
              ) : (
                <div className="space-y-3">
                  {appointments.map((app) => (
                    <div
                      key={app.id}
                      className="p-4 rounded-xl bg-[#16161b] border border-[#26242c] flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm text-[#faf8f5]">{app.customerName}</span>
                          <span className="text-xs text-[#d4af37]">({app.phone})</span>
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                              app.status === 'Confirmed'
                                ? 'bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40'
                                : app.status === 'Completed'
                                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                : 'bg-[#dec16b]/20 text-[#dec16b] border border-[#dec16b]/30'
                            }`}
                          >
                            {app.status}
                          </span>
                        </div>
                        <p className="text-xs text-[#d8d4c8]">
                          Ritual: <strong className="text-[#dec16b]">{app.serviceName}</strong>
                        </p>
                        <p className="text-xs text-[#a3a099]">
                          Requested Slot: <span className="text-[#faf8f5]">{app.preferredDate}</span> at <span className="text-[#faf8f5]">{app.preferredTime}</span>
                        </p>
                        {app.message && (
                          <p className="text-[11px] text-[#7a7885] italic">
                            Note: "{app.message}"
                          </p>
                        )}
                      </div>

                      <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                        {/* 1-Click WhatsApp Client */}
                        <a
                          href={`https://wa.me/${app.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(app.customerName)},%20this%20is%20Yantra%20Salon%20in%20Jodhpur%20regarding%20your%20appointment%20request%20for%20${encodeURIComponent(app.serviceName)}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366] hover:text-[#0c0c0e] border border-[#25D366]/40 flex items-center gap-1 transition-all"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </a>

                        {/* Status update selector */}
                        <select
                          value={app.status}
                          onChange={(e) => updateAppointmentStatus(app.id, e.target.value as any)}
                          className="bg-[#141417] border border-[#26242c] rounded-lg px-2.5 py-1.5 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Confirmed">Confirmed</option>
                          <option value="Completed">Completed</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>

                        <button
                          onClick={() => deleteAppointment(app.id)}
                          className="p-1.5 text-[#a3a099] hover:text-red-400 cursor-pointer"
                          title="Delete Booking"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
