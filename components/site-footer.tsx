import Image from "next/image";

import type { SiteContent } from "@/data/site-content";
import { getAssetPath } from "@/lib/assets";
import {
  getPublicSectionHref,
  type Locale,
  type SitePage,
} from "@/lib/i18n";

type SiteFooterProps = {
  content: SiteContent;
  locale: Locale;
  currentPage: SitePage;
};

export function SiteFooter({ content, locale, currentPage }: SiteFooterProps) {
  const footerPages: SitePage[] = [
    "about",
    "project",
    "impact",
    "partners",
    "locations",
    "news",
    "contact",
  ];
  const footerLinks = footerPages.map((page, index) => ({
    label: content.nav[index + 1]?.label ?? "",
    href: getPublicSectionHref(locale, page),
    isActive: currentPage === page,
  }));
  const contactDetails = content.contact.details.filter((detail) => detail.label !== "Facebook");
  const rightsLabel = content.footer.rights.startsWith("©")
    ? content.footer.rights
    : `© ${content.footer.rights.replace(/^Â©\s*/, "")}`;
  const authorCredit =
    locale === "pt" ? "Website desenvolvido por Bruno Correia" : "Website developed by Bruno Correia";

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0d0d0d] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(208,28,31,0.7)] to-transparent" />
      <div className="absolute -right-16 top-4 h-36 w-36 rounded-full bg-[rgba(208,28,31,0.12)] blur-3xl" />

      <div className="container-shell relative py-8">
        <div className="grid gap-7 lg:grid-cols-[1.05fr_1.25fr_0.9fr] lg:items-start">
          <a
            href={getPublicSectionHref(locale, "home")}
            className="group flex items-start gap-4"
          >
            <Image
              src={getAssetPath("/logo-apaai.jpeg")}
              alt="Logotipo APAAI"
              width={64}
              height={64}
              className="h-12 w-12 rounded-[1rem] object-cover shadow-[0_12px_26px_rgba(0,0,0,0.24)]"
            />
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-white/46">APAAI</p>
              <p className="mt-2 max-w-sm text-base font-semibold leading-6 text-white/92 group-hover:text-white">
                {locale === "pt"
                  ? "Associação Portuguesa de Aikido Adaptado Inclusivo"
                  : "Portuguese Association of Inclusive Adapted Aikido"}
              </p>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/62">
                {content.footer.statement}
              </p>
            </div>
          </a>

          <nav aria-label={locale === "pt" ? "Links do rodapé" : "Footer links"}>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/42">
              {locale === "pt" ? "Explorar" : "Explore"}
            </p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition ${
                    link.isActive
                      ? "text-white"
                      : "text-white/62 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/42">
              {locale === "pt" ? "Contacto Rápido" : "Quick Contact"}
            </p>
            <div className="mt-4 grid gap-2.5">
              {contactDetails.map((detail) => (
                <a
                  key={`${detail.label}-${detail.value}`}
                  href={detail.href ?? "#"}
                  className="text-sm leading-6 text-white/68 transition hover:text-white"
                >
                  <span className="font-semibold text-white/82">{detail.label}: </span>
                  {detail.value}
                </a>
              ))}
            </div>

            <a
              href={getPublicSectionHref(locale, "contact")}
              className="mt-4 inline-flex items-center text-sm font-semibold text-white transition hover:text-white/76"
            >
              {locale === "pt" ? "Ir para contactos" : "Go to contact"}
              <span aria-hidden="true" className="ml-2">→</span>
            </a>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-white/52 lg:flex-row lg:items-center lg:justify-between">
          <p>{content.footer.location}</p>
          <p>{rightsLabel}</p>
          <p className="text-white/78">{authorCredit}</p>
        </div>
      </div>
    </footer>
  );
}
