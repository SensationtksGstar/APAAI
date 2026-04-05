import type { ReactNode } from "react";

import { MessageIcon } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { SiteContent } from "@/data/site-content";
import type { Locale, SitePage } from "@/lib/i18n";

type SiteFrameProps = {
  content: SiteContent;
  locale: Locale;
  currentPage: SitePage;
  hero: ReactNode;
  children: ReactNode;
};

export function SiteFrame({
  content,
  locale,
  currentPage,
  hero,
  children,
}: SiteFrameProps) {
  return (
    <>
      <a href="#main" className="skip-link">
        {content.skipToContent}
      </a>

      <div className="bg-[var(--surface)]">
        <section className="hero-shell relative overflow-hidden text-white">
          <div className="hero-orbit hero-orbit-red" />
          <div className="hero-orbit hero-orbit-green" />
          <SiteHeader content={content} locale={locale} currentPage={currentPage} />
          {hero}
        </section>

        <main id="main">{children}</main>

        <a
          href={content.contact.whatsappCta.href}
          target="_blank"
          rel="noreferrer"
          aria-label={content.contact.whatsappCta.label}
          className="whatsapp-float"
        >
          <MessageIcon className="h-5 w-5" />
          <span>WhatsApp</span>
        </a>

        <SiteFooter content={content} locale={locale} currentPage={currentPage} />
      </div>
    </>
  );
}
