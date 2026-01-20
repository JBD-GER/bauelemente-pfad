// app/(public)/anfrage/page.tsx
import Image from "next/image";
import Link from "next/link";
import AnfrageForm from "./AnfrageForm";

function cn(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

const CARD =
  "rounded-3xl border border-slate-200/60 bg-white/70 shadow-sm backdrop-blur-xl ring-1 ring-inset ring-white/40";

export const metadata = {
  title: "Anfrage | Bauelemente Pfad",
  description:
    "Anfrage für Kernsanierung, Modernisierung und Bauelemente (Fenster, Türen, Rollläden). Schnell & sauber koordiniert.",
};

export default function AnfragePage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-3 py-6 sm:px-6 sm:py-10">
      {/* Intro */}
      <section className={cn(CARD, "p-5 sm:p-8")}>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-[12px] font-medium text-slate-700 shadow-sm ring-1 ring-inset ring-white/40">
              Hannover · Kernsanierung · Modernisierung · Bauelemente
            </div>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Anfrage stellen – schnell & sauber umgesetzt.
            </h1>

            <p className="mt-3 text-slate-600">
              Wir bündeln Einzelleistungen und koordinieren bei Bedarf weitere Gewerke – mit Fokus auf{" "}
              <strong>Kernsanierung</strong>, <strong>Modernisierung</strong> und{" "}
              <strong>Bauelemente</strong> (Fenster, Türen, Rollläden).
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className={cn("rounded-2xl border border-slate-200/60 bg-white/60 p-4 shadow-sm")}>
                <div className="text-sm font-semibold text-slate-900">Bauelemente</div>
                <div className="mt-1 text-xs text-slate-600">
                  Fenster · Türen · Rollläden – Montage & saubere Übergabe.
                </div>
              </div>
              <div className={cn("rounded-2xl border border-slate-200/60 bg-white/60 p-4 shadow-sm")}>
                <div className="text-sm font-semibold text-slate-900">Modernisierung</div>
                <div className="mt-1 text-xs text-slate-600">
                  Gezielt aufwerten: Komfort, Optik, Funktion – ohne Chaos.
                </div>
              </div>
              <div className={cn("rounded-2xl border border-slate-200/60 bg-white/60 p-4 shadow-sm")}>
                <div className="text-sm font-semibold text-slate-900">Kernsanierung</div>
                <div className="mt-1 text-xs text-slate-600">
                  Strukturierter Ablauf mit klaren Bauphasen & Dokumentation.
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative w-full overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-sm md:h-[260px] md:w-[380px]">
            <div className="relative h-[220px] w-full md:h-full">
              <Image
                src="/startseite/modernisierung2.png"
                alt="Modernisierung"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 380px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="text-sm font-semibold text-white">Ort · Fotos · Ziel</div>
                <div className="mt-1 text-xs text-white/90">Kurze Angaben reichen für einen Start.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="mt-6 grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className={cn(CARD, "p-5 sm:p-8")}>
            <h2 className="text-xl font-semibold text-slate-900">Ihre Anfrage</h2>
            <p className="mt-1 text-sm text-slate-600">
              Bitte geben Sie kurz die Eckdaten an. Wir melden uns zeitnah zurück.
            </p>
            <div className="mt-6">
              <AnfrageForm />
            </div>
          </div>
        </div>

        {/* Side info */}
        <aside className="lg:col-span-5">
          <div className={cn(CARD, "p-5 sm:p-8")}>
            <h3 className="text-lg font-semibold text-slate-900">Was wir benötigen</h3>

            <ul className="mt-3 space-y-3 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="mt-0.5 text-slate-400">•</span>
                <span>
                  <strong>Ort / Adresse</strong> (oder mindestens PLZ/Ort)
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 text-slate-400">•</span>
                <span>
                  <strong>Projektart</strong> (Bauelemente / Modernisierung / Kernsanierung)
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 text-slate-400">•</span>
                <span>
                  <strong>Ziel & Umfang</strong> (kurz in 2–3 Sätzen)
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-0.5 text-slate-400">•</span>
                <span>
                  Optional: <strong>Links zu Fotos</strong> (z. B. Google Drive/Dropbox)
                </span>
              </li>
            </ul>

            <div className="mt-6 grid gap-2">
              <a
                href="tel:+49050353169997"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-3 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-inset ring-white/40 transition hover:bg-white/90 hover:border-slate-300 hover:shadow-md active:scale-[0.99]"
              >
                Direkt anrufen
              </a>

              <Link
                href="/leistungen"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-3 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-inset ring-white/40 transition hover:bg-white/90 hover:border-slate-300 hover:shadow-md active:scale-[0.99]"
              >
                Leistungen ansehen
              </Link>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
