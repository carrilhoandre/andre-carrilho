// Todo o texto do site fica aqui. Edite este arquivo para atualizar o conteúdo.
// Itens marcados com REVISAR foram escritos a partir do currículo/conversa e
// merecem conferência antes de publicar.

export const profile = {
  name: "André Luiz Carrilho de Aguiar",
  shortName: "André Carrilho",
  initials: "AC",
  role: "Tech Lead & Arquiteto de Software",
  headline: "Tech Lead e arquiteto de software, especialista em pagamentos.",
  summary:
    "Há mais de 15 anos transformo sistemas legados em arquiteturas modernas e escaláveis. Lidero times, desenho microsserviços e integro meios de pagamento com foco em taxa de aprovação, prevenção de chargeback e operação que não pode parar.",
  highlights: [".NET", "React", "Python", "Golang", "Microsserviços", "Kubernetes", "Kafka", "Engenharia assistida por IA"],
  status: "Aberto a oportunidades · GMT-3",
  location: "Tupi Paulista, São Paulo, Brasil",
  languages: "Português nativo · Inglês intermediário (B1/B2)",
  email: "andrecarrilho91@hotmail.com",
  // Perfis (deixe "" para esconder).
  linkedin: "https://www.linkedin.com/in/andre-carrilho-44967231/",
  github: "",
  // Foto em public/ (deixe "" para mostrar as iniciais).
  photo: "/foto.jpg",
  // Coloque o PDF do currículo em public/ e ajuste o nome (deixe "" para esconder).
  cv: "",
};

export const stats = [
  { value: "15+", label: "anos de engenharia" },
  { value: "10+", label: "anos como arquiteto" },
  { value: "10", label: "empresas" },
];

export const nav = [
  { href: "#cases", label: "Cases" },
  { href: "#sobre", label: "Sobre" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#contato", label: "Contato" },
];

export const paymentFlow = [
  { title: "Checkout", detail: "microsserviços" },
  { title: "Zero dollar auth", detail: "valida o cartão" },
  { title: "Antifraude", detail: "análise de risco" },
  { title: "3D Secure", detail: "liability shift · frictionless" },
  { title: "PSP / Adquirente", detail: "Adyen · Cybersource" },
  { title: "Eventos", detail: "Kafka · conciliação" },
];

export const employers = [
  "Grupo Casas Bahia",
  "Guide Investimentos",
  "Tivit",
  "Carrilho IT",
  "Printlaser",
  "Via Varejo",
  "Brasil/CT",
  "Via Internet",
  "Dinizsoft",
  "Provenco",
];

export const marquee = [
  ".NET", "C#", "React", "Python", "Golang", "Node.js", "Next.js", "Azure", "AWS",
  "Kubernetes", "Kafka", "RabbitMQ", "SQL Server", "MongoDB", "Redis",
  "DDD", "CQRS", "Arquitetura Hexagonal", "TDD", "Adyen", "Cybersource",
  "3D Secure", "Agentes de IA",
];

export type Case = {
  tag: string;
  context: string;
  title: string;
  problem: string;
  approach: string;
  result: string;
  stack: string[];
};

// REVISAR: confira cada problema/abordagem/resultado com o que você pode divulgar.
export const cases: Case[] = [
  {
    tag: "Migração",
    context: "Grupo Casas Bahia · e-commerce",
    title: "Migração do checkout legado do e-commerce",
    problem:
      "O fluxo que fecha as compras do e-commerce rodava em uma plataforma legada, difícil de evoluir, em um sistema que movimenta milhões de reais por mês e não pode parar.",
    approach:
      "Liderança técnica da migração para microsserviços, com decisões de arquitetura que equilibram evolução, risco operacional e impacto direto no faturamento.",
    result:
      "Checkout em arquitetura moderna e preparado para a próxima etapa: unificar o fluxo online com as vendas das lojas físicas.",
    stack: [".NET", "Microsserviços", "Kafka", "Kubernetes", "DDD"],
  },
  {
    tag: "Pagamentos",
    context: "Grupo Casas Bahia",
    title: "Aprovação alta, chargeback baixo",
    problem:
      "Cada transação negada é venda perdida; cada fraude aprovada vira chargeback. O equilíbrio entre conversão e risco precisa ser desenhado na arquitetura.",
    approach:
      "Integrações com Adyen e Cybersource, 3D Secure com liability shift e fluxo frictionless, e autorização zero dollar para validar cartões sem cobrar o cliente.",
    result:
      "Mecanismos de prevenção de chargeback no fluxo de pagamento, com foco em taxa de aprovação e menos atrito para o cliente.",
    stack: ["Adyen", "Cybersource", "3DS", "Zero dollar auth"],
  },
  {
    tag: "Omnichannel",
    context: "Varejo · em andamento",
    title: "Um checkout para o online e a loja física",
    problem:
      "Vendas online e de lojas físicas seguiam fluxos separados, duplicando regras e dificultando uma experiência única para o cliente.",
    approach:
      "Arquitetura do novo checkout pensada desde o início para receber o fluxo das lojas físicas, com contratos e domínios compartilhados.",
    result:
      "Base técnica para unificar canais de venda em um único fluxo de fechamento de compra.",
    stack: ["DDD", "Arquitetura Hexagonal", "APIs REST"],
  },
  {
    tag: "Arquitetura",
    context: "Programa de fidelidade",
    title: "Backoffice de viagens white label do zero",
    problem:
      "Um programa de fidelidade precisava internalizar o backoffice de viagens em uma plataforma nova, reaproveitável e sob seu controle.",
    approach:
      "Arquitetura white label desenhada de ponta a ponta, da infraestrutura ao front-end, com DDD, CQRS e containers na AWS.",
    result:
      "Plataforma de viagens migrada e pronta para ser reaproveitada em outros produtos.",
    stack: [".NET Core", "CQRS", "AWS ECS/Fargate", "Docker", "Redis"],
  },
  {
    tag: "Fintech",
    context: "Setor financeiro",
    title: "Internet banking em ambiente regulado",
    problem:
      "Evoluir um internet banking com novas funcionalidades sem abrir mão de estabilidade e segurança.",
    approach:
      "Desenvolvimento de features e apoio a demandas de DevOps, com automação de build e deploy.",
    result:
      "Entregas contínuas em um produto financeiro crítico e de alta exigência.",
    stack: [".NET", "SQL Server", "CI/CD"],
  },
  {
    tag: "Consultoria",
    context: "Consultoria · cliente internacional",
    title: "Plataforma de leilão online",
    problem:
      "Um cliente no exterior precisava de uma nova plataforma de leilão online, do desenho da arquitetura à entrega.",
    approach:
      "Atuação como arquiteto da solução pela minha própria consultoria, participando também do desenvolvimento e da entrega.",
    result: "Plataforma entregue ao cliente em produção.",
    stack: [".NET Core", "Azure", "Arquitetura de soluções"],
  },
];

export const about = [
  "Sou Tech Lead e arquiteto de software, com mais de 15 anos de carreira. Hoje lidero a modernização de uma plataforma de e-commerce de grande porte, incluindo a migração do checkout legado, e atuo em salas de guerra quando um problema crítico afeta a venda.",
  "Ao longo da carreira, atuei em varejo, bancos, investimentos, programas de fidelidade, certificados digitais e consultoria própria para clientes no Brasil e no exterior. O fio condutor é o mesmo: sistemas que lidam com dinheiro e não podem parar.",
];

export const focusAreas = [
  {
    title: "Pagamentos e e-commerce",
    text: "Checkout, integração com PSPs e adquirentes, 3D Secure, autorização zero dollar, prevenção de chargeback e taxa de aprovação.",
  },
  {
    title: "Migração de legados",
    text: "Modernização incremental de sistemas em produção, de monólitos a microsserviços, sem interromper a operação.",
  },
  {
    title: "Arquitetura distribuída",
    text: "Microsserviços com .NET, React, Python e Golang, DDD, Arquitetura Hexagonal, CQRS e mensageria com Kafka e RabbitMQ em Kubernetes, Azure e AWS.",
  },
  {
    title: "Liderança técnica",
    text: "Times de alta performance com autonomia, padrões claros, mentoria próxima e decisões técnicas ligadas ao negócio.",
  },
];

export const ai = {
  title: "Engenharia assistida por IA",
  lead: "A IA acelera a entrega. Arquitetura, validação e responsabilidade continuam com a engenharia.",
  items: [
    "Agentes de IA e engenharia de prompt aplicados ao dia a dia de desenvolvimento.",
    "Uso de Copilot e assistentes de código com contexto do projeto e das convenções do time.",
    "Apoio da IA em análise de impacto, revisão de código e decisões de arquitetura.",
  ],
};

export const skillGroups: { name: string; items: string[] }[] = [
  { name: "Pagamentos e e-commerce", items: ["Meios de Pagamento", "E-commerce", "Gateways de Pagamento", "Adyen", "Cybersource", "3D Secure", "Zero dollar auth", "Prevenção de chargeback"] },
  { name: "Arquitetura", items: ["Arquitetura de Software", "Microsserviços", "DDD", "Arquitetura Hexagonal", "CQRS", "SOLID", "TDD", "Migração de Sistemas"] },
  { name: "Linguagens", items: [".NET / C#", "React", "Python", "Golang", "Node.js", "Next.js", "TypeScript"] },
  { name: "Dados e mensageria", items: ["SQL Server", "MongoDB", "Redis", "Kafka", "RabbitMQ"] },
  { name: "Cloud e DevOps", items: ["Azure", "AWS", "Kubernetes", "Docker", "CI/CD", "Jenkins", "Ansible"] },
  { name: "IA", items: ["Inteligência Artificial", "Agentes de IA", "Engenharia de Prompt", "Microsoft Copilot"] },
  { name: "Liderança", items: ["Liderança Técnica", "Gestão de Times de Alta Performance", "Comunicação", "Resolução de Problemas"] },
];

export type Job = {
  period: string;
  role: string;
  company: string;
  text: string;
  stack?: string[];
};

export const jobs: Job[] = [
  {
    period: "nov 2021 – atual",
    role: "Tech Lead · Especialista .NET",
    company: "Grupo Casas Bahia · São Paulo",
    text: "Squad de plataforma de e-commerce focada em modernização de arquitetura e atuação em salas de guerra. Lidero a migração do checkout legado, que no futuro próximo vai unificar o fluxo do e-commerce com o das lojas físicas.",
    stack: [".NET", "Golang", "Kafka", "Kubernetes", "Adyen", "Cybersource"],
  },
  {
    period: "mai 2021 – out 2021",
    role: "Especialista .NET",
    company: "Guide Investimentos · São Paulo",
    text: "Apoio ao time de onboarding de clientes e arquitetura de solução para novos desenvolvimentos.",
  },
  {
    period: "set 2020 – mai 2021",
    role: "Desenvolvedor .NET Sênior",
    company: "Tivit · São Paulo",
    text: "Internet banking para o setor financeiro: novas funcionalidades e demandas de DevOps.",
  },
  {
    period: "abr 2019 – ago 2020",
    role: "Arquiteto de Soluções",
    company: "Carrilho IT Consulting",
    text: "Consultoria própria em arquitetura e desenvolvimento para clientes no Brasil e no exterior, incluindo uma plataforma de leilão online.",
  },
  {
    period: "ago 2018 – abr 2019",
    role: "Arquiteto de Soluções",
    company: "Printlaser · Barueri",
    text: "Equipe de arquitetura e inovação, com foco em redução de custos e melhoria de performance.",
  },
  {
    period: "abr 2018 – ago 2018",
    role: "Analista Programador Sênior / DevOps .NET",
    company: "Via Varejo · São Caetano do Sul",
    text: "DevOps do aplicativo nativo de e-commerce: automação de build, integração contínua e testes automatizados.",
    stack: [".NET Core", "TFS", "Ansible", "MongoDB"],
  },
  {
    period: "jul 2017 – mar 2018",
    role: "Arquiteto / DevOps .NET",
    company: "Brasil/CT · Barueri",
    text: "Migração do backoffice de viagens de um programa de fidelidade com arquitetura white label, da infraestrutura ao front-end.",
    stack: [".NET Core", "CQRS", "AWS", "Docker", "Jenkins"],
  },
  {
    period: "out 2015 – jun 2017",
    role: "Analista Programador Sênior / Arquiteto .NET",
    company: "Via Internet · São Paulo",
    text: "E-commerce de certificados digitais e migração de toda a estrutura para microsserviços.",
    stack: [".NET Core", "Azure", "Redis", "Xamarin"],
  },
  {
    period: "fev 2014 – set 2015",
    role: "Analista Programador",
    company: "Dinizsoft · São Paulo",
    text: "ERP, integrações web e soluções mobile. Onde começou o interesse profundo por arquitetura.",
  },
  {
    period: "abr 2012 – jan 2014",
    role: "Analista Programador",
    company: "Provenco · Presidente Prudente",
    text: "ERP para supermercados, cooperativas e laticínios, incluindo emissão, remessa e retorno de boletos bancários.",
  },
];

export const education = [
  { period: "2012 – 2013", title: "Desenvolvimento de Aplicações Multiplataforma", school: "Unoeste" },
  { period: "2009 – 2011", title: "Sistemas para Internet", school: "Unoeste" },
];

export const certifications = [
  "Developing Windows Azure and Web Services · Microsoft",
  "EF SET · Inglês CEFR B1/B2",
];
