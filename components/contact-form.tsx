"use client";

import type { FormEvent } from "react";

import type { SiteContent } from "@/data/site-content";

type ContactFormProps = {
  contact: SiteContent["contact"];
  emailAddress: string;
  locale: SiteContent["locale"];
};

function buildMailBody(
  locale: SiteContent["locale"],
  values: {
    name: string;
    organization: string;
    email: string;
    goal: string;
    message: string;
  },
) {
  if (locale === "pt") {
    return [
      "Novo contacto APAAI",
      "",
      `Nome: ${values.name}`,
      `Entidade: ${values.organization || "-"}`,
      `Email: ${values.email}`,
      `Objetivo: ${values.goal || "-"}`,
      "",
      "Mensagem:",
      values.message,
    ].join("\n");
  }

  return [
    "New APAAI enquiry",
    "",
    `Name: ${values.name}`,
    `Organisation: ${values.organization || "-"}`,
    `Email: ${values.email}`,
    `Goal: ${values.goal || "-"}`,
    "",
    "Message:",
    values.message,
  ].join("\n");
}

export function ContactForm({ contact, emailAddress, locale }: ContactFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const values = {
      name: String(formData.get("name") ?? "").trim(),
      organization: String(formData.get("organization") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      goal: String(formData.get("goal") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    const subjectSeed = values.goal || values.name;
    const subject =
      locale === "pt"
        ? `Contacto APAAI${subjectSeed ? ` - ${subjectSeed}` : ""}`
        : `APAAI enquiry${subjectSeed ? ` - ${subjectSeed}` : ""}`;

    const body = buildMailBody(locale, values);

    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="soft-panel" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        {contact.formFields.map((field) => (
          <label key={field.name} className="grid gap-2 text-sm font-medium text-[var(--ink)]">
            <span>{field.label}</span>
            <input
              type={field.type ?? "text"}
              name={field.name}
              placeholder={field.placeholder}
              className="form-control"
              autoComplete={field.name}
              required={field.name === "name" || field.name === "email"}
            />
          </label>
        ))}
      </div>

      <label className="mt-5 grid gap-2 text-sm font-medium text-[var(--ink)]">
        <span>{contact.messageLabel}</span>
        <textarea
          name="message"
          rows={6}
          placeholder={contact.messagePlaceholder}
          className="form-control resize-y"
          required
        />
      </label>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="button button-primary">
          {contact.submitLabel}
        </button>
        <p className="max-w-sm text-sm leading-6 text-[var(--muted)]">{contact.note}</p>
      </div>
    </form>
  );
}
