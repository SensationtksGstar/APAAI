"use client";

import { useEffect } from "react";

import type { Locale } from "@/lib/i18n";

const languageMap: Record<Locale, string> = {
  pt: "pt-PT",
  en: "en",
};

type LocaleDocumentProps = {
  locale: Locale;
};

export function LocaleDocument({ locale }: LocaleDocumentProps) {
  useEffect(() => {
    document.documentElement.lang = languageMap[locale];
  }, [locale]);

  return null;
}
