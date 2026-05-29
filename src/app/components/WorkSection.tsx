import { useState } from 'react';
import { ScriptModal } from './ScriptModal';
import { CurrentEngagementsModal } from './CurrentEngagementsModal';

interface TrailPoint {
  label: string;
  content: string;
  type?: 'question' | 'underneath' | 'pivot' | 'thing';
  pullquote?: string;
  pullquoteSource?: string;
  links?: { text: string; href: string }[];
  status?: string;
}

interface WorkEntry {
  id: string;
  title: string;
  question: string;
  format: string;
  date: string;
  trail?: TrailPoint[];
  placeholder?: boolean;
}

const works: WorkEntry[] = [
  {
    id: 'e1',
    title: 'The Last Message',
    question: 'What happens to the words people were saving for later, and never sent?',
    format: 'screenplay',
    date: 'feb 2026',
    trail: [
      {
        label: 'the seed',
        content:
          "A conversation about grief. Someone mentioned they still texted their dead father's number sometimes. Not expecting a reply. Just because the habit had not stopped.",
      },
      {
        label: 'the question',
        content: 'What if the reply came?',
        type: 'question',
      },
      {
        label: 'the material',
        content:
          'News stories about grief tech startups. The quiet industry forming around loss and digital presence. None of it felt like the real thing yet.',
        pullquote:
          'This technology does not create the emotions people could not express. It just removes the excuse for not finding the words.',
        pullquoteSource: 'observation, 2025',
      },
      {
        label: 'underneath',
        content:
          'A story about the damage done by things left unsaid, and what it means when a service offers to say them for you.',
        type: 'underneath',
      },
      {
        label: 'the pivot',
        content:
          'The first draft made the service the villain. That was too easy. The real question was not whether it was ethical. It was whether the son deserved to know which messages were real. The script got harder once the villain disappeared.',
        type: 'pivot',
      },
      {
        label: 'the thing',
        content: 'Registered screenplay. 18 pages. SWA India, Feb 2026.',
        type: 'thing',
        links: [
          { text: 'connect for script', href: 'mailto:lastgoodtaste@gmail.com' },
          { text: 'the service now exists', href: 'https://www.hereafter.ai' },
        ],
        status: 'seeking production',
      },
    ],
  },
  {
    id: 'e2',
    title: 'Maati Kona Chi?',
    question: 'Who decides what gets to grow, and what gets cut?',
    format: 'short film · marathi',
    date: 'nov 2025',
    trail: [
      {
        label: 'the seed',
        content:
          'Watching a child lie flat on a garden, face inches from the earth, completely absorbed in an earthworm. The adult world moving around her, indifferent.',
      },
      {
        label: 'the question',
        content: "Whose soil is it? And does the grass have a say?",
        type: 'question',
      },
      {
        label: 'the material',
        content:
          'The idea that wildness is not disorder. That something growing beyond its assigned boundary might simply be alive.',
        pullquote:
          'Bichara gavat… vaadhlay ki khush hot asel.\nPoor grass… it must feel happy when it grows.',
        pullquoteSource: 'Chinni, six years old, in the script',
      },
      {
        label: 'underneath',
        content:
          'Belonging. Who inherits a place. What gets preserved and what gets managed out of existence.',
        type: 'underneath',
      },
      {
        label: 'the pivot',
        content:
          'The script kept wanting to be written in English. Resisted it each time. The question only existed properly in Marathi. Some things cannot be translated without losing the argument.',
        type: 'pivot',
      },
      {
        label: 'the thing',
        content: 'Registered screenplay. 9 pages. SWA India, Nov 2025. Ivan Lewis writing and directing.',
        type: 'thing',
        status: 'pre-production 2026',
      },
    ],
  },
  {
    id: 'e3',
    title: 'Current Engagements',
    question: 'What does a brand sound like before it knows what it is?',
    format: 'consulting',
    date: 'ongoing',
    trail: [
      {
        label: 'the seed',
        content:
          'A communications boutique in Dubai finding its footing. A spice blend learning what it stands for. A food startup deciding what kind of company it wants to become.',
      },
      {
        label: 'the question',
        content: 'What does a brand sound like before it knows what it is?',
        type: 'question',
      },
      {
        label: 'underneath',
        content:
          'Every brand problem is a story problem.',
        type: 'underneath',
      },
      {
        label: 'the thing',
        content: 'Three clients. Three objectives.',
        type: 'thing',
        status: 'active 2026',
      },
    ],
  },
  {
    id: 'e4',
    title: 'Something is forming.',
    question: 'Not ready to be named yet.',
    format: '—',
    date: '—',
    placeholder: true,
  },
];

export function WorkSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [isScriptModalOpen, setIsScriptModalOpen] = useState(false);
  const [isCurrentEngagementsModalOpen, setIsCurrentEngagementsModalOpen] = useState(false);

  const toggleWork = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <ScriptModal isOpen={isScriptModalOpen} onClose={() => setIsScriptModalOpen(false)} />
      <CurrentEngagementsModal isOpen={isCurrentEngagementsModalOpen} onClose={() => setIsCurrentEngagementsModalOpen(false)} />
      <section className="px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24" id="studio">
      <span
        className="block mb-10 sm:mb-14 text-[9px] uppercase font-light tracking-[0.16em] reveal"
        style={{ fontFamily: 'var(--font-family-mono)', fontWeight: 300, color: 'rgba(25, 23, 20, 0.35)' }}
      >
        STUDIO
      </span>

      {works.map((work) => (
        <div
          key={work.id}
          className="border-t-[0.5px] last:border-b-[0.5px] reveal"
          style={{ borderColor: 'rgba(25, 23, 20, 0.14)' }}
        >
          <div
            className={`py-[2.6rem] transition-all duration-[380ms] ${
              work.placeholder ? 'cursor-default pointer-events-none' : 'cursor-pointer hover:pl-3'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
            onClick={() => !work.placeholder && toggleWork(work.id)}
            data-interactive
          >
            <h2
              className="text-[clamp(22px,2.8vw,34px)] font-normal tracking-[-0.015em] leading-[1.15] mb-2"
              style={{
                fontFamily: 'var(--font-family-serif)',
                color: work.placeholder ? 'rgba(25, 23, 20, 0.35)' : '#191714'
              }}
            >
              {work.title}
            </h2>

            <p
              className={`text-[15px] italic leading-[1.5] mb-[1.4rem] ${work.placeholder ? 'opacity-50' : ''}`}
              style={{
                fontFamily: 'var(--font-family-serif)',
                color: work.placeholder ? 'rgba(25, 23, 20, 0.35)' : '#3a3630'
              }}
            >
              {work.question}
            </p>

            <div className="flex justify-between items-center">
              <span
                className="text-[9px] font-light tracking-[0.12em]"
                style={{ fontFamily: 'var(--font-family-mono)', fontWeight: 300, color: 'rgba(25, 23, 20, 0.35)' }}
              >
                {work.format}
              </span>

              <div className="flex items-center gap-6">
                <span
                  className="text-[9px] font-light tracking-[0.1em]"
                  style={{ fontFamily: 'var(--font-family-mono)', fontWeight: 300, color: 'rgba(25, 23, 20, 0.35)' }}
                >
                  {work.date}
                </span>
                {!work.placeholder && (
                  <span
                    className={`text-[12px] font-light inline-block transition-all duration-[420ms] ${
                      openId === work.id ? 'rotate-45' : ''
                    }`}
                    style={{
                      fontFamily: 'var(--font-family-mono)',
                      fontWeight: 300,
                      color: openId === work.id ? '#4a4740' : 'rgba(25, 23, 20, 0.35)',
                      transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)',
                    }}
                  >
                    +
                  </span>
                )}
              </div>
            </div>
          </div>

          {work.trail && openId === work.id && (
            <div className="pb-12">
              {work.trail.map((point, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 sm:grid-cols-[130px_1fr] gap-4 sm:gap-8 py-5 sm:py-7 border-t-[0.5px] items-start"
                  style={{
                    borderColor: point.type === 'thing' ? 'rgba(25, 23, 20, 0.14)' : 'rgba(25, 23, 20, 0.08)',
                  }}
                >
                  <span
                    className="text-[9px] font-light tracking-[0.12em] pt-[3px] leading-[1.5]"
                    style={{ fontFamily: 'var(--font-family-mono)', fontWeight: 300, color: 'rgba(25, 23, 20, 0.35)' }}
                  >
                    {point.label}
                  </span>

                  <div>
                    {point.pullquote && (
                      <>
                        <p
                          className="text-[16px] border-l pl-5 mt-2 leading-[1.72] whitespace-pre-line"
                          style={{
                            fontFamily: 'var(--font-family-serif)',
                            color: '#2a2620',
                            borderColor: 'rgba(25, 23, 20, 0.14)'
                          }}
                        >
                          {point.pullquote}
                        </p>
                        <span
                          className="text-[9px] font-light tracking-[0.08em] mt-2 block pl-5"
                          style={{ fontFamily: 'var(--font-family-mono)', fontWeight: 300, color: 'rgba(25, 23, 20, 0.35)' }}
                        >
                          {point.pullquoteSource}
                        </span>
                        <br />
                        <br />
                      </>
                    )}

                    <p
                      className={`leading-[1.72] ${
                        point.type === 'question'
                          ? 'text-[20px] italic tracking-[-0.005em]'
                          : point.type === 'underneath'
                          ? 'text-[16px] tracking-[0.04em] leading-[1.72]'
                          : 'text-[16px]'
                      }`}
                      style={{
                        fontFamily: 'var(--font-family-serif)',
                        fontWeight: 'normal',
                        color: point.type === 'question' ? '#191714' : '#2a2620'
                      }}
                    >
                      {point.content}
                    </p>

                    {point.links && (
                      <div className="mt-3">
                        {point.links.map((link, j) => (
                          <a
                            key={j}
                            href={link.href}
                            target={link.href.startsWith('http') ? '_blank' : undefined}
                            rel={link.href.startsWith('http') ? 'noopener' : undefined}
                            className="inline-block text-[10px] font-light tracking-[0.08em] no-underline border-b-[0.5px] pb-[1px] mr-5 mt-3 transition-all duration-200"
                            style={{
                              fontFamily: 'var(--font-family-mono)',
                              fontWeight: 300,
                              color: '#7a7770',
                              borderColor: 'rgba(25, 23, 20, 0.14)'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = '#191714';
                              e.currentTarget.style.borderColor = '#4a4740';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = '#7a7770';
                              e.currentTarget.style.borderColor = 'rgba(25, 23, 20, 0.14)';
                            }}
                          >
                            {link.text}
                          </a>
                        ))}
                      </div>
                    )}

                    {point.status && (
                      <span
                        className="inline-block text-[9px] font-light tracking-[0.1em] border-[0.5px] px-2 py-[3px] mt-4 cursor-pointer transition-colors hover:bg-text hover:text-bg"
                        style={{
                          fontFamily: 'var(--font-family-mono)',
                          fontWeight: 300,
                          color: 'rgba(25, 23, 20, 0.35)',
                          borderColor: 'rgba(25, 23, 20, 0.14)'
                        }}
                        onClick={() => {
                          if (point.status === 'active 2026') {
                            setIsCurrentEngagementsModalOpen(true);
                          }
                        }}
                      >
                        {point.status}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
    </>
  );
}
