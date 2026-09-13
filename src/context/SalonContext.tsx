import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  SalonInfo,
  ServiceItem,
  SalonOffer,
  GalleryPhoto,
  Testimonial,
  AppointmentBooking,
  ActivePage
} from '../types';
import {
  initialSalonInfo,
  initialServices,
  initialOffers,
  initialGallery,
  initialTestimonials
} from '../data/salonData';

interface SalonContextType {
  salonInfo: SalonInfo;
  updateSalonInfo: (info: Partial<SalonInfo>) => void;
  services: ServiceItem[];
  addService: (service: Omit<ServiceItem, 'id'>) => void;
  updateService: (id: string, service: Partial<ServiceItem>) => void;
  deleteService: (id: string) => void;
  offers: SalonOffer[];
  addOffer: (offer: Omit<SalonOffer, 'id'>) => void;
  updateOffer: (id: string, offer: Partial<SalonOffer>) => void;
  deleteOffer: (id: string) => void;
  gallery: GalleryPhoto[];
  addGalleryPhoto: (photo: Omit<GalleryPhoto, 'id'>) => void;
  deleteGalleryPhoto: (id: string) => void;
  testimonials: Testimonial[];
  appointments: AppointmentBooking[];
  bookAppointment: (data: Omit<AppointmentBooking, 'id' | 'createdAt' | 'status'>) => Promise<AppointmentBooking>;
  updateAppointmentStatus: (id: string, status: AppointmentBooking['status']) => void;
  deleteAppointment: (id: string) => void;
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  isCMSOpen: boolean;
  setIsCMSOpen: (open: boolean) => void;
  isBookingModalOpen: boolean;
  setIsBookingModalOpen: (open: boolean) => void;
  preselectedService: string;
  setPreselectedService: (serviceName: string) => void;
  resetToDefaults: () => void;
}

const SalonContext = createContext<SalonContextType | undefined>(undefined);

const STORAGE_KEYS = {
  INFO: 'yantra_salon_info_v1',
  SERVICES: 'yantra_salon_services_v2',
  OFFERS: 'yantra_salon_offers_v1',
  GALLERY: 'yantra_salon_gallery_v1',
  APPOINTMENTS: 'yantra_salon_appointments_v1'
};

export const SalonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [salonInfo, setSalonInfo] = useState<SalonInfo>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.INFO);
    return saved ? JSON.parse(saved) : initialSalonInfo;
  });

  const [services, setServices] = useState<ServiceItem[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.SERVICES);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.map((item: ServiceItem) => {
          const defaultItem = initialServices.find(s => s.id === item.id);
          if (defaultItem && item.image.includes('photo-1512290900672-1f48ba6d5395')) {
            return { ...item, image: defaultItem.image };
          }
          return item;
        });
      } catch (e) {
        console.error(e);
      }
    }
    return initialServices;
  });

  const [offers, setOffers] = useState<SalonOffer[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.OFFERS);
    return saved ? JSON.parse(saved) : initialOffers;
  });

  const [gallery, setGallery] = useState<GalleryPhoto[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.GALLERY);
    return saved ? JSON.parse(saved) : initialGallery;
  });

  const [testimonials] = useState<Testimonial[]>(initialTestimonials);

  const [appointments, setAppointments] = useState<AppointmentBooking[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.APPOINTMENTS);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    // Demo seed appointment
    return [
      {
        id: 'demo-app-1',
        customerName: 'Aarav Sharma',
        phone: '+91 94140 12345',
        serviceName: 'Couture Precision Haircut & Styling',
        serviceCategory: 'Hair',
        preferredDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
        preferredTime: '11:30 AM',
        message: 'Looking forward to consultation for wedding hair styling.',
        status: 'Confirmed',
        createdAt: new Date().toISOString()
      }
    ];
  });

  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [isCMSOpen, setIsCMSOpen] = useState<boolean>(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [preselectedService, setPreselectedService] = useState<string>('');

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.INFO, JSON.stringify(salonInfo));
  }, [salonInfo]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.OFFERS, JSON.stringify(offers));
  }, [offers]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(gallery));
  }, [gallery]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(appointments));
  }, [appointments]);

  const updateSalonInfo = (updated: Partial<SalonInfo>) => {
    setSalonInfo((prev) => ({ ...prev, ...updated }));
  };

  const addService = (serviceData: Omit<ServiceItem, 'id'>) => {
    const newService: ServiceItem = {
      ...serviceData,
      id: `srv-${Date.now()}`
    };
    setServices((prev) => [newService, ...prev]);
  };

  const updateService = (id: string, updated: Partial<ServiceItem>) => {
    setServices((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updated } : item))
    );
  };

  const deleteService = (id: string) => {
    setServices((prev) => prev.filter((item) => item.id !== id));
  };

  const addOffer = (offerData: Omit<SalonOffer, 'id'>) => {
    const newOffer: SalonOffer = {
      ...offerData,
      id: `off-${Date.now()}`
    };
    setOffers((prev) => [newOffer, ...prev]);
  };

  const updateOffer = (id: string, updated: Partial<SalonOffer>) => {
    setOffers((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updated } : item))
    );
  };

  const deleteOffer = (id: string) => {
    setOffers((prev) => prev.filter((item) => item.id !== id));
  };

  const addGalleryPhoto = (photoData: Omit<GalleryPhoto, 'id'>) => {
    const newPhoto: GalleryPhoto = {
      ...photoData,
      id: `photo-${Date.now()}`
    };
    setGallery((prev) => [newPhoto, ...prev]);
  };

  const deleteGalleryPhoto = (id: string) => {
    setGallery((prev) => prev.filter((item) => item.id !== id));
  };

  const bookAppointment = async (
    data: Omit<AppointmentBooking, 'id' | 'createdAt' | 'status'>
  ): Promise<AppointmentBooking> => {
    const newBooking: AppointmentBooking = {
      ...data,
      id: `app-${Date.now()}`,
      status: 'Pending',
      createdAt: new Date().toISOString()
    };
    setAppointments((prev) => [newBooking, ...prev]);
    return newBooking;
  };

  const updateAppointmentStatus = (id: string, status: AppointmentBooking['status']) => {
    setAppointments((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status } : app))
    );
  };

  const deleteAppointment = (id: string) => {
    setAppointments((prev) => prev.filter((app) => app.id !== id));
  };

  const resetToDefaults = () => {
    setSalonInfo(initialSalonInfo);
    setServices(initialServices);
    setOffers(initialOffers);
    setGallery(initialGallery);
    localStorage.removeItem(STORAGE_KEYS.INFO);
    localStorage.removeItem(STORAGE_KEYS.SERVICES);
    localStorage.removeItem(STORAGE_KEYS.OFFERS);
    localStorage.removeItem(STORAGE_KEYS.GALLERY);
  };

  return (
    <SalonContext.Provider
      value={{
        salonInfo,
        updateSalonInfo,
        services,
        addService,
        updateService,
        deleteService,
        offers,
        addOffer,
        updateOffer,
        deleteOffer,
        gallery,
        addGalleryPhoto,
        deleteGalleryPhoto,
        testimonials,
        appointments,
        bookAppointment,
        updateAppointmentStatus,
        deleteAppointment,
        activePage,
        setActivePage,
        isCMSOpen,
        setIsCMSOpen,
        isBookingModalOpen,
        setIsBookingModalOpen,
        preselectedService,
        setPreselectedService,
        resetToDefaults
      }}
    >
      {children}
    </SalonContext.Provider>
  );
};

export const useSalon = () => {
  const context = useContext(SalonContext);
  if (!context) {
    throw new Error('useSalon must be used within a SalonProvider');
  }
  return context;
};
