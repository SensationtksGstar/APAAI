import { notFound } from "next/navigation";

import { LocaleDocument } from "@/components/locale-document";
import { isLocale } from "@/lib/i18n";

export default function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  return (
    <>
      <LocaleDocument locale={params.locale} />
      {children}
    </>
  );
}

