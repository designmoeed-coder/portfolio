import React, { useState } from 'react';
import { ContactModal } from './ContactModal';

interface ContactCTASectionProps {
  onHoverStart?: (text?: string) => void;
  onHoverEnd?: () => void;
}

export const ContactCTASection: React.FC<ContactCTASectionProps> = ({
  onHoverStart,
  onHoverEnd,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact" className="relative py-32 md:py-48 bg-[#0A0A0A] border-t border-white/10 overflow-hidden text-center">
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center gap-12">
        
        {/* Subtitle */}
        <p className="text-xs uppercase tracking-[0.3em] font-mono text-text-muted">
          07 / CONTACT & COLLABORATION
        </p>

        {/* Dramatic Heading */}
        <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black font-display tracking-tighter text-[#F2F0EA] leading-[0.95] max-w-5xl uppercase">
          EVERY GREAT STORY NEEDS A POWERFUL <br />
          <span className="font-serif-italic font-normal lowercase text-5xl sm:text-7xl lg:text-9xl text-accent-beige">
            ending.
          </span>
        </h2>

        {/* Interactive Circular CTA Ring Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          onMouseEnter={() => onHoverStart && onHoverStart('CONNECT')}
          onMouseLeave={() => onHoverEnd && onHoverEnd()}
          className="group relative w-48 h-48 md:w-56 md:h-56 rounded-full border border-white/20 hover:border-white bg-[#0D0D0D] hover:bg-white text-[#F2F0EA] hover:text-[#0A0A0A] flex flex-col items-center justify-center gap-2 transition-all duration-500 shadow-2xl hover:scale-105"
        >
          <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase">
            LET'S BE
          </span>
          <span className="font-serif-italic font-normal text-xl md:text-2xl lowercase">
            creative
          </span>

          {/* Orbiting Ring Indicator */}
          <div className="absolute inset-2 rounded-full border border-dashed border-white/20 group-hover:border-black/30 animate-spin-slow pointer-events-none" />
        </button>

      </div>

      {/* Contact Form Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onHoverStart={() => onHoverStart && onHoverStart('CLOSE')}
        onHoverEnd={onHoverEnd}
      />
    </section>
  );
};
