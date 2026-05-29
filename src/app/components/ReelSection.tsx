export function ReelSection() {
  return (
    <section className="px-6 md:px-16 py-8 md:py-16" style={{ backgroundColor: '#0f0e0b' }} id="reel">
      <span
        className="block mb-14 text-[9px] uppercase font-light tracking-[0.16em] reveal"
        style={{
          fontFamily: 'var(--font-family-mono)',
          fontWeight: 300,
          color: '#e8e4db',
        }}
      >
        REEL
      </span>

      <div className="aspect-video flex items-center justify-center reveal" style={{ backgroundColor: '#1a1814' }}>
        <div className="text-center">
          <p
            className="text-[clamp(26px,4vw,54px)] font-normal italic leading-[1.2] tracking-[-0.01em]"
            style={{
              fontFamily: 'var(--font-family-serif)',
              color: '#e8e4db',
            }}
          >
            Twenty years.
            <br />
            One edit.
          </p>
          <p
            className="text-[9px] font-light tracking-[0.14em] mt-5"
            style={{
              fontFamily: 'var(--font-family-mono)',
              fontWeight: 300,
              color: '#a8a49b',
            }}
          >
            assembling · 2026
          </p>
        </div>
      </div>

      <div
        className="h-[0.5px] my-12 reveal"
        style={{ backgroundColor: '#4a4740' }}
      />

      <div className="mb-6 reveal">
        <span
          className="text-[9px] font-light tracking-[0.14em]"
          style={{
            fontFamily: 'var(--font-family-mono)',
            fontWeight: 300,
            color: '#e8e4db',
          }}
        >
          generated &middot; directed &middot; scripted
        </span>
      </div>

      <div className="aspect-video flex items-center justify-center reveal" style={{ backgroundColor: '#1a1814' }}>
        <div className="text-center">
          <p
            className="text-[clamp(20px,3vw,38px)] font-normal italic leading-[1.2]"
            style={{
              fontFamily: 'var(--font-family-serif)',
              color: '#e8e4db',
            }}
          >
            Made without a crew.
          </p>
        </div>
      </div>
    </section>
  );
}
