import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, User, Phone, MessageSquare, Sparkles, CheckCircle, Trash2, MessageCircle } from 'lucide-react';
import { SERVICES, CONTACT_INFO } from '../data';
import { Booking } from '../types';

interface BookingFormProps {
  selectedService: string;
  onClearSelectedService: () => void;
}

export default function BookingForm({ selectedService, onClearSelectedService }: BookingFormProps) {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceName: '',
    date: '',
    time: '',
    message: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [latestBooking, setLatestBooking] = useState<Booking | null>(null);

  // Prefill the service name if selected from other cards
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, serviceName: selectedService }));
    }
  }, [selectedService]);

  // Load user bookings from localstorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('keeva_customer_appointments');
    if (saved) {
      try {
        setBookings(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.serviceName || !formData.date || !formData.time) return;

    const newBooking: Booking = {
      id: `KV-${Math.floor(1000 + Math.random() * 9000)}`,
      name: formData.name,
      phone: formData.phone,
      serviceId: formData.serviceName.toLowerCase().replace(/\s+/g, '-'),
      serviceName: formData.serviceName,
      date: formData.date,
      time: formData.time,
      message: formData.message,
      status: 'Confirmed', // Luxury auto-confirm for high efficiency
      createdAt: new Date().toISOString()
    };

    const updatedBookings = [newBooking, ...bookings];
    setBookings(updatedBookings);
    localStorage.setItem('keeva_customer_appointments', JSON.stringify(updatedBookings));

    setLatestBooking(newBooking);
    setIsSuccess(true);
    
    // Clear form except user detail defaults for next booking
    setFormData({
      name: formData.name,
      phone: formData.phone,
      serviceName: '',
      date: '',
      time: '',
      message: ''
    });

    onClearSelectedService();
  };

  const handleCancelBooking = (id: string) => {
    const updated = bookings.filter((b) => b.id !== id);
    setBookings(updated);
    localStorage.setItem('keeva_customer_appointments', JSON.stringify(updated));
    if (latestBooking?.id === id) {
      setLatestBooking(null);
    }
  };

  // Generate WhatsApp message to trigger actual communication on behalf of user
  const getWhatsAppURL = (b: Booking) => {
    const text = `Hello Keeva Beauty Studio! I have booked an appointment:
- *ID:* ${b.id}
- *Name:* ${b.name}
- *Phone:* ${b.phone}
- *Service:* ${b.serviceName}
- *Preferred Date:* ${b.date}
- *Preferred Time:* ${b.time}
${b.message ? `- *Message:* ${b.message}` : ''}
Please confirm my slot. Thank you!`;
    return `https://wa.me/916002167336?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="booking" className="py-24 bg-[#121212] relative overflow-hidden border-t border-white/5">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-400/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-gold-400 block mb-2 font-display">
            Reservation Stage
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white font-semibold tracking-wide leading-tight mb-4">
            Book Your Session
          </h2>
          <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">
            Schedule your premium makeover or academy session easily. Fill out the reservation details below and receive instant on-screen booking records.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Booking form side */}
          <div className="lg:col-span-7">
            <div className="bg-white/[0.02] border border-white/5 p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-xl">
              
              <AnimatePresence mode="wait">
                {isSuccess && latestBooking ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-10"
                  >
                    <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4 animate-bounce" />
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">Booking Confirmed!</h3>
                    <p className="text-xs text-gray-400 max-w-md mx-auto leading-relaxed mb-6">
                      Your booking <span className="font-mono text-gold-400 font-bold">{latestBooking.id}</span> has been processed successfully and saved under "My Bookings" below.
                    </p>

                    <div className="bg-zinc-900 border border-white/5 rounded-xl p-5 max-w-sm mx-auto mb-8 text-left text-xs text-gray-300 space-y-2">
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-gray-500">Service:</span>
                        <span className="font-semibold text-white">{latestBooking.serviceName}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-gray-500">Date:</span>
                        <span className="font-semibold text-white">{latestBooking.date}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-gray-500">Time Slot:</span>
                        <span className="font-semibold text-white">{latestBooking.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Contact:</span>
                        <span className="font-semibold text-white font-mono">{latestBooking.phone}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href={getWhatsAppURL(latestBooking)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold uppercase tracking-widest text-xs px-6 py-3.5 rounded-xl flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Send WhatsApp Confirmation
                      </a>
                      <button
                        onClick={() => setIsSuccess(false)}
                        className="bg-zinc-900 border border-white/10 text-gray-300 hover:text-white font-bold uppercase tracking-widest text-xs px-6 py-3.5 rounded-xl"
                      >
                        Book Another Session
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-gold-400" />
                      <h3 className="text-base font-display text-white tracking-wider">Luxury Appointment Scheduling</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-gold-400" />
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Aditi Sen"
                          className="w-full bg-zinc-900 border border-white/10 hover:border-white/20 focus:border-gold-400 text-white rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors placeholder:text-gray-600"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-gold-400" />
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          pattern="[0-9]{10,13}"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full bg-zinc-900 border border-white/10 hover:border-white/20 focus:border-gold-400 text-white rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors placeholder:text-gray-600 font-mono"
                        />
                      </div>

                      {/* Service Selection */}
                      <div className="sm:col-span-2">
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                          Select Desired Treatment
                        </label>
                        <select
                          name="serviceName"
                          required
                          value={formData.serviceName}
                          onChange={handleInputChange}
                          className="w-full bg-zinc-900 border border-white/10 hover:border-white/20 focus:border-gold-400 text-white rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors cursor-pointer"
                        >
                          <option value="" disabled className="text-gray-600 bg-zinc-950">
                            -- Select a luxury service --
                          </option>
                          
                          <optgroup label="Hair Care Treatments" className="bg-zinc-950 font-bold text-gold-400">
                            {SERVICES.filter(s => s.category === 'Hair').map(s => (
                              <option key={s.id} value={s.name} className="text-white font-normal">{s.name}</option>
                            ))}
                          </optgroup>

                          <optgroup label="Signature Makeovers" className="bg-zinc-950 font-bold text-gold-400">
                            {SERVICES.filter(s => s.category === 'Makeup').map(s => (
                              <option key={s.id} value={s.name} className="text-white font-normal">{s.name}</option>
                            ))}
                          </optgroup>

                          <optgroup label="Advanced Skin Therapy" className="bg-zinc-950 font-bold text-gold-400">
                            {SERVICES.filter(s => s.category === 'Skin').map(s => (
                              <option key={s.id} value={s.name} className="text-white font-normal">{s.name}</option>
                            ))}
                          </optgroup>

                          <optgroup label="Nail Care & Extensions" className="bg-zinc-950 font-bold text-gold-400">
                            {SERVICES.filter(s => s.category === 'Nails').map(s => (
                              <option key={s.id} value={s.name} className="text-white font-normal">{s.name}</option>
                            ))}
                          </optgroup>

                          <optgroup label="Academy Courses" className="bg-zinc-950 font-bold text-gold-400">
                            <option value="Professional Masterclass in Makeup Artistry" className="text-white font-normal">Professional Masterclass in Makeup Artistry</option>
                            <option value="Diploma in Advanced Hair Styling & Cosmetology" className="text-white font-normal">Diploma in Advanced Hair Styling & Cosmetology</option>
                            <option value="Certification in Advanced Aesthetics & Skin Therapy" className="text-white font-normal">Certification in Advanced Aesthetics & Skin Therapy</option>
                            <option value="Academy Training Courses" className="text-white font-normal">Academy General Enquiry</option>
                          </optgroup>
                        </select>
                      </div>

                      {/* Date */}
                      <div>
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-gold-400" />
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          name="date"
                          required
                          min={new Date().toISOString().split('T')[0]}
                          value={formData.date}
                          onChange={handleInputChange}
                          className="w-full bg-zinc-900 border border-white/10 hover:border-white/20 focus:border-gold-400 text-white rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Time */}
                      <div>
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-gold-400" />
                          Preferred Time Slot
                        </label>
                        <select
                          name="time"
                          required
                          value={formData.time}
                          onChange={handleInputChange}
                          className="w-full bg-zinc-900 border border-white/10 hover:border-white/20 focus:border-gold-400 text-white rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors cursor-pointer"
                        >
                          <option value="" disabled className="text-gray-600 bg-zinc-950">-- Select slot --</option>
                          <option value="09:00 AM" className="bg-zinc-950">09:00 AM (Opening Slot)</option>
                          <option value="10:30 AM" className="bg-zinc-950">10:30 AM</option>
                          <option value="12:00 PM" className="bg-zinc-950">12:00 PM (Noon)</option>
                          <option value="01:30 PM" className="bg-zinc-950">01:30 PM</option>
                          <option value="03:00 PM" className="bg-zinc-950">03:00 PM</option>
                          <option value="04:30 PM" className="bg-zinc-950">04:30 PM</option>
                          <option value="06:00 PM" className="bg-zinc-950">06:00 PM</option>
                          <option value="07:30 PM" className="bg-zinc-950">07:30 PM (Evening Slot)</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div className="sm:col-span-2">
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <MessageSquare className="w-3.5 h-3.5 text-gold-400" />
                          Message / Special Requests
                        </label>
                        <textarea
                          name="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="e.g. Looking for lightweight airbrush bridal styling / special scalp sensitivity details..."
                          className="w-full bg-zinc-900 border border-white/10 hover:border-white/20 focus:border-gold-400 text-white rounded-xl px-4 py-3 text-xs focus:outline-none transition-colors placeholder:text-gray-600 resize-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full gold-gradient text-black font-bold uppercase tracking-widest text-xs py-4 rounded-xl hover:brightness-110 active:scale-95 transition-all shadow-[0_5px_20px_rgba(212,175,55,0.3)] mt-2 cursor-pointer"
                    >
                      Process Secure Appointment
                    </button>
                  </form>
                )}
              </AnimatePresence>

            </div>
          </div>

          {/* Bookings viewer side */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-3xl">
              <h3 className="text-sm font-semibold font-display tracking-widest text-gold-400 uppercase mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                My Active Bookings
              </h3>

              {bookings.length === 0 ? (
                <div className="text-center py-12 border border-dashed border-white/5 rounded-xl">
                  <p className="text-xs text-gray-500 font-light">No reservations scheduled yet.</p>
                  <p className="text-[10px] text-gray-600 font-light mt-1 max-w-xs mx-auto">
                    Fill out the form to schedule your appointment. Your records will immediately persist here.
                  </p>
                </div>
              ) : (
                <div className="space-y-4 max-h-[360px] overflow-y-auto pr-2 custom-scroll">
                  {bookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="bg-black/40 border border-white/5 p-4 rounded-2xl flex flex-col justify-between gap-3 relative group hover:border-[#D4AF37]/25 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[9px] font-mono text-gold-400 font-bold bg-gold-400/10 px-2 py-0.5 rounded-full">
                            {booking.id}
                          </span>
                          <h4 className="text-xs font-semibold text-white mt-2 line-clamp-1">
                            {booking.serviceName}
                          </h4>
                          <div className="flex items-center gap-4 text-[10px] text-gray-400 mt-1 font-mono">
                            <span>{booking.date}</span>
                            <span>{booking.time}</span>
                          </div>
                        </div>

                        <span className="text-[9px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/20 text-emerald-400">
                          {booking.status}
                        </span>
                      </div>

                      {/* Action buttons inside booking record */}
                      <div className="flex items-center justify-between border-t border-white/5 pt-3 mt-1 text-[10px]">
                        <a
                          href={getWhatsAppURL(booking)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 cursor-pointer"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          Verify WhatsApp
                        </a>

                        <button
                          onClick={() => handleCancelBooking(booking.id)}
                          className="text-red-400 hover:text-red-300 font-medium flex items-center gap-1 focus:outline-none"
                          title="Cancel appointment"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          Cancel
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Policy Notice */}
            <div className="bg-zinc-900/30 border border-white/5 p-5 rounded-2xl text-[11px] text-gray-400 leading-relaxed font-light">
              <span className="font-semibold text-white block mb-1">Cancellation & Rescheduling Rules:</span>
              Please notify us at least 2 hours in advance of your selected time slot to cancel or reschedule your slot. Arrive 10 minutes early to enjoy the full consult sequence.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
