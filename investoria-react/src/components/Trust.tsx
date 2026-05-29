import { useScrollAnimation } from '../hooks/useScrollAnimation';

const points = [
  {
    title: 'Investoria isn’t the broker',
    body: 'Investoria is a technology and education platform. When investing goes live, trades and accounts will be handled by a partner broker-dealer — the licensed firm that actually holds securities.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
    ),
  },
  {
    title: 'A regulated path to investing',
    body: 'At launch, investing is intended to be offered through a FINRA-registered partner broker-dealer (member FINRA/SIPC). We’ll share specifics as partnerships are confirmed — no vague promises in the meantime.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
  },
  {
    title: 'Your privacy, respected',
    body: 'We collect only what we need to run Investoria, use reputable infrastructure for storage and sign-in, and encrypt data in transit. We don’t sell your personal financial information.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    ),
  },
  {
    title: 'Honest about pre-launch',
    body: 'Investoria isn’t live yet. Joining the waitlist doesn’t open an account or move any money — it just saves your spot so we can invite you when we launch.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
];

export default function Trust() {
  const { ref, isVisible } = useScrollAnimation(0.12);

  const goTo = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <section
      id="trust"
      ref={ref}
      className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 2xl:px-8 py-20">
        <div className="text-center mb-14">
          <h2 className="font-cinzel font-bold text-3xl sm:text-4xl text-gold-400 mb-4">Built for real money, built on trust</h2>
          <p className="text-investoria-muted text-lg max-w-2xl mx-auto">
            Investing is serious, even when it’s fun. Here’s how we think about safety and honesty before launch.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {points.map((p, i) => (
            <div
              key={p.title}
              className="flex gap-4 rounded-2xl bg-gradient-to-br from-green-800/30 via-green-900/20 to-green-1000/30 backdrop-blur-md ring-1 ring-gold-400/15 p-6 transition-all duration-500 hover:ring-gold-400/30"
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : '0ms' }}
            >
              <div className="flex-shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gold-400/10 ring-1 ring-gold-400/20">
                <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {p.icon}
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-investoria-text mb-1.5">{p.title}</h3>
                <p className="text-investoria-muted leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-investoria-muted/70">
          Read our{' '}
          <button onClick={() => goTo('/terms')} className="text-gold-400 hover:underline cursor-pointer">Terms</button>
          {' '}and{' '}
          <button onClick={() => goTo('/privacy')} className="text-gold-400 hover:underline cursor-pointer">Privacy Policy</button>.
          Investing involves risk, including possible loss of principal. Nothing here is financial advice.
        </p>
      </div>
    </section>
  );
}
