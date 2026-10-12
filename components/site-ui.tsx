import type { ComponentType, ReactNode, SVGProps } from "react";

import { ContactIntentLink } from "@/components/contact-intent-link";
import { getAssetPath } from "@/lib/assets";

import {
  CalendarIcon,
  GlobeIcon,
  GraduationIcon,
  HandshakeIcon,
  MovementIcon,
  PathIcon,
  PinIcon,
  ShieldIcon,
  SparkIcon,
  UsersIcon,
  FacebookIcon,
  WhatsAppIcon,
} from "@/components/icons";

const iconMap = {
  spark: SparkIcon,
  shield: ShieldIcon,
  handshake: HandshakeIcon,
  movement: MovementIcon,
  users: UsersIcon,
  graduation: GraduationIcon,
  calendar: CalendarIcon,
  globe: GlobeIcon,
  pin: PinIcon,
  path: PathIcon,
};

function isExternalHref(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

type IconName = keyof typeof iconMap;

type LinkLikeProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

export function SmartLink({ href, className, children }: LinkLikeProps) {
  if (href.includes("?assunto="))
    return (
      <ContactIntentLink href={href} className={className}>
        {children}
      </ContactIntentLink>
    );
  if (
    isExternalHref(href) ||
    href.startsWith("#") ||
    /\.pdf(?:[?#]|$)/i.test(href)
  ) {
    const shouldOpenNewTab = href.startsWith("http");

    return (
      <a
        href={href}
        className={className}
        target={shouldOpenNewTab ? "_blank" : undefined}
        rel={shouldOpenNewTab ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <a href={getAssetPath(href)} className={className}>
      {children}
    </a>
  );
}

export function ActionButton({
  label,
  href,
  variant = "primary",
}: {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "whatsapp" | "facebook";
}) {
  const variantClass =
    variant === "primary"
      ? "button-primary"
      : variant === "facebook"
        ? "button-facebook"
        : variant === "whatsapp"
          ? "button-whatsapp"
          : "button-secondary";

  return (
    <SmartLink href={href} className={`button ${variantClass}`}>
      {variant === "facebook" ? <FacebookIcon className="h-4 w-4" /> : null}
      {variant === "whatsapp" ? <WhatsAppIcon className="h-4 w-4" /> : null}
      {label}
    </SmartLink>
  );
}

export function IconBadge({ icon }: { icon: IconName }) {
  const Icon = iconMap[icon] as ComponentType<SVGProps<SVGSVGElement>>;

  return (
    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--line)] bg-white text-[var(--accent-red)] shadow-sm">
      <Icon className="h-6 w-6" />
    </div>
  );
}
