// app/lib/consent/types.ts
export type Consent = {
  v: 1;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string; // ISO
};

export const CONSENT_COOKIE = "bp_consent_v1";
export const CONSENT_MAX_AGE_DAYS = 180;

/** robustes JSON-Parsing */
export function safeJsonParse<T>(s: string | null): T | null {
  if (!s) return null;
  try {
    return JSON.parse(s) as T;
  } catch {
    return null;
  }
}

/** validiert + normalisiert */
export function normalizeConsent(v: any): Consent | null {
  if (!v || v.v !== 1) return null;
  if (typeof v.analytics !== "boolean") return null;
  if (typeof v.marketing !== "boolean") return null;
  if (typeof v.updatedAt !== "string") return null;
  return v as Consent;
}
