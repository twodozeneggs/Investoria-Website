import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">

      <div className="max-w-6xl mx-auto px-4 py-12 pb-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center lg:text-left">
          <h1 className="font-cinzel font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
            <span className="text-gold-400 drop-shadow-lg">Build your city.</span>
            <br />
            <span className="text-investoria-text">Grow your wealth.</span>
          </h1>
          
          <p className="mt-6 text-investoria-muted text-lg lg:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
            Investoria turns investing into a living city. Each stock or ETF you choose becomes a building that grows and evolves over time — teaching you real investing habits without the jargon.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a
              href="#waitlist"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-green-1000 font-bold px-8 py-4 transition-all duration-200 transform hover:-translate-y-1 shadow-2xl hover:shadow-gold-400/25 text-lg ring-2 ring-gold-400/30"
            >
              Join the Waitlist
            </a>
            <a 
              href="#features" 
              className="text-investoria-muted hover:text-gold-400 font-medium transition-colors duration-200 flex items-center gap-2 group"
            >
              Learn more
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          
          <p className="mt-6 text-xs text-investoria-muted/70">
            Educational & fun. No financial advice.
          </p>
        </div>

        <div className="lg:order-last">
          <img 
            src="/Demo-collection.png" 
            alt="Investoria app demo collection showing multiple phone screens"
            className="w-full max-w-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
