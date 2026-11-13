import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentSectionCards } from "@/components/content-section-cards";
import { DispatchSidebar } from "@/components/dispatch-sidebar";
import { FaqSection } from "@/components/faq-section";
import { LinkCardGrid } from "@/components/link-card-grid";
import { PageCtaBand } from "@/components/page-cta-band";
import { PageHero } from "@/components/page-hero";
import { StatsStrip } from "@/components/stats-strip";
import { TrustCompliance } from "@/components/trust-compliance";
import { JsonLd } from "@/components/visuals";
import {
  breadcrumbLabels,
  faqHeadingFor,
  faqsFor,
  h1For,
  heroLeadFor,
  internalLinkGroupsFor,
  introFor,
  pageSeoMeta,
  sectionsFor,
} from "@/lib/seo-content";
import {
  PAGES,
  PHONE_E164,
  PILLAR_SLUG,
  SITE_NAME,
  absoluteUrl,
  getPage,
  locationName,
} from "@/lib/pages";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = getPage((await params).slug);
  if (!page) return {};
  const { title, description } = pageSeoMeta(page);
  return {
    title,
    description,
    alternates: { canonical: `/${page.slug}` },
    openGraph: { title, description, url: absoluteUrl(page.slug), type: "website" },
  };
}

export default async function SeoPage({ params }: Props) {
  const page = getPage((await params).slug);
  if (!page) notFound();
  const place = locationName(page);
  const faqs = faqsFor(page);
  const sections = sectionsFor(page);
  const { locations: locationLinks, services: serviceLinks } = internalLinkGroupsFor(page);
  const isPillar = page.slug === PILLAR_SLUG;
  const isLocal = page.kind === "city";
  const fullIntro = introFor(page);
  const crumbs = breadcrumbLabels(page);
  const refCode = `CES-${page.slug.slice(0, 12).toUpperCase().replace(/-/g, "")}`;

  const breadcrumbSchema = [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl() },
    { "@type": "ListItem", position: 2, name: crumbs.hub, item: absoluteUrl(crumbs.hubPath.replace(/^\//, "")) },
    { "@type": "ListItem", position: 3, name: crumbs.current, item: absoluteUrl(page.slug) },
  ];

  const schemas: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: h1For(page),
      serviceType: page.keyword || "commercial electrical service",
      provider: { "@type": "Organization", name: SITE_NAME, telephone: PHONE_E164, url: absoluteUrl() },
      areaServed: page.area,
      url: absoluteUrl(page.slug),
      description: fullIntro,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbSchema,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ];

  if (isLocal) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: SITE_NAME,
      telephone: PHONE_E164,
      url: absoluteUrl(page.slug),
      areaServed: { "@type": "City", name: place },
      description: fullIntro,
    });
  }

  const kicker = isLocal ? place : page.area.replace(" (National)", "");

  return (
    <main>
      <JsonLd data={schemas} />

      <PageHero
        kicker={kicker}
        title={h1For(page)}
        lead={<p>{heroLeadFor(page)}</p>}
        ctaLabel="Call dispatch"
        hudLabel={isLocal ? `${place.toUpperCase()} DISPATCH` : "NATIONAL CREW STAGING"}
        secondaryHref={isPillar ? "/services" : isLocal ? "/locations" : `/${PILLAR_SLUG}`}
        secondaryLabel={isPillar ? "All services" : isLocal ? "More cities" : "Commercial hub"}
      />

      <StatsStrip />
      <TrustCompliance />

      <nav
        className="wrap pb-2 font-mono text-[10px] tracking-wide uppercase text-on-surface-variant"
        aria-label="Breadcrumb"
      >
        <Link href="/" className="hover:text-secondary">
          Home
        </Link>
        <span aria-hidden="true"> / </span>
        <Link href={crumbs.hubPath} className="hover:text-secondary">
          {crumbs.hub}
        </Link>
        <span aria-hidden="true"> / </span>
        <span className="text-on-surface" aria-current="page">
          {crumbs.current}
        </span>
      </nav>

      <section className="py-12 lg:py-16 bg-surface">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-8 min-w-0">
              <ContentSectionCards
                intro={fullIntro}
                sections={sections}
                introLabel={isLocal ? `${place} dispatch brief` : "National scope brief"}
              />

              <LinkCardGrid
                title={isLocal ? "Other metros" : "Service locations"}
                links={locationLinks}
                variant="city"
                eyebrow="Coverage"
              />

              <LinkCardGrid
                title={isLocal ? `More electrical help in ${place}` : "Related services"}
                links={serviceLinks}
                variant="service"
                eyebrow="Cross-scope"
              />
            </div>

            <div className="lg:col-span-4">
              <DispatchSidebar place={place} keyword={page.keyword} referenceCode={refCode} />
            </div>
          </div>
        </div>
      </section>

      <FaqSection title={faqHeadingFor(page)} items={faqs} variant="panel" />

      <PageCtaBand
        title={isLocal ? `Book licensed electricians in ${place}` : `Confirm scope for ${page.keyword || "this service"}`}
        body={`Reference ${refCode} when you call—dispatch routes to the correct provincial hub and crew class.`}
      />
    </main>
  );
}
