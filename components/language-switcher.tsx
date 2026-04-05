import Link from "next/link";

import { localeLabel, locales, type Locale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  currentLocale: Locale;
};

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 p-1 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur">
      {locales.map((locale) => {
        const isActive = locale === currentLocale;

        return (
          <Link
            key={locale}
            href={`/${locale}`}
            className={`rounded-full px-3 py-2 transition ${
              isActive
                ? "bg-white text-[var(--ink)]"
                : "text-white/78 hover:bg-white/10 hover:text-white"
            }`}
          >
            {localeLabel[locale]}
          </Link>
        );
      })}
    </div>
  );
}

