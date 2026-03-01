
export default function Skyline() {
  return (
    <div className="absolute left-0 right-0 bottom-0 h-56 overflow-hidden pointer-events-none">
      {/* Skyline SVG */}
      <svg 
        className="absolute bottom-0 w-full h-full" 
        viewBox="0 0 1440 220" 
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="cityGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(11,42,21,0)" />
            <stop offset="60%" stopColor="rgba(11,42,21,0.7)" />
            <stop offset="100%" stopColor="rgba(11,42,21,0.95)" />
          </linearGradient>
          <linearGradient id="buildingFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0B2A15" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0B2A15" stopOpacity="0.95" />
          </linearGradient>
        </defs>
        
        {/* City buildings */}
        <g fill="url(#buildingFade)">
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
          {/* Extra buildings for wide screens */}
          <rect x="1380" y="75" width="60" height="145" />
        </g>

        {/* Tiny windows - warm gold glints */}
        <g fill="#F1B23E" opacity="0.35">
          <rect x="55" y="80" width="6" height="5" />
          <rect x="72" y="80" width="6" height="5" />
          <rect x="55" y="100" width="6" height="5" />
          <rect x="72" y="100" width="6" height="5" />
          <rect x="235" y="60" width="6" height="5" />
          <rect x="252" y="60" width="6" height="5" />
          <rect x="235" y="80" width="6" height="5" />
          <rect x="610" y="95" width="6" height="5" />
          <rect x="630" y="95" width="6" height="5" />
          <rect x="815" y="70" width="6" height="5" />
          <rect x="835" y="70" width="6" height="5" />
          <rect x="815" y="90" width="6" height="5" />
          <rect x="1185" y="65" width="6" height="5" />
          <rect x="1205" y="65" width="6" height="5" />
          <rect x="1185" y="85" width="6" height="5" />
        </g>

        {/* Gold accent lines on tall buildings */}
        <g fill="#C18417" opacity="0.4">
          <rect x="220" y="40" width="3" height="180" />
          <rect x="800" y="55" width="3" height="165" />
          <rect x="1170" y="50" width="3" height="170" />
        </g>

        {/* Gradient overlay to fade skyline into background */}
        <rect width="1440" height="220" fill="url(#cityGradient)" />
      </svg>

      {/* Animated construction crane */}
      <div className="absolute right-[8%] bottom-32 w-44 h-32 hidden sm:block">
        <div className="crane-arm absolute top-5 left-0 right-0 h-1.5 bg-gold-600 origin-left animate-swing"></div>
        <div className="crane-hook absolute top-5 left-1/2 w-0.5 h-16 bg-gold-700"></div>
      </div>
    </div>
  );
}
