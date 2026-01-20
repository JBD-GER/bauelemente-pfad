// app/(public)/layout.tsx
import type { Metadata } from "next";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

export const metadata: Metadata = {
  title: "Generalunternehmen für Großprojekte",
  description:
    "Bauelemente Pfad ist Generalunternehmen für komplexe Bauprojekte: Gewerbeobjekte, Mehrfamilienhäuser und Wohnanlagen – von Planung bis schlüsselfertige Übergabe.",
  keywords: [
    "Generalunternehmen",
    "Generalunternehmer",
    "Gewerbebau",
    "Mehrfamilienhaus",
    "Wohnanlagen",
    "Projektsteuerung",
    "Gewerkekoordination",
    "Schlüsselfertig",
  ],
  openGraph: {
    title: "Bauelemente Pfad – Generalunternehmen für Großprojekte",
    description:
      "Komplexe Bauvorhaben aus einer Hand: Gewerbe, Mehrfamilienhäuser & Wohnanlagen – von Planung bis Übergabe.",
    type: "website",
    locale: "de_DE",
  },
};

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
