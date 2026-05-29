import ivanImage from '../../imports/WhatsApp_Image_2026-01-07_at_1.23.05_PM__1_-1.jpeg';

export function AboutSection() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden bg-black" id="about">
      {/* Cinematic background gradient */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1814 50%, #0f0e0b 100%)',
        }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-12 sm:gap-16 lg:gap-20 items-center">
          {/* Cinematic Image Frame */}
          <div className="relative reveal">
            {/* Film frame border effect */}
            <div className="relative p-3 bg-gradient-to-br from-white/5 to-white/[0.02]">
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={ivanImage}
                  alt="Ivan Lewis"
                  className="w-full h-full block object-cover"
                  loading="lazy"
                  style={{
                    filter: 'saturate(0.95) contrast(1.08) brightness(0.95)',
                    objectPosition: 'center center',
                  }}
                />
                {/* Subtle vignette on image */}
                <div
                  className="absolute top-0 left-0 w-full h-full pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.3) 100%)',
                  }}
                />
              </div>
              {/* Film sprocket holes effect (top) */}
              <div className="absolute top-0 left-0 right-0 h-3 flex justify-between items-center px-1">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1 bg-black/40 rounded-sm" />
                ))}
              </div>
              {/* Film sprocket holes effect (bottom) */}
              <div className="absolute bottom-0 left-0 right-0 h-3 flex justify-between items-center px-1">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1 bg-black/40 rounded-sm" />
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-[15px] sm:text-[16px] leading-[1.85] text-white/75 mb-5 sm:mb-6 reveal" style={{ fontFamily: 'var(--font-family-serif)' }}>
              Humans fascinate me. Why we remember certain stories and forget everything else. Why some ideas land and others vanish the moment the meeting ends.
            </p>

            <p className="text-[15px] sm:text-[16px] leading-[1.85] text-white/75 mb-5 sm:mb-6 reveal" style={{ fontFamily: 'var(--font-family-serif)' }}>
              That question is what I'm actually working on. Campaigns, scripts, television, strategy. Those are just the forms it takes.
            </p>

            <p className="text-[15px] sm:text-[16px] leading-[1.85] text-white/75 mb-5 sm:mb-6 reveal" style={{ fontFamily: 'var(--font-family-serif)' }}>
              I direct. I write. I think through the strategy. Usually in the same room.
            </p>

            <p className="text-[15px] sm:text-[16px] leading-[1.85] text-white/75 mb-5 sm:mb-6 reveal" style={{ fontFamily: 'var(--font-family-serif)' }}>
              Based in Mumbai. Small roster, on purpose. I work with people I actually want to spend time with, which so far has produced the best results.
            </p>

            <p className="text-[15px] sm:text-[16px] leading-[1.85] text-white/75 mb-8 sm:mb-10 reveal" style={{ fontFamily: 'var(--font-family-serif)' }}>
              If something here stayed with you, say hello.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap gap-6 sm:gap-8 text-xs reveal" style={{ fontFamily: 'var(--font-family-mono)' }}>
              <a href="https://www.linkedin.com/in/ivan-lewis/" target="_blank" rel="noopener" className="text-white/60 no-underline transition-colors duration-300 hover:text-white border-b border-white/20 hover:border-white pb-1">
                LinkedIn
              </a>
              <a href="https://www.instagram.com/itzivanl/" target="_blank" rel="noopener" className="text-white/60 no-underline transition-colors duration-300 hover:text-white border-b border-white/20 hover:border-white pb-1">
                Instagram
              </a>
              <a href="https://substack.com/@lastgoodtaste" target="_blank" rel="noopener" className="text-white/60 no-underline transition-colors duration-300 hover:text-white border-b border-white/20 hover:border-white pb-1">
                Substack
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
