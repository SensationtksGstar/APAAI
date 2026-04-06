import type { Metadata } from "next";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sensationtksgstar.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "APAAI",
  description: "Associação Portuguesa de Aikido Adaptado Inclusivo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body>{children}</body>
    </html>
  );
}
