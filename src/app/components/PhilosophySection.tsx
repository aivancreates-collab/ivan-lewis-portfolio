export function PhilosophySection() {
  return (
    <section className="py-8 md:py-16" id="philosophy">
      <div className="max-w-[900px] mx-auto px-12">
        <span className="block mb-8 text-[9px] uppercase font-light tracking-[0.16em] text-text-secondary reveal" style={{ fontFamily: 'var(--font-family-mono)', fontWeight: 300 }}>
          PHILOSOPHY
        </span>
        <blockquote className="text-[18px] leading-[1.8] italic text-text max-w-[700px] mx-auto reveal" style={{ fontFamily: 'var(--font-family-serif)' }}>
          "Generative AI can create a thousand images in seconds. But it doesn't know why a child lies face-down in the grass, completely absorbed in an earthworm. It doesn't know why we keep texting numbers belonging to people who are gone.
          <br /><br />
          <strong style={{ fontWeight: 600 }}>We use intelligence to accelerate execution. We rely on the human question to know what we're making.</strong>"
        </blockquote>
      </div>
    </section>
  );
}
