import React from 'react';
import { personalInfo, processData } from '../data/portfolioData';

export const ProcessSection: React.FC = () => {
  return (
    <section className="relative py-32 bg-[#0D0D0D] border-t border-white/10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Main Heading */}
        <div className="max-w-4xl mb-20">
          <p className="text-xs uppercase tracking-[0.3em] font-mono text-text-muted mb-4">
            05 / METHODOLOGY
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-[#F2F0EA] leading-tight">
            FROM THE FIRST IDEA TO THE FINAL FRAME, EVERY STEP IS CRAFTED TO CREATE AN UNFORGETTABLE{' '}
            <span className="font-serif-italic font-normal text-accent-beige lowercase text-4xl sm:text-6xl lg:text-7xl">
              digital experience.
            </span>
          </h2>
        </div>

        {/* Grid Layout: Left 4 Steps / Right Portrait Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left 4 Cards (8 columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {processData.map((step) => (
              <div
                key={step.number}
                className="p-8 bg-[#0A0A0A] border border-white/10 hover:border-white/30 rounded-2xl flex flex-col justify-between gap-6 transition-all duration-300 group"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono font-bold text-text-muted group-hover:text-white transition-colors">
                    {step.number}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white transition-colors" />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold font-display tracking-tight text-[#F2F0EA]">
                    {step.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Portrait Framing (5 columns) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src={personalInfo.portrait}
                alt={`${personalInfo.name} Process`}
                className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0A0A0A]/80 backdrop-blur-md rounded-xl border border-white/10 text-center">
                <p className="text-xs font-bold tracking-widest text-[#F2F0EA] uppercase">
                  ABDUL MOEED
                </p>
                <p className="text-[10px] font-mono text-text-muted uppercase">
                  CRAFTING INTENTIONAL EXPERIENCES
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
