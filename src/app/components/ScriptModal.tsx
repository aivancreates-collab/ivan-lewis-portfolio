import { useEffect } from 'react';

interface ScriptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ScriptModal({ isOpen, onClose }: ScriptModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center px-4"
      onClick={onClose}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
    >
      <div
        className="relative max-w-[800px] w-full max-h-[80vh] overflow-y-auto bg-bg p-12"
        onClick={(e) => e.stopPropagation()}
        style={{ fontFamily: 'var(--font-family-serif)' }}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[24px] text-text-secondary hover:text-text transition-colors"
          style={{ fontFamily: 'var(--font-family-mono)' }}
        >
          ×
        </button>

        <h2 className="text-[28px] mb-2" style={{ fontFamily: 'var(--font-family-serif)' }}>
          The Last Message
        </h2>
        <p className="text-[11px] uppercase tracking-wider text-text-secondary mb-8" style={{ fontFamily: 'var(--font-family-mono)' }}>
          Registered Screenplay · 18 pages
        </p>

        <div className="space-y-6 text-[16px] leading-[1.8]" style={{ fontFamily: 'var(--font-family-serif)', color: '#4a4740' }}>
          <p>
            A story about the damage done by things left unsaid, and what it means when a service offers to say them for you.
          </p>

          <p className="text-[15px] italic border-l pl-5" style={{ borderColor: 'rgba(25, 23, 20, 0.14)', color: '#2a2620' }}>
            "This technology does not create the emotions people could not express. It just removes the excuse for not finding the words."
          </p>

          <p>
            The first draft made the service the villain. That was too easy. The real question was not whether it was ethical. It was whether the son deserved to know which messages were real. The script got harder once the villain disappeared.
          </p>

          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-[13px] text-text-secondary mb-4">
              <strong>Genre:</strong> Drama<br />
              <strong>Length:</strong> 18 pages<br />
              <strong>Registration:</strong> SWA India, Feb 2026<br />
              <strong>Status:</strong> Seeking production
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <a
            href="mailto:lastgoodtaste@gmail.com"
            className="inline-block text-[11px] uppercase tracking-[0.5px] px-6 py-3 bg-text text-bg hover:bg-text-secondary transition-colors"
            style={{ fontFamily: 'var(--font-family-mono)' }}
          >
            Connect for Script
          </a>
        </div>
      </div>
    </div>
  );
}
