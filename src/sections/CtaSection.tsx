import React from 'react';
import { ArrowUpRight, MessageCircle, Clock, ShieldCheck, Check } from 'lucide-react';
import { contactInfo } from '../data/practiceAreas';

export const CtaSection: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#17060A] overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#C5A869]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#C5A869_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Subtle decorative gold badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C080E] border border-[#C5A869]/30 text-[#C5A869] text-xs uppercase tracking-[0.2em] font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869] animate-pulse" />
          <span>Atendimento Direto & Sem Burocracia</span>
        </div>

        {/* Headline */}
        <h2 
          className="text-3xl sm:text-5xl lg:text-6xl font-display font-medium text-[#FDFBF7] tracking-tight leading-tight uppercase mb-6"
          style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
        >
          Precisa de orientação jurídica?
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-[#D6CCBA] font-light leading-relaxed max-w-2xl mx-auto mb-10">
          Entre em contato para conversar sobre sua situação e conhecer 
          as possibilidades para o seu caso.
        </p>

        {/* Main WhatsApp CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-12">
          <a
            href={contactInfo.whatsappDefaultUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar pelo WhatsApp com a advogada Jaine Lima"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#140508] bg-gradient-to-r from-[#E0CA92] via-[#C5A869] to-[#AB8D4D] rounded-xs shadow-[0_4px_30px_rgba(197,168,105,0.4)] hover:shadow-[0_6px_40px_rgba(197,168,105,0.6)] hover:brightness-105 active:scale-[0.98] transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Falar pelo WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Reassurance Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto pt-8 border-t border-[#C5A869]/20 text-xs text-[#A89D89]">
          <div className="flex items-center justify-center gap-2">
            <Check className="w-4 h-4 text-[#C5A869]" />
            <span>Sigilo Profissional Garantido</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-[#C5A869]" />
            <span>Retorno Rápido e Humanizado</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C5A869]" />
            <span>Orientação Ética & Transparente</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CtaSection;
