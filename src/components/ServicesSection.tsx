import React, { useState } from 'react';
import { servicesData } from '../data/portfolioData';

interface ServicesSectionProps {
  onHoverStart?: (text?: string) => void;
  onHoverEnd?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onHoverStart,
  onHoverEnd,
}) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="services"
      onMouseMove={handleMouseMove}
      className="relative py-32 bg-[#0A0A0A] overflow-hidden border-b border-white/10"
    >
      {/* Red Architectural Wireframe Overlay Background */}
      <div className="absolute inset-0 pointer-events-none opacity-25 wireframe-grid" />

      {/* Floating Hover Image Preview Follower */}
      {activeImage && (
        <div
          className="fixed pointer-events-none z-[80] w-64 md:w-80 h-44 md:h-56 rounded-xl overflow-hidden shadow-2xl border border-white/20 transition-transform duration-200 ease-out hidden lg:block -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
          }}
        >
          <img
            src={activeImage}
            alt="Service Preview"
            className="w-full h-full object-cover filter contrast-110 brightness-90 animate-fade-in"
          />
        </div>
      )}

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Top Service Paragraph & Large LEGACY / SERVICES heading */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-20">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] font-mono text-text-muted mb-4">
              02 / CAPABILITIES
            </p>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Design attracts attention. Development brings it to life. I combine both to create digital experiences that not only look exceptional but also feel fast, intuitive, and memorable.
            </p>
          </div>

          <h2 className="text-6xl sm:text-8xl font-black font-display tracking-tighter text-[#F2F0EA]/10 uppercase leading-none">
            SERVICES
          </h2>
        </div>

        {/* Interactive Services List */}
        <div className="flex flex-col border-t border-white/10">
          {servicesData.map((service) => (
            <div
              key={service.number}
              onMouseEnter={() => {
                setActiveImage(service.image);
                if (onHoverStart) onHoverStart('VIEW');
              }}
              onMouseLeave={() => {
                setActiveImage(null);
                if (onHoverEnd) onHoverEnd();
              }}
              className="group py-8 md:py-12 border-b border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 transition-all duration-300 hover:bg-white/[0.02] px-4 -mx-4 rounded-lg"
            >
              {/* Number & Title */}
              <div className="flex items-baseline gap-6">
                <span className="font-mono text-xs md:text-sm text-text-muted group-hover:text-white transition-colors">
                  {service.number}
                </span>
                <div>
                  <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-[#F2F0EA] group-hover:translate-x-4 transition-transform duration-300">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-text-muted mt-1 uppercase tracking-widest">
                    {service.subtitle}
                  </p>
                </div>
              </div>

              {/* Description & Points */}
              <div className="max-w-md flex flex-col gap-3">
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.points.map((pt, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-text-muted group-hover:border-white/20 group-hover:text-text-primary transition-colors"
                    >
                      {pt}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
