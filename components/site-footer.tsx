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
      <div className="absolute -right-16 top-6 h-48 w-48 rounded-full bg-[rgba(208,28,31,0.16)] blur-3xl" />
      <div className="absolute -left-12 bottom-0 h-40 w-40 rounded-full bg-[rgba(31,122,70,0.14)] blur-3xl" />

      <div className="container-shell relative py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
          <a
            href={getPublicSectionHref(locale, "home")}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition hover:border-white/18 hover:bg-white/[0.06]"
          >
            <div className="flex items-center gap-4">
              <Image
                src={getAssetPath("/logo-apaai.jpeg")}
                alt="Logotipo APAAI"
                width={80}
                height={80}
                className="h-16 w-16 rounded-[1.35rem] object-cover shadow-[0_18px_36px_rgba(0,0,0,0.22)]"
              />
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-white/46">APAAI</p>
                <p className="mt-2 text-lg font-semibold text-white/92">
                  {locale === "pt"
                    ? "Associação Portuguesa de Aikido Adaptado Inclusivo"
                    : "Portuguese Association of Inclusive Adapted Aikido"}
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/70">{content.footer.statement}</p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/82">
              <span>{locale === "pt" ? "Voltar ao topo" : "Back to top"}</span>
              <span aria-hidden="true">↑</span>
            </div>
          </a>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/42">
              {locale === "pt" ? "Explorar" : "Explore"}
            </p>
            <div className="mt-5 grid gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`rounded-full border px-4 py-3 text-sm font-medium transition ${
                    link.isActive
                      ? "border-white/22 bg-white/10 text-white"
                      : "border-white/8 bg-white/[0.02] text-white/68 hover:border-white/18 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/42">
              {locale === "pt" ? "Contacto Rápido" : "Quick Contact"}
            </p>
            <div className="mt-5 grid gap-4">
              {contactDetails.map((detail) => (
                <a
                  key={`${detail.label}-${detail.value}`}
                  href={detail.href ?? "#"}
                  className="rounded-[1.4rem] border border-white/8 bg-black/20 px-4 py-4 transition hover:border-white/16 hover:bg-white/[0.05]"
                >
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/40">
                    {detail.label}
                  </p>
                  <p className="mt-2 text-sm font-medium text-white/86">{detail.value}</p>
                </a>
              ))}
            </div>

            <a
              href={getPublicSectionHref(locale, "contact")}
              className="mt-5 inline-flex min-h-[3rem] items-center justify-center rounded-full border border-[rgba(208,28,31,0.38)] bg-[rgba(208,28,31,0.12)] px-5 py-3 text-sm font-semibold text-white transition hover:border-[rgba(208,28,31,0.58)] hover:bg-[rgba(208,28,31,0.2)]"
            >
              {locale === "pt" ? "Ir para contactos" : "Go to contact"}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/58 lg:flex-row lg:items-center lg:justify-between">
          <p>{content.footer.location}</p>
          <p>{rightsLabel}</p>
          <p className="text-white/78">{authorCredit}</p>
        </div>
      </div>
    </footer>
  );
}
