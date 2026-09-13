import React, { useState } from 'react';
import { useSalon } from '../context/SalonContext';
import { LocationContactSection } from '../components/LocationContactSection';
import { MessageCircle, Phone, Mail, Send, CheckCircle2, Sparkles } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { salonInfo } = useSalon();
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="bg-[#0c0c0e] min-h-screen">
      {/* Location & Map Section */}
      <div className="pt-8">
        <LocationContactSection isFullPage={true} />
      </div>

      {/* General Inquiry / Direct Message Form */}
      <div className="py-16 bg-[#0f0f12] border-t border-[#26242c]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="p-8 sm:p-10 rounded-2xl bg-[#141417] border border-[#26242c] shadow-2xl space-y-6">
            <div className="space-y-2 text-center">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                <Mail className="w-3.5 h-3.5" />
                <span>Write to Management</span>
              </div>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-semibold text-[#faf8f5]">
                Send an Inquiry or Feedback
              </h3>
              <p className="text-xs sm:text-sm text-[#a3a099] max-w-lg mx-auto">
                Have questions regarding bridal bookings, group packages, or special salon services? Our team will get back to you promptly.
              </p>
            </div>

            {formSent ? (
              <div className="p-8 rounded-xl bg-[#16161b] border border-[#d4af37]/40 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif-display text-xl text-[#faf8f5]">
                  Message Received
                </h4>
                <p className="text-xs text-[#a3a099] max-w-md mx-auto">
                  Thank you, {formData.name || 'Guest'}. Our concierge team at Yantra Salon, Jodhpur will connect with you on {formData.phone || 'your phone'} shortly.
                </p>
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${salonInfo.whatsappNumber}?text=Hi%20Yantra%20Salon,%20I%20just%20sent%20an%20inquiry%20regarding%20${encodeURIComponent(formData.subject)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-medium text-[#faf8f5] bg-[#25D366]/20 border border-[#25D366]/40 hover:bg-[#25D366] hover:text-[#0c0c0e] transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Chat on WhatsApp Now</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#d8d4c8] mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Rajesh Sharma"
                      className="w-full bg-[#16161b] border border-[#26242c] rounded-xl px-4 py-2.5 text-xs text-[#faf8f5] placeholder-[#7a7885] focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#d8d4c8] mb-1.5">
                      Contact Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98XXX XXXXX"
                      className="w-full bg-[#16161b] border border-[#26242c] rounded-xl px-4 py-2.5 text-xs text-[#faf8f5] placeholder-[#7a7885] focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#d8d4c8] mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full bg-[#16161b] border border-[#26242c] rounded-xl px-4 py-2.5 text-xs text-[#faf8f5] placeholder-[#7a7885] focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#d8d4c8] mb-1.5">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#16161b] border border-[#26242c] rounded-xl px-4 py-2.5 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Bridal & Event Makeup">Bridal & Event Makeup</option>
                      <option value="Family Package Consultation">Family Package Consultation</option>
                      <option value="Feedback / Experience Review">Feedback / Experience Review</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#d8d4c8] mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you are looking for..."
                    className="w-full bg-[#16161b] border border-[#26242c] rounded-xl px-4 py-2.5 text-xs text-[#faf8f5] placeholder-[#7a7885] focus:outline-none focus:border-[#d4af37]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-xs uppercase tracking-wider font-semibold text-[#0c0c0e] bg-gradient-to-r from-[#dec16b] to-[#d4af37] hover:shadow-lg hover:shadow-[#d4af37]/25 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message to Yantra Salon</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
