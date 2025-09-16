import React, { useEffect, useState } from 'react';

export default function Screenshots() {
  const screenshots = [
    { 
      id: 1,
      src: "/main-screenshot.png",
      title: "Build your investment city", 
      caption: "Watch your portfolio grow into a beautiful, thriving city",
    },
    { 
      id: 2,
      src: "/401k-screenshot.png",
      title: "Smart investment tracking", 
      caption: "Track your 401k and investments with intuitive visuals",
    },
    { 
      id: 3,
      src: "/charity-screenshot.png",
      title: "Make an impact", 
      caption: "Give back to causes you care about while building wealth",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const total = screenshots.length;

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % total);
    }, 5000);
    return () => clearInterval(interval);
  }, [total]);

  const goToPrevious = () => {
    setCurrentIndex((current) => (current + total - 1) % total);
  };

  const goToNext = () => {
    setCurrentIndex((current) => (current + 1) % total);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="screens" className="max-w-6xl mx-auto px-4 py-20">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="font-cinzel font-bold text-3xl sm:text-4xl text-gold-400 mb-4">
          See your portfolio come alive
        </h2>
        <p className="text-investoria-muted text-lg max-w-2xl mx-auto">
          Watch your investments transform into a beautiful, growing city
        </p>
      </div>

      {/* Clean phone mockup showcase */}
      <div className="relative max-w-6xl mx-auto">
        <div className="relative flex items-center justify-center min-h-[600px]">
          {/* Left background phone */}
          <div className="absolute left-8 lg:left-16 top-12 transform -rotate-12 scale-75 opacity-60 z-0">
            <img 
              src={screenshots[(currentIndex + 2) % total].src}
              alt={screenshots[(currentIndex + 2) % total].title}
              className="w-80 h-auto shadow-2xl rounded-3xl"
            />
          </div>
          
          {/* Right background phone */}
          <div className="absolute right-8 lg:right-16 top-12 transform rotate-12 scale-75 opacity-60 z-0">
            <img 
              src={screenshots[(currentIndex + 1) % total].src}
              alt={screenshots[(currentIndex + 1) % total].title}
              className="w-80 h-auto shadow-2xl rounded-3xl"
            />
          </div>
          
          {/* Main center phone */}
          <div className="relative z-10">
            <img 
              src={screenshots[currentIndex].src}
              alt={screenshots[currentIndex].title}
              className="w-80 lg:w-96 h-auto shadow-2xl rounded-3xl"
            />
          </div>
        </div>
        
        {/* Screenshot info */}
        <div className="mt-8 text-center">
          <h3 className="font-cinzel font-bold text-xl lg:text-2xl text-gold-400 mb-3">
            {screenshots[currentIndex].title}
          </h3>
          <p className="text-investoria-muted text-lg max-w-2xl mx-auto">
            {screenshots[currentIndex].caption}
          </p>
        </div>

        {/* Navigation controls */}
        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={goToPrevious}
            className="px-6 py-3 rounded-xl bg-green-800/60 hover:bg-green-700/60 ring-1 ring-gold-400/20 text-investoria-text font-medium transition-all duration-200 hover:ring-gold-400/40 backdrop-blur-sm"
          >
            Previous
          </button>
          
          {/* Dots indicator */}
          <div className="flex gap-3" role="tablist">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-gold-400 scale-125" 
                    : "bg-investoria-muted/40 hover:bg-investoria-muted/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={goToNext}
            className="px-6 py-3 rounded-xl bg-green-800/60 hover:bg-green-700/60 ring-1 ring-gold-400/20 text-investoria-text font-medium transition-all duration-200 hover:ring-gold-400/40 backdrop-blur-sm"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
