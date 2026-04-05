import type { ComponentType, ReactNode, SVGProps } from "react";

import Link from "next/link";

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
  if (isExternalHref(href) || href.startsWith("#")) {
    const shouldOpenNewTab = href.startsWith("http");

    return (
      <a
        href={href}
        className={className}
        target={shouldOpenNewTab ? "_blank" : undefined}
        rel={shouldOpenNewTab ? "noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function ActionButton({
  label,
  href,
  variant = "primary",
}: {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}) {
  return (
    <SmartLink
      href={href}
      className={`button ${variant === "primary" ? "button-primary" : "button-secondary"}`}
    >
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
