export default function Hero() {
  return (
    <section className="relative min-h-[88vh] xl:min-h-[78vh] 2xl:min-h-[68vh] flex items-center overflow-hidden">

      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 2xl:px-8 py-8 sm:py-12 grid lg:grid-cols-2 gap-8 lg:gap-12 2xl:gap-20 items-center relative z-10">
        <div className="text-center lg:text-left">
          {/* Honest pre-launch status pill */}
          <span className="inline-flex items-center gap-2 rounded-full bg-gold-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-gold-300 ring-1 ring-gold-400/30 animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            Pre-launch · Join the waitlist
          </span>

          <h1 className="mt-4 font-cinzel font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl tracking-tight leading-[1.1] animate-fade-in">
            <span className="text-gold-400 drop-shadow-lg">Build your city.</span>
            <br />
            <span className="text-investoria-text">Grow your wealth.</span>
          </h1>
          
          <p className="mt-4 sm:mt-6 text-investoria-muted text-base sm:text-lg lg:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Investoria turns real investing into a city you build. The stocks and ETFs you own shape your city — and your buildings
            level up as you learn, stay invested, and earn achievements. It's a cozy city-builder, a market-learning layer, and a light strategy game in one.
          </p>
          
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => {
                const waitlistSection = document.getElementById('waitlist');
                if (waitlistSection) {
                  waitlistSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-green-1000 font-bold px-6 sm:px-8 py-3 sm:py-4 transition-all duration-200 transform hover:-translate-y-1 shadow-2xl hover:shadow-gold-400/25 text-base sm:text-lg ring-2 ring-gold-400/30 w-auto max-w-xs mx-auto sm:mx-0 sm:w-auto"
            >
              Join the Waitlist
            </button>
            <button 
              onClick={() => {
                const howSection = document.getElementById('how');
                if (howSection) {
                  howSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
              className="text-investoria-muted hover:text-gold-400 font-medium transition-colors duration-200 flex items-center gap-2 group"
            >
              See how it works
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <p className="mt-6 text-xs text-investoria-muted/70">
            Pre-launch. Investing will be offered through a partner broker-dealer. Not financial advice.
          </p>
        </div>

        {/* Hero city visual — direct, no decorative frame */}
        <div className="lg:order-last flex items-center justify-center">
          <div className="relative w-full max-w-[580px] mx-auto">
            {/* Ambient city glow — sits behind the image */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-10 rounded-full blur-3xl opacity-45"
              style={{ background: 'radial-gradient(ellipse at 55% 45%, rgba(212,175,55,0.25) 0%, rgba(31,90,52,0.35) 50%, transparent 80%)' }}
            />
            <img
              src="/app-screenshots/bigcity.png"
              alt="Investoria city view — a pixel-art city built from your real investment portfolio"
              loading="eager"
              decoding="async"
              className="relative w-full rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.55)] object-cover"
            />
            {/* Caption badge — over the image, never clipped */}
            <div className="absolute top-4 right-4 rounded-xl bg-black/55 backdrop-blur-sm px-3 py-1.5 ring-1 ring-gold-400/30 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse flex-shrink-0" />
              <span className="text-[11px] font-semibold text-gold-300 whitespace-nowrap">Your city. Your portfolio.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
