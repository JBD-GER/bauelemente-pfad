// app/layout.tsx
import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import ConsentBanner from "@/app/components/ConsentBanner";
import { readConsentServer } from "@/app/lib/consent/server";

const arimo = Arimo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const BRAND = "Bauelemente Pfad";

function safeUrl(v?: string, fallback = "https://www.bauelemente-pfad.de") {
  try {
    return new URL(v || fallback);
  } catch {
    return new URL(fallback);
  }
}

const SITE_URL = safeUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const metadata: Metadata = {
  metadataBase: SITE_URL,
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
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    url: "/",
    siteName: BRAND,
    locale: "de_DE",
    title: `${BRAND} – Bauelemente, Modernisierung & Kernsanierung`,
    description:
      "Fenster/Türen/Rollläden sowie Modernisierung & Kernsanierung – mit klaren Abläufen und sauberer Übergabe.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: `${BRAND}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND} – Bauelemente, Modernisierung & Kernsanierung`,
    description:
      "Fenster/Türen/Rollläden sowie Modernisierung & Kernsanierung – zuverlässig & sauber umgesetzt.",
    images: ["/og.jpg"],
  },
  icons: { icon: [{ url: "/favicon.ico" }] },
};

// ✅ Klar getrennt:
const GA4_ID = (process.env.NEXT_PUBLIC_GA4_ID || "").trim(); // "G-..."
const ADS_ID = (process.env.NEXT_PUBLIC_ADS_ID || "").trim(); // "AW-..."
const TRANSPORT_URL = (process.env.NEXT_PUBLIC_GTM_TRANSPORT_URL || "").trim(); // optional

// ✅ gtag.js genau 1x laden – GA4 bevorzugt, sonst Ads
const PRIMARY_GTAG_ID = GA4_ID || ADS_ID;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const consent = await readConsentServer();

  // Default: alles denied, bis User aktiv zustimmt
  const defaultConsent = {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    functionality_storage: "granted",
    security_storage: "granted",
    personalization_storage: "granted",
    wait_for_update: 500,
  } as const;

  // Server kennt Cookie-Zustand (nach Reload/Next navigation)
  const updateConsent = {
    analytics_storage: consent?.analytics ? "granted" : "denied",
    ad_storage: consent?.marketing ? "granted" : "denied",
    ad_user_data: consent?.marketing ? "granted" : "denied",
    ad_personalization: consent?.marketing ? "granted" : "denied",
    functionality_storage: "granted",
    security_storage: "granted",
    personalization_storage: "granted",
  } as const;

  const extras = {
    ...(TRANSPORT_URL
      ? {
          transport_url: TRANSPORT_URL,
          first_party_collection: true,
        }
      : {}),
  };

  return (
    <html lang="de">
      <head>
        {/* 1) gtag stub + consent default (MUSS vor gtag.js passieren) */}
        <Script id="gtag-base" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){ window.dataLayer.push(arguments); }
            window.gtag = window.gtag || gtag;

            // Debug
            window.__BP_GA4_ID__ = ${JSON.stringify(GA4_ID)};
            window.__BP_ADS_ID__ = ${JSON.stringify(ADS_ID)};
            window.__BP_PRIMARY_GTAG_ID__ = ${JSON.stringify(PRIMARY_GTAG_ID)};

            gtag('consent','default', ${JSON.stringify(defaultConsent)});
            gtag('js', new Date());
          `}
        </Script>

        {/* 2) echtes Google Script (genau 1x) */}
        {PRIMARY_GTAG_ID ? (
          <Script
            id="gtag-src"
            strategy="beforeInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(PRIMARY_GTAG_ID)}`}
          />
        ) : null}

        {/* 3) consent update + config (GA4 + Ads sauber getrennt) */}
        <Script id="gtag-config" strategy="beforeInteractive">
          {`
            (function(){
              if (typeof window.gtag !== 'function') return;

              window.gtag('consent','update', ${JSON.stringify(updateConsent)});

              var extras = ${JSON.stringify(extras)};

              // ✅ GA4: Page View ok
              if (${JSON.stringify(!!GA4_ID)}) {
                window.gtag('config', ${JSON.stringify(GA4_ID)}, Object.assign({ send_page_view: true }, extras));
              }

              // ✅ Google Ads: KEIN send_page_view
              if (${JSON.stringify(!!ADS_ID)}) {
                window.gtag('config', ${JSON.stringify(ADS_ID)}, Object.assign({ send_page_view: false }, extras));
              }
            })();
          `}
        </Script>
      </head>

      <body className={`${arimo.variable} min-h-screen font-sans antialiased text-slate-900`}>
        <div className="min-h-screen bg-[radial-gradient(1200px_circle_at_20%_-10%,rgba(7,24,61,0.10),transparent_55%),radial-gradient(900px_circle_at_80%_10%,rgba(99,102,241,0.08),transparent_45%)]">
          {children}
        </div>

        <ConsentBanner />
      </body>
    </html>
  );
}
