import React from 'react';
import { authorityIndicators } from '../data/practiceAreas';

export const AuthoritySection: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-24 bg-[#140508] border-y border-[#C5A869]/20 overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#240C12]/40 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Headline & Positioning */}
        <div className="max-w-3xl mb-16 lg:mb-20 text-left">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#C5A869]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A869] font-medium">
              Posicionamento & Princípios
            </span>
          </div>

          <h2 
            className="text-2xl sm:text-4xl lg:text-4xl font-display font-medium text-[#F7F4EE] uppercase tracking-wide leading-tight mb-4"
            style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
          >
            Um atendimento jurídico que coloca você em primeiro lugar.
          </h2>

          <p className="text-sm sm:text-base text-[#D6CCBA] font-light leading-relaxed max-w-2xl">
            A advocacia moderna exige profundidade técnica, mas acima de tudo compreensão humana. 
            Cada demanda é conduzida com dedicação exclusiva, assegurando que você tenha clareza absoluta 
            em cada decisão tomada.
          </p>
        </div>

        {/* Three Indicators with Large Elegant Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {authorityIndicators.map((item, index) => (
            <div 
              key={item.number}
              className="relative p-8 rounded-xs bg-gradient-to-b from-[#1C080E]/70 to-[#120507]/90 border border-[#C5A869]/20 hover:border-[#C5A869]/50 transition-all duration-300 group"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#C5A869]/40 to-transparent group-hover:via-[#C5A869] transition-all" />

              {/* Large Serif Number */}
              <div 
                className="text-5xl sm:text-6xl font-display font-light text-gold-gradient tracking-tight leading-none mb-6 tabular-nums"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {item.number}
              </div>

              {/* Indicator Title */}
              <h3 
                className="text-base sm:text-lg font-display uppercase tracking-[0.14em] text-[#EDE8DF] mb-3 group-hover:text-[#E0CA92] transition-colors font-medium"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {item.title}
              </h3>

              {/* Short explanation */}
              <p className="text-xs sm:text-sm text-[#A89D89] font-light leading-relaxed">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AuthoritySection;
