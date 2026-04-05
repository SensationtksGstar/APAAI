import Image from "next/image";

import {
  CalendarIcon,
  GlobeIcon,
  GraduationIcon,
  HandshakeIcon,
  MessageIcon,
  MovementIcon,
  PathIcon,
  PinIcon,
  ShieldIcon,
  SparkIcon,
  UsersIcon,
} from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { SiteContent } from "@/data/site-content";
import type { Locale } from "@/lib/i18n";

type HomepageProps = {
  content: SiteContent;
  locale: Locale;
};

const iconMap = {
  spark: SparkIcon,
  shield: ShieldIcon,
  handshake: HandshakeIcon,
  movement: MovementIcon,
  users: UsersIcon,
  graduation: GraduationIcon,
  calendar: CalendarIcon,
  globe: GlobeIcon,
  pin: PinIcon,
  path: PathIcon,
};

function IconBadge({ icon }: { icon: keyof typeof iconMap }) {
  const Icon = iconMap[icon];

  return (
    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--line)] bg-white text-[var(--accent-red)] shadow-sm">
      <Icon className="h-6 w-6" />
    </div>
  );
}

function ActionButton({
  label,
  href,
  variant = "primary",
}: {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}) {
  return (
    <a href={href} className={`button ${variant === "primary" ? "button-primary" : "button-secondary"}`}>
      {label}
    </a>
  );
}

export function Homepage({ content, locale }: HomepageProps) {
  const visualReference =
    locale === "pt"
      ? {
          alt: "Referência visual inclusiva com treino adaptado em contexto desportivo.",
          caption: "Referência visual gratuita para o protótipo: treino adaptado com foco em inclusão, movimento e proximidade humana.",
          sourceLabel: "Fonte gratuita: Pexels",
        }
      : {
          alt: "Inclusive visual reference showing adapted training in a sports context.",
          caption: "Free visual reference for the prototype: adapted training with a focus on inclusion, movement and human connection.",
          sourceLabel: "Free source: Pexels",
        };

  return (
    <div className="bg-[var(--surface)]">
      <section id="home" className="hero-shell relative overflow-hidden text-white">
        <div className="hero-orbit hero-orbit-red" />
        <div className="hero-orbit hero-orbit-green" />
        <SiteHeader content={content} locale={locale} />

        <div className="container-shell relative z-10 pb-16 pt-12 sm:pb-20 lg:pb-24 lg:pt-16">
          <div className="grid items-end gap-12 lg:grid-cols-[1.12fr_0.88fr]">
            <div className="max-w-3xl">
              <p className="eyebrow text-white/64">{content.hero.eyebrow}</p>
              <h1 className="fade-up rise-1 mt-6 max-w-4xl font-serif text-4xl leading-none text-white sm:text-5xl lg:text-7xl">
                {content.hero.title}
              </h1>
              <p className="fade-up rise-2 mt-6 max-w-2xl text-lg leading-8 text-white/74 lg:text-xl">
                {content.hero.subtitle}
              </p>
              <div className="fade-up rise-3 mt-8 flex flex-wrap gap-4">
                <ActionButton {...content.hero.primaryCta} />
                <ActionButton {...content.hero.secondaryCta} />
              </div>
              <ul className="mt-10 grid gap-4 text-sm text-white/68 sm:grid-cols-3">
                {content.hero.proof.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="fade-up rise-2">
              <div className="glass-panel shadow-glow">
                <div className="grid gap-7 sm:grid-cols-[auto_1fr] sm:items-center">
                  <div className="radial-frame">
                    <Image
                      src="/logo-apaai.jpeg"
                      alt="APAAI logo"
                      width={256}
                      height={256}
                      priority
                      className="h-40 w-40 rounded-[2.25rem] object-cover sm:h-44 sm:w-44"
                    />
                  </div>

                  <div>
                    <p className="eyebrow text-[var(--accent-green)]">{content.hero.posterKicker}</p>
                    <h2 className="mt-4 font-serif text-3xl leading-tight text-white">
                      {content.hero.posterTitle}
                    </h2>
                    <p className="mt-4 text-base leading-7 text-white/72">
                      {content.hero.posterBody}
                    </p>
                  </div>
                </div>

                <div className="poster-grid mt-8">
                  {content.hero.posterHighlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.6rem] border border-white/10 bg-white/5 px-4 py-5 text-sm text-white/72"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="about" className="section-shell">
          <div className="container-shell">
            <SectionHeading
              eyebrow={content.story.eyebrow}
              title={content.story.title}
              description={content.story.description}
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {content.story.cards.map((card, index) => (
                <article
                  key={card.title}
                  className={`soft-panel fade-up ${index === 0 ? "rise-1" : index === 1 ? "rise-2" : "rise-3"}`}
                >
                  <IconBadge icon={card.icon} />
                  <h3 className="mt-6 font-serif text-2xl text-[var(--ink)]">{card.title}</h3>
                  <p className="mt-4 text-base leading-7 text-[var(--muted)]">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="project" className="section-shell section-shell-muted">
          <div className="container-shell">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <SectionHeading
                  eyebrow={content.programs.eyebrow}
                  title={content.programs.title}
                  description={content.programs.description}
                />

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {content.programs.cards.map((card) => (
                    <article key={card.title} className="soft-panel">
                      <IconBadge icon={card.icon} />
                      <h3 className="mt-5 font-serif text-2xl text-[var(--ink)]">{card.title}</h3>
                      <p className="mt-3 text-base leading-7 text-[var(--muted)]">{card.description}</p>
                    </article>
                  ))}
                </div>
              </div>

              <aside className="h-full">
                <div className="sticky-panel bg-[#121212] text-white">
                  <p className="eyebrow text-white/56">{content.programs.methodologyTitle}</p>
                  <h3 className="mt-5 font-serif text-3xl leading-tight">
                    {content.programs.methodologyBody}
                  </h3>
                  <div className="quiet-grid mt-8">
                    {content.programs.methodologyPoints.map((point) => (
                      <div
                        key={point}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-white/74"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="impact" className="section-shell">
          <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="sticky-panel border-[rgba(208,28,31,0.18)] bg-white">
              <SectionHeading
                eyebrow={content.impact.eyebrow}
                title={content.impact.title}
                description={content.impact.description}
              />

              <div className="mt-8 grid gap-4">
                {content.impact.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface-soft)] px-5 py-5">
                    <div className="font-serif text-4xl text-[var(--ink)]">{metric.value}</div>
                    <div className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                      {metric.label}
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{metric.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="soft-panel flex flex-col justify-between">
              <div>
                <p className="eyebrow">{content.impact.outcomesTitle}</p>
                <div className="mt-7 grid gap-5">
                  {content.impact.outcomes.map((item) => (
                    <article key={item} className="rounded-[1.75rem] border border-[var(--line)] bg-white px-5 py-5">
                      <div className="flex items-start gap-4">
                        <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(208,28,31,0.1)] text-[var(--accent-red)]">
                          <SparkIcon className="h-4 w-4" />
                        </div>
                        <p className="text-base leading-7 text-[var(--ink)]">{item}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-[1.9rem] border border-[var(--line)] bg-[rgba(31,122,70,0.08)] px-6 py-6 text-sm leading-7 text-[var(--muted)]">
                {content.impact.note}
              </div>
            </div>
          </div>
        </section>

        <section id="partners" className="section-shell section-shell-dark">
          <div className="container-shell">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
              <div>
                <SectionHeading
                  eyebrow={content.credibility.eyebrow}
                  title={content.credibility.title}
                  description={content.credibility.description}
                  tone="dark"
                />
                <div className="mt-10 grid gap-4">
                  {content.credibility.cards.map((card) => (
                    <article key={card.title} className="dark-panel">
                      <IconBadge icon={card.icon} />
                      <h3 className="mt-5 font-serif text-2xl text-white">{card.title}</h3>
                      <p className="mt-3 text-base leading-7 text-white/70">{card.description}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="grid gap-6">
                <div className="contrast-panel">
                  <p className="eyebrow text-[var(--accent-red)]">{content.credibility.ecosystemTitle}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {content.credibility.ecosystem.map((item) => (
                      <span
                        key={item}
                        className="contrast-chip"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="contrast-note mt-6">
                    <p className="text-sm leading-7 text-[var(--ink)]">{content.credibility.programsNote}</p>
                  </div>
                </div>

                <div className="dark-cta">
                  <div>
                    <p className="eyebrow text-white/52">
                      {content.locale === "pt" ? "Convite institucional" : "Institutional invitation"}
                    </p>
                    <h3 className="mt-5 font-serif text-3xl text-white">
                      {content.locale === "pt"
                        ? "Se procura impacto com método, esta parceria merece conversa."
                        : "If you are looking for impact with method, this partnership deserves a conversation."}
                    </h3>
                  </div>
                  <ActionButton {...content.credibility.partnerCta} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="locations" className="section-shell">
          <div className="container-shell">
            <SectionHeading
              eyebrow={content.locations.eyebrow}
              title={content.locations.title}
              description={content.locations.description}
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {content.locations.cards.map((card) => (
                <article key={card.title} className="soft-panel">
                  <IconBadge icon={card.icon} />
                  <h3 className="mt-6 font-serif text-2xl text-[var(--ink)]">{card.title}</h3>
                  <p className="mt-4 text-base leading-7 text-[var(--muted)]">{card.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-16">
              <SectionHeading
                eyebrow={content.roadmap.eyebrow}
                title={content.roadmap.title}
                description={content.roadmap.description}
              />

              <div className="mt-10 grid gap-5 lg:grid-cols-3">
                {content.roadmap.phases.map((phase) => (
                  <article key={phase.phase} className="timeline-card">
                    <p className="eyebrow">{phase.phase}</p>
                    <h3 className="mt-4 font-serif text-2xl text-[var(--ink)]">{phase.title}</h3>
                    <p className="mt-4 text-base leading-7 text-[var(--muted)]">{phase.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="news" className="section-shell section-shell-muted">
          <div className="container-shell">
            <SectionHeading
              eyebrow={content.news.eyebrow}
              title={content.news.title}
              description={content.news.description}
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {content.news.cards.map((card) => (
                <article key={card.title} className="soft-panel flex h-full flex-col">
                  <p className="eyebrow">{card.category}</p>
                  <h3 className="mt-5 font-serif text-2xl text-[var(--ink)]">{card.title}</h3>
                  <p className="mt-4 flex-1 text-base leading-7 text-[var(--muted)]">{card.description}</p>
                  <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-red)]">
                    {card.cta}
                    <span aria-hidden="true">→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell">
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
                          <a href={detail.href} className="text-lg font-semibold text-[var(--ink)] hover:text-[var(--accent-red)]">
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
                  <p className="eyebrow">{content.locale === "pt" ? "Direção visual" : "Visual direction"}</p>
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
      </main>

      <a
        href={content.contact.whatsappCta.href}
        target="_blank"
        rel="noreferrer"
        aria-label={content.contact.whatsappCta.label}
        className="whatsapp-float"
      >
        <MessageIcon className="h-5 w-5" />
        <span>WhatsApp</span>
      </a>

      <SiteFooter content={content} locale={locale} />
    </div>
  );
}
