export type FaqEntry = { q: string; a: string };

type FaqSectionProps = {
  title: string;
  id?: string;
  items: FaqEntry[];
  variant?: "default" | "panel";
};

export function FaqSection({ title, id = "faq-heading", items, variant = "default" }: FaqSectionProps) {
  const inner = (
    <>
      <SectionHeading eyebrow="Intel" title={title} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {items.map((faq, i) => (
          <article
            key={faq.q}
            className="flex gap-4 p-5 rounded-2xl bg-surface-container border border-white/6 hover:border-primary/20 transition-colors"
          >
            <span className="shrink-0 font-mono text-xs text-primary font-bold pt-0.5" aria-hidden>
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-base font-semibold text-on-surface mb-2">{faq.q}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{faq.a}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );

  if (variant === "panel") {
    return (
      <section className="py-14 lg:py-16 bg-surface-container-low border-y border-white/6" aria-labelledby={id}>
        <div className="wrap">
          <h2 id={id} className="sr-only">
            {title}
          </h2>
          {inner}
        </div>
      </section>
    );
  }

  return (
    <section className="mt-12 pt-10 border-t border-white/6" aria-labelledby={id}>
      <h2 id={id} className="sr-only">
        {title}
      </h2>
      {inner}
    </section>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <header className="mb-8">
      <span className="font-mono text-[10px] text-primary uppercase tracking-widest block mb-2">{eyebrow}</span>
      <h2 className="text-2xl font-bold text-on-surface">{title}</h2>
    </header>
  );
}
