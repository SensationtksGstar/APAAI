import type { Metadata } from "next";
import { SiteFrame } from "@/components/site-frame";
import { ContactSection } from "@/components/contact-section";
import { InstitutionalContent } from "@/components/institutional-pages";
import { NewsFeed } from "@/components/news-feed";
import { getInstitutionalCopy, institutionalLabels } from "@/data/association";
import {
  HomeHero,
  PageHero,
  ProjectStatementSection,
  StorySection,
  TeamSection,
  ProgramsSection,
  ImpactSection,
  CredibilitySection,
  ProjectGallerySection,
  LocationsSection,
  NewsSection,
  CollaborationSection,
} from "@/components/site-sections";
import type { SiteContent } from "@/data/site-content";
import { getAssetPath } from "@/lib/assets";
import {
  getPageHref,
  getPublicPageHref,
  type Locale,
  type SitePage,
} from "@/lib/i18n";

function pageCopy(content: SiteContent, locale: Locale, page: SitePage) {
  if (page === "news")
    return {
      title: locale === "pt" ? "Notícias e Eventos" : "News and Events",
      description: content.news.description,
    };
  if (page in institutionalLabels[locale])
    return getInstitutionalCopy(locale, page);
  return { title: content.seo.title, description: content.seo.description };
}

export function getSitePageMetadata(
  content: SiteContent,
  locale: Locale,
  page: SitePage,
): Metadata {
  const copy = pageCopy(content, locale, page);
  const title = page === "home" ? copy.title : `${copy.title} | APAAI`;
  return {
    title,
    description: copy.description,
    alternates: {
      canonical: getPublicPageHref(locale, page),
      languages: {
        pt: getPublicPageHref("pt", page),
        en: getPublicPageHref("en", page),
      },
    },
    openGraph: {
      title,
      description: copy.description,
      url: getPublicPageHref(locale, page),
      siteName: "APAAI",
      locale: locale === "pt" ? "pt_PT" : "en_GB",
      type: "website",
      images: [
        {
          url: getAssetPath("/logo-apaai.jpeg"),
          width: 768,
          height: 768,
          alt: "APAAI",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: copy.description,
      images: [getAssetPath("/logo-apaai.jpeg")],
    },
  };
}

export function SitePageView({
  content,
  locale,
  page,
}: {
  content: SiteContent;
  locale: Locale;
  page: SitePage;
}) {
  const copy = pageCopy(content, locale, page);
  return (
    <SiteFrame
      content={content}
      locale={locale}
      currentPage={page}
      hero={
        page === "home" ? (
          <HomeHero content={content} locale={locale} />
        ) : (
          <PageHero
            eyebrow="APAAI"
            {...copy}
            actions={[
              {
                label: locale === "pt" ? "Voltar ao início" : "Back to home",
                href: getPageHref(locale, "home"),
                variant: "secondary",
              },
            ]}
          />
        )
      }
    >
      {page === "home" ? (
        <>
          <ProjectStatementSection content={content} />
          <StorySection content={content} />
          <TeamSection content={content} />
          <ProgramsSection content={content} />
          <ImpactSection content={content} />
          <CredibilitySection content={content} />
          <ProjectGallerySection content={content} />
          <LocationsSection content={content} />
          <NewsSection content={content} />
          <CollaborationSection content={content} />
          <ContactSection content={content} />
        </>
      ) : (
        <div className="section-shell">
          <div className="container-shell">
            {page === "news" ? (
              <NewsFeed content={content} archive />
            ) : (
              <InstitutionalContent locale={locale} page={page} />
            )}
          </div>
        </div>
      )}
    </SiteFrame>
  );
}
