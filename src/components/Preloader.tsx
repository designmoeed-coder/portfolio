import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Smooth percentage increment
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const handleStart = () => {
    setIsFading(true);
    setTimeout(() => {
      onComplete();
    }, 800);
  };

  return (
    <div
      onClick={isReady ? handleStart : undefined}
      className={`fixed inset-0 z-[1000] bg-[#0A0A0A] flex flex-col justify-between p-8 md:p-16 select-none transition-all duration-800 cubic-bezier(0.77, 0, 0.175, 1) ${
        isFading ? '-translate-y-full opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Top Header info */}
      <div className="flex justify-between items-center text-xs font-mono tracking-widest text-text-muted">
        <span>ABDUL MOEED PORTFOLIO</span>
        <span>2026 EDITION</span>
      </div>

      {/* Center Main Counter */}
      <div className="my-auto flex flex-col items-center justify-center text-center gap-6">
        <h1 className="text-8xl sm:text-9xl md:text-[14rem] font-extrabold font-display tracking-tighter text-[#F2F0EA]">
          {count.toString().padStart(3, '0')}
        </h1>

        {/* Prompt */}
        <div className="h-10 flex items-center justify-center">
          {isReady ? (
            <button
              onClick={handleStart}
              className="px-6 py-3 bg-[#111111] hover:bg-[#F2F0EA] hover:text-[#0A0A0A] border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase text-[#F2F0EA] transition-all duration-300 animate-bounce shadow-xl"
            >
              CLICK ANYWHERE TO ACTIVATE THE EXPERIENCE
            </button>
          ) : (
            <p className="text-xs tracking-widest uppercase text-text-muted animate-pulse">
              LOADING DIGITAL EXPERIENCE...
            </p>
          )}
        </div>
      </div>

      {/* Bottom Progress Line */}
      <div className="w-full bg-white/10 h-0.5 relative overflow-hidden rounded-full">
        <div
          className="absolute top-0 left-0 h-full bg-[#F2F0EA] transition-all duration-150 ease-out"
          style={{ width: `${count}%` }}
        />
      </div>
    </div>
  );
};
