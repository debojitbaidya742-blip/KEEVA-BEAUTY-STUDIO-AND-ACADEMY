import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquare, Quote, Sparkles, User, CheckCircle2 } from 'lucide-react';
import { REVIEWS } from '../data';
import { Review } from '../types';

export default function Reviews() {
  const [reviewsList, setReviewsList] = useState<Review[]>([]);
  const [newAuthor, setNewAuthor] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newText, setNewText] = useState('');
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [stats, setStats] = useState({ average: 4.8, total: 37 });

  useEffect(() => {
    // Load existing reviews and check localStorage
    const saved = localStorage.getItem('keeva_customer_reviews');
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as Review[];
        setReviewsList(parsed);
      } catch (e) {
        setReviewsList(REVIEWS);
      }
    } else {
      setReviewsList(REVIEWS);
    }
  }, []);

  // Compute live averages based on reviews list
  useEffect(() => {
    if (reviewsList.length === 0) return;
    const initialExtraReviewsCount = Math.max(0, reviewsList.length - REVIEWS.length);
    const newTotal = 37 + initialExtraReviewsCount;
    
    // Weighted average: start with 37 reviews averaging 4.8
    const baseSum = 37 * 4.8;
    const addedSum = reviewsList
      .slice(0, initialExtraReviewsCount) // newly added ones are at the front
      .reduce((sum, rev) => sum + rev.rating, 0);

    const newAvg = (baseSum + addedSum) / newTotal;
    setStats({
      average: parseFloat(newAvg.toFixed(1)),
      total: newTotal
    });
  }, [reviewsList]);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newText.trim()) return;

    const newRev: Review = {
      id: `custom-rev-${Date.now()}`,
      author: newAuthor,
      rating: newRating,
      text: newText,
      date: 'Just now'
    };

    const updatedReviews = [newRev, ...reviewsList];
    setReviewsList(updatedReviews);
    localStorage.setItem('keeva_customer_reviews', JSON.stringify(updatedReviews));

    // Show success state
    setIsSubmitted(true);
    setNewAuthor('');
    setNewText('');
    setNewRating(5);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="reviews" className="py-24 bg-[#121212] relative overflow-hidden border-t border-white/5">
      {/* Visual glowing indicators */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-gold-400/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-pink-100/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-gold-400 block mb-2 font-display">
            Client Appreciations
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white font-semibold tracking-wide leading-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">
            Read real feedback from our esteemed customers in Silchar, and experience the signature luxury hospitality that makes us a highly recommended beauty studio.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-6" />
        </div>

        {/* Dynamic Reviews Scoreboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-center">
          
          {/* Average Rating card */}
          <div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl text-center h-full flex flex-col justify-center">
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block mb-2">Google Rating</span>
            <div className="text-5xl font-display font-extrabold text-gold-400 mb-2">{stats.average}</div>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <span className="text-xs text-gray-400 font-mono">Based on {stats.total} Real customer reviews</span>
          </div>

          {/* Feature Highlights card */}
          <div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl md:col-span-2 h-full flex flex-col justify-center">
            <h3 className="text-lg font-display text-white mb-4 tracking-wide flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-400" />
              Why We Are Consistently Rated 5 Stars
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-300">
              <div className="flex items-start gap-2">
                <span className="text-gold-400 mt-0.5">✔</span>
                <span>Highly trained and patient professional hair stylists.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gold-400 mt-0.5">✔</span>
                <span>Unrivaled traditional & airbrush bridal makeups.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gold-400 mt-0.5">✔</span>
                <span>Extremely reasonable rates with premium high-end quality.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gold-400 mt-0.5">✔</span>
                <span>Immaculate studio hygiene, sterilizations and disposables.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Two Column Layout: Write Review (left) vs Reviews feed (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Column Left: Review Form */}
          <div className="lg:col-span-5 h-fit lg:sticky lg:top-28">
            <div className="bg-black/60 border border-gold-400/25 p-6 sm:p-8 rounded-2xl backdrop-blur-md">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-5 h-5 text-gold-400" />
                <h3 className="text-lg font-display text-white tracking-wide">Share Your Experience</h3>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed mb-6 font-light">
                Your opinion means the world to us. Fill out this quick form to instantly submit your review.
              </p>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-emerald-950/40 border border-emerald-500/30 p-6 rounded-xl text-center"
                  >
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                    <h4 className="text-sm font-semibold text-white mb-1">Review Posted Successfully!</h4>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Thank you for your valuable feedback! Your review has been added to our live stream.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmitReview} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={newAuthor}
                        onChange={(e) => setNewAuthor(e.target.value)}
                        placeholder="e.g. Aditi Sen"
                        className="w-full bg-zinc-900 border border-white/10 hover:border-white/20 focus:border-gold-400 text-white rounded-lg px-4 py-2.5 text-xs focus:outline-none transition-colors placeholder:text-gray-600"
                      />
                    </div>

                    {/* Star selection */}
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                        Your Rating
                      </label>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setNewRating(star)}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(null)}
                            className="p-1 focus:outline-none transition-transform active:scale-90"
                            aria-label={`Rate ${star} stars`}
                          >
                            <Star
                              className={`w-6 h-6 transition-colors ${
                                star <= (hoverRating !== null ? hoverRating : newRating)
                                  ? 'fill-gold-400 text-gold-400'
                                  : 'text-zinc-700'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Review text */}
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                        Your Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                        placeholder="Write details about the services you took, the hygiene, or the friendly staff behavior..."
                        className="w-full bg-zinc-900 border border-white/10 hover:border-white/20 focus:border-gold-400 text-white rounded-lg px-4 py-2.5 text-xs focus:outline-none transition-colors placeholder:text-gray-600 resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full gold-gradient text-black font-bold uppercase tracking-widest text-[10px] py-3 rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-md mt-2 cursor-pointer"
                    >
                      Post My Review
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Column Right: Reviews Feed */}
          <div className="lg:col-span-7 space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scroll">
            <AnimatePresence initial={false}>
              {reviewsList.map((rev) => (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={rev.id}
                  className="bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/25 p-6 rounded-2xl transition-all duration-300 relative group"
                >
                  {/* Quote icon watermark */}
                  <Quote className="absolute top-4 right-6 w-10 h-10 text-white/2 pointer-events-none group-hover:text-gold-400/5 transition-colors duration-300" />

                  <div className="flex items-center gap-3 mb-3">
                    {/* User profile bubble */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 border border-gold-400/20 flex items-center justify-center text-gold-400 font-bold text-sm">
                      {rev.author.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white tracking-wide">{rev.author}</h4>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <div className="flex gap-0.5">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-gold-400 text-gold-400" />
                          ))}
                          {[...Array(5 - rev.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-zinc-700" />
                          ))}
                        </div>
                        <span className="text-[10px] text-gray-500 font-mono">{rev.date}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light italic pl-13">
                    "{rev.text}"
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
