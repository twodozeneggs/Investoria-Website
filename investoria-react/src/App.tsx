import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import InteractiveDemo from './components/InteractiveDemo';
import Features from './components/Features';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';

// Premium Investoria Landing Page
// Combines React structure with your distinctive gold/green brand aesthetic
// Features: Premium animations, city skyline, elegant typography, and comprehensive content

export default function InvestoriaLanding() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle routing - account for GitHub Pages base path
  if (currentPath === '/Investoria-Website/terms' || currentPath === '/terms') {
    return <TermsOfService />;
  }
  
  if (currentPath === '/Investoria-Website/privacy' || currentPath === '/privacy') {
    return <PrivacyPolicy />;
  }

  // Default landing page
  return (
    <div className="relative text-investoria-text antialiased min-h-screen">
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-800 via-green-900 to-green-1000 animate-gradient-shift"></div>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-tl from-gold-600/20 via-transparent to-green-700/30 animate-gradient-pulse"></div>
        {/* Subtle city-grid texture to break up large green expanses */}
        <div className="absolute inset-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.025' stroke-width='0.5'%3E%3Cpath d='M0 20h80M0 40h80M0 60h80M20 0v80M40 0v80M60 0v80'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        {/* Radial glow in center to add depth */}
        <div className="absolute inset-0 w-full h-full" style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(31,90,52,0.4) 0%, transparent 70%)'
        }}></div>
      </div>
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <InteractiveDemo />
        <Features />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}