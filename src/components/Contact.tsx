import { motion } from 'motion/react';
import { Phone, MapPin, Mail, Clock, MessageSquare, ChevronRight, HelpCircle, Sparkles } from 'lucide-react';
import { CONTACT_INFO, BUSINESS_HOURS } from '../data';

export default function Contact() {
  const callUrl = `tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`;
  const whatsappUrl = `https://wa.me/916002167336?text=Hi%20Keeva%20Beauty%20Studio%2C%20I%20have%20a%20general%20enquiry.`;
  
  // Real Google Maps embed URL for Keeva Beauty Studio / National Highway Road, Silchar
  const mapEmbedUrl = "https://maps.google.com/maps?q=Keeva%20Beauty%20Studio%20and%20Academy,%20Navoday%20Lane,%20National%20Highway%20Road,%20Silchar,%20Assam%20788005&t=&z=16&ie=UTF8&iwloc=&output=embed";

  const faqs = [
    {
      q: 'Do I need to book an appointment beforehand?',
      a: 'While we accommodate walk-ins when slots are available, we highly recommend booking in advance to ensure our top therapists and stylists are fully reserved for your personalized care.'
    },
    {
      q: 'What brand of cosmetics do you use for treatments?',
      a: 'We use premium, certified organic and luxury brand ranges (such as L’Oreal Professional, Kerastase, MAC, and Huda Beauty) that are dermatologically safe and non-comedogenic.'
    },
    {
      q: 'Can I enroll in your beauty courses part-time?',
      a: 'Yes, Keeva Academy offers highly flexible shift slots (Morning, Afternoon, and Weekend classes) perfect for students, working professionals, and homemakers.'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#121212] relative overflow-hidden border-t border-white/5">
      {/* Light blobs */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-400/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-gold-400 block mb-2 font-display">
            Location & Hours
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white font-semibold tracking-wide leading-tight mb-4">
            Visit Our Luxury Studio
          </h2>
          <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">
            We are conveniently located on the NH Road in Silchar with premium parking space. Reach out to our concierge desk for any enquiries, customized bridal bookings, or career enrollments.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Left Side: Contact Specs & Hours */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Contact Info */}
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-3xl">
              <h3 className="text-base font-display font-semibold text-white tracking-widest uppercase mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold-400" />
                Contact Details
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Phone */}
                <a
                  href={callUrl}
                  className="flex items-start gap-3 text-gray-300 hover:text-gold-400 transition-colors p-2 rounded-lg hover:bg-white/2"
                >
                  <Phone className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] text-gray-500 uppercase font-bold">Concierge Call Desk</span>
                    <span className="font-mono text-white font-semibold">{CONTACT_INFO.phone}</span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-300 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-white/2"
                >
                  <MessageSquare className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] text-gray-500 uppercase font-bold">WhatsApp Concierge</span>
                    <span className="font-mono text-white font-semibold">{CONTACT_INFO.whatsapp}</span>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-3 text-gray-300 p-2">
                  <MapPin className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] text-gray-500 uppercase font-bold">Our Physical Location</span>
                    <span className="text-white leading-relaxed font-light">
                      {CONTACT_INFO.address.line1}, <br />
                      {CONTACT_INFO.address.line2}, <br />
                      {CONTACT_INFO.address.city}, Assam {CONTACT_INFO.address.pin}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-3xl">
              <h3 className="text-base font-display font-semibold text-white tracking-widest uppercase mb-4 flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold-400" />
                Business Hours
              </h3>

              <div className="space-y-2.5">
                {BUSINESS_HOURS.map((b) => (
                  <div key={b.day} className="flex justify-between items-center text-xs border-b border-white/5 pb-2 last:border-b-0 last:pb-0">
                    <span className="text-gray-400 font-light">{b.day}</span>
                    <span className={`font-mono text-white font-medium ${b.day === 'Sunday' ? 'text-pink-300' : ''}`}>
                      {b.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Side: Interactive Google Map */}
          <div className="lg:col-span-7 h-[350px] lg:h-full min-h-[400px]">
            <div className="w-full h-full rounded-3xl overflow-hidden border border-white/5 hover:border-[#D4AF37]/30 p-1 bg-zinc-950 shadow-2xl relative group transition-colors duration-500">
              <iframe
                title="Keeva Salon NH Road Silchar Google Map Location"
                src={mapEmbedUrl}
                className="w-full h-full rounded-xl border-0 grayscale-[25%] hover:grayscale-0 transition-all duration-700"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 bg-black/90 border border-gold-400/40 px-4 py-2 rounded-xl backdrop-blur-md flex items-center gap-2 shadow-lg max-w-xs pointer-events-none">
                <MapPin className="w-4 h-4 text-gold-400 animate-bounce flex-shrink-0" />
                <div className="text-[10px]">
                  <span className="block font-bold text-white uppercase tracking-wider leading-none mb-1">Keeva Beauty Studio</span>
                  <span className="text-gray-400 font-light">Navoday Lane, NH Road, Silchar, Assam 788005</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs inside Contact layout */}
        <div className="pt-16 border-t border-white/5">
          <h3 className="text-lg font-display text-white text-center mb-10 tracking-widest uppercase flex items-center justify-center gap-2">
            <HelpCircle className="w-5 h-5 text-gold-400" />
            Frequently Asked Questions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-zinc-950/40 border border-white/5 p-6 rounded-xl hover:border-gold-400/10 transition-colors">
                <h4 className="text-xs sm:text-sm font-semibold text-white tracking-wide mb-2">
                  {faq.q}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
