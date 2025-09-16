
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Features() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);
  
  const features = [
    {
      title: "Real Stock Investing",
      body: "Invest in real stocks with real-time market data and commission-free trading.",
      icon: "trending"
    },
    {
      title: "Build Your Portfolio Town",
      body: "Each stock you own becomes a building in your virtual town, growing as your investments grow.",
      icon: "home"
    },
    {
      title: "Visual Performance Tracking",
      body: "See your portfolio performance at a glance through your town's visual representation.",
      icon: "chart"
    },
    {
      title: "Learn As You Play",
      body: "Master investing fundamentals through engaging gameplay and interactive tutorials.",
      icon: "star"
    },
  ];

  const renderIcon = (iconType: string) => {
    const iconClass = "w-8 h-8 text-green-700";
    
    switch (iconType) {
      case 'trending':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
          </svg>
        );
      case 'home':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        );
      case 'chart':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
          </svg>
        );
      case 'star':
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section 
      id="features" 
      ref={sectionRef}
      className={`py-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
      {/* Section header */}
      <div className="text-center mb-16">
        <h2 className="font-cinzel font-bold text-3xl sm:text-4xl text-gold-400 mb-4">
          Investing Meets Gaming
        </h2>
        <p className="text-investoria-muted text-lg max-w-2xl mx-auto">
          Investoria transforms how you view and interact with your investments
        </p>
      </div>

      {/* Features grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <article
            key={feature.title}
            className={`group transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              transitionDelay: isVisible ? `${index * 150}ms` : '0ms' 
            }}
          >
            <div className="bg-white rounded-2xl p-8 h-full transition-all duration-500 hover:transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-gold-400/20 shadow-lg border border-gray-100 hover:border-gold-400/30 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gold-50/30 cursor-pointer">
              {/* Feature icon */}
              <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <div className="p-4 rounded-xl bg-gold-400/10 group-hover:bg-gold-400/20 transition-colors duration-300">
                  {renderIcon(feature.icon)}
                </div>
              </div>
              
              {/* Feature content */}
              <h3 className="font-bold text-xl text-gray-800 group-hover:text-gold-600 mb-4 text-center leading-tight transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 leading-relaxed text-center transition-colors duration-300">
                {feature.body}
              </p>
            </div>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}
