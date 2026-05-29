export function ServicesSection() {
  const services = [
    {
      title: 'Strategy Consultation',
      description: 'Narrative diagnosis. Brand story architecture. Cultural positioning.\nFor founders and brand leaders exploring strategic direction. (Paid)',
    },
    {
      title: 'Campaign Concept',
      description: 'Narrative strategy + creative direction for campaigns, product launches, brand repositioning.\nConcept development, creative brief, visual direction.',
    },
    {
      title: 'Screenwriting & Development',
      description: 'Scripts for film, TV, branded content. Story development from seed to shooting draft.\nCharacter work, world-building, dialogue.',
    },
    {
      title: 'Film Direction',
      description: 'Directing commercials, branded films, documentaries, shorts. Full production from creative concept through post. Emphasis on cinematic storytelling and human truth.',
    },
    {
      title: 'Creative Advisory',
      description: 'Retainer-based consulting for founders, platforms, and brands. Ongoing narrative strategy, creative direction, IP development, content ecosystem design.',
    },
  ];

  return (
    <section className="py-24 bg-[rgba(232,180,184,0.03)]" id="services">
      <div className="max-w-[900px] mx-auto px-12">
        <span className="block mb-8 text-[9px] uppercase font-light tracking-[0.16em] text-text-secondary reveal" style={{ fontFamily: 'var(--font-family-mono)', fontWeight: 300 }}>
          SERVICES
        </span>

        <div className="text-base text-text-secondary mb-12 max-w-[600px] reveal" style={{ fontFamily: 'var(--font-family-serif)' }}>
          I work with brands and founders on strategy, direction, writing, and film. Every project starts with the same question: what are we trying to make people feel?
        </div>

        {services.map((service, i) => (
          <div key={i} className="p-8 border border-border mb-6 reveal">
            <h3 className="text-base mb-3 font-medium" style={{ fontFamily: 'var(--font-family-serif)' }}>
              {service.title}
            </h3>
            <p className="text-[14px] text-text-secondary leading-[1.6] whitespace-pre-line" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
