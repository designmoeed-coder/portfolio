import React from 'react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onHoverStart, onHoverEnd }) => {
  return (
    <footer className="relative bg-[#0D0D0D] border-t border-white/10 pt-16 pb-8 overflow-hidden">
      
      {/* Infinite Marquee Rail */}
      <div className="w-full pb-16 border-b border-white/10 overflow-hidden select-none">
        <div className="animate-marquee flex items-center whitespace-nowrap gap-12">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="text-xl sm:text-3xl font-display font-bold tracking-[0.2em] uppercase text-text-muted">
                IT WAS ALWAYS GOING TO BE THIS WAY.
              </span>
              <span className="text-accent-beige font-serif-italic font-normal text-2xl">✦</span>
              <span className="text-xl sm:text-3xl font-display font-bold tracking-[0.2em] uppercase text-[#F2F0EA]">
                ABDUL MOEED GRAPHIC DESIGNER
              </span>
              <span className="text-accent-beige font-serif-italic font-normal text-2xl">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Info */}
      <div className="container mx-auto px-6 md:px-12 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Logo & Info */}
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="font-display font-extrabold text-xl tracking-widest text-[#F2F0EA]">
            {personalInfo.name}
          </span>
          <p className="text-xs font-mono text-text-muted">
            GRAPHIC DESIGNER & SOCIAL MEDIA MANAGER
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 text-xs font-mono text-text-secondary uppercase">
          <a
            href={personalInfo.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
            className="hover:text-white transition-colors"
          >
            INSTAGRAM
          </a>
          <a
            href={personalInfo.socials.behance}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
            className="hover:text-white transition-colors"
          >
            BEHANCE
          </a>
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
            className="hover:text-white transition-colors"
          >
            GITHUB
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
            className="hover:text-white transition-colors"
          >
            LINKEDIN
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs font-mono text-text-muted">
          © 2026 {personalInfo.name}. ALL RIGHTS RESERVED.
        </div>

      </div>
    </footer>
  );
};
