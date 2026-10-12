import { getPageSlug, type Locale } from "@/lib/i18n";

export const contactSubjects = {
  participation: {
    pt: "Participação/Inscrição",
    en: "Participation/Registration",
  },
  support: { pt: "Apoio ao projeto", en: "Project support" },
  presentation: { pt: "Solicitar apresentação", en: "Request a presentation" },
  training: { pt: "Formação", en: "Training" },
  partnership: { pt: "Parceria/Colaboração", en: "Partnership/Collaboration" },
  information: { pt: "Informação geral", en: "General information" },
  other: { pt: "Outro", en: "Other" },
} as const;

export type ContactSubject = keyof typeof contactSubjects;

export function isContactSubject(
  value: string | null,
): value is ContactSubject {
  return (
    value !== null &&
    Object.prototype.hasOwnProperty.call(contactSubjects, value)
  );
}

export function getContactHref(
  locale: Locale,
  subject: ContactSubject,
): string {
  return `/${locale}/?assunto=${subject}#${getPageSlug(locale, "contact")}`;
}
