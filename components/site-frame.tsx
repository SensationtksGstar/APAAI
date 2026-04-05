import type { ReactNode } from "react";

import { WhatsAppIcon } from "@/components/icons";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmartLink } from "@/components/site-ui";
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

        <SmartLink
          href={content.contact.whatsappCta.href}
          className="whatsapp-float button button-whatsapp"
        >
          <WhatsAppIcon className="h-5 w-5" />
          <span>WhatsApp</span>
        </SmartLink>

        <SiteFooter content={content} locale={locale} currentPage={currentPage} />
      </div>
    </>
  );
}
