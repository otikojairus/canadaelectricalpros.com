import type { ImageKey } from "./images";
import { imageForServiceSlug } from "./images";
import { PILLAR_SLUG, serviceBaseSlug } from "./pages";

export type HeroTile = { key: ImageKey; href: string; label: string };

export const HERO_HOME_TILES: HeroTile[] = [
  { key: "emergency", href: "/emergency-commercial-electrician", label: "Emergency" },
  { key: "door", href: "/flat-commercial-electrician", label: "Flat electrical" },
  { key: "storefront", href: "/truck-commercial-electrician", label: "Truck electricals" },
  { key: "commercial-door", href: "/mobile-commercial-electrician", label: "Mobile repair" },
];

const PAGE_TILE_PRESETS: Record<string, HeroTile[]> = {
  "truck-commercial-electrician": [
    { key: "commercial", href: "/semi-truck-commercial-electrician", label: "Semi electricals" },
    { key: "board-up", href: "/truck-emergency electrical-assistance", label: "Emergency electrical" },
    { key: "commercial-replacement", href: "/mobile-truck-commercial-electrician", label: "Mobile truck" },
  ],
  "semi-truck-commercial-electrician": [
    { key: "storefront", href: "/truck-commercial-electrician", label: "Fleet truck" },
    { key: "emergency", href: "/emergency-commercial-electrician", label: "Emergency" },
    { key: "night", href: "/24-hour-commercial-electrician", label: "24 hour" },
  ],
  "mobile-truck-commercial-electrician": [
    { key: "commercial-door", href: "/mobile-commercial-electrician", label: "Mobile car" },
    { key: "storefront", href: "/truck-commercial-electrician", label: "Truck repair" },
    { key: "board-up", href: "/truck-emergency electrical-assistance", label: "Assistance" },
  ],
  "truck-emergency electrical-assistance": [
    { key: "storefront-window", href: "/emergency electrical-commercial-electrician", label: "Emergency electrical" },
    { key: "emergency", href: "/emergency-commercial-electrician", label: "Emergency" },
    { key: "storefront", href: "/truck-commercial-electrician", label: "Truck electricals" },
  ],
  "emergency-commercial-electrician": [
    { key: "night", href: "/24-hour-commercial-electrician", label: "24 hour" },
    { key: "storefront-window", href: "/emergency electrical-commercial-electrician", label: "Emergency electrical" },
    { key: "door", href: "/flat-commercial-electrician", label: "Flat electrical" },
  ],
  "24-hour-commercial-electrician": [
    { key: "emergency", href: "/emergency-commercial-electrician", label: "Emergency" },
    { key: "storefront-window", href: "/emergency electrical-commercial-electrician", label: "Emergency electrical" },
    { key: "commercial-door", href: "/mobile-commercial-electrician", label: "Mobile" },
  ],
  "emergency electrical-commercial-electrician": [
    { key: "board-up", href: "/truck-emergency electrical-assistance", label: "Truck emergency electrical" },
    { key: "emergency", href: "/emergency-commercial-electrician", label: "Emergency" },
    { key: "commercial-door", href: "/mobile-commercial-electrician", label: "Mobile" },
  ],
  "mobile-commercial-electrician": [
    { key: "door", href: "/flat-commercial-electrician", label: "Flat electrical" },
    { key: "door-glass-replacement", href: "/electrical-fault-repair", label: "Puncture" },
    { key: "storefront-window", href: "/emergency electrical-commercial-electrician", label: "Emergency electrical" },
  ],
  "commercial-electrician": [
    { key: "door", href: "/flat-commercial-electrician", label: "Flat electrical" },
    { key: "door-glass-replacement", href: "/electrical-fault-repair", label: "Puncture" },
    { key: "door-glass-repair", href: "/electrical-leak-repair", label: "Slow leak" },
  ],
  "flat-commercial-electrician": [
    { key: "replacement", href: `/${PILLAR_SLUG}`, label: "Commercial electrician" },
    { key: "door-glass-replacement", href: "/electrical-fault-repair", label: "Puncture" },
    { key: "commercial-door", href: "/mobile-commercial-electrician", label: "Mobile" },
  ],
  "electrical-fault-repair": [
    { key: "door", href: "/flat-commercial-electrician", label: "Flat electrical" },
    { key: "door-glass-repair", href: "/electrical-leak-repair", label: "Leak repair" },
    { key: "replacement", href: `/${PILLAR_SLUG}`, label: "General repair" },
  ],
  "electrical-leak-repair": [
    { key: "door-glass-replacement", href: "/electrical-fault-repair", label: "Puncture" },
    { key: "door", href: "/flat-commercial-electrician", label: "Flat electrical" },
    { key: "commercial-door", href: "/mobile-commercial-electrician", label: "Mobile" },
  ],
};

const CITY_TILES: HeroTile[] = [
  { key: "emergency", href: "/emergency-commercial-electrician", label: "Emergency" },
  { key: "commercial-door", href: "/mobile-commercial-electrician", label: "Mobile" },
  { key: "storefront-window", href: "/emergency electrical-commercial-electrician", label: "Emergency electrical" },
];

export function heroTilesFor(slug: string | undefined, variant: "home" | "page"): HeroTile[] {
  if (variant === "home") return HERO_HOME_TILES;
  if (!slug) return HERO_HOME_TILES.slice(0, 3);

  const base = serviceBaseSlug(slug);
  if (PAGE_TILE_PRESETS[base]) return PAGE_TILE_PRESETS[base]!;

  if (slug.startsWith("commercial-electrician-")) return CITY_TILES;

  const main = imageForServiceSlug(slug);
  return [
    { key: main, href: `/${slug}`, label: "This service" },
    ...HERO_HOME_TILES.filter((t) => t.key !== main).slice(0, 2),
  ];
}

export function heroMainImageKey(slug: string | undefined, variant: "home" | "page", fallback: ImageKey): ImageKey {
  if (variant === "home") return "hero-home";
  if (!slug) return fallback;
  if (slug.startsWith("commercial-electrician-")) return "hero-local";
  return imageForServiceSlug(slug);
}
