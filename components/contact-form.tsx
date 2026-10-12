"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import type { SiteContent } from "@/data/site-content";
import {
  contactSubjects,
  isContactSubject,
  type ContactSubject,
} from "@/lib/contact";

export function ContactForm({
  contact,
  emailAddress,
  locale,
}: {
  contact: SiteContent["contact"];
  emailAddress: string;
  locale: SiteContent["locale"];
}) {
  const [subject, setSubject] = useState<ContactSubject | "">("");
  const [emailOpened, setEmailOpened] = useState(false);
  const subjectRef = useRef<HTMLSelectElement>(null);
  const pt = locale === "pt";

  useEffect(() => {
    const initial = new URLSearchParams(window.location.search).get("assunto");
    if (isContactSubject(initial)) setSubject(initial);
    function receive(event: Event) {
      const value = (event as CustomEvent<string>).detail;
      if (!isContactSubject(value)) return;
      setSubject(value);
      setEmailOpened(false);
      subjectRef.current?.focus({ preventScroll: true });
    }
    window.addEventListener("apaai-contact-subject", receive);
    return () => window.removeEventListener("apaai-contact-subject", receive);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const text = (name: string) => String(data.get(name) ?? "").trim();
    const selected = text("subject");
    if (!isContactSubject(selected)) return;
    for (const key of ["name", "message"]) {
      if (text(key)) continue;
      const field = form.elements.namedItem(key) as
        | HTMLInputElement
        | HTMLTextAreaElement;
      field.setCustomValidity(
        pt ? "Preencha este campo." : "Please fill in this field.",
      );
      field.reportValidity();
      return;
    }
    const body = [
      pt ? "Novo contacto APAAI" : "New APAAI enquiry",
      "",
      `${pt ? "Nome" : "Name"}: ${text("name")}`,
      `${pt ? "Entidade" : "Organisation"}: ${text("organization") || "-"}`,
      `Email: ${text("email")}`,
      `${pt ? "Telefone" : "Phone"}: ${text("phone") || "-"}`,
      `${pt ? "Assunto" : "Subject"}: ${contactSubjects[selected][locale]}`,
      "",
      pt ? "Mensagem:" : "Message:",
      text("message"),
    ].join("\n");
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent("APAAI - " + contactSubjects[selected][locale])}&body=${encodeURIComponent(body)}`;
    setEmailOpened(true);
  }

  return (
    <form id="contact-form" className="soft-panel" onSubmit={handleSubmit}>
      <p className="mb-5 text-xs text-[var(--muted)]">
        {pt ? "* Campos obrigatórios" : "* Required fields"}
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        {contact.formFields.map((field) => {
          const required = field.name === "name" || field.name === "email";
          return (
            <label
              key={field.name}
              className="grid gap-2 text-sm font-medium text-[var(--ink)]"
            >
              <span>
                {field.label}
                {required ? " *" : ""}
              </span>
              <input
                type={field.type ?? "text"}
                name={field.name}
                placeholder={field.placeholder}
                className="form-control"
                autoComplete={field.name === "phone" ? "tel" : field.name}
                onChange={(event) => event.currentTarget.setCustomValidity("")}
                maxLength={
                  field.name === "phone"
                    ? 40
                    : field.name === "email"
                      ? 254
                      : 120
                }
                required={required}
              />
            </label>
          );
        })}
      </div>
      <label className="mt-5 grid gap-2 text-sm font-medium text-[var(--ink)]">
        <span>{pt ? "Assunto *" : "Subject *"}</span>
        <select
          ref={subjectRef}
          name="subject"
          value={subject}
          onChange={(event) => {
            setSubject(event.target.value as ContactSubject | "");
            setEmailOpened(false);
          }}
          required
          className="form-control"
        >
          <option value="">
            {pt ? "Selecione o assunto" : "Choose a subject"}
          </option>
          {Object.entries(contactSubjects).map(([key, labels]) => (
            <option value={key} key={key}>
              {labels[locale]}
            </option>
          ))}
        </select>
      </label>
      <label className="mt-5 grid gap-2 text-sm font-medium text-[var(--ink)]">
        <span>{contact.messageLabel} *</span>
        <textarea
          name="message"
          rows={5}
          placeholder={contact.messagePlaceholder}
          className="form-control resize-y"
          required
          maxLength={1800}
          onChange={(event) => event.currentTarget.setCustomValidity("")}
        />
      </label>
      <div className="mt-6 flex flex-col gap-4">
        <button type="submit" className="button button-primary self-start">
          {contact.submitLabel}
        </button>
        <p className="text-sm leading-6 text-[var(--muted)]">{contact.note}</p>
        <p role="status" className="text-sm leading-6 text-[var(--ink)]">
          {emailOpened
            ? pt
              ? "Conclua o envio no seu programa de email. Se não abrir, escreva para "
              : "Complete sending in your email app. If it does not open, write to "
            : ""}
          {emailOpened && (
            <a className="underline" href={`mailto:${emailAddress}`}>
              {emailAddress}
            </a>
          )}
        </p>
      </div>
    </form>
  );
}
