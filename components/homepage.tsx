import { SitePageView } from "@/components/site-page-view";
import type { SiteContent } from "@/data/site-content";
import type { Locale } from "@/lib/i18n";

type HomepageProps = {
  content: SiteContent;
  locale: Locale;
};

export function Homepage({ content, locale }: HomepageProps) {
  return <SitePageView content={content} locale={locale} page="home" />;
}
