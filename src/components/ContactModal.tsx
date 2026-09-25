import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

// ─────────────────────────────────────────────────────────────────
//  EmailJS Configuration
//  Steps to activate real email sending:
//  1. Go to https://www.emailjs.com  and create a FREE account
//  2. Add a Gmail service → copy the Service ID below
//  3. Create an email template → copy the Template ID below
//  4. Copy your Public Key from Account > API Keys
//
//  Template variables to use in EmailJS template:
//    {{from_name}}   — sender's name
//    {{from_email}}  — sender's email
//    {{phone}}       — sender's phone
//    {{message}}     — message text
//    {{to_email}}    — your email (design.moeed@gmail.com)
// ─────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // e.g. "service_xxxxxxx"
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // e.g. "template_xxxxxxx"
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // e.g. "xxxxxxxxxxxxxxxxxxx"

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  onHoverStart,
  onHoverEnd,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  formData.name,
          from_email: formData.email,
          phone:      formData.phone || 'Not provided',
          message:    formData.message,
          to_email:   'design.moeed@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setFormData({ name: '', phone: '', email: '', message: '' });
        onClose();
      }, 2800);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3500);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-end bg-black/80 backdrop-blur-md transition-opacity duration-300">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Slide-out Drawer */}
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

        {/* ── SUCCESS ── */}
        {status === 'success' ? (
          <div className="p-6 bg-emerald-950/50 border border-emerald-500/30 rounded-xl text-center flex flex-col gap-3 my-auto">
            <div className="text-3xl">✅</div>
            <p className="text-emerald-400 font-bold text-lg tracking-wider">MESSAGE SENT!</p>
            <p className="text-xs text-text-secondary leading-relaxed">
              Your message has been delivered to{' '}
              <span className="text-emerald-400 font-mono">design.moeed@gmail.com</span>.
              <br />Abdul Moeed will get back to you shortly.
            </p>
          </div>

        /* ── ERROR ── */
        ) : status === 'error' ? (
          <div className="p-6 bg-red-950/50 border border-red-500/30 rounded-xl text-center flex flex-col gap-3 my-auto">
            <div className="text-3xl">⚠️</div>
            <p className="text-red-400 font-bold text-lg tracking-wider">SENDING FAILED</p>
            <p className="text-xs text-text-secondary leading-relaxed">
              Something went wrong. Please email directly at{' '}
              <a
                href="mailto:design.moeed@gmail.com"
                className="text-red-400 underline font-mono"
              >
                design.moeed@gmail.com
              </a>
            </p>
          </div>

        /* ── FORM ── */
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 my-auto">

            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-text-muted">
                YOUR NAME *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your full name"
                className="w-full bg-[#0A0A0A] border border-white/10 focus:border-white/40 rounded-xl px-4 py-3 text-xs text-[#F2F0EA] outline-none transition-colors"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-text-muted">
                YOUR PHONE NUMBER
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+92 300 0000000"
                className="w-full bg-[#0A0A0A] border border-white/10 focus:border-white/40 rounded-xl px-4 py-3 text-xs text-[#F2F0EA] outline-none transition-colors"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-text-muted">
                YOUR EMAIL *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full bg-[#0A0A0A] border border-white/10 focus:border-white/40 rounded-xl px-4 py-3 text-xs text-[#F2F0EA] outline-none transition-colors"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-text-muted">
                YOUR MESSAGE *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project, brand vision, or idea..."
                className="w-full bg-[#0A0A0A] border border-white/10 focus:border-white/40 rounded-xl px-4 py-3 text-xs text-[#F2F0EA] outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'sending'}
              onMouseEnter={onHoverStart}
              onMouseLeave={onHoverEnd}
              className="w-full py-4 bg-[#F2F0EA] text-[#0A0A0A] hover:bg-white rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-xl mt-4 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {status === 'sending' ? (
                <>
                  <span className="w-4 h-4 border-2 border-[#0A0A0A]/30 border-t-[#0A0A0A] rounded-full animate-spin" />
                  SENDING...
                </>
              ) : (
                'SUBMIT MESSAGE'
              )}
            </button>
          </form>
        )}

        {/* Drawer Footer */}
        <div className="pt-6 border-t border-white/10 text-center mt-8">
          <p className="text-[10px] font-mono text-text-muted uppercase">
            DIRECT EMAIL:{' '}
            <a
              href="mailto:design.moeed@gmail.com"
              className="text-[#F2F0EA] hover:text-white transition-colors"
            >
              design.moeed@gmail.com
            </a>
          </p>
        </div>

      </div>
    </div>
  );
};
