import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";
import { CityMetroGrid } from "@/components/city-metro-grid";
import { FaqSection } from "@/components/faq-section";
import { PageCtaBand } from "@/components/page-cta-band";
import { PageHero } from "@/components/page-hero";
import { StatsStrip } from "@/components/stats-strip";
import { TrustCompliance } from "@/components/trust-compliance";
import { JsonLd } from "@/components/visuals";
import { cityLocationEntries } from "@/lib/locations";
import { PHONE_DISPLAY, SITE_NAME, absoluteUrl } from "@/lib/pages";
import { trimDescription, trimTitle } from "@/lib/seo-meta";

export const metadata: Metadata = {
  title: trimTitle(`Electrician Cities | ${SITE_NAME}`),
  description: trimDescription(
    `Licensed electricians in Toronto, Vancouver, Calgary, Montreal, and metros across Canada. Open your city page for local notes, then call ${PHONE_DISPLAY}.`,
  ),
  alternates: { canonical: "/locations" },
};

const locationsIntro =
  "Twenty-three metro hubs—each card opens localized dispatch notes, permitting context, and city-specific service links. " +
  "Suburbs outside the list are usually still in-range; call with your full address.";

const locFaqs = [
  {
    q: "My suburb is not listed—can you still come?",
    a: "Usually yes. Metro pages cover the wider urban area. Call " + PHONE_DISPLAY + " with your street address or postal code.",
  },
  {
    q: "Why is each city one link?",
    a: "The hub lists one entry per metro. That page routes to commercial electrical service locally; national service pages cover all of Canada.",
  },
  {
    q: "Do you work after hours?",
    a: "Yes—emergency electrical and panel faults run 24/7. Planned upgrades and installs are scheduled with ESA lead times.",
  },
];

const breadcrumbs = [
  { name: "Home", href: absoluteUrl() },
  { name: "Cities", href: absoluteUrl("locations") },
];

export default function LocationsPage() {
  const cities = cityLocationEntries();

  return (
    <main>
      <BreadcrumbJsonLd crumbs={breadcrumbs} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: locFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }}
      />

      <PageHero
        kicker="23 metros"
        title="Licensed electricians in every major Canadian hub"
        lead={<p>{locationsIntro}</p>}
        ctaLabel="Call dispatch"
        hudLabel="METRO ROUTING ACTIVE"
        secondaryHref="/services"
        secondaryLabel="All services"
      />

      <StatsStrip />
      <TrustCompliance />

      <nav className="wrap pb-2 font-mono text-[10px] uppercase tracking-wide text-on-surface-variant" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-secondary">
          Home
        </Link>
        <span aria-hidden="true"> / </span>
        <span className="text-on-surface" aria-current="page">
          Cities
        </span>
      </nav>

      <CityMetroGrid cities={cities} />

      <section className="py-12 bg-surface-container-low border-y border-white/6">
        <div className="wrap">
          <FaqSection title="Cities FAQ" items={locFaqs} />
        </div>
      </section>

      <PageCtaBand title="Between cities on the highway?" body="Call from the road with your nearest exit or GPS—dispatch uses the closest provincial hub." />
    </main>
  );
}
