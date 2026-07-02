import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Award, CheckCircle, GraduationCap, Clock, Flame, ChevronDown, ChevronUp } from 'lucide-react';
import { ACADEMY_COURSES } from '../data';

interface AcademyProps {
  onSelectService: (serviceName: string) => void;
  onNavigate: (sectionId: string) => void;
}

export default function Academy({ onSelectService, onNavigate }: AcademyProps) {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedCourse(expandedCourse === id ? null : id);
  };

  const handleEnquiry = (courseTitle: string) => {
    onSelectService(`Academy Course: ${courseTitle}`);
    onNavigate('booking');
  };

  return (
    <section id="courses" className="py-24 bg-[#121212] relative overflow-hidden border-t border-white/5">
      {/* Decorative glows */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-gold-400/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-gold-400 block mb-2 font-display">
            Beauty Academy
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white font-semibold tracking-wide leading-tight mb-4">
            Keeva Training Academy
          </h2>
          <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">
            Elevate your career with Silchar’s most prestigious professional beauty certification programs. Learn directly from certified masters, get 100% hands-on practical training, and receive industry-recognized credentials.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-6" />
        </div>

        {/* Big visual banner/perks card */}
        <div className="bg-gradient-to-br from-[#1c1c1c] to-[#252525] border border-white/5 rounded-3xl p-6 sm:p-10 mb-16 shadow-2xl relative overflow-hidden">
          {/* Subtle logo watermark in corner */}
          <GraduationCap className="absolute -bottom-8 -right-8 w-44 h-44 text-gold-400/5 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="bg-gold-400/10 border border-gold-400/30 text-gold-400 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block">
                Why Study At Keeva?
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-white tracking-wide mb-6">
                Your Gateway to a Global Cosmetology Career
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Experienced Mentorship</span>
                    <span className="text-gray-400 text-xs font-light">Train side-by-side with industry educators actively running elite styling salons.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">100% Practical Hand-On Styling</span>
                    <span className="text-gray-400 text-xs font-light">Work with real hair models, live bridal clients, and premium tools inside our state-of-the-art labs.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Business & Portfolio Building</span>
                    <span className="text-gray-400 text-xs font-light">Includes professional photo sessions of your makeovers and modules on launching your own profitable studio.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats side */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-black/55 border border-white/5 p-5 rounded-xl text-center">
                <GraduationCap className="w-7 h-7 text-gold-400 mx-auto mb-2" />
                <div className="text-2xl font-display font-bold text-white">150+</div>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block mt-1">Graduates Certified</span>
              </div>
              <div className="bg-black/55 border border-white/5 p-5 rounded-xl text-center">
                <BookOpen className="w-7 h-7 text-gold-400 mx-auto mb-2" />
                <div className="text-2xl font-display font-bold text-white">100%</div>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider block mt-1">Job Assistance</span>
              </div>
              <div className="bg-black/55 border border-white/5 p-5 rounded-xl text-center col-span-2">
                <Award className="w-7 h-7 text-gold-400 mx-auto mb-1" />
                <div className="text-xs font-semibold text-gold-100">ISO Standard Certifications</div>
                <span className="text-[9px] text-gray-400 block mt-1">Valued Across India and Abroad</span>
              </div>
            </div>
          </div>
        </div>

        {/* List of Courses */}
        <div className="space-y-6">
          {ACADEMY_COURSES.map((course) => {
            const isExpanded = expandedCourse === course.id;
            return (
              <div
                key={course.id}
                className="bg-white/[0.02] border border-white/5 hover:border-[#D4AF37]/25 rounded-3xl overflow-hidden transition-all duration-300"
              >
                {/* Collapsed view banner */}
                <div
                  onClick={() => toggleExpand(course.id)}
                  className="p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 cursor-pointer select-none"
                >
                  <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                    {/* Course Mini Image */}
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-zinc-900 border border-white/10 flex-shrink-0">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    </div>

                    <div>
                      {/* Badge / Stats */}
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="bg-gold-400/10 text-gold-400 border border-gold-400/25 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">
                          {course.level}
                        </span>
                        <span className="text-[10px] text-gray-400 font-mono flex items-center gap-1">
                          <Clock className="w-3 h-3 text-gold-400/80" />
                          {course.duration}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold font-display text-white group-hover:text-gold-200 transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-xs text-gray-400 leading-relaxed max-w-xl font-light mt-1">
                        {course.description}
                      </p>
                    </div>
                  </div>

                  {/* Right side CTA trigger */}
                  <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t border-white/5 pt-4 md:border-t-0 md:pt-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEnquiry(course.title);
                      }}
                      className="gold-gradient text-black font-bold uppercase tracking-widest text-[10px] px-5 py-2.5 rounded-lg hover:scale-105 transition-transform"
                    >
                      Enquire Course
                    </button>
                    <div className="bg-zinc-900 p-2 rounded-full border border-white/5 text-gray-400">
                      {isExpanded ? <ChevronUp className="w-4 h-4 text-gold-400" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Expanded details container */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-white/5 bg-black/40"
                    >
                      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Course syllabus/curriculum column */}
                        <div className="lg:col-span-8">
                          <h4 className="text-xs uppercase tracking-[0.25em] font-bold text-gold-400 mb-4 flex items-center gap-2">
                            <GraduationCap className="w-4 h-4" />
                            Comprehensive Syllabus Highlights
                          </h4>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {course.curriculum.map((topic, index) => (
                              <div
                                key={index}
                                className="bg-zinc-900/50 border border-white/5 p-3 rounded-lg flex items-center gap-3"
                              >
                                <span className="text-xs font-mono font-bold text-gold-400">0{index + 1}</span>
                                <span className="text-xs text-gray-300 font-light">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Admissions column */}
                        <div className="lg:col-span-4 bg-zinc-900/40 border border-gold-400/10 p-5 rounded-xl flex flex-col justify-between h-full">
                          <div>
                            <h5 className="text-xs uppercase tracking-widest font-bold text-white mb-2 flex items-center gap-1">
                              <Flame className="w-4 h-4 text-gold-400 animate-pulse" />
                              Batches Filling Fast
                            </h5>
                            <p className="text-[11px] text-gray-400 leading-relaxed font-light mb-4">
                              We maintain a small student-to-educator ratio (maximum 8 students per batch) for individualized training, customized feedback, and safety.
                            </p>
                            <div className="space-y-1.5 text-xs text-gray-300 font-mono">
                              <div className="flex justify-between">
                                <span className="text-gray-500">Duration:</span>
                                <span>{course.duration}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-500">Difficulty:</span>
                                <span>{course.level}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-500">Timing:</span>
                                <span>Morning & Evening Slots</span>
                              </div>
                            </div>
                          </div>

                          <button
                            onClick={() => handleEnquiry(course.title)}
                            className="w-full bg-white text-black hover:bg-gold-400 hover:text-black font-bold uppercase tracking-widest text-[10px] py-2.5 rounded-lg transition-colors mt-6"
                          >
                            Register & Secure Seat
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
