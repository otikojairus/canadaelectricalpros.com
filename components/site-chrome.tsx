"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { PHONE_DISPLAY, PHONE_E164, PILLAR_SLUG, SITE_NAME } from "@/lib/pages";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Cities" },
  { href: `/${PILLAR_SLUG}`, label: "Commercial" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-surface-container-lowest px-4 lg:px-16">
        <div className="h-10 max-w-7xl mx-auto flex items-center justify-between font-mono text-[10px] font-semibold tracking-widest uppercase">
          <div className="flex items-center gap-4 min-w-0">
            <span className="flex items-center gap-1.5 text-error shrink-0">
              <span className="w-2 h-2 rounded-full bg-error animate-pulse" />
              24/7 dispatch
            </span>
            <span className="hidden md:inline text-outline-variant">|</span>
            <span className="hidden md:inline text-secondary">Red Seal · Master Electricians</span>
          </div>
          <a href={`tel:${PHONE_E164}`} className="text-primary shrink-0 hover:text-primary-container transition-colors">
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      <div className="bg-surface/85 backdrop-blur-xl border-b border-white/8 px-4 lg:px-16 shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
        <div className="h-[4.5rem] max-w-7xl mx-auto flex items-center justify-between gap-3">
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
            aria-label={`${SITE_NAME} home`}
          >
            <span className="w-9 h-9 rounded-lg bg-primary-container/20 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm">
              CE
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-bold uppercase tracking-tight text-on-surface">Canada Electrical</span>
              <span className="font-mono text-[10px] text-primary tracking-widest uppercase">Pros</span>
            </span>
          </Link>

          <nav
            className={`${open ? "flex" : "hidden"} xl:flex absolute xl:relative top-[7.25rem] xl:top-auto left-0 right-0 xl:left-auto xl:right-auto flex-col xl:flex-row gap-1 p-4 xl:p-0 bg-surface-container-low xl:bg-transparent border-b xl:border-0 border-white/8`}
            aria-label="Main"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 rounded-lg font-mono text-xs tracking-wide transition-colors ${
                  pathname === item.href
                    ? "bg-surface-container-high text-primary font-semibold"
                    : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${PHONE_E164}`}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-container hover:bg-primary text-on-primary-container font-mono text-xs font-semibold tracking-wide shadow-[0_0_24px_-4px_rgba(245,158,11,0.25)] transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-error animate-ping" />
              Call now
            </a>
            <button
              type="button"
              className="xl:hidden px-3 py-2 rounded-lg bg-surface-container-high text-on-surface font-mono text-xs"
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              Menu
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="w-full bg-surface-container-lowest text-on-surface-variant mt-16 border-t border-white/6">
      <div className="max-w-7xl mx-auto px-4 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <p className="text-on-surface font-bold uppercase text-sm mb-2">Canada Electrical Pros</p>
            <p className="text-sm leading-relaxed max-w-xs">
              Licensed commercial and residential electricians—panels, EV infrastructure, lighting, and code-compliant repairs coast to coast.
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-on-surface mb-3">Navigate</p>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/services" className="hover:text-secondary">
                Services
              </Link>
              <Link href="/locations" className="hover:text-secondary">
                Cities
              </Link>
              <Link href={`/${PILLAR_SLUG}`} className="hover:text-secondary">
                Commercial electrician
              </Link>
            </div>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-on-surface mb-3">Credentials</p>
            <p className="text-sm">Red Seal · ESA · CSA Z462</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-error mb-2">24/7 dispatch</p>
            <a href={`tel:${PHONE_E164}`} className="text-on-surface font-mono text-lg font-semibold hover:text-primary">
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
        <p className="mt-10 pt-6 border-t border-white/6 text-xs font-mono">
          © {new Date().getFullYear()} {SITE_NAME}
        </p>
      </div>
    </footer>
  );
}

export function StickyMobileCta() {
  return (
    <div className="mobile-dial">
      <a href={`tel:${PHONE_E164}`}>
        <span className="mobile-dial__pulse" aria-hidden="true" />
        Call {PHONE_DISPLAY}
      </a>
    </div>
  );
}
