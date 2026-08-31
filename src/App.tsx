import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';

import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { HeaderNav } from './components/HeaderNav';
import { StatusBadge } from './components/StatusBadge';
import { FullscreenMenu } from './components/FullscreenMenu';
import { MarqueeLedger } from './components/MarqueeLedger';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { StatsSection } from './components/StatsSection';
import { ServicesSection } from './components/ServicesSection';
import { StoryTransitionSection } from './components/StoryTransitionSection';
import { WorkSection } from './components/WorkSection';
import { ProcessSection } from './components/ProcessSection';
import { JournalSection } from './components/JournalSection';
import { ContactCTASection } from './components/ContactCTASection';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isCursorHovered, setIsCursorHovered] = useState(false);

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleHoverStart = (text?: string) => {
    setIsCursorHovered(true);
    if (text) setCursorText(text);
  };

  const handleHoverEnd = () => {
    setIsCursorHovered(false);
    setCursorText('');
  };

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#F2F0EA] selection:bg-[#E6E4DC] selection:text-[#0A0A0A]">
      {/* Site Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Custom Mouse Cursor */}
      <CustomCursor cursorText={cursorText} isHovered={isCursorHovered} />

      {/* Fixed Top Header Navigation */}
      <HeaderNav
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        onHoverStart={() => handleHoverStart(isMenuOpen ? 'CLOSE' : 'MENU')}
        onHoverEnd={handleHoverEnd}
      />

      {/* Floating Top Right Status Badge ("ONLINE" / "LET'S CONNECT") */}
      <StatusBadge
        onOpenContact={() => setIsContactOpen(true)}
        onHoverStart={() => handleHoverStart('CONNECT')}
        onHoverEnd={handleHoverEnd}
      />

      {/* Fullscreen Overlay Menu */}
      <FullscreenMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onHoverStart={() => handleHoverStart('NAVIGATE')}
        onHoverEnd={handleHoverEnd}
      />

      {/* Main Content Area */}
      <main className="relative z-10">
        <HeroSection onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd} />
        <MarqueeLedger />
        <AboutSection />
        <StatsSection />
        <ServicesSection onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd} />
        <StoryTransitionSection />
        <WorkSection onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd} />
        <ProcessSection />
        <JournalSection onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd} />
        <ContactCTASection onHoverStart={handleHoverStart} onHoverEnd={handleHoverEnd} />
      </main>

      {/* Footer */}
      <Footer onHoverStart={() => handleHoverStart('LINK')} onHoverEnd={handleHoverEnd} />

      {/* Direct Contact Modal Drawer */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        onHoverStart={() => handleHoverStart('CLOSE')}
        onHoverEnd={handleHoverEnd}
      />
    </div>
  );
};

export default App;
