// app/login/page.tsx
import Link from "next/link";

function cn(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

const CARD =
  "rounded-3xl border border-slate-200/60 bg-white shadow-sm overflow-hidden";
const SOFT =
  "rounded-3xl border border-slate-200/60 bg-slate-900/[0.02] shadow-sm";
const INPUT =
  "h-11 rounded-xl border border-slate-200/80 bg-white px-3 text-slate-900 outline-none focus:ring-2 focus:ring-slate-200";
const BTN_PRIMARY =
  "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium text-white bg-black hover:bg-black/90 transition shadow-sm";
const BTN_GHOST =
  "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium border border-slate-200/80 bg-white hover:bg-slate-50 transition shadow-sm";

export default function LoginPage() {
  return (
    <main className="min-h-[calc(100vh-1px)] bg-white text-slate-900">
      {/* Subtle background lights (wie auf Startseite) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-slate-900/[0.05] blur-3xl md:h-[760px] md:w-[760px]" />
        <div className="absolute -top-16 right-[-160px] h-[420px] w-[420px] rounded-full bg-slate-900/[0.04] blur-3xl md:h-[560px] md:w-[560px]" />
        <div className="absolute bottom-[-260px] left-[-160px] h-[480px] w-[480px] rounded-full bg-slate-900/[0.035] blur-3xl md:h-[640px] md:w-[640px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto grid w-full max-w-xl gap-4">
          {/* Top */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className={cn(
                "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-slate-700",
                "hover:bg-slate-900/5 hover:text-slate-900 transition"
              )}
            >
              <span aria-hidden="true">←</span> Zur Startseite
            </Link>
            <div className="text-xs text-slate-500">Bauelemente Pfad UG</div>
          </div>

          {/* Notice */}
          <div className={cn(SOFT, "p-5 sm:p-6")}>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-slate-200/70 bg-white/70 text-slate-900 shadow-sm">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                  <path
                    d="M12 9v4m0 4h.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10.3 4.5h3.4L21 18a2 2 0 01-1.7 3H4.7A2 2 0 013 18L10.3 4.5z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="min-w-0">
                <div className="text-sm font-semibold text-slate-900">
                  Login aktuell nicht verfügbar
                </div>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Unsere Bausoftware befindet sich gerade in der Bearbeitung und ist in den
                  nächsten <span className="font-medium text-slate-900">1–2 Monaten</span>{" "}
                  aktiv.
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Bis dahin klären wir Ihr Anliegen temporär{" "}
                  <span className="font-medium text-slate-900">per Telefon und E-Mail</span>.
                </p>

                <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                  <a href="tel:+49050353169997" className={BTN_PRIMARY}>
                    Jetzt anrufen
                  </a>
                  <a href="mailto:info@bauelemente-pfad.de" className={BTN_GHOST}>
                    E-Mail schreiben
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Optional: Disabled login card (für später) */}
          <div className={cn(CARD, "p-5 sm:p-6")}>
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-sm font-semibold text-slate-900">Zugang</div>
                <p className="mt-1 text-sm text-slate-600">
                  Dieser Bereich ist vorübergehend deaktiviert.
                </p>
              </div>
              <span className="rounded-full border border-slate-200/70 bg-white px-3 py-1 text-xs font-medium text-slate-700">
                Wartung
              </span>
            </div>

            <form className="mt-5 grid gap-3 opacity-60">
              <label className="grid gap-1 text-sm">
                <span className="font-medium text-slate-700">E-Mail</span>
                <input className={INPUT} placeholder="name@firma.de" type="email" disabled />
              </label>

              <label className="grid gap-1 text-sm">
                <span className="font-medium text-slate-700">Passwort</span>
                <input className={INPUT} placeholder="••••••••" type="password" disabled />
              </label>

              <button type="button" className={cn(BTN_PRIMARY, "w-full")} disabled>
                Einloggen
              </button>

              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Passwort vergessen? (bald)</span>
                <span>Status: in Entwicklung</span>
              </div>
            </form>
          </div>

          <div className="text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Bauelemente Pfad UG ·{" "}
            <Link className="hover:text-slate-700" href="/impressum">
              Impressum
            </Link>{" "}
            ·{" "}
            <Link className="hover:text-slate-700" href="/datenschutz">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
