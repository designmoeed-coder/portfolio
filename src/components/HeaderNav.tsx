import React from 'react';
import { personalInfo } from '../data/portfolioData';

interface HeaderNavProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  isMenuOpen,
  onToggleMenu,
  onHoverStart,
  onHoverEnd,
}) => {
  const quickLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'WORK', href: '#work' },
    { name: 'BLOG', href: '#blog' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[95] px-6 md:px-12 py-6 flex items-center justify-between pointer-events-none">
      {/* Logo */}
      <a
        href="#home"
        onClick={(e) => handleScroll(e, '#home')}
        onMouseEnter={onHoverStart}
        onMouseLeave={onHoverEnd}
        className="pointer-events-auto flex items-center gap-3 font-display font-extrabold tracking-widest text-lg md:text-xl text-[#F2F0EA] hover:text-white transition-colors"
      >
        <span className="w-3 h-3 bg-white rotate-45 border border-white/40" />
        <span>{personalInfo.name}</span>
      </a>

      {/* Desktop Navigation Links */}
      <nav className="hidden lg:flex items-center gap-8 pointer-events-auto bg-[#0D0D0D]/60 backdrop-blur-md px-8 py-3 rounded-full border border-white/10 shadow-xl">
        {quickLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
            className="group flex items-center gap-1.5 text-xs font-semibold tracking-widest text-text-secondary hover:text-white transition-colors"
          >
            <span>{link.name}</span>
            <span className="plus-rotate-icon text-white/40 group-hover:text-white">
              <svg width="10" height="10" viewBox="0 0 21 22" fill="none">
                <path
                  d="M0 11.8077V10.1923H9.69231V0.5H11.3077V10.1923H21V11.8077H11.3077V21.5H9.69231V11.8077H0Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </a>
        ))}
      </nav>

      {/* Menu Toggle Button (Mobile & Fullscreen Overlay Trigger) */}
      <button
        onClick={onToggleMenu}
        onMouseEnter={onHoverStart}
        onMouseLeave={onHoverEnd}
        className="pointer-events-auto flex flex-col justify-center items-center w-12 h-12 bg-[#0D0D0D]/80 backdrop-blur-md border border-white/10 hover:border-white/30 rounded-full transition-all duration-300 shadow-2xl"
        aria-label="Toggle Navigation Menu"
      >
        <div className="w-5 h-4 flex flex-col justify-between items-center relative">
          <span
            className={`w-full h-0.5 bg-white transition-all duration-300 origin-center ${
              isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`w-full h-0.5 bg-white transition-all duration-300 origin-center ${
              isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </div>
      </button>
    </header>
  );
};
