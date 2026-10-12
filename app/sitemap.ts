import type { MetadataRoute } from "next";
export const dynamic = "force-static";

import { getPublicPageHref, locales, standalonePages } from "@/lib/i18n";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sensationtksgstar.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return locales.flatMap((locale) =>
    ["home" as const, ...standalonePages].map((page) => ({
      url: `${baseUrl}${getPublicPageHref(locale, page)}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: page === "home" ? (locale === "pt" ? 1 : 0.9) : 0.6,
    })),
  );
}
