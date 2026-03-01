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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-green-900/90 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.4)] border-b border-white/5'
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 2xl:px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl tracking-tight flex-shrink-0"
          style={{ fontFamily: 'Cinzel Decorative, serif', fontWeight: 600, color: '#F1B23E' }}
        >
          INVESTORIA
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="px-4 py-2 rounded-lg text-investoria-muted hover:text-investoria-text hover:bg-white/5 transition-all duration-200 text-sm font-medium"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button
          onClick={() => scrollTo('waitlist')}
          className="hidden md:inline-flex rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-green-1000 font-bold px-5 py-2.5 text-sm transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-gold-400/25 ring-2 ring-gold-400/30"
        >
          Join the Waitlist
        </button>

        {/* Mobile: CTA + Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => scrollTo('waitlist')}
            className="rounded-lg bg-gradient-to-r from-gold-400 to-gold-500 text-green-1000 font-bold px-4 py-2 text-sm ring-1 ring-gold-400/30"
          >
            Join Waitlist
          </button>
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="p-2 rounded-lg text-investoria-muted hover:text-investoria-text hover:bg-white/5 transition-all duration-200"
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

      {/* Mobile dropdown menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <nav className="bg-green-900/95 backdrop-blur-md border-t border-white/5 px-4 py-3 flex flex-col gap-1">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => { scrollTo(link.id); setMenuOpen(false); }}
              className="text-left px-4 py-3 rounded-lg text-investoria-muted hover:text-investoria-text hover:bg-white/5 transition-all duration-200 text-sm font-medium"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
