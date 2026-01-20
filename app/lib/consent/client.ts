// app/lib/consent/client.ts
import type { Consent } from "./types";
import { CONSENT_COOKIE, CONSENT_MAX_AGE_DAYS, normalizeConsent, safeJsonParse } from "./types";

/** Client: Consent aus Cookie lesen */
export function readConsent(): Consent | null {
  if (typeof document === "undefined") return null;

  const m = document.cookie.match(new RegExp(`(?:^|;\\s*)${CONSENT_COOKIE}=([^;]+)`));
  const raw = m ? decodeURIComponent(m[1]) : null;

  return normalizeConsent(safeJsonParse<Consent>(raw));
}

/** Client: Consent Cookie schreiben (server-seitig lesbar) */
export function writeConsent(next: { analytics: boolean; marketing: boolean }) {
  if (typeof document === "undefined") return;

  const value: Consent = {
    v: 1,
    analytics: !!next.analytics,
    marketing: !!next.marketing,
    updatedAt: new Date().toISOString(),
  };

  const maxAge = CONSENT_MAX_AGE_DAYS * 24 * 60 * 60;
  const isHttps = typeof window !== "undefined" && window.location.protocol === "https:";

  document.cookie = [
    `${CONSENT_COOKIE}=${encodeURIComponent(JSON.stringify(value))}`,
    "Path=/",
    `Max-Age=${maxAge}`,
    "SameSite=Lax",
    isHttps ? "Secure" : "",
  ]
    .filter(Boolean)
    .join("; ");
}

/** intern: wartet kurz bis gtag verfügbar ist (wichtig für Consent Mode!) */
async function waitForGtag(maxMs = 2000): Promise<((...args: any[]) => void) | null> {
  if (typeof window === "undefined") return null;

  const start = Date.now();
  while (Date.now() - start < maxMs) {
    const gtag = (window as any).gtag as undefined | ((...args: any[]) => void);
    if (typeof gtag === "function") return gtag;
    await new Promise((r) => setTimeout(r, 50));
  }
  return null;
}

/**
 * ✅ Consent Mode v2 Update
 * - updatet sofort nach Klick (ohne Reload)
 * - wartet, bis gtag wirklich bereit ist
 */
export async function updateGcmV2(consent: { analytics: boolean; marketing: boolean }) {
  if (typeof window === "undefined") return;

  const gtag = await waitForGtag(2000);
  if (!gtag) return;

  const payload = {
    analytics_storage: consent.analytics ? "granted" : "denied",
    ad_storage: consent.marketing ? "granted" : "denied",
    ad_user_data: consent.marketing ? "granted" : "denied",
    ad_personalization: consent.marketing ? "granted" : "denied",
    functionality_storage: "granted",
    security_storage: "granted",
    personalization_storage: "granted",
  } as const;

  gtag("consent", "update", payload);

  // Debug
  (window as any).__BP_CONSENT__ = payload;
}
