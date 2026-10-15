import { PracticeArea } from '../types';

export const practiceAreas: PracticeArea[] = [
  {
    id: 'direito-de-familia',
    number: '01',
    title: 'Direito de Família',
    shortDescription: 'Atuação sensível e técnica na resolução de conflitos familiares, divórcios, guarda e pensão alimentícia.',
    fullDescription: 'Protegendo seus interesses e os laços mais importantes com respeito, discrição e técnica jurídica apurada.',
    commonCases: [
      'Divórcio consensual e litigioso',
      'Pensão alimentícia e revisional',
      'Guarda, tutela e convivência familiar',
      'União estável e partilha de bens',
      'Inventário e planejamento sucessório'
    ],
    icon: 'Users'
  },
  {
    id: 'direito-civil',
    number: '02',
    title: 'Direito Civil',
    shortDescription: 'Assessoria em contratos, responsabilidade civil, regularização imobiliária e cobranças judiciais e extrajudiciais.',
    fullDescription: 'Segurança jurídica para suas relações patrimoniais, transações imobiliárias e resolução de disputas contratuais.',
    commonCases: [
      'Elaboração e revisão de contratos',
      'Ações indenizatórias por danos morais e materiais',
      'Posse, propriedade e usucapião',
      'Cobrança e execução de títulos',
      'Direito de vizinhança e condomínio'
    ],
    icon: 'Scale'
  },
  {
    id: 'direito-do-consumidor',
    number: '03',
    title: 'Direito do Consumidor',
    shortDescription: 'Defesa incisiva contra práticas abusivas, cobranças indevidas, fraudes bancárias e problemas em serviços.',
    fullDescription: 'Garantindo o equilíbrio nas relações de consumo e a reparação justa por prejuízos causados por fornecedores.',
    commonCases: [
      'Negativação indevida nos órgãos de proteção ao crédito',
      'Golpes e fraudes financeiras / bancárias',
      'Vícios e defeitos em produtos ou serviços',
      'Cancelamento de voos e extravio de bagagens',
      'Cobranças e juros abusivos em contratos'
    ],
    icon: 'ShieldCheck'
  },
  {
    id: 'direito-trabalhista',
    number: '04',
    title: 'Direito Trabalhista',
    shortDescription: 'Orientação e defesa de direitos decorrentes da relação de trabalho, rescisões e horas extras.',
    fullDescription: 'Atuação estratégica na garantia de todos os haveres e garantias fundamentais decorrentes do contrato de trabalho.',
    commonCases: [
      'Rescisão indireta e reversão de justa causa',
      'Verbas rescisórias não adimplidas',
      'Horas extras e intervalos não concedidos',
      'Assédio moral no ambiente profissional',
      'Acidente de trabalho e estabilidade'
    ],
    icon: 'Briefcase'
  },
  {
    id: 'direito-previdenciario',
    number: '05',
    title: 'Direito Previdenciário',
    shortDescription: 'Planejamento e requerimento de aposentadorias, pensões por morte e auxílios junto ao INSS.',
    fullDescription: 'Análise minuciosa do histórico contributivo para obtenção do benefício previdenciário mais vantajoso.',
    commonCases: [
      'Planejamento previdenciário preventivo',
      'Aposentadoria por idade e tempo de contribuição',
      'Benefício de Prestação Continuada (BPC/LOAS)',
      'Auxílio por incapacidade temporária (auxílio-doença)',
      'Pensão por morte e recursos administrativos'
    ],
    icon: 'Clock'
  },
  {
    id: 'consultoria-juridica',
    number: '06',
    title: 'Consultoria Jurídica',
    shortDescription: 'Pareceres preventivos e orientação estratégica para tomadas de decisão seguras de pessoas e empresas.',
    fullDescription: 'Mitigação antecipada de litígios e estruturação preventiva para resguardar direitos antes que o problema ocorra.',
    commonCases: [
      'Análise de riscos em transações comerciais',
      'Pareceres e diagnósticos preventivos',
      'Mediação e conciliação extrajudicial',
      'Assessoria contínua para pessoas e profissionais',
      'Elaboração de notificações extrajudiciais'
    ],
    icon: 'FileText'
  }
];

export const differentialsData = [
  {
    number: '01',
    title: 'ATENDIMENTO HUMANIZADO',
    description: 'Cada caso é acolhido com escuta ativa, empatia e atenção às particularidades que envolvem a vida de cada pessoa.',
    highlight: 'Escuta atenta e individual'
  },
  {
    number: '02',
    title: 'ESTRATÉGIA JURÍDICA',
    description: 'Soluções personalizadas desenhadas com rigor técnico, prevendo cenários e buscando a via mais eficiente.',
    highlight: 'Raciocínio tático sob medida'
  },
  {
    number: '03',
    title: 'TRANSPARÊNCIA',
    description: 'Comunicação clara, sem juridiquês inacessível. Você acompanha cada etapa do seu processo em tempo real.',
    highlight: 'Linguagem clara e objetiva'
  },
  {
    number: '04',
    title: 'COMPROMISSO',
    description: 'Dedicação irrestrita à proteção dos seus direitos com integridade, ética rigorosa e prontidão no atendimento.',
    highlight: 'Defesa leal dos seus direitos'
  }
];

export const authorityIndicators = [
  {
    number: '01',
    title: 'ATENDIMENTO PERSONALIZADO',
    subtitle: 'Compreensão aprofundada de cada contexto individual, sem soluções genéricas.'
  },
  {
    number: '02',
    title: 'ÉTICA E TRANSPARÊNCIA',
    subtitle: 'Postura íntegra, clareza sobre riscos e alinhamento constante com o cliente.'
  },
  {
    number: '03',
    title: 'COMPROMISSO COM O CLIENTE',
    subtitle: 'Dedicação em todas as etapas, da consulta preventiva à defesa contenciosa.'
  }
];

export const contactInfo = {
  name: 'Jaine Lima',
  title: 'Advogada',
  phoneDisplay: '(63) 9 9232-8780',
  phoneRaw: '5563992328780',
  email: 'jaine.advlima@gmail.com',
  oabSlot: 'OAB/TO 11.253',
  location: 'Atendimento Online em todo o Brasil • Presencial sob agendamento',
  whatsappDefaultUrl: 'https://wa.me/5563992328780?text=Ol%C3%A1%2C%20Jaine!%20Acessei%20seu%20site%20e%20gostaria%20de%20obter%20informa%C3%A7%C3%B5es%20sobre%20atendimento%20jur%C3%ADdico.'
};
