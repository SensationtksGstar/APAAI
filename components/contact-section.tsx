import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { ActionButton, SmartLink } from "@/components/site-ui";
import type { SiteContent } from "@/data/site-content";
import { getAssetPath } from "@/lib/assets";

export function ContactSection({ content }: { content: SiteContent }) {
  const projectVisual = content.gallery.photos[1] ?? content.gallery.photos[0];
  const visualReference =
    content.locale === "pt"
      ? {
          alt:
            projectVisual?.alt ??
            "Fotografia do projeto APAAI em contexto real de prática adaptada.",
          caption:
            "Fotografia real do projeto APAAI em contexto de prática adaptada, acompanhamento próximo e relação com os participantes.",
          sourceLabel: "Galeria do projeto APAAI",
          body:
            "As imagens do site passaram a usar momentos reais do projeto para mostrar a dimensão humana, técnica e inclusiva do trabalho.",
        }
      : {
          alt:
            projectVisual?.alt ??
            "APAAI project photography in a real adapted practice setting.",
          caption:
            "Real APAAI project photography showing adapted practice, close support and participant connection.",
          sourceLabel: "APAAI project gallery",
          body:
            "The site now uses real project moments to show the human, technical and inclusive dimension of the work.",
        };

  return (
    <section className="section-shell">
      <div className="container-shell">
        <div className="contact-shell">
          <div>
            <SectionHeading
              eyebrow={content.contact.eyebrow}
              title={content.contact.title}
              description={content.contact.description}
              descriptionClassName="text-[var(--ink)]"
            />

            <div className="mt-8 flex flex-wrap gap-3">
              {content.contact.quickLinks.map((link) => (
                <ActionButton key={link.label} {...link} />
              ))}
              <ActionButton
                label={content.contact.whatsappCta.label}
                href={content.contact.whatsappCta.href}
                variant="whatsapp"
              />
            </div>

            <div className="mt-8 rounded-[2rem] border border-[var(--line)] bg-white px-6 py-6">
              <p className="eyebrow">{content.contact.detailsTitle}</p>
              <div className="mt-5 grid gap-4">
                {content.contact.details.map((detail) => (
                  <div
                    key={`${detail.label}-${detail.value}`}
                    className="flex flex-col gap-1 border-b border-[var(--line)] pb-4 last:border-b-0 last:pb-0"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                      {detail.label}
                    </span>
                    {detail.href ? (
                      <SmartLink
                        href={detail.href}
                        className="text-lg font-semibold text-[var(--ink)] hover:text-[var(--accent-red)]"
                      >
                        {detail.value}
                      </SmartLink>
                    ) : (
                      <span className="text-lg font-semibold text-[var(--ink)]">{detail.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-[2rem] border border-[var(--line)] bg-white px-6 py-6">
              <p className="eyebrow">
                {content.locale === "pt" ? "Projeto em prática" : "Project in practice"}
              </p>
              <div className="mt-5 overflow-hidden rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface-soft)]">
                <Image
                  src={getAssetPath(projectVisual?.src ?? "/logo-apaai.jpeg")}
                  alt={visualReference.alt}
                  width={1200}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 48vw"
                  className="h-64 w-full object-cover"
                />
                <div className="grid gap-3 px-5 py-5">
                  <p className="text-sm leading-7 text-[var(--muted)]">{visualReference.caption}</p>
                  <p className="text-sm font-semibold text-[var(--accent-green)]">
                    {visualReference.sourceLabel}
                  </p>
                </div>
              </div>
              <div className="mt-5 grid gap-4 text-sm leading-7 text-[var(--muted)]">
                <p>{visualReference.body}</p>
                <p>
                  {content.locale === "pt"
                    ? "As fotografias foram organizadas em `public/media/project` para o repositório ficar mais claro e simples de manter."
                    : "The photographs were organised under `public/media/project` so the repository stays clearer and easier to maintain."}
                </p>
              </div>
            </div>
          </div>

          <form className="soft-panel" action="#" method="post">
            <div className="grid gap-5 sm:grid-cols-2">
              {content.contact.formFields.map((field) => (
                <label key={field.name} className="grid gap-2 text-sm font-medium text-[var(--ink)]">
                  <span>{field.label}</span>
                  <input
                    type={field.type ?? "text"}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="form-control"
                  />
                </label>
              ))}
            </div>

            <label className="mt-5 grid gap-2 text-sm font-medium text-[var(--ink)]">
              <span>{content.contact.messageLabel}</span>
              <textarea
                name="message"
                rows={6}
                placeholder={content.contact.messagePlaceholder}
                className="form-control resize-y"
              />
            </label>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button type="submit" className="button button-primary">
                {content.contact.submitLabel}
              </button>
              <p className="max-w-sm text-sm leading-6 text-[var(--muted)]">{content.contact.note}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
