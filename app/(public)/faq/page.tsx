// app/(public)/faq/page.tsx
import Image from "next/image";
import Link from "next/link";

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
  name: "shield" | "pin" | "file" | "clock" | "check" | "bolt" | "wrench";
}) {
  const common = "h-5 w-5 text-slate-900";

  if (name === "pin")
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path
          d="M12 22s7-6.2 7-13a7 7 0 10-14 0c0 6.8 7 13 7 13z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M12 11a2 2 0 100-4 2 2 0 000 4z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    );

  if (name === "file")
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <path
          d="M7 21h10a2 2 0 002-2V8l-5-5H9a2 2 0 00-2 2v14a2 2 0 002 2z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M14 3v5h5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M9 13h6M9 16h6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.55"
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
          strokeLinejoin="round"
        />
        <path
          d="M12 7v6l4 2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
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

export default function FaqPage() {
  const montageFaq = [
    {
      q: "Welche Montage-Leistungen übernehmen Sie?",
      a: "Vor allem Montage an genormten/vorgefertigten Bauteilen: Fenster, Türen, Zargen sowie weitere Systeme/Bausätze je nach Projekt. Wichtig ist die saubere Abgrenzung und dokumentierte Übergabe.",
    },
    {
      q: "Übernehmen Sie Montage auch ohne Generalunternehmer-Rolle?",
      a: "Ja, projektabhängig. Wenn Sie „nur“ eine Montage benötigen, ist das möglich – abhängig von Umfang, System und Terminlage.",
    },
    {
      q: "Wie läuft die Übergabe bei Montage ab?",
      a: "Wir dokumentieren die Ausführung (z. B. Fotos/Protokoll) und stimmen Abnahme/Restpunkte klar ab. So ist der Status für alle Seiten nachvollziehbar.",
    },
  ];

  const bauFaq = [
    {
      q: "Welche Regionen bedienen Sie?",
      a: "Projektabhängig. Senden Sie uns Ort und Projektart – wir geben Ihnen schnell eine klare Rückmeldung, ob es passt.",
    },
    {
      q: "Wie läuft Angebot & Abrechnung ab?",
      a: "Nach Erstgespräch und Klärung des Leistungsumfangs erstellen wir ein Angebot. Abrechnung erfolgt transparent nach vereinbartem Modell (z. B. pauschal oder nach Positionen). Details werden vor Start fixiert.",
    },
    {
      q: "Wie stellen Sie den Zeitplan sicher?",
      a: "Durch Termin-/Ablaufplanung, Meilensteine und klare Abhängigkeiten. Wir takten Gewerke, planen Lieferfenster und steuern Restpunkte konsequent nach.",
    },
    {
      q: "Wie läuft Gewährleistung / Abnahmen / Mängelmanagement?",
      a: "Wir organisieren Abnahmen, führen Restpunktelisten und dokumentieren sauber. Gewährleistungsfragen werden über den jeweiligen Leistungserbringer bzw. vertragliche Regelungen abgebildet.",
    },
    {
      q: "Was gilt bei statikrelevanten Bereichen?",
      a: "Statik-/tragwerksrelevante Arbeiten nur nach Freigabe/Planung (z. B. Statiker/Planer/Bauleitung). Wir führen nichts „auf Zuruf“ aus, wenn Tragwerk betroffen ist.",
    },
    {
      q: "Arbeiten Sie mit eigenen Teams oder Subunternehmern?",
      a: "Je nach Projekt. Zulassungspflichtige Ausführungen erfolgen durch eingetragene Fachbetriebe (z. B. Elektro/SHK). Wir koordinieren und grenzen Zuständigkeiten sauber ab.",
    },
    {
      q: "Wie stellen Sie Transparenz & Kommunikation sicher?",
      a: "Durch kurze Kommunikationswege, regelmäßige Updates und Dokumentation. Zusätzlich setzen wir bei komplexeren Vorhaben unsere eigene Bausoftware ein (Kommunikation, Aufgaben/Restpunkte, Phasen-Tracking).",
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
                <Chip>FAQ</Chip>
                <Chip>Montage</Chip>
                <Chip>Bauleistungen</Chip>
                <Chip>Abnahmen</Chip>
                <Chip>Sicherheit</Chip>
              </div>

              <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                FAQ & Sicherheit
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Kurz & klar: Regionen, Angebot/Abrechnung, Zeitplan, Abnahmen/Gewährleistung – und was bei
                statikrelevanten Themen gilt.{" "}
                <span className="font-medium text-slate-900">
                  Schwerpunkt zuerst: Montage. Danach: Bauleistungen & Koordination.
                </span>
              </p>

              <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center">
                <a href="/#kontakt" className={BTN_PRIMARY}>
                  Projekt anfragen
                </a>
                <Link href="/leistungen" className={BTN_GHOST}>
                  Leistungen ansehen
                </Link>
              </div>

              <div className={cn(SOFT_DARK, "mt-6 p-5 sm:p-6")}>
                <div className="text-sm font-semibold text-slate-900">
                  Transparenz durch Struktur
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Bei komplexen Vorhaben setzen wir zusätzlich unsere{" "}
                  <span className="font-medium text-slate-900">eigene Bausoftware</span> ein – für Kommunikation,
                  Aufgaben/Restpunkte und Phasen-Tracking.
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {[
                    { k: "Kommunikation", v: "kurz & klar" },
                    { k: "Tracking", v: "Phasen & Status" },
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
              <div className={cn(IMG_WRAP, "h-56 sm:h-64 md:h-72 lg:h-[500px]")}>
                <Image
                  src="/startseite/gewerbeobjekt.jpg"
                  alt="FAQ & Sicherheit"
                  fill
                  className={cn(IMG, "object-center")}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-900 shadow-sm">
                    Klarheit · Abgrenzung · Sicherheit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MONTAGE (first) */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-slate-200/70 bg-white/70 text-slate-900 shadow-sm">
                <Icon name="wrench" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Montage – häufige Fragen
              </h2>
            </div>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Fokus auf genormte/vorgefertigte Bauteile – sauber, dokumentiert, klar abgegrenzt.
            </p>
          </div>

          <a href="/#kontakt" className={BTN_GHOST}>
            Montage anfragen
          </a>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {montageFaq.map((f) => (
            <div key={f.q} className={cn(CARD_DARK, "p-5 sm:p-6")}>
              <div className="flex items-start gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-slate-200/70 bg-white/70 text-slate-900 shadow-sm">
                  <Icon name="check" />
                </div>
                <div className="text-sm font-semibold text-slate-900">{f.q}</div>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{f.a}</p>
            </div>
          ))}
        </div>

        <div className={cn(SOFT_DARK, "mt-6 p-5 sm:p-6")}>
          <div className="flex items-start gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200/70 bg-white/70 text-slate-900 shadow-sm">
              <Icon name="file" />
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">
                Warum das wichtig ist
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Bei Montage zählt am Ende die Abnahme. Darum arbeiten wir mit klarer Abgrenzung, dokumentieren Übergaben
                und halten Restpunkte nachvollziehbar fest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BAULEISTUNGEN (after montage) */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16">
        <div className={cn(SOFT_DARK, "p-6 sm:p-8")}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-slate-200/70 bg-white/70 text-slate-900 shadow-sm">
                  <Icon name="shield" />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  Bauleistungen & Sicherheit
                </h2>
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                Für große Vorhaben: Regionen, Angebot/Abrechnung, Zeitplan, Abnahmen/Gewährleistung – plus klare Regeln
                bei Tragwerk/Statik.
              </p>
            </div>

            <a href="/#kontakt" className={BTN_GHOST}>
              Anfrage
            </a>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {bauFaq.map((f) => (
              <div key={f.q} className={cn(CARD_DARK, "p-5 sm:p-6")}>
                <div className="flex items-start gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200/70 bg-white/70 text-slate-900 shadow-sm">
                    <Icon
                      name={
                        f.q.includes("Region") ? "pin" : f.q.includes("Zeit") ? "clock" : f.q.includes("Statik") ? "bolt" : "file"
                      }
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{f.q}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200/70 bg-white px-4 py-3 text-xs text-slate-600">
            <span className="font-medium text-slate-900">Grundsatz:</span> Statik-/tragwerksrelevante Arbeiten nur nach
            Freigabe/Planung. Zulassungspflichtige Ausführungen erfolgen durch eingetragene Fachbetriebe.
          </div>
        </div>
      </section>


      <div className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6">
        <p className="text-xs text-slate-500">
          * Angaben & Abgrenzungen werden projektbezogen geklärt. Zulassungspflichtige Ausführungen erfolgen durch
          eingetragene Fachbetriebe.
        </p>
      </div>
    </main>
  );
}
