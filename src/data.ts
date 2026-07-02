import { Service, Review, Course, GalleryItem } from './types';

// Let's use our premium generated images where appropriate
export const IMAGE_HERO_BG = '/src/assets/images/keeva_hero_bg_1782985634556.jpg';
export const IMAGE_BRIDAL_MAKEUP = '/src/assets/images/keeva_bridal_makeup_1782985647643.jpg';
export const IMAGE_HAIR_SERVICE = '/src/assets/images/keeva_hair_service_1782985661725.jpg';
export const IMAGE_NAIL_ART = '/src/assets/images/keeva_nail_art_1782985673556.jpg';

// Helper image placeholders using Picsum with nice query strings for beauty & salon topics
const placeholderImage = (keyword: string, id: number) => 
  `https://picsum.photos/seed/${keyword}-${id}/600/600`;

export const SERVICES: Service[] = [
  // Hair Services
  {
    id: 'hair-cut',
    name: 'Hair Cut & Styling',
    category: 'Hair',
    description: 'Precision luxury cuts tailored to your facial structure, finished with a professional blowout and premium styling products.',
    price: '₹499 - ₹1,499',
    duration: '45 mins',
    image: placeholderImage('haircut', 1)
  },
  {
    id: 'hair-spa',
    name: 'Therapeutic Hair Spa',
    category: 'Hair',
    description: 'Deep nourishing treatment that restores essential oils, strengthens roots, and leaves your tresses ultra-soft and lustrous.',
    price: '₹1,199 - ₹2,499',
    duration: '60 mins',
    image: placeholderImage('hairspa', 2)
  },
  {
    id: 'hair-coloring',
    name: 'Premium Hair Coloring',
    category: 'Hair',
    description: 'From root touch-ups to full balayage or global coloring using international ammonia-free formulas for long-lasting radiant shine.',
    price: '₹1,999 - ₹5,999',
    duration: '120 mins',
    image: placeholderImage('haircolor', 3)
  },
  {
    id: 'hair-smoothening',
    name: 'Advanced Hair Smoothening',
    category: 'Hair',
    description: 'Tame frizz and enjoy perfectly straight, sleek, and exceptionally silky hair with our premium, long-lasting smoothening treatments.',
    price: '₹3,999 - ₹7,999',
    duration: '180 mins',
    image: IMAGE_HAIR_SERVICE // Using generated hair service image
  },
  {
    id: 'keratin-treatment',
    name: 'Premium Keratin Treatment',
    category: 'Hair',
    description: 'Protein infusion therapy that rebuilds damaged hair cuticles, eliminating frizz while maintaining natural hair volume and movement.',
    price: '₹4,499 - ₹8,999',
    duration: '150 mins',
    image: placeholderImage('keratintreatment', 5)
  },

  // Makeup Services
  {
    id: 'bridal-makeup',
    name: 'Signature Bridal Makeup',
    category: 'Makeup',
    description: 'A luxurious custom makeover combining airbrush or HD techniques, hairstyling, and draping to make you look like a dream on your big day.',
    price: 'Custom Pricing',
    duration: '180 mins',
    image: IMAGE_BRIDAL_MAKEUP // Using generated bridal makeup image
  },
  {
    id: 'party-makeup',
    name: 'Glamorous Party Makeup',
    category: 'Makeup',
    description: 'High-definition look customized to match your attire, featuring premium styling, eye makeup, and light contouring for your special occasions.',
    price: '₹2,499 - ₹4,999',
    duration: '90 mins',
    image: placeholderImage('makeup', 7)
  },

  // Skin Services
  {
    id: 'facial',
    name: 'Luxury Radiance Facial',
    category: 'Skin',
    description: 'Elite skin brightening and anti-aging facial treatments featuring standard and premium organic active blends for a youthful glow.',
    price: '₹1,499 - ₹3,499',
    duration: '75 mins',
    image: placeholderImage('facial', 8)
  },
  {
    id: 'cleanup',
    name: 'Deep Pore Cleansing Cleanup',
    category: 'Skin',
    description: 'Express skin refreshment that removes impurities, exfoliates dead skin, and extracts blackheads for immediate clarity.',
    price: '₹799 - ₹1,499',
    duration: '40 mins',
    image: placeholderImage('cleanup', 9)
  },
  {
    id: 'skin-treatment',
    name: 'Advanced Skin Treatment',
    category: 'Skin',
    description: 'Targeted aesthetic treatments for acne, hyperpigmentation, open pores, and uneven skin tone using cutting-edge, safe dermatological protocols.',
    price: '₹2,499+',
    duration: '60 mins',
    image: placeholderImage('skintreatment', 10)
  },
  {
    id: 'eyebrow-threading',
    name: 'Precision Eyebrow Threading',
    category: 'Skin',
    description: 'Flawless facial threading with ultra-fine cotton to shape your brows beautifully and remove unwanted fine hairs with minimal discomfort.',
    price: '₹50 - ₹150',
    duration: '15 mins',
    image: placeholderImage('eyebrows', 11)
  },
  {
    id: 'waxing',
    name: 'Premium Silk Waxing',
    category: 'Skin',
    description: 'Gentle, skin-soothing hot wax or liposoluble wax that removes hair from the root, leaving your skin incredibly smooth and touchable.',
    price: '₹299 - ₹1,799',
    duration: '30 mins',
    image: placeholderImage('waxing', 12)
  },

  // Nails
  {
    id: 'nail-art',
    name: 'Luxury Gel Nail Art',
    category: 'Nails',
    description: 'Exquisite custom hand-painted art, chrome finishes, stones, and multi-dimensional designs on extensions or natural nails.',
    price: '₹999 - ₹2,499',
    duration: '90 mins',
    image: IMAGE_NAIL_ART // Using generated nail art image
  },
  {
    id: 'manicure',
    name: 'Nourishing Spa Manicure',
    category: 'Nails',
    description: 'Complete hand rejuvenation featuring exfoliation, deep massage, cuticle therapy, nail shaping, and a premium long-wear polish finish.',
    price: '₹699 - ₹1,199',
    duration: '45 mins',
    image: placeholderImage('manicure', 14)
  },
  {
    id: 'pedicure',
    name: 'Revitalizing Spa Pedicure',
    category: 'Nails',
    description: 'Luxurious foot bath, scrub, heel buffing, relaxing massage, and nail care that melts away stress and leaves your feet looking pristine.',
    price: '₹799 - ₹1,399',
    duration: '50 mins',
    image: placeholderImage('pedicure', 15)
  },

  // Academy Courses
  {
    id: 'beauty-courses',
    name: 'Academy Training Courses',
    category: 'Academy',
    description: 'Professional-grade beauty, cosmetology, hair, and makeup certification courses designed to kickstart your lucrative career in the beauty industry.',
    price: 'Enquire for Details',
    duration: '1 to 6 Months',
    image: placeholderImage('academy', 16)
  },
];

export const ACADEMY_COURSES: Course[] = [
  {
    id: 'course-makeup',
    title: 'Professional Masterclass in Makeup Artistry',
    duration: '2 Months',
    level: 'Beginner',
    description: 'Become a highly sought-after professional makeup artist. Learn HD, airbrush, wedding, and fashion runway styles from industry experts.',
    image: placeholderImage('makeupclass', 17),
    curriculum: [
      'Skin Science & Consultation',
      'Flawless Base & Contouring Techniques',
      'Advanced Bridal Makeup (Traditional & Modern)',
      'High-Definition (HD) and Airbrush Application',
      'Portfolio Creation & Professional Business Setup'
    ]
  },
  {
    id: 'course-hair',
    title: 'Diploma in Advanced Hair Styling & Cosmetology',
    duration: '3 Months',
    level: 'All Levels',
    description: 'Master the art of chemical processes, complex cuts, and trendy coloring. Learn everything needed to manage high-end hair salons.',
    image: placeholderImage('hairclass', 18),
    curriculum: [
      'Trichology & Scalp Treatments',
      'International Hair Cutting Styles',
      'Global Coloring, Highlights & Balayage',
      'Chemical Smoothening, Keratin & Botox Treatments',
      'Salon Operations & Customer Relation Management'
    ]
  },
  {
    id: 'course-skin',
    title: 'Certification in Advanced Aesthetics & Skin Therapy',
    duration: '1 Month',
    level: 'Advanced',
    description: 'A technical course covering advanced aesthetic treatments, peeling, facials, and anti-aging regimens using modern technology.',
    image: placeholderImage('skinclass', 19),
    curriculum: [
      'Skin Anatomy and Physiology',
      'Deep Cleansing & Chemical Peels',
      'Electric and Ultrasonic Facial Tools',
      'Aesthetic Hydration & Anti-Aging Therapies',
      'Client Safety & Aftercare Protocols'
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Anjali Sharma',
    rating: 5,
    text: 'Excellent service and professional staff. I got my bridal makeup done here and everyone couldn’t stop praising it. Truly the best luxury experience!',
    date: '1 week ago'
  },
  {
    id: 'rev-2',
    author: 'Rahul Das',
    rating: 5,
    text: 'Best beauty studio in Silchar. The staff is highly experienced, hygiene is top-notch, and the hair treatment I got has completely transformed my dry hair.',
    date: '2 weeks ago'
  },
  {
    id: 'rev-3',
    author: 'Priya Nath',
    rating: 5,
    text: 'Affordable price and premium quality service. Their nail art is simply unmatched. Extremely meticulous and polite staff. Highly recommended!',
    date: '3 weeks ago'
  },
  {
    id: 'rev-4',
    author: 'Neha Paul',
    rating: 5,
    text: 'I completed my Hair Styling Certification from Keeva Academy. The educators are exceptionally skilled, patient, and prepare you perfectly for the real world.',
    date: '1 month ago'
  },
  {
    id: 'rev-5',
    author: 'Dipankar Roy',
    rating: 5,
    text: 'Excellent haircut and grooming service. The luxury vibe of the studio is spectacular. Truly a premium experience!',
    date: '1 month ago'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Premium Styling Section',
    category: 'Interior',
    image: IMAGE_HERO_BG // Using generated hero interior
  },
  {
    id: 'gal-2',
    title: 'Exquisite Indian Bridal Glow',
    category: 'Bridal',
    image: IMAGE_BRIDAL_MAKEUP // Using generated bridal make-up
  },
  {
    id: 'gal-3',
    title: 'Precision Keratin Therapy',
    category: 'Hair',
    image: IMAGE_HAIR_SERVICE // Using generated hair service
  },
  {
    id: 'gal-4',
    title: 'Elegance Hand Crafted Nail Art',
    category: 'Nails',
    image: IMAGE_NAIL_ART // Using generated nail art
  },
  {
    id: 'gal-5',
    title: 'Luxury Waiting Lounge',
    category: 'Interior',
    image: placeholderImage('salonlounge', 20)
  },
  {
    id: 'gal-6',
    title: 'High-Fashion Party Makeover',
    category: 'Makeover',
    image: placeholderImage('partymakeover', 21)
  },
  {
    id: 'gal-7',
    title: 'Vibrant Balayage Highlight',
    category: 'Hair',
    image: placeholderImage('balayage', 22)
  },
  {
    id: 'gal-8',
    title: 'Stunning Chrome Nail Overlay',
    category: 'Nails',
    image: placeholderImage('chromenails', 23)
  }
];

export const BUSINESS_HOURS = [
  { day: 'Monday', hours: '9:00 AM - 9:00 PM' },
  { day: 'Tuesday', hours: '9:00 AM - 9:00 PM' },
  { day: 'Wednesday', hours: '9:00 AM - 9:00 PM' },
  { day: 'Thursday', hours: '9:00 AM - 9:00 PM' },
  { day: 'Friday', hours: '9:00 AM - 9:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 9:00 PM' },
  { day: 'Sunday', hours: '9:00 AM - 4:00 PM' }
];

export const CONTACT_INFO = {
  phone: '+91 60021 67336',
  whatsapp: '+91 60021 67336',
  address: {
    line1: '2nd Floor, Navoday Lane',
    line2: 'National Highway Road',
    city: 'Silchar, Assam',
    pin: '788005',
    country: 'India'
  },
  rating: '4.8',
  reviewsCount: '37'
};
