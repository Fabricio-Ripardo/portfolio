/**
 * TODO o conteúdo do portfólio fica aqui.
 * Para mudar um texto, link ou imagem, edite este arquivo — os componentes só leem daqui.
 *
 * Imagens: coloque o arquivo em /public/projetos (ex.: /public/projetos/landing.png)
 * e preencha o campo `cover` com o caminho ("/projetos/landing.png").
 * Sem `cover`, o site gera uma capa tipográfica automaticamente.
 */

export type CaseBlock = {
  heading: string;
  text: string;
  aside: string;
};

export type CaseMeta = {
  label: string;
  value: string;
};

export type CaseLink = {
  label: string;
  href: string;
};

export type PortfolioCase = {
  slug: string;
  period: string;
  title: string;
  description: string;
  category: string;
  cover?: string;
  gallery?: string[];
  links?: CaseLink[];
  detail: {
    summary: string;
    meta: CaseMeta[];
    blocks: CaseBlock[];
  };
};

export type EducationItem = {
  period: string;
  title: string;
  description: string;
  category: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

/* ------------------------------------------------------------------ */
/* Dados gerais                                                        */
/* ------------------------------------------------------------------ */

export const site = {
  name: "Fabricio Ripardo",
  fullName: "Fabricio Ripardo Amorim",
  logo: "fabricio",
  role: "QA · Full-stack",
  location: "Caridade, CE",
  // TODO: troque pelo domínio final depois do deploy (ex.: https://fabricioripardo.vercel.app)
  url: "https://fabricioripardo.vercel.app",
  description:
    "Portfólio de Fabricio Ripardo — estudante de Análise e Desenvolvimento de Sistemas no IFCE, focado em qualidade de software (QA) e desenvolvimento full-stack.",
  intro:
    "Fabricio Ripardo, Ceará. Estudante de Análise e Desenvolvimento de Sistemas no IFCE, construindo carreira em qualidade de software e desenvolvimento full-stack.",
  // Selo no topo do site. Deixe "" para esconder.
  availability: "Disponível para estágio e vagas júnior",
  email: "fabricioripardo6@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/fabricio-ripardo-688082265",
    // TODO: coloque seu usuário do GitHub
    github: "https://github.com/Fabricio-Ripardo",
  },
};

/* ------------------------------------------------------------------ */
/* Experiência                                                         */
/* ------------------------------------------------------------------ */

export const workItems: PortfolioCase[] = [
  {
    slug: "lightera",
    period: "Mai — Ago 2026",
    title: "Lightera",
    category: "Engenharia de QA",
    description:
      "Engenheiro de QA no projeto OSP (Outside Plant), escrevendo casos de teste e refatorando as suítes de teste automatizadas do time.",
    detail: {
      summary:
        "Três meses atuando na qualidade do projeto OSP (Outside Plant), voltado à rede externa de fibra óptica: escrevendo casos de teste e refatorando as suítes automatizadas para deixá-las mais organizadas e fáceis de manter.",
      meta: [
        { label: "Papel", value: "Engenheiro de QA" },
        { label: "Projeto", value: "OSP — Outside Plant" },
        // TODO: confirme as ferramentas usadas no projeto
        { label: "Stack", value: "Robot Framework, Python" },
        { label: "Duração", value: "3 meses" },
      ],
      blocks: [
        {
          heading: "Projeto OSP",
          text: "Atuei no time de qualidade do OSP (Outside Plant), projeto ligado à planta externa da rede de fibra óptica: a infraestrutura que fica fora dos prédios e leva a conexão até o cliente.",
          aside: "A experiência de campo com fibra óptica na PoupaNet ajudou a entender o domínio do projeto.",
        },
        {
          heading: "Casos de teste",
          text: "Escrevi casos de teste a partir dos requisitos das funcionalidades, cobrindo os fluxos principais e os cenários de erro, para que cada entrega fosse validada de forma consistente.",
          aside: "Casos bem escritos servem de documentação viva do comportamento esperado.",
        },
        {
          heading: "Refatoração das suítes",
          text: "Refatorei as suítes de teste existentes, organizando o código e reaproveitando keywords para deixar os testes mais legíveis, fáceis de manter e menos sujeitos a quebrar por mudanças pequenas.",
          aside: "Suítes organizadas reduzem o tempo gasto corrigindo testes e aumentam a confiança nos resultados.",
        },
      ],
    },
  },
  {
    slug: "poupanet-telecom",
    period: "Ago — Dez 2025",
    title: "PoupaNet Telecom",
    category: "Estágio · Suporte técnico",
    description:
      "Estágio como técnico interno e externo em um provedor de internet: atendimento ao cliente, configuração de equipamentos e instalações de fibra óptica.",
    detail: {
      summary:
        "Cinco meses de estágio em um provedor de internet, alternando entre suporte interno (atendimento e configuração remota) e trabalho de campo nas casas dos clientes.",
      meta: [
        { label: "Papel", value: "Estagiário — técnico interno e externo" },
        { label: "Ferramentas", value: "Roteadores, ONU, fibra óptica (SC/APC)" },
        { label: "Duração", value: "5 meses" },
      ],
      blocks: [
        {
          heading: "Suporte interno",
          text: "Atendimento aos clientes pelas redes sociais, acesso remoto aos roteadores para diagnóstico e cadastro de ONUs no sistema do provedor.",
          aside: "Aprendi a investigar problemas a partir do relato do usuário — base do raciocínio de QA.",
        },
        {
          heading: "Campo",
          text: "Visitas técnicas nas casas dos clientes, montagem de conectores SC/APC e fusão de fibra óptica.",
          aside: "Contato direto com o impacto real de um serviço que falha.",
        },
        {
          heading: "Aprendizados",
          text: "Comunicação com clientes, troubleshooting metódico e entendimento prático de redes — da fibra até o roteador.",
          aside: "Uma visão de infraestrutura que hoje uso para entender sistemas de ponta a ponta.",
        },
      ],
    },
  },
];

/* ------------------------------------------------------------------ */
/* Projetos                                                            */
/* ------------------------------------------------------------------ */

export const projectItems: PortfolioCase[] = [
  {
    slug: "automacao-serverest",
    period: "2026",
    title: "Automação de testes da ServeRest — API e Web",
    category: "QA · Automação de testes",
    description:
      "44 testes automatizados em Robot Framework para uma loja virtual: 30 na API REST e 14 na interface com Selenium, com cenários negativos e execução contínua no GitHub Actions.",
    cover: "/projetos/serverest-relatorio-web.png",
    links: [{ label: "Ver código", href: "https://github.com/Fabricio-Ripardo/AUTOMACAO-SEVEREST" }],
    detail: {
      summary:
        "Suíte de testes da ServeRest, uma loja virtual simulada, cobrindo as duas camadas: a API REST e o front-end. Cada teste cria os próprios dados, valida regras de negócio e roda automaticamente a cada push.",
      meta: [
        { label: "Papel", value: "QA — planejamento e automação" },
        { label: "API", value: "Robot Framework, RequestsLibrary" },
        { label: "Web", value: "Robot Framework, SeleniumLibrary" },
        { label: "CI", value: "GitHub Actions" },
        { label: "Cobertura", value: "44 casos — positivos, negativos e de segurança" },
      ],
      blocks: [
        {
          heading: "Testes de API",
          text: "30 casos cobrindo usuários, login, produtos e carrinhos. Além do caminho feliz, há cenários de erro como e-mail duplicado, senha incorreta, acesso sem token (401), usuário sem permissão de administrador (403) e estoque insuficiente. Os testes de carrinho conferem se o estoque diminui ao comprar e volta ao valor original ao cancelar.",
          aside: "Depois de editar ou excluir, o teste consulta o registro de novo para confirmar que a alteração aconteceu.",
        },
        {
          heading: "Testes Web",
          text: "14 casos no front-end com Selenium: login de administrador e de usuário comum, cadastro de usuários e de produtos conferindo a listagem, e as mensagens de validação de cada campo obrigatório. Os dados de apoio são criados pela API, e o navegador fica só com o que está sendo testado.",
          aside: "Esperas explícitas no lugar de Sleep e screenshot automático no relatório quando um teste falha.",
        },
        {
          heading: "Evolução",
          text: "As primeiras versões tinham IDs e usuários fixos, testes sem validação e esperas fixas, e quebravam sempre que a ServeRest reiniciava a base. Reestruturei tudo em um único projeto com keywords reutilizáveis, dados dinâmicos e integração contínua: API e Web rodam em paralelo no GitHub Actions a cada push e toda semana.",
          aside: "Reescrever os próprios testes foi o maior aprendizado: um teste que passa sem validar nada é pior que nenhum teste.",
        },
      ],
    },
  },
  {
    slug: "landing-page-consultor",
    period: "2026",
    title: "Landing page para consultor de planos de saúde",
    category: "Freelance · Front-end",
    description:
      "Página de captação para um consultor autorizado de planos de saúde, com identidade preta e dourada e orçamento direto pelo WhatsApp.",
    cover: "/projetos/landing-hero.png",
    gallery: ["/projetos/landing-sobre.png", "/projetos/landing-planos.png"],
    // links: [{ label: "Ver site", href: "https://..." }],
    detail: {
      summary:
        "Transformei um design entregue em imagem em uma landing page responsiva, rápida e pronta para converter visitantes em pedidos de orçamento.",
      meta: [
        { label: "Papel", value: "Desenvolvimento front-end" },
        { label: "Stack", value: "Next.js, TypeScript, Tailwind CSS" },
        { label: "Tipo", value: "Projeto para cliente" },
      ],
      blocks: [
        {
          heading: "Contexto",
          text: "O cliente precisava de uma presença online simples e confiável para apresentar seus serviços e receber contatos.",
          aside: "Objetivo principal: levar o visitante até o WhatsApp.",
        },
        {
          heading: "Processo",
          text: "Recriei o layout a partir do design, convertendo o CSS puro para Tailwind CSS e organizando a página em componentes reutilizáveis no Next.js.",
          aside: "Tema preto e dourado mantido fiel à referência visual.",
        },
        {
          heading: "Resultado",
          text: "Uma página leve, responsiva e fácil de manter, com chamada para orçamento sempre visível.",
          aside: "Primeiro projeto entregue para um cliente real.",
        },
      ],
    },
  },
  {
    slug: "gestao-de-funcionarios",
    period: "2026",
    title: "Sistema de gestão de funcionários",
    category: "Acadêmico · Java",
    description:
      "Aplicação em Java com menu de cadastro, consulta, edição e remoção de funcionários, aplicando herança, interfaces e polimorfismo.",
    detail: {
      summary:
        "Trabalho da disciplina de Programação Orientada a Objetos no IFCE: um sistema de linha de comando para gerenciar funcionários, gerentes e desenvolvedores.",
      meta: [
        { label: "Papel", value: "Desenvolvimento individual" },
        { label: "Stack", value: "Java, NetBeans" },
        { label: "Contexto", value: "IFCE — Campus Canindé" },
      ],
      blocks: [
        {
          heading: "Contexto",
          text: "O desafio era modelar uma hierarquia de funcionários e oferecer um CRUD completo pelo terminal.",
          aside: "Foco em aplicar os pilares de orientação a objetos na prática.",
        },
        {
          heading: "Modelagem",
          text: "Classe base Funcionario com Gerente e Desenvolvedor como subclasses, interface Bonificavel para regras de bônus e id gerado automaticamente por um contador estático.",
          aside: "O id automático na classe base é herdado por todas as subclasses.",
        },
        {
          heading: "Resultado",
          text: "Código organizado e extensível: um novo cargo pode ser adicionado sem alterar o restante do sistema.",
          aside: "Polimorfismo no lugar de cadeias de if/else.",
        },
      ],
    },
  },
  {
    slug: "crud-de-tarefas",
    period: "2026",
    title: "Lista de tarefas full-stack",
    category: "Pessoal · Full-stack",
    description:
      "Gerenciador de tarefas com front-end em Next.js e API REST em Django REST Framework, com dados no MariaDB. Criar, editar, concluir, filtrar e acompanhar o progresso.",
    cover: "/projetos/tarefas-todas.png",
    gallery: ["/projetos/tarefas-pendentes.png", "/projetos/tarefas-concluidas.png", "/projetos/tarefas-confirmacao.png"],
    links: [{ label: "Ver código", href: "https://github.com/fabricio-ripardo/lista_de_tarefas" }],
    detail: {
      summary:
        "Uma aplicação de tarefas construída em camadas: interface em React/Next.js, rotas de API do Next.js como intermediárias e uma API REST em Django que persiste os dados no MariaDB.",
      meta: [
        { label: "Papel", value: "Desenvolvimento full-stack" },
        { label: "Front-end", value: "Next.js, React, TypeScript, Tailwind CSS, shadcn/ui" },
        { label: "Back-end", value: "Python, Django REST Framework" },
        { label: "Banco e ferramentas", value: "MariaDB, Postman, Docker" },
      ],
      blocks: [
        {
          heading: "Funcionalidades",
          text: "Adicionar, editar e excluir tarefas, marcar como concluídas, filtrar entre todas, pendentes e concluídas, acompanhar uma barra de progresso e limpar as concluídas com diálogo de confirmação.",
          aside: "Ações destrutivas sempre pedem confirmação antes de apagar dados.",
        },
        {
          heading: "Arquitetura",
          text: "O front-end não fala direto com o Django: as rotas de API do Next.js recebem as requisições (GET, POST, PUT, PATCH e DELETE) e repassam para a API REST, construída com um ModelViewSet do Django REST Framework sobre o MariaDB.",
          aside: "A camada intermediária centraliza o tratamento de erros e esconde o endereço do back-end do navegador.",
        },
        {
          heading: "Evolução",
          text: "O projeto começou com a interface estática, ganhou uma API em Spring Boot com MariaDB e Docker, e depois teve o back-end migrado para Python com Django. Os endpoints foram testados com uma coleção no Postman.",
          aside: "Trocar o back-end sem reescrever o front-end mostrou na prática o valor de separar as camadas.",
        },
      ],
    },
  },
  {
    slug: "portfolio",
    period: "2026",
    title: "Este portfólio",
    category: "Pessoal · Front-end",
    description:
      "Site pessoal construído com Next.js e TypeScript, com animações guiadas por scroll, cursor customizado e páginas de case geradas estaticamente.",
    detail: {
      summary:
        "Comecei o portfólio em Astro e migrei para Next.js, centralizando todo o conteúdo em um único arquivo tipado.",
      meta: [
        { label: "Papel", value: "Design e desenvolvimento" },
        { label: "Stack", value: "Next.js, TypeScript, Tailwind CSS, GSAP" },
        { label: "Tipo", value: "Projeto pessoal" },
      ],
      blocks: [
        {
          heading: "Contexto",
          text: "Queria um lugar para reunir experiências e projetos, que também servisse de exemplo do meu código.",
          aside: "O próprio site é parte do portfólio.",
        },
        {
          heading: "Processo",
          text: "Migração de Astro para o App Router do Next.js, com componentes de servidor, rotas dinâmicas geradas estaticamente e metadados de SEO por página.",
          aside: "Conteúdo separado da apresentação para facilitar atualizações.",
        },
        {
          heading: "Resultado",
          text: "Um site rápido, acessível e fácil de manter — adicionar um projeto novo é só incluir um objeto na lista.",
          aside: "Animações respeitam a preferência de movimento reduzido do sistema.",
        },
      ],
    },
  },
];

/* ------------------------------------------------------------------ */
/* Stack                                                               */
/* ------------------------------------------------------------------ */

export const skillGroups: SkillGroup[] = [
  { title: "Qualidade", items: ["Robot Framework", "Selenium", "Testes de API", "Postman", "GitHub Actions"] },
  { title: "Back-end", items: ["Python · Django", "Java · Spring Boot"] },
  { title: "Front-end", items: ["TypeScript", "React", "Next.js", "Tailwind CSS"] },
  { title: "Dados & Redes", items: ["SQL", "MariaDB", "Fibra óptica", "Roteadores e ONU"] },
];

/* ------------------------------------------------------------------ */
/* Educação                                                            */
/* ------------------------------------------------------------------ */

export const education: EducationItem[] = [
  {
    period: "2026 — 2028",
    title: "Análise e Desenvolvimento de Sistemas — IFCE",
    description:
      "Graduação tecnológica em andamento no Campus Canindé, com foco em programação, orientação a objetos, algoritmos e engenharia de software.",
    category: "Graduação",
  },
  {
    period: "2023 — 2025",
    title: "Técnico em Desenvolvimento de Sistemas — EEEP Francisco Paiva Tavares",
    description:
      "Curso técnico integrado ao ensino médio, onde tive o primeiro contato com lógica de programação, desenvolvimento web e banco de dados.",
    category: "Ensino técnico",
  },
];

/* ------------------------------------------------------------------ */

export function getWorkItem(slug: string) {
  return workItems.find((item) => item.slug === slug);
}

export function getProjectItem(slug: string) {
  return projectItems.find((item) => item.slug === slug);
}
