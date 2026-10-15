import React from 'react';
import { LogoSymbol } from '../components/Logo';

export const QuoteSection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#220A10] border-y border-[#C5A869]/25 overflow-hidden">
      {/* Background Vignette & Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#140508]/80 via-transparent to-[#140508]/80 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C5A869]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Subtle Brand Watermark Symbol */}
        <div className="flex justify-center mb-8">
          <div className="w-12 h-12 opacity-80">
            <LogoSymbol className="w-full h-full" />
          </div>
        </div>

        {/* Top Fine Gold Rule */}
        <div className="w-24 sm:w-36 h-[1.5px] mx-auto bg-gradient-to-r from-transparent via-[#C5A869] to-transparent mb-8 sm:mb-10" />

        {/* Main Central Quote */}
        <blockquote 
          className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium text-[#FDFBF7] tracking-tight leading-[1.25] sm:leading-[1.2] max-w-4xl mx-auto uppercase"
          style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
        >
          “Seus direitos merecem atenção,{' '}
          <span className="text-gold-gradient italic font-normal normal-case">
            estratégia e compromisso.”
          </span>
        </blockquote>

        {/* Bottom Fine Gold Rule */}
        <div className="w-24 sm:w-36 h-[1.5px] mx-auto bg-gradient-to-r from-transparent via-[#C5A869] to-transparent mt-8 sm:mb-6" />

        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#C5A869]/90 font-light mt-6">
          Jaine Lima • Advocacia Personalizada
        </p>

      </div>
    </section>
  );
};

export default QuoteSection;
