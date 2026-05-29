import { useState } from 'react';

export function InteractiveConnectSection() {
  const [selectedTrack, setSelectedTrack] = useState<'call' | 'enquiry'>('call');

  const ctaConfigs = {
    call: {
      text: 'Book 30-Minute Strategy Call',
      url: 'https://calendly.com/ivanlewis/30min',
      microcopy: 'Quick brief for founders and brand leaders.',
    },
    enquiry: {
      text: 'Fill Project Enquiry Form',
      url: 'https://docs.google.com/forms/d/1a9raKLvtxup6TMqBxU0cJJDh-tk7LHVs3XjM0q6cUTI/viewform',
      microcopy: 'For campaigns, strategy, creative direction, or film work.',
    },
  };

  const config = ctaConfigs[selectedTrack];

  return (
    <section className="py-16 sm:py-20 lg:py-24" id="connect">
      <div className="max-w-[900px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="mb-16">
          <span className="block mb-8 text-[9px] uppercase font-light tracking-[0.16em] text-text-secondary reveal" style={{ fontFamily: 'var(--font-family-mono)', fontWeight: 300 }}>
            CONNECT
          </span>
          <h2 className="text-2xl font-normal mb-4 reveal" style={{ fontFamily: 'var(--font-family-serif)' }}>
            Start a Conversation
          </h2>
          <p className="text-[15px] text-text-secondary max-w-[600px] mb-12 reveal" style={{ fontFamily: 'var(--font-family-serif)' }}>
            Serious enquiries only. I take on scriptwriting, creative direction, narrative strategy, and film work. For projects under ₹10L, book a call. Anything bigger, fill out an enquiry form and we'll talk through it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <label
            className={`p-6 border-2 cursor-pointer transition-all duration-300 reveal flex items-start ${
              selectedTrack === 'call' ? 'border-text bg-[rgba(232,180,184,0.1)]' : 'border-border'
            }`}
            data-interactive
          >
            <input
              type="radio"
              name="project-track"
              value="call"
              checked={selectedTrack === 'call'}
              onChange={() => setSelectedTrack('call')}
              className="mr-3 mt-1"
              style={{ width: '16px', height: '16px', cursor: 'pointer' }}
            />
            <span style={{ fontFamily: 'var(--font-family-serif)' }}>
              <strong className="text-[16px]">Strategy Call</strong>
              <div className="text-[13px] text-text-secondary mt-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Quick brief for founders and brand leaders.
              </div>
            </span>
          </label>

          <label
            className={`p-6 border-2 cursor-pointer transition-all duration-300 reveal flex items-start ${
              selectedTrack === 'enquiry' ? 'border-text bg-[rgba(232,180,184,0.1)]' : 'border-border'
            }`}
            data-interactive
          >
            <input
              type="radio"
              name="project-track"
              value="enquiry"
              checked={selectedTrack === 'enquiry'}
              onChange={() => setSelectedTrack('enquiry')}
              className="mr-3 mt-1"
              style={{ width: '16px', height: '16px', cursor: 'pointer' }}
            />
            <span style={{ fontFamily: 'var(--font-family-serif)' }}>
              <strong className="text-[16px]">Project Enquiry</strong>
              <div className="text-[13px] text-text-secondary mt-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                For campaigns, strategy, creative direction, or film work. 3-minute form.
              </div>
            </span>
          </label>
        </div>

        <div className="mt-12 pt-12 border-t border-border">
          <a
            href={config.url}
            className="inline-block text-[11px] uppercase tracking-[0.5px] px-7 py-3 bg-text text-bg mb-4 transition-all duration-300 hover:bg-accent"
            style={{ fontFamily: 'var(--font-family-mono)' }}
            target="_blank"
            rel="noopener"
          >
            {config.text}
          </a>
          <span className="block text-xs text-text-secondary mt-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            {config.microcopy}
          </span>
        </div>

        <div className="mt-16 pt-12 border-t border-border">
          <p className="text-xs opacity-70 mb-6">🔒 All details submitted are protected under automatic mutual NDA.</p>
        </div>
      </div>
    </section>
  );
}
