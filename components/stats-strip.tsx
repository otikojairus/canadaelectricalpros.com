const DEFAULT_STATS = [
  { value: "99.98%", label: "Uptime SLA", sub: "Critical path reliability", accent: "text-primary" },
  { value: "Red Seal", label: "Licensed", sub: "Master electricians", accent: "text-tertiary" },
  { value: "ESA", label: "Compliant", sub: "Provincial permits", accent: "text-secondary" },
  { value: "24/7", label: "Dispatch", sub: "Coast to coast", accent: "text-on-surface" },
] as const;

export function StatsStrip() {
  return (
    <section className="wrap -mt-4 mb-10 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-5 rounded-2xl bg-surface-container/90 backdrop-blur-md border border-white/8 shadow-lg">
        {DEFAULT_STATS.map((s) => (
          <div key={s.label} className="flex flex-col px-1">
            <span className={`text-xl lg:text-2xl font-bold font-mono ${s.accent}`}>{s.value}</span>
            <span className="font-mono text-[10px] lg:text-xs text-on-surface font-semibold mt-1 uppercase tracking-wide">
              {s.label}
            </span>
            <span className="text-xs text-on-surface-variant hidden sm:block">{s.sub}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
