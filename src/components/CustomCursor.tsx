import React, { useEffect, useState } from 'react';

interface CustomCursorProps {
  cursorText: string;
  isHovered: boolean;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ cursorText, isHovered }) => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check touch screen capabilities
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    document.body.classList.add('has-custom-cursor');

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.classList.remove('has-custom-cursor');
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Central Tiny Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-[#F2F0EA] rounded-full pointer-events-none z-[9999] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
      />

      {/* Smooth Follower Ring / Label */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2 flex items-center justify-center border border-white/40 mix-blend-difference ${
          isHovered || cursorText
            ? 'w-20 h-20 bg-white/10 backdrop-blur-sm border-white'
            : 'w-10 h-10 bg-transparent'
        }`}
        style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
      >
        {cursorText && (
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#F2F0EA] animate-fade-in">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
};
