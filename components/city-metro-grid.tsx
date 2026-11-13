import Link from "next/link";

type CityEntry = { name: string; href: string };

type CityMetroGridProps = {
  cities: CityEntry[];
  title?: string;
};

export function CityMetroGrid({ cities, title = "Choose your metro" }: CityMetroGridProps) {
  return (
    <section className="py-16 bg-surface">
      <div className="wrap">
        <span className="font-mono text-[10px] text-secondary uppercase tracking-widest">Provincial hubs</span>
        <h2 className="text-3xl font-bold text-on-surface mt-1 mb-8">{title}</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {cities.map((c, i) => (
            <li key={c.href}>
              <Link
                href={c.href}
                className="group block rounded-2xl bg-surface-container p-5 border border-white/6 hover:bg-surface-container-high hover:border-secondary/30 transition-all text-center min-h-[5.5rem] flex flex-col items-center justify-center"
              >
                <span className="font-mono text-[9px] text-on-surface-variant uppercase mb-1">
                  Hub {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-semibold text-on-surface group-hover:text-secondary transition-colors">{c.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
