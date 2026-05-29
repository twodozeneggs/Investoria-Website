import { useScrollAnimation } from '../hooks/useScrollAnimation';
import PlaceholderVisual from './PlaceholderVisual';

const tracks = [
  {
    title: 'New to investing',
    tag: 'Guided',
    body: 'A gentle, guided setup. Pick how hands-on you want to be, choose a starter “town theme,” and Investoria helps you build your very first portfolio.',
    detail: 'Starter themes like Tech Hub, Main Street, A Healthy Start, Industrial Core, or Steady Foundations.',
  },
  {
    title: 'I know the basics',
    tag: 'Balanced',
    body: 'A quicker path for people who’ve invested a little before. A short walkthrough of how holdings become a city, then straight into building.',
    detail: 'Less hand-holding, same cozy city loop.',
  },
  {
    title: 'Expert mode',
    tag: 'Fast',
    body: 'Skip the tutorial and jump straight in. For investors who already know their way around and just want to start building.',
    detail: 'One confirmation screen, then you’re in.',
  },
];

export default function Onboarding() {
  const { ref, isVisible } = useScrollAnimation(0.12);

  return (
    <section
      id="onboarding"
      ref={ref}
      className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent pointer-events-none" />
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 2xl:px-8 py-20 relative">
        <div className="text-center mb-14">
          <h2 className="font-cinzel font-bold text-3xl sm:text-4xl text-gold-400 mb-4">Start where you are</h2>
          <p className="text-investoria-muted text-lg max-w-2xl mx-auto">
            Investoria meets you at your level — welcoming for first-timers, quick for people who already know the basics.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Tracks */}
          <div className="space-y-4">
            {tracks.map((t, i) => (
              <div
                key={t.title}
                className="rounded-2xl bg-gradient-to-br from-green-800/30 via-green-900/20 to-green-1000/30 backdrop-blur-md ring-1 ring-gold-400/15 p-6 transition-all duration-500 hover:ring-gold-400/30"
                style={{ transitionDelay: isVisible ? `${i * 120}ms` : '0ms' }}
              >
                <div className="flex items-center justify-between gap-3 mb-2">
                  <h3 className="font-cinzel font-bold text-xl text-gold-400">{t.title}</h3>
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-gold-300 bg-gold-400/10 ring-1 ring-gold-400/25 rounded-full px-2.5 py-0.5">
                    {t.tag}
                  </span>
                </div>
                <p className="text-investoria-muted leading-relaxed">{t.body}</p>
                <p className="mt-2 text-sm text-investoria-muted/70 italic">{t.detail}</p>
              </div>
            ))}
          </div>

          {/* Visual */}
          <div className="relative lg:order-last">
            <div className="pointer-events-none absolute -top-6 -right-6 w-40 h-40 bg-gradient-radial from-gold-400/10 to-transparent rounded-full blur-2xl" />
            {/* PLACEHOLDER: swap for a real onboarding / choose-your-path screenshot */}
            <PlaceholderVisual
              label="Choose your path"
              caption="The onboarding screen where new investors pick a track and starter theme."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
