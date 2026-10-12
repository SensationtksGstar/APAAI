import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SitePageView, getSitePageMetadata } from "@/components/site-page-view";
import { getSiteContent } from "@/data/site-content";
import {
  locales,
  isLocale,
  standalonePages,
  getPageSlug,
  resolveSitePage,
} from "@/lib/i18n";

type Params = { locale: string; slug: string };
type Props = { params: Promise<Params> };
export const dynamicParams = false;
export function generateStaticParams() {
  return locales.flatMap((locale) =>
    standalonePages.map((page) => ({
      locale,
      slug: getPageSlug(locale, page),
    })),
  );
}
function resolve(params: Params) {
  if (!isLocale(params.locale)) notFound();
  const page = resolveSitePage(params.locale, params.slug);
  if (!page || !standalonePages.includes(page)) notFound();
  return { locale: params.locale, page };
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, page } = resolve(await params);
  return getSitePageMetadata(getSiteContent(locale), locale, page);
}
export default async function InstitutionalPage({ params }: Props) {
  const { locale, page } = resolve(await params);
  return (
    <SitePageView
      content={getSiteContent(locale)}
      locale={locale}
      page={page}
    />
  );
}
