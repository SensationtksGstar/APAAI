import type { MetadataRoute } from "next";

import { locales } from "@/lib/i18n";

const baseUrl = "https://apaai.pt";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: locale === "pt" ? 1 : 0.9,
  }));
}
