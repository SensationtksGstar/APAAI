import Image from "next/image";
import Link from "next/link";

import type { SiteContent } from "@/data/site-content";
import { getPageHref, type Locale, type SitePage } from "@/lib/i18n";

type SiteFooterProps = {
  content: SiteContent;
  locale: Locale;
  currentPage: SitePage;
};

export function SiteFooter({ content, locale, currentPage }: SiteFooterProps) {
  const currentHref = getPageHref(locale, currentPage);

  return (
    <footer className="border-t border-[var(--line)] bg-[#111111] text-white">
      <div className="container-shell grid gap-10 py-12 lg:grid-cols-[auto_1fr_auto] lg:items-end">
        <Link href={`/${locale}`} className="flex items-center gap-4">
          <Image
            src="/logo-apaai.jpeg"
            alt="Logótipo APAAI"
            width={72}
            height={72}
            className="h-[4.5rem] w-[4.5rem] rounded-[1.4rem] object-cover"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/52">APAAI</p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-white/72">{content.footer.statement}</p>
          </div>
        </Link>

        <div className="grid gap-3 text-sm text-white/66 sm:grid-cols-3">
          {content.nav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition hover:text-white ${
                item.href === currentHref ? "text-white" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="text-sm text-white/60">
          <p>{content.footer.location}</p>
          <p className="mt-2">{content.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}

