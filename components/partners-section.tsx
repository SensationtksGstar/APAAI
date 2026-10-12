import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { ActionButton, IconBadge } from "@/components/site-ui";
import {
  nationalPartners,
  technicalPartner,
  type Partner,
} from "@/data/association";
import type { SiteContent } from "@/data/site-content";
import { getAssetPath } from "@/lib/assets";
import { getPageSlug } from "@/lib/i18n";

function PartnerLogo({ partner }: { partner: Partner }) {
  return (
    <div className="partner-logo-frame">
      {partner.logo ? (
        <Image
          src={getAssetPath(partner.logo)}
          alt={partner.name}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 28vw, 220px"
          className={partner.logoClass ?? "object-contain p-4"}
        />
      ) : (
        <span className="px-4 text-center font-serif text-xl text-[var(--ink)]">
          {partner.name}
        </span>
      )}
    </div>
  );
}

export function PartnersSection({ content }: { content: SiteContent }) {
  const pt = content.locale === "pt";
  return (
    <section
      id={getPageSlug(content.locale, "partners")}
      className="section-shell section-shell-dark"
    >
      <div className="container-shell">
        <SectionHeading {...content.credibility} tone="dark" />
        <div className="mt-9 grid items-start gap-6 lg:grid-cols-2">
          <div className="flex items-center gap-6 rounded-[1.7rem] border border-white/15 bg-white p-6 text-[var(--ink)]">
            <div className="relative h-24 w-24 shrink-0">
              <Image
                src={getAssetPath(technicalPartner.logo!)}
                alt="ACPA"
                fill
                sizes="96px"
                className="object-contain"
              />
            </div>
            <div>
              <p className="eyebrow">
                {pt ? "Parceiro técnico principal" : "Main technical partner"}
              </p>
              <h3 className="mt-3 font-serif text-3xl">ACPA</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Associação Cultural Portuguesa de Aikido
              </p>
            </div>
          </div>
          <div className="border-l-2 border-[var(--accent-red)] py-2 pl-6">
            <p className="eyebrow text-white/70">
              {pt ? "Parceria internacional" : "International partnership"}
            </p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight text-white">
              TMA4ALL
            </h3>
            <p className="mt-3 text-base leading-7 text-white/80">
              {pt
                ? "Cooperação internacional, partilha de experiências e desenvolvimento conjunto de projetos europeus na área das artes marciais adaptadas e inclusivas."
                : "International cooperation, shared experience and joint development of European projects in adapted and inclusive martial arts."}
            </p>
            <p className="mt-3 text-sm leading-6 text-white/65">
              {pt
                ? "Candidatura Erasmus+ em desenvolvimento / a aguardar decisão."
                : "Erasmus+ application in development / awaiting a decision."}
            </p>
          </div>
        </div>
        <h3 className="mt-10 text-sm font-semibold uppercase tracking-[0.16em] text-white/80">
          {pt
            ? "Parceiros nacionais e institucionais"
            : "National and institutional partners"}
        </h3>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {nationalPartners.map((partner) => (
            <figure key={partner.name}>
              <PartnerLogo partner={partner} />
              <figcaption className="mt-3 px-1 text-center text-sm leading-5 text-white/85">
                {partner.name}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {content.credibility.cards.map((card) => (
            <article key={card.title} className="border-t border-white/20 pt-6">
              <IconBadge icon={card.icon} />
              <h3 className="mt-4 font-serif text-2xl leading-tight text-white">
                {card.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-white/75">
                {card.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-5 border-t border-white/15 pt-7 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="eyebrow text-white/70">
              {pt ? "Convite institucional" : "Institutional invitation"}
            </p>
            <h3 className="mt-3 max-w-2xl font-serif text-2xl leading-tight text-white">
              {pt
                ? "Se procura impacto com método, esta parceria merece conversa."
                : "If you are looking for impact with method, this partnership deserves a conversation."}
            </h3>
          </div>
          <ActionButton {...content.credibility.partnerCta} />
        </div>
      </div>
    </section>
  );
}
