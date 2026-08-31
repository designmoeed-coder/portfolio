import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const MarqueeLedger: React.FC = () => {
  return (
    <div className="w-full bg-[#0D0D0D] border-y border-white/10 py-3 overflow-hidden select-none">
      <div className="animate-marquee flex items-center whitespace-nowrap gap-8">
        {[...personalInfo.impactWords, ...personalInfo.impactWords, ...personalInfo.impactWords, ...personalInfo.impactWords].map((word, idx) => (
          <React.Fragment key={idx}>
            <div className="flex items-center gap-2">
              <span className="plus-rotate-icon text-white/40">
                <svg width="14" height="14" viewBox="0 0 21 22" fill="none">
                  <path
                    d="M0 11.8077V10.1923H9.69231V0.5H11.3077V10.1923H21V11.8077H11.3077V21.5H9.69231V11.8077H0Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span className="text-xs md:text-sm font-extrabold tracking-[0.25em] text-text-primary uppercase">
                {word}
              </span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
