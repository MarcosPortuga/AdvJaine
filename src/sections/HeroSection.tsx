import React from 'react';
import { ArrowUpRight, Shield, Award, MessageCircle } from 'lucide-react';
import { LogoSymbol } from '../components/Logo';
import { contactInfo } from '../data/practiceAreas';

interface HeroSectionProps {
  onOpenCardModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCardModal }) => {
  return (
    <section 
      id="inicio"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-28 pb-16 lg:py-32 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 85% 20%, #2b0b13 0%, #160609 50%, #0e0305 100%)'
      }}
    >
      {/* Background Architectural & Geometric Line Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#C5A869]/10 blur-[130px]" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-[#3b111b]/40 blur-[120px]" />
        {/* Subtle grid hairlines */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(197, 168, 105, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(197, 168, 105, 0.03) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Editorial Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Kicker with fine gold line */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-[#C5A869] to-transparent animate-pulse" />
              <span className="text-xs sm:text-sm uppercase tracking-[0.3em] font-medium text-[#D8BA75]">
                JAINE LIMA • ADVOCACIA
              </span>
            </div>

            {/* Main Headline */}
            <h1 
              className="text-3xl sm:text-5xl lg:text-6xl font-display font-medium text-[#FDFBF7] tracking-tight leading-[1.12] mb-6"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Excelência jurídica para proteger o que{' '}
              <span className="text-gold-gradient italic font-normal">
                realmente importa.
              </span>
            </h1>

            {/* Body Description */}
            <p className="text-base sm:text-lg text-[#D6CCBA] font-light leading-relaxed max-w-2xl mb-8 lg:mb-10">
              Atendimento jurídico personalizado, estratégico e pautado pela ética, 
              transparência e compromisso com cada cliente.
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              {/* Primary WhatsApp Conversion Button */}
              <a
                href={contactInfo.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-[#140508] bg-gradient-to-r from-[#E0CA92] via-[#C5A869] to-[#AB8D4D] rounded-xs shadow-[0_4px_25px_rgba(197,168,105,0.3)] hover:shadow-[0_6px_35px_rgba(197,168,105,0.5)] hover:brightness-105 active:scale-[0.98] transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Falar pelo WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Secondary Navigation Button */}
              <a
                href="#sobre"
                className="inline-flex items-center justify-center px-7 py-4 text-xs sm:text-sm font-medium uppercase tracking-[0.18em] text-[#EDE8DF] border border-[#C5A869]/40 hover:border-[#C5A869] hover:bg-[#C5A869]/10 rounded-xs transition-all duration-300 text-center"
              >
                Conheça Meu Trabalho
              </a>
            </div>

            {/* Subtle Credibility Badges Bar */}
            <div className="mt-12 pt-8 border-t border-[#C5A869]/15 grid grid-cols-2 sm:grid-cols-3 gap-6 w-full text-xs text-[#A89D89]">
              <div className="flex items-center gap-2.5">
                <Shield className="w-4 h-4 text-[#C5A869] shrink-0" />
                <span className="tracking-wide">Atendimento Individualizado</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="w-4 h-4 text-[#C5A869] shrink-0" />
                <span className="tracking-wide">Rigor Técnico & Ética</span>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <span className="w-2 h-2 rounded-full bg-[#C5A869] shrink-0" />
                <span className="tracking-wide">Nacional & Internacional</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Asymmetric Editorial Presentation of Dra. Jaine Lima */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Decorative Gold Frame Box Offset */}
            <div className="absolute -top-4 -right-4 w-full h-full max-w-[420px] border border-[#C5A869]/25 rounded-xs pointer-events-none hidden sm:block" />
            
            {/* Main Editorial Card / Portrait Frame */}
            <div className="relative w-full max-w-[440px] bg-gradient-to-b from-[#240C12] to-[#120507] border border-[#C5A869]/30 rounded-xs p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden">
              
              {/* Subtle Ambient Radial Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A869]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Top Accent: Thin Gold Line + Brand Monogram */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#C5A869]/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1A090D] border border-[#C5A869]/40 flex items-center justify-center p-1.5 shadow-inner">
                    <LogoSymbol className="w-full h-full" />
                  </div>
                  <div>
                    <h2 
                      className="text-lg font-display tracking-widest text-[#EDE8DF] uppercase leading-tight font-medium"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      Jaine Lima
                    </h2>
                    <p className="text-[10px] tracking-[0.25em] text-[#C5A869] uppercase font-medium">
                      Advocacia Estratégica
                    </p>
                  </div>
                </div>

                <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 text-[#C5A869] border border-[#C5A869]/30 rounded-xs">
                  {contactInfo.oabSlot}
                </span>
              </div>

              {/* Professional Presentation Graphic Area */}
              <div className="relative aspect-[3/3.8] rounded-xs overflow-hidden border border-[#C5A869]/25 bg-[#17060A] flex flex-col items-center justify-between p-6 sm:p-8 text-center group">
                
                {/* Background Texture & Watermark */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0305] via-transparent to-transparent z-10" />
                <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none transform rotate-12 scale-125">
                  <LogoSymbol className="w-72 h-72" />
                </div>

                {/* Top decorative pill */}
                <div className="relative z-20 flex items-center gap-2 text-[10px] tracking-[0.25em] text-[#E0CA92] uppercase font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869]" />
                  <span>Atuação Jurídica Premium</span>
                </div>

                {/* Central Emblem & Title Presentation */}
                <div className="relative z-20 my-auto flex flex-col items-center">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 mb-4 transition-transform duration-500 group-hover:scale-105">
                    <LogoSymbol className="w-full h-full drop-shadow-[0_10px_20px_rgba(197,168,105,0.25)]" />
                  </div>

                  <h3 
                    className="text-2xl sm:text-3xl font-display text-gold-gradient tracking-wide mb-2 uppercase"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    Dra. Jaine Lima
                  </h3>

                  <p className="text-xs text-[#EDE8DF]/90 font-light tracking-widest max-w-[260px] leading-relaxed">
                    Advocacia focada em segurança jurídica, defesa patrimonial e relações familiares.
                  </p>
                </div>

                {/* Bottom Quick Contact Bar */}
                <div className="relative z-20 w-full pt-4 border-t border-[#C5A869]/20 flex items-center justify-between text-[11px] text-[#EDE8DF]/80">
                  <span className="tabular-nums tracking-wider text-[#E0CA92] font-medium">
                    {contactInfo.phoneDisplay}
                  </span>
                  <span className="text-[10px] tracking-widest uppercase text-[#A89D89]">
                    Online & Presencial
                  </span>
                </div>
              </div>

              {/* Bottom Quick Info & Interactive Trigger */}
              <div className="mt-5 flex items-center justify-between text-xs">
                <span className="text-[#A89D89] text-[11px]">
                  Identidade Visual Oficial
                </span>
                
                {onOpenCardModal && (
                  <button
                    type="button"
                    onClick={onOpenCardModal}
                    className="text-[#D8BA75] hover:text-[#FFF] text-[11px] uppercase tracking-wider underline decoration-[#C5A869]/50 hover:decoration-[#C5A869] transition-all flex items-center gap-1 cursor-pointer"
                  >
                    Ver Cartão Oficial
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                )}
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
