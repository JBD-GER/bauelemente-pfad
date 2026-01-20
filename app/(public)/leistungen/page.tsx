// app/(public)/leistungen/page.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

function cn(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

const CARD_DARK =
  "rounded-3xl border border-slate-200/60 bg-slate-900/[0.03] shadow-sm";
const SOFT_DARK =
  "rounded-3xl border border-slate-200/60 bg-slate-900/[0.02] shadow-sm";

const BTN_PRIMARY =
  "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium text-white bg-black hover:bg-black/90 transition shadow-sm";
const BTN_GHOST =
  "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium border border-slate-200/80 bg-white hover:bg-slate-50 transition shadow-sm";

const IMG_WRAP =
  "relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-sm";
const IMG = "object-cover";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[12px] font-medium",
        "border border-slate-200/70 bg-white text-slate-700 shadow-sm"
      )}
    >
      {children}
    </span>
  );
}

function Icon({
  name,
}: {
  name:
    | "one"
    | "plan"
    | "people"
    | "check"
    | "box"
    | "wind"
    | "floor"
    | "seal"
    | "drill"
    | "cable";
}) {
  const common = "h-5 w-5 text-slate-900";
  if (name === "one")
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path
          d="M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M4 20c1.8-3.7 5-5.5 8-5.5s6.2 1.8 8 5.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 2v3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.35"
        />
      </svg>
    );

  if (name === "plan")
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path
          d="M7 3v3M17 3v3M4 9h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M6 6h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M8 13h4M8 16h7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );

  if (name === "people")
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path
          d="M16 11a3 3 0 100-6 3 3 0 000 6zM8 11a3 3 0 100-6 3 3 0 000 6z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M3.5 20c.8-3 3-4.5 5.5-4.5S13.7 17 14.5 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M13.5 20c.6-2.4 2.3-3.9 4.6-4.4 2.1-.4 3.8.7 4.4 4.4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>
    );

  if (name === "check")
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path
          d="M4 12l5 5L20 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 22a10 10 0 110-20 10 10 0 010 20z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          opacity="0.35"
        />
      </svg>
    );

  if (name === "box")
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path
          d="M12 3l9 5-9 5-9-5 9-5z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M3 8v8l9 5 9-5V8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          opacity="0.55"
        />
        <path
          d="M12 13v8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.35"
        />
      </svg>
    );

  if (name === "wind")
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path
          d="M4 8h10a3 3 0 100-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 12h14a3 3 0 110 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M4 16h7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>
    );

  if (name === "floor")
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path
          d="M4 20h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M6 20V6a2 2 0 012-2h8a2 2 0 012 2v14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M9 8h6M9 11h6M9 14h6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>
    );

  if (name === "seal")
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path
          d="M12 22a4 4 0 004-4V8a4 4 0 10-8 0v10a4 4 0 004 4z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M8 12h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>
    );

  if (name === "drill")
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path
          d="M7 7h10l2 3-2 3H7l-2-3 2-3z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M7 10h10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M5 13v4a2 2 0 002 2h4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );

  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
      <path
        d="M6 7h8a3 3 0 013 3v7a2 2 0 01-2 2H8a2 2 0 01-2-2V7z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M10 7V5a2 2 0 012-2h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M8 12h8M8 15h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export default function LeistungenPage() {
  const single = [
    {
      icon: "box" as const,
      title: "Fenster / Türen / Bauelemente (B2 Nr. 24)",
      subtitle: "Montage genormter, vorgefertigter Bauteile",
      text: "Saubere Montage mit klarer Abgrenzung. Übergabe dokumentiert.",
      bullets: ["Fenster", "Türen", "Zargen", "Rollladen-Elemente (genormt)"],
    },
    {
      icon: "wind" as const,
      title: "Bautentrocknung (B2 Nr. 2)",
      subtitle: "Trocknung & Monitoring",
      text: "Kontrollierte Trocknung inkl. Zwischenmessungen. Mit Protokoll, wenn gewünscht.",
      bullets: ["Wasserschaden", "Estrich/Rohbau", "Messungen/Protokoll"],
    },
    {
      icon: "floor" as const,
      title: "Bodenarbeiten (B2 Nr. 3)",
      subtitle: "Verlegen definierter Bodenbeläge",
      text: "Untergrund prüfen, sauber verlegen, Kanten ordentlich. Schnell & nachvollziehbar.",
      bullets: ["Laminat", "Fertigparkett (schwimmend)", "Vinyl/Kunststoff", "Teppich/Kork"],
    },
    {
      icon: "seal" as const,
      title: "Fugenarbeiten (B2 Nr. 5)",
      subtitle: "Anschluss-/Bewegungs- und Dehnungsfugen",
      text: "Gezielt dort, wo Fugen hingehören. Kein „alles abdichten“, sondern sauber abgegrenzt.",
      bullets: ["Anschlussfugen", "Dehnungsfugen innen", "Bewegungsfugen (nicht Fliesenlegen)"],
    },
    {
      icon: "drill" as const,
      title: "Kernbohrungen & Schnitte (B2 Nr. 8)",
      subtitle: "nach Vorgabe/Plan",
      text: "Ausführung nach Plan/Vorgabe. Tragwerk nur mit Freigabe – ohne Diskussion.",
      bullets: ["Durchführungen", "Öffnungen/Trassen", "Tragwerk nur mit Freigabe"],
    },
    {
      icon: "cable" as const,
      title: "Kabelverlegung – ohne Anschluss (B2 Nr. 16)",
      subtitle: "Trassen/Leerrohre nach Vorgabe",
      text: "Trassen sauber führen und befestigen. Ohne Anklemmen/ohne Inbetriebnahme.",
      bullets: ["Kabel/Leerrohre", "Kanäle/Trassen", "ohne Anklemmen/Inbetriebnahme"],
    },
  ];

  const paket = [
    {
      icon: "plan" as const,
      title: "Projektplanung (Kernsanierung/Modernisierung)",
      points: ["Vor-Ort-Check", "Reihenfolge & Timing", "klare Abgrenzung je Gewerk"],
    },
    {
      icon: "people" as const,
      title: "Schnittstellen & Termine (wenn mehrere Gewerke greifen)",
      points: ["Abhängigkeiten lösen", "Termine takten", "Absprachen dokumentieren"],
    },
    {
      icon: "check" as const,
      title: "Qualität, Doku & Abnahme",
      points: ["laufende Kontrolle", "Fotos/Protokolle", "Übergabe mit Restpunkten"],
    },
  ];

  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-slate-900/[0.05] blur-3xl md:h-[760px] md:w-[760px]" />
          <div className="absolute -top-16 right-[-160px] h-[420px] w-[420px] rounded-full bg-slate-900/[0.04] blur-3xl md:h-[560px] md:w-[560px]" />
          <div className="absolute bottom-[-260px] left-[-160px] h-[480px] w-[480px] rounded-full bg-slate-900/[0.035] blur-3xl md:h-[640px] md:w-[640px]" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-4 pt-10 pb-10 sm:px-6 sm:pt-14 sm:pb-14">
          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              {/* ✅ geändert: Chips reduziert, nur kurze Leistungs-Überschrift */}
              <div className="flex flex-wrap gap-2">
                <Chip>Fenster & Türen</Chip>
                <Chip>Bautrocknung</Chip>
                <Chip>Bodenarbeiten</Chip>
                <Chip>Fugen</Chip>
                <Chip>Kernbohrung</Chip>
                <Chip>Kabelverlegung</Chip>
              </div>

              {/* ✅ geändert: SEO/Keyword im Hero */}
              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                Leistungen
              </h1>

              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Primär <span className="font-medium text-slate-900">Einzelleistungen</span> im Bestand – und bei Bedarf{" "}
                <span className="font-medium text-slate-900">Projektplanung</span> für Modernisierung / Kernsanierung.
              </p>

              <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                <a href="/anfrage" className={BTN_PRIMARY}>
                  Projekt anfragen
                </a>
                <a href="#einzelleistungen" className={BTN_GHOST}>
                  Einzelleistungen
                </a>
                <a href="#projektpaket" className={BTN_GHOST}>
                  Projektpaket
                </a>
              </div>

              <div className={cn(SOFT_DARK, "mt-5 p-5 sm:p-6")}>
                <div className="flex flex-wrap gap-2">
                  {["Wohnung", "Generalunternehmen", "Hannover", "+30 Jahre Erfahrung", "Schnelle Umsetzung"].map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {[
                    { k: "Sauber", v: "ordentlich umgesetzt" },
                    { k: "Klar", v: "Abgrenzung je Gewerk" },
                    { k: "Nachvollziehbar", v: "Doku & Übergabe" },
                  ].map((x) => (
                    <div key={x.k} className={cn(CARD_DARK, "px-4 py-3")}>
                      <div className="text-xs font-medium text-slate-500">{x.k}</div>
                      <div className="mt-1 text-sm font-semibold text-slate-900">{x.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right image */}
            <div className="lg:col-span-5">
              <div className={cn(IMG_WRAP, "h-56 sm:h-64 md:h-72 lg:h-[415px]")}>
                <Image
                  src="/startseite/modernisierung2.png"
                  alt="Modernisierung & Kernsanierung im Bestand"
                  fill
                  className={cn(IMG, "object-center")}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-900 shadow-sm">
                    Einzelleistung · Modernisierung · Kernsanierung
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EINZELLEISTUNGEN */}
      <section id="einzelleistungen" className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16">
        <div className={cn(SOFT_DARK, "p-6 sm:p-8")}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Einzelleistungen
              </h2>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                Klar abgegrenzt. Schnell umgesetzt. Sauber übergeben.
              </p>

              {/* ✅ SEO Mini-Text (1 Satz) */}
              <p className="mt-2 max-w-3xl text-xs leading-5 text-slate-500">
                Einzelleistungen für Modernisierung und Kernsanierung im Raum Hannover – für Wohnungen, EFH, DHH und
                Reihenhäuser.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {single.map((s) => (
              <div key={s.title} className={cn(CARD_DARK, "p-5 sm:p-6")}>
                <div className="flex items-start gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200/70 bg-white/70 text-slate-900 shadow-sm">
                    <Icon name={s.icon} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-slate-900">{s.title}</div>
                    <div className="mt-0.5 text-xs font-medium text-slate-500">{s.subtitle}</div>
                  </div>
                </div>

                {/* ✅ NEU: 1–2 kurze Sätze je Leistung */}
                <p className="mt-3 text-sm leading-6 text-slate-600">{s.text}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {s.bullets.map((b) => (
                    <Chip key={b}>{b}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200/70 bg-white px-4 py-3 text-xs text-slate-600">
            <span className="font-medium text-slate-900">Wichtig:</span> Statik/Tragwerk nur nach Freigabe/Plan.
            Elektro-Anschlüsse/Inbetriebnahme erfolgen durch eingetragene Fachbetriebe.
          </div>
        </div>
      </section>

      {/* PROJEKTPAKET */}
      <section id="projektpaket" className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Projektpaket: Modernisierung / Kernsanierung
            </h2>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Für größere Vorhaben: Planung + Struktur + (bei Bedarf) Koordination.
            </p>
          </div>
          <a href="/anfrage" className={BTN_PRIMARY}>
            Projekt anfragen
          </a>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {["Wohnung", "Einfamilienhaus", "Doppelhaushälfte", "Reihenhaus", "Altbau/Bestand"].map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {paket.map((c) => (
            <div key={c.title} className={cn(CARD_DARK, "p-5 sm:p-6")}>
              <div className="flex items-start gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200/70 bg-white/70 text-slate-900 shadow-sm">
                  <Icon name={c.icon} />
                </div>
                <div className="text-sm font-semibold text-slate-900">{c.title}</div>
              </div>

              <div className="mt-3 space-y-2 text-sm text-slate-600">
                {c.points.map((p) => (
                  <div key={p} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200/70 bg-white px-4 py-3 text-xs text-slate-600">
          <span className="font-medium text-slate-900">Hinweis:</span> Zulassungspflichtige Ausführungen erfolgen durch
          eingetragene Fachbetriebe. Umfang & Abgrenzung werden projektbezogen geklärt.
        </div>
      </section>
    </main>
  );
}
