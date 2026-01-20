// app/(public)/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const BRAND = "Bauelemente Pfad";

export const metadata: Metadata = {
  title: {
    default: `${BRAND} – Bauelemente, Modernisierung & Kernsanierung`,
    template: `%s | ${BRAND}`,
  },
  description:
    "Bauelemente (Fenster, Türen, Rollläden) sowie Modernisierung & Kernsanierung in Hannover und Umgebung – sauber geplant, zügig umgesetzt, verlässlich koordiniert.",
  keywords: [
    "Bauelemente",
    "Fenster Montage",
    "Türen Montage",
    "Rollladen",
    "Modernisierung",
    "Kernsanierung",
    "Hannover",
    "Barsinghausen",
    "Sanierung",
    "Baukoordination",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: BRAND,
    title: `${BRAND} – Bauelemente, Modernisierung & Kernsanierung`,
    description:
      "Fenster/Türen/Rollläden sowie Modernisierung & Kernsanierung – mit klaren Abläufen und sauberer Übergabe.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: BRAND }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND} – Bauelemente, Modernisierung & Kernsanierung`,
    description:
      "Fenster/Türen/Rollläden sowie Modernisierung & Kernsanierung – zuverlässig & sauber umgesetzt.",
    images: ["/og.jpg"],
  },
};

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
