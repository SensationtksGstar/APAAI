import type { Locale } from "@/lib/i18n";

import { enContent } from "@/data/locales/en";
import { ptContent } from "@/data/locales/pt";

type NavItem = {
  label: string;
  href: string;
};

type SeoContent = {
  title: string;
  description: string;
};

type ActionLink = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "facebook";
};

type HeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: ActionLink;
  secondaryCta: ActionLink;
  proof: string[];
  posterKicker: string;
  posterTitle: string;
  posterBody: string;
  posterHighlights: string[];
};

type FeatureCard = {
  icon:
    | "spark"
    | "shield"
    | "handshake"
    | "movement"
    | "users"
    | "graduation"
    | "calendar"
    | "globe"
    | "pin"
    | "path";
  title: string;
  description: string;
};

type ImpactMetric = {
  value: string;
  label: string;
  detail: string;
};

type TimelinePhase = {
  phase: string;
  title: string;
  description: string;
};

type NewsCard = {
  category: string;
  title: string;
  description: string;
  cta: string;
  href: string;
};

type GalleryPhoto = {
  src: string;
  alt: string;
};

type TeamMember = {
  name: string;
  role: string;
  description: string;
};

type ContactField = {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
};

export type SiteContent = {
  locale: Locale;
  localeName: string;
  seo: SeoContent;
  skipToContent: string;
  headerCta: ActionLink;
  nav: NavItem[];
  hero: HeroContent;
  story: {
    eyebrow: string;
    title: string;
    description: string;
    cards: FeatureCard[];
  };
  team: {
    eyebrow: string;
    title: string;
    description: string;
    members: TeamMember[];
  };
  programs: {
    eyebrow: string;
    title: string;
    description: string;
    cards: FeatureCard[];
    methodologyTitle: string;
    methodologyBody: string;
    methodologyPoints: string[];
  };
  impact: {
    eyebrow: string;
    title: string;
    description: string;
    metrics: ImpactMetric[];
    outcomesTitle: string;
    outcomes: string[];
    note: string;
  };
  credibility: {
    eyebrow: string;
    title: string;
    description: string;
    cards: FeatureCard[];
    ecosystemTitle: string;
    ecosystem: string[];
    programsNote: string;
    partnerCta: ActionLink;
  };
  roadmap: {
    eyebrow: string;
    title: string;
    description: string;
    phases: TimelinePhase[];
  };
  locations: {
    eyebrow: string;
    title: string;
    description: string;
    cards: FeatureCard[];
  };
  news: {
    eyebrow: string;
    title: string;
    description: string;
    cards: NewsCard[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    description: string;
    photos: GalleryPhoto[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    prompt: string;
    quickLinks: ActionLink[];
    whatsappCta: ActionLink;
    detailsTitle: string;
    details: {
      label: string;
      value: string;
      href?: string;
    }[];
    formFields: ContactField[];
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
    note: string;
  };
  footer: {
    statement: string;
    location: string;
    rights: string;
  };
};

const siteContent: Record<Locale, SiteContent> = {
  pt: ptContent,
  en: enContent,
};

export function getSiteContent(locale: Locale): SiteContent {
  return siteContent[locale];
}
