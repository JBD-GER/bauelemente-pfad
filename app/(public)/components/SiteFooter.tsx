// app/(public)/components/SiteFooter.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

function cn(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

const PRIMARY = "#07183d";

// ✅ anpassen, wenn du willst:
const EMAIL = "info@bauelemente-pfad.de";
const PHONE_DISPLAY = "+49 5035 3169997";
const PHONE_TEL = "+4950353169997";
const AREA = "Hannover & Umgebung";

export default function SiteFooter() {
  function openConsent() {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new Event("bp:open-consent"));
  }

  return (
    <footer className="border-t border-slate-200/60 bg-white">
      <div className="mx-auto w-full max-w-7xl px-3 py-10 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-start gap-4">
              <div className="relative h-10 w-44">
                <Image
                  src="/Bauelemente_Pfad_Logo.png"
                  alt="Bauelemente Pfad"
                  fill
                  className="object-contain"
                  sizes="176px"
                  priority={false}
                />
              </div>
            </div>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">
              Fokus auf <span className="font-medium text-slate-900">Bauelemente</span> (Fenster, Türen, Rollläden) sowie{" "}
              <span className="font-medium text-slate-900">Modernisierung</span> &{" "}
              <span className="font-medium text-slate-900">Kernsanierung</span> – sauber geplant, zügig umgesetzt,
              verlässlich koordiniert.
            </p>

            <div className="mt-5 grid gap-2 text-sm text-slate-700">
              <div>
                <span className="font-medium text-slate-900">E-Mail:</span>{" "}
                <a className="hover:underline" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </div>
              <div>
                <span className="font-medium text-slate-900">Telefon:</span>{" "}
                <a className="hover:underline" href={`tel:${PHONE_TEL}`}>
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div className="text-slate-500">Einsatzgebiet: {AREA}</div>
            </div>

            {/* kleine Badges */}
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm ring-1 ring-inset ring-white/40">
                Saubere Ausführung
              </span>
              <span className="rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm ring-1 ring-inset ring-white/40">
                Klare Abläufe
              </span>
              <span className="rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm ring-1 ring-inset ring-white/40">
                Schnelle Rückmeldung
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <div className="text-sm font-semibold text-slate-900">Seiten</div>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link className="text-slate-600 hover:text-slate-900" href="/leistungen">
                Leistungen
              </Link>
              <Link className="text-slate-600 hover:text-slate-900" href="/projektarten">
                Projektarten
              </Link>
              <Link className="text-slate-600 hover:text-slate-900" href="/anfrage">
                Anfrage stellen
              </Link>
            </div>

            <div className="mt-6 text-sm font-semibold text-slate-900">Rechtliches</div>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link className="text-slate-600 hover:text-slate-900" href="/impressum">
                Impressum
              </Link>
              <Link className="text-slate-600 hover:text-slate-900" href="/datenschutz">
                Datenschutz
              </Link>
              <button
                type="button"
                onClick={openConsent}
                className="text-left text-slate-600 hover:text-slate-900"
              >
                Cookie-Einstellungen
              </button>
            </div>
          </div>

          {/* CTA */}
          <div className="lg:col-span-4">
            <div className="text-sm font-semibold text-slate-900">Projekt anfragen</div>
            <p className="mt-3 text-sm text-slate-600">
              Kurz Eckdaten senden – wir melden uns zeitnah mit den nächsten Schritten.
            </p>

            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <Link
                href="/anfrage"
                className={cn(
                  "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium text-white",
                  "bg-black hover:bg-black/90 transition shadow-sm"
                )}
              >
                Anfrage starten
              </Link>
              <a
                href={`tel:${PHONE_TEL}`}
                className={cn(
                  "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium",
                  "border border-slate-200/80 bg-white hover:bg-slate-50 text-slate-900 transition shadow-sm"
                )}
              >
                Direkt anrufen
              </a>
            </div>

            <div className="mt-4 rounded-2xl border border-slate-200/70 bg-slate-900/[0.02] px-4 py-3 text-xs text-slate-600 shadow-sm">
              <span className="font-medium text-slate-900">Hinweis:</span> Zulassungspflichtige Ausführungen erfolgen –
              sofern erforderlich – durch eingetragene Fachbetriebe.
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200/60 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Bauelemente Pfad UG (haftungsbeschränkt).</div>

          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link className="hover:text-slate-700" href="/impressum">
              Impressum
            </Link>
            <Link className="hover:text-slate-700" href="/datenschutz">
              Datenschutz
            </Link>
            <button type="button" onClick={openConsent} className="hover:text-slate-700">
              Cookies
            </button>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: PRIMARY }} className="h-1 w-full" />
    </footer>
  );
}
