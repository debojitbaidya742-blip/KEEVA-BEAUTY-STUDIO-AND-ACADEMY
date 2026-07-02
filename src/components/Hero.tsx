import { motion } from 'motion/react';
import { Phone, Calendar, ArrowRight, MessageCircle, MapPin, Star } from 'lucide-react';
import { CONTACT_INFO, IMAGE_HERO_BG } from '../data';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  // Safe links
  const callLink = `tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`;
  // Clean up space or + and use international format for WhatsApp API
  const whatsappUrl = `https://wa.me/916002167336?text=Hi%20Keeva%20Beauty%20Studio%2C%20I'd%20like%20to%20book%20an%20appointment.`;
  const directionsUrl = `https://maps.google.com/?q=Keeva+Beauty+Studio+and+Academy+Navoday+Lane+National+Highway+Road+Silchar+Assam+788005`;

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-16 bg-[#121212] overflow-hidden">
      {/* Background image overlay elements to maintain depth behind the bento layout */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src={IMAGE_HERO_BG}
          alt="Keeva Salon Premium Interior"
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-[#121212] z-10" />
      </div>

      {/* Decorative Gold & Pink glowing background blobs for premium ambience */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-400/10 rounded-full filter blur-[120px] pointer-events-none z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-200/5 rounded-full filter blur-[120px] pointer-events-none z-10" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Responsive Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-rows-6 gap-4">
          
          {/* Box 1: Large Main Hero Block (col-span-8 row-span-4 on large screens) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-12 lg:col-span-8 lg:row-span-4 bg-gradient-to-br from-[#1a1a1a] to-[#252525] rounded-3xl border border-white/5 relative p-6 sm:p-10 flex flex-col justify-center overflow-hidden min-h-[380px]"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 blur-[100px] rounded-full"></div>
            <div className="relative z-10">
              {/* Rating stars */}
              <div 
                className="flex items-center gap-2 mb-4 cursor-pointer hover:opacity-85 transition-opacity inline-flex"
                onClick={() => onNavigate('reviews')}
              >
                <span className="text-[#D4AF37] text-sm italic">★ ★ ★ ★ ★</span>
                <span className="text-[11px] uppercase tracking-tighter text-white/50 underline">
                  4.8/5 Rating ({CONTACT_INFO.reviewsCount} Reviews)
                </span>
              </div>
              
              {/* Main Headline */}
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif leading-tight mb-4 text-[#FADADD]">
                Enhancing Beauty with <span className="text-[#D4AF37]">Style & Confidence</span>
              </h2>
              
              {/* Quote/Motto */}
              <p className="text-white/60 max-w-lg text-xs sm:text-sm leading-relaxed mb-8 border-l-2 border-[#D4AF37] pl-4 italic">
                Experience luxury at Silchar's premier beauty studio. Our expert team combines art and science to create your perfect look.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('booking')}
                  className="bg-[#D4AF37] hover:bg-[#C59B27] active:scale-95 text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300"
                >
                  Book Appointment
                </button>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 active:scale-95 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300"
                >
                  Gallery Portfolio
                </button>
              </div>
            </div>
          </motion.div>

          {/* Box 2: Elite Academy overview (col-span-4 row-span-3 on large screens) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-6 lg:col-span-4 lg:row-span-3 bg-white/[0.03] rounded-3xl border border-white/5 p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-bold mb-5 flex items-center justify-between">
                Elite Academy <span>[01]</span>
              </h3>
              
              <div className="space-y-4">
                <div onClick={() => onNavigate('courses')} className="group cursor-pointer">
                  <div className="flex justify-between items-center text-xs sm:text-sm font-medium border-b border-white/10 pb-2.5 hover:border-[#D4AF37]/40 transition-colors">
                    <span className="text-white/80 group-hover:text-white">Professional Makeup Course</span>
                    <span className="text-[10px] text-pink-300 group-hover:text-pink-200">Enquire</span>
                  </div>
                </div>
                <div onClick={() => onNavigate('courses')} className="group cursor-pointer">
                  <div className="flex justify-between items-center text-xs sm:text-sm font-medium border-b border-white/10 pb-2.5 hover:border-[#D4AF37]/40 transition-colors">
                    <span className="text-white/80 group-hover:text-white">Advanced Hair Styling</span>
                    <span className="text-[10px] text-pink-300 group-hover:text-pink-200">Masterclass</span>
                  </div>
                </div>
                <div onClick={() => onNavigate('courses')} className="group cursor-pointer">
                  <div className="flex justify-between items-center text-xs sm:text-sm font-medium border-b border-white/10 pb-2.5 hover:border-[#D4AF37]/40 transition-colors">
                    <span className="text-white/80 group-hover:text-white">Skin & Aesthetics</span>
                    <span className="text-[10px] text-pink-300 group-hover:text-pink-200">Level 2</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#FADADD]/5 rounded-xl border border-[#FADADD]/10">
              <p className="text-[11px] leading-relaxed text-white/70 italic">
                "Master the art of beauty with our certified experts. Join Silchar's most prestigious training program."
              </p>
            </div>
          </motion.div>

          {/* Box 3: Quick Booking information (col-span-4 row-span-3 on large screens) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-6 lg:col-span-4 lg:row-span-3 bg-gradient-to-tr from-[#D4AF37]/15 to-transparent rounded-3xl border border-[#D4AF37]/20 p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-white text-xs uppercase tracking-[0.2em] font-bold mb-4 flex items-center justify-between">
                Quick Booking <span className="text-[#D4AF37]">⚡</span>
              </h3>
              <p className="text-xs text-white/70 leading-relaxed font-light mb-4">
                Reserve your luxury treatment or free bridal beauty consultation instantly. Select your preferred stylist or therapy session.
              </p>
              
              <div className="space-y-2 font-mono text-[11px] text-[#FADADD]">
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span>✨ Hair Smoothening</span>
                  <span className="text-[#D4AF37] font-medium">Available Today</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span>✨ Bridal Makeover</span>
                  <span className="text-[#D4AF37] font-medium">Slots Open</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('booking')}
              className="w-full bg-white text-black hover:bg-[#D4AF37] hover:text-black py-2.5 rounded-xl text-[10px] font-bold uppercase mt-6 tracking-widest transition-colors"
            >
              Secure Slot
            </button>
          </motion.div>

          {/* Box 4: Studio Visit & Hours (col-span-4 row-span-2 on large screens) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-6 lg:col-span-4 lg:row-span-2 bg-[#FADADD]/5 rounded-3xl border border-[#FADADD]/10 p-6 flex flex-col justify-between"
          >
            <div>
              <div className="text-[#FADADD] text-lg font-serif mb-1">Studio Visit</div>
              <p className="text-[10px] text-white/60 uppercase tracking-widest mb-4">Silchar, Assam 788005</p>
            </div>
            
            <div className="text-[11px] space-y-1 font-mono">
              <div className="flex justify-between text-white/80">
                <span>Mon - Sat</span>
                <span className="text-[#D4AF37]">9:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between text-white/80">
                <span>Sunday</span>
                <span className="text-pink-300">9:00 AM - 4:00 PM</span>
              </div>
            </div>
          </motion.div>

          {/* Box 5: Connect Support (col-span-4 row-span-2 on large screens) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-6 lg:col-span-4 lg:row-span-2 bg-black/40 rounded-3xl border border-white/5 p-6 flex flex-col justify-between"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/10 p-2.5 rounded-full flex items-center justify-center">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <div>
                <div className="text-xs font-bold font-mono text-white">{CONTACT_INFO.phone}</div>
                <div className="text-[9px] text-white/40 uppercase tracking-widest">Call or WhatsApp Now</div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 h-10 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center text-[10px] uppercase font-bold tracking-widest border border-white/5 text-white/90 transition-colors"
              >
                WhatsApp
              </a>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 h-10 bg-[#D4AF37]/20 hover:bg-[#D4AF37]/35 rounded-xl flex items-center justify-center text-[10px] uppercase font-bold tracking-widest border border-[#D4AF37]/30 text-[#D4AF37] transition-colors"
              >
                Directions
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
