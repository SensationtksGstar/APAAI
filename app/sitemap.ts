import type { MetadataRoute } from "next";

import { getPageHref, locales, sitePages } from "@/lib/i18n";

const baseUrl = "https://apaai.pt";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return locales.flatMap((locale) =>
    sitePages.map((page) => ({
      url: `${baseUrl}${getPageHref(locale, page)}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: locale === "pt" && page === "home" ? 1 : page === "home" ? 0.9 : 0.8,
    })),
  );
}
