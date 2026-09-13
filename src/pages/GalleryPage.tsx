import React, { useState } from 'react';
import { useSalon } from '../context/SalonContext';
import { GalleryPhoto } from '../types';
import { Sparkles, Eye, X, Camera, SlidersHorizontal } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const { gallery, setIsCMSOpen } = useSalon();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const categories = [
    'All',
    'Hair',
    'Bridal & Makeup',
    'Skin & Spa',
    'Nail Art',
    'Men Grooming',
    'Salon Ambience'
  ];

  const filteredPhotos = selectedCategory === 'All'
    ? gallery
    : gallery.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-12 bg-[#0c0c0e] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#16161b] border border-[#d4af37]/30 text-xs text-[#dec16b]">
            <Camera className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Lookbook & Inspirations</span>
          </div>
          <h1 className="font-serif-display text-4xl sm:text-5xl font-semibold text-[#faf8f5]">
            Visual Artistry Gallery
          </h1>
          <p className="text-sm sm:text-base text-[#d8d4c8] leading-relaxed">
            Witness our hair styling mastery, bridal makeovers, rejuvenating skin rituals, and peaceful salon aesthetics in Jodhpur.
          </p>

          <div className="flex items-center justify-center gap-2 text-xs text-[#7a7885]">
            <span>Curated demo placeholders</span>
            <span>•</span>
            <button
              onClick={() => setIsCMSOpen(true)}
              className="text-[#d4af37] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <SlidersHorizontal className="w-3 h-3" />
              <span>Salon Owner: Manage Photos</span>
            </button>
          </div>
        </div>

        {/* Category Filter Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#d4af37] text-[#0c0c0e] font-semibold shadow-md shadow-[#d4af37]/20'
                  : 'bg-[#16161b] text-[#d8d4c8] hover:bg-[#1e1e24] border border-[#26242c]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="group relative rounded-xl overflow-hidden bg-[#141417] border border-[#26242c] hover:border-[#d4af37]/60 transition-all duration-300 aspect-[3/4] cursor-pointer shadow-lg hover:-translate-y-1"
            >
              <img
                src={photo.imageUrl}
                alt={photo.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

              {/* Tag */}
              <div className="absolute top-3 left-3 bg-[#0c0c0e]/85 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider text-[#dec16b] border border-[#d4af37]/30">
                {photo.category}
              </div>

              {/* Caption info */}
              <div className="absolute bottom-3 inset-x-3 space-y-1">
                <h3 className="font-serif-display text-base font-medium text-[#faf8f5]">
                  {photo.title}
                </h3>
                <p className="text-[11px] text-[#a3a099] line-clamp-1">
                  {photo.caption}
                </p>
              </div>

              {/* Hover overlay icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                <div className="w-10 h-10 rounded-full bg-[#d4af37] text-[#0c0c0e] flex items-center justify-center shadow-xl">
                  <Eye className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#141417] border border-[#26242c] rounded-2xl overflow-hidden p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-black/70 text-[#faf8f5] hover:text-[#d4af37] flex items-center justify-center border border-white/20 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-black">
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-4 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                  {activePhoto.category}
                </span>
                <span className="text-[11px] text-[#7a7885]">Demo Preview Photo</span>
              </div>
              <h3 className="font-serif-display text-2xl text-[#faf8f5]">
                {activePhoto.title}
              </h3>
              <p className="text-xs text-[#a3a099]">
                {activePhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
