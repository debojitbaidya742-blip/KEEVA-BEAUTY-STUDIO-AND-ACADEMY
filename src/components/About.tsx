import { motion } from 'motion/react';
import { Award, Sparkles, ShieldCheck, Heart, UserCheck } from 'lucide-react';
import { IMAGE_BRIDAL_MAKEUP, IMAGE_HAIR_SERVICE } from '../data';

interface AboutProps {
  onNavigate: (sectionId: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const highlights = [
    {
      icon: <Award className="w-5 h-5 text-gold-400" />,
      title: 'Certified Mastery & Academy',
      description: 'Our double identity as an elite studio and training academy guarantees that your services are performed by educators and high-caliber certified masters at the absolute forefront of beauty science.'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-gold-400" />,
      title: 'Premium International Products',
      description: 'We strictly employ world-renowned, hypoallergenic, and organic product ranges. No compromises on skin and hair integrity.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-gold-400" />,
      title: 'Unrivaled Hygiene Protocols',
      description: 'Every tool is completely autoclaved and sterilized, and single-use disposables are used for ultimate sanitation and client safety.'
    },
    {
      icon: <UserCheck className="w-5 h-5 text-gold-400" />,
      title: 'Dedicated Customer Satisfaction',
      description: 'We believe beauty is personal. Each service starts with an in-depth private consultation to design a tailored look representing your style.'
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-[#121212] overflow-hidden border-t border-white/5">
      {/* Abstract light effects */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-pink-200/5 rounded-full filter blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Visual Overlapping Layout */}
          <div className="lg:col-span-5 relative order-2 lg:order-1 flex justify-center lg:block">
            <div className="relative w-full max-w-sm sm:max-w-md h-[450px]">
              {/* Back Image (Hair Treatment) */}
              <div className="absolute top-0 left-0 w-2/3 h-2/3 rounded-2xl overflow-hidden border border-white/5 shadow-2xl z-10">
                <img
                  src={IMAGE_HAIR_SERVICE}
                  alt="Elite Hair Care"
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Front Overlapping Image (Bridal Makeover) with Gold Frame */}
              <div className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-2xl overflow-hidden border border-[#D4AF37]/30 p-1.5 bg-zinc-900 shadow-2xl z-20">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img
                    src={IMAGE_BRIDAL_MAKEUP}
                    alt="Signature Bridal Makeup"
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Gold stamped seal emblem */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-black/90 border border-[#D4AF37]/30 p-4 rounded-full shadow-lg text-center aspect-square flex flex-col items-center justify-center w-28 backdrop-blur-sm">
                <span className="block text-xl font-display font-bold text-gold-400 leading-none">4.8★</span>
                <span className="block text-[8px] tracking-[0.1em] text-white uppercase font-bold mt-1">Top Rated</span>
                <span className="block text-[6px] tracking-wider text-gray-400 uppercase">Silchar, Assam</span>
              </div>
            </div>
          </div>

          {/* Right Column: Text Information */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-gold-400 block mb-2 font-display">
              The Art of Sophistication
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white font-semibold tracking-wide leading-tight mb-6">
              Welcome to Keeva <br className="hidden sm:block" />
              <span className="italic text-gold-200">Beauty Studio and Academy</span>
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6 font-light">
              Located in the heart of Silchar, Assam, **Keeva Beauty Studio and Academy** is a sanctuary where high-fashion style meets clinical beauty precision. We deliver premium luxury services, transforming your hair, skin, and nails with impeccable technique and artistic flair.
            </p>
            
            <p className="text-gray-400 leading-relaxed mb-8 font-light text-sm">
              As a premier **Beauty Academy**, we don’t just practice the highest standards — we define them. Our experienced, award-winning staff trains the next generation of professional cosmetologists, ensuring our salon processes are consistently aligned with global trends, advanced treatments, and state-of-the-art hair and makeup safety protocols.
            </p>

            {/* List of Highlights in Bento styled cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/[0.02] border border-white/5 hover:border-gold-400/25 p-5 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:bg-white/[0.04] group"
                >
                  <div className="flex-shrink-0 mb-3 bg-zinc-900 border border-white/5 p-1.5 rounded-lg h-9 w-9 flex items-center justify-center shadow-inner group-hover:border-[#D4AF37]/30 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-gold-100 font-display tracking-wide mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats section */}
            <div className="border-t border-white/5 pt-8 flex flex-wrap items-center gap-8 justify-between lg:justify-start">
              <div>
                <span className="block text-2xl sm:text-3xl font-display font-extrabold text-gold-400">37+</span>
                <span className="text-xs tracking-wider text-gray-400 uppercase">5-Star Google Reviews</span>
              </div>
              <div className="h-10 w-px bg-white/5 hidden sm:block" />
              <div>
                <span className="block text-2xl sm:text-3xl font-display font-extrabold text-gold-400">100%</span>
                <span className="text-xs tracking-wider text-gray-400 uppercase">Premium Quality Products</span>
              </div>
              <div className="h-10 w-px bg-white/5 hidden sm:block" />
              <div>
                <button
                  onClick={() => onNavigate('booking')}
                  className="gold-gradient text-black font-semibold text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-md"
                >
                  Experience Keeva
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
