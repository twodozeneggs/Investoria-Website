
export default function Header() {
  return (
    <header className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between sm:justify-between justify-center relative z-20">
      <div className="flex items-center gap-3">
        <span className="text-2xl tracking-tight" style={{ 
          fontFamily: 'Cinzel Decorative, serif',
          fontWeight: 600,
          color: '#F1B23E'
        }}>
          INVESTORIA
        </span>
      </div>
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
        className="hidden sm:inline-flex rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-green-1000 font-bold px-6 py-3 transition-all duration-200 transform hover:-translate-y-1 shadow-2xl hover:shadow-gold-400/25 ring-2 ring-gold-400/30"
      >
        Join the Waitlist
      </button>
    </header>
  );
}
