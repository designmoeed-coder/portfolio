import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  onHoverStart,
  onHoverEnd,
}) => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-end bg-black/80 backdrop-blur-md transition-opacity duration-300">
      {/* Click backdrop to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Slide-out Contact Drawer */}
      <div className="relative w-full max-w-xl h-full bg-[#0D0D0D] border-l border-white/10 overflow-y-auto p-6 md:p-12 z-10 flex flex-col justify-between shadow-2xl animate-slide-in-right">
        
        {/* Top Header */}
        <div className="flex justify-between items-center border-b border-white/10 pb-6 mb-8">
          <h2 className="text-xl font-extrabold font-display tracking-tight text-[#F2F0EA]">
            GET IN <span className="font-serif-italic font-normal text-accent-beige lowercase">touch</span>
          </h2>

          <button
            onClick={onClose}
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
            className="w-10 h-10 rounded-full border border-white/20 hover:border-white flex items-center justify-center text-white transition-all duration-300"
            aria-label="Close contact drawer"
          >
            ✕
          </button>
        </div>

        {/* Intro */}
        <p className="text-xs font-mono text-text-secondary mb-8">
          Have an idea, project, or inquiry? Send a message directly to {personalInfo.name}.
        </p>

        {/* Success Alert */}
        {submitted ? (
          <div className="p-6 bg-emerald-950/50 border border-emerald-500/30 rounded-xl text-center flex flex-col gap-2 my-auto">
            <p className="text-emerald-400 font-bold text-lg">MESSAGE SENT SUCCESSFULLY!</p>
            <p className="text-xs text-text-secondary">
              Thank you for reaching out. Abdul Moeed will get back to you shortly.
            </p>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 my-auto">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-text-muted">
                YOUR NAME *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Abdul Moeed"
                className="w-full bg-[#0A0A0A] border border-white/10 focus:border-white/40 rounded-xl px-4 py-3 text-xs text-[#F2F0EA] outline-none transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-text-muted">
                YOUR PHONE NUMBER
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 (555) 000-0000"
                className="w-full bg-[#0A0A0A] border border-white/10 focus:border-white/40 rounded-xl px-4 py-3 text-xs text-[#F2F0EA] outline-none transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-text-muted">
                YOUR EMAIL *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="abdulmoeed@example.com"
                className="w-full bg-[#0A0A0A] border border-white/10 focus:border-white/40 rounded-xl px-4 py-3 text-xs text-[#F2F0EA] outline-none transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-text-muted">
                YOUR MESSAGE *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project details or vision..."
                className="w-full bg-[#0A0A0A] border border-white/10 focus:border-white/40 rounded-xl px-4 py-3 text-xs text-[#F2F0EA] outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              onMouseEnter={onHoverStart}
              onMouseLeave={onHoverEnd}
              className="w-full py-4 bg-[#F2F0EA] text-[#0A0A0A] hover:bg-white rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-xl mt-4"
            >
              SUBMIT MESSAGE
            </button>
          </form>
        )}

        {/* Footer info inside Drawer */}
        <div className="pt-6 border-t border-white/10 text-center">
          <p className="text-[10px] font-mono text-text-muted uppercase">
            DIRECT EMAIL: {personalInfo.email}
          </p>
        </div>

      </div>
    </div>
  );
};
