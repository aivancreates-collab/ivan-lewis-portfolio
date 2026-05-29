import { useEffect, useRef } from 'react';
import bgVideo from '../../imports/website_lp_bg-highlight.mp4';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video plays on load (some browsers require this)
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Auto-play was prevented, user interaction needed
        // Video will play when user interacts with page
      });
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center md:items-end justify-center overflow-hidden bg-black">
      {/* Video Background with Cinematic Treatment */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full md:object-contain object-cover"
        style={{
          objectPosition: 'center center',
          filter: 'saturate(0.85) contrast(1.05) brightness(0.92)',
        }}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Cinematic Letterbox Bars - hidden on mobile */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-[8vh] bg-black pointer-events-none z-[5]" />
      <div className="hidden md:block absolute bottom-0 left-0 w-full h-[8vh] bg-black pointer-events-none z-[5]" />

      {/* Vignette Effect */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.5) 100%)',
        }}
      />

      {/* Dark overlay for text readability */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)',
        }}
      />

      <div className="relative z-10 text-center max-w-3xl px-6 pb-0 md:pb-0 md:px-8 w-full">
        <h1 className="text-[26px] sm:text-[40px] md:text-[48px] lg:text-[52px] leading-[1.2] font-normal italic tracking-[-0.5px] mb-4 sm:mb-12 text-white" style={{ fontFamily: 'var(--font-family-serif)' }}>
          Tools change.
          <br />
          The human question does not.
        </h1>

        <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
          <a
            href="#connect"
            className="text-[8px] sm:text-[9px] uppercase tracking-[0.5px] px-4 sm:px-5 py-2 sm:py-2.5 transition-all duration-300 bg-white text-black hover:bg-accent border-none w-auto inline-block"
            style={{ fontFamily: 'var(--font-family-mono)' }}
          >
            Initiate Project
          </a>
          <a
            href="#connect"
            className="text-[8px] sm:text-[9px] uppercase tracking-[0.5px] px-4 sm:px-5 py-2 sm:py-2.5 transition-all duration-300 border border-white text-white bg-transparent hover:bg-white hover:text-black w-auto inline-block"
            style={{ fontFamily: 'var(--font-family-mono)' }}
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
}
