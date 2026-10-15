import React from 'react';
import { ArrowUpRight, CheckCircle2, Award, Clock } from 'lucide-react';
import { contactInfo } from '../data/practiceAreas';
import { OfficialCardView } from '../components/OfficialCardView';

interface AboutSectionProps {
  onOpenCardModal?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenCardModal }) => {
  return (
    <section id="sobre" className="relative py-24 lg:py-32 bg-[#120407] overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#2B0B13]/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Editorial Presentation & Official Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full">
              {/* Decorative Accent Background Box */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#C5A869]/20 to-transparent rounded-xs blur-sm" />
              
              {/* Official Card View Component */}
              <div className="relative z-10 w-full flex justify-center">
                <OfficialCardView />
              </div>
            </div>

            {/* Quick Credentials / Pillar Highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4 w-full text-xs">
              <div className="p-4 rounded-xs bg-[#1C080E]/60 border border-[#C5A869]/20 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-[#EDE8DF] tracking-wide">Atendimento Online</h4>
                  <p className="text-[11px] text-[#A89D89] mt-0.5">Consultas em todo o país com comodidade e agilidade.</p>
                </div>
              </div>

              <div className="p-4 rounded-xs bg-[#1C080E]/60 border border-[#C5A869]/20 flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-[#EDE8DF] tracking-wide">Agilidade & Clareza</h4>
                  <p className="text-[11px] text-[#A89D89] mt-0.5">Retornos pontuais e comunicação sem complicação.</p>
                </div>
              </div>
            </div>

            {/* Slot for OAB info (clearly labeled placeholder ready for update) */}
            <div className="mt-4 w-full p-3 rounded-xs border border-white/5 bg-[#170609] text-center">
              <span className="text-[11px] text-[#A89D89] tracking-widest uppercase">
                Registro Profissional: <strong className="text-[#C5A869] font-medium">{contactInfo.oabSlot}</strong>
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Institutional Narrative & Philosophy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Header pill label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#C5A869]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A869] font-medium">
                Sobre a Advogada
              </span>
            </div>

            {/* Main Section Title */}
            <h2 
              className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium text-[#F7F4EE] tracking-tight leading-[1.18] mb-8"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Uma atuação jurídica construída com{' '}
              <span className="text-gold-gradient italic font-normal">
                proximidade, estratégia e confiança.
              </span>
            </h2>

            {/* Core Institutional Narrative */}
            <div className="space-y-5 text-sm sm:text-base text-[#D6CCBA] font-light leading-relaxed mb-10">
              <p className="text-base sm:text-lg text-[#EDE8DF] font-normal leading-relaxed border-l-2 border-[#C5A869] pl-4 italic">
                “Meu propósito é oferecer atendimento jurídico personalizado, buscando 
                compreender cada situação de forma individualizada e apresentar soluções 
                adequadas às necessidades de cada cliente.”
              </p>

              <p>
                A advocacia de excelência vai além da simples aplicação de normas legais: ela exige 
                escuta atenta, sensibilidade para identificar as particularidades de cada caso e precisão 
                técnica para formular a rota mais segura e eficaz para quem busca proteção jurídica.
              </p>

              <p>
                Seja para prevenir litígios patrimoniais, solucionar questões familiares delicadas ou 
                assegurar direitos contratuais e do consumidor, a atuação é orientada pelos mais elevados 
                padrões de ética, sigilo profissional e transparência.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={contactInfo.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-[#140508] bg-gradient-to-r from-[#E0CA92] to-[#C5A869] rounded-xs shadow-md hover:brightness-105 active:scale-[0.98] transition-all"
              >
                <span>Falar com Jaine Lima</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#atuacao"
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs sm:text-sm font-medium uppercase tracking-[0.16em] text-[#EDE8DF] border border-[#C5A869]/40 hover:border-[#C5A869] hover:bg-[#C5A869]/10 rounded-xs transition-all text-center"
              >
                Ver Áreas de Atuação
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
