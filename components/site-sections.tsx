import Image from "next/image";
import { SparkIcon } from "@/components/icons";
import { PartnersSection } from "@/components/partners-section";
import { NewsFeed } from "@/components/news-feed";
import { SectionHeading } from "@/components/section-heading";
import { ActionButton, IconBadge, SmartLink } from "@/components/site-ui";
import type { SiteContent } from "@/data/site-content";
import { getAssetPath } from "@/lib/assets";
import { getPageHref, getPageSlug, type Locale } from "@/lib/i18n";

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
        </div>

        <div className="fade-up rise-2 lg:row-span-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2.2rem] border border-white/10 bg-black/30 shadow-glow lg:aspect-auto lg:min-h-[440px]">
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
                  {locale === "pt"
                    ? "Projeto em movimento real"
                    : "Project in real motion"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <ul className="grid gap-4 text-sm text-white/80 sm:grid-cols-3 lg:col-start-1 lg:row-start-2">
          {content.hero.proof.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
            >
              {item}
            </li>
          ))}
        </ul>
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
  const storyVisual = {
    src: getAssetPath("/media/project/apaai-group-hands.jpeg"),
    alt:
      content.locale === "pt"
        ? "Participantes e equipa da APAAI em roda, com as mãos unidas no centro."
        : "APAAI participants and team in a circle with joined hands at the centre.",
  };

  return (
    <section
      id={getPageSlug(content.locale, "about")}
      className="section-shell"
    >
      <div className="container-shell">
        <SectionHeading
          eyebrow={content.story.eyebrow}
          title={content.story.title}
          description={content.story.description}
        />
        <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--muted)]">
          {content.story.introduction}
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <figure className="fade-up rise-1 relative min-h-[420px] overflow-hidden rounded-[2.2rem] border border-[var(--line)] bg-[#111] shadow-[0_22px_52px_rgba(23,21,20,0.13)]">
            <Image
              src={storyVisual.src}
              alt={storyVisual.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </figure>

          <div className="grid gap-5">
            {content.story.cards.map((card, index) => (
              <article
                key={card.title}
                className={`soft-panel fade-up ${
                  index === 0 ? "rise-1" : index === 1 ? "rise-2" : "rise-3"
                }`}
              >
                <div className="flex gap-5">
                  <IconBadge icon={card.icon} />
                  <div>
                    <h3 className="font-serif text-2xl text-[var(--ink)]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                      {card.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TeamSection({ content }: { content: SiteContent }) {
  const teamVisual = {
    src: getAssetPath("/media/project/apaai-team-community.jpg"),
    alt:
      content.locale === "pt"
        ? "Participantes e equipa reunidos numa atividade de Aikido Adaptado Inclusivo."
        : "Participants and team together during an Inclusive Adapted Aikido activity.",
  };

  return (
    <section className="section-shell section-shell-muted">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <figure className="relative aspect-video overflow-hidden rounded-[2rem] border border-[var(--line)] bg-white shadow-[0_18px_48px_rgba(23,21,20,0.09)]">
            <Image
              src={teamVisual.src}
              alt={teamVisual.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center"
            />
          </figure>

          <div>
            <SectionHeading
              eyebrow={content.team.eyebrow}
              title={content.team.title}
              description={content.team.description}
            />

            <div className="mt-8 grid gap-4">
              {content.team.members.map((member) => (
                <article
                  key={member.name}
                  className="rounded-[1.6rem] border border-[var(--line)] bg-white px-5 py-5 shadow-[0_12px_30px_rgba(23,21,20,0.05)]"
                >
                  <p className="font-serif text-2xl leading-tight text-[var(--ink)]">
                    {member.name}
                  </p>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent-red)]">
                    {member.role}
                  </p>
                  <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                    {member.description}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-6">
              <ActionButton
                label={
                  content.locale === "pt"
                    ? "Conhecer a equipa"
                    : "Meet the team"
                }
                href={getPageHref(content.locale, "team")}
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProgramsSection({ content }: { content: SiteContent }) {
  const programVisual = {
    src: getAssetPath("/media/project/apaai-floor-technique.jpeg"),
    alt:
      content.locale === "pt"
        ? "Prática de Aikido Adaptado com acompanhamento próximo no tatami."
        : "Adapted Aikido practice with close support on the tatami.",
  };

  return (
    <section
      id={getPageSlug(content.locale, "project")}
      className="section-shell section-shell-muted"
    >
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <SectionHeading
              eyebrow={content.programs.eyebrow}
              title={content.programs.title}
              description={content.programs.description}
            />

            <figure className="relative mt-8 aspect-[16/7] overflow-hidden rounded-[1.8rem] border border-[var(--line)] bg-white shadow-[0_16px_38px_rgba(23,21,20,0.07)]">
              <Image
                src={programVisual.src}
                alt={programVisual.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 54vw"
                className="object-cover object-center"
              />
            </figure>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {content.programs.cards.map((card) => (
                <article key={card.title} className="soft-panel">
                  <IconBadge icon={card.icon} />
                  <h3 className="mt-5 font-serif text-2xl text-[var(--ink)]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside>
            <div className="sticky-panel bg-[#121212] text-white">
              <p className="eyebrow text-white/56">
                {content.programs.methodologyTitle}
              </p>
              <p className="mt-5 text-lg leading-8 text-white/90">
                {content.programs.methodologyBody}
              </p>
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
              <div className="mt-8 border-t border-white/20 pt-6">
                <h3 className="font-serif text-2xl">
                  {content.locale === "pt"
                    ? "Programa Técnico e Pedagógico"
                    : "Technical and Pedagogical Programme"}
                </h3>
                <p className="mt-4 text-base leading-7 text-white/80">
                  {content.programs.programmeDescription}
                </p>
                <div className="mt-5">
                  <ActionButton
                    label={
                      content.locale === "pt"
                        ? "Conhecer o programa"
                        : "Explore the programme"
                    }
                    href={getPageHref(content.locale, "technical-program")}
                    variant="secondary"
                  />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function ProjectGallerySection({ content }: { content: SiteContent }) {
  if (!content.gallery.photos.length) return null;
  return (
    <section className="section-shell project-gallery">
      <div className="container-shell">
        <SectionHeading {...content.gallery} />
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {content.gallery.photos.map((photo) => (
            <figure
              key={photo.src}
              className="relative aspect-[3/4] overflow-hidden rounded-[1.7rem] bg-white"
            >
              <Image
                src={getAssetPath(photo.src)}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-contain object-center"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ImpactSection({ content }: { content: SiteContent }) {
  return (
    <section
      id={getPageSlug(content.locale, "impact")}
      className="section-shell"
    >
      <div className="container-shell">
        <SectionHeading {...content.impact} />
        <div className="mt-8 grid items-start gap-8 lg:grid-cols-2">
          <figure className="relative aspect-[3/2] overflow-hidden rounded-[1.8rem] bg-[var(--surface-soft)]">
            <Image
              src={getAssetPath(
                "/media/project/apaai-participant-achievement.jpg",
              )}
              alt={
                content.locale === "pt"
                  ? "Uma participante celebra uma conquista no tatami, com o reconhecimento da equipa."
                  : "A participant celebrates an achievement on the tatami, recognised by the team."
              }
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </figure>
          <div className="grid gap-x-6 gap-y-7 sm:grid-cols-2">
            {content.impact.metrics.map((metric) => (
              <article
                key={metric.label}
                className="border-t border-[var(--line)] pt-4"
              >
                {metric.value && (
                  <p className="font-serif text-5xl tabular-nums text-[var(--accent-red)]">
                    {metric.value}
                  </p>
                )}
                <h3 className="mt-2 text-lg font-semibold leading-6 text-[var(--ink)]">
                  {metric.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {metric.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-8 border-t border-[var(--line)] pt-6">
          <h3 className="eyebrow">{content.impact.outcomesTitle}</h3>
          <div className="mt-5 grid gap-6 lg:grid-cols-3">
            {content.impact.outcomes.map((item) => (
              <article key={item} className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(208,28,31,0.1)] text-[var(--accent-red)]">
                  <SparkIcon className="h-4 w-4" />
                </span>
                <p className="text-base leading-7 text-[var(--ink)]">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CredibilitySection({ content }: { content: SiteContent }) {
  return <PartnersSection content={content} />;
}

export function LocationsSection({ content }: { content: SiteContent }) {
  return (
    <section
      id={getPageSlug(content.locale, "locations")}
      className="section-shell"
    >
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
              <h3 className="mt-6 font-serif text-2xl text-[var(--ink)]">
                {card.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                {card.description}
              </p>
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
                <h3 className="mt-4 font-serif text-2xl text-[var(--ink)]">
                  {phase.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                  {phase.description}
                </p>
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
    <section
      id={getPageSlug(content.locale, "news")}
      className="section-shell section-shell-muted"
    >
      <div className="container-shell">
        <SectionHeading {...content.news} />
        <NewsFeed content={content} />
      </div>
    </section>
  );
}

export function CollaborationSection({ content }: { content: SiteContent }) {
  return (
    <section
      id={getPageSlug(content.locale, "collaborate")}
      className="section-shell"
    >
      <div className="container-shell">
        <SectionHeading {...content.collaboration} />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {content.collaboration.cards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col border-t border-[var(--line)] pt-6"
            >
              <p className="eyebrow">{card.category}</p>
              <h3 className="mt-4 font-serif text-2xl text-[var(--ink)]">
                {card.title}
              </h3>
              <p className="mt-4 flex-1 text-base leading-7 text-[var(--muted)]">
                {card.description}
              </p>
              <SmartLink
                href={card.href}
                className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[var(--accent-red)]"
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
