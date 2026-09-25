import React, { useEffect, useRef } from 'react';
import type { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onHoverStart,
  onHoverEnd,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when modal opens, unlock when it closes
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      // Reset scroll position of the drawer content
      if (scrollRef.current) {
        scrollRef.current.scrollTop = 0;
      }
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  // Prevent scroll from propagating to the background
  const handleWheel = (e: React.WheelEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex justify-end bg-black/80 backdrop-blur-md"
      onWheel={handleWheel}
    >
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Slide-out Drawer Panel */}
      <div
        className="relative w-full max-w-3xl bg-[#0D0D0D] border-l border-white/10 z-10 shadow-2xl animate-slide-in-right flex flex-col"
        style={{ height: '100vh', maxHeight: '100vh' }}
      >
        
        {/* Fixed Top Bar */}
        <div className="flex-none flex justify-between items-center border-b border-white/10 px-6 py-5 md:px-12 md:py-6 bg-[#0D0D0D]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-text-muted">PROJECT</span>
            <span className="font-bold text-sm tracking-widest text-[#F2F0EA]">
              {project.number} / 04
            </span>
          </div>

          <button
            onClick={onClose}
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
            className="w-10 h-10 rounded-full border border-white/20 hover:border-white flex items-center justify-center text-white transition-all duration-300"
            aria-label="Close project drawer"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Content — this is the only scrollable part */}
        <div
          ref={scrollRef}
          className="flex-1 min-h-0 overflow-y-scroll overscroll-contain"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div className="p-6 md:p-12">

            {/* Hero Image */}
            <div className="w-full aspect-[16/9] rounded-xl overflow-hidden border border-white/10 mb-8">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover filter contrast-105"
              />
            </div>

            {/* Project Header Info */}
            <div className="flex flex-col gap-4 mb-8">
              <span className="text-xs uppercase tracking-[0.25em] font-mono text-text-muted">
                {project.category} — {project.year}
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold font-display tracking-tight text-[#F2F0EA]">
                {project.title}
              </h2>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed pt-2">
                {project.description}
              </p>
            </div>

            {/* Contribution / Role List */}
            <div className="border-t border-white/10 pt-6 mb-8">
              <h3 className="text-xs font-mono uppercase tracking-widest text-text-muted mb-4">
                CONTRIBUTION & ROLE
              </h3>
              <ul className="flex flex-col gap-2">
                {project.role.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs md:text-sm text-text-primary">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Gallery Grid — all images visible */}
            <div className="border-t border-white/10 pt-6 mb-8">
              <h3 className="text-xs font-mono uppercase tracking-widest text-text-muted mb-4">
                GALLERY — {project.gallery.length} DESIGNS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                {project.gallery.map((img, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden border border-white/10 bg-white/[0.03] group">
                    <img
                      src={img}
                      alt={`${project.title} - Design ${idx + 1}`}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Live CTA Button */}
            {project.liveUrl && (
              <div className="pt-6 border-t border-white/10 pb-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={onHoverStart}
                  onMouseLeave={onHoverEnd}
                  className="w-full py-4 bg-[#F2F0EA] text-[#0A0A0A] hover:bg-white rounded-xl text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-3 transition-colors shadow-xl"
                >
                  <span>VIEW ON BEHANCE</span>
                  <span>↗</span>
                </a>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};
