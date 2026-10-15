import React, { useState } from 'react';
import { 
  Users, 
  Scale, 
  ShieldCheck, 
  Briefcase, 
  Clock, 
  FileText, 
  ArrowUpRight,
  CheckCircle,
  X
} from 'lucide-react';
import { practiceAreas, contactInfo } from '../data/practiceAreas';
import { PracticeArea } from '../types';

export const PracticeAreasSection: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<PracticeArea | null>(null);

  // Icon mapper for practice areas
  const renderIcon = (iconName: string, className: string = "w-6 h-6") => {
    switch (iconName) {
      case 'Users':
        return <Users className={className} />;
      case 'Scale':
        return <Scale className={className} />;
      case 'ShieldCheck':
        return <ShieldCheck className={className} />;
      case 'Briefcase':
        return <Briefcase className={className} />;
      case 'Clock':
        return <Clock className={className} />;
      case 'FileText':
      default:
        return <FileText className={className} />;
    }
  };

  const getWhatsappUrlForArea = (areaTitle: string) => {
    const text = encodeURIComponent(
      `Olá, Jaine! Acessei seu site e gostaria de obter orientação jurídica especializada na área de ${areaTitle}.`
    );
    return `https://wa.me/${contactInfo.phoneRaw}?text=${text}`;
  };

  return (
    <section id="atuacao" className="relative py-24 lg:py-32 bg-[#160609] border-t border-[#C5A869]/20 overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#360F1A]/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 pb-8 border-b border-[#C5A869]/15">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#C5A869]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A869] font-medium">
                Áreas de Atuação
              </span>
            </div>

            <h2 
              className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium text-[#F7F4EE] tracking-tight leading-tight uppercase"
              style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
            >
              Orientação jurídica personalizada para{' '}
              <span className="text-gold-gradient italic font-normal normal-case">
                diferentes necessidades.
              </span>
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-xs sm:text-sm text-[#A89D89] font-light max-w-xs md:text-right">
            Assessoria consultiva, preventiva e contenciosa com rigor técnico e tratamento sigiloso.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {practiceAreas.map((area) => (
            <div
              key={area.id}
              className="group relative p-8 rounded-xs bg-[#1C080E]/70 border border-[#C5A869]/20 hover:border-[#C5A869] hover:bg-[#230A12] transition-all duration-400 ease-out hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
              onClick={() => setSelectedArea(area)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedArea(area);
                }
              }}
              aria-label={`Ver detalhes sobre ${area.title}`}
            >
              {/* Subtle top hairline highlight on hover */}
              <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-[#C5A869] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Top Row: Number & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span 
                    className="text-3xl font-display font-light text-[#C5A869]/70 group-hover:text-gold-gradient transition-colors tabular-nums"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {area.number}
                  </span>

                  <div className="w-12 h-12 rounded-xs bg-[#140508] border border-[#C5A869]/30 flex items-center justify-center text-[#C5A869] group-hover:border-[#C5A869] group-hover:bg-[#C5A869] group-hover:text-[#140508] transition-all duration-300">
                    {renderIcon(area.icon, "w-5 h-5")}
                  </div>
                </div>

                {/* Area Title */}
                <h3 
                  className="text-xl sm:text-2xl font-display uppercase tracking-wide text-[#EDE8DF] group-hover:text-[#E0CA92] transition-colors mb-3 font-medium"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {area.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-[#A89D89] font-light leading-relaxed group-hover:text-[#D6CCBA] transition-colors mb-6">
                  {area.shortDescription}
                </p>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#C5A869] group-hover:text-[#EDE8DF] transition-colors">
                <span className="font-medium tracking-wider uppercase text-[11px]">
                  Saber mais detalhes
                </span>
                <span className="w-7 h-7 rounded-full border border-[#C5A869]/40 flex items-center justify-center group-hover:border-[#C5A869] group-hover:bg-[#C5A869]/20 transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation Callout under grid */}
        <div className="mt-14 p-6 sm:p-8 rounded-xs bg-gradient-to-r from-[#1C080E] via-[#240C12] to-[#1C080E] border border-[#C5A869]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-display text-[#EDE8DF] uppercase tracking-wide" style={{ fontFamily: 'var(--font-serif)' }}>
              Não encontrou a área específica da sua dúvida?
            </h4>
            <p className="text-xs sm:text-sm text-[#A89D89] font-light mt-1">
              Envie uma mensagem descrevendo seu caso para avaliação prévia de viabilidade.
            </p>
          </div>

          <a
            href={practiceAreas[0] ? getWhatsappUrlForArea('Atendimento Jurídico Geral') : '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 text-xs uppercase font-semibold tracking-[0.16em] text-[#140508] bg-[#C5A869] hover:bg-[#E0CA92] rounded-xs transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <span>Consultar Viabilidade</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Detail Modal for Selected Practice Area */}
      {selectedArea && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedArea(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div 
            className="relative w-full max-w-lg bg-[#19070B] border border-[#C5A869]/50 rounded-xs p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedArea(null)}
              aria-label="Fechar detalhes da área"
              className="absolute top-5 right-5 p-2 text-[#A89D89] hover:text-[#EDE8DF] transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs uppercase tracking-widest text-[#C5A869]">
                Área {selectedArea.number}
              </span>
            </div>

            <h3 
              id="modal-title"
              className="text-2xl sm:text-3xl font-display uppercase tracking-wide text-gold-gradient mb-3"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {selectedArea.title}
            </h3>

            <p className="text-sm text-[#EDE8DF]/90 font-light leading-relaxed mb-6">
              {selectedArea.fullDescription}
            </p>

            {/* Common Cases List */}
            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-wider text-[#C5A869] font-medium mb-3">
                Principais Demandas Atendidas:
              </h4>
              <ul className="space-y-2.5">
                {selectedArea.commonCases.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D6CCBA] font-light">
                    <CheckCircle className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct WhatsApp CTA for this area */}
            <div className="pt-6 border-t border-[#C5A869]/20 flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsappUrlForArea(selectedArea.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#140508] bg-gradient-to-r from-[#E0CA92] to-[#C5A869] rounded-xs hover:brightness-105 transition-all flex items-center justify-center gap-2"
              >
                <span>Falar sobre {selectedArea.title}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setSelectedArea(null)}
                className="py-3 px-5 text-xs uppercase tracking-wider text-[#A89D89] hover:text-[#EDE8DF] border border-white/10 rounded-xs transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PracticeAreasSection;
