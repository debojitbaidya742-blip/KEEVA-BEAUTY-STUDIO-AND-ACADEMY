import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Interior' | 'Bridal' | 'Hair' | 'Nails' | 'Makeover'>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterTabs: { value: typeof activeFilter; label: string }[] = [
    { value: 'All', label: 'View All' },
    { value: 'Interior', label: 'Salon Interior' },
    { value: 'Bridal', label: 'Bridal Makeup' },
    { value: 'Hair', label: 'Hair Treatments' },
    { value: 'Nails', label: 'Nail Designs' },
    { value: 'Makeover', label: 'Makeovers' },
  ];

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeFilter === 'All' || item.category === activeFilter
  );

  const handleOpenLightbox = (item: GalleryItem) => {
    // Find the index in the filtered items
    const idx = filteredItems.findIndex((x) => x.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#121212] relative overflow-hidden border-t border-white/5">
      {/* Visual background gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-400/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-gold-400 block mb-2 font-display">
            Visual Craftsmanship
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white font-semibold tracking-wide leading-tight mb-4">
            Our Masterpiece Gallery
          </h2>
          <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">
            Take a visual tour of our luxurious hair treatments, immaculate manicures, gorgeous bridal makeovers, and the state-of-the-art modern interior of our salon.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-6" />
        </div>

        {/* Filters Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => {
                setActiveFilter(tab.value);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 rounded-lg text-xs uppercase tracking-widest font-semibold transition-all duration-300 focus:outline-none ${
                activeFilter === tab.value
                  ? 'border border-gold-400 text-gold-400 bg-gold-400/5 font-bold shadow-[0_2px_10px_rgba(212,175,55,0.1)]'
                  : 'border border-white/5 text-gray-400 hover:text-white hover:border-gold-400/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => handleOpenLightbox(item)}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 cursor-pointer shadow-md hover:shadow-[0_10px_25px_rgba(212,175,55,0.15)] hover:border-[#D4AF37]/30 transition-all duration-300"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Overlap Tint and controls */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />
                
                {/* Details on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-between z-10">
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest font-bold text-gold-400 mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-sm font-semibold text-white font-display tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                  <div className="bg-gold-400 p-2 rounded-full text-black hover:scale-110 active:scale-95 transition-transform shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full screen Lightbox Carousel */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/98 flex flex-col justify-between p-4 sm:p-8"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Header section of Lightbox */}
            <div className="flex items-center justify-between text-white relative z-10">
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-gold-400">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h4 className="text-sm sm:text-lg font-display font-semibold">
                  {filteredItems[lightboxIndex].title}
                </h4>
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                className="bg-zinc-900 border border-white/10 text-gray-300 hover:text-white p-3 rounded-full hover:border-gold-400 transition-colors cursor-pointer"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Stage with Image & controls */}
            <div className="flex-grow flex items-center justify-center relative my-4">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 z-10 bg-zinc-900/80 border border-white/10 hover:border-gold-400 text-white p-3 rounded-full backdrop-blur-md hover:scale-105 transition-all cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Main Image */}
              <div
                className="max-h-[70vh] max-w-[90vw] md:max-w-[70vw] overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-zinc-950 flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  className="max-h-[70vh] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 z-10 bg-zinc-900/80 border border-white/10 hover:border-gold-400 text-white p-3 rounded-full backdrop-blur-md hover:scale-105 transition-all cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Footer / Info Indicators */}
            <div className="text-center text-xs text-gray-500 font-mono relative z-10">
              Image {lightboxIndex + 1} of {filteredItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
