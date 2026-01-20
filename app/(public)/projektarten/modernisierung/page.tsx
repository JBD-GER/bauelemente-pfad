// app/(public)/modernisierung/page.tsx
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
    | "spark"
    | "grid"
    | "clock"
    | "shield"
    | "wrench"
    | "doc"
    | "bolt"
    | "home";
}) {
  const common = "h-5 w-5 text-slate-900";
  if (name === "spark")
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path
          d="M12 2l1.2 5.2L18 9l-4.8 1.8L12 16l-1.2-5.2L6 9l4.8-1.8L12 2z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M5 13l.7 3L9 17l-3.3 1-.7 3-.7-3L1.9 17l3.4-1L5 13z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          opacity="0.6"
        />
        <path
          d="M19 13l.7 3L23 17l-3.3 1-.7 3-.7-3L15.9 17l3.4-1L19 13z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
          opacity="0.6"
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

  if (name === "wrench")
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path
          d="M21 7.5a5 5 0 01-7.4 4.4L8.2 17.3a2 2 0 01-2.8 0l-.7-.7a2 2 0 010-2.8l5.4-5.4A5 5 0 0016.5 3l-2 2 3 3 2.5-2.5z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
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

  // home
  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
      <path
        d="M3 10.5l9-7 9 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 9.5V20a2 2 0 002 2h10a2 2 0 002-2V9.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 22v-7a2 2 0 012-2h2a2 2 0 012 2v7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ModernisierungPage() {
  const cards = [
    {
      icon: "spark" as const,
      title: "Wertsteigerung",
      subtitle: "Optik · Komfort · Marktwert",
      text: "Wir bündeln Maßnahmen so, dass Ihr Objekt sichtbar gewinnt – ohne unnötige Baustellenzeit.",
      points: ["Maßnahmenpakete statt Einzelbaustellen", "Saubere Reihenfolge", "Übergabe mit Protokoll"],
    },
    {
      icon: "clock" as const,
      title: "Bauabschnitte",
      subtitle: "bewohnt · vermietet · laufender Betrieb",
      text: "Wenn das Objekt genutzt wird, planen wir Etappen und Schutzmaßnahmen – damit es planbar bleibt.",
      points: ["Etappenplanung", "Staub-/Schutzkonzept (projektabhängig)", "Kurze Kommunikationswege"],
    },
    {
      icon: "grid" as const,
      title: "Gewerke koordinieren",
      subtitle: "Schnittstellen · Termine · Qualität",
      text: "Wir koordinieren die Abläufe zwischen den Gewerken und halten den Takt – damit nichts liegen bleibt.",
      points: ["Termin- & Ablaufplanung", "Schnittstellen sauber regeln", "Qualitätschecks & Abnahmen"],
    },
    {
      icon: "wrench" as const,
      title: "Innenausbau",
      subtitle: "Böden · Trockenbau · Oberflächen",
      text: "Modernisierung mit sichtbarem Effekt – sauber, strukturiert und ohne wilden Ablauf.",
      points: ["Bodenarbeiten (projektabhängig)", "Trockenbau/Spachtel/Anstrich (koordiniert)", "Saubere Übergabe"],
    },
    {
      icon: "home" as const,
      title: "Bad & Küche",
      subtitle: "Teilmodernisierung · kurze Standzeiten",
      text: "Kompakte Modernisierung mit hoher Wirkung – wir takten die Schritte so, dass es schnell wieder nutzbar ist.",
      points: ["Ablaufplanung für kurze Standzeit", "SHK/Elektro/Fliese koordiniert", "Restpunkte im Blick"],
    },
    {
      icon: "doc" as const,
      title: "Dokumentation",
      subtitle: "Fotos · Protokolle · Abnahmen",
      text: "Transparenz von Anfang bis Ende – damit Entscheidungen leicht fallen und Übergaben sauber sind.",
      points: ["Fotodoku", "Protokolle/Abnahmen", "Mängelmanagement (falls nötig)"],
    },
  ];

  const faqs = [
    {
      q: "Modernisierung oder Kernsanierung – was ist sinnvoll?",
      a: "Modernisierung ist gezielter und oft günstiger. Kernsanierung lohnt sich, wenn Substanz/Technik tiefgreifend erneuert werden muss. Wir sagen Ihnen ehrlich, was wirtschaftlich ist.",
    },
    {
      q: "Machen Sie Modernisierung auch in bewohnten Objekten?",
      a: "Ja, projektabhängig. Dann planen wir Bauabschnitte und Schutzmaßnahmen so, dass es möglichst wenig stört.",
    },
    {
      q: "Übernehmen Sie auch einzelne Arbeiten?",
      a: "Ausgewählte Leistungen ja – z. B. Bauelemente-Montage. Bei größeren Modernisierungen liegt der Fokus auf Koordination + sauberer Abnahme.",
    },
    {
      q: "Wie stellen Sie Transparenz sicher?",
      a: "Mit klarer Ablaufplanung, regelmäßigen Updates und sauberer Dokumentation (Fotos/Protokolle).",
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
                <Chip>Modernisierung</Chip>
                <Chip>Bestand</Chip>
                <Chip>Bauabschnitte</Chip>
                <Chip>Koordination</Chip>
                <Chip>Übergabe</Chip>
              </div>

              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                Modernisierung – sichtbar besser, planbar umgesetzt
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Wir modernisieren Bestandsobjekte strukturiert: klare Bauabschnitte, saubere Koordination der Gewerke
                und eine Übergabe, die stimmt – ohne unnötige Baustellenzeit.
              </p>

              <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center">
                <a href="/anfrage" className={BTN_PRIMARY}>
                  Modernisierung anfragen
                </a>
                <Link href="/fragen" className={BTN_GHOST}>
                  Häufige Fragen
                </Link>
              </div>

              <div className={cn(SOFT_DARK, "mt-6 p-5 sm:p-6")}>
                <div className="text-sm font-semibold text-slate-900">So arbeiten wir</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Wir bündeln Maßnahmen, takten Bauabschnitte und koordinieren Schnittstellen. Ziel: wenig Reibung,
                  klare Entscheidungen und eine saubere Übergabe.
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {[
                    { k: "Plan", v: "Etappen & Reihenfolge" },
                    { k: "Koordination", v: "Gewerke & Termine" },
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
                  src="/startseite/modernisierung3.png"
                  alt="Modernisierung"
                  fill
                  className={cn(IMG, "object-center")}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-900 shadow-sm">
                    Modernisierung · Bauabschnitte · Übergabe
                  </div>
                </div>
              </div>

       </div>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Bereiche, die wir typischerweise modernisieren
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Von gezielt bis umfassend – immer mit klarer Reihenfolge und sauberer Abnahme.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className={cn(CARD_DARK, "p-5 sm:p-6")}>
              <div className="flex items-start gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200/70 bg-white/70 text-slate-900 shadow-sm">
                  <Icon name={c.icon} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{c.title}</div>
                  <div className="mt-0.5 text-xs font-medium text-slate-500">{c.subtitle}</div>
                </div>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-600">{c.text}</p>

              <div className="mt-4 space-y-2 text-sm text-slate-600">
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

        {/* ✅ anderes Layout: „Paket“-Leiste quer statt 2/3 Spalte */}
        <div className={cn(SOFT_DARK, "mt-6 p-6 sm:p-7")}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="text-sm font-semibold text-slate-900">
                Projektpaket Modernisierung{" "}
                <span className="ml-2 inline-flex items-center rounded-full border border-slate-200/70 bg-white px-2.5 py-0.5 text-[11px] font-semibold text-slate-700 shadow-sm">
                  Paket
                </span>
              </div>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                Für alle, die es sauber und planbar wollen: Wir bündeln Maßnahmen, takten Bauabschnitte und koordinieren
                die Gewerke – inklusive Dokumentation und Abnahme.
              </p>
            </div>

            <div className="flex gap-2">
              <a href="/anfrage" className={BTN_PRIMARY}>
                Anfrage
              </a>
              <Link href="/leistungen" className={BTN_GHOST}>
                Leistungen
              </Link>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-4">
            {[
              { k: "Reihenfolge", v: "Ablauf & Takt" },
              { k: "Koordination", v: "Gewerke & Termine" },
              { k: "Qualität", v: "Checks & Abnahmen" },
              { k: "Doku", v: "Fotos & Protokolle" },
            ].map((x) => (
              <div key={x.k} className={cn(CARD_DARK, "px-4 py-3")}>
                <div className="text-xs font-medium text-slate-500">{x.k}</div>
                <div className="mt-1 text-sm font-semibold text-slate-900">{x.v}</div>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-slate-200/70 bg-white px-4 py-3 text-xs text-slate-600">
            <span className="font-medium text-slate-900">Kurz gesagt:</span> Modernisierung ohne Chaos – planbar,
            abgestimmt und sauber übergeben.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16">
        <div className={cn(SOFT_DARK, "p-6 sm:p-8")}>
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
