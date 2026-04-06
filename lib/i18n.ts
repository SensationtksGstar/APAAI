export const locales = ["pt", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

export const sitePages = [
  "home",
  "about",
  "project",
  "impact",
  "partners",
  "locations",
  "news",
  "contact",
] as const;

export type SitePage = (typeof sitePages)[number];

const pageSlugs: Record<Locale, Record<SitePage, string>> = {
  pt: {
    home: "",
    about: "quem-somos",
    project: "projeto",
    impact: "impacto",
    partners: "parcerias",
    locations: "onde-estamos",
    news: "noticias",
    contact: "contactos",
  },
  en: {
    home: "",
    about: "about",
    project: "project",
    impact: "impact",
    partners: "partnerships",
    locations: "locations",
    news: "news",
    contact: "contact",
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const localeLabel: Record<Locale, string> = {
  pt: "PT",
  en: "EN",
};

export function getPageSlug(locale: Locale, page: SitePage): string {
  return pageSlugs[locale][page];
}

export function getPageHref(locale: Locale, page: SitePage): string {
  const slug = getPageSlug(locale, page);

  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

const publicBasePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

export function getPublicPageHref(locale: Locale, page: SitePage): string {
  return `${publicBasePath}${getPageHref(locale, page)}`;
}

export function resolveSitePage(locale: Locale, slug?: string): SitePage | null {
  if (!slug) {
    return "home";
  }

  const page = sitePages.find((entry) => pageSlugs[locale][entry] === slug);

  return page ?? null;
}
