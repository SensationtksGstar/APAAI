import type { Locale } from "@/lib/i18n";

export type NewsArticle = {
  slug: string;
  date: string;
  photo: { src: string; alt: Record<Locale, string> };
  content: Record<
    Locale,
    {
      category: string;
      title: string;
      summary: string;
      paragraphs: string[];
    }
  >;
};

// Publish only dated articles supplied by APAAI; older entries remain in the archive.
export const newsArticles: NewsArticle[] = [];

export function getNewsArticles(): NewsArticle[] {
  return [...newsArticles].sort((a, b) => b.date.localeCompare(a.date));
}
