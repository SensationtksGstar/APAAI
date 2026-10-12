import type { Locale, SitePage } from "@/lib/i18n";

export type AssociationMember = {
  name: string;
  role?: Record<Locale, string>;
  grade?: string;
  photo?: string;
};

export const institutionalLabels: Record<Locale, Record<string, string>> = {
  pt: {
    governance: "Órgãos Sociais",
    team: "Equipa",
    documents: "Documentação Institucional",
    "technical-program": "Programa Técnico e Pedagógico",
  },
  en: {
    governance: "Governing Bodies",
    team: "Team",
    documents: "Institutional Documents",
    "technical-program": "Technical and Pedagogical Programme",
  },
};

export const governance = [
  {
    title: { pt: "Direção", en: "Board" },
    members: [
      {
        role: { pt: "Presidente", en: "President" },
        name: "Hélder Oliveira Rodrigues",
      },
      {
        role: { pt: "Secretário", en: "Secretary" },
        name: "Eduardo Jorge Rodrigues Duarte",
      },
      {
        role: { pt: "Tesoureiro", en: "Treasurer" },
        name: "Alexandre Daniel Lourenço Francisco",
      },
    ],
  },
  {
    title: { pt: "Mesa da Assembleia Geral", en: "General Assembly Bureau" },
    members: [
      {
        role: { pt: "Presidente", en: "President" },
        name: "Carla Gonçalves Mendes Rodrigues",
      },
      {
        role: { pt: "Secretária", en: "Secretary" },
        name: "Leonor Mendes Rodrigues",
      },
      {
        role: { pt: "Vogal", en: "Member" },
        name: "Christopher James Eyre Howard",
      },
    ],
  },
  {
    title: { pt: "Conselho Fiscal", en: "Supervisory Board" },
    members: [
      {
        role: { pt: "Presidente", en: "President" },
        name: "Nádia Barreto Dias",
      },
      {
        role: { pt: "1.ª Vogal", en: "First Member" },
        name: "Joana Alves Amorim",
      },
      {
        role: { pt: "2.ª Vogal", en: "Second Member" },
        name: "Nádia Raquel Oliveira Rodrigues",
      },
    ],
  },
];

const helder: AssociationMember = {
  name: "Hélder Oliveira Rodrigues",
  role: {
    pt: "Coordenação e Desenvolvimento do Projeto",
    en: "Project Coordination and Development",
  },
  grade: "3.º Dan ACPA | 2.º Dan Aikikai",
};

export const teamGroups: Array<{
  title: Record<Locale, string>;
  description?: Record<Locale, string>;
  members: AssociationMember[];
}> = [
  {
    title: {
      pt: "Coordenação e desenvolvimento do projeto",
      en: "Project coordination and development",
    },
    members: [helder],
  },
  {
    title: {
      pt: "Coordenação pedagógica e técnico-científica",
      en: "Pedagogical and technical-scientific coordination",
    },
    members: [
      {
        name: "Prof. Doutor Amílcar Antunes",
        role: {
          pt: "Coordenação Pedagógica e Técnico-Científica",
          en: "Pedagogical and Technical-Scientific Coordination",
        },
        grade: "6.º Dan ACPA | 6.º Dan Aikikai",
      },
    ],
  },
  {
    title: { pt: "Equipa de instrutores", en: "Instructor team" },
    members: [
      { ...helder, role: { pt: "Instrutor", en: "Instructor" } },
      {
        name: "Eduardo Duarte",
        role: { pt: "Instrutor", en: "Instructor" },
        grade: "4.º Dan ACPA | 3.º Dan Aikikai",
      },
      {
        name: "Alexandre Francisco",
        role: { pt: "Instrutor", en: "Instructor" },
        grade: "4.º Dan ACPA | 3.º Dan Aikikai",
      },
    ],
  },
  {
    title: { pt: "Equipa de apoio", en: "Support team" },
    description: {
      pt: "Apoio às sessões, acompanhamento dos participantes e colaboração no desenvolvimento das atividades da APAAI.",
      en: "Session support, participant guidance and collaboration in the development of APAAI activities.",
    },
    members: [
      { name: "Carla Rodrigues" },
      { name: "Leonor Rodrigues" },
      { name: "Joana Gomes" },
      { name: "Sofia Mata" },
      { name: "Christopher James Eyre Howard" },
    ],
  },
];

export type Partner = { name: string; logo?: string; logoClass?: string };
export const nationalPartners: Partner[] = [
  { name: "O Chinquilho", logo: "/media/partners/o-chinquilho.jpg" },
  { name: "Raríssimas", logo: "/media/partners/rarissimas.jpg" },
  {
    name: "CERCIMB",
    logo: "/media/partners/cercimb.jpg",
    logoClass: "partner-logo-wide",
  },
  {
    name: "Câmara Municipal da Moita",
    logo: "/media/partners/municipio-moita.jpg",
  },
  {
    name: "Junta de Freguesia da Moita",
    logo: "/media/partners/junta-moita.jpg",
  },
  { name: "Junta de Freguesia da Baixa da Banheira" },
  {
    name: "Junta de Freguesia de Alhos Vedros",
    logo: "/media/partners/junta-alhos-vedros.jpg",
  },
];

export const technicalPartner: Partner = {
  name: "ACPA",
  logo: "/media/partners/acpa.jpg",
};

export const publicDocuments: Array<{
  name: Record<Locale, string>;
  path?: string;
}> = [{ name: { pt: "Estatutos da APAAI", en: "APAAI Statutes" } }];

export function getInstitutionalCopy(locale: Locale, page: SitePage) {
  const description: Record<string, Record<Locale, string>> = {
    governance: {
      pt: "A estrutura formal da Associação Portuguesa de Aikido Adaptado Inclusivo.",
      en: "The formal structure of the Portuguese Association of Inclusive Adapted Aikido.",
    },
    team: {
      pt: "Uma equipa próxima da prática e das pessoas.",
      en: "A team close to the practice and to people.",
    },
    documents: {
      pt: "Transparência, organização e compromisso. Consulte os principais documentos institucionais disponibilizados pela APAAI.",
      en: "Transparency, organisation and commitment. Explore the main institutional documents made available by APAAI.",
    },
    "technical-program": {
      pt: "A APAAI encontra-se a desenvolver um Programa Técnico e Pedagógico próprio de Aikido Adaptado Inclusivo, estruturado a partir da experiência no terreno e orientado pelos princípios da segurança, participação, adaptação e progressão individual.",
      en: "APAAI is developing its own Technical and Pedagogical Programme for Inclusive Adapted Aikido, built on field experience and guided by safety, participation, adaptation and individual progression.",
    },
  };
  return {
    title: institutionalLabels[locale][page],
    description: description[page]?.[locale] ?? "",
  };
}
