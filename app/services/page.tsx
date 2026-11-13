import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";
import { FaqSection } from "@/components/faq-section";
import { NationalServiceGrid } from "@/components/national-service-grid";
import { PageCtaBand } from "@/components/page-cta-band";
import { PageHero } from "@/components/page-hero";
import { StatsStrip } from "@/components/stats-strip";
import { TrustCompliance } from "@/components/trust-compliance";
import { JsonLd } from "@/components/visuals";
import { NATIONAL_PAGES, PHONE_DISPLAY, SITE_NAME, absoluteUrl } from "@/lib/pages";
import { trimDescription, trimTitle } from "@/lib/seo-meta";

export const metadata: Metadata = {
  title: trimTitle(`Electrical Services Canada | ${SITE_NAME}`),
  description: trimDescription(
    `Commercial and residential electrician services—panels, EV chargers, lighting, wiring, and repairs. Pick a service below or call ${PHONE_DISPLAY}.`,
  ),
  alternates: { canonical: "/services" },
};

const servicesIntro =
  "Twenty-four national service lanes—commercial fit-outs, residential repairs, panel upgrades, EV infrastructure, and code compliance. " +
  "Open the card that matches your scope, then call dispatch on one Canada-wide line. No quote forms.";

const indexFaqs = [
  {
    q: "Which service page should I open first?",
    a: "Match the job type—panel upgrade, EV charger, outlet repair, or commercial electrician. City pages layer local permitting notes on the same services.",
  },
  {
    q: "Can one call cover multiple scopes?",
    a: "Yes—describe everything on the line. Dispatch assigns a Red Seal lead and notes ESA / utility steps for the full list.",
  },
  {
    q: "How do I book?",
    a: "Pick the closest service card, note the page topic, and call " + PHONE_DISPLAY + " with your address and photos.",
  },
];

const breadcrumbs = [
  { name: "Home", href: absoluteUrl() },
  { name: "Services", href: absoluteUrl("services") },
];

export default function ServicesPage() {
  return (
    <main>
      <BreadcrumbJsonLd crumbs={breadcrumbs} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: indexFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }}
      />

      <PageHero
        kicker="National · 24 services"
        title="Electrical services built for Canadian code paths"
        lead={<p>{servicesIntro}</p>}
        ctaLabel="Call dispatch"
        hudLabel="SERVICE MATRIX ACTIVE"
        secondaryHref="/locations"
        secondaryLabel="Pick your city"
      />

      <StatsStrip />
      <TrustCompliance />

      <nav className="wrap pb-2 font-mono text-[10px] uppercase tracking-wide text-on-surface-variant" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-secondary">
          Home
        </Link>
        <span aria-hidden="true"> / </span>
        <span className="text-on-surface" aria-current="page">
          Services
        </span>
      </nav>

      <NationalServiceGrid pages={NATIONAL_PAGES} />

      <section className="py-12 bg-surface-container-low border-y border-white/6">
        <div className="wrap">
          <FaqSection title="Services FAQ" items={indexFaqs} />
        </div>
      </section>

      <PageCtaBand title="Not sure which card fits?" body="Call dispatch with photos—we map your job to the right service lane and provincial crew." />
    </main>
  );
}
