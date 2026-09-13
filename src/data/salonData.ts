import { SalonInfo, ServiceItem, SalonOffer, GalleryPhoto, Testimonial } from '../types';
import goldFacialImg from '../assets/images/gold_facial_spa_1789278342835.jpg';

export const initialSalonInfo: SalonInfo = {
  name: 'Yantra Salon',
  tagline: 'A Family Salon',
  subTagline: 'Your Style. Your Confidence. Your Yantra.',
  city: 'Jodhpur',
  state: 'Rajasthan',
  fullAddress: 'Plot No. 14, Main Residency Road, Near Circuit House, Shastri Nagar, Jodhpur, Rajasthan 342003',
  landmark: 'Near Circuit House & Residency Circle',
  phone: '+919829000000',
  displayPhone: '+91 98290 XXXXX',
  whatsappNumber: '919829000000',
  email: 'yantrasalon.jodhpur@example.com',
  instagramHandle: '@yantra_salon_jodhpur',
  instagramUrl: 'https://instagram.com',
  googleMapsUrl: 'https://maps.google.com/?q=Jodhpur+Rajasthan+Salon',
  googleMapsEmbedQuery: 'Jodhpur+Rajasthan+Residency+Road',
  openingHours: [
    { day: 'Monday', hours: '10:00 AM – 08:30 PM' },
    { day: 'Tuesday', hours: '10:00 AM – 08:30 PM' },
    { day: 'Wednesday', hours: '10:00 AM – 08:30 PM' },
    { day: 'Thursday', hours: '10:00 AM – 08:30 PM' },
    { day: 'Friday', hours: '10:00 AM – 08:30 PM' },
    { day: 'Saturday', hours: '09:30 AM – 09:00 PM' },
    { day: 'Sunday', hours: '09:30 AM – 09:00 PM' },
  ],
  aboutText: 'Yantra Salon is Jodhpur’s premier sanctuary for complete family grooming, hair styling, skin rejuvenation, and luxury bridal makeovers. Born from a reverence for geometric perfection and holistic care, we treat every client as royalty.',
  aboutStory: 'Nestled in the vibrant historic heart of the Sun City, Yantra Salon was envisioned as a multi-generational family destination. Whether it is grandfather’s classic beard grooming, mother’s rejuvenating collagen facial, bridal celebrations, or a child’s first stylish haircut, our serene sanctuary pairs international salon techniques with warm Rajasthani hospitality.',
  founderQuote: 'Beauty is not an afterthought; it is an internal harmony reflected in how you carry yourself every single day.',
  hygieneCommitment: 'Every instrument undergoes clinical UV-C sterilization, disposables are strictly single-use, and all hair & skin formulas are 100% authentic, dermatologically tested, and certified premium.'
};

export const initialServices: ServiceItem[] = [
  // Hair Services
  {
    id: 'hair-1',
    name: 'Couture Precision Haircut & Styling',
    category: 'Hair',
    description: 'Bespoke consultation, customized face-frame cut, invigorating scalp cleanse, blowdry, and signature styling.',
    targetAudience: 'Unisex',
    priceDisplay: 'Contact for Price',
    duration: '45 - 60 mins',
    popular: true,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hair-2',
    name: 'Global Hair Color & Glossing',
    category: 'Hair',
    description: 'Ammonia-free rich permanent or semi-permanent pigment with deep gloss treatment for luminous, healthy locks.',
    targetAudience: 'Women',
    priceDisplay: 'Contact for Price',
    duration: '90 - 120 mins',
    popular: true,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hair-3',
    name: 'Balayage & Dimensional Highlights',
    category: 'Hair',
    description: 'Hand-painted sun-kissed gradients, babylights, and customized toning designed to complement Indian skin tones.',
    targetAudience: 'Women',
    priceDisplay: 'Contact for Price',
    duration: '120 - 180 mins',
    popular: false,
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hair-4',
    name: 'Keratin & Botoplex Hair Restoration',
    category: 'Hair',
    description: 'Deep protein infusion therapy eliminating frizz, restoring broken bonds, and sealing silky smoothness up to 5 months.',
    targetAudience: 'Unisex',
    priceDisplay: 'Contact for Price',
    duration: '150 - 210 mins',
    popular: true,
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hair-5',
    name: 'Detoxifying Moroccan Argan Scalp Spa',
    category: 'Hair',
    description: 'Warm oil acupressure therapy, ozone steam, and deep nourishing masque to combat harsh desert dust and dryness.',
    targetAudience: 'Unisex',
    priceDisplay: 'Contact for Price',
    duration: '60 mins',
    popular: false,
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80'
  },

  // Skin Services
  {
    id: 'skin-1',
    name: 'Hydra-Infusion Medi-Facial',
    category: 'Skin',
    description: 'Multi-step skin clarifying ritual: vortex vacuum extraction, peptide infusion, and cryogenic soothing mask.',
    targetAudience: 'Unisex',
    priceDisplay: 'Contact for Price',
    duration: '60 - 75 mins',
    popular: true,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'skin-2',
    name: '24K Gold Royal Radiance Ritual',
    category: 'Skin',
    description: 'Opulent Rajasthani bridal-grade glow facial enriched with colloidal gold, saffron extracts, and lymphatic massage.',
    targetAudience: 'Women',
    priceDisplay: 'Contact for Price',
    duration: '75 mins',
    popular: true,
    image: goldFacialImg
  },
  {
    id: 'skin-3',
    name: 'Deep Pore Clarifying & Anti-Acne Cleanse',
    category: 'Skin',
    description: 'Gentle ultrasonic scrubbing, tea tree serum infusion, and calming zinc mask for breakout-prone skin.',
    targetAudience: 'Unisex',
    priceDisplay: 'Contact for Price',
    duration: '45 mins',
    popular: false,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80'
  },

  // Makeup Services
  {
    id: 'makeup-1',
    name: 'Royal Heritage Bridal Makeover',
    category: 'Makeup',
    description: 'High-Definition bridal glamour, long-wear waterproofing, false lash application, bespoke hair ornamentation, and dupatta draping.',
    targetAudience: 'Women',
    priceDisplay: 'Contact for Price',
    duration: '180 - 240 mins',
    popular: true,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'makeup-2',
    name: 'Cocktail, Sangeet & Reception Glam',
    category: 'Makeup',
    description: 'Luminous evening skin, dramatic smoky or soft cut-crease eyes, sculpted contouring, and modern textured updo.',
    targetAudience: 'Women',
    priceDisplay: 'Contact for Price',
    duration: '90 - 120 mins',
    popular: true,
    image: 'https://images.unsplash.com/photo-1522337094346-297f6c65b1aa?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'makeup-3',
    name: 'Gentleman Groom’s Styling & Touchup',
    category: 'Makeup',
    description: 'Subtle photo-finish skin corrector, beard grooming, eyebrow detailing, hair sculpting, and safa draping support.',
    targetAudience: 'Men',
    priceDisplay: 'Contact for Price',
    duration: '60 mins',
    popular: false,
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80'
  },

  // Nails
  {
    id: 'nails-1',
    name: 'Russian Gel Manicure & Custom Nail Art',
    category: 'Nails',
    description: 'Hardware cuticle cleaning, apex reinforcement, long-lasting UV gel color, and intricate hand-painted nail designs.',
    targetAudience: 'Women',
    priceDisplay: 'Contact for Price',
    duration: '75 mins',
    popular: true,
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'nails-2',
    name: 'Aromatherapy Foot Spa & Pedicure Ritual',
    category: 'Nails',
    description: 'Himalayan salt soak, volcanic pumice exfoliation, callus smoothing, cuticle balm, and leg acupressure massage.',
    targetAudience: 'Unisex',
    priceDisplay: 'Contact for Price',
    duration: '60 mins',
    popular: false,
    image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=80'
  },

  // Spa / Beauty
  {
    id: 'spa-1',
    name: 'Aromatic Deep Tissue Tension Relief',
    category: 'Spa/Beauty',
    description: 'Heated botanical oils with targeted muscular release for back, neck, and shoulders to melt away fatigue.',
    targetAudience: 'Unisex',
    priceDisplay: 'Contact for Price',
    duration: '60 - 90 mins',
    popular: true,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'spa-2',
    name: 'Sandalwood & Saffron Body Polish',
    category: 'Spa/Beauty',
    description: 'Traditional Rajasthani ubtan exfoliation followed by a cocooning hydration wrap leaving velvety smooth skin.',
    targetAudience: 'Women',
    priceDisplay: 'Contact for Price',
    duration: '75 mins',
    popular: false,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
  },

  // Other Salon Services
  {
    id: 'other-1',
    name: 'Beard Architect & Royal Hot Towel Shave',
    category: 'Other salon services',
    description: 'Precision clipper outline, razor blade edge with peppermint lather, hot steam towel, and cedarwood balm.',
    targetAudience: 'Men',
    priceDisplay: 'Contact for Price',
    duration: '35 mins',
    popular: true,
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'other-2',
    name: 'Organic Depilation & Eyebrow Architecture',
    category: 'Other salon services',
    description: 'Gentle sugar/honey wax options, precision threading, and soothing aloe vera post-treatment care.',
    targetAudience: 'Unisex',
    priceDisplay: 'Contact for Price',
    duration: '20 - 45 mins',
    popular: false,
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80'
  }
];

export const initialOffers: SalonOffer[] = [
  {
    id: 'offer-1',
    title: 'The Royal Family Privilege Pass',
    subtitle: 'Complimentary Hair Treatment with Any Family Combo',
    tag: 'Limited Seasonal Offer',
    discountText: 'Special Family Bundle',
    validity: 'Valid this month | Prior Booking Recommended',
    terms: 'Applicable when 2 or more family members book services on the same day. Mention code YANTRAFAMILY at reception.',
    highlightColor: 'from-[#d4af37]/20 to-[#dec16b]/10'
  },
  {
    id: 'offer-2',
    title: 'Grand Bridal & Groom Ensemble',
    subtitle: 'Complimentary Pre-Wedding Trial & Skin Consultation',
    tag: 'Wedding Season Special',
    discountText: 'Pre-Wedding Privilege',
    validity: 'Jodhpur Wedding Season Bookings',
    terms: 'Available for pre-booked bridal and groom packages. Customized according to event itineraries.',
    highlightColor: 'from-[#e5b382]/20 to-[#d4af37]/10'
  },
  {
    id: 'offer-3',
    title: 'Midweek Rejuvenation Ritual',
    subtitle: 'Hydra-Facial + Argan Scalp Spa Combo',
    tag: 'Tuesday to Thursday',
    discountText: 'Complimentary Blowdry Included',
    validity: '10:00 AM – 4:00 PM Slots',
    terms: 'Prior appointment required. Cannot be combined with other ongoing promotions.',
    highlightColor: 'from-[#c29b28]/20 to-[#0c0c0e]'
  }
];

export const initialGallery: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Modern Luxury Salon Ambience',
    category: 'Salon Ambience',
    imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
    caption: 'Demo interior placeholder showing modern ergonomic styling stations & ambient lighting.'
  },
  {
    id: 'gal-2',
    title: 'Bespoke Balayage & Blowdry',
    category: 'Hair',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
    caption: 'Demo placeholder: Dimensional warm caramel balayage with high-shine seal.'
  },
  {
    id: 'gal-3',
    title: 'Royal Indian Bridal Glamour',
    category: 'Bridal & Makeup',
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
    caption: 'Demo placeholder: Signature traditional bridal makeover and jewelry detailing.'
  },
  {
    id: 'gal-4',
    title: 'Luminous Facial Rejuvenation',
    category: 'Skin & Spa',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
    caption: 'Demo placeholder: Deep skin revitalizing medi-facial treatment.'
  },
  {
    id: 'gal-5',
    title: 'Gentlemen Grooming & Beard Craft',
    category: 'Men Grooming',
    imageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
    caption: 'Demo placeholder: Precision fade haircut and sculpted beard line.'
  },
  {
    id: 'gal-6',
    title: 'Artisan Gel Nail Extensions',
    category: 'Nail Art',
    imageUrl: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1200&q=80',
    caption: 'Demo placeholder: High-gloss nude & gold shimmer embellished nail art.'
  },
  {
    id: 'gal-7',
    title: 'Family Hair Styling Suite',
    category: 'Salon Ambience',
    imageUrl: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80',
    caption: 'Demo placeholder: Spacious, comfortable family lounge and consultation corner.'
  },
  {
    id: 'gal-8',
    title: 'Reception & Evening Cocktail Look',
    category: 'Bridal & Makeup',
    imageUrl: 'https://images.unsplash.com/photo-1522337094346-297f6c65b1aa?auto=format&fit=crop&w=1200&q=80',
    caption: 'Demo placeholder: Modern glow makeup with elegant textured curls.'
  }
];

export const initialTestimonials: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Priya Rathore',
    serviceReceived: 'Bridal Hair & Makeup Package',
    rating: 5,
    date: 'February 2026',
    location: 'Shastri Nagar, Jodhpur',
    comment: 'Yantra Salon made my wedding day unforgettable. The team listened attentively to my preferences, and the makeup stayed flawless through the entire evening without feeling heavy. Truly a 5-star experience in Jodhpur!'
  },
  {
    id: 'test-2',
    clientName: 'Vikramaditya Singh',
    serviceReceived: 'Beard Sculpting & Hair Spa',
    rating: 5,
    date: 'January 2026',
    location: 'Ratanada, Jodhpur',
    comment: 'Finding a family salon that treats men’s grooming with such clinical precision is rare. The hot towel shave and scalp spa were completely therapeutic after a hectic week.'
  },
  {
    id: 'test-3',
    clientName: 'Sunita & Ananya Maheshwari',
    serviceReceived: 'Mom & Daughter Hydra-Facial & Nails',
    rating: 5,
    date: 'March 2026',
    location: 'Sardarpura, Jodhpur',
    comment: 'The ambience is so soothing, clean, and warm. My teenage daughter loved her gel nail art and my skin felt glowing for days. We have found our go-to family salon in Jodhpur.'
  }
];
