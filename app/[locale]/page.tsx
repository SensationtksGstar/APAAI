import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Homepage } from "@/components/homepage";
import { getSitePageMetadata } from "@/components/site-page-view";
import { getSiteContent } from "@/data/site-content";
import { isLocale, locales } from "@/lib/i18n";

type LocalePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const content = getSiteContent(locale);

  return getSitePageMetadata(content, locale, "home");
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  return <Homepage content={getSiteContent(locale)} locale={locale} />;
}
