import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { SiteFooter, SiteHeader, StickyMobileCta } from "@/components/site-chrome";
import { absoluteUrl, SITE_NAME } from "@/lib/pages";
import "./globals.css";

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl()),
  title: { default: "Canada Electrical Pros | Licensed Electricians", template: "%s" },
  description:
    "Commercial and residential electricians across Canada—panel upgrades, EV chargers, lighting, and emergency repairs. Call for licensed dispatch.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: "National electrical contractors with metro dispatch across Canada.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA" className={`dark ${body.variable} ${mono.variable}`}>
      <body>
        <div className="site-shell">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
        <StickyMobileCta />
      </body>
    </html>
  );
}
