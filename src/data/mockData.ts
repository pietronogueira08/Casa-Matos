export const WHATSAPP_NUMBER = "5522996125854";
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, Marcelo! Vi o site da Casa Matos e gostaria de solicitar um orçamento para o meu projeto."
);
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Localização", href: "#localizacao" },
];

export const DIFFERENTIALS = [
  {
    icon: "Gem",
    title: "Acabamento Sem Emendas",
    description:
      "Precisão milimétrica no assentamento de porcelanatos de grande formato, paginação de pedras nobres e alinhamento visual perfeito — sem emendas perceptíveis.",
    color: "gold",
  },
  {
    icon: "UserCheck",
    title: "Gestão Presente do Gestor",
    description:
      "Marcelo Matos acompanha pessoalmente cada canteiro, assegurando ordem, limpeza e execução 100% fiel ao projeto e aos prazos acordados.",
    color: "blue",
  },
  {
    icon: "ShieldCheck",
    title: "Zero Dor de Cabeça",
    description:
      "Planejamento físico-financeiro transparente, materiais de primeira linha e garantia formal de entrega no prazo — do diagnóstico à vistoria final.",
    color: "gold",
  },
];

export type PortfolioFilter =
  | "all"
  | "piscinas"
  | "banheiros"
  | "revestimentos"
  | "portas";

export const PORTFOLIO_FILTERS: { label: string; value: PortfolioFilter }[] = [
  { label: "Todas as Obras", value: "all" },
  { label: "Piscinas & Gourmet", value: "piscinas" },
  { label: "Banheiros & Saunas", value: "banheiros" },
  { label: "Revestimentos & Fachadas", value: "revestimentos" },
  { label: "Portas & Rodapés", value: "portas" },
];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Piscina de Alvenaria Armada",
    category: "piscinas",
    tag: "Alphaville Campos",
    material: "Pedra Hijau Premium",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
  },
  {
    id: 2,
    title: "Área Gourmet Integrada",
    category: "piscinas",
    tag: "Damha Campos",
    material: "Granito Cinza Andorinha",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    id: 3,
    title: "Banheiro Master de Luxo",
    category: "banheiros",
    tag: "Royal Boulevard",
    material: "Porcelanato Calacatta 120×120",
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
  },
  {
    id: 4,
    title: "Sauna Residencial Completa",
    category: "banheiros",
    tag: "Sonho Dourado",
    material: "Madeira Cedro & Pedra Natural",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
  },
  {
    id: 5,
    title: "Fachada em Porcelanato",
    category: "revestimentos",
    tag: "Parque Pelinca",
    material: "Porcelanato Nero Marquina 80×160",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: 6,
    title: "Revestimento Externo Nobre",
    category: "revestimentos",
    tag: "Alphaville Campos",
    material: "Pedra Madeira Natural",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
  },
  {
    id: 7,
    title: "Portas Pivotantes sob Medida",
    category: "portas",
    tag: "Royal Boulevard",
    material: "Madeira Cumaru & Vidro Temperado",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    id: 8,
    title: "Rodapés Embutidos Premium",
    category: "portas",
    tag: "Sonho Dourado",
    material: "MDF Revestido Laminado 15cm",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
  },
];

export const SERVICES = [
  {
    id: 1,
    size: "large",
    icon: "Waves",
    title: "Piscinas de Alvenaria Armada",
    description:
      "Estrutura armada com impermeabilização garantida, iluminação cênica subaquática, aquecimento solar e acabamentos em pedras nobres. Do projeto à entrega.",
    tags: ["Estrutura Armada", "Impermeabilização", "Iluminação LED", "Aquecimento"],
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=900&q=80",
  },
  {
    id: 2,
    size: "medium",
    icon: "UtensilsCrossed",
    title: "Áreas Gourmet & Saunas",
    description:
      "Bancadas em ilha, churrasqueiras contemporâneas, spas residenciais e saunas a vapor — ambientes integrados de alto padrão.",
    tags: ["Churrasqueira", "Spa", "Bancada Ilha"],
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&q=80",
  },
  {
    id: 3,
    size: "medium",
    icon: "Bath",
    title: "Banheiros de Alto Padrão",
    description:
      "Nichos esculpidos, ralos ocultos lineares, box walk-in e acabamentos finos em porcelanatos de grande formato.",
    tags: ["Nicho", "Ralo Oculto", "Walk-in"],
    image:
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
  },
  {
    id: 4,
    size: "small",
    icon: "DoorOpen",
    title: "Carpintaria Fina",
    description:
      "Portas pivotantes sob medida, rodapés embutidos e guarnições de luxo.",
    tags: ["Portas", "Rodapés"],
  },
  {
    id: 5,
    size: "small",
    icon: "Layers",
    title: "Revestimentos & Fachadas",
    description:
      "Porcelanatos de grande formato e pedras naturais nobres aplicados com perfeição milimétrica.",
    tags: ["Porcelanato", "Pedra Natural"],
  },
];

export const TIMELINE_STEPS = [
  {
    step: "01",
    icon: "Search",
    title: "Diagnóstico & Visita Técnica",
    description:
      "Avaliação minuciosa no local da obra. Entendemos cada detalhe do projeto, medimos, fotografamos e identificamos os melhores materiais para o resultado desejado.",
  },
  {
    step: "02",
    icon: "FileText",
    title: "Planejamento & Orçamento Transparente",
    description:
      "Definição completa de materiais, custos detalhados e cronograma exato. Nada de surpresas: você sabe exatamente o que vai acontecer e quando.",
  },
  {
    step: "03",
    icon: "HardHat",
    title: "Execução com Fino Acabamento",
    description:
      "Equipe própria treinada, canteiro organizado e Marcelo Matos presente no dia a dia — garantindo execução fiel ao projeto e ao padrão Casa Matos.",
  },
  {
    step: "04",
    icon: "CheckCircle",
    title: "Entrega Impecável & Garantia",
    description:
      "Vistoria detalhada de entrega, limpeza final profissional e garantia técnica documentada. Suporte pós-obra sempre que precisar.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Ricardo Albuquerque",
    location: "Alphaville Campos",
    rating: 5,
    text: "A Casa Matos transformou nossa área de lazer completamente. A piscina ficou impecável, a pedra Hijau ficou exatamente como imaginei. Marcelo é extremamente profissional e honesto. Cumpriu o prazo à risca!",
    project: "Piscina & Área Gourmet",
    avatar: "RA",
  },
  {
    name: "Fernanda Castilho",
    location: "Damha Campos",
    rating: 5,
    text: "Reformamos nosso banheiro master e ficou de revista. Os porcelanatos Calacatta foram assentados com uma perfeição que eu não acreditava ser possível. Equipe muito educada e organizada.",
    project: "Banheiro Master de Luxo",
    avatar: "FC",
  },
  {
    name: "Eduardo Teixeira",
    location: "Royal Boulevard",
    rating: 5,
    text: "Contratei para a sauna e área gourmet. O resultado superou todas as expectativas. Marcelo acompanhou pessoalmente cada etapa. Já indiquei para três vizinhos do condomínio!",
    project: "Sauna & Gourmet Integrado",
    avatar: "ET",
  },
  {
    name: "Patrícia Nóbrega",
    location: "Sonho Dourado",
    rating: 5,
    text: "As portas pivotantes ficaram lindas. A madeira Cumaru com o vidro temperado deu um charme incrível para a entrada. Serviço impecável do início ao fim.",
    project: "Portas Pivotantes sob Medida",
    avatar: "PN",
  },
];

export const FAQ_ITEMS = [
  {
    question: "A Casa Matos executa obras em condomínios fechados em Campos?",
    answer:
      "Sim! Temos vasta experiência em condomínios horizontais como Alphaville Campos, Damha, Royal Boulevard e Sonho Dourado. Nos adequamos totalmente às normas técnicas de cada empreendimento, respeitando horários, protocolos de segurança e regras de acesso para garantir uma obra tranquila para toda a vizinhança.",
  },
  {
    question:
      "Como funciona o fornecimento dos materiais de acabamento?",
    answer:
      "Oferecemos orientação técnica completa para a compra dos melhores materiais. Indicamos fornecedores de confiança com o melhor custo-benefício, especificamos as referências corretas e acompanhamos a chegada dos materiais na obra — garantindo que tudo chegue conforme especificado no projeto.",
  },
  {
    question:
      "Qual a garantia oferecida para piscinas e impermeabilização?",
    answer:
      "Oferecemos garantia técnica documentada em contrato para todas as nossas piscinas e serviços de impermeabilização. Caso ocorra qualquer problema relacionado à execução, nossa equipe retorna para corrigir sem custo adicional. Prezamos pela tranquilidade do cliente muito além da entrega.",
  },
  {
    question: "Qual é o prazo médio de execução das obras?",
    answer:
      "Todos os prazos são definidos em contrato após o diagnóstico técnico completo. Uma piscina de alvenaria armada com acabamentos nobres leva em média 45 a 60 dias. Uma reforma de banheiro master, de 15 a 25 dias. O cronograma é seguido à risca — pontualidade é um dos nossos pilares.",
  },
  {
    question: "A Casa Matos tem equipe própria ou terceiriza?",
    answer:
      "Temos equipe própria, treinada e selecionada pelo próprio Marcelo Matos. Não terceirizamos serviços críticos de acabamento. Isso garante padrão de qualidade uniforme em todas as obras, controle total da execução e responsabilidade total do início ao fim.",
  },
];
