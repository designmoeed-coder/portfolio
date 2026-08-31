import React, { useState } from 'react';
import { projectsData, type Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

interface WorkSectionProps {
  onHoverStart?: (text?: string) => void;
  onHoverEnd?: () => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({ onHoverStart, onHoverEnd }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="relative py-32 bg-[#0A0A0A] border-t border-white/10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-20">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] font-mono text-text-muted mb-4">
              04 / PORTFOLIO
            </p>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black font-display tracking-tighter text-[#F2F0EA] uppercase leading-none">
              SELECTED <br />
              <span className="text-text-muted">WORK</span>
            </h2>
          </div>

          <p className="text-xs font-mono text-text-secondary uppercase tracking-widest max-w-xs border-l border-white/20 pl-4">
            CLICK ANY PROJECT TO UNLOCK FULL CASE STUDY & SPECIFICATIONS.
          </p>
        </div>

        {/* Projects Vertical Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              onMouseEnter={() => onHoverStart && onHoverStart('VIEW')}
              onMouseLeave={() => onHoverEnd && onHoverEnd()}
              className="group cursor-pointer flex flex-col gap-6 p-6 bg-[#0D0D0D] border border-white/10 hover:border-white/40 rounded-2xl transition-all duration-500 hover:-translate-y-2 shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/10">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Step Counter Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#0A0A0A]/80 backdrop-blur-md rounded-full border border-white/20 text-xs font-mono font-bold text-[#F2F0EA]">
                  {project.number}
                </div>

                {/* Hover Reveal Action Icon */}
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white text-[#0A0A0A] flex items-center justify-center font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl">
                  ↗
                </div>
              </div>

              {/* Text Info */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs font-mono text-text-muted uppercase">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold font-display tracking-tight text-[#F2F0EA] group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal Drawer */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onHoverStart={() => onHoverStart && onHoverStart('CLOSE')}
        onHoverEnd={onHoverEnd}
      />
    </section>
  );
};
