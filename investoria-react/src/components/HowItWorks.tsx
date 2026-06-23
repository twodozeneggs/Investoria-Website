import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  {
    n: '1',
    title: 'Invest in real stocks & ETFs',
    body: 'Start small and build a portfolio of real companies and funds. At launch, investing happens through a partner broker-dealer — you own the actual holdings.',
  },
  {
    n: '2',
    title: 'Your holdings shape your city',
    body: 'Each supported holding becomes a building. A tech-leaning portfolio grows a different skyline than a healthcare or dividend one — your city reflects what you actually own.',
  },
  {
    n: '3',
    title: 'Play and learn to level it up',
    body: 'Buildings level up through XP — earned by learning, placing buildings, holding over time, and unlocking achievements. Buildings do not level up just because a stock price went up.',
  },
];

// Small building sprites used in the flow diagram
const FLOW_BUILDINGS = [
  { src: '/buildings/bank.webp', label: 'Bank' },
  { src: '/buildings/apartment.webp', label: 'Apartment' },
  { src: '/buildings/coffee-shop.webp', label: 'Coffee Shop' },
];

/** Arrow connector between flow steps */
function FlowArrow() {
  return (
    <div className="flex flex-col items-center py-1" aria-hidden>
      <div className="w-px h-5 bg-gradient-to-b from-gold-400/40 to-gold-400/20" />
      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="text-gold-400/50">
        <path d="M1 1L6 7L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

/** The three-step visual loop on the right side of the section */
function HowItWorksFlow() {
  return (
    <div className="flex flex-col items-center w-full max-w-sm mx-auto select-none">

      {/* Step 1 — Invest */}
      <div className="w-full rounded-2xl bg-white/5 ring-1 ring-gold-400/20 p-4 flex items-center gap-4 backdrop-blur-sm">
        <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gold-400/12 ring-1 ring-gold-400/25 flex items-center justify-center">
          <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <div className="min-w-0">
          <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gold-300/60 mb-0.5">Step 1</div>
          <div className="font-cinzel font-bold text-gold-400 text-sm leading-tight">Invest in stocks & ETFs</div>
          <div className="text-xs text-investoria-muted/80 mt-0.5 leading-relaxed">Real companies. Real holdings.</div>
        </div>
      </div>

      <FlowArrow />

      {/* Step 2 — City */}
      <div className="w-full rounded-2xl bg-white/5 ring-1 ring-green-400/20 p-4 flex items-center gap-4 backdrop-blur-sm">
        {/* Mini building parade */}
        <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-green-500/10 ring-1 ring-green-400/20 flex items-center justify-center overflow-hidden p-1">
          <div className="flex items-end gap-0.5 w-full h-full">
            {FLOW_BUILDINGS.map((b) => (
              <img
                key={b.src}
                src={b.src}
                alt={b.label}
                className="flex-1 object-contain"
                style={{ imageRendering: 'pixelated' }}
                draggable={false}
              />
            ))}
          </div>
        </div>
        <div className="min-w-0">
          <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-green-400/60 mb-0.5">Step 2</div>
          <div className="font-cinzel font-bold text-gold-400 text-sm leading-tight">Holdings become buildings</div>
          <div className="text-xs text-investoria-muted/80 mt-0.5 leading-relaxed">Your city reflects what you own.</div>
        </div>
      </div>

      <FlowArrow />

      {/* Step 3 — Level Up */}
      <div className="w-full rounded-2xl bg-white/5 ring-1 ring-gold-400/20 p-4 flex items-center gap-4 backdrop-blur-sm">
        <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-gold-400/12 ring-1 ring-gold-400/25 flex items-center justify-center relative">
          <svg className="w-6 h-6 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {/* Level badge */}
          <span className="absolute -top-1.5 -right-1.5 text-[9px] font-bold bg-gold-400 text-green-1000 rounded-full w-4 h-4 flex items-center justify-center leading-none">3</span>
        </div>
        <div className="min-w-0">
          <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gold-300/60 mb-0.5">Step 3</div>
          <div className="font-cinzel font-bold text-gold-400 text-sm leading-tight">Learn and level up</div>
          <div className="text-xs text-investoria-muted/80 mt-0.5 leading-relaxed">XP from learning, holding, and achievements.</div>
        </div>
      </div>

      {/* Closing note — product promise */}
      <p className="mt-4 text-[11px] text-center text-investoria-muted/55 leading-relaxed italic max-w-[260px]">
        Buildings grow through play — never because a stock price moved.
      </p>
    </div>
  );
}

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation(0.12);

  return (
    <section
      id="how"
      ref={ref}
      className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      {/* subtle band for separation */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent pointer-events-none" />
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 2xl:px-8 py-20 relative">
        <div className="text-center mb-14">
          <h2 className="font-cinzel font-bold text-3xl sm:text-4xl text-gold-400 mb-4">How Investoria works</h2>
          <p className="text-investoria-muted text-lg max-w-2xl mx-auto">
            Three simple ideas power the whole experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <ol className="space-y-6">
            {steps.map((s, i) => (
              <li
                key={s.n}
                className="flex gap-5 transition-all duration-700"
                style={{
                  transitionDelay: isVisible ? `${i * 140}ms` : '0ms',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-12px)',
                }}
              >
                <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-gold-400 to-gold-500 text-green-1000 font-bold text-lg shadow-lg shadow-gold-500/20">
                  {s.n}
                </div>
                <div>
                  <h3 className="font-cinzel font-bold text-xl text-gold-400 mb-1.5">{s.title}</h3>
                  <p className="text-investoria-muted leading-relaxed">{s.body}</p>
                </div>
              </li>
            ))}

            <li className="pl-16">
              <p className="text-sm text-investoria-muted/70 italic">
                The short version: your portfolio decides <span className="text-gold-300">what</span> your city is made of;
                your habits decide <span className="text-gold-300">how</span> it grows.
              </p>
            </li>
          </ol>

          {/* Three-step flow diagram — no screenshot dependency */}
          <div
            className="relative"
            style={{
              transitionDelay: isVisible ? '200ms' : '0ms',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 700ms, transform 700ms',
            }}
          >
            <div className="pointer-events-none absolute -top-6 -right-6 w-40 h-40 bg-gradient-radial from-gold-400/10 to-transparent rounded-full blur-2xl" />
            <HowItWorksFlow />
          </div>
        </div>
      </div>
    </section>
  );
}
