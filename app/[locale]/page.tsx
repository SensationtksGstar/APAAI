import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Homepage } from "@/components/homepage";
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

  return {
    title: content.seo.title,
    description: content.seo.description,
    alternates: {
      canonical: `/${params.locale}`,
      languages: {
        pt: "/pt",
        en: "/en",
      },
    },
    openGraph: {
      title: content.seo.title,
      description: content.seo.description,
      url: `/${params.locale}`,
      siteName: "APAAI",
      locale: params.locale === "pt" ? "pt_PT" : "en_GB",
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
      title: content.seo.title,
      description: content.seo.description,
      images: ["/logo-apaai.jpeg"],
    },
  };
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

