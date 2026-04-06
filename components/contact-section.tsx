import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { ActionButton, SmartLink } from "@/components/site-ui";
import type { SiteContent } from "@/data/site-content";
import { getPageSlug } from "@/lib/i18n";

export function ContactSection({ content }: { content: SiteContent }) {
  const visibleDetails = content.contact.details.filter((detail) => detail.label !== "Facebook");
  const emailDetail = content.contact.details.find((detail) => detail.href?.startsWith("mailto:"));

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
                {visibleDetails.map((detail) => (
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
          </div>

          <ContactForm
            contact={content.contact}
            emailAddress={emailDetail?.value ?? "aikidoadaptado@gmail.com"}
            locale={content.locale}
          />
        </div>
      </div>
    </section>
  );
}
