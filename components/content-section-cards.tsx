import type { ContentSection } from "@/lib/seo-content";

const ACCENTS = ["text-primary", "text-secondary", "text-tertiary"] as const;

type ContentSectionCardsProps = {
  intro: string;
  sections: ContentSection[];
  introLabel?: string;
};

export function ContentSectionCards({ intro, sections, introLabel = "Mission brief" }: ContentSectionCardsProps) {
  return (
    <div className="flex flex-col gap-4">
      <article className="rounded-2xl bg-gradient-to-b from-surface-container-high to-surface-container p-6 lg:p-8 border border-primary/20 shadow-[0_0_24px_-4px_rgba(245,158,11,0.12)]">
        <span className="font-mono text-[10px] text-primary uppercase tracking-widest">{introLabel}</span>
        <p className="text-on-surface text-lg leading-relaxed mt-3">{intro}</p>
      </article>

      <div className="grid grid-cols-1 gap-4">
        {sections.map((section, index) => (
          <section
            key={section.h2}
            className="group rounded-2xl bg-surface-container p-6 lg:p-7 border border-white/6 hover:border-secondary/25 hover:bg-surface-container-high transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <span
                className={`shrink-0 w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center font-mono text-xs font-bold ${ACCENTS[index % ACCENTS.length]}`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0 flex-1">
                <h2 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors mb-3">
                  {section.h2}
                </h2>
                <div className="space-y-3">
                  {section.paragraphs.map((para) => (
                    <p key={para.slice(0, 48)} className="text-sm lg:text-base text-on-surface-variant leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
