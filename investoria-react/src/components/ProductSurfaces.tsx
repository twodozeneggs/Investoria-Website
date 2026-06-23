import { useScrollAnimation } from '../hooks/useScrollAnimation';
import AppScreenshot from './AppScreenshot';

interface Surface {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  accent: 'gold' | 'green';
  screenshot: string;
  screenshotAlt: string;
}

const surfaces: Surface[] = [
  {
    id: 'stocks',
    eyebrow: 'Stocks & ETFs',
    title: 'Real investing, made approachable',
    body: 'Invest in real companies and ETFs in plain language. Every holding has a clear identity and a place in your city — no wall of tickers, no jargon to decode first.',
    points: [
      'Build a portfolio of real stocks and ETFs',
      'Each holding maps to a building you recognize',
      'Beginner-friendly framing, never dumbed down',
    ],
    accent: 'gold',
    screenshot: '/app-screenshots/real-investing-made-approachable.png',
    screenshotAlt: 'Investoria stock detail screen — a real company with its city role explained in plain language',
  },
  {
    id: 'city',
    eyebrow: 'Portfolio City',
    title: 'Your portfolio, as a place',
    body: 'Place and arrange your buildings, add terrain and city life, and watch your portfolio become a town with real character. Your sector mix shapes the look and feel of your city.',
    points: [
      'Holdings become buildings you can place',
      'Sector mix shapes your city\u2019s character',
      'Cozy customization with terrain and city life',
    ],
    accent: 'green',
    screenshot: '/app-screenshots/your-portfolio-as-a-place.png',
    screenshotAlt: 'Investoria portfolio city view — a pixel-art city built from your real holdings',
  },
  {
    id: 'pulse',
    eyebrow: 'Pulse',
    title: 'The vital signs of your city',
    body: 'Pulse shows how your city is doing across five forces — Population, Happiness, Health, Science, and Commerce. It\u2019s a friendly way to understand your portfolio\u2019s balance, character, and progress at a glance.',
    points: [
      'Five city forces summarize your portfolio',
      'See which sides of your city are thriving or quiet',
      'Tap a force to learn the companies behind it',
    ],
    accent: 'gold',
    screenshot: '/app-screenshots/vital-signs-of-your-city.png',
    screenshotAlt: 'Investoria Pulse dashboard — five city health forces showing portfolio balance at a glance',
  },
  {
    id: 'explore',
    eyebrow: 'Explore',
    title: 'Discover without the screener',
    body: 'Explore helps you find companies, sectors, and ideas in a calm, browsable way. It\u2019s discovery for curious beginners — not a dense, intimidating stock screener.',
    points: [
      'Browse by sector, themes, and market pulse',
      'Plain-English company context, not raw data dumps',
      'Discover ideas that fit the city you\u2019re building',
    ],
    accent: 'green',
    screenshot: '/app-screenshots/discover.png',
    screenshotAlt: 'Investoria Explore screen — browse companies and sectors in a calm, beginner-friendly way',
  },
  {
    id: 'xp',
    eyebrow: 'XP & Achievements',
    title: 'Progress you earn by playing',
    body: 'Buildings level up through XP — earned by learning, placing buildings, holding over time, and unlocking achievements. Growth rewards good habits and engagement, not whether a stock ticked up today.',
    points: [
      'Buildings level up from XP, never from price',
      'Achievements for milestones like your first building and steady holding',
      'Engagement and learning drive progression',
    ],
    accent: 'gold',
    screenshot: '/app-screenshots/progress.png',
    screenshotAlt: 'Investoria XP and achievements screen — a building leveling up with a milestone celebration',
  },
];

function SurfaceRow({ surface, index }: { surface: Surface; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.12);
  const imageFirst = index % 2 === 1; // alternate layout

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Visual */}
      <div className={`${imageFirst ? 'lg:order-first' : 'lg:order-last'}`}>
        <AppScreenshot
          src={surface.screenshot}
          alt={surface.screenshotAlt}
        />
      </div>

      {/* Copy — subtle glass card for structure */}
      <div className="rounded-2xl bg-white/5 ring-1 ring-white/8 backdrop-blur-sm px-7 py-8">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300/80">{surface.eyebrow}</span>
        <h3 className="font-cinzel font-bold text-2xl sm:text-3xl text-gold-400 mt-2 mb-4">{surface.title}</h3>
        <p className="text-investoria-muted text-lg leading-relaxed mb-6">{surface.body}</p>
        <ul className="space-y-3">
          {surface.points.map((pt) => (
            <li key={pt} className="flex items-start gap-3 text-investoria-text">
              <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ProductSurfaces() {
  return (
    <section id="surfaces" className="relative">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 2xl:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="font-cinzel font-bold text-3xl sm:text-4xl text-gold-400 mb-4">Inside Investoria</h2>
          <p className="text-investoria-muted text-lg max-w-2xl mx-auto">
            The surfaces that turn a portfolio into a city you actually want to visit.
          </p>
        </div>

        <div className="space-y-20 lg:space-y-28">
          {surfaces.map((s, i) => (
            <SurfaceRow key={s.id} surface={s} index={i} />
          ))}
        </div>

        {/* Roadmap note — honest about what's a vision vs. shipped */}
        <div className="mt-20 mx-auto max-w-3xl text-center rounded-2xl bg-white/5 backdrop-blur-sm ring-1 ring-gold-400/15 px-6 py-5">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300/80">On the roadmap</span>
          <p className="text-investoria-muted mt-2 leading-relaxed">
            A retirement view — including connecting or viewing 401(k) accounts — is part of the Investoria vision and will arrive after launch.
          </p>
        </div>
      </div>
    </section>
  );
}
