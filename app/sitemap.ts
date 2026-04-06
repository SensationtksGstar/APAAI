import type { MetadataRoute } from "next";

import { getPageHref, locales } from "@/lib/i18n";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://apaai.pt";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return locales.map((locale) => ({
    url: `${baseUrl}${getPageHref(locale, "home")}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: locale === "pt" ? 1 : 0.9,
  }));
}
