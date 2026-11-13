import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'light' | 'white';
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-10', variant = 'full' }) => {
  const isLight = variant === 'light' || variant === 'white';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Globe Emblem with GR Mark */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 160 110"
          className="w-12 h-9 md:w-14 md:h-10 drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Globe metallic grid background */}
          <ellipse
            cx="80"
            cy="55"
            rx="75"
            ry="50"
            fill="url(#globeGrad)"
            stroke="#94a3b8"
            strokeWidth="2.5"
          />
          {/* Latitude lines */}
          <ellipse cx="80" cy="55" rx="72" ry="24" stroke="#94a3b8" strokeWidth="1.5" strokeOpacity="0.75" />
          <ellipse cx="80" cy="55" rx="70" ry="10" stroke="#cbd5e1" strokeWidth="1.2" strokeOpacity="0.75" />
          <line x1="8" y1="55" x2="152" y2="55" stroke="#64748b" strokeWidth="1.5" />
          {/* Longitude lines */}
          <ellipse cx="80" cy="55" rx="35" ry="49" stroke="#94a3b8" strokeWidth="1.5" strokeOpacity="0.75" />
          <ellipse cx="80" cy="55" rx="14" ry="49" stroke="#94a3b8" strokeWidth="1.5" strokeOpacity="0.75" />
          <line x1="80" y1="6" x2="80" y2="104" stroke="#64748b" strokeWidth="1.5" />

          {/* Red aerodynamic wing / swoosh */}
          <path
            d="M 98 24 C 115 22, 142 16, 150 14 C 138 24, 116 35, 96 38 Z"
            fill="#d32f2f"
            filter="drop-shadow(0 1px 2px rgba(0,0,0,0.3))"
          />

          {/* Bold 3D Letters 'GR' */}
          <g filter="drop-shadow(0 2px 3px rgba(0,0,0,0.4))">
            {/* White outline path effect */}
            <text
              x="80"
              y="74"
              textAnchor="middle"
              fill="#0f2444"
              stroke="#ffffff"
              strokeWidth="5"
              strokeLinejoin="round"
              className="font-black italic tracking-tighter"
              style={{ fontSize: '50px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900 }}
            >
              GR
            </text>
            <text
              x="80"
              y="74"
              textAnchor="middle"
              fill="url(#blueLetterGrad)"
              className="font-black italic tracking-tighter"
              style={{ fontSize: '50px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900 }}
            >
              GR
            </text>
          </g>

          <defs>
            <radialGradient id="globeGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f1f5f9" />
              <stop offset="70%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#94a3b8" />
            </radialGradient>
            <linearGradient id="blueLetterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="45%" stopColor="#0f2444" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-extrabold tracking-tight leading-none text-base sm:text-lg md:text-xl ${
              isLight ? 'text-white' : 'text-[#0f2444]'
            }`}
          >
            Giraldo Ramírez
          </span>
        </div>
        <div className="flex items-center gap-2 mt-0.5">
          <span
            className={`text-[10px] sm:text-xs font-semibold tracking-wider uppercase ${
              isLight ? 'text-slate-300' : 'text-[#44474e]'
            }`}
          >
            Comercializadora Ltda.
          </span>
          {variant === 'full' && (
            <span className="hidden sm:inline-block text-[9px] px-1.5 py-0.2 bg-[#d32f2f]/10 text-[#d32f2f] font-bold rounded">
              NIT 900302280-2
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
