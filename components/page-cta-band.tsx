import { PHONE_DISPLAY, PHONE_E164 } from "@/lib/pages";

type PageCtaBandProps = {
  title?: string;
  body?: string;
};

export function PageCtaBand({
  title = "Ready to lock a licensed crew?",
  body = "No forms—call dispatch with your address, scope, and panel photos. A Master Electrician confirms code paths and timing on the line.",
}: PageCtaBandProps) {
  return (
    <section className="py-16 lg:py-20 bg-surface-container-lowest border-t border-white/6">
      <div className="wrap">
        <div className="rounded-3xl bg-surface-container p-8 lg:p-10 border border-white/8 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-r from-primary-container/10 via-transparent to-secondary/10 pointer-events-none"
            aria-hidden
          />
          <div className="relative max-w-xl">
            <span className="inline-flex items-center gap-2 px-2 py-1 rounded bg-primary/20 text-primary font-mono text-[10px] uppercase tracking-widest mb-3">
              ⚡ Live dispatch
            </span>
            <h2 className="text-2xl font-bold text-on-surface">{title}</h2>
            <p className="text-on-surface-variant mt-2 leading-relaxed">{body}</p>
          </div>
          <a
            href={`tel:${PHONE_E164}`}
            className="relative shrink-0 w-full lg:w-auto text-center px-8 py-4 rounded-xl bg-primary-container hover:bg-primary text-on-primary-container font-semibold shadow-[0_0_24px_-4px_rgba(245,158,11,0.35)] transition-transform hover:scale-[1.02]"
          >
            <span className="block font-mono text-[10px] uppercase tracking-widest opacity-90">Call now</span>
            <span className="block text-lg font-mono mt-0.5">{PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
