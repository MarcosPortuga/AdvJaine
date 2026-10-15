import React from 'react';
import { Logo } from './Logo';
import { Phone, Mail, ArrowUp } from 'lucide-react';
import { contactInfo } from '../data/practiceAreas';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0E0305] text-[#EDE8DF] border-t border-[#C5A869]/20 pt-16 pb-12 overflow-hidden">
      {/* Subtle top rule glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A869]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/5">
          
          {/* Brand & Positioning (Cols 1-5) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Logo variant="full" />
            
            <p className="mt-5 text-xs sm:text-sm text-[#A89D89] font-light leading-relaxed max-w-sm">
              Assessoria jurídica personalizada, estratégica e transparente para proteger 
              seu patrimônio e garantir a defesa plena dos seus direitos.
            </p>

            <div className="mt-6 flex items-center gap-2 px-3 py-1.5 rounded-xs border border-[#C5A869]/30 bg-[#160609] text-[11px] text-[#C5A869] tracking-wider uppercase">
              <span>Inscrição:</span>
              <strong className="font-medium text-[#EDE8DF]">{contactInfo.oabSlot}</strong>
            </div>
          </div>

          {/* Quick Navigation (Cols 6-8) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C5A869] font-medium mb-5">
              Navegação
            </h4>
            <ul className="space-y-3 text-xs uppercase tracking-wider text-[#A89D89]">
              <li>
                <a href="#inicio" className="hover:text-[#EDE8DF] transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#EDE8DF] transition-colors">Sobre a Advogada</a>
              </li>
              <li>
                <a href="#atuacao" className="hover:text-[#EDE8DF] transition-colors">Áreas de Atuação</a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-[#EDE8DF] transition-colors">Diferenciais</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#EDE8DF] transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          {/* Direct Contacts & Consultation (Cols 9-12) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C5A869] font-medium mb-5">
              Atendimento Jurídico
            </h4>

            <div className="space-y-3.5 text-xs text-[#D6CCBA] font-light">
              <a
                href={contactInfo.whatsappDefaultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#E0CA92] transition-colors group"
              >
                <span className="w-8 h-8 rounded-xs bg-[#1C080E] border border-[#C5A869]/30 flex items-center justify-center text-[#C5A869] group-hover:bg-[#C5A869] group-hover:text-[#140508] transition-all">
                  <Phone className="w-3.5 h-3.5" />
                </span>
                <span className="tabular-nums font-medium">{contactInfo.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 hover:text-[#E0CA92] transition-colors group"
              >
                <span className="w-8 h-8 rounded-xs bg-[#1C080E] border border-[#C5A869]/30 flex items-center justify-center text-[#C5A869] group-hover:bg-[#C5A869] group-hover:text-[#140508] transition-all">
                  <Mail className="w-3.5 h-3.5" />
                </span>
                <span className="font-light">{contactInfo.email}</span>
              </a>

              <p className="pt-2 text-[11px] text-[#A89D89] leading-relaxed">
                {contactInfo.location}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Back to Top Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A89D89]">
          <p className="text-[11px] font-light text-center sm:text-left">
            © 2026 Jaine Lima Advocacia. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider text-[#C5A869] hover:text-[#EDE8DF] transition-colors cursor-pointer"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
