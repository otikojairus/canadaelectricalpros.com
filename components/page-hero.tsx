import Link from "next/link";
import type { ReactNode } from "react";
import { TelemetryHud } from "@/components/telemetry-hud";
import { PHONE_DISPLAY, PHONE_E164 } from "@/lib/pages";

type PageHeroProps = {
  kicker?: string;
  title: ReactNode;
  lead: ReactNode;
  ctaLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  variant?: "home" | "page";
  hudLabel?: string;
};

export function PageHero({
  kicker,
  title,
  lead,
  ctaLabel = "Call dispatch",
  secondaryHref,
  secondaryLabel,
  variant = "page",
  hudLabel,
}: PageHeroProps) {
  const isHome = variant === "home";

  return (
    <section className="relative w-full overflow-hidden bg-surface-container-lowest pt-32 pb-16 lg:pb-24">
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary-container/10 blur-[120px] pointer-events-none" aria-hidden />
      <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-secondary/10 blur-[140px] pointer-events-none" aria-hidden />

      <div className="wrap relative z-10">
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high/80 backdrop-blur-md mb-6 font-mono text-[10px] tracking-widest uppercase ${
            isHome ? "text-secondary" : "text-primary"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          {isHome ? "National grid monitor active" : "Licensed · ESA-aligned dispatch"}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            {kicker && (
              <p className="font-mono text-xs text-primary tracking-wider uppercase mb-2 flex items-center gap-1">
                <span aria-hidden>⚡</span> {kicker}
              </p>
            )}
            <h1 className="text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight leading-[1.1] mb-4">
              {title}
            </h1>
            <div className="text-lg text-on-surface-variant max-w-2xl leading-relaxed mb-8">{lead}</div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${PHONE_E164}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary-container hover:bg-primary text-on-primary-container font-semibold text-sm shadow-[0_0_30px_-5px_rgba(245,158,11,0.45)] transition-transform hover:scale-[1.02]"
              >
                {ctaLabel}
                <span className="font-mono text-xs opacity-90">{PHONE_DISPLAY}</span>
              </a>
              {secondaryHref && secondaryLabel && (
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-surface-container-high/90 hover:bg-surface-container-highest text-on-surface font-mono text-xs tracking-wide border border-white/8"
                >
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  {secondaryLabel}
                </Link>
              )}
            </div>

            <ul className="flex flex-wrap items-center gap-4 mt-6 pt-4 text-on-surface-variant font-mono text-[10px] uppercase tracking-wide">
              <li>Red Seal crews</li>
              <li>·</li>
              <li>$20M bonded</li>
              <li>·</li>
              <li>CEC compliant</li>
            </ul>
          </div>

          <div className="lg:col-span-5">
            <TelemetryHud label={hudLabel} />
          </div>
        </div>
      </div>
    </section>
  );
}
