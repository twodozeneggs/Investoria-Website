
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-6xl mx-auto px-4 py-20 text-sm border-t border-gold-400/20">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
        {/* Brand */}
        <div className="flex items-center gap-4">
          <span className="font-cinzel font-bold text-gold-400 text-lg">
            © {currentYear} INVESTORIA
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8" aria-label="Footer navigation">
          <button 
            onClick={() => {
              window.history.pushState({}, '', '/terms');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
            className="text-investoria-muted hover:text-gold-400 transition-colors duration-200 font-medium cursor-pointer"
          >
            Terms
          </button>
          <button 
            onClick={() => {
              window.history.pushState({}, '', '/privacy');
              window.dispatchEvent(new PopStateEvent('popstate'));
            }}
            className="text-investoria-muted hover:text-gold-400 transition-colors duration-200 font-medium cursor-pointer"
          >
            Privacy
          </button>
          <a 
            href="mailto:simon@buildinvestoria.com" 
            className="text-investoria-muted hover:text-gold-400 transition-colors duration-200 flex items-center gap-2 font-medium"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Contact
          </a>
        </nav>
      </div>

      {/* Bottom disclaimer */}
      <div className="mt-12 pt-8 border-t border-green-800/30 text-center">
        <p className="text-investoria-muted/70 text-xs max-w-3xl mx-auto leading-relaxed">
          Investoria is pre-launch. When investing goes live, it will be offered through a partner broker-dealer — Investoria is a
          technology and education platform, not a broker-dealer or investment adviser. Nothing here is financial advice, and investing
          involves risk, including the possible loss of principal. Always consider your own circumstances before investing.
        </p>
      </div>
    </footer>
  );
}
