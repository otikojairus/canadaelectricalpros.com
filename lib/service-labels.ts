import { NATIONAL_PAGES } from "./pages";
import { capitalizeSentence } from "./content-utils";

export const SERVICE_LABELS: Record<string, string> = Object.fromEntries(
  NATIONAL_PAGES.map((p) => [p.slug, capitalizeSentence(p.keyword || p.slug.replace(/-/g, " "))]),
);

const CITY_SUFFIXES = [
  "abbotsford",
  "barrie",
  "calgary",
  "edmonton",
  "etobicoke",
  "halifax",
  "hamilton",
  "laval",
  "london-ontario",
  "markham",
  "mississauga",
  "montreal",
  "north-york",
  "ottawa",
  "regina",
  "st-catharines",
  "surrey-bc",
  "thornhill",
  "toronto",
  "vancouver",
  "vaughan",
  "winnipeg",
  "woodbridge",
];

export function serviceLabelFromSlug(slug: string) {
  let base = slug;
  for (const city of CITY_SUFFIXES) {
    if (base.endsWith(`-${city}`)) {
      base = base.slice(0, -(city.length + 1));
      break;
    }
  }
  return SERVICE_LABELS[base] ?? base.replace(/-/g, " ");
}
