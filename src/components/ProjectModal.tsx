import React from 'react';
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
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end bg-black/80 backdrop-blur-md transition-opacity duration-300">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Slide-out Drawer Panel */}
      <div className="relative w-full max-w-3xl h-full bg-[#0D0D0D] border-l border-white/10 overflow-y-auto p-6 md:p-12 z-10 flex flex-col justify-between shadow-2xl animate-slide-in-right">
        
        {/* Top Bar with Close Icon */}
        <div className="flex justify-between items-center border-b border-white/10 pb-6 mb-8">
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

        {/* Gallery Grid */}
        <div className="border-t border-white/10 pt-6 mb-12">
          <h3 className="text-xs font-mono uppercase tracking-widest text-text-muted mb-4">
            GALLERY
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.gallery.map((img, idx) => (
              <div key={idx} className="aspect-[4/3] rounded-lg overflow-hidden border border-white/10">
                <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Live CTA Button */}
        {project.liveUrl && (
          <div className="pt-6 border-t border-white/10">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={onHoverStart}
              onMouseLeave={onHoverEnd}
              className="w-full py-4 bg-[#F2F0EA] text-[#0A0A0A] hover:bg-white rounded-xl text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-3 transition-colors shadow-xl"
            >
              <span>EXPLORE LIVE PROJECT</span>
              <span>↗</span>
            </a>
          </div>
        )}

      </div>
    </div>
  );
};
