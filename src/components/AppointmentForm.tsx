import React, { useState, useEffect } from 'react';
import { useSalon } from '../context/SalonContext';
import {
  Calendar,
  Clock,
  User,
  Phone,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  MapPin,
  ArrowRight
} from 'lucide-react';

interface AppointmentFormProps {
  initialService?: string;
  onSuccess?: () => void;
  isModal?: boolean;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  initialService = '',
  onSuccess,
  isModal = false
}) => {
  const { salonInfo, services, bookAppointment } = useSalon();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState(initialService || (services[0]?.name || ''));
  const [preferredDate, setPreferredDate] = useState(() => {
    const tomorrow = new Date(Date.now() + 86400000);
    return tomorrow.toISOString().split('T')[0];
  });
  const [preferredTime, setPreferredTime] = useState('11:00 AM');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<any>(null);

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    }
  }, [initialService]);

  const timeSlots = [
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:30 PM',
    '03:00 PM',
    '04:30 PM',
    '06:00 PM',
    '07:30 PM'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !preferredDate || !preferredTime) {
      return;
    }

    setIsSubmitting(true);
    try {
      const matched = services.find((s) => s.name === selectedService);
      const booking = await bookAppointment({
        customerName: name,
        phone,
        serviceName: selectedService,
        serviceCategory: matched ? matched.category : 'General Styling',
        preferredDate,
        preferredTime,
        message
      });

      setSubmittedBooking(booking);
      if (onSuccess) {
        onSuccess();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setMessage('');
    setSubmittedBooking(null);
  };

  // Pre-generate WhatsApp click-to-chat url
  const generateWhatsAppUrl = () => {
    if (!submittedBooking) return '';
    const text = encodeURIComponent(
      `Hello Yantra Salon (Jodhpur)! I would like to confirm my appointment:\n\n` +
      `• Name: ${submittedBooking.customerName}\n` +
      `• Phone: ${submittedBooking.phone}\n` +
      `• Service: ${submittedBooking.serviceName}\n` +
      `• Date: ${submittedBooking.preferredDate}\n` +
      `• Time: ${submittedBooking.preferredTime}\n` +
      (submittedBooking.message ? `• Note: ${submittedBooking.message}\n` : '') +
      `\nPlease confirm slot availability. Thank you!`
    );
    return `https://wa.me/${salonInfo.whatsappNumber}?text=${text}`;
  };

  // If successfully submitted, show luxury success card
  if (submittedBooking) {
    return (
      <div className="p-6 sm:p-8 rounded-2xl bg-[#141417] border border-[#d4af37]/40 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-14 h-14 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#d4af37] flex items-center justify-center mx-auto shadow-lg shadow-[#d4af37]/10">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold">
            Appointment Request Logged
          </span>
          <h3 className="font-serif-display text-2xl sm:text-3xl text-[#faf8f5]">
            Thank You, {submittedBooking.customerName}!
          </h3>
          <p className="text-xs sm:text-sm text-[#a3a099] max-w-md mx-auto leading-relaxed">
            Your appointment request for <strong className="text-[#dec16b]">{submittedBooking.serviceName}</strong> on <strong className="text-[#faf8f5]">{submittedBooking.preferredDate} at {submittedBooking.preferredTime}</strong> has been received by our Jodhpur desk.
          </p>
        </div>

        {/* Appointment summary card */}
        <div className="p-4 rounded-xl bg-[#16161b] border border-[#26242c] text-left text-xs space-y-2 max-w-md mx-auto">
          <div className="flex justify-between border-b border-[#26242c] pb-2">
            <span className="text-[#7a7885]">Booking Reference</span>
            <span className="font-mono text-[#d4af37]">{submittedBooking.id.toUpperCase()}</span>
          </div>
          <div className="flex justify-between border-b border-[#26242c] pb-2">
            <span className="text-[#7a7885]">Salon Location</span>
            <span className="text-[#faf8f5] flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#d4af37]" />
              {salonInfo.city}, Rajasthan
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#7a7885]">Status</span>
            <span className="text-[#25D366] font-medium flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping"></span>
              Awaiting Salon Confirmation
            </span>
          </div>
        </div>

        {/* Action triggers */}
        <div className="space-y-3 max-w-md mx-auto">
          <a
            href={generateWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-xl text-xs uppercase tracking-wider font-semibold text-[#0c0c0e] bg-gradient-to-r from-[#dec16b] via-[#d4af37] to-[#c29b28] hover:shadow-xl hover:shadow-[#d4af37]/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send Confirmation via WhatsApp</span>
          </a>

          <button
            onClick={resetForm}
            className="w-full py-2.5 rounded-xl text-xs text-[#a3a099] hover:text-[#faf8f5] bg-[#16161b] border border-[#26242c] transition-colors cursor-pointer"
          >
            Book Another Appointment
          </button>
        </div>

        <p className="text-[11px] text-[#7a7885]">
          Need immediate support? Call our front desk directly at{' '}
          <a href={`tel:${salonInfo.phone}`} className="text-[#d4af37] hover:underline">
            {salonInfo.displayPhone}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name and Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-[#d8d4c8] mb-1.5 flex items-center gap-1">
            <User className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Your Name *</span>
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., Anjali Rathore"
            className="w-full bg-[#16161b] border border-[#26242c] rounded-xl px-4 py-2.5 text-xs text-[#faf8f5] placeholder-[#7a7885] focus:outline-none focus:border-[#d4af37]"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-[#d8d4c8] mb-1.5 flex items-center gap-1">
            <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Phone Number *</span>
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98XXX XXXXX"
            className="w-full bg-[#16161b] border border-[#26242c] rounded-xl px-4 py-2.5 text-xs text-[#faf8f5] placeholder-[#7a7885] focus:outline-none focus:border-[#d4af37]"
          />
        </div>
      </div>

      {/* Service selector */}
      <div>
        <label className="block text-xs font-medium text-[#d8d4c8] mb-1.5 flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Select Desired Service or Package *</span>
        </label>
        <select
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          className="w-full bg-[#16161b] border border-[#26242c] rounded-xl px-4 py-2.5 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
        >
          {services.map((srv) => (
            <option key={srv.id} value={srv.name}>
              [{srv.category}] {srv.name} ({srv.targetAudience})
            </option>
          ))}
          <option value="Bridal & Wedding Consultation">Bridal & Wedding Consultation</option>
          <option value="Full Family Package (Custom)">Full Family Package (Custom)</option>
          <option value="Other / In-Person Consultation">Other / In-Person Consultation</option>
        </select>
      </div>

      {/* Preferred Date and Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-[#d8d4c8] mb-1.5 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Preferred Date *</span>
          </label>
          <input
            type="date"
            required
            min={new Date().toISOString().split('T')[0]}
            value={preferredDate}
            onChange={(e) => setPreferredDate(e.target.value)}
            className="w-full bg-[#16161b] border border-[#26242c] rounded-xl px-4 py-2.5 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-[#d8d4c8] mb-1.5 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Preferred Time Slot *</span>
          </label>
          <select
            value={preferredTime}
            onChange={(e) => setPreferredTime(e.target.value)}
            className="w-full bg-[#16161b] border border-[#26242c] rounded-xl px-4 py-2.5 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
          >
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message / Special requirements */}
      <div>
        <label className="block text-xs font-medium text-[#d8d4c8] mb-1.5">
          Special Notes or Stylist Preference (Optional)
        </label>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="e.g., Attending an evening wedding in Jodhpur, prefer senior hair stylist, hair length past shoulders..."
          className="w-full bg-[#16161b] border border-[#26242c] rounded-xl px-4 py-2.5 text-xs text-[#faf8f5] placeholder-[#7a7885] focus:outline-none focus:border-[#d4af37]"
        ></textarea>
      </div>

      {/* Submission CTA */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 rounded-xl text-xs uppercase tracking-wider font-semibold text-[#0c0c0e] bg-gradient-to-r from-[#dec16b] via-[#d4af37] to-[#c29b28] hover:shadow-xl hover:shadow-[#d4af37]/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-50"
      >
        <Calendar className="w-4 h-4" />
        <span>{isSubmitting ? 'Securing Slot...' : 'Confirm Appointment Request'}</span>
      </button>

      <div className="flex items-center justify-center gap-2 text-[11px] text-[#7a7885]">
        <AlertCircle className="w-3.5 h-3.5 text-[#d4af37]" />
        <span>Free cancellation & date rescheduling at any time with prior notice.</span>
      </div>
    </form>
  );
};
