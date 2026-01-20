// app/(public)/kernsanierung/page.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

function cn(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

const CARD =
  "rounded-3xl border border-slate-200/60 bg-white shadow-sm";
const CARD_DARK =
  "rounded-3xl border border-slate-200/60 bg-slate-900/[0.03] shadow-sm";
const SOFT =
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
    | "layers"
    | "shield"
    | "grid"
    | "bolt"
    | "check"
    | "clock"
    | "doc";
}) {
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

  if (name === "shield")
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

  if (name === "bolt")
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path
          d="M13 2L3 14h7l-1 8 12-14h-7l-1-6z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );

  if (name === "check")
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path
          d="M20 6L9 17l-5-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );

  if (name === "clock")
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path
          d="M12 22a10 10 0 110-20 10 10 0 010 20z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 6v6l4 2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );

  // doc
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
}

function Step({
  n,
  title,
  text,
}: {
  n: string;
  title: string;
  text: string;
}) {
  return (
    <div className={cn(CARD_DARK, "p-5 sm:p-6")}>
      <div className="flex items-start gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200/70 bg-white/70 text-slate-900 shadow-sm">
          <span className="text-sm font-semibold">{n}</span>
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">{title}</div>
          <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default function KernsanierungPage() {
  const benefits = [
    {
      icon: "clock" as const,
      title: "Planbare Bauphasen",
      text: "Klare Taktung statt Stillstand. Sie wissen, was wann passiert.",
    },
    {
      icon: "grid" as const,
      title: "Schnittstellen im Griff",
      text: "Gewerke sauber koordiniert – damit nichts „zwischen den Stühlen“ landet.",
    },
    {
      icon: "doc" as const,
      title: "Saubere Dokumentation",
      text: "Fotos, Protokolle, Abnahmen – transparent und nachvollziehbar.",
    },
    {
      icon: "shield" as const,
      title: "Qualität & Abnahme",
      text: "Checks, Restpunkte, Mängelmanagement – bis zur sauberen Übergabe.",
    },
  ];

  const steps = [
    {
      n: "1",
      title: "Bestandsaufnahme",
      text: "Kurz vor Ort / per Unterlagen: Zustand, Ziele, Rahmen. Dann wissen wir, ob es passt.",
    },
    {
      n: "2",
      title: "Sanierungsfahrplan",
      text: "Wir strukturieren Maßnahmen in Bauphasen – mit Prioritäten, Abhängigkeiten und Reihenfolge.",
    },
    {
      n: "3",
      title: "Koordination & Umsetzung",
      text: "Wir steuern Termine, Schnittstellen und Qualität. Zulassungspflichtige Gewerke laufen über Fachbetriebe.",
    },
    {
      n: "4",
      title: "Abnahme & Übergabe",
      text: "Restpunkte sauber verfolgen, Abnahmen dokumentieren, Übergabe klar und ordentlich.",
    },
  ];

  const scope = [
    "Entkernung & Vorbereitung (projektabhängig)",
    "Koordination von Elektro / SHK / Trockenbau / Fliese / Maler etc.",
    "Bauphasen- & Terminsteuerung",
    "Qualitätskontrollen, Zwischenabnahmen, Mängelmanagement",
    "Dokumentation (Fotos/Protokolle) & saubere Übergabe",
  ];

  const excluded = [
    "Zulassungspflichtige Ausführung ohne eingetragenen Fachbetrieb (z. B. Elektro-Anschlussarbeiten)",
    "Statische Eingriffe ohne erforderliche Nachweise / Planung",
    "„Alles sofort“ ohne klare Rahmenbedingungen (Termin, Budget, Zugriff auf Objekt)",
  ];

  const faqs = [
    {
      q: "Was ist der Unterschied zwischen Kernsanierung und Modernisierung?",
      a: "Bei der Kernsanierung wird der Bestand tiefgreifend erneuert (oft bis auf Rohbau-/Kernzustand). Modernisierung ist gezielter und kann auch in Teilbereichen erfolgen. Wir beraten, was sinnvoll ist.",
    },
    {
      q: "Übernehmen Sie die komplette Kernsanierung als Generalunternehmen?",
      a: "Wir übernehmen Koordination, Ablaufplanung, Qualitätskontrolle und Dokumentation. Zulassungspflichtige Gewerke werden durch eingetragene Fachbetriebe ausgeführt – Zuständigkeiten grenzen wir sauber ab.",
    },
    {
      q: "Wie schnell können Sie starten?",
      a: "Das hängt von Umfang, Objektzugang und Kapazität ab. Senden Sie uns kurz Ort, Fotos und Wunschzeitraum – wir geben Ihnen schnell Rückmeldung.",
    },
    {
      q: "Wie läuft die Kommunikation während der Bauphase?",
      a: "Kurz & klar: feste Ansprechpartner, regelmäßige Updates und saubere Dokumentation. Bei Bedarf nutzen wir Tools für Aufgaben/Phasen-Tracking.",
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
                <Chip>Bestand</Chip>
                <Chip>Bauphasen</Chip>
                <Chip>Koordination</Chip>
                <Chip>Übergabe</Chip>
              </div>

              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                Kernsanierung – strukturiert statt Baustellen-Chaos
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Wenn alles einmal „richtig“ werden soll: Wir führen Sie durch die Kernsanierung mit klaren Bauphasen,
                sauberer Koordination der Gewerke und transparenter Dokumentation – bis zur ordentlichen Übergabe.
              </p>

              <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center">
                <a href="/anfrage" className={BTN_PRIMARY}>
                  Kernsanierung anfragen
                </a>
                <Link href="/leistungen" className={BTN_GHOST}>
                  Leistungen ansehen
                </Link>
              </div>

              <div className={cn(SOFT, "mt-6 p-5 sm:p-6")}>
                <div className="text-sm font-semibold text-slate-900">Kurz zusammengefasst</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Wir planen den Ablauf, koordinieren Fachbetriebe und kontrollieren Qualität. Zulassungspflichtige
                  Arbeiten werden durch eingetragene Fachbetriebe ausgeführt – Zuständigkeiten grenzen wir sauber ab.
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {[
                    { k: "Ablauf", v: "Bauphasen & Takt" },
                    { k: "Gewerke", v: "Schnittstellen klar" },
                    { k: "Doku", v: "Fotos & Protokolle" },
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
              <div className={cn(IMG_WRAP, "h-56 sm:h-64 md:h-72 lg:h-[562px]")}>
                <Image
                  src="/startseite/kernsaniert.png"
                  alt="Kernsanierung"
                  fill
                  className={cn(IMG, "object-center")}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-900 shadow-sm">
                    Kernsanierung · Koordination · Übergabe
                  </div>
                </div>
              </div>

    
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 sm:pb-14">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Warum Kernsanierung mit Struktur?
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Kernsanierung ist komplex – mit klaren Bauphasen wird sie beherrschbar.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className={cn(CARD_DARK, "p-5 sm:p-6")}>
              <div className="flex items-start gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200/70 bg-white/70 text-slate-900 shadow-sm">
                  <Icon name={b.icon} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{b.title}</div>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{b.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16">
        <div className={cn(SOFT, "p-6 sm:p-8")}>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Ablauf in 4 Schritten
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                Kurz, klar und planbar – damit die Kernsanierung läuft.
              </p>
            </div>
            <a href="/anfrage" className={BTN_GHOST}>
              Projekt anfragen
            </a>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {steps.map((s) => (
              <Step key={s.n} n={s.n} title={s.title} text={s.text} />
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200/70 bg-white px-4 py-3 text-xs text-slate-600">
            <span className="font-medium text-slate-900">Hinweis:</span> Zeitplan und Reihenfolge hängen vom Objekt,
            Umfang und Zugriff ab. Das klären wir vor Start.
          </div>
        </div>
      </section>

      {/* SCOPE */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className={cn(CARD_DARK, "p-6 sm:p-7")}>
            <div className="flex items-start gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200/70 bg-white/70 text-slate-900 shadow-sm">
                <Icon name="check" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">Typischer Leistungsumfang</div>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Das übernehmen wir in Kernsanierungen häufig – abhängig vom Projekt.
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-2 text-sm text-slate-600">
              {scope.map((p) => (
                <div key={p} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                  <span>{p}</span>
                </div>
              ))}
            </div>


          </div>

          <div className={cn(CARD_DARK, "p-6 sm:p-7")}>
            <div className="flex items-start gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200/70 bg-white/70 text-slate-900 shadow-sm">
                <Icon name="shield" />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">Wichtige Abgrenzungen</div>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Damit es sauber bleibt: Diese Punkte klären wir projektbezogen.
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-2 text-sm text-slate-600">
              {excluded.map((p) => (
                <div key={p} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                  <span>{p}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200/70 bg-white px-4 py-3 text-xs text-slate-600">
              <span className="font-medium text-slate-900">Kurz gesagt:</span> Zuständigkeiten, Nachweise und Umfang
              werden vor Start sauber definiert.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16">
        <div className={cn(SOFT, "p-6 sm:p-8")}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Kernsanierung geplant?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                Schicken Sie uns kurz Ort, Fotos und Ziel. Sie bekommen schnell eine klare Einschätzung.
              </p>
            </div>
            <div className="flex gap-2">
              <a href="/anfrage" className={BTN_PRIMARY}>
                Projekt anfragen
              </a>
              <a href="tel:+49050353169997" className={BTN_GHOST}>
                Anrufen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16">
        <div className={cn(SOFT, "p-6 sm:p-8")}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Häufige Fragen
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                Kurz & klar – damit Sie direkt wissen, ob wir passen.
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
            <span className="font-medium text-slate-900">Hinweis:</span> Zulassungspflichtige Ausführungen erfolgen
            durch eingetragene Fachbetriebe. Umfang & Abgrenzung werden projektbezogen geklärt.
          </div>
        </div>
      </section>
    </main>
  );
}
