import Image from "next/image";
import Link from "next/link";

import { SparkIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { ActionButton, IconBadge, SmartLink } from "@/components/site-ui";
import type { SiteContent } from "@/data/site-content";
import { getAssetPath } from "@/lib/assets";
import { getPageHref, getPageSlug, type Locale, type SitePage } from "@/lib/i18n";

export function HomeHero({
  content,
  locale,
}: {
  content: SiteContent;
  locale: Locale;
}) {
  const heroVisual = {
    src: getAssetPath("/media/project/apaai-hero-cover.jpg"),
    alt:
      locale === "pt"
        ? "Sessão de Aikido com demonstração no tatami perante um grupo alargado de participantes."
        : "Aikido session on the tatami with a live demonstration in front of a wider group.",
  };

  return (
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
          <div className="relative min-h-[440px] overflow-hidden rounded-[2.2rem] border border-white/10 bg-black/30 shadow-glow">
            <Image
              src={heroVisual.src}
              alt={heroVisual.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,7,0.08),rgba(7,7,7,0.76))]" />

            <div className="absolute left-5 top-5 z-10 inline-flex items-center gap-3 rounded-full border border-white/12 bg-black/35 px-4 py-3 backdrop-blur-sm">
              <Image
                src={getAssetPath("/logo-apaai.jpeg")}
                alt="APAAI logo"
                width={56}
                height={56}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-white/62">
                  APAAI
                </p>
                <p className="mt-1 text-sm text-white/86">
                  {locale === "pt" ? "Projeto em movimento real" : "Project in real motion"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectStatementSection({ content }: { content: SiteContent }) {
  return (
    <section className="section-shell">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[2rem] border border-[rgba(208,28,31,0.14)] bg-[rgba(208,28,31,0.05)] px-6 py-6">
            <p className="eyebrow">{content.hero.posterKicker}</p>
            <h2 className="mt-4 max-w-lg font-serif text-3xl leading-tight text-[var(--ink)] sm:text-4xl">
              {content.hero.posterTitle}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg">
              {content.hero.posterBody}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {content.hero.posterHighlights.map((item) => (
              <div
                key={item}
                className="rounded-[1.7rem] border border-[var(--line)] bg-white px-5 py-5 text-sm font-semibold leading-6 text-[var(--ink)] shadow-[0_14px_30px_rgba(23,21,20,0.05)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow: string;
  title: string;
  description: string;
  actions: Array<{
    label: string;
    href: string;
    variant?: "primary" | "secondary";
  }>;
}) {
  return (
    <div className="container-shell relative z-10 pb-16 pt-12 sm:pb-20 lg:pb-24 lg:pt-16">
      <div className="max-w-3xl">
        <p className="eyebrow text-white/64">{eyebrow}</p>
        <h1 className="fade-up rise-1 mt-6 max-w-4xl font-serif text-4xl leading-none text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="fade-up rise-2 mt-6 max-w-2xl text-lg leading-8 text-white/88 lg:text-xl">
          {description}
        </p>
        <div className="fade-up rise-3 mt-8 flex flex-wrap gap-4">
          {actions.map((action) => (
            <ActionButton key={`${action.label}-${action.href}`} {...action} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function StorySection({ content }: { content: SiteContent }) {
  return (
    <section id={getPageSlug(content.locale, "about")} className="section-shell">
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
              className={`soft-panel fade-up ${
                index === 0 ? "rise-1" : index === 1 ? "rise-2" : "rise-3"
              }`}
            >
              <IconBadge icon={card.icon} />
              <h3 className="mt-6 font-serif text-2xl text-[var(--ink)]">{card.title}</h3>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RouteHighlightsSection({
  content,
  locale,
}: {
  content: SiteContent;
  locale: Locale;
}) {
  const cards: Array<{
    page: SitePage;
    eyebrow: string;
    title: string;
    description: string;
  }> = [
    {
      page: "project",
      eyebrow: content.nav[2]?.label ?? content.programs.eyebrow,
      title: content.programs.title,
      description: content.programs.description,
    },
    {
      page: "impact",
      eyebrow: content.nav[3]?.label ?? content.impact.eyebrow,
      title: content.impact.title,
      description: content.impact.description,
    },
    {
      page: "partners",
      eyebrow: content.nav[4]?.label ?? content.credibility.eyebrow,
      title: content.credibility.title,
      description: content.credibility.description,
    },
    {
      page: "locations",
      eyebrow: content.nav[5]?.label ?? content.locations.eyebrow,
      title: content.locations.title,
      description: content.locations.description,
    },
    {
      page: "news",
      eyebrow: content.nav[6]?.label ?? content.news.eyebrow,
      title: content.news.title,
      description: content.news.description,
    },
    {
      page: "contact",
      eyebrow: content.nav[7]?.label ?? content.contact.eyebrow,
      title: content.contact.title,
      description: content.contact.description,
    },
  ];

  return (
    <section className="section-shell section-shell-muted">
      <div className="container-shell">
        <SectionHeading
          eyebrow={locale === "pt" ? "Mapa do site" : "Site map"}
          title={
            locale === "pt"
              ? "Cada área ganhou uma página própria."
              : "Each area now has its own dedicated page."
          }
          description={
            locale === "pt"
              ? "A navegação ficou mais clara, os links podem ser partilhados por tema e o site aproxima-se mais de uma estrutura institucional."
              : "Navigation is clearer, links can be shared by topic and the site now feels much closer to a proper institutional structure."
          }
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.page}
              href={getPageHref(locale, card.page)}
              className="soft-panel block transition hover:-translate-y-1"
            >
              <p className="eyebrow">{card.eyebrow}</p>
              <h3 className="mt-5 font-serif text-2xl text-[var(--ink)]">{card.title}</h3>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">{card.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-red)]">
                {locale === "pt" ? "Ver página" : "Open page"}
                <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProgramsSection({ content }: { content: SiteContent }) {
  return (
    <section id={getPageSlug(content.locale, "project")} className="section-shell section-shell-muted">
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
  );
}

export function ProjectGallerySection({ content }: { content: SiteContent }) {
  if (content.gallery.photos.length === 0) {
    return null;
  }

  return (
    <section className="section-shell">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="rounded-[2rem] border border-[var(--line)] bg-white px-6 py-6 shadow-[0_16px_40px_rgba(23,21,20,0.06)]">
            <SectionHeading
              eyebrow={content.gallery.eyebrow}
              title={content.gallery.title}
              description={content.gallery.description}
            />

            <div className="mt-8 rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface-soft)] px-5 py-5">
              <p className="eyebrow">
                {content.locale === "pt" ? "Em contexto real" : "In real settings"}
              </p>
              <p className="mt-4 text-base leading-7 text-[var(--ink)]">
                {content.locale === "pt"
                  ? "As imagens passam a mostrar o trabalho da APAAI com presença humana, adaptação e prática concreta, em vez de depender apenas de fotografia genérica."
                  : "The imagery now shows APAAI's real work with human presence, adaptation and practice instead of relying only on generic photography."}
              </p>
            </div>

            <div className="mt-4 rounded-[1.6rem] border border-[rgba(208,28,31,0.12)] bg-[rgba(208,28,31,0.05)] px-5 py-5 text-sm leading-7 text-[var(--muted)]">
              {content.locale === "pt"
                ? "A capa do site passou a usar uma fotografia própria e a galeria mostra apenas imagens complementares, sem repetir o mesmo momento visual."
                : "The cover now uses its own photograph and the gallery shows only supporting images, without repeating the same visual moment."}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {content.gallery.photos.map((photo, index) => (
              <figure
                key={photo.src}
                className={`overflow-hidden rounded-[1.9rem] border border-[var(--line)] bg-white shadow-[0_14px_36px_rgba(23,21,20,0.06)] ${
                  index === 0 ? "sm:translate-y-6" : ""
                }`}
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={getAssetPath(photo.src)}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 26vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-5 py-4 text-sm leading-6 text-[var(--muted)]">
                  {photo.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ImpactSection({ content }: { content: SiteContent }) {
  return (
    <section id={getPageSlug(content.locale, "impact")} className="section-shell">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="sticky-panel border-[rgba(208,28,31,0.18)] bg-white">
          <SectionHeading
            eyebrow={content.impact.eyebrow}
            title={content.impact.title}
            description={content.impact.description}
          />

          <div className="mt-8 grid gap-4">
            {content.impact.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface-soft)] px-5 py-5"
              >
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
                <article
                  key={item}
                  className="rounded-[1.75rem] border border-[var(--line)] bg-white px-5 py-5"
                >
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
  );
}

export function CredibilitySection({ content }: { content: SiteContent }) {
  return (
    <section
      id={getPageSlug(content.locale, "partners")}
      className="section-shell section-shell-dark"
    >
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
                  <span key={item} className="contrast-chip">
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
  );
}

export function LocationsSection({ content }: { content: SiteContent }) {
  return (
    <section id={getPageSlug(content.locale, "locations")} className="section-shell">
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
  );
}

export function NewsSection({ content }: { content: SiteContent }) {
  return (
    <section id={getPageSlug(content.locale, "news")} className="section-shell section-shell-muted">
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
              <SmartLink
                href={card.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-red)]"
              >
                {card.cta}
                <span aria-hidden="true">→</span>
              </SmartLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCtaSection({
  content,
  locale,
}: {
  content: SiteContent;
  locale: Locale;
}) {
  return (
    <section className="section-shell section-shell-dark">
      <div className="container-shell">
        <div className="dark-cta">
          <div className="max-w-3xl">
            <p className="eyebrow text-white/52">{content.contact.eyebrow}</p>
            <h2 className="mt-5 font-serif text-3xl text-white sm:text-4xl">
              {content.contact.title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white">
              {content.contact.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <ActionButton label={content.headerCta.label} href={content.headerCta.href} />
            <ActionButton
              label={content.contact.whatsappCta.label}
              href={content.contact.whatsappCta.href}
              variant="whatsapp"
            />
            <ActionButton
              label={locale === "pt" ? "Ver contactos" : "View contact page"}
              href={getPageHref(locale, "contact")}
              variant="secondary"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.contact.details.map((detail) => (
              <div
                key={`${detail.label}-${detail.value}`}
                className="rounded-[1.6rem] border border-white/20 bg-white/12 px-5 py-5 shadow-[0_12px_32px_rgba(0,0,0,0.18)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                  {detail.label}
                </p>
                {detail.href ? (
                  <SmartLink
                    href={detail.href}
                    className="mt-3 block text-xl font-semibold tracking-[0.01em] text-white hover:text-white/78"
                  >
                    {detail.value}
                  </SmartLink>
                ) : (
                  <p className="mt-3 text-xl font-semibold tracking-[0.01em] text-white">
                    {detail.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

