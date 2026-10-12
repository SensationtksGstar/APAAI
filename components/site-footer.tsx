import Image from "next/image";
import type { SiteContent } from "@/data/site-content";
import { institutionalLabels } from "@/data/association";
import { getAssetPath } from "@/lib/assets";
import {
  getPublicPageHref,
  getPublicSectionHref,
  institutionalPages,
  type Locale,
  type SitePage,
} from "@/lib/i18n";

export function SiteFooter({
  content,
  locale,
}: {
  content: SiteContent;
  locale: Locale;
  currentPage: SitePage;
}) {
  const pt = locale === "pt";
  const explore: Array<{ page: SitePage; label: string }> = pt
    ? [
        { page: "about", label: "Quem Somos" },
        { page: "project", label: "O Projeto" },
        { page: "impact", label: "Impacto" },
        { page: "partners", label: "Parcerias" },
        { page: "locations", label: "Onde Estamos" },
        { page: "news", label: "Notícias e Eventos" },
        { page: "collaborate", label: "Participe e Colabore" },
        { page: "contact", label: "Contactos" },
      ]
    : [
        { page: "about", label: "About" },
        { page: "project", label: "The Project" },
        { page: "impact", label: "Impact" },
        { page: "partners", label: "Partnerships" },
        { page: "locations", label: "Locations" },
        { page: "news", label: "News and Events" },
        { page: "collaborate", label: "Get Involved" },
        { page: "contact", label: "Contact" },
      ];
  return (
    <footer className="site-footer border-t border-white/10 bg-[#111010] text-white">
      <div className="container-shell py-8">
        <div className="grid grid-cols-2 gap-x-5 gap-y-6 lg:grid-cols-[1.2fr_0.85fr_1fr_1fr]">
          <div className="col-span-2 lg:col-span-1">
            <a
              href={getPublicPageHref(locale, "home")}
              className="flex items-center gap-3"
            >
              <Image
                src={getAssetPath("/logo-apaai.jpeg")}
                alt="APAAI"
                width={48}
                height={48}
                className="h-12 w-12 rounded-xl object-cover"
              />
              <span className="text-sm font-semibold leading-5">
                {pt
                  ? "Associação Portuguesa de Aikido Adaptado Inclusivo"
                  : "Portuguese Association of Inclusive Adapted Aikido"}
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/70">
              {content.footer.statement}
            </p>
          </div>
          <nav aria-label={pt ? "Explorar" : "Explore"}>
            <h2 className="footer-heading">{pt ? "Explorar" : "Explore"}</h2>
            <ul className="footer-links">
              {explore.map(({ page, label }) => (
                <li key={page}>
                  <a
                    href={
                      page === "news"
                        ? getPublicPageHref(locale, page)
                        : getPublicSectionHref(locale, page)
                    }
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label={pt ? "Institucional" : "Institutional"}>
            <h2 className="footer-heading">
              {pt ? "Institucional" : "Institutional"}
            </h2>
            <ul className="footer-links">
              {institutionalPages.map((page) => (
                <li key={page}>
                  <a href={getPublicPageHref(locale, page)}>
                    {institutionalLabels[locale][page]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="col-span-2 lg:col-span-1">
            <h2 className="footer-heading">
              {pt ? "Contacto rápido" : "Quick contact"}
            </h2>
            <ul className="footer-links flex flex-wrap gap-x-5 lg:block">
              {content.contact.details
                .filter(
                  (detail) =>
                    detail.href?.startsWith("mailto:") ||
                    detail.href?.startsWith("tel:"),
                )
                .map((detail) => (
                  <li key={detail.href}>
                    <a href={detail.href}>{detail.value}</a>
                  </li>
                ))}
              <li>
                <a
                  href={content.contact.whatsappCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={
                    content.contact.quickLinks.find(
                      (link) => link.variant === "facebook",
                    )?.href
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pt ? "Facebook oficial" : "Official Facebook"}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom mt-7 flex flex-col gap-2 border-t border-white/15 pt-5 text-xs text-white/70 md:flex-row md:flex-wrap md:items-center md:justify-between">
          <p>{content.footer.location}</p>
          <p>© {content.footer.rights}</p>
          <p className="text-white">
            {pt
              ? "Website desenvolvido por Bruno Correia"
              : "Website developed by Bruno Correia"}
          </p>
        </div>
      </div>
    </footer>
  );
}
