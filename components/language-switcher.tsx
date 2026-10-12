import {
  getPublicPageHref,
  localeLabel,
  locales,
  type Locale,
  type SitePage,
} from "@/lib/i18n";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  currentPage: SitePage;
};

export function LanguageSwitcher({
  currentLocale,
  currentPage,
}: LanguageSwitcherProps) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 p-1 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur">
      {locales.map((locale) => {
        const isActive = locale === currentLocale;

        return (
          <a
            key={locale}
            href={getPublicPageHref(locale, currentPage)}
            hrefLang={locale}
            lang={locale}
            aria-current={isActive ? "page" : undefined}
            className={`rounded-full px-3 py-2 transition ${
              isActive
                ? "bg-white text-[var(--ink)]"
                : "text-white/78 hover:bg-white/10 hover:text-white"
            }`}
          >
            {localeLabel[locale]}
          </a>
        );
      })}
    </div>
  );
}
