"use client";

import type { ReactNode, MouseEvent } from "react";
import { getAssetPath } from "@/lib/assets";

export function ContactIntentLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  function follow(event: MouseEvent<HTMLAnchorElement>) {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    )
      return;
    const form = document.getElementById("contact-form");
    if (!form) return;
    event.preventDefault();
    const url = new URL(getAssetPath(href), window.location.origin);
    window.history.replaceState(null, "", url);
    window.dispatchEvent(
      new CustomEvent("apaai-contact-subject", {
        detail: url.searchParams.get("assunto"),
      }),
    );
    document
      .querySelector(url.hash)
      ?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
  }
  return (
    <a href={getAssetPath(href)} className={className} onClick={follow}>
      {children}
    </a>
  );
}
