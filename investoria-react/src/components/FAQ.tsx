import { useScrollAnimation } from '../hooks/useScrollAnimation';

const faqs = [
  {
    q: 'Is Investoria live yet?',
    a: 'Not yet — Investoria is pre-launch. You can join the waitlist now, and we’ll invite you when the app is ready. Joining doesn’t open an account or move any money.',
  },
  {
    q: 'Who actually holds my money and investments?',
    a: 'Investoria is a technology and education platform, not a broker-dealer. When investing goes live, your trades and holdings will be handled by a partner broker-dealer — a licensed firm (member FINRA/SIPC) — not by Investoria itself.',
  },
  {
    q: 'Do buildings grow when my stocks go up?',
    a: 'No. Your holdings decide what your city is made of, but buildings level up through XP — earned by learning, placing buildings, holding over time, and unlocking achievements. A rising stock price doesn’t level up a building.',
  },
  {
    q: 'How is this different from Robinhood or Acorns?',
    a: 'Most investing apps show you a list and a line chart. Investoria turns your portfolio into a city you build and understand — a cozy, game-like layer that helps beginners actually learn what they own, without feeling childish.',
  },
  {
    q: 'Is this real investing or just a simulation?',
    a: 'The vision is real investing in real stocks and ETFs, with the city as the way you see and learn about your portfolio. It’s not a fake-money simulator and it’s not a plain brokerage app — it’s both investing and a city-builder.',
  },
  {
    q: 'Will I be able to see my 401(k) or retirement accounts?',
    a: 'A retirement view — including connecting or viewing 401(k) accounts — is part of the Investoria roadmap and is planned for after launch.',
  },
  {
    q: 'Is it good for complete beginners?',
    a: 'Yes. There’s a guided “New to investing” path that helps you set up your first portfolio with a starter theme, plus “I know the basics” and “Expert” paths if you want to move faster.',
  },
  {
    q: 'What does it cost?',
    a: 'Pricing isn’t finalized while we’re pre-launch. We’ll be upfront about any costs before you ever invest — no surprises.',
  },
];

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="faq"
      ref={ref}
      className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      <div className="max-w-3xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="font-cinzel font-bold text-3xl sm:text-4xl text-gold-400 mb-4">Questions, answered</h2>
          <p className="text-investoria-muted text-lg max-w-2xl mx-auto">
            The honest answers to what people ask before joining.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl bg-white/5 backdrop-blur-sm ring-1 ring-gold-400/15 px-6 py-4 transition-all duration-300 open:ring-gold-400/30 open:bg-white/[0.07]"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-investoria-text marker:hidden">
                <span>{item.q}</span>
                <svg
                  className="w-5 h-5 flex-shrink-0 text-gold-400 transition-transform duration-300 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-3 text-investoria-muted leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
