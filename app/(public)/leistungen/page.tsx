// app/(public)/leistungen/page.tsx
import Image from "next/image";
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
  name: "box" | "plan" | "people" | "check" | "one";
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
}

export default function LeistungenPage() {
  // ✅ Fokus: Montage Bauelemente (primär)
  const montage = [
    {
      icon: "box" as const,
      title: "Fenster & Fensterelemente",
      subtitle: "Aus-/Einbau im Bestand · sauber ausgerichtet",
      text: "Montage mit klarer Abgrenzung und sauberem Abschluss – damit Fenster wirklich dicht, gerade und dauerhaft laufen.",
      bullets: [
        "Aus- & Einbau (Bestand)",
        "Ausrichten · Befestigen",
        "Anschluss nach Abstimmung",
        "Elemente mit Rollläden (genormt)",
      ],
    },
    {
      icon: "box" as const,
      title: "Haus- & Wohnungstüren",
      subtitle: "Einbau · Justierung · saubere Übergänge",
      text: "Tür sitzt, schließt sauber, Beschläge passen – Übergabe nachvollziehbar, ohne Chaos an den Schnittstellen.",
      bullets: [
        "Einbau & Justierung",
        "Beschläge/Schließbleche nach Absprache",
        "Schnittstellen vorher klären",
        "Abnahme & Übergabe",
      ],
    },
    {
      icon: "box" as const,
      title: "Innentüren & Zargen",
      subtitle: "Zargen setzen · Türblatt einstellen",
      text: "Gerade Zargen, ruhiger Lauf, sauberer Abschluss – das ist die halbe Miete im Innenausbau.",
      bullets: [
        "Zargen setzen & ausrichten",
        "Türblatt montieren & einstellen",
        "Drücker/Beschläge nach Absprache",
        "Sauberer Abschluss (Bestand)",
      ],
    },
    {
      icon: "plan" as const,
      title: "Vorbereitung & Schutz im Bestand",
      subtitle: "Materialfenster · Schutz · Ablauf",
      text: "Damit Montage schnell und sauber durchläuft: Schutzmaßnahmen, Lieferfenster und Reihenfolge vorab klarziehen.",
      bullets: [
        "Schutzmaßnahmen im Bestand",
        "Material-/Lieferfenster abstimmen",
        "Leistungsabgrenzung vorab",
        "Dokumentation (optional)",
      ],
    },
  ];

  // ✅ Sekundär: Modernisierung/Kernsanierung als Projekt (auf Anfrage)
  const projekt = [
    {
      icon: "plan" as const,
      title: "Planung & Ablauf (Bestand)",
      points: ["Vor-Ort-Check", "Reihenfolge & Timing", "klare Abgrenzung je Gewerk"],
    },
    {
      icon: "people" as const,
      title: "Koordination (wenn mehrere Gewerke greifen)",
      points: ["Schnittstellen sauber definieren", "Termine takten", "Absprachen dokumentieren"],
    },
    {
      icon: "check" as const,
      title: "Qualität, Doku & Abnahme",
      points: ["laufende Kontrolle", "Fotos/Protokolle (wenn sinnvoll)", "Übergabe mit Restpunkten"],
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
              {/* Chips: Fokus Montage */}
              <div className="flex flex-wrap gap-2">
                <Chip>Fenster</Chip>
                <Chip>Türen</Chip>
                <Chip>Zargen</Chip>
                <Chip>Rollläden (Elemente)</Chip>
                <Chip>Bestand</Chip>
                <Chip>Hannover</Chip>
              </div>

              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                Montage Bauelemente
              </h1>

              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Wir montieren Fenster, Türen, Zargen und genormte Bauelemente{" "}
                <span className="font-medium text-slate-900">mit eigener Ausführung</span>{" "}
                – sauber, zuverlässig und mit klarer Abgrenzung.
                <br />
                <span className="text-slate-500">
                  Modernisierung/Kernsanierung begleiten wir auf Anfrage projektweise (Planung/Koordination).
                </span>
              </p>

              <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                <a href="/anfrage" className={BTN_PRIMARY}>
                  Anfrage starten
                </a>
                <a href="#montage" className={BTN_GHOST}>
                  Montage-Leistungen
                </a>
                <a href="#projekt" className={BTN_GHOST}>
                  Projektbegleitung
                </a>
              </div>

              <div className={cn(SOFT_DARK, "mt-5 p-5 sm:p-6")}>
                <div className="flex flex-wrap gap-2">
                  {["+30 Jahre Erfahrung", "sauberer Abschluss", "klare Schnittstellen", "Dokumentation (optional)"].map(
                    (t) => (
                      <Chip key={t}>{t}</Chip>
                    )
                  )}
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {[
                    { k: "Sauber", v: "ordentlich montiert" },
                    { k: "Klar", v: "Abgrenzung vorab" },
                    { k: "Verlässlich", v: "Übergabe & Abnahme" },
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
                  src="/startseite/wohnzimmer_1.png"
                  alt="Montage Bauelemente im Bestand"
                  fill
                  className={cn(IMG, "object-center")}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-900 shadow-sm">
                    Fenster · Türen · Zargen – sauber montiert
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MONTAGE */}
      <section id="montage" className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16">
        <div className={cn(SOFT_DARK, "p-6 sm:p-8")}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Montage-Leistungen
              </h2>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                Klar abgegrenzt. Sauber umgesetzt. Ordentlich übergeben.
              </p>

              <p className="mt-2 max-w-3xl text-xs leading-5 text-slate-500">
                Montage von Bauelementen im Raum Hannover – für Wohnung, EFH, DHH und Reihenhaus (Bestand).
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {montage.map((s) => (
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
            <span className="font-medium text-slate-900">Hinweis:</span> Umfang & Abgrenzung werden projektbezogen
            geklärt (z. B. Putz/Maler/Fliesen/Elektro – je nach Schnittstelle).
          </div>
        </div>
      </section>

      {/* PROJEKT (sekundär) */}
      <section id="projekt" className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Modernisierung / Kernsanierung (auf Anfrage)
            </h2>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Wenn aus Montage ein größeres Bestandsprojekt wird: Planung, Struktur und Koordination nach Bedarf.
            </p>
          </div>

          {/* bewusst dezenter als Montage */}
          <a href="/anfrage" className={BTN_GHOST}>
            Projekt kurz besprechen
          </a>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {["Wohnung", "Einfamilienhaus", "Doppelhaushälfte", "Reihenhaus", "Altbau/Bestand"].map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projekt.map((c) => (
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

      {/* Bottom banner */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6">
        <div className={cn(IMG_WRAP, "h-44 sm:h-56 lg:h-84")}>
          <Image
            src="/startseite/modernisiert.png"
            alt="Bauelemente-Montage im Bestand"
            fill
            className={cn(IMG, "object-center")}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/0 to-black/0" />
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-900 shadow-sm">
              Montage Bauelemente · Bestand · Hannover
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
