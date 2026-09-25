import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-[#0A0A0A] border-t border-white/10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        
        {/* Left Side: Editorial Display Title */}
        <div className="w-full lg:w-1/2">
          <p className="text-xs uppercase tracking-[0.3em] font-mono text-text-muted mb-4">
            01 / PHILOSOPHY
          </p>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-[#F2F0EA] leading-[0.95] uppercase">
            THIS WILL <br />
            <span className="font-serif-italic font-normal text-[#E6E4DC] lowercase tracking-normal text-6xl sm:text-8xl lg:text-9xl">
              Feel
            </span> <br />
            DIFFERENT
          </h2>
        </div>

        {/* Right Side: Editorial Body Copy */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 pt-4">
          <p className="text-lg sm:text-2xl font-light text-[#F2F0EA] leading-relaxed">
            {personalInfo.aboutBio}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10 text-xs font-mono uppercase tracking-widest text-text-secondary">
            <div className="flex flex-col gap-2">
              <span className="text-text-muted">FOCUS</span>
              <span className="text-[#F2F0EA] font-bold">DIGITAL CRAFTSMANSHIP</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-text-muted">METHODOLOGY</span>
              <span className="text-[#F2F0EA] font-bold">DESIGN + BRAND STRATEGY</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-text-muted">CORE STACK</span>
              <span className="text-[#F2F0EA] font-bold">FIGMA / PHOTOSHOP / ILLUSTRATOR</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-text-muted">AVAILABILITY</span>
              <span className="text-emerald-400 font-bold">OPEN FOR CREATIVE PROJECTS</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
