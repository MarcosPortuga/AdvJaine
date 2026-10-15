import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Send, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ArrowUpRight,
  Copy,
  Check
} from 'lucide-react';
import { contactInfo } from '../data/practiceAreas';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      alert('Por favor, preencha os campos obrigatórios (Nome, Telefone e Mensagem).');
      return;
    }

    // Build personalized WhatsApp URL based on user input
    const messageTemplate = `Olá, Jaine! Meu nome é ${formData.name.trim()}.
Telefone: ${formData.phone.trim()}
E-mail: ${formData.email.trim() || 'Não informado'}
${formData.subject ? `Assunto: ${formData.subject.trim()}` : ''}

Gostaria de obter informações sobre atendimento jurídico.

Mensagem:
${formData.message.trim()}`;

    const encodedMessage = encodeURIComponent(messageTemplate);
    const whatsappUrl = `https://wa.me/${contactInfo.phoneRaw}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  return (
    <section id="contato" className="relative py-24 lg:py-32 bg-[#120407] border-t border-[#C5A869]/20 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#240C12]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20 text-left">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#C5A869]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A869] font-medium">
              Canais Oficiais
            </span>
          </div>

          <h2 
            className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium text-[#F7F4EE] tracking-tight leading-tight uppercase"
            style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
          >
            Entre em Contato
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#D6CCBA] font-light leading-relaxed max-w-xl">
            Preencha os campos abaixo para iniciar seu atendimento via WhatsApp ou utilize nossos canais diretos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT: Direct Contact Cards & Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* WhatsApp Card */}
              <div className="p-6 sm:p-7 rounded-xs bg-[#1C080E]/70 border border-[#C5A869]/25 hover:border-[#C5A869] transition-all group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xs bg-[#140508] border border-[#C5A869]/40 flex items-center justify-center text-[#C5A869] group-hover:bg-[#C5A869] group-hover:text-[#140508] transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-widest text-[#A89D89] font-medium">
                        WhatsApp Oficial
                      </span>
                      <h4 className="text-lg sm:text-xl font-medium text-[#EDE8DF] mt-1 tabular-nums">
                        {contactInfo.phoneDisplay}
                      </h4>
                      <p className="text-xs text-[#A89D89] mt-1 font-light">
                        Mensagens diretas com a advogada
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(contactInfo.phoneRaw, 'phone')}
                    title="Copiar número"
                    className="p-2 text-[#A89D89] hover:text-[#C5A869] transition-colors focus:outline-none"
                    aria-label="Copiar número de WhatsApp"
                  >
                    {copiedItem === 'phone' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                  <a
                    href={contactInfo.whatsappDefaultUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#D8BA75] hover:text-[#FFF] transition-colors"
                  >
                    <span>Enviar mensagem agora</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-[11px] text-[#A89D89] tracking-wider">
                    Online
                  </span>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-6 sm:p-7 rounded-xs bg-[#1C080E]/70 border border-[#C5A869]/25 hover:border-[#C5A869] transition-all group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xs bg-[#140508] border border-[#C5A869]/40 flex items-center justify-center text-[#C5A869] group-hover:bg-[#C5A869] group-hover:text-[#140508] transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-widest text-[#A89D89] font-medium">
                        E-mail Institucional
                      </span>
                      <h4 className="text-base sm:text-lg font-medium text-[#EDE8DF] mt-1 truncate max-w-[220px] sm:max-w-none">
                        {contactInfo.email}
                      </h4>
                      <p className="text-xs text-[#A89D89] mt-1 font-light">
                        Para envio formal de documentos e propostas
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(contactInfo.email, 'email')}
                    title="Copiar e-mail"
                    className="p-2 text-[#A89D89] hover:text-[#C5A869] transition-colors focus:outline-none"
                    aria-label="Copiar endereço de e-mail"
                  >
                    {copiedItem === 'email' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#D8BA75] hover:text-[#FFF] transition-colors"
                  >
                    <span>Escrever e-mail</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-[11px] text-[#A89D89] tracking-wider">
                    Corporativo
                  </span>
                </div>
              </div>

              {/* Office Location & Modality */}
              <div className="p-6 rounded-xs bg-[#170609] border border-white/5 space-y-3 text-xs text-[#D6CCBA] font-light">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#C5A869] shrink-0" />
                  <span>{contactInfo.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#C5A869] shrink-0" />
                  <span>Segunda a Sexta-feira: 08h00 às 18h00</span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Visual Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-xs bg-[#1B080E]/80 border border-[#C5A869]/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              
              <div className="mb-8">
                <h3 
                  className="text-xl sm:text-2xl font-display uppercase tracking-wide text-[#EDE8DF] font-medium"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Mensagem para Atendimento
                </h3>
                <p className="text-xs sm:text-sm text-[#A89D89] font-light mt-1">
                  Ao clicar em enviar, os dados serão organizados automaticamente em uma mensagem do WhatsApp para conversa imediata.
                </p>
              </div>

              {isSubmitted && (
                <div className="mb-6 p-4 rounded-xs bg-[#C5A869]/10 border border-[#C5A869] text-xs text-[#EDE8DF] flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A869] shrink-0" />
                  <span>Sua mensagem foi gerada e a janela do WhatsApp foi iniciada. Caso não tenha aberto, verifique o bloqueador de pop-ups ou use o botão flutuante.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-wider text-[#D6CCBA] mb-2 font-medium">
                      Seu Nome Completo <span className="text-[#C5A869]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Carlos Eduardo Silveira"
                      className="w-full px-4 py-3 rounded-xs bg-[#140508] border border-[#C5A869]/30 text-[#EDE8DF] placeholder-[#A89D89]/40 text-xs sm:text-sm focus:outline-none focus:border-[#C5A869] focus:ring-1 focus:ring-[#C5A869] transition-all"
                    />
                  </div>

                  {/* Phone field */}
                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-[#D6CCBA] mb-2 font-medium">
                      WhatsApp com DDD <span className="text-[#C5A869]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ex: (63) 99999-0000"
                      className="w-full px-4 py-3 rounded-xs bg-[#140508] border border-[#C5A869]/30 text-[#EDE8DF] placeholder-[#A89D89]/40 text-xs sm:text-sm focus:outline-none focus:border-[#C5A869] focus:ring-1 focus:ring-[#C5A869] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-wider text-[#D6CCBA] mb-2 font-medium">
                      Seu E-mail (opcional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu.email@exemplo.com"
                      className="w-full px-4 py-3 rounded-xs bg-[#140508] border border-[#C5A869]/30 text-[#EDE8DF] placeholder-[#A89D89]/40 text-xs sm:text-sm focus:outline-none focus:border-[#C5A869] focus:ring-1 focus:ring-[#C5A869] transition-all"
                    />
                  </div>

                  {/* Subject field */}
                  <div>
                    <label htmlFor="subject" className="block text-xs uppercase tracking-wider text-[#D6CCBA] mb-2 font-medium">
                      Assunto Principal
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xs bg-[#140508] border border-[#C5A869]/30 text-[#EDE8DF] text-xs sm:text-sm focus:outline-none focus:border-[#C5A869] focus:ring-1 focus:ring-[#C5A869] transition-all cursor-pointer"
                    >
                      <option value="">Selecione a área do seu caso</option>
                      <option value="Direito de Família">Direito de Família</option>
                      <option value="Direito Civil">Direito Civil</option>
                      <option value="Direito do Consumidor">Direito do Consumidor</option>
                      <option value="Direito Trabalhista">Direito Trabalhista</option>
                      <option value="Direito Previdenciário">Direito Previdenciário</option>
                      <option value="Consultoria Jurídica">Consultoria Jurídica</option>
                      <option value="Outro Assunto">Outro Assunto</option>
                    </select>
                  </div>
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider text-[#D6CCBA] mb-2 font-medium">
                    Resumo da sua situação <span className="text-[#C5A869]">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Descreva brevemente o que aconteceu ou qual é a sua dúvida jurídica..."
                    className="w-full px-4 py-3 rounded-xs bg-[#140508] border border-[#C5A869]/30 text-[#EDE8DF] placeholder-[#A89D89]/40 text-xs sm:text-sm focus:outline-none focus:border-[#C5A869] focus:ring-1 focus:ring-[#C5A869] transition-all resize-y"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full group py-4 px-8 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#140508] bg-gradient-to-r from-[#E0CA92] via-[#C5A869] to-[#AB8D4D] rounded-xs shadow-[0_4px_25px_rgba(197,168,105,0.35)] hover:shadow-[0_6px_35px_rgba(197,168,105,0.55)] hover:brightness-105 active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <Send className="w-4 h-4 fill-current" />
                  <span>ENVIAR VIA WHATSAPP</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <p className="text-[11px] text-center text-[#A89D89] font-light">
                  Seus dados e relatos são mantidos em absoluto sigilo profissional.
                </p>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
