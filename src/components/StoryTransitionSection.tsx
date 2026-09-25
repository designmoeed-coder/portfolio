import React from 'react';

export const StoryTransitionSection: React.FC = () => {
  return (
    <section className="relative py-32 md:py-48 bg-[#0D0D0D] border-t border-white/10 overflow-hidden text-center">
      {/* Background Decorative SVG Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10 flex items-center justify-center">
        <div className="w-[800px] h-[800px] rounded-full border border-white/20 animate-spin-slow" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl flex flex-col items-center gap-8">
        <p className="text-xs uppercase tracking-[0.3em] font-mono text-text-muted">
          03 / EVOLUTION
        </p>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight text-[#F2F0EA] leading-tight uppercase">
          THE PROCESS WAS ALWAYS <br />
          <span className="font-serif-italic font-normal lowercase text-5xl sm:text-7xl md:text-8xl text-accent-beige">
            part
          </span>{' '}
          OF THE PATH.
        </h2>

        <div className="w-16 h-px bg-white/30 my-2" />

        <p className="text-base sm:text-xl text-text-secondary max-w-xl font-light leading-relaxed">
          And from that pivotal moment, every concept, visual element, and brand touchpoint began to rebuild with absolute intention.
        </p>

        {/* Paper Tear / Visual Break Graphic */}
        <div className="w-full max-w-2xl mt-8 pt-8 border-t border-dashed border-white/20 flex justify-between items-center text-[10px] font-mono text-text-muted uppercase tracking-widest">
          <span>BREAK</span>
          <span>BUILD</span>
          <span>REFINE</span>
          <span>EVOLVE</span>
        </div>
      </div>
    </section>
  );
};
