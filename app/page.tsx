import { Homepage } from "@/components/homepage";
import { getSiteContent } from "@/data/site-content";
import { defaultLocale } from "@/lib/i18n";

export default function Page() {
  return <Homepage content={getSiteContent(defaultLocale)} locale={defaultLocale} />;
}
