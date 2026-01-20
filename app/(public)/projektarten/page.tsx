// app/(public)/projektarten/page.tsx
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

function Icon({ name }: { name: "layers" | "grid" | "shield" | "doc" }) {
  const common = "h-5 w-5 text-slate-900";
  if (name === "layers")
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path
          d="M12 3l9 5-9 5-9-5 9-5z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M3 12l9 5 9-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          opacity="0.55"
        />
        <path
          d="M3 16l9 5 9-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          opacity="0.35"
        />
      </svg>
    );

  if (name === "grid")
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path
          d="M4 4h7v7H4V4zM13 4h7v7h-7V4zM4 13h7v7H4v-7zM13 13h7v7h-7v-7z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    );

  if (name === "doc")
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path
          d="M7 3h7l3 3v15a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M14 3v4a2 2 0 002 2h4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M8 12h8M8 16h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );

  // shield
  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
      <path
        d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ProjektartenPage() {
  const items = [
    {
      icon: "layers" as const,
      title: "Kernsanierung",
      subtitle: "tiefgreifend erneuern",
      desc:
        "Wenn Substanz/Technik neu muss: entkernen, neu aufbauen, Gewerke sauber takten – bis zur Abnahme.",
      goodFor: [
        "Komplett neu aufsetzen",
        "Technik & Leitungen erneuern",
        "Grundriss verändern",
        "Schäden/Feuchte nachhaltig beheben",
        "Bestand langfristig sichern",
      ],
      bullets: ["Bauphasen statt Stillstand", "Schnittstellen koordiniert", "Doku & Übergabe"],
      howWeHelp: ["Sanierungsfahrplan", "Koordination Fachbetriebe", "Qualitätskontrolle & Protokolle"],
      href: "/projektarten/kernsanierung",
      cta: "Zur Kernsanierung",
    },
    {
      icon: "grid" as const,
      title: "Modernisierung",
      subtitle: "gezielt aufwerten",
      desc:
        "Wenn die Basis passt: Komfort, Optik, Energie und Wert verbessern – ohne alles auf null zu setzen.",
      goodFor: [
        "Wertsteigerung",
        "Energieeffizienz verbessern",
        "Optik & Komfort upgraden",
        "Vermietung/Verkauf vorbereiten",
        "Mieterwechsel / Leerstand nutzen",
      ],
      bullets: ["Maßnahmenpakete mit Wirkung", "Bauabschnitte (auch bei Nutzung)", "Saubere Übergabe"],
      howWeHelp: ["Bauabschnittsplanung", "Koordination & Schutzmaßnahmen", "Abnahmen & Restpunkte"],
      href: "/projektarten/modernisierung",
      cta: "Zur Modernisierung",
    },
  ];


  const faqs = [
    {
      q: "Kernsanierung vs. Modernisierung – was ist der Unterschied?",
      a: "Kernsanierung = tiefgreifend bis nahe Rohbau/Kernzustand. Modernisierung = gezielt verbessern, ohne alles zu erneuern.",
    },
    {
      q: "Übernehmen Sie nur Koordination?",
      a: "Fokus ist Planung/Koordination/Qualität. Ausgewählte Leistungen übernehmen wir projektabhängig auch selbst. Zulassungspflichtige Gewerke über Fachbetriebe.",
    },
    {
      q: "Wie läuft die Einschätzung ab?",
      a: "Ort + Fotos + Ziel + grober Zeitrahmen. Danach bekommen Sie schnell eine klare Einschätzung.",
    },
    {
      q: "Geht das auch bei genutzten Objekten?",
      a: "Projektabhängig ja – vor allem bei Modernisierung. Dann planen wir klare Etappen und Schutzmaßnahmen.",
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
              <div className="flex flex-wrap gap-2">
                <Chip>Kernsanierung</Chip>
                <Chip>Modernisierung</Chip>
                <Chip>Wohnung</Chip>
                <Chip>Haus</Chip>
                <Chip>Gewerbe</Chip>
              </div>

              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                Kernsanierung oder Modernisierung?
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Kurz erklärt – technisch sauber – und direkt zur passenden Projektseite.
              </p>

              <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center">
                <a href="/anfrage" className={BTN_PRIMARY}>
                  Projekt anfragen
                </a>
                <Link href="/leistungen" className={BTN_GHOST}>
                  Leistungen ansehen
                </Link>
              </div>

              <div className={cn(SOFT_DARK, "mt-6 p-5 sm:p-6")}>
                <div className="flex items-start gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200/70 bg-white/70 text-slate-900 shadow-sm">
                    <Icon name="shield" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Geeignete Objektarten</div>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Wohnung · Eigentumswohnung · Einfamilienhaus · Doppelhaus · Reihenhaus · Mehrfamilienhaus · Wohnanlage · Altbau · Bestandsobjekt · Anbau · Ausbau · Dachgeschossausbau · Büro · Großraumbüro · Praxis · Kanzlei · Ladenfläche · Einzelhandel · Showroom · Gastronomie · Restaurant · Café · Bar · Imbiss · Hotel · Pension · Ferienwohnung · Studio · Fitnessstudio · Kosmetikstudio · Friseursalon · Werkstatt · Lager · Kleine Halle
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right image */}
            <div className="lg:col-span-5">
              <div className={cn(IMG_WRAP, "h-56 sm:h-64 md:h-72 lg:h-[490px]")}>
                <Image
                  src="/startseite/schlafzimmer.png"
                  alt="Kernsanierung und Modernisierung"
                  fill
                  className={cn(IMG, "object-center")}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-900 shadow-sm">
                    Bestand · Bauphasen · Übergabe
                  </div>
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </section>

      {/* TWO CARDS */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16">
        <div className="grid gap-4 lg:grid-cols-2">
          {items.map((it) => (
            <div key={it.title} className={cn(CARD_DARK, "p-6 sm:p-7")}>
              <div className="flex items-start gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200/70 bg-white/70 text-slate-900 shadow-sm">
                  <Icon name={it.icon} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{it.title}</div>
                  <div className="mt-0.5 text-xs font-medium text-slate-500">{it.subtitle}</div>
                </div>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-600">{it.desc}</p>

              <div className="mt-4 rounded-2xl border border-slate-200/70 bg-white px-4 py-3 text-xs text-slate-600">
                <span className="font-medium text-slate-900">Geeignet für:</span>{" "}
                {it.goodFor.join(" · ")}
              </div>

              <div className="mt-4 space-y-2 text-sm text-slate-600">
                {it.bullets.map((p) => (
                  <div key={p} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200/70 bg-white px-4 py-3">
                <div className="text-xs font-semibold text-slate-900">So helfen wir</div>
                <div className="mt-2 space-y-1 text-xs text-slate-600">
                  {it.howWeHelp.map((x) => (
                    <div key={x} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                      <span>{x}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                <Link href={it.href} className={BTN_PRIMARY}>
                  {it.cta}
                </Link>
                <a href="/anfrage" className={BTN_GHOST}>
                  Anfrage
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ (kurz) */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16">
        <div className={cn(SOFT_DARK, "p-6 sm:p-8")}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Häufige Fragen
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                Kurz & klar – ohne Roman.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className={cn(CARD_DARK, "p-5 sm:p-6")}>
                <div className="text-sm font-semibold text-slate-900">{f.q}</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200/70 bg-white px-4 py-3 text-xs text-slate-600">
            <span className="font-medium text-slate-900">Hinweis:</span> Zulassungspflichtige Ausführungen erfolgen durch
            eingetragene Fachbetriebe. Umfang & Abgrenzung werden projektbezogen geklärt.
          </div>
        </div>
      </section>
    </main>
  );
}
