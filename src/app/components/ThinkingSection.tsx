import { useState } from 'react';

interface ThinkingItem {
  id: string;
  status: string;
  title: string;
  paragraphs: string[];
}

const thoughts: ThinkingItem[] = [
  {
    id: 't1',
    status: 'on observation',
    title: "The goal isn't to see more places.",
    paragraphs: [
      "The goal isn't to see more places. It's to see the same things more completely.",
      "I used to look outward constantly. The next city, the next horizon, the next experience someone else had already mapped. Now I'm more selective. The same street, the same light, the same ordinary moment, but this time seen through my own eyes. Not borrowed meaning. Mine.",
      "Everything that matters was already there. I just wasn't looking.",
    ],
  },
  {
    id: 't2',
    status: 'on making',
    title: "Creation isn't invention. It's filtration.",
    paragraphs: [
      "Creation isn't invention. It's filtration.",
      "You absorb until you're saturated. Then it comes out, but it's no longer the thing you took in. It's passed through you. It carries your shape now.",
      "Not everything that emerges will be remarkable. That's not the point. The point is that it's yours. And the work that endures is the work that in its most stripped-down form is also the most obvious. The soul of it right there. Nothing hiding behind craft.",
      "Human-centred. Human-made. That's what survives everything else.",
    ],
  },
  {
    id: 't3',
    status: 'on culture and timing',
    title: 'We may be the last generation that trusted institutions completely.',
    paragraphs: [
      'We may be the last generation that trusted institutions completely, and the first to watch them fail in real time.',
      "Everyone's calling it a cultural shift. I think it's something older. A reckoning. We built machines to extend our thinking and somewhere along the way confused the extension for the thought itself. The internet gave us more information than any civilisation in history, and we used it mostly to confirm what we already believed.",
      "But something is changing. Not because the machines failed us. Because we're beginning to remember that we always knew which way was true north. We just forgot to look.",
    ],
  },
  {
    id: 't4',
    status: 'on collaboration',
    title: 'The rooms where ideas die all have one thing in common.',
    paragraphs: [
      "The rooms where ideas die all have one thing in common. Play isn't permitted there.",
      "Not play as distraction. Play as method. The willingness to ask why not, what if, let's try, without needing permission or guarantee. The best people I've worked with treat every brief as a question worth being genuinely curious about. They borrow from everywhere. They break patterns without apology. They stay children long enough to find the thing the adults have been walking past.",
      "Ideas aren't scarce. The rooms that welcome them are.",
    ],
  },
  {
    id: 't5',
    status: 'on story',
    title: "We don't watch stories to understand other people.",
    paragraphs: [
      "We don't watch stories to understand other people. We watch to see ourselves wearing a better mask.",
      "The audience needs characters to suffer so their own nervous system can feel something real for two hours. Our empathy isn't selfless, it's transactional. We care about a character precisely as long as we can project our own fears and desires onto them. The moment they make a choice that doesn't serve our self-image, we discard them.",
      "What the storyteller is really selling is a structured lie. The real world is indifferent and chaotic. People die for no reason. Good intentions fail. The audience can't hold that. So they pay to inhabit a reality where suffering has purpose and everything happens for a reason, even in tragedy.",
      "The best stories know this. They give the audience the lie they need, and somewhere inside it, the truth they weren't ready to ask for.",
    ],
  },
];

export function ThinkingSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleThinking = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="px-16 py-24 grid lg:grid-cols-[220px_1fr] gap-20 items-start" id="thinking">
      <div className="sticky top-24 reveal">
        <span
          className="text-[9px] font-light tracking-[0.16em] text-ink-faint"
          style={{ fontFamily: 'var(--font-family-mono)', fontWeight: 300 }}
        >
          thinking
        </span>
      </div>

      <ul className="list-none">
        {thoughts.map((thought, index) => (
          <li
            key={thought.id}
            className={`border-t-[0.5px] border-rule last:border-b-[0.5px] cursor-pointer reveal ${
              openId === thought.id ? 'open' : ''
            }`}
            data-interactive
          >
            <div
              className="py-8 flex justify-between items-start gap-8 transition-all duration-[350ms] hover:pl-3"
              style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
              onClick={() => toggleThinking(thought.id)}
            >
              <div className="flex-1">
                <span
                  className="text-[9px] font-light tracking-[0.1em] text-ink-faint block mb-2"
                  style={{ fontFamily: 'var(--font-family-mono)', fontWeight: 300 }}
                >
                  {thought.status}
                </span>

                <h3
                  className="text-[18px] font-normal leading-[1.35] text-ink"
                  style={{ fontFamily: 'var(--font-family-serif)' }}
                >
                  {thought.title}
                </h3>
              </div>

              <span
                className={`text-[12px] font-light text-ink-faint flex-shrink-0 pt-[2px] inline-block transition-all duration-[420ms] ${
                  openId === thought.id ? 'rotate-45 text-ink-mid' : ''
                }`}
                style={{
                  fontFamily: 'var(--font-family-mono)',
                  fontWeight: 300,
                  transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)',
                }}
              >
                +
              </span>
            </div>

            <div className={`pb-10 ${openId === thought.id ? 'block' : 'hidden'}`}>
              {thought.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[16px] italic text-ink-muted leading-[1.75] mb-4 last:mb-0"
                  style={{ fontFamily: 'var(--font-family-serif)' }}
                >
                  {p}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
