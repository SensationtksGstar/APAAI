import { ResponsiveImage as Image } from "@/components/responsive-image";
import { ActionButton, SmartLink } from "@/components/site-ui";
import { governance, publicDocuments, teamGroups } from "@/data/association";
import { getAssetPath } from "@/lib/assets";
import { getContactHref } from "@/lib/contact";
import type { Locale, SitePage } from "@/lib/i18n";

export function InstitutionalContent({
  locale,
  page,
}: {
  locale: Locale;
  page: SitePage;
}) {
  const pt = locale === "pt";
  if (page === "governance") {
    return (
      <div className="grid items-start gap-8 lg:grid-cols-3">
        {governance.map((group) => (
          <section key={group.title.pt}>
            <h2 className="border-b-2 border-[var(--accent-red)] pb-4 font-serif text-2xl">
              {group.title[locale]}
            </h2>
            <dl>
              {group.members.map((member) => (
                <div
                  key={member.name}
                  className="border-b border-[var(--line)] py-5"
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent-red)]">
                    {member.role[locale]}
                  </dt>
                  <dd className="mt-2 text-lg leading-7">{member.name}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    );
  }

  if (page === "team") {
    return (
      <div className="space-y-10">
        {teamGroups.map((group) => (
          <section key={group.title.pt}>
            <h2 className="font-serif text-2xl leading-tight sm:text-3xl">
              {group.title[locale]}
            </h2>
            {group.description ? (
              <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">
                {group.description[locale]}
              </p>
            ) : null}
            <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {group.members.map((member) => (
                <article
                  key={member.name}
                  className="border-t border-[var(--line)] pt-5"
                >
                  {member.photo ? (
                    <div className="relative mb-5 aspect-[4/5] max-w-xs overflow-hidden rounded-xl">
                      <Image
                        src={getAssetPath(member.photo)}
                        alt={member.name}
                        fill
                        sizes="(max-width: 339px) calc(100vw - 20px), 320px"
                        className="object-cover object-center"
                      />
                    </div>
                  ) : null}
                  <h3 className="text-xl font-semibold leading-7">
                    {member.name}
                  </h3>
                  {member.role ? (
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {member.role[locale]}
                    </p>
                  ) : null}
                  {member.grade ? (
                    <p className="mt-3 text-sm font-semibold text-[var(--accent-red)]">
                      {member.grade}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </section>
        ))}
        <p className="border-t border-[var(--line)] pt-6 text-sm leading-6 text-[var(--muted)]">
          {pt
            ? "As graduações ACPA estão enquadradas no âmbito da Federação Portuguesa de Aikido."
            : "ACPA grades are recognised within the Portuguese Aikido Federation."}
        </p>
      </div>
    );
  }

  if (page === "documents") {
    return (
      <div className="max-w-3xl">
        {publicDocuments.map((doc) => (
          <article
            key={doc.name.pt}
            className="flex flex-col gap-5 border-y border-[var(--line)] py-7 sm:flex-row sm:items-center sm:justify-between"
          >
            <h2 className="font-serif text-2xl">{doc.name[locale]}</h2>
            {doc.path ? (
              <SmartLink
                href={getAssetPath(doc.path)}
                className="font-semibold text-[var(--accent-red)]"
              >
                {pt ? "Consultar documento" : "View document"} →
              </SmartLink>
            ) : (
              <ActionButton
                label={pt ? "Solicitar documento" : "Request document"}
                href={getContactHref(locale, "information")}
                variant="secondary"
              />
            )}
          </article>
        ))}
      </div>
    );
  }

  return (
    <div className="max-w-3xl">
      <p className="inline-flex rounded-full border border-[var(--accent-red)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent-red)]">
        {pt ? "Em desenvolvimento" : "In development"}
      </p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {(pt
          ? ["Segurança", "Participação", "Adaptação", "Progressão individual"]
          : ["Safety", "Participation", "Adaptation", "Individual progression"]
        ).map((principle) => (
          <p
            key={principle}
            className="border-t border-[var(--line)] pt-5 font-serif text-2xl"
          >
            {principle}
          </p>
        ))}
      </div>
      <div className="mt-9">
        <ActionButton
          href={getContactHref(locale, "training")}
          label={pt ? "Falar sobre formação" : "Discuss training"}
          variant="secondary"
        />
      </div>
    </div>
  );
}
