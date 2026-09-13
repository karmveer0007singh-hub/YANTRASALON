import React from 'react';
import { useSalon } from '../context/SalonContext';
import { AppointmentForm } from './AppointmentForm';
import { X, Sparkles } from 'lucide-react';

export const AppointmentModal: React.FC = () => {
  const { isBookingModalOpen, setIsBookingModalOpen, preselectedService } = useSalon();

  if (!isBookingModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      onClick={() => setIsBookingModalOpen(false)}
    >
      <div
        className="relative w-full max-w-xl bg-[#141417] border border-[#26242c] rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsBookingModalOpen(false)}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#1e1e24] text-[#a3a099] hover:text-[#faf8f5] flex items-center justify-center border border-[#26242c] transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="mb-6 space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#d4af37] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Yantra Salon • Jodhpur</span>
          </div>
          <h2 className="font-serif-display text-2xl sm:text-3xl text-[#faf8f5]">
            Book Your Appointment
          </h2>
          <p className="text-xs text-[#a3a099]">
            Select your preferred treatment, date, and time. We will reserve your specialist.
          </p>
        </div>

        <AppointmentForm
          initialService={preselectedService}
          isModal={true}
          onSuccess={() => {
            // keep open to see success details
          }}
        />
      </div>
    </div>
  );
};
