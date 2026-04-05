import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Homepage } from "@/components/homepage";
import { getSitePageMetadata } from "@/components/site-page-view";
import { getSiteContent } from "@/data/site-content";
import { isLocale, locales } from "@/lib/i18n";

type LocalePageProps = {
  params: {
    locale: string;
  };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: LocalePageProps): Metadata {
  if (!isLocale(params.locale)) {
    return {};
  }

  const content = getSiteContent(params.locale);

  return getSitePageMetadata(content, params.locale, "home");
}

export default function LocalePage({ params }: LocalePageProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const content = getSiteContent(params.locale);

  return (
    <>
      <a href="#main" className="skip-link">
        {content.skipToContent}
      </a>
      <Homepage content={content} locale={params.locale} />
    </>
  );
}
