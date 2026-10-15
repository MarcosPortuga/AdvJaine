import React from 'react';
import { LogoSymbol } from './Logo';
import { Phone, Mail } from 'lucide-react';
import { contactInfo } from '../data/practiceAreas';

interface OfficialCardViewProps {
  className?: string;
  interactive?: boolean;
}

export const OfficialCardView: React.FC<OfficialCardViewProps> = ({ 
  className = "",
  interactive = true 
}) => {
  return (
    <div 
      className={`relative w-full max-w-[580px] aspect-[1.78/1] rounded-sm p-4 sm:p-7 overflow-hidden transition-all duration-500 ${
        interactive ? 'hover:shadow-[0_15px_40px_rgba(0,0,0,0.7)] hover:border-[#C5A869]/70 group' : ''
      } ${className}`}
      style={{
        background: 'radial-gradient(ellipse at 70% 30%, #300e16 0%, #1c080d 55%, #120407 100%)',
        boxShadow: '0 20px 45px -10px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(197, 168, 105, 0.4)'
      }}
    >
      {/* Outer Double Frame Rule (as in official card) */}
      <div className="absolute inset-2 sm:inset-3 border border-[#C5A869]/40 pointer-events-none" />
      <div className="absolute inset-[10px] sm:inset-[15px] border border-[#C5A869]/20 pointer-events-none" />

      {/* Subtle watermark in background */}
      <div className="absolute right-4 bottom-2 opacity-5 pointer-events-none scale-150 transform rotate-6">
        <LogoSymbol className="w-56 h-56 text-[#C5A869]" />
      </div>

      {/* Card Content Container */}
      <div className="relative h-full flex flex-col justify-between z-10 p-2 sm:p-3">
        {/* Top Header Row with Golden Rule Line */}
        <div className="flex items-center justify-between gap-4">
          <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-[#C5A869]/60 to-[#C5A869]" />
          
          <div className="text-right pl-3">
            <h3 
              className="text-xl sm:text-3xl font-display font-medium tracking-[0.14em] text-gold-gradient uppercase leading-none"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Jaine Lima
            </h3>
            <p className="text-[9px] sm:text-[11px] tracking-[0.34em] text-[#EDE8DF]/90 font-light uppercase mt-1">
              Advogada • {contactInfo.oabSlot}
            </p>
          </div>
        </div>

        {/* Bottom Row: Official Scales Monogram + Direct Contacts */}
        <div className="flex items-end justify-between gap-4 mt-auto pt-4">
          {/* Official Intertwined Scales Symbol */}
          <div className="shrink-0 flex items-center gap-2">
            <div className="w-14 h-14 sm:w-20 sm:h-20 transition-transform duration-300 group-hover:scale-105">
              <LogoSymbol className="w-full h-full" />
            </div>
          </div>

          {/* Contact Details with gold icons */}
          <div className="flex flex-col items-start sm:items-start gap-1.5 sm:gap-2 text-[11px] sm:text-sm text-[#EDE8DF]/95 font-sans tracking-wide">
            <a 
              href={contactInfo.whatsappDefaultUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 hover:text-[#E0CA92] transition-colors group/item"
            >
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#C5A869]/20 border border-[#C5A869]/50 flex items-center justify-center text-[#C5A869] shrink-0 group-hover/item:bg-[#C5A869] group-hover/item:text-[#1A090D] transition-all">
                <Phone className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
              </span>
              <span className="tabular-nums font-medium">{contactInfo.phoneDisplay}</span>
            </a>

            <a 
              href={`mailto:${contactInfo.email}`} 
              className="flex items-center gap-2.5 hover:text-[#E0CA92] transition-colors group/item"
            >
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#C5A869]/20 border border-[#C5A869]/50 flex items-center justify-center text-[#C5A869] shrink-0 group-hover/item:bg-[#C5A869] group-hover/item:text-[#1A090D] transition-all">
                <Mail className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
              </span>
              <span className="font-light truncate max-w-[210px] sm:max-w-none">{contactInfo.email}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficialCardView;
