import React from 'react';
import { personalInfo } from '../data/portfolioData';

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

export const FullscreenMenu: React.FC<FullscreenMenuProps> = ({
  isOpen,
  onClose,
  onHoverStart,
  onHoverEnd,
}) => {
  const menuLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'WORK', href: '#work' },
    { name: 'BLOG', href: '#blog' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onClose();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[90] pointer-events-none transition-all duration-500 ${
        isOpen ? 'pointer-events-auto opacity-100' : 'opacity-0'
      }`}
    >
      {/* 5 Vertical Staggered Slice Background Bars */}
      <div className="absolute inset-0 grid grid-cols-5 pointer-events-none">
        {[0, 1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className={`bg-[#0D0D0D] border-r border-white/5 transition-transform duration-700 cubic-bezier(0.77, 0, 0.175, 1)`}
            style={{
              transitionDelay: isOpen ? `${index * 80}ms` : `${(4 - index) * 60}ms`,
              transform: isOpen ? 'translateY(0%)' : 'translateY(-100%)',
            }}
          />
        ))}
      </div>

      {/* Menu Content Container */}
      <div
        className={`relative h-full flex flex-col justify-between p-8 md:p-16 lg:p-24 transition-opacity duration-500 delay-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Top Header inside Overlay */}
        <div className="flex justify-between items-center border-b border-white/10 pb-6">
          <span className="font-display font-bold tracking-widest text-lg md:text-xl text-[#F2F0EA]">
            {personalInfo.name}
          </span>
          <span className="text-xs uppercase tracking-widest text-text-muted">
            NAVIGATION
          </span>
        </div>

        {/* Center Main Nav Links */}
        <div className="my-auto py-8 flex flex-col gap-4 md:gap-6">
          {menuLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              onMouseEnter={onHoverStart}
              onMouseLeave={onHoverEnd}
              className="group flex items-center justify-between text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F2F0EA] hover:text-white transition-colors duration-300 border-b border-white/5 pb-3"
            >
              <span className="flex items-center gap-4">
                <span className="text-xs font-mono text-text-muted group-hover:text-[#F2F0EA] transition-colors">
                  0{idx + 1}
                </span>
                <span className="group-hover:translate-x-4 transition-transform duration-300">
                  {link.name}
                </span>
              </span>

              {/* Rotating Plus Icon */}
              <div className="plus-rotate-icon w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-[#0A0A0A] transition-all duration-300">
                <svg width="16" height="16" viewBox="0 0 21 22" fill="none">
                  <path
                    d="M0 11.8077V10.1923H9.69231V0.5H11.3077V10.1923H21V11.8077H11.3077V21.5H9.69231V11.8077H0Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Socials & Contact inside Menu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-6 text-xs font-semibold tracking-wider text-text-secondary">
          <div>
            <p className="text-text-muted uppercase text-[10px] tracking-widest mb-2">MY E-MAIL</p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-white transition-colors text-sm font-mono"
            >
              {personalInfo.email}
            </a>
          </div>

          <div>
            <p className="text-text-muted uppercase text-[10px] tracking-widest mb-2">SOCIAL CHANNELS</p>
            <div className="flex flex-wrap gap-4">
              <a href={personalInfo.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                INSTAGRAM
              </a>
              <a href={personalInfo.socials.behance} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                BEHANCE
              </a>
              <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                GITHUB
              </a>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                LINKEDIN
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
