import React from 'react';
import { statsData } from '../data/portfolioData';

export const StatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0D0D0D] border-y border-white/10 relative overflow-hidden">
      
      {/* Visual Accent Top Line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#F2F0EA]/40 to-transparent mb-12" />

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 p-8 bg-[#0A0A0A]/60 border border-white/5 hover:border-white/20 rounded-2xl transition-all duration-300 group"
          >
            <div className="flex items-baseline justify-between">
              <span className="text-6xl sm:text-7xl font-extrabold font-display tracking-tighter text-[#F2F0EA] group-hover:scale-105 transition-transform duration-300">
                {stat.number}
              </span>
              <span className="text-xs font-mono text-text-muted">
                0{index + 1}
              </span>
            </div>

            <h3 className="text-xs font-bold tracking-[0.2em] text-text-primary uppercase border-t border-white/10 pt-4">
              {stat.label}
            </h3>

            <p className="text-xs text-text-secondary font-light leading-relaxed">
              {stat.subtext}
            </p>
          </div>
        ))}
      </div>

      {/* Visual Accent Bottom Line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#F2F0EA]/40 to-transparent mt-12" />
    </section>
  );
};
