import { ResponsiveImage as Image } from "@/components/responsive-image";
import { LanguageSwitcher } from "@/components/language-switcher";
import { SmartLink } from "@/components/site-ui";
import { institutionalLabels } from "@/data/association";
import type { SiteContent } from "@/data/site-content";
import { getAssetPath } from "@/lib/assets";
import {
  getPageHref,
  getSectionHref,
  institutionalPages,
  type Locale,
  type SitePage,
} from "@/lib/i18n";

export function SiteHeader({
  content,
  locale,
  currentPage,
}: {
  content: SiteContent;
  locale: Locale;
  currentPage: SitePage;
}) {
  const pt = locale === "pt";
  const links = content.nav.map((item) => {
    const page =
      item.href.includes("#noticias") || item.href.includes("#news")
        ? "news"
        : null;
    return {
      ...item,
      href: page
        ? getSectionHref(locale, page)
        : item.href.replace(/^\/(pt|en)(?=#|$)/, "/$1/"),
    };
  });
  const institutional = (
    <details className="institutional-menu">
      <summary className="nav-link">
        {pt ? "Institucional" : "Institutional"}
      </summary>
      <ul className="institutional-dropdown">
        {institutionalPages.map((page) => (
          <li key={page}>
            <a
              href={getAssetPath(getPageHref(locale, page))}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {institutionalLabels[locale][page]}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
  const navigation = (
    <ul className="header-nav-list">
      {links.map((item) => (
        <li key={item.href}>
          <a href={getAssetPath(item.href)} className="nav-link">
            {item.label}
          </a>
        </li>
      ))}
      <li>{institutional}</li>
    </ul>
  );
  return (
    <header className="relative z-20 border-b border-white/10">
      <div className="container-shell">
        <div className="flex items-center justify-between gap-4 py-4">
          <a
            href={getAssetPath(getPageHref(locale, "home"))}
            className="flex items-center gap-3 text-white"
          >
            <Image
              src={getAssetPath("/logo-apaai.jpeg")}
              alt={pt ? "Logótipo APAAI" : "APAAI logo"}
              width={48}
              height={48}
              loading="eager"
              className="h-12 w-12 rounded-xl object-cover"
            />
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-white/70">
                APAAI
              </p>
              <p className="mt-1 text-sm font-medium text-white">
                Aikido Inclusive
              </p>
            </div>
          </a>
          <div className="flex items-center gap-3">
            <LanguageSwitcher
              currentLocale={locale}
              currentPage={currentPage}
            />
            <div className="hidden md:block">
              <SmartLink
                href={content.headerCta.href}
                className="button button-primary"
              >
                {content.headerCta.label}
              </SmartLink>
            </div>
          </div>
        </div>
        <nav
          aria-label={pt ? "Navegação principal" : "Primary navigation"}
          className="hidden lg:block"
        >
          {navigation}
        </nav>
        <details className="mobile-menu lg:hidden">
          <summary className="flex min-h-11 cursor-pointer items-center justify-between border-t border-white/15 py-3 text-sm font-semibold text-white">
            {pt ? "Menu" : "Menu"}
            <span aria-hidden="true">+</span>
          </summary>
          <nav aria-label={pt ? "Navegação móvel" : "Mobile navigation"}>
            {navigation}
          </nav>
        </details>
      </div>
    </header>
  );
}
