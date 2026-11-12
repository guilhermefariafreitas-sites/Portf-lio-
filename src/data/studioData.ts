import heroStudioImg from '../assets/images/hero_studio_showcase_1794509929828.jpg';
import portfolioGastronomyImg from '../assets/images/portfolio_gastronomy_web_1794509929461.jpg';
import portfolioHealthImg from '../assets/images/portfolio_health_fitness_1794509930332.jpg';
import portfolioCorporateImg from '../assets/images/portfolio_corporate_law_1794509930728.jpg';
import aboutWorkspaceImg from '../assets/images/about_founder_workspace_1794509931473.jpg';

export const WHATSAPP_NUMBER = '5569992578513';
export const WHATSAPP_DISPLAY = '(69) 99257-8513';
export const INSTAGRAM_HANDLE = 'premiumweb.oficial';
export const INSTAGRAM_URL = 'https://www.instagram.com/premiumweb.oficial/';

export function buildWhatsAppUrl(customMessage?: string): string {
  const defaultMessage =
    'Olá, Premium Web! Gostaria de solicitar um orçamento para criar o site da minha empresa.';
  const message = customMessage || defaultMessage;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const STUDIO_IMAGES = {
  hero: heroStudioImg,
  about: aboutWorkspaceImg,
  gastronomy: portfolioGastronomyImg,
  health: portfolioHealthImg,
  corporate: portfolioCorporateImg,
};

export interface DifferentialItem {
  index: string;
  title: string;
  description: string;
  highlight: string;
}

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    index: '01',
    title: 'Atendimento Humanizado',
    description:
      'Conversa direta, clara e sem termos complicados. Entendemos a realidade do seu negócio para construir um site com a identidade da sua marca.',
    highlight: 'Contato direto com quem cria',
  },
  {
    index: '02',
    title: 'Design Responsivo',
    description:
      'Layout planejado para funcionar com perfeição no celular, tablet e computador, oferecendo navegação rápida e leitura confortável em qualquer tela.',
    highlight: 'Mobile-first e alta legibilidade',
  },
  {
    index: '03',
    title: 'Entrega em Menos de 24 Horas',
    description:
      'Agilidade sem abrir mão do acabamento premium. Sua empresa entra no ar rapidamente, pronta para receber contatos e gerar orçamentos.',
    highlight: 'Agilidade real de publicação',
  },
];

export type NicheCategoryId =
  | 'todos'
  | 'gastronomia'
  | 'saude'
  | 'beleza'
  | 'automotivo'
  | 'negocios';

export interface NicheCategory {
  id: NicheCategoryId;
  label: string;
}

export interface NicheItem {
  id: string;
  name: string;
  category: Exclude<NicheCategoryId, 'todos'>;
  categoryLabel: string;
  focus: string;
}

export const NICHE_CATEGORIES: NicheCategory[] = [
  { id: 'todos', label: 'Todos os Nichos (31)' },
  { id: 'gastronomia', label: 'Gastronomia' },
  { id: 'saude', label: 'Saúde & Bem-Estar' },
  { id: 'beleza', label: 'Beleza & Cuidados' },
  { id: 'automotivo', label: 'Automotivo & Técnico' },
  { id: 'negocios', label: 'Negócios & Comércio' },
];

export const NICHES: NicheItem[] = [
  // Gastronomia
  {
    id: 'hamburgueria',
    name: 'Hamburgueria',
    category: 'gastronomia',
    categoryLabel: 'Gastronomia',
    focus: 'Cardápio visual e pedido direto no WhatsApp',
  },
  {
    id: 'pizzaria',
    name: 'Pizzaria',
    category: 'gastronomia',
    categoryLabel: 'Gastronomia',
    focus: 'Sabores, combos e entrega rápida na sua região',
  },
  {
    id: 'acaiteria',
    name: 'Açaiteria',
    category: 'gastronomia',
    categoryLabel: 'Gastronomia',
    focus: 'Vitrine de acompanhamentos e pedidos via celular',
  },
  {
    id: 'marmitaria',
    name: 'Marmitaria',
    category: 'gastronomia',
    categoryLabel: 'Gastronomia',
    focus: 'Cardápio semanal e reservas corporativas',
  },
  {
    id: 'padaria',
    name: 'Padaria',
    category: 'gastronomia',
    categoryLabel: 'Gastronomia',
    focus: 'Encomendas de kits, horários e localização',
  },
  {
    id: 'acougues',
    name: 'Casas de Açougues',
    category: 'gastronomia',
    categoryLabel: 'Gastronomia',
    focus: 'Cortes selecionados, kits de churrasco e delivery',
  },
  {
    id: 'mercados',
    name: 'Mercados',
    category: 'gastronomia',
    categoryLabel: 'Gastronomia',
    focus: 'Ofertas da semana, setores e contato rápido',
  },
  {
    id: 'produtos-naturais',
    name: 'Produtos Naturais',
    category: 'gastronomia',
    categoryLabel: 'Gastronomia',
    focus: 'Catálogo a granel, suplementos e consultoria',
  },

  // Saúde & Bem-Estar
  {
    id: 'nutricionista',
    name: 'Nutricionista',
    category: 'saude',
    categoryLabel: 'Saúde & Bem-Estar',
    focus: 'Autoridade clínica e agendamento de consultas',
  },
  {
    id: 'personal-trainer',
    name: 'Personal Trainer',
    category: 'saude',
    categoryLabel: 'Saúde & Bem-Estar',
    focus: 'Planos de consultoria presencial e online',
  },
  {
    id: 'fisioterapeuta',
    name: 'Fisioterapeuta',
    category: 'saude',
    categoryLabel: 'Saúde & Bem-Estar',
    focus: 'Especialidades terapêuticas e marcação fácil',
  },
  {
    id: 'academia',
    name: 'Academia',
    category: 'saude',
    categoryLabel: 'Saúde & Bem-Estar',
    focus: 'Grade de horários, estrutura e aulas experimentais',
  },
  {
    id: 'artes-marciais',
    name: 'Academias de Artes Marciais',
    category: 'saude',
    categoryLabel: 'Saúde & Bem-Estar',
    focus: 'Modalidades, turmas infantis/adulto e matrículas',
  },
  {
    id: 'pilates',
    name: 'Studio de Pilates',
    category: 'saude',
    categoryLabel: 'Saúde & Bem-Estar',
    focus: 'Ambiente acolhedor e avaliação postural',
  },
  {
    id: 'farmacias',
    name: 'Farmácias',
    category: 'saude',
    categoryLabel: 'Saúde & Bem-Estar',
    focus: 'Televendas ágil e envio de receitas no WhatsApp',
  },
  {
    id: 'oticas',
    name: 'Óticas',
    category: 'saude',
    categoryLabel: 'Saúde & Bem-Estar',
    focus: 'Coleções de armações, lentes e atendimento local',
  },

  // Beleza & Cuidados
  {
    id: 'sobrancelhas',
    name: 'Design de Sobrancelhas',
    category: 'beleza',
    categoryLabel: 'Beleza & Cuidados',
    focus: 'Portfólio antes/depois e reserva de horário',
  },
  {
    id: 'manicure',
    name: 'Manicure',
    category: 'beleza',
    categoryLabel: 'Beleza & Cuidados',
    focus: 'Catálogo de técnicas, valores e agenda direta',
  },
  {
    id: 'pet-shop',
    name: 'Pet Shop',
    category: 'beleza',
    categoryLabel: 'Beleza & Cuidados',
    focus: 'Banho e tosa, rações e agendamento prático',
  },

  // Automotivo & Técnico
  {
    id: 'mecanica',
    name: 'Mecânica Automotiva',
    category: 'automotivo',
    categoryLabel: 'Automotivo & Técnico',
    focus: 'Serviços de revisão, diagnósticos e socorro rápido',
  },
  {
    id: 'lava-rapido',
    name: 'Lava-Rápido',
    category: 'automotivo',
    categoryLabel: 'Automotivo & Técnico',
    focus: 'Pacotes de higienização, estética e reserva',
  },
  {
    id: 'assistencia-tecnica',
    name: 'Assistência Técnica',
    category: 'automotivo',
    categoryLabel: 'Automotivo & Técnico',
    focus: 'Orçamento de reparos para celulares e eletrônicos',
  },
  {
    id: 'despachantes',
    name: 'Despachantes',
    category: 'automotivo',
    categoryLabel: 'Automotivo & Técnico',
    focus: 'Documentação veicular com transparência e agilidade',
  },
  {
    id: 'vidracaria',
    name: 'Vidraçaria',
    category: 'automotivo',
    categoryLabel: 'Automotivo & Técnico',
    focus: 'Boxes, fachadas e solicitação de visita técnica',
  },

  // Negócios & Comércio
  {
    id: 'advocacia',
    name: 'Escritório de Advocacia',
    category: 'negocios',
    categoryLabel: 'Negócios & Comércio',
    focus: 'Credibilidade jurídica, áreas de atuação e triagem',
  },
  {
    id: 'contabilidade',
    name: 'Escritório de Contabilidade',
    category: 'negocios',
    categoryLabel: 'Negócios & Comércio',
    focus: 'Abertura de empresas, BPO financeiro e consultoria',
  },
  {
    id: 'imobiliaria',
    name: 'Imobiliária',
    category: 'negocios',
    categoryLabel: 'Negócios & Comércio',
    focus: 'Vitrine de imóveis de alto padrão e contato direto',
  },
  {
    id: 'fotografo',
    name: 'Fotógrafo',
    category: 'negocios',
    categoryLabel: 'Negócios & Comércio',
    focus: 'Galeria autoral de ensaios e pacotes de eventos',
  },
  {
    id: 'papelaria',
    name: 'Papelaria e Artesanatos',
    category: 'negocios',
    categoryLabel: 'Negócios & Comércio',
    focus: 'Personalizados, encomendas sob medida e catálogo',
  },
  {
    id: 'idiomas',
    name: 'Escola de Idiomas',
    category: 'negocios',
    categoryLabel: 'Negócios & Comércio',
    focus: 'Metodologia, turmas e aula demonstrativa',
  },
  {
    id: 'floriculturas',
    name: 'Floriculturas',
    category: 'negocios',
    categoryLabel: 'Negócios & Comércio',
    focus: 'Buquês para datas especiais e entrega expressa',
  },
];

export interface PortfolioProject {
  id: string;
  title: string;
  niche: string;
  deliveryTime: string;
  year: string;
  image: string;
  imageAlt: string;
  summary: string;
  challenge: string;
  solution: string;
  resultMetric: string;
  highlights: string[];
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'brasa-artesanal',
    title: 'Brasa & Massa Artesanal',
    niche: 'Hamburgueria & Pizzaria',
    deliveryTime: 'Entregue em 18 horas',
    year: '2026',
    image: portfolioGastronomyImg,
    imageAlt:
      'Site responsivo para hamburgueria e pizzaria artesanal exibido em notebook e celular sobre pedra escura',
    summary:
      'Página de alta conversão focada em cardápio visual, destaque para combos noturnos e fechamento de pedido direto no WhatsApp.',
    challenge:
      'O cliente dependia apenas de aplicativos com taxas altas e perdia pedidos diretos por não ter um link rápido e atrativo no Instagram.',
    solution:
      'Criamos uma vitrine escura que valoriza as fotos dos lanches, com botões de pedido direto por categoria e carregamento instantâneo no 4G.',
    resultMetric: '+140% em pedidos diretos via WhatsApp em 60 dias',
    highlights: [
      'Cardápio escaneável no celular',
      'Botão fixo de pedido imediato',
      'Integração direta com WhatsApp da loja',
    ],
  },
  {
    id: 'alinhar-pilates',
    title: 'Studio Alinhar Pilates & Saúde',
    niche: 'Studio de Pilates & Fisioterapia',
    deliveryTime: 'Entregue em 21 horas',
    year: '2026',
    image: portfolioHealthImg,
    imageAlt:
      'Interface limpa e responsiva de site para estúdio de pilates e clínica de fisioterapia em desktop e smartphone',
    summary:
      'Presença digital acolhedora e organizada para captação de alunos de pilates e pacientes de reabilitação.',
    challenge:
      'Interessados chegavam pelo Google Maps sem entender os horários, diferenciais dos aparelhos ou como agendar uma aula experimental.',
    solution:
      'Estruturamos seções claras de metodologia, equipe e agenda simplificada com direcionamento humanizado para avaliação inicial.',
    resultMetric: '38 novas aulas experimentais agendadas no primeiro mês',
    highlights: [
      'Apresentação clara das modalidades',
      'Arquitetura pensada para confiança médica',
      'Carregamento leve e contraste acessível',
    ],
  },
  {
    id: 'vanguard-juridico',
    title: 'Monteiro & Costa Consultoria',
    niche: 'Advocacia & Negócios Imobiliários',
    deliveryTime: 'Entregue em 22 horas',
    year: '2026',
    image: portfolioCorporateImg,
    imageAlt:
      'Site corporativo em azul marinho e branco para escritório de advocacia e imobiliária exibido em monitor e tablet',
    summary:
      'Site institucional sóbrio em azul marinho e branco com foco em autoridade profissional e triagem ágil de clientes.',
    challenge:
      'O escritório precisava transmitir seriedade e alto padrão para clientes empresariais sem parecer distante ou burocrático.',
    solution:
      'Desenvolvemos uma arquitetura editorial com leitura confortável, áreas de atuação objetivas e formulário pré-qualificado para WhatsApp.',
    resultMetric: '2,4x mais solicitações de consulta qualificada em 45 dias',
    highlights: [
      'Estética executiva em azul marinho',
      'Áreas de atuação com leitura objetiva',
      'Triagem rápida de atendimento',
    ],
  },
];

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  niche: string;
  quote: string;
  outcome: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'ricardo-almeida',
    name: 'Ricardo Almeida',
    role: 'Proprietário',
    company: 'Almeida Prime Burgers',
    niche: 'Hamburgueria',
    quote:
      'Antes a gente mandava PDF pesado no WhatsApp e o cliente desistia. Em menos de 24 horas nosso site estava no ar, lindo no celular e fácil de pedir.',
    outcome: 'Dobrou os pedidos diretos fora dos apps de entrega',
  },
  {
    id: 'camila-ferreira',
    name: 'Dra. Camila Ferreira',
    role: 'Fisioterapeuta e Sócia',
    company: 'Clínica Movimento & Pilates',
    niche: 'Studio de Pilates',
    quote:
      'O atendimento foi extremamente atencioso do início ao fim. Eles entenderam exatamente como queríamos nos posicionar e entregaram tudo no mesmo dia.',
    outcome: 'Agenda de avaliações preenchida já na segunda semana',
  },
  {
    id: 'marcelo-henrique',
    name: 'Marcelo Henrique',
    role: 'Diretor Técnico',
    company: 'MH Mecânica & Diagnóstico',
    niche: 'Mecânica Automotiva',
    quote:
      'Nossos clientes precisavam achar a oficina rápido e pedir orçamento pelo celular sem enrolação. O site trouxe uma imagem muito mais profissional.',
    outcome: '+65% de chamados via WhatsApp no primeiro trimestre',
  },
];
