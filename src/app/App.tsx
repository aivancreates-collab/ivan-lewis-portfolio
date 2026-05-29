import { useEffect, useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Grain } from './components/Grain';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { PhilosophySection } from './components/PhilosophySection';
import { SimplifiedThinkingSection } from './components/SimplifiedThinkingSection';
import { WorkSection } from './components/WorkSection';
import { ServicesSection } from './components/ServicesSection';
import { ReelSection } from './components/ReelSection';
import { AboutSection } from './components/AboutSection';
import { InteractiveConnectSection } from './components/InteractiveConnectSection';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Scroll reveal observer
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 60);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      obs.disconnect();
    };
  }, []);

  return (
    <div className="bg-bg text-text overflow-x-hidden" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <CustomCursor />
      <Grain />
      <Navigation scrolled={scrolled} />

      <Hero />

      <ReelSection />

      <PhilosophySection />

      <div className="w-full h-px bg-border my-4" />

      <WorkSection />

      <div className="w-full h-px bg-border my-4" />

      <ServicesSection />

      <div className="w-full h-px bg-border my-4" />

      <SimplifiedThinkingSection />

      <AboutSection />

      <div className="w-full h-px bg-border my-8" />

      <InteractiveConnectSection />

      <div className="w-full h-px bg-border my-8" />

      <footer className="px-12 py-12 text-center border-t border-border text-text-secondary text-xs" style={{ fontFamily: 'var(--font-family-mono)' }}>
        <span className="block my-2">Ivan Lewis</span>
        <span className="block mt-4 text-[11px] opacity-50">© 2026</span>
      </footer>
    </div>
  );
}
