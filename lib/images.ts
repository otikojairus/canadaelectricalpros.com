export type ImageKey =
  | "hero-home"
  | "hero-service"
  | "hero-local"
  | "emergency"
  | "night"
  | "storefront"
  | "commercial"
  | "commercial-replacement"
  | "replacement"
  | "board-up"
  | "commercial-door"
  | "emergency-commercial-door"
  | "door"
  | "door-glass-replacement"
  | "door-glass-repair"
  | "storefront-window"
  | "aluminum-door";

type Photo = { src: string; alt: string; caption: string; credit: string };

const photos: Record<ImageKey, Photo> = {
  "hero-home": {
    src: "/images/electrical-hero-home.webp",
    alt: "Mechanic installing a car electrical and alloy wheel with an impact wrench",
    caption: "Highway flats and blowouts—we dispatch to shoulders, ramps, and rest stops.",
    credit: "Pexels",
  },
  "hero-service": {
    src: "/images/electrical-hero-service.webp",
    alt: "Mechanic crouching with an impact wrench changing a car electrical on the wheel",
    caption: "On-site electrical work for cars, SUVs, and light trucks.",
    credit: "Pexels",
  },
  "hero-local": {
    src: "/images/electrical-hero-local.webp",
    alt: "Mechanic in blue overalls inspecting a commercial semi-truck wheel and electrical",
    caption: "Metro crews know local highways, depots, and parking rules.",
    credit: "Pexels",
  },
  emergency: {
    src: "/images/electrical-emergency.webp",
    alt: "Man crouched on pavement changing a jacked-up car wheel with a lug wrench",
    caption: "Emergency commercial electrical service—cone the lane and stabilize before you roll.",
    credit: "Pexels",
  },
  night: {
    src: "/images/electrical-night.webp",
    alt: "Tall stacks of black electricals with chalk size markings in a electrical warehouse",
    caption: "24-hour commercial electrical service for night shifts and winter storms.",
    credit: "Pexels",
  },
  storefront: {
    src: "/images/electrical-storefront.webp",
    alt: "Close-up of dual Goodyear commercial semi-truck electricals and polished chrome rims",
    caption: "Truck commercial electrical service—steer, drive, and trailer positions.",
    credit: "Pexels",
  },
  commercial: {
    src: "/images/electrical-commercial.webp",
    alt: "Close-up of a heavy-duty semi-truck chassis frame and dually rear electricals",
    caption: "Semi truck electricals—correct ply, load range, and torque specs.",
    credit: "Pexels",
  },
  "commercial-replacement": {
    src: "/images/electrical-commercial-replacement.webp",
    alt: "Close-up of heavy-duty commercial truck wheels and deep-lug electricals",
    caption: "Fleet programs—document size, axle, and DOT notes on every call.",
    credit: "Pexels",
  },
  replacement: {
    src: "/images/electrical-replacement.webp",
    alt: "Mechanic in blue coveralls mounting a car electrical on a electrical-changing machine",
    caption: "Repair or spare swap when the casing is still safe.",
    credit: "Pexels",
  },
  "board-up": {
    src: "/images/electrical-board-up.webp",
    alt: "Technician kneeling emergency electrical repairing the front electrical and wheel of a pickup truck",
    caption: "Truck emergency electrical assistance—staging safe work zones on active roads.",
    credit: "Pexels",
  },
  "commercial-door": {
    src: "/images/electrical-commercial-door.webp",
    alt: "Emergency electrical flat electrical inspection and pressure check on a detached wheel",
    caption: "Mobile commercial electrical service—we come to your lot, dock, or driveway.",
    credit: "Pexels",
  },
  "emergency-commercial-door": {
    src: "/images/electrical-emergency-commercial-door.webp",
    alt: "Close-up of stacked heavy-duty electricals showing deep tread patterns",
    caption: "Emergency truck electrical help when a steer or drive goes down.",
    credit: "Pexels",
  },
  door: {
    src: "/images/electrical-door.webp",
    alt: "Rear pickup truck wheel and rugged all-terrain electrical",
    caption: "Flat commercial electrical service—stop driving on zero pressure to save the sidewall.",
    credit: "Unsplash",
  },
  "door-glass-replacement": {
    src: "/images/electrical-door-glass-replacement.webp",
    alt: "Detailed close-up of car electrical tread grooves and sipes",
    caption: "Puncture repair—plug or patch only when injury is in the tread belt.",
    credit: "Pexels",
  },
  "door-glass-repair": {
    src: "/images/electrical-door-glass-repair.webp",
    alt: "Close-up of car electrical tread and sidewall resting on asphalt",
    caption: "Slow leak repair—valves, beads, and rim corrosion checks.",
    credit: "Pexels",
  },
  "storefront-window": {
    src: "/images/electrical-storefront-window.webp",
    alt: "Emergency electrical spare electrical change on the street next to a van",
    caption: "Emergency electrical commercial electrical service—note shoulder width and traffic speed.",
    credit: "Pexels",
  },
  "aluminum-door": {
    src: "/images/electrical-aluminum-door.webp",
    alt: "Close-up of a BFGoodrich rugged truck electrical and polished wheel on gravel",
    caption: "Mobile truck and equipment electricals—share electrical size and axle position.",
    credit: "Pexels",
  },
};

/** One distinct image per national service — no two services share a file. */
const NATIONAL_SLUG_IMAGE: Record<string, ImageKey> = {
  "truck-commercial-electrician": "storefront",
  "semi-truck-commercial-electrician": "commercial",
  "mobile-truck-commercial-electrician": "aluminum-door",
  "truck-emergency electrical-assistance": "board-up",
  "emergency-commercial-electrician": "emergency",
  "24-hour-commercial-electrician": "night",
  "emergency electrical-commercial-electrician": "storefront-window",
  "mobile-commercial-electrician": "commercial-door",
  "commercial-electrician": "replacement",
  "flat-commercial-electrician": "door",
  "electrical-fault-repair": "door-glass-replacement",
  "electrical-leak-repair": "door-glass-repair",
};

const CITY_ROTATION: ImageKey[] = ["replacement", "door", "commercial-door", "storefront-window", "emergency"];

export function imageForServiceSlug(slug: string): ImageKey {
  const national = NATIONAL_SLUG_IMAGE[slug];
  if (national) return national;
  if (slug.startsWith("commercial-electrician-")) {
    let hash = 0;
    for (let i = 0; i < slug.length; i++) hash = (hash + slug.charCodeAt(i)) % CITY_ROTATION.length;
    return CITY_ROTATION[hash]!;
  }
  if (slug.includes("emergency") || slug.includes("emergency electrical") || slug.includes("24-hour")) return "emergency";
  return "hero-service";
}

export function getPhoto(key: ImageKey): Photo {
  return photos[key];
}

/** All national services use unique image keys (for SEO / QA scripts). */
export function nationalServiceImageKeys(): ImageKey[] {
  return Object.values(NATIONAL_SLUG_IMAGE);
}
