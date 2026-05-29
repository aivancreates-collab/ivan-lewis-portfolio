import { useEffect } from 'react';
import oliveLogo from '../../imports/olive_new_logo_2026.svg';
import finalLogo from '../../imports/final_logo_1.jpg';

interface CurrentEngagementsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CurrentEngagementsModal({ isOpen, onClose }: CurrentEngagementsModalProps) {
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
        className="relative max-w-[700px] w-full max-h-[80vh] overflow-y-auto bg-bg p-12"
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
          Current Engagements
        </h2>
        <p className="text-[11px] uppercase tracking-wider text-text-secondary mb-8" style={{ fontFamily: 'var(--font-family-mono)' }}>
          Active 2026
        </p>

        <div className="space-y-8 text-[16px] leading-[1.8]" style={{ fontFamily: 'var(--font-family-serif)', color: '#4a4740' }}>
          <p>
            Three briefs arriving at the same time. A communications boutique in Dubai finding its footing. A spice blend learning what it stands for. A food startup deciding what kind of company it wants to become.
          </p>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-[11px] uppercase tracking-wider text-text-secondary mb-6" style={{ fontFamily: 'var(--font-family-mono)' }}>
              Work in Progress
            </p>

            <div className="grid grid-cols-2 gap-8 items-center">
              <div className="flex items-center justify-center p-6 border border-border bg-white">
                <img
                  src={oliveLogo}
                  alt="Olive Logo"
                  className="w-full h-auto max-w-[180px]"
                />
              </div>

              <div className="flex items-center justify-center p-6 border border-border bg-white">
                <img
                  src={finalLogo}
                  alt="Client Logo"
                  className="w-full h-auto max-w-[180px]"
                />
              </div>
            </div>

            <p className="text-[13px] text-text-secondary mt-6 italic text-center">
              Brand identity, narrative direction, and creative strategy for select clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
