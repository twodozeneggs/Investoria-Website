import { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ProductShowcase() {
  const showcaseItems = [
    {
      id: 1,
      screenshot: "./main-screenshot.png",
      title: "Build Your Investment City",
      subtitle: "Watch your portfolio come to life",
      description: "Every stock and ETF you invest in becomes a building in your personal city. Watch your investments grow from small structures to towering skyscrapers as your portfolio expands.",
      features: [
        { text: "Visual portfolio representation", icon: "chart" },
        { text: "Real-time growth tracking", icon: "trending" }, 
        { text: "Diversification visualization", icon: "grid" }
      ]
    },
    {
      id: 2,
      screenshot: "./401k-screenshot.png", 
      title: "Smart Retirement Planning",
      subtitle: "401(k) tracking made simple",
      description: "Connect your retirement accounts and see how your long-term investments are building your future city. Track contributions, employer matches, and growth over time.",
      features: [
        { text: "401(k) integration", icon: "shield" },
        { text: "Employer match tracking", icon: "users" },
        { text: "Future projections", icon: "calendar" }
      ]
    },
    {
      id: 3,
      screenshot: "./charity-screenshot.png",
      title: "Give Back While You Grow",
      subtitle: "Impact investing simplified", 
      description: "Build not just wealth, but positive impact. See how your charitable contributions and impact investments are making a difference in your community.",
      features: [
        { text: "Charitable giving tracking", icon: "heart" },
        { text: "Impact measurement", icon: "target" },
        { text: "Community building", icon: "home" }
      ]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.2);

  // Listen for pause events from city demo
  useEffect(() => {
    const handlePauseEvent = (event: CustomEvent) => {
      const shouldPause = event.detail;
      setIsPaused(shouldPause);
      console.log('🎯 ProductShowcase slideshow:', shouldPause ? 'PAUSED' : 'RESUMED');
    };

    window.addEventListener('pauseSlideshows', handlePauseEvent as EventListener);
    return () => window.removeEventListener('pauseSlideshows', handlePauseEvent as EventListener);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % showcaseItems.length);
        setIsAnimating(false);
      }, 300);
    }, 6000); // Increased from 4000ms to 6000ms (6 seconds)

    return () => clearInterval(interval);
  }, [showcaseItems.length, isPaused]);

  const goToSlide = (index: number) => {
    if (index !== currentIndex && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  const currentItem = showcaseItems[currentIndex];

  const renderIcon = (iconType: string) => {
    const iconClass = "w-5 h-5 text-gold-400";
    
    switch (iconType) {
      case 'chart':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
          </svg>
        );
      case 'trending':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
          </svg>
        );
      case 'grid':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
        );
      case 'shield':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        );
      case 'users':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
        );
      case 'calendar':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
        );
      case 'heart':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
        );
      case 'target':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        );
      case 'home':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        );
      default:
        return (
          <div className="w-3 h-3 bg-gold-400 rounded-full"></div>
        );
    }
  };

  return (
    <section 
      ref={sectionRef}
      className={`max-w-7xl mx-auto px-4 py-20 lg:py-20 md:py-16 sm:py-12 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="relative grid lg:grid-cols-2 gap-12 items-center">
        {/* iPhone Screenshots - Left Side */}
        <div className="flex justify-center lg:justify-end">
          <img 
            src={currentItem.screenshot}
            alt={currentItem.title}
            className={`w-[480px] lg:w-[600px] h-auto transition-opacity duration-300 ${
              isAnimating ? 'opacity-0' : 'opacity-100'
            }`}
            style={{ minHeight: '400px', objectFit: 'contain' }}
          />
        </div>

        {/* Center Navigation Dots - Between Image and Text */}
        <div className="hidden lg:flex flex-col items-center justify-center gap-4 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          {showcaseItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="w-6 h-6 rounded-full transition-all duration-300 hover:scale-125"
              style={{
                backgroundColor: index === currentIndex ? 'transparent' : 'transparent',
                border: `2px solid ${index === currentIndex ? '#F1B23E' : 'rgba(241, 178, 62, 0.5)'}`,
                boxShadow: 'none'
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Content - Right Side */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Background decoration */}
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-radial from-gold-400/10 to-transparent rounded-full blur-xl pointer-events-none"></div>
          <div className="absolute top-1/2 -left-8 w-24 h-24 bg-gradient-radial from-green-700/20 to-transparent rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="relative bg-gradient-to-br from-green-800/30 via-green-900/20 to-green-1000/30 backdrop-blur-md rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
            <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
              {/* Title Section */}
              <div className="space-y-6">
                <div className="text-left">
                  <h2 className="font-cinzel font-bold text-3xl lg:text-4xl text-gold-400 leading-tight mb-2">
                    {currentItem.title}
                  </h2>
                  <h3 className="text-xl lg:text-2xl font-semibold opacity-90" style={{ color: '#F1B23E' }}>
                    {currentItem.subtitle}
                  </h3>
                </div>
                
                <p className="text-investoria-muted text-lg leading-relaxed text-left">
                  {currentItem.description}
                </p>
              </div>

              {/* Features with icons */}
              <div className="mt-10 space-y-6">
                {currentItem.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      {renderIcon(feature.icon)}
                    </div>
                    <span className="text-investoria-text font-medium text-lg">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Navigation Dots - Mobile Only */}
          <div className="flex lg:hidden justify-center mt-8 gap-3">
            {showcaseItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
              className="w-4 h-4 rounded-full transition-all duration-300 hover:scale-110"
                style={{
                  backgroundColor: 'transparent',
                  border: `2px solid ${index === currentIndex ? '#F1B23E' : 'rgba(241, 178, 62, 0.5)'}`,
                  boxShadow: 'none'
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
