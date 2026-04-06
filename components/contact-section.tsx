import { SectionHeading } from "@/components/section-heading";
import { ActionButton, SmartLink } from "@/components/site-ui";
import type { SiteContent } from "@/data/site-content";
import { getPageSlug } from "@/lib/i18n";

export function ContactSection({ content }: { content: SiteContent }) {
  const facebookDetail = content.contact.details.find((detail) => detail.label === "Facebook");

  return (
    <section id={getPageSlug(content.locale, "contact")} className="section-shell">
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

            <div className="mt-10 rounded-[2rem] border border-[var(--line)] bg-[var(--surface-soft)] px-6 py-6">
              <p className="eyebrow">
                {content.locale === "pt" ? "Acompanhar o projeto" : "Follow the project"}
              </p>
              <h3 className="mt-4 max-w-xl font-serif text-2xl text-[var(--ink)]">
                {content.locale === "pt"
                  ? "O Facebook oficial da APAAI reúne notícias, bastidores e atividade no terreno."
                  : "APAAI's official Facebook brings together updates, behind-the-scenes moments and field activity."}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
                {content.locale === "pt"
                  ? "Se quiser perceber melhor o ritmo do projeto, acompanhar sessões e partilhar o trabalho com parceiros ou famílias, este é o ponto de entrada certo."
                  : "If you want a clearer sense of the project's rhythm, sessions and public-facing activity, this is the right place to start."}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {facebookDetail?.href ? (
                  <ActionButton
                    label={content.locale === "pt" ? "Ver Facebook oficial" : "Open official Facebook"}
                    href={facebookDetail.href}
                    variant="secondary"
                  />
                ) : null}
                <ActionButton
                  label={content.contact.whatsappCta.label}
                  href={content.contact.whatsappCta.href}
                  variant="whatsapp"
                />
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
