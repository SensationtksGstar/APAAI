import Image from "next/image";

import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { ActionButton, SmartLink } from "@/components/site-ui";
import type { SiteContent } from "@/data/site-content";
import { getAssetPath } from "@/lib/assets";
import { getPageSlug } from "@/lib/i18n";

export function ContactSection({ content }: { content: SiteContent }) {
  const visibleDetails = content.contact.details.filter((detail) => detail.label !== "Facebook");
  const emailDetail = content.contact.details.find((detail) => detail.href?.startsWith("mailto:"));
  const contactVisual = {
    src: getAssetPath("/media/project/apaai-group-hands.jpeg"),
    alt:
      content.locale === "pt"
        ? "Participantes e equipa da APAAI em roda, com as mãos unidas no centro."
        : "APAAI participants and team in a circle with joined hands at the centre.",
  };

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

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent-red)]">
              {content.contact.prompt}
            </p>

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

            <figure className="relative mt-8 aspect-[16/8] overflow-hidden rounded-[1.8rem] border border-[var(--line)] bg-white shadow-[0_16px_38px_rgba(23,21,20,0.07)]">
              <Image
                src={contactVisual.src}
                alt={contactVisual.alt}
                fill
                sizes="(max-width: 768px) 100vw, 44vw"
                className="object-cover object-center"
              />
            </figure>

            <div className="mt-6 rounded-[2rem] border border-[var(--line)] bg-white px-6 py-6">
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
