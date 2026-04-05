import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SitePageView, getSitePageMetadata } from "@/components/site-page-view";
import { getSiteContent } from "@/data/site-content";
import {
  getPageSlug,
  isLocale,
  locales,
  resolveSitePage,
  sitePages,
} from "@/lib/i18n";

type LocaleSlugPageProps = {
  params: {
    locale: string;
    slug: string;
  };
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    sitePages
      .filter((page) => page !== "home")
      .map((page) => ({
        locale,
        slug: getPageSlug(locale, page),
      })),
  );
}

export function generateMetadata({ params }: LocaleSlugPageProps): Metadata {
  if (!isLocale(params.locale)) {
    return {};
  }

  const page = resolveSitePage(params.locale, params.slug);

  if (!page || page === "home") {
    return {};
  }

  return getSitePageMetadata(getSiteContent(params.locale), params.locale, page);
}

export default function LocaleSlugPage({ params }: LocaleSlugPageProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const page = resolveSitePage(params.locale, params.slug);

  if (!page || page === "home") {
    notFound();
  }

  return (
    <SitePageView
      content={getSiteContent(params.locale)}
      locale={params.locale}
      page={page}
    />
  );
}
