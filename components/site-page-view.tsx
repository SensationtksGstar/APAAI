import type { Metadata } from "next";

import { ContactSection } from "@/components/contact-section";
import { SiteFrame } from "@/components/site-frame";
import {
  CredibilitySection,
  FinalCtaSection,
  HomeHero,
  ImpactSection,
  LocationsSection,
  NewsSection,
  PageHero,
  ProgramsSection,
  RouteHighlightsSection,
  StorySection,
} from "@/components/site-sections";
import type { SiteContent } from "@/data/site-content";
import { getPageHref, type Locale, type SitePage } from "@/lib/i18n";

type SitePageViewProps = {
  content: SiteContent;
  locale: Locale;
  page: SitePage;
};

type PageCopy = {
  eyebrow: string;
  title: string;
  description: string;
  actions: Array<{
    label: string;
    href: string;
    variant?: "primary" | "secondary";
  }>;
};

function getPageCopy(content: SiteContent, locale: Locale, page: SitePage): PageCopy {
  switch (page) {
    case "about":
      return {
        eyebrow: content.story.eyebrow,
        title: content.story.title,
        description: content.story.description,
        actions: [
          {
            label: locale === "pt" ? "Conhecer o projeto" : "Explore the project",
            href: getPageHref(locale, "project"),
          },
          {
            label: locale === "pt" ? "Falar connosco" : "Contact us",
            href: getPageHref(locale, "contact"),
            variant: "secondary",
          },
        ],
      };
    case "project":
      return {
        eyebrow: content.programs.eyebrow,
        title: content.programs.title,
        description: content.programs.description,
        actions: [
          {
            label: locale === "pt" ? "Pedir informação" : "Request information",
            href: getPageHref(locale, "contact"),
          },
          {
            label: locale === "pt" ? "Ver impacto" : "View impact",
            href: getPageHref(locale, "impact"),
            variant: "secondary",
          },
        ],
      };
    case "impact":
      return {
        eyebrow: content.impact.eyebrow,
        title: content.impact.title,
        description: content.impact.description,
        actions: [
          {
            label: locale === "pt" ? "Explorar parcerias" : "Explore partnerships",
            href: getPageHref(locale, "partners"),
          },
          {
            label: locale === "pt" ? "Entrar em contacto" : "Get in touch",
            href: getPageHref(locale, "contact"),
            variant: "secondary",
          },
        ],
      };
    case "partners":
      return {
        eyebrow: content.credibility.eyebrow,
        title: content.credibility.title,
        description: content.credibility.description,
        actions: [
          {
            label: locale === "pt" ? "Abrir conversa" : "Start the conversation",
            href: getPageHref(locale, "contact"),
          },
          {
            label: locale === "pt" ? "Ver projeto" : "View the project",
            href: getPageHref(locale, "project"),
            variant: "secondary",
          },
        ],
      };
    case "locations":
      return {
        eyebrow: content.locations.eyebrow,
        title: content.locations.title,
        description: content.locations.description,
        actions: [
          {
            label: locale === "pt" ? "Marcar contacto" : "Book a contact",
            href: getPageHref(locale, "contact"),
          },
          {
            label: locale === "pt" ? "Ver notícias" : "View news",
            href: getPageHref(locale, "news"),
            variant: "secondary",
          },
        ],
      };
    case "news":
      return {
        eyebrow: content.news.eyebrow,
        title: content.news.title,
        description: content.news.description,
        actions: [
          {
            label: locale === "pt" ? "Pedir informação" : "Request information",
            href: getPageHref(locale, "contact"),
          },
          {
            label: locale === "pt" ? "Ver projeto" : "View the project",
            href: getPageHref(locale, "project"),
            variant: "secondary",
          },
        ],
      };
    case "contact":
      return {
        eyebrow: content.contact.eyebrow,
        title: content.contact.title,
        description: content.contact.description,
        actions: [
          {
            label: content.contact.whatsappCta.label,
            href: content.contact.whatsappCta.href,
          },
          {
            label: locale === "pt" ? "Ver parcerias" : "View partnerships",
            href: getPageHref(locale, "partners"),
            variant: "secondary",
          },
        ],
      };
    case "home":
    default:
      return {
        eyebrow: content.hero.eyebrow,
        title: content.hero.title,
        description: content.hero.subtitle,
        actions: [],
      };
  }
}

function getPageMeta(content: SiteContent, locale: Locale, page: SitePage) {
  if (page === "home") {
    return {
      title: content.seo.title,
      description: content.seo.description,
      href: getPageHref(locale, "home"),
    };
  }

  const copy = getPageCopy(content, locale, page);

  return {
    title: `${copy.title} | APAAI`,
    description: copy.description,
    href: getPageHref(locale, page),
  };
}

export function getSitePageMetadata(
  content: SiteContent,
  locale: Locale,
  page: SitePage,
): Metadata {
  const meta = getPageMeta(content, locale, page);

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: meta.href,
      languages: {
        pt: getPageHref("pt", page),
        en: getPageHref("en", page),
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.href,
      siteName: "APAAI",
      locale: locale === "pt" ? "pt_PT" : "en_GB",
      type: "website",
      images: [
        {
          url: "/logo-apaai.jpeg",
          width: 768,
          height: 768,
          alt: "APAAI logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/logo-apaai.jpeg"],
    },
  };
}

function renderPageSections(content: SiteContent, locale: Locale, page: SitePage) {
  switch (page) {
    case "about":
      return (
        <>
          <StorySection content={content} />
          <CredibilitySection content={content} />
          <FinalCtaSection content={content} locale={locale} />
        </>
      );
    case "project":
      return (
        <>
          <ProgramsSection content={content} />
          <LocationsSection content={content} />
          <FinalCtaSection content={content} locale={locale} />
        </>
      );
    case "impact":
      return (
        <>
          <ImpactSection content={content} />
          <FinalCtaSection content={content} locale={locale} />
        </>
      );
    case "partners":
      return (
        <>
          <CredibilitySection content={content} />
          <FinalCtaSection content={content} locale={locale} />
        </>
      );
    case "locations":
      return (
        <>
          <LocationsSection content={content} />
          <FinalCtaSection content={content} locale={locale} />
        </>
      );
    case "news":
      return (
        <>
          <NewsSection content={content} />
          <FinalCtaSection content={content} locale={locale} />
        </>
      );
    case "contact":
      return <ContactSection content={content} />;
    case "home":
    default:
      return (
        <>
          <StorySection content={content} />
          <RouteHighlightsSection content={content} locale={locale} />
          <NewsSection content={content} />
          <FinalCtaSection content={content} locale={locale} />
        </>
      );
  }
}

export function SitePageView({ content, locale, page }: SitePageViewProps) {
  if (page === "home") {
    return (
      <SiteFrame
        content={content}
        locale={locale}
        currentPage="home"
        hero={<HomeHero content={content} locale={locale} />}
      >
        {renderPageSections(content, locale, page)}
      </SiteFrame>
    );
  }

  const copy = getPageCopy(content, locale, page);

  return (
    <SiteFrame
      content={content}
      locale={locale}
      currentPage={page}
      hero={
        <PageHero
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
          actions={copy.actions}
        />
      }
    >
      {renderPageSections(content, locale, page)}
    </SiteFrame>
  );
}
