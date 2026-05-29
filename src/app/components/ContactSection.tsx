export function ContactSection() {
  const links = [
    { label: 'lastgoodtaste@gmail.com', href: 'mailto:lastgoodtaste@gmail.com' },
    { label: 'linkedin', href: 'https://linkedin.com/in/ivan-lewis/' },
    { label: 'letterboxd', href: 'https://letterboxd.com' },
    { label: 'instagram', href: 'https://instagram.com' },
    { label: 'substack · coming', href: '#' },
  ];

  return (
    <section
      className="px-16 py-32 pb-28 grid lg:grid-cols-2 gap-32 items-end border-t-[0.5px] border-rule"
      id="connect"
    >
      <div className="reveal">
        <h2
          className="text-[clamp(38px,6vw,74px)] font-normal leading-[1.05] tracking-[-0.02em] text-ink"
          style={{ fontFamily: 'var(--font-family-serif)' }}
        >
          If something here
          <br />
          stayed with you,
          <br />
          say hello.
        </h2>
      </div>

      <div className="pb-2 reveal">
        <p
          className="text-[16px] italic text-ink-muted leading-[1.68] mb-10 max-w-[380px]"
          style={{ fontFamily: 'var(--font-family-serif)' }}
        >
          The best projects start with one honest question. If you have one, send it.
        </p>

        <ul className="list-none">
          {links.map((link, i) => (
            <li key={i} className="border-t-[0.5px] border-rule last:border-b-[0.5px]">
              <a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener' : undefined}
                className="flex justify-between items-center py-[1.1rem] text-[11px] font-light tracking-[0.08em] text-ink-mid no-underline transition-all duration-[250ms] ease-out hover:text-ink hover:pl-2 group"
                style={{ fontFamily: 'var(--font-family-mono)', fontWeight: 300 }}
              >
                {link.label}
                <span className="text-[14px] opacity-0 -translate-x-2 transition-all duration-[250ms] ease-out group-hover:opacity-100 group-hover:translate-x-0">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
