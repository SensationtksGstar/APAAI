import Image from "next/image";
import Link from "next/link";

import { LanguageSwitcher } from "@/components/language-switcher";
import type { SiteContent } from "@/data/site-content";
import { getAssetPath } from "@/lib/assets";
import { getPageHref, type Locale, type SitePage } from "@/lib/i18n";

type SiteHeaderProps = {
  content: SiteContent;
  locale: Locale;
  currentPage: SitePage;
};

export function SiteHeader({ content, locale, currentPage }: SiteHeaderProps) {
  const currentHref = getPageHref(locale, currentPage);

  return (
    <header className="relative z-20 border-b border-white/10">
      <div className="container-shell flex flex-col gap-4 py-5 lg:flex-row lg:items-center lg:justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-3 text-white">
          <div className="overflow-hidden rounded-[1.35rem] border border-white/15 bg-white/10 p-1 shadow-glow">
            <Image
              src={getAssetPath("/logo-apaai.jpeg")}
              alt="Logótipo APAAI"
              width={56}
              height={56}
              className="h-14 w-14 rounded-[1rem] object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/56">APAAI</p>
            <p className="max-w-xs text-sm font-medium text-white/84">Aikido Inclusive</p>
          </div>
        </Link>

        <nav
          aria-label={content.locale === "pt" ? "Navegação principal" : "Primary navigation"}
          className="overflow-x-auto"
        >
          <ul className="flex min-w-max items-center gap-5 text-sm text-white/72">
            {content.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`nav-link ${item.href === currentHref ? "text-white" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher currentLocale={locale} currentPage={currentPage} />
          <Link href={content.headerCta.href} className="button button-primary hidden lg:inline-flex">
            {content.headerCta.label}
          </Link>
        </div>
      </div>
    </header>
  );
}

