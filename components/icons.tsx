import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function baseProps(props: IconProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

export function SparkIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M12 2l1.7 4.3L18 8l-4.3 1.7L12 14l-1.7-4.3L6 8l4.3-1.7L12 2Z" />
      <path d="M5 16l.9 2.1L8 19l-2.1.9L5 22l-.9-2.1L2 19l2.1-.9L5 16Z" />
      <path d="M19 14l.7 1.7L21.5 17l-1.8.7L19 19.5l-.7-1.8L16.5 17l1.8-.7L19 14Z" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M12 3l7 3v5c0 4.6-2.9 8.8-7 10-4.1-1.2-7-5.4-7-10V6l7-3Z" />
      <path d="M9.5 12l1.7 1.7L15 10" />
    </svg>
  );
}

export function HandshakeIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M8.5 11.5l3-3a2.8 2.8 0 0 1 4 0l2 2" />
      <path d="M4 13l3.2-3.2a2 2 0 0 1 2.8 0l2.8 2.8a2 2 0 0 0 2.8 0l4.4-4.4" />
      <path d="M7 16l1.4 1.4a2 2 0 0 0 2.8 0" />
      <path d="M10.5 18.5l.9.9a2 2 0 0 0 2.8 0l1.3-1.3" />
    </svg>
  );
}

export function MovementIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="8" cy="6.5" r="2.5" />
      <path d="M14 9.5 10.5 12l-2.5 4" />
      <path d="M10 12h4.5l3.5 3.5" />
      <path d="m6 19 2.2-3.4" />
      <path d="M15.5 12 13 21" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M14.5 19a4.5 4.5 0 0 1 7 0" />
    </svg>
  );
}

export function GraduationIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="m3 9 9-4 9 4-9 4-9-4Z" />
      <path d="M7 11.5V15c0 .8 2.2 2 5 2s5-1.2 5-2v-3.5" />
      <path d="M21 10v5" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
      <path d="M8 14h3M13 14h3M8 18h3" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.6 9h16.8M3.6 15h16.8" />
      <path d="M12 3c2.5 2.6 4 5.8 4 9s-1.5 6.4-4 9c-2.5-2.6-4-5.8-4-9s1.5-6.4 4-9Z" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M12 21s6-5.7 6-11a6 6 0 1 0-12 0c0 5.3 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function PathIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M4 18c1.7-4.7 4.7-7 9-7 3.1 0 5.1-1.2 7-5" />
      <path d="M4 10c1.4-2.7 3.4-4 6-4 2.1 0 3.8.8 5.4 2.4" />
      <path d="m17 3 3 3-3 3" />
    </svg>
  );
}

export function MessageIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M7 18.5 3 21V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7Z" />
      <path d="M8 10h8M8 14h5" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12.03 2.08a9.9 9.9 0 0 0-8.55 14.88L2 22l5.22-1.37a9.92 9.92 0 0 0 4.79 1.22h.01c5.48 0 9.95-4.46 9.96-9.95a9.87 9.87 0 0 0-2.91-7.01 9.86 9.86 0 0 0-7.04-2.81Zm0 18.08h-.01a8.24 8.24 0 0 1-4.2-1.15l-.3-.18-3.1.81.83-3.02-.2-.31a8.23 8.23 0 0 1 6.98-12.58 8.18 8.18 0 0 1 5.87 2.42 8.2 8.2 0 0 1 2.4 5.84 8.26 8.26 0 0 1-8.27 8.27Zm4.53-6.18c-.25-.13-1.48-.73-1.71-.81-.22-.08-.38-.12-.54.12-.16.25-.65.81-.79.98-.15.17-.29.19-.54.06-.25-.12-1.04-.38-1.99-1.22-.73-.66-1.23-1.48-1.37-1.73-.14-.25-.01-.38.11-.51.11-.1.25-.27.37-.41.12-.13.17-.22.25-.37.08-.14.04-.27-.02-.39-.06-.12-.54-1.31-.74-1.79-.2-.48-.39-.42-.54-.43l-.46-.01c-.16 0-.41.06-.63.29-.22.25-.84.83-.84 2.02 0 1.18.86 2.33.98 2.49.12.16 1.69 2.58 4.09 3.61.57.24 1.01.39 1.36.5.57.18 1.08.15 1.49.09.46-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.11-.21-.17-.46-.3Z" />
    </svg>
  );
}
