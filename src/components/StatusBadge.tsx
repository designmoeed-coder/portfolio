import React from 'react';
import { personalInfo } from '../data/portfolioData';

interface StatusBadgeProps {
  onOpenContact: () => void;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  onOpenContact,
  onHoverStart,
  onHoverEnd,
}) => {
  return (
    <button
      onClick={onOpenContact}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      className="fixed top-6 right-6 md:top-8 md:right-10 z-[100] group flex items-center gap-3 bg-[#0D0D0D]/80 backdrop-blur-md border border-white/10 hover:border-white/30 rounded-full px-4 py-2 transition-all duration-300 shadow-2xl hover:scale-105"
      aria-label="Connect with Abdul Moeed"
    >
      {/* Portrait Thumbnail */}
      <div className="w-7 h-7 rounded-full overflow-hidden border border-white/20 flex-shrink-0">
        <img
          src={personalInfo.portrait}
          alt={personalInfo.name}
          className="w-full h-full object-cover object-top filter contrast-105"
        />
      </div>

      {/* Mask Container for Smooth Online <-> Let's Connect Swap */}
      <div className="relative h-5 overflow-hidden text-left min-w-[95px]">
        {/* State 1: ONLINE */}
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#F2F0EA] transition-transform duration-300 group-hover:-translate-y-full">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10B981]" />
          <span>ONLINE</span>
        </div>

        {/* State 2: LET'S CONNECT */}
        <div className="absolute top-0 left-0 w-full flex items-center text-xs font-bold tracking-wider text-[#F2F0EA] translate-y-full transition-transform duration-300 group-hover:translate-y-0">
          <span>LET'S CONNECT</span>
        </div>
      </div>
    </button>
  );
};
