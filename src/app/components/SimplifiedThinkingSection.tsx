import { useEffect, useRef } from 'react';
import thinkingVideo from '../../imports/20589796-hd_1920_1080_60fps-1.mp4';

export function SimplifiedThinkingSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  }, []);

  const fragments = [
    {
      title: 'Timing is sight',
      text: "A story told too early feels premature. Told too late, it's a post-mortem. The mark of a good instinct is knowing which moment a culture is ready to hear something true. That's not prediction. That's listening.",
    },
    {
      title: 'Making is thinking',
      text: 'The script changes when you write it. The film changes when you direct it. Ideas live in abstraction until they hit material. Then they fight back. That resistance is where the real work starts.',
    },
    {
      title: 'Stories move people',
      text: "A brand needs permission to speak. That permission comes from being honest about what problem it actually solves, what it believes, where it falls short. The narrative isn't decoration. It's the ground the brand stands on.",
    },
    {
      title: 'Tools are tools',
      text: "Generative AI is fast. It's useful. But speed without intention is noise. The question isn't what the tool can do. It's the same question it's always been. What does this story need?",
    },
  ];

  return (
    <section className="relative py-8 md:py-16 overflow-hidden" id="thinking">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{
          objectPosition: 'center',
          filter: 'saturate(0.7) contrast(1.1) brightness(0.6) blur(1px)',
        }}
      >
        <source src={thinkingVideo} type="video/mp4" />
      </video>

      {/* Dark overlay with gradient */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 100%)',
        }}
      />

      {/* Vignette */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.4) 80%)',
        }}
      />

      <div className="relative z-10 max-w-[900px] mx-auto px-12">
        <span className="block mb-8 text-[9px] uppercase font-light tracking-[0.16em] text-white/50 reveal" style={{ fontFamily: 'var(--font-family-mono)', fontWeight: 300 }}>
          THINKING
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {fragments.map((fragment, i) => (
            <div key={i} className="p-6 border-l border-white/20 reveal">
              <div className="text-[11px] uppercase text-white/60 mb-3 tracking-wider" style={{ fontFamily: 'var(--font-family-serif)' }}>
                {fragment.title}
              </div>
              <div className="text-[15px] leading-[1.7] text-white/90" style={{ fontFamily: 'var(--font-family-serif)' }}>
                {fragment.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
