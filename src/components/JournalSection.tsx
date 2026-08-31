import React, { useState } from 'react';
import { articlesData, type Article } from '../data/portfolioData';
import { ArticleModal } from './ArticleModal';

interface JournalSectionProps {
  onHoverStart?: (text?: string) => void;
  onHoverEnd?: () => void;
}

export const JournalSection: React.FC<JournalSectionProps> = ({ onHoverStart, onHoverEnd }) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="blog" className="relative py-32 bg-[#0A0A0A] border-t border-white/10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Top Title & Intro */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-20">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] font-mono text-text-muted mb-4">
              06 / INSIGHTS
            </p>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black font-display tracking-tighter text-[#F2F0EA] uppercase leading-none">
              VISUAL <br />
              <span className="font-serif-italic font-normal lowercase text-6xl sm:text-8xl lg:text-9xl text-accent-beige">
                journal
              </span>
            </h2>
          </div>

          <p className="text-xs font-mono text-text-secondary leading-relaxed max-w-md border-l border-white/20 pl-4 py-1">
            A curated collection of design experiments, creative processes, frontend discoveries, and visual stories. Every project begins with an idea and evolves through relentless exploration.
          </p>
        </div>

        {/* 3 Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articlesData.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              onMouseEnter={() => onHoverStart && onHoverStart('READ')}
              onMouseLeave={() => onHoverEnd && onHoverEnd()}
              className="group cursor-pointer flex flex-col gap-6 p-6 bg-[#0D0D0D] border border-white/10 hover:border-white/30 rounded-2xl transition-all duration-500 hover:-translate-y-2 shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute top-3 left-3 px-3 py-1 bg-[#0A0A0A]/80 backdrop-blur-md rounded-full border border-white/20 text-[10px] font-mono text-text-muted">
                  {article.category}
                </div>
              </div>

              {/* Title & Metadata */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-[10px] font-mono text-text-muted">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-display tracking-tight text-[#F2F0EA] group-hover:text-white transition-colors">
                  {article.title}
                </h3>

                <p className="text-xs text-text-secondary font-light leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Reading Modal Drawer */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onHoverStart={() => onHoverStart && onHoverStart('CLOSE')}
        onHoverEnd={onHoverEnd}
      />
    </section>
  );
};
