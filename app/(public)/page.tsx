// app/(public)/page.tsx
import Image from "next/image";

function cn(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

const CARD = "rounded-3xl border border-slate-200/60 bg-white shadow-sm";
const SOFT = "rounded-3xl border border-slate-200/60 bg-slate-50 shadow-sm";

/** ✅ “leicht schwarz” in Cards/Soft (weiß bleibt weiß) */
const CARD_DARK =
  "rounded-3xl border border-slate-200/60 bg-slate-900/[0.03] shadow-sm";
const SOFT_DARK =
  "rounded-3xl border border-slate-200/60 bg-slate-900/[0.02] shadow-sm";

const INPUT =
  "h-11 rounded-xl border border-slate-200/80 bg-white px-3 text-slate-900 outline-none focus:ring-2 focus:ring-slate-200";

/** ✅ Buttons schwarz */
const BTN_PRIMARY =
  "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium text-white bg-black hover:bg-black/90 transition shadow-sm";
const BTN_GHOST =
  "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium border border-slate-200/80 bg-white hover:bg-slate-50 transition shadow-sm";

const IMG_WRAP =
  "relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-sm";
const IMG = "object-cover";

export default function PublicHome() {
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
            {/* Left */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-black" />
                Hannover · Kernsanierung & Modernisierung
              </div>

              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                Modernisieren & sanieren – sauber durchgeführt.
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Wir bündeln Einzelleistungen und koordinieren bei Bedarf die Gewerke –
                <span className="text-slate-900 font-medium">
                  {" "}
                  mit Fokus auf Kernsanierung, Modernisierung und Ausbau.
                </span>{" "}
                Klarer Ablauf, feste Ansprechpartner, nachvollziehbare Dokumentation.
              </p>

              <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center">
                <a href="/anfrage" className={BTN_PRIMARY}>
                  Projekt anfragen
                </a>
                <a href="#einzelleistungen" className={BTN_GHOST}>
                  Einzelleistungen ansehen
                </a>
              </div>

              {/* ✅ LINKES BILD: mit Padding */}
              <div
                className={cn(
                  IMG_WRAP,
                  "mt-6 h-44 sm:h-48 md:h-52 lg:h-52 p-2 sm:p-3"
                )}
              >
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/startseite/wohnzimmer_1.png"
                    alt="Modernisierung & Sanierung"
                    fill
                    className={cn(IMG, "object-center")}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-sm font-semibold text-white">
                      Kernsanierung & Modernisierung
                    </div>
                    <div className="mt-1 text-xs text-white/85">
                      Struktur · Timing · saubere Übergabe
                    </div>
                  </div>
                </div>
              </div>

              {/* ✅ BOXEN: leicht schwarz, auf den Punkt */}
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { k: "Modernisierung", v: "Bestand aufwerten" },
                  { k: "Kernsanierung", v: "sauber neu aufsetzen" },
                  { k: "Ausbau", v: "Räume optimieren" },
                ].map((x) => (
                  <div key={x.k} className={cn(CARD_DARK, "px-4 py-3")}>
                    <div className="text-xs font-medium text-slate-500">
                      {x.k}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-slate-900">
                      {x.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="lg:col-span-5">
              <div className={cn(IMG_WRAP, "h-64 sm:h-72 md:h-163")}>
                <Image
                  src="/startseite/bauleiter.png"
                  alt="Ihr Ansprechpartner vor Ort"
                  fill
                  className="object-cover object-[50%_15%] sm:object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-900 shadow-sm">
                    Ein Ansprechpartner · schnelle Rückmeldung
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* WAS UNS AUSZEICHNET (Trust / Proof) */}
<section
  id="leistungen"
  className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16"
>
  <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        Was uns auszeichnet
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
        Saubere Ausführung im Bestand – mit Struktur, klaren Zuständigkeiten und nachvollziehbarer Dokumentation.
      </p>
    </div>

  </div>

  <div className="mt-6 grid gap-4 lg:grid-cols-12 lg:items-stretch">
    {/* Left: Proof tiles */}
    <div className="lg:col-span-7">
      <div className={cn(CARD_DARK, "p-6 sm:p-7")}>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              k: "Erfahrung",
              v: "30+ Jahre Berufserfahrung",
              d: "Praxis im Bestand, Sanierung & Montage – keine Theorie.",
            },
            {
              k: "Struktur",
              v: "klare Abläufe & Zuständigkeiten",
              d: "damit es nicht knallt, wenn mehrere Gewerke greifen.",
            },
            {
              k: "Qualität",
              v: "sauber, ordentlich, kontrolliert",
              d: "Details sind kein Extra – sie sind Standard.",
            },
            {
              k: "Dokumentation",
              v: "Fotos · Notizen · Übergaben",
              d: "transparent für Sie – hilfreich bei Abnahmen.",
            },
            {
              k: "Verlässlichkeit",
              v: "Termine & Kommunikation",
              d: "kurze Wege, klare Aussagen, keine Überraschungen.",
            },
            {
              k: "Bestand-Fokus",
              v: "Modernisierung & Kernsanierung",
              d: "Wohnungen, EFH, DHH, Reihenhaus – sauber umgesetzt.",
            },
          ].map((x) => (
            <div key={x.v} className="rounded-2xl border border-slate-200/70 bg-white p-4">
              <div className="text-xs text-slate-500">{x.k}</div>
              <div className="mt-1 text-sm font-medium text-slate-900">{x.v}</div>
              <div className="mt-1 text-xs leading-5 text-slate-600">{x.d}</div>
            </div>
          ))}
        </div>

        {/* Small emphasis line */}
        <div className="mt-5 rounded-2xl border border-slate-200/70 bg-white px-4 py-3 text-xs text-slate-600">
          <span className="font-medium text-slate-900">Unser Ansatz:</span> lieber sauber & planbar als laut & hektisch.
        </div>
      </div>
    </div>

    {/* Right: compact “why us” box */}
    <div className="lg:col-span-5">
      <div className={cn(CARD_DARK, "p-6 sm:p-7")}>
        <div className="text-sm font-semibold text-slate-900">Wofür Sie uns buchen</div>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Für Bestandsprojekte, die sauber laufen sollen: modernisieren, teil-sanieren oder kernsanieren –
          mit einem Ansprechpartner und klarer Koordination (wenn nötig).
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Wohnung",
            "Einfamilienhaus",
            "Doppelhaushälfte",
            "Reihenhaus",
            "Altbau/Bestand",
            "Teilbereiche im MFH",
          ].map((t) => (
            <span key={t} className="rounded-full border border-slate-200/70 bg-white px-3 py-1 text-xs text-slate-700">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 grid gap-3">
          {[
            { t: "Einzelleistung", d: "wenn klar abgegrenzt (z. B. Montage, Innenausbau)." },
            { t: "Projektpaket", d: "wenn mehrere Gewerke zusammenkommen (Plan + Koordination)." },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border border-slate-200/70 bg-white p-4">
              <div className="text-sm font-medium text-slate-900">{x.t}</div>
              <div className="mt-1 text-xs leading-5 text-slate-600">{x.d}</div>
            </div>
          ))}
        </div>

        <a href="/anfrage" className={cn(BTN_PRIMARY, "mt-5 w-full")}>
          Unverbindlich sprechen
        </a>
      </div>
    </div>
  </div>
</section>
      {/* FOKUS / PROJEKTARTEN (privat-first) */}
{/* FOKUS / CTA (Modernisierung & Kernsanierung – koordiniert) */}
<section id="projektarten" className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
  <div className={cn(SOFT_DARK, "p-6 sm:p-8")}>
    <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
      {/* LEFT: CTA + bullets */}
      <div className="lg:col-span-7">
        <div className={cn(CARD_DARK, "p-6 sm:p-7")}>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-slate-200/70 bg-white px-2.5 py-1 text-xs text-slate-700">
              Generalunternehmer-Koordination (Bestand)
            </span>
            <span className="rounded-full border border-slate-200/70 bg-white px-2.5 py-1 text-xs text-slate-700">
              Modernisierung · Kernsanierung
            </span>
          </div>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Modernisieren ohne Chaos – wir koordinieren sauber & dokumentiert
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Wenn mehrere Gewerke zusammenkommen, wird es schnell unübersichtlich. Wir übernehmen Planung,
            Abstimmung und Ablauf – damit Ihr Projekt im Bestand kontrolliert läuft.
          </p>

          {/* Small bullets (no big headings) */}
          <ul className="mt-5 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
            {[
              "klare Abgrenzung der Gewerke",
              "strukturierter Ablaufplan",
              "laufende Dokumentation",
              "Qualitätskontrolle & saubere Abnahmen",
              "Material-/Lieferlogistik im Blick",
              "ein Ansprechpartner",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-slate-200/70 bg-white">
                  <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 text-slate-900" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M16.704 5.29a1 1 0 01.006 1.414l-7.2 7.25a1 1 0 01-1.42-.003L3.29 9.15a1 1 0 011.42-1.41l3.09 3.11 6.49-6.54a1 1 0 011.414-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="leading-6">{t}</span>
              </li>
            ))}
          </ul>

          {/* Chips: project types (small, unobtrusive) */}
          <div className="mt-5 flex flex-wrap gap-2">
            {[
  "Wohnung",
  "Einfamilienhaus",
  "Doppelhaushälfte",
  "Reihenhaus",
  "Altbau / Bestand",
  "Mehrfamilienhaus (Teile)",
  "Gewerbe (klein, nach Absprache)",
  "Keller / Feuchtebereiche",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-slate-200/70 bg-white px-3 py-1 text-xs text-slate-700"
              >
                {t}
              </span>
            ))}
          </div>


          {/* CTA */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="/anfrage" className={cn(BTN_PRIMARY, "w-full sm:w-auto")}>
              Projekt anfragen
            </a>

          </div>
        </div>
      </div>

      {/* RIGHT: Image + overlay (clean) */}
      <div className="lg:col-span-5">
        <div className={cn(IMG_WRAP, "h-64 sm:h-72 md:h-127")}>
          <Image
            src="/startseite/pfad.png"
            alt="Modernisierung im Bestand"
            fill
            className={cn(IMG, "object-top")}
            sizes="(max-width: 1024px) 100vw, 40vw"
          />

          {/* (optional) very subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0" />

          <div className="absolute bottom-3 left-3 right-3">
            <div className="text-sm font-semibold text-white">Bestand modernisieren – strukturiert</div>
            <div className="mt-1 text-xs text-white/85">Planung · Koordination · Dokumentation</div>

            <div className="mt-3 rounded-2xl border border-white/20 bg-black/20 px-3 py-2 text-xs text-white/90 backdrop-blur">
              Ein Ansprechpartner – klare Schnittstellen zu den Gewerken.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* EINZELLEISTUNGEN */}
      <section
        id="einzelleistungen"
        className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16"
      >
        <div className={cn(SOFT_DARK, "p-6 sm:p-8")}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Einzelleistungen
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                Ausgewählte Arbeiten führen wir projektabhängig selbst aus – klar
                abgegrenzt und sauber dokumentiert.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {[
              {
                title: "Einbau genormter Baufertigteile",
                items: [
                  "Fenster / Türen / Zargen (vorgefertigt)",
                  "Zäune (vorgefertigt)",
                  "Fensterelemente mit Rollläden",
                  "Bausätze (z. B. Carport) projektabhängig",
                ],
              },
              {
                title: "Bautentrocknung",
                items: [
                  "Neubau-/Estrich-Trocknung",
                  "Wasserschaden-Trocknung",
                  "Zwischenmessungen",
                  "Feuchte-Protokollierung (projektabhängig)",
                ],
              },
              {
                title: "Bodenleger",
                items: [
                  "Laminat",
                  "Fertigparkett (schwimmend)",
                  "Teppich/Kork",
                  "PVC/Linoleum/Gummi",
                ],
              },
              {
                title: "Fuger im Hochbau",
                items: [
                  "Anschluss-/Bewegungsfugen",
                  "Dehnungsfugen innen",
                  "Bewegungsfugen im Fliesenbereich",
                ],
              },
              {
                title: "Betonbohrer & -schneider",
                items: [
                  "Kernbohrungen",
                  "Betonschnitte nach Vorgabe",
                  "statikrelevant nur nach Freigabe",
                ],
              },
              {
                title: "Kabelverleger im Hochbau – ohne Anschluss",
                items: [
                  "Kabel/Leerrohre/Trassen nach Vorgabe",
                  "Befestigen & Verlegen",
                  "keine Anschlüsse / Inbetriebnahme",
                ],
              },
            ].map((b) => (
              <div key={b.title} className={cn(CARD_DARK, "p-5 sm:p-6")}>
                <div className="text-sm font-semibold text-slate-900">{b.title}</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {b.items.map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200/70 bg-white px-4 py-3 text-xs text-slate-600">
            <span className="font-medium text-slate-900">Hinweis:</span> Umfang &
            Abgrenzung werden projektbezogen geklärt (Gewerk, Ausführung, ggf.
            Statik/Planung).
          </div>
        </div>
      </section>

      {/* ABLAUF */}
      <section
        id="ablauf"
        className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Ablauf
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Klar strukturiert. Transparent. Verlässlich.
            </p>
          </div>

          <a
            href="/anfrage"
            className={cn(
              "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium",
              "border border-slate-200/80 bg-white hover:bg-slate-50 text-slate-900 transition shadow-sm"
            )}
          >
            Projekt starten
          </a>
        </div>

        <div className="relative mt-6">
          <div className="grid gap-4 lg:grid-cols-4">
            {[
              {
                n: "01",
                title: "Erstgespräch",
                text:
                  "Kurz Ziele, Umfang und Zeitfenster klären – damit wir realistisch planen können.",
                bullets: ["Projektziel & Umfang", "Zeitrahmen grob", "Schnittstellen klären"],
                icon: (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                    <path d="M7 7h10M7 11h10M7 15h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path
                      d="M5 4h14a2 2 0 012 2v12a2 2 0 01-2 2H8l-4 3V6a2 2 0 012-2z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
              },
              {
                n: "02",
                title: "Planung",
                text:
                  "Ablauf, Termine, Reihenfolge der Arbeiten – plus Material-/Lieferfenster.",
                bullets: ["Ablauf & Reihenfolge", "Gewerke/Leistungen", "Material & Timing"],
                icon: (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                    <path d="M7 3v3M17 3v3M4 9h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path
                      d="M6 6h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path d="M8 13h4M8 16h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                n: "03",
                title: "Umsetzung",
                text:
                  "Saubere Ausführung, laufende Kontrolle, schnelle Entscheidungen – ohne Stillstand.",
                bullets: ["Ausführung & Kontrolle", "Abstimmung vor Ort", "Mängel direkt lösen"],
                icon: (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
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
                ),
              },
              {
                n: "04",
                title: "Übergabe",
                text:
                  "Abnahme, Protokolle und Doku – damit Sie ein sauberes Ergebnis in der Hand haben.",
                bullets: ["Abnahme & Restpunkte", "Fotos/Protokolle", "Übergabe-Doku"],
                icon: (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                    <path
                      d="M7 21h10a2 2 0 002-2V8l-5-5H9a2 2 0 00-2 2v14a2 2 0 002 2z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path d="M14 3v5h5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M9 13h6M9 16h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
              },
            ].map((s) => (
              <div key={s.n} className={cn(CARD_DARK, "relative p-5 sm:p-6")}>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-slate-200/70 bg-white/70 text-slate-900 shadow-sm">
                      {s.icon}
                    </div>
                    <div className="text-xs font-semibold text-slate-500">{s.n}</div>
                  </div>
                </div>

                <div className="mt-3 text-sm font-semibold text-slate-900">{s.title}</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{s.text}</p>

                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM IMAGE (Banner) */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6">
        <div className={cn(IMG_WRAP, "h-44 sm:h-56 lg:h-84")}>
          <Image
            src="/startseite/modernisiert.png"
            alt="Baustelle"
            fill
            className={cn(IMG, "object-center")}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/0 to-black/0" />
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-900 shadow-sm">
              Modernisierung · Kernsanierung · Einzelleistungen
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}
