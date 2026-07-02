import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Calendar, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onNavigate, activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'courses', label: 'Courses' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-gold-400/20 py-3 shadow-lg'
            : 'bg-gradient-to-b from-black/80 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-2 text-left focus:outline-none"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-gold-400/50 bg-black/50">
                <Sparkles className="w-5 h-5 text-gold-400 animate-pulse" />
                <div className="absolute inset-0 rounded-full border border-gold-400/20 animate-ping pointer-events-none" />
              </div>
              <div>
                <span className="block text-lg font-display tracking-[0.15em] text-white font-bold leading-tight">
                  KEEVA
                </span>
                <span className="block text-[8px] tracking-[0.25em] text-gold-400 uppercase font-medium">
                  Beauty Studio & Academy
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-xs uppercase tracking-widest font-medium transition-colors focus:outline-none hover:text-gold-400 ${
                    activeSection === item.id ? 'text-gold-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-300 to-gold-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center space-x-1.5 text-xs text-gray-300 hover:text-gold-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span className="font-mono">{CONTACT_INFO.phone}</span>
              </a>
              <button
                onClick={() => handleNavClick('booking')}
                className="gold-gradient text-black font-semibold text-xs uppercase tracking-widest px-4 py-2 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_4px_15px_rgba(212,175,55,0.3)] flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-3">
              <button
                onClick={() => handleNavClick('booking')}
                className="gold-gradient text-black p-2 rounded-full shadow-md hover:scale-105 active:scale-95 transition-transform"
                aria-label="Book appointment"
              >
                <Calendar className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-gold-400 transition-colors focus:outline-none p-1.5"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/95 pt-24 px-6 md:hidden flex flex-col justify-between pb-10"
          >
            <div className="flex flex-col space-y-6 text-center">
              <div className="h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent w-full" />
              {navItems.map((item, idx) => (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-base uppercase tracking-[0.2em] font-medium py-2 block ${
                    activeSection === item.id
                      ? 'text-gold-400 font-bold'
                      : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <div className="h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent w-full" />
            </div>

            {/* Mobile Contact Footer info */}
            <div className="flex flex-col items-center text-center space-y-4">
              <p className="text-xs text-gray-400 tracking-wider">Keeva Beauty Studio and Academy</p>
              <div className="flex gap-4">
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                  className="bg-zinc-900 border border-gold-400/20 text-gold-400 p-3 rounded-full hover:bg-gold-400 hover:text-black transition-all"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <button
                  onClick={() => handleNavClick('booking')}
                  className="gold-gradient text-black px-6 py-3 rounded-full font-bold uppercase tracking-wider text-xs shadow-lg flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
