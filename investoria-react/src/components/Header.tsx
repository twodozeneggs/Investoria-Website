import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'How It Works', id: 'showcase' },
  { label: 'Try It', id: 'demo' },
  { label: 'Features', id: 'features' },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight active nav link based on scroll position
  useEffect(() => {
    const ids = ['showcase', 'demo', 'features', 'waitlist'];
    const onScroll = () => {
      const scrollY = window.scrollY + 120;
      let current = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-green-900/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
        : 'bg-green-900/60 backdrop-blur-sm'
    } border-b border-white/8`}>
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 2xl:px-8 py-3 flex items-center justify-between gap-8">

        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl tracking-tight flex-shrink-0 hover:opacity-80 transition-opacity duration-200"
          style={{ fontFamily: 'Cinzel Decorative, serif', fontWeight: 600, color: '#F1B23E' }}
        >
          INVESTORIA
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSection === link.id
                  ? 'text-gold-400 bg-gold-400/10'
                  : 'text-investoria-muted hover:text-investoria-text hover:bg-white/8'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold-400"></span>
              )}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button
          onClick={() => scrollTo('waitlist')}
          className="hidden md:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-green-1000 font-bold px-5 py-2.5 text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-gold-500/20 hover:shadow-gold-400/40 flex-shrink-0"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Join the Waitlist
        </button>

        {/* Mobile: CTA + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => scrollTo('waitlist')}
            className="rounded-lg bg-gradient-to-r from-gold-400 to-gold-500 text-green-1000 font-bold px-3 py-2 text-xs shadow-md"
          >
            Join Waitlist
          </button>
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="p-2 rounded-lg text-investoria-muted hover:text-investoria-text hover:bg-white/8 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <nav className="border-t border-white/8 px-4 py-2 flex flex-col gap-1">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => { scrollTo(link.id); setMenuOpen(false); }}
              className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSection === link.id
                  ? 'text-gold-400 bg-gold-400/10'
                  : 'text-investoria-muted hover:text-investoria-text hover:bg-white/8'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
