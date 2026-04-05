import { MessageIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { ActionButton } from "@/components/site-ui";
import type { SiteContent } from "@/data/site-content";

export function ContactSection({ content }: { content: SiteContent }) {
  const visualReference =
    content.locale === "pt"
      ? {
          alt: "Referência visual inclusiva com treino adaptado em contexto desportivo.",
          caption:
            "Referência visual gratuita para o protótipo: treino adaptado com foco em inclusão, movimento e proximidade humana.",
          sourceLabel: "Fonte gratuita: Pexels",
        }
      : {
          alt: "Inclusive visual reference showing adapted training in a sports context.",
          caption:
            "Free visual reference for the prototype: adapted training with a focus on inclusion, movement and human connection.",
          sourceLabel: "Free source: Pexels",
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
            />

            <div className="mt-8 flex flex-wrap gap-3">
              {content.contact.quickLinks.map((link) => (
                <ActionButton key={link.label} {...link} />
              ))}
              <a
                href={content.contact.whatsappCta.href}
                target="_blank"
                rel="noreferrer"
                className="button button-whatsapp"
              >
                <MessageIcon className="h-4 w-4" />
                {content.contact.whatsappCta.label}
              </a>
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
                      <a
                        href={detail.href}
                        className="text-lg font-semibold text-[var(--ink)] hover:text-[var(--accent-red)]"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <span className="text-lg font-semibold text-[var(--ink)]">{detail.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-[2rem] border border-[var(--line)] bg-white px-6 py-6">
              <p className="eyebrow">
                {content.locale === "pt" ? "Direção visual" : "Visual direction"}
              </p>
              <div className="mt-5 overflow-hidden rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface-soft)]">
                <img
                  src="https://images.pexels.com/photos/7697818/pexels-photo-7697818.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt={visualReference.alt}
                  loading="lazy"
                  className="h-64 w-full object-cover"
                />
                <div className="grid gap-3 px-5 py-5">
                  <p className="text-sm leading-7 text-[var(--muted)]">{visualReference.caption}</p>
                  <a
                    href="https://www.pexels.com/photo/woman-lifting-dumbbell-7697818/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-[var(--accent-red)] hover:opacity-80"
                  >
                    {visualReference.sourceLabel}
                  </a>
                </div>
              </div>
              <div className="mt-5 grid gap-4 text-sm leading-7 text-[var(--muted)]">
                <p>
                  {content.locale === "pt"
                    ? "Fotografia recomendada: sessões reais em instituições, retratos de proximidade, momentos de apoio individual e imagens com luz natural."
                    : "Recommended photography: real institutional sessions, close-up portraits, moments of individual support and natural-light imagery."}
                </p>
                <p>
                  {content.locale === "pt"
                    ? "Ícones e elementos gráficos: linha fina, ritmo calmo, contraste forte e referências circulares inspiradas no logótipo."
                    : "Icons and graphic elements: fine-line style, calm rhythm, strong contrast and circular cues inspired by the logo."}
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
