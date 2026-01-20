// app/lib/consent/server.ts
import "server-only";
import type { Consent } from "./types";
import { CONSENT_COOKIE, normalizeConsent, safeJsonParse } from "./types";
import { cookies } from "next/headers";

/** Server: Consent aus Cookie lesen (SSR/Route Handlers/Server Actions) */
export async function readConsentServer(): Promise<Consent | null> {
  const store = await cookies(); // ✅ in deiner Next-Version async
  const c = store.get(CONSENT_COOKIE)?.value ?? null;
  return normalizeConsent(safeJsonParse<Consent>(c));
}
