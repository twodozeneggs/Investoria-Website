import { useScrollAnimation } from '../hooks/useScrollAnimation';
import PlaceholderVisual from './PlaceholderVisual';

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

          {/* Visual */}
          <div className="relative">
            <div className="pointer-events-none absolute -top-6 -right-6 w-40 h-40 bg-gradient-radial from-gold-400/10 to-transparent rounded-full blur-2xl" />
            {/* PLACEHOLDER: swap for a real "portfolio -> city" screenshot or animation */}
            <PlaceholderVisual
              phone={false}
              label="Holdings → city"
              caption="A real screen showing how owned stocks/ETFs map to buildings in your city."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
