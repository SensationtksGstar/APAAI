import { Homepage } from "@/components/homepage";
import { getSiteContent } from "@/data/site-content";
import { defaultLocale } from "@/lib/i18n";
import { getSitePageMetadata } from "@/components/site-page-view";

export const metadata = getSitePageMetadata(
  getSiteContent(defaultLocale),
  defaultLocale,
  "home",
);

export default function Page() {
  return (
    <Homepage content={getSiteContent(defaultLocale)} locale={defaultLocale} />
  );
}
