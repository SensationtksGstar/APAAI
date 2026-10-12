import { notFound } from "next/navigation";

import { LocaleDocument } from "@/components/locale-document";
import { isLocale } from "@/lib/i18n";

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <>
      <LocaleDocument locale={locale} />
      {children}
    </>
  );
}
