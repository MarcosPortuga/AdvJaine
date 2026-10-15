import React from 'react';
import { differentialsData } from '../data/practiceAreas';
import { ShieldCheck, HeartHandshake, Eye, Sparkles } from 'lucide-react';

export const DifferencesSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <HeartHandshake className="w-5 h-5 text-[#C5A869]" />;
      case 1: return <Sparkles className="w-5 h-5 text-[#C5A869]" />;
      case 2: return <Eye className="w-5 h-5 text-[#C5A869]" />;
      case 3: default: return <ShieldCheck className="w-5 h-5 text-[#C5A869]" />;
    }
  };

  return (
    <section id="diferenciais" className="relative py-24 lg:py-32 bg-[#120407] overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-[#C5A869]/10 blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#C5A869]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A869] font-medium">
              Metodologia de Atuação
            </span>
          </div>

          <h2 
            className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium text-[#F7F4EE] tracking-tight leading-tight uppercase"
            style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
          >
            Por que escolher um{' '}
            <span className="text-gold-gradient italic font-normal normal-case">
              atendimento personalizado?
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#D6CCBA] font-light leading-relaxed max-w-xl">
            Em vez de soluções padronizadas em série, cada cliente recebe um diagnóstico exclusivo 
            e uma estratégia feita sob medida para a sua realidade.
          </p>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-12 lg:gap-y-16">
          {differentialsData.map((item, index) => (
            <div 
              key={item.number}
              className="relative pl-0 sm:pl-8 border-l-0 sm:border-l border-[#C5A869]/25 hover:border-[#C5A869] transition-colors duration-400 group"
            >
              {/* Gold Indicator Point */}
              <div className="hidden sm:block absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-[#120407] border border-[#C5A869] group-hover:bg-[#C5A869] transition-colors" />

              {/* Number & Highlight */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <span 
                  className="text-4xl sm:text-5xl font-display font-light text-gold-gradient tabular-nums"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {item.number}
                </span>

                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-xs bg-[#1C080E] border border-[#C5A869]/20">
                    {getIcon(index)}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 
                className="text-lg sm:text-xl font-display uppercase tracking-[0.14em] text-[#EDE8DF] group-hover:text-[#E0CA92] transition-colors mb-3 font-medium"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#A89D89] font-light leading-relaxed max-w-md group-hover:text-[#D6CCBA] transition-colors">
                {item.description}
              </p>

              {/* Highlight Tag */}
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] text-[#C5A869]/90 font-medium tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869]" />
                <span>{item.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Process Flow: 3 Simple Steps */}
        <div className="mt-20 pt-16 border-t border-[#C5A869]/20">
          <h3 
            className="text-center text-xs uppercase tracking-[0.3em] text-[#C5A869] font-medium mb-12"
          >
            Como Funciona Seu Atendimento
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xs bg-[#180609]/70 border border-[#C5A869]/15">
              <span className="text-xs font-semibold text-[#C5A869] tracking-widest uppercase">Etapa 01</span>
              <h4 className="text-base font-display text-[#EDE8DF] mt-2 mb-2 font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
                Contato Inicial Direto
              </h4>
              <p className="text-xs text-[#A89D89] leading-relaxed">
                Você envia uma mensagem pelo WhatsApp apresentando um breve resumo da sua situação.
              </p>
            </div>

            <div className="p-6 rounded-xs bg-[#180609]/70 border border-[#C5A869]/15">
              <span className="text-xs font-semibold text-[#C5A869] tracking-widest uppercase">Etapa 02</span>
              <h4 className="text-base font-display text-[#EDE8DF] mt-2 mb-2 font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
                Análise Preliminar & Diagnóstico
              </h4>
              <p className="text-xs text-[#A89D89] leading-relaxed">
                Avaliamos a documentação e os detalhes do caso para identificar os caminhos legais viáveis.
              </p>
            </div>

            <div className="p-6 rounded-xs bg-[#180609]/70 border border-[#C5A869]/15">
              <span className="text-xs font-semibold text-[#C5A869] tracking-widest uppercase">Etapa 03</span>
              <h4 className="text-base font-display text-[#EDE8DF] mt-2 mb-2 font-medium" style={{ fontFamily: 'var(--font-serif)' }}>
                Estratégia & Execução
              </h4>
              <p className="text-xs text-[#A89D89] leading-relaxed">
                Elaboração do plano de ação com transparência e acompanhamento próximo em cada fase.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DifferencesSection;
