export interface ServiceItem {
  id: string;
  name: string;
  category: 'Hair' | 'Skin' | 'Makeup' | 'Nails' | 'Spa/Beauty' | 'Other salon services';
  description: string;
  targetAudience: 'Women' | 'Men' | 'Kids' | 'Unisex';
  priceDisplay: string; // e.g., "Contact for Price" or customizable
  duration?: string;
  popular?: boolean;
  image?: string;
}

export interface SalonOffer {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  discountText: string;
  validity: string;
  terms: string;
  serviceId?: string;
  highlightColor?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Hair' | 'Skin & Spa' | 'Bridal & Makeup' | 'Nail Art' | 'Salon Ambience' | 'Men Grooming';
  imageUrl: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  serviceReceived: string;
  rating: number;
  date: string;
  comment: string;
  location: string;
}

export interface OpeningHourItem {
  day: string;
  hours: string;
  isToday?: boolean;
}

export interface SalonInfo {
  name: string;
  tagline: string;
  subTagline: string;
  city: string;
  state: string;
  fullAddress: string;
  landmark: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  email: string;
  instagramHandle: string;
  instagramUrl: string;
  googleMapsUrl: string;
  googleMapsEmbedQuery: string;
  openingHours: OpeningHourItem[];
  aboutText: string;
  aboutStory: string;
  founderQuote: string;
  hygieneCommitment: string;
}

export interface AppointmentBooking {
  id: string;
  customerName: string;
  phone: string;
  serviceName: string;
  serviceCategory: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
  createdAt: string;
}

export type ActivePage = 'home' | 'services' | 'about' | 'gallery' | 'offers' | 'contact' | 'appointment';
