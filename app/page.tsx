import type { Metadata } from "next";
import Link from "next/link";
import { DispatchReadiness } from "@/components/dispatch-readiness";
import { PageHero } from "@/components/page-hero";
import { TrustCompliance } from "@/components/trust-compliance";
import { JsonLd } from "@/components/visuals";
import { cityLocationEntries } from "@/lib/locations";
import { NATIONAL_PAGES, PHONE_DISPLAY, PHONE_E164, PILLAR_SLUG, SITE_NAME, absoluteUrl } from "@/lib/pages";
import { pageLinkLabel } from "@/lib/link-labels";
import { trimDescription, trimTitle } from "@/lib/seo-meta";

export const metadata: Metadata = {
  title: trimTitle("Canada Electrical Pros | Licensed Electricians"),
  description: trimDescription(
    `Commercial and residential electricians across Canada—panels, EV chargers, lighting, and repairs. Call ${PHONE_DISPLAY}.`,
  ),
  alternates: { canonical: "/" },
};

const homeFaqs = [
  {
    q: "Do you handle emergency electrical faults?",
    a: "Yes—dispatch triages power loss, tripped mains, arcing, and life-safety lighting. Share your address, panel location, and what shut off.",
  },
  {
    q: "Which cities do you cover?",
    a: "Major metros from Toronto and Vancouver to Calgary and Halifax. Open the Cities page or call " + PHONE_DISPLAY + " with your postal code.",
  },
  {
    q: "What should I have ready when I call?",
    a: "Property address, service voltage if known, photos of the panel or fault, and whether the issue is commercial, residential, or fleet EV.",
  },
];

const featured = NATIONAL_PAGES.filter(
  (p) => p.slug === PILLAR_SLUG || p.priority === "Top Priority" || p.priority === "High",
).slice(0, 9);

const stats = [
  { value: "99.98%", label: "Uptime SLA", sub: "Critical path reliability" },
  { value: "1,850+", label: "Projects", sub: "Commercial & residential" },
  { value: "100%", label: "Red Seal", sub: "Licensed crews" },
  { value: "24/7", label: "Dispatch", sub: "Coast to coast" },
];

export default function HomePage() {
  const cities = cityLocationEntries();

  return (
    <main>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE_NAME,
            url: absoluteUrl(),
            telephone: PHONE_E164,
            areaServed: "Canada",
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: homeFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          },
        ]}
      />

      <PageHero
        variant="home"
        kicker="Coast-to-coast · licensed"
        title={
          <>
            Powering Canada&apos;s facilities with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-secondary">
              surgical electrical precision
            </span>
            .
          </>
        }
        lead={
          <p>
            Master Electricians and Red Seal crews for panel upgrades, EV chargers, commercial fit-outs, and emergency repairs—
            coordinated with ESA and provincial authorities.
          </p>
        }
        ctaLabel="Call dispatch"
        secondaryHref="/locations"
        secondaryLabel="Pick your city"
        hudLabel="ONTARIO SUBSTATION HUB #4"
      />

      <section className="wrap -mt-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-surface-container/70 backdrop-blur-md border border-white/8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col">
              <span className="text-2xl font-bold font-mono text-primary">{s.value}</span>
              <span className="font-mono text-xs text-on-surface font-semibold mt-1">{s.label}</span>
              <span className="text-sm text-on-surface-variant">{s.sub}</span>
            </div>
          ))}
        </div>
      </section>

      <TrustCompliance />

      <section className="py-16 bg-surface">
        <div className="wrap">
          <span className="font-mono text-[10px] text-primary uppercase tracking-widest">Capabilities</span>
          <h2 className="text-3xl font-bold text-on-surface mt-1 mb-8">Engineered power solutions</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map((page, i) => (
              <li key={page.slug}>
                <Link
                  href={`/${page.slug}`}
                  className="group block h-full rounded-2xl bg-surface-container p-6 border border-white/6 hover:bg-surface-container-high transition-all"
                >
                  <span className="font-mono text-[10px] text-primary uppercase tracking-widest">
                    {String(i + 1).padStart(2, "0")} / Service
                  </span>
                  <h3 className="text-lg font-bold text-on-surface mt-2 group-hover:text-primary transition-colors">
                    {pageLinkLabel(page)}
                  </h3>
                  <p className="text-sm text-on-surface-variant mt-2 line-clamp--2">
                    {page.keyword || "Licensed electrical contractors"} — call {PHONE_DISPLAY} for dispatch.
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link
              href="/services"
              className="inline-flex font-mono text-xs text-secondary hover:text-on-surface tracking-wide uppercase"
            >
              View all 24 national services →
            </Link>
          </div>
        </div>
      </section>

      <DispatchReadiness />

      <section className="py-16 bg-surface-container-low">
        <div className="wrap">
          <h2 className="text-2xl font-bold text-on-surface mb-4">Metro dispatch</h2>
          <p className="text-on-surface-variant mb-6 max-w-xl">Licensed electricians in major Canadian cities—one number routes to your provincial hub.</p>
          <ul className="city-grid">
            {cities.map((c) => (
              <li key={c.href}>
                <Link href={c.href}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-surface-container-lowest">
        <div className="wrap rounded-3xl bg-surface-container p-8 lg:p-12 border border-white/8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl lg:text-3xl font-bold text-on-surface">Ready to modernize or repair your power systems?</h2>
            <p className="text-on-surface-variant mt-3">
              Speak directly with a Master Electrician—we assess load, permitting, and code paths on the call. No web forms.
            </p>
          </div>
          <a
            href={`tel:${PHONE_E164}`}
            className="shrink-0 px-8 py-4 rounded-xl bg-primary-container hover:bg-primary text-on-primary-container font-semibold shadow-[0_0_24px_-4px_rgba(245,158,11,0.35)]"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </main>
  );
}
