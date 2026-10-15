import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'symbol' | 'compact';
  showRule?: boolean;
}

export const LogoSymbol: React.FC<{ className?: string; size?: number }> = ({ 
  className = "w-10 h-10", 
  size = 48 
}) => {
  return (
    <svg
      viewBox="0 0 200 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size}
      height={size}
      aria-label="Símbolo oficial Jaine Lima Advogada - Balança da Justiça e Monograma JL"
    >
      <defs>
        {/* Metallic luxury gold gradient for the letter J */}
        <linearGradient id="officialGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF4D9" />
          <stop offset="25%" stopColor="#ECD59E" />
          <stop offset="55%" stopColor="#C8A866" />
          <stop offset="85%" stopColor="#AB8B45" />
          <stop offset="100%" stopColor="#876828" />
        </linearGradient>
        <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#C5A869" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* ======================================================== */}
      {/* 1. WHITE BALANCE SCALE (BEAM, HOOKS, CHAINS & PANS)     */}
      {/* ======================================================== */}

      {/* Horizontal Beam */}
      <line x1="48" y1="36" x2="152" y2="36" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" />

      {/* Center Pivot Bearing (with yin-yang / crescent dot detail) */}
      <circle cx="100" cy="36" r="6" stroke="#FFFFFF" strokeWidth="2.2" fill="#1C060B" />
      <path 
        d="M 100 32 A 4 4 0 0 1 100 40 A 2 2 0 0 1 100 36 A 2 2 0 0 0 100 32" 
        fill="#FFFFFF" 
      />
      <circle cx="100" cy="34" r="0.9" fill="#1C060B" />
      <circle cx="100" cy="38" r="0.9" fill="#FFFFFF" />

      {/* Left Top Ring / Loop & Hook */}
      <circle cx="48" cy="29" r="4.2" stroke="#FFFFFF" strokeWidth="2.2" fill="none" />
      <path d="M 48 36 V 39" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />

      {/* Right Top Ring / Loop & Hook */}
      <circle cx="152" cy="29" r="4.2" stroke="#FFFFFF" strokeWidth="2.2" fill="none" />
      <path d="M 152 36 V 39" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />

      {/* Left Suspension Cords (Inverted V) */}
      <line x1="48" y1="38" x2="22" y2="88" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="48" y1="38" x2="74" y2="88" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />

      {/* Right Suspension Cords (Inverted V) */}
      <line x1="152" y1="38" x2="126" y2="88" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="152" y1="38" x2="178" y2="88" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />

      {/* Left Scale Pan (White bowl with transparent inner crescent cutout) */}
      <path
        d="M 20 88 H 76 C 76 107, 20 107, 20 88 Z M 25 89 Q 48 98 71 89 Q 48 103 25 89 Z"
        fill="#FFFFFF"
        fillRule="evenodd"
      />

      {/* Right Scale Pan (White bowl with transparent inner crescent cutout) */}
      <path
        d="M 124 88 H 180 C 180 107, 124 107, 124 88 Z M 129 89 Q 152 98 175 89 Q 152 103 129 89 Z"
        fill="#FFFFFF"
        fillRule="evenodd"
      />

      {/* ======================================================== */}
      {/* 2. WHITE LETTER 'L' (BASE BAR & RIGHT VERTICAL STEM)    */}
      {/* ======================================================== */}
      {/* 
        The white 'L' is positioned behind/alongside the golden 'J':
        - Its vertical stem runs on the right side of the J stem
        - At the bottom, it turns at a clean 90° angle to the right
      */}
      <path
        d="M 103 92 H 112 V 143 H 156 V 154 H 96 C 96 148, 103 148, 103 143 Z"
        fill="#FFFFFF"
      />

      {/* ======================================================== */}
      {/* 3. GOLDEN LETTER 'J' (METALLIC VERTICAL STEM & HOOK)   */}
      {/* ======================================================== */}
      {/* 
        The golden 'J' starts right under the center pivot,
        descends vertically, then curves gracefully to the left
      */}
      <path
        d="M 94 42 H 108 V 122 C 108 143, 90 156, 68 156 C 53 156, 46 146, 46 130 H 58 C 58 140, 62 145, 69 145 C 84 145, 94 135, 94 120 Z"
        fill="url(#officialGoldGrad)"
        filter="url(#goldGlow)"
      />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  variant = 'full',
  showRule = false
}) => {
  if (variant === 'symbol') {
    return <LogoSymbol className={className} />;
  }

  return (
    <div className={`flex items-center gap-3.5 group select-none ${className}`}>
      {/* Delicate leading gold line if requested */}
      {showRule && (
        <span className="hidden lg:block w-8 h-[1px] bg-gradient-to-r from-transparent to-[#C5A869]/70" />
      )}

      {/* Intertwined Scales & JL Monogram */}
      <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
        <LogoSymbol className="w-9 h-9 sm:w-11 sm:h-11" />
      </div>

      {/* Typographic Wordmark */}
      <div className="flex flex-col tracking-wider">
        <span 
          className="font-display text-lg sm:text-2xl font-semibold tracking-[0.14em] text-gold-gradient uppercase leading-none transition-colors"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Jaine Lima
        </span>
        <span 
          className="text-[9px] sm:text-[10px] tracking-[0.38em] text-[#D6CCBA]/90 font-medium uppercase mt-1 pl-0.5 leading-tight"
        >
          Advogada
        </span>
      </div>
    </div>
  );
};

export default Logo;
