import Link from "next/link";
import type { InternalLink } from "@/lib/seo-content";

type LinkCardGridProps = {
  title: string;
  eyebrow?: string;
  links: InternalLink[];
  variant?: "service" | "city";
};

export function LinkCardGrid({ title, eyebrow, links, variant = "service" }: LinkCardGridProps) {
  if (!links.length) return null;

  return (
    <section className="mt-10 pt-10 border-t border-white/6">
      <span className="font-mono text-[10px] text-secondary uppercase tracking-widest block mb-1">
        {eyebrow ?? (variant === "city" ? "Metro routing" : "Related scope")}
      </span>
      <h2 className="text-xl font-bold text-on-surface mb-5">{title}</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {links.map((link, i) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group flex items-center justify-between gap-3 h-full min-h-[4.5rem] rounded-xl bg-surface-container-low px-4 py-3 border border-white/6 hover:bg-surface-container-high hover:border-secondary/30 transition-all"
            >
              <div>
                <span className="font-mono text-[9px] text-on-surface-variant uppercase tracking-wider block mb-0.5">
                  {variant === "city" ? "Metro" : "Service"} · {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold text-on-surface group-hover:text-secondary transition-colors">
                  {link.anchor}
                </span>
              </div>
              <span className="text-primary text-lg opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" aria-hidden>
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
