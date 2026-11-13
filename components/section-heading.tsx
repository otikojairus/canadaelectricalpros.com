type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <header className={`mb-8 max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <span className="font-mono text-[10px] text-primary uppercase tracking-widest block mb-2">{eyebrow}</span>
      )}
      <h2 className="text-2xl lg:text-3xl font-bold text-on-surface tracking-tight">{title}</h2>
      {description && <p className="text-on-surface-variant mt-2 leading-relaxed">{description}</p>}
    </header>
  );
}
