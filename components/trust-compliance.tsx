export function TrustCompliance() {
  const badges = [
    { icon: "✓", title: "Red Seal (RSE)", sub: "Interprovincial" },
    { icon: "◎", title: "ESA licensed", sub: "Provincial authorities" },
    { icon: "◈", title: "CSA Z462", sub: "Arc flash safety" },
    { icon: "♥", title: "COR certified", sub: "Health & safety" },
  ];

  return (
    <section className="w-full bg-surface-container-low py-12">
      <div className="wrap flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <span className="font-mono text-[10px] text-primary uppercase tracking-widest">National accreditation</span>
          <h2 className="text-lg font-bold text-on-surface mt-1">Authorized by Canadian safety authorities</h2>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {badges.map((b) => (
            <div
              key={b.title}
              className="px-4 py-3 rounded-xl bg-surface-container-high flex items-center gap-3 border border-white/6"
            >
              <span className="text-primary text-xl" aria-hidden>
                {b.icon}
              </span>
              <div>
                <span className="font-mono text-xs font-bold text-on-surface block">{b.title}</span>
                <span className="font-mono text-[10px] text-on-surface-variant">{b.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
