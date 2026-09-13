import React, { useState } from 'react';
import { useSalon } from '../context/SalonContext';
import { GalleryPhoto } from '../types';
import { Sparkles, ArrowRight, Eye, X, Camera } from 'lucide-react';

export const GalleryPreview: React.FC = () => {
  const { gallery, setActivePage } = useSalon();
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  return (
    <section id="gallery-preview-section" className="py-20 bg-[#0f0f12] border-t border-[#26242c]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
              <Camera className="w-3.5 h-3.5" />
              <span>Visual Showcase</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#faf8f5]">
              Artistry & Ambience Preview
            </h2>
            <p className="text-sm sm:text-base text-[#a3a099] max-w-xl leading-relaxed">
              Explore glimpses of our salon interiors, signature hair transformations, and radiant makeover artistry in Jodhpur.
            </p>
          </div>

          <button
            onClick={() => {
              setActivePage('gallery');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#dec16b] hover:text-[#faf8f5] transition-colors group cursor-pointer"
          >
            <span>View Complete Lookbook</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {gallery.slice(0, 4).map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#16161b] border border-[#26242c] group cursor-pointer hover:border-[#d4af37]/60 transition-all duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-[0.88] group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e]/90 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
              
              <div className="absolute top-3 left-3 bg-[#0c0c0e]/80 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider text-[#dec16b] border border-[#d4af37]/30">
                {item.category}
              </div>

              <div className="absolute bottom-3 inset-x-3 space-y-1">
                <p className="font-serif-display text-base font-medium text-[#faf8f5]">
                  {item.title}
                </p>
                <p className="text-[11px] text-[#a3a099] line-clamp-1">
                  {item.caption}
                </p>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                <div className="w-10 h-10 rounded-full bg-[#d4af37] text-[#0c0c0e] flex items-center justify-center shadow-lg">
                  <Eye className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-[#7a7885] mt-6 italic">
          *Note: Images displayed are curated aesthetic placeholders until replaced with official salon photographs via the Content Manager.
        </p>

      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#141417] border border-[#26242c] rounded-2xl overflow-hidden p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-black/70 text-[#faf8f5] hover:text-[#d4af37] flex items-center justify-center border border-white/20 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-xl bg-black">
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-4 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-medium">
                  {activePhoto.category}
                </span>
                <span className="text-[11px] text-[#7a7885]">Demo Preview</span>
              </div>
              <h3 className="font-serif-display text-xl text-[#faf8f5]">
                {activePhoto.title}
              </h3>
              <p className="text-xs text-[#a3a099]">
                {activePhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
