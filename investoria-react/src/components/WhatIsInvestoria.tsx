import { useScrollAnimation } from '../hooks/useScrollAnimation';

const pillars = [
  {
    title: 'A city-builder',
    body: 'Every company and ETF you own becomes a building. Your holdings shape the type, variety, and character of your city — your portfolio, made tangible.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0H5m0 0H3m6-12h.01M9 16h.01M15 12h.01M15 16h.01" />
    ),
  },
  {
    title: 'A market-learning layer',
    body: 'Discover sectors and companies through your city instead of a wall of tickers. Pulse and Explore turn “what do I even own?” into something you can actually see and understand.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    ),
  },
  {
    title: 'A light strategy game',
    body: 'Level up buildings, earn achievements, and grow the five forces of your city. Progress comes from learning and good habits — not from chasing a stock price.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    ),
  },
];

export default function WhatIsInvestoria() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section
      id="what"
      ref={ref}
      className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 2xl:px-8 py-20">
        <div className="text-center mb-14">
          <h2 className="font-cinzel font-bold text-3xl sm:text-4xl text-gold-400 mb-4">What is Investoria?</h2>
          <p className="text-investoria-muted text-lg max-w-3xl mx-auto leading-relaxed">
            Investoria is a real investing app wrapped in a cozy city you build. You invest in stocks and ETFs, and your portfolio
            comes to life as a place — not a spreadsheet. It's designed for first-time investors, without feeling childish.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="relative bg-gradient-to-br from-green-800/30 via-green-900/20 to-green-1000/30 backdrop-blur-md rounded-3xl p-8 ring-1 ring-gold-400/15 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-1 hover:ring-gold-400/30"
              style={{ transitionDelay: isVisible ? `${i * 120}ms` : '0ms' }}
            >
              <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold-400/10 ring-1 ring-gold-400/20">
                <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {p.icon}
                </svg>
              </div>
              <h3 className="font-cinzel font-bold text-xl text-gold-400 mb-3">{p.title}</h3>
              <p className="text-investoria-muted leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
