import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, ArrowUp, Sparkles, Shield, Lock, FileText, X } from 'lucide-react';
import { CONTACT_INFO } from './data';

// Component Imports
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Academy from './components/Academy';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedService, setSelectedService] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  // References for active section tracking
  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px', // Trigger near middle of viewport
    threshold: 0
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    // Dynamic section detection via intersection observer
    const sections = ['home', 'about', 'services', 'gallery', 'reviews', 'courses', 'booking', 'contact'];
    const observers = sections.map((secId) => {
      const el = document.getElementById(secId);
      if (!el) return null;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(secId);
          }
        });
      }, observerOptions);

      observer.observe(el);
      return { el, observer };
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('home');
  };

  const callNumber = CONTACT_INFO.phone.replace(/\s+/g, '');
  const whatsappUrl = "https://wa.me/916002167336?text=Hi%20Keeva%20Beauty%20Studio%2C%20I'd%20like%20to%20enquire%20about%20your%20services.";

  return (
    <div className="relative min-h-screen bg-black text-gray-100 selection:bg-gold-400 selection:text-black">
      
      {/* Sticky Top Header */}
      <Header onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Single Page Content */}
      <main className="w-full">
        {/* Home/Hero Banner Section */}
        <Hero onNavigate={handleNavigate} />

        {/* About Section */}
        <About onNavigate={handleNavigate} />

        {/* Services Section */}
        <Services onSelectService={handleSelectService} onNavigate={handleNavigate} />

        {/* Gallery Section */}
        <Gallery />

        {/* Reviews Section */}
        <Reviews />

        {/* Academy Section */}
        <Academy onSelectService={handleSelectService} onNavigate={handleNavigate} />

        {/* Appointment Booking Section */}
        <BookingForm
          selectedService={selectedService}
          onClearSelectedService={() => setSelectedService('')}
        />

        {/* Contact Us, Öffnungszeiten and Map Section */}
        <Contact />
      </main>

      {/* Luxury Brand Footer */}
      <footer className="bg-zinc-950 border-t border-gold-400/10 pt-16 pb-8 relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 text-xs sm:text-sm text-gray-400 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 rounded-full border border-gold-400/50 bg-black flex items-center justify-center text-gold-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-display tracking-[0.15em] font-bold text-white text-base">KEEVA</span>
            </div>
            <p className="leading-relaxed font-light text-xs text-gray-500">
              Keeva Beauty Studio and Academy offers premium hair care, luxury makeovers, advanced skin aesthetics, and international academy training in Silchar, Assam.
            </p>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-gold-400 text-xs">★</span>
              ))}
              <span className="text-gray-500 text-[10px] ml-1">4.8 rated</span>
            </div>
          </div>

          {/* Col 2: Services short list */}
          <div className="space-y-3">
            <h4 className="text-white font-display uppercase tracking-widest text-xs font-bold">Treatments</h4>
            <ul className="space-y-1.5 text-xs font-light">
              <li><button onClick={() => handleNavigate('services')} className="hover:text-gold-400 transition-colors">Hair Styling & Smoothening</button></li>
              <li><button onClick={() => handleNavigate('services')} className="hover:text-gold-400 transition-colors">Bridal & Party HD Makeup</button></li>
              <li><button onClick={() => handleNavigate('services')} className="hover:text-gold-400 transition-colors">Luxury Radiance Facials</button></li>
              <li><button onClick={() => handleNavigate('services')} className="hover:text-gold-400 transition-colors">Gel Nail Art & Overlays</button></li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation links */}
          <div className="space-y-3">
            <h4 className="text-white font-display uppercase tracking-widest text-xs font-bold">Quick Links</h4>
            <ul className="space-y-1.5 text-xs font-light">
              <li><button onClick={() => handleNavigate('about')} className="hover:text-gold-400 transition-colors">About Our Studio</button></li>
              <li><button onClick={() => handleNavigate('gallery')} className="hover:text-gold-400 transition-colors">Makeover Portfolio</button></li>
              <li><button onClick={() => handleNavigate('courses')} className="hover:text-gold-400 transition-colors">Cosmetology Academy</button></li>
              <li><button onClick={() => handleNavigate('booking')} className="hover:text-gold-400 transition-colors">Book An Appointment</button></li>
            </ul>
          </div>

          {/* Col 4: Quick Contact footer specs */}
          <div className="space-y-3 text-xs">
            <h4 className="text-white font-display uppercase tracking-widest text-xs font-bold">Contact Us</h4>
            <p className="font-light leading-relaxed text-gray-500">
              2nd Floor, Navoday Lane,<br />
              NH Road, Silchar, Assam 788005
            </p>
            <div className="space-y-1 font-mono text-gray-400 text-[11px]">
              <div className="flex gap-1 items-center">
                <Phone className="w-3.5 h-3.5 text-gold-400/70" />
                <span>{CONTACT_INFO.phone}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer bottom legal area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-600">
          <p className="font-light">
            Copyright &copy; {new Date().getFullYear()} Keeva Beauty Studio and Academy. All rights reserved.
          </p>
          <div className="flex gap-4 font-light">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-gold-400/80 transition-colors flex items-center gap-1"
            >
              <Lock className="w-3 h-3 text-gold-400/40" />
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-gold-400/80 transition-colors flex items-center gap-1"
            >
              <FileText className="w-3 h-3 text-gold-400/40" />
              Terms and Conditions
            </button>
          </div>
        </div>
      </footer>

      {/* PULSING FLOATING CALL ACTION (Left Bottom) */}
      <a
        href={`tel:${callNumber}`}
        className="fixed bottom-6 left-6 z-40 bg-zinc-950 border border-gold-400/30 text-gold-400 p-4 rounded-full shadow-[0_5px_15px_rgba(212,175,55,0.3)] hover:scale-110 active:scale-95 transition-transform group"
        aria-label="Call Keeva Concierge"
      >
        <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
        <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-black border border-gold-400/30 text-white font-mono text-[10px] px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg pointer-events-none">
          {CONTACT_INFO.phone}
        </span>
        <div className="absolute inset-0 rounded-full border border-gold-400/20 animate-ping pointer-events-none" />
      </a>

      {/* PULSING FLOATING WHATSAPP ACTION (Right Bottom) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-[0_5px_15px_rgba(16,185,129,0.3)] hover:scale-110 active:scale-95 transition-transform group"
        aria-label="Chat via WhatsApp"
      >
        <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
        <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-black border border-emerald-500/30 text-white text-[10px] px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg pointer-events-none">
          WhatsApp Live Desk
        </span>
        <div className="absolute inset-0 rounded-full border border-emerald-500/20 animate-ping pointer-events-none" />
      </a>

      {/* Scroll-to-Top widget */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 z-40 bg-zinc-900 border border-white/10 hover:border-gold-400 text-gray-400 hover:text-white p-3 rounded-full hover:scale-110 active:scale-95 transition-transform cursor-pointer shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* LEGAL DOCUMENT MODAL POPUPS */}
      <AnimatePresence>
        {legalModal && (
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
              className="bg-zinc-950 border border-gold-400/20 p-6 sm:p-8 rounded-2xl max-w-lg w-full relative max-h-[80vh] overflow-y-auto custom-scroll"
            >
              <button
                onClick={() => setLegalModal(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-lg border border-white/5 bg-zinc-900"
              >
                <X className="w-5 h-5" />
              </button>

              {legalModal === 'privacy' ? (
                <div>
                  <div className="flex items-center gap-2 text-gold-400 mb-4 font-display">
                    <Shield className="w-5 h-5" />
                    <h3 className="text-base font-bold uppercase tracking-wider">Privacy Policy</h3>
                  </div>
                  <div className="text-xs text-gray-400 leading-relaxed space-y-4 font-light">
                    <p className="font-semibold text-white">Last updated: July 2026</p>
                    <p>
                      At Keeva Beauty Studio and Academy, the privacy of our visitors and trainees is of critical importance. This Privacy Policy outlines the types of personal details we gather and how it is used.
                    </p>
                    <h4 className="font-semibold text-white uppercase tracking-wider text-[10px] mt-4">1. Data Collection</h4>
                    <p>
                      When you schedule an appointment or make an academy enquiry through our online booking engine, we collect personal attributes (specifically your Name, Phone Number, Selected Treatment, and special comments) to process the scheduling request and provide customized hospitality.
                    </p>
                    <h4 className="font-semibold text-white uppercase tracking-wider text-[10px] mt-4">2. Local Storage Sandbox</h4>
                    <p>
                      For client convenience, your reservation records and user reviews are stored purely inside your web browser’s local storage (`localStorage`). This data is never transferred, leased, or stored on secondary external cloud servers without explicit booking action or WhatsApp confirmation.
                    </p>
                    <h4 className="font-semibold text-white uppercase tracking-wider text-[10px] mt-4">3. External Service Integrations</h4>
                    <p>
                      Our system links directly to WhatsApp and telephone services. Clicking those buttons transfers the selected attributes into pre-filled texts on your device to expedite direct correspondence.
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-2 text-gold-400 mb-4 font-display">
                    <FileText className="w-5 h-5" />
                    <h3 className="text-base font-bold uppercase tracking-wider">Terms and Conditions</h3>
                  </div>
                  <div className="text-xs text-gray-400 leading-relaxed space-y-4 font-light">
                    <p className="font-semibold text-white">Last updated: July 2026</p>
                    <p>
                      Please read these Terms and Conditions carefully before exploring our services. By booking an appointment or course, you agree to comply with these rules.
                    </p>
                    <h4 className="font-semibold text-white uppercase tracking-wider text-[10px] mt-4">1. Cancellation Policy</h4>
                    <p>
                      If you need to cancel or reschedule your luxury hair, skin, or nail treatment, please do so at least 2 hours before your selected slot. This respects the timetables of our therapists and other clients.
                    </p>
                    <h4 className="font-semibold text-white uppercase tracking-wider text-[10px] mt-4">2. Arrival Times</h4>
                    <p>
                      We recommend arriving at least 10 minutes prior to your preferred slot to enjoy a complimentary luxury consultation and customize your beauty treatment safely.
                    </p>
                    <h4 className="font-semibold text-white uppercase tracking-wider text-[10px] mt-4">3. Academy Certification Requirements</h4>
                    <p>
                      Cosmetology, hair styling, and makeup artistry diplomas issued by Keeva Academy require 100% attendance of practical labs, passing grades on evaluation tests, and strict adherence to hygiene standards.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
