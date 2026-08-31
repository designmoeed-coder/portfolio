import React, { useEffect, useRef, useState } from 'react';
import { personalInfo } from '../data/portfolioData';

interface HeroSectionProps {
  onHoverStart?: (text?: string) => void;
  onHoverEnd?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onHoverStart, onHoverEnd }) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const portraitRef = useRef<HTMLDivElement>(null);

  // Rotating Expertise Title Animation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % personalInfo.titles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Subtle Mouse Parallax Tilt for Portrait
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!portraitRef.current) return;
    const rect = portraitRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 15, y: y * 15 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    if (onHoverEnd) onHoverEnd();
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-16 flex flex-col justify-between overflow-hidden bg-noise">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 my-auto">
        
        {/* Left Side: Editorial Typography & Rotating Titles */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 z-10">
          
          {/* Tagline */}
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#F2F0EA] animate-pulse" />
            <span className="text-xs uppercase tracking-[0.3em] font-mono text-text-secondary">
              PORTFOLIO 2026
            </span>
          </div>

          {/* Huge Display Heading */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-display tracking-tighter text-[#F2F0EA] uppercase leading-[0.9]">
            ABDUL <br />
            <span className="text-text-muted">MOEED</span>
          </h1>

          {/* Rotating Creative Titles */}
          <div className="h-12 overflow-hidden relative">
            <div
              className="transition-transform duration-700 ease-out"
              style={{ transform: `translateY(-${currentTitleIndex * 100}%)` }}
            >
              {personalInfo.titles.map((title) => (
                <div
                  key={title}
                  className="h-12 flex items-center font-display font-bold text-xl sm:text-2xl md:text-3xl text-accent-beige tracking-widest uppercase"
                >
                  {title}
                </div>
              ))}
            </div>
          </div>

          {/* Bio Copy */}
          <p className="text-sm md:text-base text-text-secondary max-w-lg leading-relaxed border-l-2 border-white/20 pl-4 py-1">
            {personalInfo.heroBio}
          </p>
        </div>

        {/* Right Side: Official Portrait with Vignette & Parallax */}
        <div className="w-full lg:w-1/2 flex justify-center items-center z-10">
          <div
            ref={portraitRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => onHoverStart && onHoverStart('EXPLORE')}
            className="relative w-[300px] sm:w-[380px] md:w-[440px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.9)] transition-transform duration-300 ease-out group"
            style={{
              transform: `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg) scale(1.02)`,
            }}
          >
            {/* Main Portrait Image */}
            <img
              src={personalInfo.portrait}
              alt={personalInfo.name}
              className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Dark Vignette Overlay (.shade) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/30 pointer-events-none" />
            <div className="absolute inset-0 vignette-overlay opacity-80 pointer-events-none" />

            {/* Badge Overlay */}
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0D0D0D]/70 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-between">
              <div>
                <p className="text-xs font-bold tracking-wider text-[#F2F0EA] uppercase">{personalInfo.name}</p>
                <p className="text-[10px] text-text-muted font-mono uppercase">OFFICIAL PORTRAIT</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Marquee Rail at Bottom of Hero */}
      <div className="w-full mt-12 pt-4 border-t border-white/10 bg-[#0D0D0D]/40 backdrop-blur-sm overflow-hidden select-none">
        <div className="animate-marquee flex items-center whitespace-nowrap gap-12">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="text-sm font-display font-semibold tracking-[0.3em] uppercase text-text-muted">
                IT WAS ALWAYS GOING TO BE THIS WAY.
              </span>
              <span className="text-[#F2F0EA] font-serif-italic font-normal text-lg">✦</span>
              <span className="text-sm font-display font-semibold tracking-[0.3em] uppercase text-text-secondary">
                ABDUL MOEED CREATIVE PORTFOLIO
              </span>
              <span className="text-[#F2F0EA] font-serif-italic font-normal text-lg">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
