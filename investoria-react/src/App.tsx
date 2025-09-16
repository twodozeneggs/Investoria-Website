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

  // Handle routing
  if (currentPath === '/terms') {
    return <TermsOfService />;
  }
  
  if (currentPath === '/privacy') {
    return <PrivacyPolicy />;
  }

  // Default landing page
  return (
    <div className="relative text-investoria-text antialiased min-h-screen">
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-800 via-green-900 to-green-1000 animate-gradient-shift"></div>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-tl from-gold-600/20 via-transparent to-green-700/30 animate-gradient-pulse"></div>
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