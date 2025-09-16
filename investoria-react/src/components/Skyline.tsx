import React from 'react';

export default function Skyline() {
  return (
    <div className="absolute left-0 right-0 bottom-0 h-56 overflow-hidden pointer-events-none">
      {/* Skyline SVG - adapted from your original design */}
      <svg 
        className="absolute bottom-0 w-full h-full opacity-90" 
        viewBox="0 0 1440 220" 
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="cityGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--green-800)" />
            <stop offset="100%" stopColor="var(--green-900)" />
          </linearGradient>
        </defs>
        
        {/* Background fill */}
        <rect width="1440" height="220" fill="url(#cityGradient)" />
        
        {/* City buildings - using your original coordinates */}
        <g fill="var(--green-1000)">
          <rect x="40" y="60" width="80" height="160" />
          <rect x="140" y="90" width="60" height="130" />
          <rect x="220" y="40" width="90" height="180" />
          <rect x="330" y="100" width="70" height="120" />
          <rect x="420" y="75" width="85" height="145" />
          <rect x="520" y="120" width="65" height="100" />
          <rect x="600" y="80" width="95" height="140" />
          <rect x="710" y="110" width="70" height="110" />
          <rect x="800" y="55" width="85" height="165" />
          <rect x="900" y="95" width="60" height="125" />
          <rect x="980" y="70" width="80" height="150" />
          <rect x="1080" y="105" width="70" height="115" />
          <rect x="1170" y="50" width="95" height="170" />
          <rect x="1280" y="90" width="70" height="130" />
        </g>
        
        {/* Building highlights for premium effect */}
        <g fill="var(--gold-600)" opacity="0.3">
          <rect x="220" y="40" width="4" height="180" />
          <rect x="800" y="55" width="4" height="165" />
          <rect x="1170" y="50" width="4" height="170" />
        </g>
      </svg>

      {/* Animated construction crane */}
      <div className="absolute right-[8%] bottom-32 w-44 h-32 hidden sm:block">
        <div className="crane-arm absolute top-5 left-0 right-0 h-1.5 bg-gold-600 origin-left animate-swing"></div>
        <div className="crane-hook absolute top-5 left-1/2 w-0.5 h-16 bg-gold-700"></div>
      </div>
    </div>
  );
}
