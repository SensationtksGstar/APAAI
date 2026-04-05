type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  tone?: "light" | "dark";
  descriptionClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  descriptionClassName,
}: SectionHeadingProps) {
  const titleClass = tone === "dark" ? "text-white" : "text-[var(--ink)]";
  const descriptionClass = tone === "dark" ? "text-white/72" : "text-[var(--muted)]";

  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`mt-4 font-serif text-3xl leading-tight sm:text-4xl ${titleClass}`}>
        {title}
      </h2>
      <p
        className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg ${descriptionClass} ${descriptionClassName ?? ""}`}
      >
        {description}
      </p>
    </div>
  );
}
