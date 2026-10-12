import type { SiteContent } from "@/data/site-content";
import { getContactHref } from "@/lib/contact";

export const ptContent: SiteContent = {
  locale: "pt",
  localeName: "Português",
  seo: {
    title: "APAAI | Aikido Inclusive para inclusão, autonomia e bem-estar",
    description:
      "APAAI - Associação Portuguesa de Aikido Adaptado Inclusivo. Sessões, formação e parcerias para inclusão, autonomia e bem-estar.",
  },
  skipToContent: "Saltar para o conteúdo",
  headerCta: {
    label: "Falar sobre parcerias",
    href: getContactHref("pt", "partnership"),
    variant: "primary",
  },
  nav: [
    { label: "Início", href: "/pt" },
    { label: "Quem Somos", href: "/pt#quem-somos" },
    { label: "O Projeto", href: "/pt#projeto" },
    { label: "Impacto", href: "/pt#impacto" },
    { label: "Parcerias", href: "/pt#parcerias" },
    { label: "Onde Estamos", href: "/pt#onde-estamos" },
    { label: "Notícias", href: "/pt#noticias" },
    { label: "Participe e Colabore", href: "/pt#participe-e-colabore" },
    { label: "Contactos", href: "/pt#contactos" },
  ],
  hero: {
    eyebrow: "APAAI | Associação Portuguesa de Aikido Adaptado Inclusivo",
    title: "O Aikido é para todos. Adaptamos o caminho, nunca o valor.",
    subtitle:
      "Desenvolvemos sessões e parcerias que transformam o Aikido adaptado numa ferramenta real de inclusão, autonomia e bem-estar.",
    primaryCta: {
      label: "Quero participar",
      href: getContactHref("pt", "participation"),
      variant: "primary",
    },
    secondaryCta: {
      label: "Quero ser parceiro",
      href: "/pt/#parcerias",
      variant: "secondary",
    },
    proof: [
      "Trabalho de terreno em instituições e comunidade.",
      "Metodologia inclusiva orientada para progressão individual.",
      "Preparado para crescimento local, nacional e europeu.",
    ],
    posterKicker: "Projeto em ação",
    posterTitle: "Inclusão com método, presença e continuidade.",
    posterBody:
      "Da demonstração à prática regular, a APAAI aproxima participantes, famílias, instituições e parceiros através de uma proposta adaptada, séria e humana.",
    posterHighlights: [
      "Aulas adaptadas com acompanhamento humano",
      "Formação para equipas e técnicos",
      "Parcerias com visão de escala",
    ],
  },
  story: {
    eyebrow: "Quem somos",
    title:
      "Um projeto nascido no terreno e desenhado para crescer com seriedade.",
    description:
      "Trabalhamos com pessoas reais, histórias reais e desafios reais.",
    introduction:
      "A APAAI - Associação Portuguesa de Aikido Adaptado Inclusivo - nasce da experiência prática no terreno e da convicção de que o Aikido pode ser adaptado para permitir uma participação efetiva de pessoas com diferentes capacidades e necessidades.",
    cards: [
      {
        icon: "movement",
        title: "Missão em contexto real",
        description:
          "Levamos a prática a crianças, jovens e adultos, respeitando o ritmo, a comunicação e as necessidades de cada pessoa.",
      },
      {
        icon: "shield",
        title: "Progressão com adaptação",
        description:
          "Cada pessoa evolui ao seu ritmo, com segurança, confiança e acompanhamento.",
      },
      {
        icon: "globe",
        title: "Pronto para escala",
        description:
          "Um projeto preparado para crescer com impacto real nas pessoas e nas comunidades.",
      },
    ],
  },
  team: {
    eyebrow: "Quem está no terreno",
    title: "Uma equipa próxima da prática e das pessoas.",
    description:
      "A confiança nasce no contacto direto: na forma como se escuta, adapta e acompanha cada pessoa durante a prática.",
    members: [
      {
        name: "Hélder Oliveira Rodrigues",
        role: "Coordenação e desenvolvimento do projeto",
        description:
          "Experiência no ensino de Aikido e Aikido Adaptado em contexto real.",
      },
      {
        name: "Equipa técnica APAAI",
        role: "Apoio técnico e desenvolvimento das sessões",
        description:
          "Acompanhamento no terreno, adaptação da prática e apoio à evolução dos participantes.",
      },
    ],
  },
  programs: {
    eyebrow: "O projeto",
    title: "O que fazemos para transformar a inclusão em prática real.",
    description:
      "A nossa intervenção adapta-se a cada pessoa e a cada contexto, mantendo uma forma de trabalhar consistente, próxima e orientada para resultados reais.",
    cards: [
      {
        icon: "movement",
        title: "Aikido Adaptado Inclusivo",
        description:
          "Sessões adaptadas a pessoas com diferentes necessidades, com foco na participação, na confiança e no desenvolvimento individual.",
      },
      {
        icon: "users",
        title: "Aulas Regulares",
        description:
          "Sessões semanais que promovem rotina, evolução e integração no grupo, através de uma prática contínua e acessível.",
      },
      {
        icon: "graduation",
        title: "Formação e Capacitação",
        description:
          "Formação para técnicos, professores e parceiros, focada na adaptação da prática com segurança, clareza e intenção pedagógica.",
      },
      {
        icon: "calendar",
        title: "Eventos",
        description:
          "Atividades, demonstrações e encontros que dão visibilidade ao projeto e reforçam a ligação à comunidade.",
      },
    ],
    methodologyTitle: "Como trabalhamos",
    methodologyBody:
      "Começamos por ouvir e compreender cada contexto. Depois adaptamos a prática ao ritmo e às necessidades de cada pessoa. O resultado é um trabalho próximo, estruturado e com impacto real.",
    methodologyPoints: [
      "Adaptação funcional, relacional e comunicacional",
      "Ambiente seguro com progressão real e participação ativa",
      "Ligação entre prática, autoestima, inclusão e autonomia",
    ],
    programmeDescription:
      "A intervenção da APAAI é apoiada por um Programa Técnico e Pedagógico próprio, atualmente em desenvolvimento, que organiza princípios, metodologias e critérios de adaptação e progressão no Aikido Adaptado Inclusivo.",
  },
  impact: {
    eyebrow: "Impacto",
    title: "Impacto que se mede no corpo, na confiança e na relação.",
    description:
      "O impacto do projeto vai além da atividade física. Está na forma como cada pessoa participa, evolui e se sente integrada.",
    metrics: [
      {
        value: "40+",
        label: "Pessoas envolvidas",
        detail:
          "Praticantes, equipa técnica e participantes envolvidos nas diferentes ações do projeto.",
      },
      {
        value: "13",
        label: "Praticantes com deficiência",
        detail: "Participação em contexto de Aikido Adaptado Inclusivo.",
      },
      {
        label: "Vários contextos de intervenção",
        detail:
          "Instituições, comunidade, ensino, demonstrações e ações de formação.",
      },
      {
        label: "Experiência construída no terreno",
        detail:
          "Trabalho desenvolvido em contexto real, com adaptação contínua e acompanhamento próximo.",
      },
    ],
    outcomesTitle: "Resultados humanos que importam",
    outcomes: [
      "Mais autoestima: a prática reforça a confiança, a segurança e a presença.",
      "Mais inclusão: cada aula cria pertença, relação e reconhecimento.",
      "Mais desenvolvimento: melhoria da coordenação, da consciência corporal e da capacidade de adaptação.",
    ],
  },
  credibility: {
    eyebrow: "Parcerias e credibilidade",
    title:
      "Uma rede de parceiros para levar o Aikido Adaptado Inclusivo a mais pessoas e comunidades.",
    description:
      "A APAAI desenvolve o seu trabalho em articulação com associações, instituições sociais, autarquias, entidades desportivas e parceiros nacionais e internacionais, construindo relações de cooperação assentes na inclusão, proximidade e desenvolvimento do Aikido Adaptado Inclusivo.",
    cards: [
      {
        icon: "handshake",
        title: "Experiência em instituições reais",
        description:
          "O trabalho desenvolvido em contextos como Raríssimas e CERCIMB mostra que a metodologia pode acontecer onde a inclusão precisa de existir todos os dias.",
      },
      {
        icon: "path",
        title: "Articulação e cooperação técnica",
        description:
          "A APAAI desenvolve relações de cooperação técnica no universo do Aikido, promovendo qualidade, partilha de conhecimento e desenvolvimento responsável da prática adaptada e inclusiva.",
      },
      {
        icon: "spark",
        title: "Cooperação nacional e internacional",
        description:
          "A APAAI participa no desenvolvimento de projetos, candidaturas e redes de cooperação com autarquias, instituições, entidades de ensino e parceiros nacionais e europeus.",
      },
    ],
    partnerCta: {
      label: "Abrir conversa institucional",
      href: getContactHref("pt", "partnership"),
      variant: "primary",
    },
  },
  roadmap: {
    eyebrow: "Visão de expansão",
    title: "Uma ambição nacional construída a partir da experiência local.",
    description:
      "O objetivo não é apenas aumentar o número de sessões. É desenvolver uma resposta estruturada de Aikido Adaptado Inclusivo que possa chegar a novos territórios, mantendo a qualidade, a segurança, a proximidade e a capacidade de adaptação a cada realidade.",
    phases: [
      {
        phase: "Curto prazo",
        title: "Consolidar o território",
        description:
          "Consolidar as atividades na Baixa da Banheira, Moita e Alhos Vedros, reforçar a participação e aprofundar as relações de cooperação com instituições, associações e autarquias locais.",
      },
      {
        phase: "Médio prazo",
        title: "Formar e expandir",
        description:
          "Desenvolver o Programa Técnico e Pedagógico da APAAI, promover a formação de técnicos e equipas parceiras e apoiar a criação de novas respostas e polos de Aikido Adaptado Inclusivo em articulação com instituições, autarquias, escolas e organizações sociais.",
      },
      {
        phase: "Longo prazo",
        title: "Construir uma rede nacional e internacional",
        description:
          "Afirmar a APAAI como uma referência no desenvolvimento do Aikido Adaptado Inclusivo, promovendo uma rede de cooperação nacional e internacional, a participação em projetos europeus e a partilha de conhecimento e boas práticas.",
      },
    ],
  },
  locations: {
    eyebrow: "Onde estamos",
    title: "Margem Sul como base. Portugal como horizonte.",
    description:
      "A APAAI desenvolve atualmente atividade em diferentes territórios da Margem Sul, em proximidade com as pessoas, instituições, associações e comunidades locais. A partir desta base, continuamos a construir uma rede preparada para levar o Aikido Adaptado Inclusivo a novos territórios.",
    cards: [
      {
        icon: "pin",
        title: "Baixa da Banheira",
        description:
          "Um dos territórios de base da APAAI, onde desenvolvemos atividade e mantemos uma ligação próxima à comunidade e aos parceiros locais.",
      },
      {
        icon: "pin",
        title: "Moita",
        description:
          "Desenvolvimento do Aikido Adaptado Inclusivo em contexto comunitário, em articulação com as autarquias e parceiros locais.",
      },
      {
        icon: "pin",
        title: "Alhos Vedros",
        description:
          "Intervenção em contexto institucional e adaptado, através do trabalho desenvolvido com a CERCIMB.",
      },
    ],
  },
  news: {
    eyebrow: "Notícias e eventos",
    title: "Uma montra viva do que fazemos no terreno.",
    description:
      "Acompanhe as atividades, projetos, eventos, formações e momentos que marcam o percurso da APAAI.",
  },
  collaboration: {
    eyebrow: "Participe e colabore",
    title: "Há várias formas de conhecer e trabalhar com a APAAI.",
    description:
      "Instituições, famílias, técnicos e parceiros podem conhecer o projeto, participar nas nossas iniciativas ou desenvolver connosco novas formas de colaboração.",
    cards: [
      {
        category: "Apresentações",
        title: "Conheça o projeto na sua instituição",
        description:
          "Apresentações e sessões práticas para instituições e equipas técnicas.",
        cta: "Solicitar apresentação",
        href: getContactHref("pt", "presentation"),
      },
      {
        category: "Comunidade",
        title: "Conheça e experimente o Aikido Adaptado Inclusivo",
        description:
          "Momentos abertos para participantes, famílias e comunidade.",
        cta: "Pedir informação",
        href: getContactHref("pt", "participation"),
      },
      {
        category: "Formação e cooperação",
        title: "Formação e partilha de boas práticas",
        description:
          "Ações de formação, sensibilização e partilha de experiências para técnicos, professores, instituições e organizações.",
        cta: "Propor colaboração",
        href: getContactHref("pt", "partnership"),
      },
    ],
  },
  gallery: {
    eyebrow: "Galeria do projeto",
    title: "O projeto visto no terreno.",
    description:
      "Momentos reais de prática, adaptação e acompanhamento próximo.",
    photos: [
      {
        src: "/media/project/apaai-guided-practice-bw.jpeg",
        alt: "Momento de prática orientada entre instrutor e participante em contexto adaptado.",
      },
      {
        src: "/media/project/apaai-adapted-partner-drill.jpeg",
        alt: "Exercício de parceiro em contexto desportivo com adaptação e acompanhamento.",
      },
    ],
  },
  contact: {
    eyebrow: "Contactos",
    title: "Vamos construir impacto juntos.",
    description:
      "Se pretende participar, conhecer o projeto, apoiar a APAAI, solicitar uma apresentação ou desenvolver uma colaboração, fale connosco.",
    prompt: "Escolha a melhor forma de entrar em contacto connosco:",
    quickLinks: [
      {
        label: "Quero participar",
        href: getContactHref("pt", "participation"),
        variant: "secondary",
      },
      {
        label: "Quero apoiar",
        href: getContactHref("pt", "support"),
        variant: "secondary",
      },
      {
        label: "Parceria institucional",
        href: getContactHref("pt", "partnership"),
        variant: "secondary",
      },
      {
        label: "Facebook oficial",
        href: "https://www.facebook.com/people/Associa%C3%A7%C3%A3o-Portuguesa-de-Aikido-Adaptado-Inclusivo-APAAI/61574527752279/",
        variant: "facebook",
      },
    ],
    whatsappCta: {
      label: "Falar por WhatsApp",
      href: "https://wa.me/351926334870?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20APAAI.",
      variant: "secondary",
    },
    detailsTitle: "Contacto direto",
    details: [
      {
        label: "Email",
        value: "appaigeral@gmail.com",
        href: "mailto:appaigeral@gmail.com",
      },
      { label: "Telefone", value: "926 334 870", href: "tel:+351926334870" },
      {
        label: "Facebook",
        value: "Facebook oficial da APAAI",
        href: "https://www.facebook.com/people/Associa%C3%A7%C3%A3o-Portuguesa-de-Aikido-Adaptado-Inclusivo-APAAI/61574527752279/",
      },
    ],
    formFields: [
      { label: "Nome", name: "name", placeholder: "O seu nome" },
      {
        label: "Entidade/Instituição",
        name: "organization",
        placeholder: "Opcional",
      },
      {
        label: "Email",
        name: "email",
        type: "email",
        placeholder: "nome@exemplo.pt",
      },
      {
        label: "Telefone",
        name: "phone",
        type: "tel",
        placeholder: "Opcional",
      },
    ],
    messageLabel: "Mensagem",
    messagePlaceholder: "Conte-nos o seu contexto, necessidade ou ideia.",
    submitLabel: "Abrir email",
    note: "Ao clicar, o seu programa de email abre com a mensagem preparada para a equipa da APAAI.",
  },
  footer: {
    statement:
      "A inclusão não é um extra. É a forma como desenhamos a prática desde o primeiro encontro.",
    location: "Baixa da Banheira · Moita · Alhos Vedros | Portugal",
    rights: "APAAI - Associação Portuguesa de Aikido Adaptado Inclusivo",
  },
};
