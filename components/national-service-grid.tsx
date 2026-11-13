import Link from "next/link";
import type { SeoPage } from "@/lib/pages";
import { pageLinkLabel } from "@/lib/link-labels";

type NationalServiceGridProps = {
  pages: SeoPage[];
  title?: string;
};

export function NationalServiceGrid({ pages, title = "All national services" }: NationalServiceGridProps) {
  return (
    <section className="py-16 bg-surface">
      <div className="wrap">
        <span className="font-mono text-[10px] text-primary uppercase tracking-widest">Service matrix</span>
        <h2 className="text-3xl font-bold text-on-surface mt-1 mb-8">{title}</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pages.map((page, i) => (
            <li key={page.slug}>
              <Link
                href={`/${page.slug}`}
                className="group flex flex-col h-full rounded-2xl bg-surface-container p-6 border border-white/6 hover:bg-surface-container-high hover:border-primary/25 transition-all shadow-md"
              >
                <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                  {String(i + 1).padStart(2, "0")} · {page.priority}
                </span>
                <h3 className="text-lg font-bold text-on-surface mt-2 group-hover:text-primary transition-colors flex-1">
                  {pageLinkLabel(page)}
                </h3>
                <p className="text-sm text-on-surface-variant mt-2 line-clamp-2">
                  {page.keyword || page.slug.replace(/-/g, " ")}
                </p>
                <span className="mt-4 font-mono text-xs text-secondary group-hover:translate-x-1 transition-transform inline-block">
                  Open service →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
