import Image from "next/image";
import { ActionButton, SmartLink } from "@/components/site-ui";
import { getNewsArticles } from "@/data/news";
import type { SiteContent } from "@/data/site-content";
import { getAssetPath } from "@/lib/assets";
import { getPageHref } from "@/lib/i18n";

export function NewsFeed({
  content,
  archive = false,
}: {
  content: SiteContent;
  archive?: boolean;
}) {
  const all = getNewsArticles();
  const articles = archive ? all : all.slice(0, 3);
  const locale = content.locale;
  const facebook = content.contact.quickLinks.find(
    (link) => link.variant === "facebook",
  );

  return (
    <>
      {articles.length > 0 ? (
        <div className="mt-8 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => {
            const copy = article.content[locale];
            return (
              <article
                id={article.slug}
                key={article.slug}
                className="overflow-hidden rounded-[1.5rem] bg-white"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={getAssetPath(article.photo.src)}
                    alt={article.photo.alt[locale]}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="eyebrow">{copy.category}</span>
                    <time
                      dateTime={article.date}
                      className="text-[var(--muted)]"
                    >
                      {new Intl.DateTimeFormat(
                        locale === "pt" ? "pt-PT" : "en-GB",
                        { dateStyle: "long", timeZone: "UTC" },
                      ).format(new Date(`${article.date}T12:00:00Z`))}
                    </time>
                  </div>
                  {archive ? (
                    <h2 className="mt-4 font-serif text-2xl leading-tight">
                      {copy.title}
                    </h2>
                  ) : (
                    <h3 className="mt-4 font-serif text-2xl leading-tight">
                      {copy.title}
                    </h3>
                  )}
                  <p className="mt-3 leading-7 text-[var(--muted)]">
                    {copy.summary}
                  </p>
                  {archive ? (
                    <details className="mt-5">
                      <summary className="cursor-pointer text-sm font-semibold text-[var(--accent-red)]">
                        {locale === "pt" ? "Saber mais" : "Read more"}
                      </summary>
                      <div className="mt-4 space-y-4 text-sm leading-7 text-[var(--muted)]">
                        {copy.paragraphs.map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <SmartLink
                      href={`${getPageHref(locale, "news")}#${article.slug}`}
                      className="mt-5 inline-block text-sm font-semibold text-[var(--accent-red)]"
                    >
                      {locale === "pt" ? "Saber mais" : "Read more"} →
                    </SmartLink>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="mt-8 border-y border-[var(--line)] py-6 text-base leading-7 text-[var(--muted)]">
          <p>
            {locale === "pt"
              ? "Siga os momentos e novidades da APAAI através da nossa página oficial."
              : "Follow APAAI moments and updates through our official page."}
          </p>
          {facebook ? (
            <SmartLink
              href={facebook.href}
              className="mt-3 inline-block font-semibold text-[var(--accent-red)]"
            >
              {locale === "pt"
                ? "Acompanhar a APAAI no Facebook"
                : "Follow APAAI on Facebook"}{" "}
              →
            </SmartLink>
          ) : null}
        </div>
      )}
      {!archive ? (
        <div className="mt-7">
          <ActionButton
            href={getPageHref(locale, "news")}
            label={
              locale === "pt"
                ? "Ver todas as notícias e eventos"
                : "View all news and events"
            }
            variant="secondary"
          />
        </div>
      ) : null}
    </>
  );
}
