// app/(public)/danke/page.tsx
import Link from "next/link";

function cn(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

const CARD =
  "rounded-3xl border border-slate-200/60 bg-white/70 shadow-sm backdrop-blur-xl ring-1 ring-inset ring-white/40";

export const metadata = {
  title: "Danke | Bauelemente Pfad",
  description: "Vielen Dank – Ihre Anfrage wurde erfolgreich übermittelt.",
};

export default function DankePage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-3 py-10 sm:px-6 sm:py-14">
      <section className={cn(CARD, "p-6 sm:p-10")}>
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-[12px] font-medium text-slate-700 shadow-sm ring-1 ring-inset ring-white/40">
          Anfrage erfolgreich gesendet
        </div>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Vielen Dank!
        </h1>

        <p className="mt-3 max-w-2xl text-slate-600">
          Wir haben Ihre Anfrage erhalten und melden uns zeitnah bei Ihnen zurück – in der Regel per E-Mail oder
          telefonisch (falls angegeben).
        </p>

        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-3 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-inset ring-white/40 transition hover:bg-white/90 hover:border-slate-300 hover:shadow-md active:scale-[0.99]"
          >
            Zur Startseite
          </Link>

          <a
            href="tel:+49050353169997"
            className="inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-medium text-white bg-black shadow-sm ring-1 ring-inset ring-white/10 transition hover:bg-black/90 active:scale-[0.99]"
          >
            Direkt anrufen
          </a>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200/60 bg-white/60 p-4 text-sm text-slate-700 shadow-sm">
          <div className="font-semibold text-slate-900">Tipp</div>
          <div className="mt-1">
            Wenn Sie bereits Fotos haben, können Sie diese auch später per E-Mail nachreichen (als Link, z. B. Google
            Drive/Dropbox).
          </div>
        </div>
      </section>
    </main>
  );
}
