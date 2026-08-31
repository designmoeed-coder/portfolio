import React from 'react';
import type { Article } from '../data/portfolioData';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onHoverStart,
  onHoverEnd,
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end bg-black/80 backdrop-blur-md transition-opacity duration-300">
      {/* Click backdrop to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Slide-out Panel */}
      <div className="relative w-full max-w-2xl h-full bg-[#0D0D0D] border-l border-white/10 overflow-y-auto p-6 md:p-12 z-10 flex flex-col justify-between shadow-2xl animate-slide-in-right">
        
        {/* Top Header */}
        <div className="flex justify-between items-center border-b border-white/10 pb-6 mb-8">
          <span className="text-xs font-mono tracking-widest text-text-muted">
            {article.category} — {article.readTime}
          </span>

          <button
            onClick={onClose}
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
            className="w-10 h-10 rounded-full border border-white/20 hover:border-white flex items-center justify-center text-white transition-all duration-300"
            aria-label="Close article drawer"
          >
            ✕
          </button>
        </div>

        {/* Hero Image */}
        <div className="w-full aspect-[16/9] rounded-xl overflow-hidden border border-white/10 mb-8">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </div>

        {/* Article Meta */}
        <div className="flex flex-col gap-4 mb-8">
          <span className="text-xs font-mono text-text-muted">{article.date}</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-[#F2F0EA]">
            {article.title}
          </h2>
          <p className="text-sm font-semibold text-text-secondary border-l-2 border-white/30 pl-4 py-1">
            {article.excerpt}
          </p>
        </div>

        {/* Article Content Paragraphs */}
        <div className="flex flex-col gap-6 text-sm text-text-secondary leading-relaxed font-light mb-12 border-t border-white/10 pt-6">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Author Footer */}
        <div className="pt-6 border-t border-white/10 flex justify-between items-center text-xs font-mono text-text-muted">
          <span>WRITTEN BY</span>
          <span className="font-bold text-[#F2F0EA]">{article.author}</span>
        </div>

      </div>
    </div>
  );
};
