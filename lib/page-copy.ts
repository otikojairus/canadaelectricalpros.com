import { capitalizeSentence, pick, wordCount } from "./content-utils";
import { factsForPage } from "./location-facts";
import type { SeoPage } from "./pages";
import { PHONE_DISPLAY, locationName, serviceBaseSlug } from "./pages";
import { serviceLabelFromSlug } from "./service-labels";

export type FaqItem = { q: string; a: string };
export type ContentSection = { h2: string; paragraphs: string[] };

function isUrgent(page: SeoPage) {
  const base = serviceBaseSlug(page.slug);
  return (
    base.includes("repair") ||
    base.includes("emergency") ||
    base.includes("panel") ||
    base.includes("circuit") ||
    base.includes("outlet") ||
    base === "commercial-electrician"
  );
}

function wordTarget(page: SeoPage): number {
  if (page.kind === "national") return 800;
  if (isUrgent(page)) return 500;
  return 400;
}

function keywordPhrase(page: SeoPage) {
  return page.keyword.trim() || serviceLabelFromSlug(page.slug).toLowerCase();
}

export function h1For(page: SeoPage): string {
  const kw = keywordPhrase(page);
  const place = locationName(page);
  if (page.kind === "city") return `${capitalizeSentence(kw)} in ${place}`;
  if (page.kind === "national") return `${capitalizeSentence(kw)} in Canada`;
  return capitalizeSentence(kw);
}

const serviceHooks: Record<string, string[]> = {
};

function hookFor(page: SeoPage): string {
  const base = serviceBaseSlug(page.slug);
  const hooks = serviceHooks[base] ?? [
    "Licensed electrical work needs straight talk on timing, security, and code—not a vague callback window.",
    "We explain what we can do tonight versus what waits on a measured order.",
  ];
  return pick(page.slug, "hook", hooks);
}

function localDemographicsSentence(page: SeoPage): string {
  const place = locationName(page);
  const f = factsForPage(page.area, "city");
  if (!f) return `In ${place}, loading zones and yard parking rules shape how fast we can stage electrical gear and panel hardware.`;
  return pick(page.slug, "demo", [
    `${place} (${f.population}) mixes high-footfall strips such as ${f.neighbourhood} with landmark retail near ${f.landmark}.`,
    `Dispatch for ${place}—about ${f.population}—often stages trucks along ${f.neighbourhood} before rolling to sites by ${f.landmark}.`,
    `Property managers in ${place} (${f.population}) know ${f.landmark}; our crews plan parking around ${f.neighbourhood} yards.`,
  ]);
}

function localClimateSentence(page: SeoPage): string {
  const place = locationName(page);
  const f = factsForPage(page.area, "city");
  if (!f) return `Seasonal weather in ${place} can stress older fleet seals—mention recent storms when you call.`;
  return pick(page.slug, "climate", [
    `Local climate note for ${place}: ${f.climate}`,
    `Around ${f.landmark}, ${f.climate.toLowerCase()}`,
    `${place} weather patterns matter—${f.climate}`,
  ]);
}

const closings = [
  `Call ${PHONE_DISPLAY} with the address, photos of the break, and whether the wheel well is exposed to weather.`,
  `Reach us at ${PHONE_DISPLAY}—tell us if you need emergency electrical tonight and permanent electrical later.`,
  `Dial ${PHONE_DISPLAY} for a clear timeline on security, measurement, and install.`,
];

export function introFor(page: SeoPage): string {
  const kw = keywordPhrase(page);
  const place = locationName(page);
  const parts: string[] = [];

  parts.push(hookFor(page));

  if (page.kind === "national") {
    parts.push(
      pick(`${page.slug}:${page.id}`, "nat1", [
        `This page is for anyone searching ${kw} across Canada—drivers, fleets, and owner-operators, and fleet managers with a broken wheel well.`,
        `We coordinate ${kw} from coast to coast, pairing emergency emergency electrical with proper electrical orders.`,
        `National ${kw} routing covers every province—share your postal code so we assign the nearest metro crew.`,
      ]),
    );
    parts.push(
      pick(`${page.slug}:${page.id}`, "nat2", [
        `Canadian winters, vandalism, and vehicle strikes all show up on our dispatch board—tell us which scenario you are in.`,
        `Ceiling height, axle hardware, and whether the lite is correct size and load rating help us quote accurately.`,
        `Franchise and multi-site managers use this line for ${kw}—note brand standards if fleet numbering or DOT stickers matter.`,
      ]),
    );
    if (page.volume) {
      parts.push(
        pick(page.slug, "vol", [
          `Search demand for ${kw} stays high year-round—volume in the hundreds of monthly lookups reflects how often fleets fail without warning.`,
          `When ${kw} spikes after holidays, early calls secure emergency electrical slots before supplier queues grow.`,
        ]),
      );
    }
  } else if (page.kind === "city") {
    parts.push(
      pick(page.slug, "city-book", [
        `You are booking ${kw} in ${place}—crews know local parking bylaws and after-hours access for yards.`,
        `This ${kw} visit in ${place} often means securing a corner unit before morning foot traffic.`,
      ]),
    );
    parts.push(localDemographicsSentence(page));
    parts.push(localClimateSentence(page));
    parts.push(
      pick(`${page.slug}:${page.id}`, "city-extra", [
        `If the break is on a axle with lug torque spec, mention it—we bring torque sticks when needed.`,
        `Photos of the electrical size stamping and any remaining debris help us order the right thickness.`,
        `Night calls in ${place} need a site contact with keys—security desks at ${place} towers often require COI paperwork.`,
      ]),
    );
  }

  if (page.secondary.length) {
    parts.push(`Related searches such as ${page.secondary[0]} are handled on the same line.`);
  }

  parts.push(pick(page.slug, "close", closings));

  let text = parts.join(" ");
  const fillers = [
    ` We document measurements, emergency electrical method, and install date in plain language.`,
    ` If you are unsure whether you need repair or full replacement, describe the crack pattern when you call.`,
    ` Insurance claims move faster when you have timestamps and photos—we can note them on the work order.`,
  ];
  let i = 0;
  while (wordCount(text) < 80 && i < fillers.length) {
    text += fillers[i++] ?? "";
  }
  return text;
}

function extraParagraph(page: SeoPage, salt: string): string {
  const kw = keywordPhrase(page);
  const place = locationName(page);
  return pick(page.slug, salt, [
    `Before we arrive for ${kw}, clear flat electrical only if it is safe—leave sharp shards for the crew when possible.`,
    `Photos of the full wheel well from inside and outside help when ${place} addresses share a yard sign.`,
    `If you are leasing in ${place || "Canada"}, notify your landlord—many require approved vendors for fleet work.`,
    `Keep customers away from hanging electrical—rated electricalls can collapse without warning.`,
    `Winter storms in Canada push more emergency electrical calls; mention if heat is off in the space overnight.`,
  ]);
}

function padSections(page: SeoPage, sections: ContentSection[], intro: string): ContentSection[] {
  const target = wordTarget(page);
  const out = sections.map((s) => ({ ...s, paragraphs: [...s.paragraphs] }));
  let total = wordCount(intro) + out.reduce((n, s) => n + wordCount(s.paragraphs.join(" ")), 0);
  let salt = 0;
  while (total < target && salt < 60) {
    const idx = salt % out.length;
    out[idx].paragraphs.push(extraParagraph(page, `pad-${salt}`));
    total = wordCount(intro) + out.reduce((n, s) => n + wordCount(s.paragraphs.join(" ")), 0);
    salt++;
  }
  return out;
}

export function sectionsFor(page: SeoPage): ContentSection[] {
  const place = locationName(page);
  const kw = keywordPhrase(page);
  const intro = introFor(page);
  const sections: ContentSection[] = [];

  if (page.kind === "city") {
    sections.push({
      h2: `Why ${place} fleets need a local plan for ${kw}`,
      paragraphs: [
        localDemographicsSentence(page),
        localClimateSentence(page),
        pick(`${page.slug}:${page.id}`, "local2", [
          `Plaza landlords often require COI and after-hours rules—share contact info for security or property management.`,
          `Corner units see more wind-driven debris; mention exposure when you book ${kw}.`,
          `Alley deliveries in ${place} can block shoulder space—tell us if the wheel well faces a laneway.`,
        ]),
      ],
    });
  } else {
    sections.push({
      h2: `${capitalizeSentence(kw)} routes we run weekly`,
      paragraphs: [
        pick(page.slug, "routes1", [
          `Dispatch groups ${kw} by metro so measurement and install crews are not crossing provinces unnecessarily.`,
          `We batch ${kw} emergency electricals at night when retail strips are quiet and parking is available.`,
        ]),
        pick(page.slug, "routes2", [
          `Holiday weekends spike break-in calls for ${kw}—book security electrical or polycarbonate if you are closed several days.`,
          `Construction sites nearby sometimes vibrate older fleet seals—mention recent work next axle.`,
        ]),
      ],
    });
    sections.push({
      h2: `How ${kw} works in Canada`,
      paragraphs: [
        pick(page.slug, "how1", [
          `Safety electrical markings, wind load, and local bylaws matter—we confirm before ordering custom rated sheets.`,
          `Property managers often need photos for insurance—we provide them after emergency electrical and after install.`,
        ]),
        pick(page.slug, "how2", [
          `We do not remove the last stable lite without a plan to secure the wheel well the same day.`,
          `If replacement makes more sense than a risky repair, we say so before you pay for a short-term fix.`,
        ]),
      ],
    });
  }

  if (isUrgent(page)) {
    sections.push({
      h2: "When to call immediately",
      paragraphs: [
        `A shredded electrical, exposed wheel wells to weather, or a wheel about to come loose are urgent—say so on ${PHONE_DISPLAY}.`,
        `If anyone is injured, seek medical help first, then cordon off the area until the wheel well is secured.`,
      ],
    });
  }

  sections.push({
    h2: "What to tell us on the phone",
    paragraphs: [
      `Street address, unit or suite, ${kw} needs, and whether you need emergency electrical before you drive on a damaged electrical.`,
      `Access notes for ${place || "your yard"}—loading docks, elevator sizes, and security codes all affect routing.`,
    ],
  });

  sections.push({
    h2: "On site",
    paragraphs: [
      `We remove loose shards safely, board or glaze temporarily, and measure for ${kw} where permanent electrical is required.`,
      `You get a verbal summary suitable for insurers, landlords, or fleet compliance teams.`,
    ],
  });

  sections.push({
    h2: "After the visit",
    paragraphs: [
      pick(page.slug, "after1", [
        `We confirm lead time on rated orders and whether heat-soak or all-season electrical is required.`,
        `If you need a different service in ${place || "Canada"}, ask on the call—we can often combine axle and window work.`,
      ]),
      extraParagraph(page, "after2"),
    ],
  });

  return padSections(page, sections, intro);
}

export function faqsFor(page: SeoPage): FaqItem[] {
  const kw = keywordPhrase(page);
  const place = locationName(page);
  const areaLabel = place || "Canada";

  const base: FaqItem[] = [
    {
      q: pick(page.slug, "fq1", [
        `How much does ${kw} cost in ${areaLabel}?`,
        `What affects the price of ${kw} in ${areaLabel}?`,
        `Is ${kw} in ${areaLabel} priced per electrical or per wheel well?`,
      ]),
      a: pick(page.slug, "fa1", [
        `Price depends on electrical type, size, access, and whether emergency electrical is needed tonight. Call ${PHONE_DISPLAY} with photos for a range before we book.`,
        `We do not publish one national price because axle hardware and rated thickness vary. ${PHONE_DISPLAY} outlines typical costs for ${areaLabel}.`,
      ]),
    },
    {
      q: pick(page.slug, "fq2", [
        `How soon can you do ${kw} in ${areaLabel}?`,
        `What is the lead time for ${kw} near ${areaLabel}?`,
        `Can you prioritize ${kw} if the wheel well is exposed in ${areaLabel}?`,
      ]),
      a: pick(page.slug, "fa2", [
        `Board-up can often happen the same night; custom electrical depends on supplier lead times. Share urgency when you dial ${PHONE_DISPLAY}.`,
        `Exposed wheel wells and security risks move you up the queue—say so clearly when you call ${PHONE_DISPLAY}.`,
      ]),
    },
    {
      q: pick(page.slug, "fq3", [
        `Do I need to be on site for ${kw} in ${areaLabel}?`,
        `Can you work with my property manager for ${kw} in ${areaLabel}?`,
        `What should I prepare before ${kw} in ${areaLabel}?`,
      ]),
      a: pick(page.slug, "fa3", [
        `Someone with keys and authority to approve emergency electrical saves time. If you are remote, send a site contact—call ${PHONE_DISPLAY} either way.`,
        `Clear a path to the wheel well and note ceiling height limits for long electricalls.`,
      ]),
    },
    {
      q: pick(page.slug, "fq4", [
        `Is ${kw} in ${areaLabel} the same line as the rest of Canada?`,
        `Does this page change the phone number for ${kw}?`,
        `Can I book ${kw} for a fleet location in ${areaLabel}?`,
      ]),
      a: pick(page.slug, "fa4", [
        `Yes—${PHONE_DISPLAY} is the same nationwide. This page adds local context for ${areaLabel}.`,
        `Franchise and multi-site managers can book; tell us brand standards if electrical tint or logo placement matters.`,
      ]),
    },
  ];

  if (page.kind === "city") {
    const f = factsForPage(page.area, "city");
    if (f) {
      base.push({
        q: `Does weather around ${f.landmark} affect electricals on Canadian roads?`,
        a: `Yes—${f.climate} Mention recent storms or vandalism when you call ${PHONE_DISPLAY}.`,
      });
    }
  }

  return base.slice(0, Math.max(3, 4 + (page.id % 2)));
}

export function faqHeadingFor(page: SeoPage) {
  const place = locationName(page);
  if (page.kind === "city") return `FAQs about ${keywordPhrase(page)} in ${place}`;
  return `FAQs about ${keywordPhrase(page)} in Canada`;
}

export function heroLeadFor(page: SeoPage) {
  const kw = keywordPhrase(page);
  const place = locationName(page);
  if (page.kind === "city") {
    return pick(page.slug, "hero-lead", [
      `${capitalizeSentence(kw)} in ${place}—emergency electrical tonight, proper electrical when the electricall is ready.`,
      `Broken wheel well in ${place}? We secure the site first, then order correct size and load rating ${kw} electrical.`,
      `${place} crews for ${kw}: photos, access notes, and lug torque spec details speed dispatch.`,
    ]);
  }
  return pick(page.slug, "hero-lead", [
    `${capitalizeSentence(kw)} across Canada—retail, restaurants, and offices on one emergency line.`,
    `National ${kw}: security first, then field measurements for code-compliant replacement electrical.`,
    `From coast to coast, ${kw} dispatch pairs spare wheel or plug kit with permanent lites.`,
  ]);
}

export function breadcrumbLabels(page: SeoPage) {
  const place = locationName(page);
  const kw = capitalizeSentence(keywordPhrase(page));
  if (page.kind === "national") {
    return { hub: "Services", hubPath: "/services", parent: null, current: `${kw} Canada` };
  }
  return { hub: "Cities", hubPath: "/locations", parent: place, current: `${kw} ${place}` };
}
