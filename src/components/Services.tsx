import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Tag, Sparkles, X, ChevronRight, Check } from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
  onNavigate: (sectionId: string) => void;
}

type CategoryFilter = 'All' | 'Hair' | 'Makeup' | 'Skin' | 'Nails' | 'Academy';

export default function Services({ onSelectService, onNavigate }: ServicesProps) {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('All');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const categories: { value: CategoryFilter; label: string }[] = [
    { value: 'All', label: 'All Services' },
    { value: 'Hair', label: 'Hair Care' },
    { value: 'Makeup', label: 'Signature Makeup' },
    { value: 'Skin', label: 'Advanced Skin' },
    { value: 'Nails', label: 'Nail Art' },
    { value: 'Academy', label: 'Academy' },
  ];

  const filteredServices = SERVICES.filter(
    (service) => activeFilter === 'All' || service.category === activeFilter
  );

  const handleBookNow = (serviceName: string) => {
    onSelectService(serviceName);
    onNavigate('booking');
    setSelectedService(null); // Close modal if open
  };

  return (
    <section id="services" className="py-24 bg-[#121212] relative overflow-hidden border-t border-white/5">
      {/* Decorative radial gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-400/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-200/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-gold-400 block mb-2 font-display">
            Luxurious Treatments
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white font-semibold tracking-wide leading-tight mb-4">
            Our Premium Services
          </h2>
          <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">
            Indulge in our exquisite portfolio of beauty and hair care therapies. We combine elite artistry, advanced clinical products, and exceptional service to curate your personal style.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-6" />
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-white/5 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 focus:outline-none ${
                activeFilter === cat.value
                  ? 'gold-gradient text-black shadow-[0_4px_15px_rgba(212,175,55,0.25)] font-bold'
                  : 'bg-zinc-900 text-gray-400 border border-white/5 hover:border-gold-400/30 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              key={service.id}
              className="group bg-white/[0.02] hover:bg-white/[0.04] rounded-2xl overflow-hidden flex flex-col h-full border border-white/5 hover:border-gold-400/20 transition-all duration-300 relative"
            >
              {/* Image with overlay */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-zinc-900">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute top-3 left-3 bg-black/75 border border-gold-400/30 text-[9px] font-bold text-gold-400 uppercase tracking-widest px-2.5 py-1 rounded-full backdrop-blur-md">
                  {service.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-semibold text-white group-hover:text-gold-200 transition-colors font-display tracking-wide mb-2 line-clamp-1">
                    {service.name}
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed mb-4 line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Pricing / Duration info */}
                <div className="mt-auto pt-4 border-t border-white/5">
                  <div className="flex items-center justify-between text-[11px] text-gray-400 mb-4 font-mono">
                    {service.duration && (
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-gold-400/80" />
                        {service.duration}
                      </span>
                    )}
                    {service.price && (
                      <span className="flex items-center gap-1 text-gold-300 font-semibold">
                        <Tag className="w-3.5 h-3.5 text-gold-400/80" />
                        {service.price}
                      </span>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="bg-zinc-900 text-gray-300 hover:text-white border border-white/10 hover:border-gold-400/40 text-[10px] font-semibold uppercase tracking-wider py-2 rounded-lg transition-colors focus:outline-none"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => handleBookNow(service.name)}
                      className="gold-gradient text-black text-[10px] font-bold uppercase tracking-widest py-2 rounded-lg hover:brightness-110 active:scale-95 transition-all focus:outline-none flex items-center justify-center gap-1"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Deluxe Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-zinc-950 border border-gold-400/30 rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 bg-black/70 border border-white/10 hover:border-gold-400 text-gray-400 hover:text-white p-2 rounded-full backdrop-blur-md transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image Hero banner inside modal */}
              <div className="h-56 relative w-full bg-zinc-900">
                <img
                  src={selectedService.image}
                  alt={selectedService.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="bg-gold-400 text-black text-[9px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-2 inline-block">
                    {selectedService.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-wide">
                    {selectedService.name}
                  </h3>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-400 mb-2">Description</h4>
                <p className="text-sm text-gray-300 font-light leading-relaxed mb-6">
                  {selectedService.description}
                </p>

                {/* Additional service perks */}
                <div className="bg-zinc-900/60 border border-white/5 rounded-xl p-4 mb-6">
                  <h5 className="text-xs uppercase tracking-widest font-bold text-white mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-gold-400" />
                    Keeva Service Guarantee
                  </h5>
                  <ul className="space-y-2 text-xs text-gray-400">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      Strictly non-toxic, safe & internationally-sourced organic hair & skin cosmetics.
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      Individual custom-fit consultation before the session starts.
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      Performed by certified hair masters & skin therapists with elite hospitality.
                    </li>
                  </ul>
                </div>

                {/* Footer specs & Book Button */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5">
                  <div className="flex gap-6 text-xs text-gray-400 font-mono w-full sm:w-auto justify-around">
                    {selectedService.duration && (
                      <div className="text-center sm:text-left">
                        <span className="block text-[10px] uppercase text-gray-500 font-sans tracking-wider">Duration</span>
                        <span className="font-semibold text-white">{selectedService.duration}</span>
                      </div>
                    )}
                    {selectedService.price && (
                      <div className="text-center sm:text-left">
                        <span className="block text-[10px] uppercase text-gray-500 font-sans tracking-wider">Estimated Price</span>
                        <span className="font-semibold text-gold-300">{selectedService.price}</span>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => handleBookNow(selectedService.name)}
                    className="w-full sm:w-auto gold-gradient text-black font-bold uppercase tracking-widest text-xs px-6 py-3 rounded-xl flex items-center justify-center gap-1.5 shadow-lg shadow-gold-400/20"
                  >
                    Confirm Booking
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
