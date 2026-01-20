"use client";

// app/(public)/anfrage/AnfrageForm.tsx
import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function cn(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

const INPUT =
  "w-full rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 text-sm text-slate-900 shadow-sm ring-1 ring-inset ring-white/40 backdrop-blur-xl " +
  "placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-200/70";
const LABEL = "text-sm font-medium text-slate-900";
const HELP = "mt-1 text-[12px] text-slate-600";
const ERR = "mt-1 text-[12px] text-rose-600";

const BTN_PRIMARY =
  "inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-medium text-white " +
  "bg-black shadow-sm ring-1 ring-inset ring-white/10 transition hover:bg-black/90 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed";
const BTN_GHOST =
  "inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-medium text-slate-900 " +
  "border border-slate-200/80 bg-white/70 shadow-sm ring-1 ring-inset ring-white/40 transition hover:bg-white/90 hover:border-slate-300 hover:shadow-md active:scale-[0.99]";

type FormState = {
  name: string;
  email: string;
  phone: string;
  ort: string;
  adresse: string;
  projektart: "bauelemente" | "modernisierung" | "kernsaneirung" | "kombiniert" | "";
  zeitrahmen: "sofort" | "2-4-wochen" | "1-3-monate" | "flexibel" | "";
  details: string;
  fotosLinks: string;
  privacyAccepted: boolean; // ✅ Datenschutz-Checkbox
  hp: string; // honeypot
};

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

function normalize(s: string) {
  return (s || "").trim();
}

function toGermanApiError(code?: string) {
  switch (code) {
    case "invalid_json":
      return "Die Anfrage konnte nicht verarbeitet werden. Bitte versuchen Sie es erneut.";
    case "missing_required":
      return "Bitte füllen Sie alle Pflichtfelder aus.";
    case "invalid_email":
      return "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    case "message_too_short":
      return "Bitte beschreiben Sie das Vorhaben etwas genauer (mindestens 10 Zeichen).";
    case "rate_limited":
      return "Zu viele Anfragen in kurzer Zeit. Bitte warten Sie kurz und versuchen Sie es erneut.";
    case "spam_detected":
      return "Die Anfrage konnte nicht gesendet werden.";
    case "email_send_failed":
      return "E-Mail konnte gerade nicht gesendet werden. Bitte versuchen Sie es später erneut.";
    case "privacy_required":
      return "Bitte stimmen Sie der Datenschutzerklärung zu.";
    default:
      return "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.";
  }
}

export default function AnfrageForm() {
  const router = useRouter();

  const initial: FormState = useMemo(
    () => ({
      name: "",
      email: "",
      phone: "",
      ort: "",
      adresse: "",
      projektart: "",
      zeitrahmen: "",
      details: "",
      fotosLinks: "",
      privacyAccepted: false,
      hp: "",
    }),
    []
  );

  const [v, setV] = useState<FormState>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setV((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): boolean {
    const fe: Record<string, string> = {};

    if (!normalize(v.name)) fe.name = "Bitte geben Sie Ihren Namen an.";
    if (!normalize(v.email)) fe.email = "Bitte geben Sie Ihre E-Mail-Adresse an.";
    else if (!isValidEmail(v.email)) fe.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";

    if (!normalize(v.ort)) fe.ort = "Bitte geben Sie mindestens Ort/PLZ an.";
    if (!v.projektart) fe.projektart = "Bitte wählen Sie eine Projektart aus.";

    const details = normalize(v.details);
    if (!details) fe.details = "Bitte beschreiben Sie Ihr Vorhaben kurz.";
    else if (details.length < 10) fe.details = "Bitte etwas ausführlicher (mind. 10 Zeichen).";

    if (!v.privacyAccepted) fe.privacyAccepted = "Bitte stimmen Sie der Datenschutzerklärung zu.";

    setFieldErrors(fe);
    return Object.keys(fe).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormError(null);

    if (!validate()) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/anfrage", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...v,
          name: normalize(v.name),
          email: normalize(v.email),
          phone: normalize(v.phone),
          ort: normalize(v.ort),
          adresse: normalize(v.adresse),
          details: normalize(v.details),
          fotosLinks: normalize(v.fotosLinks),
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        const msg = toGermanApiError(data?.code);
        setFormError(msg);
        return;
      }

      router.push("/danke");
    } catch {
      setFormError("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      {formError && (
        <div className="rounded-2xl border border-rose-200/70 bg-rose-50/70 p-4 text-sm text-rose-700 shadow-sm">
          {formError}
        </div>
      )}

      {/* Honeypot (unsichtbar) */}
      <div className="hidden">
        <label className={LABEL} htmlFor="company">
          Firma
        </label>
        <input
          id="company"
          value={v.hp}
          onChange={(e) => set("hp", e.target.value)}
          className={INPUT}
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className={LABEL} htmlFor="name">
            Name <span className="text-rose-600">*</span>
          </label>
          <input
            id="name"
            className={INPUT}
            value={v.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="Max Mustermann"
          />
          {fieldErrors.name ? <div className={ERR}>{fieldErrors.name}</div> : <div className={HELP}>Pflichtfeld</div>}
        </div>

        <div>
          <label className={LABEL} htmlFor="email">
            E-Mail <span className="text-rose-600">*</span>
          </label>
          <input
            id="email"
            type="email"
            className={INPUT}
            value={v.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="max@email.de"
          />
          {fieldErrors.email ? <div className={ERR}>{fieldErrors.email}</div> : <div className={HELP}>Pflichtfeld</div>}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className={LABEL} htmlFor="phone">
            Telefon
          </label>
          <input
            id="phone"
            className={INPUT}
            value={v.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="+49 ..."
          />
          <div className={HELP}>Optional – für schnellere Rückfragen.</div>
        </div>

        <div>
          <label className={LABEL} htmlFor="ort">
            Ort / PLZ <span className="text-rose-600">*</span>
          </label>
          <input
            id="ort"
            className={INPUT}
            value={v.ort}
            onChange={(e) => set("ort", e.target.value)}
            placeholder="Hannover, 30159"
          />
          {fieldErrors.ort ? (
            <div className={ERR}>{fieldErrors.ort}</div>
          ) : (
            <div className={HELP}>Mindestens Ort oder PLZ</div>
          )}
        </div>
      </div>

      <div>
        <label className={LABEL} htmlFor="adresse">
          Adresse (falls schon bekannt)
        </label>
        <input
          id="adresse"
          className={INPUT}
          value={v.adresse}
          onChange={(e) => set("adresse", e.target.value)}
          placeholder="Straße, Hausnr."
        />
        <div className={HELP}>Optional – hilft bei einer genaueren Einschätzung.</div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className={LABEL} htmlFor="projektart">
            Projektart <span className="text-rose-600">*</span>
          </label>
          <select
            id="projektart"
            className={INPUT}
            value={v.projektart}
            onChange={(e) => set("projektart", e.target.value as FormState["projektart"])}
          >
            <option value="">Bitte auswählen…</option>
            <option value="bauelemente">Bauelemente (Fenster/Türen/Rollläden)</option>
            <option value="modernisierung">Modernisierung</option>
            <option value="kernsaneirung">Kernsanierung</option>
            <option value="kombiniert">Kombiniert (z. B. Bauelemente + Modernisierung)</option>
          </select>
          {fieldErrors.projektart ? <div className={ERR}>{fieldErrors.projektart}</div> : <div className={HELP}>Pflichtfeld</div>}
        </div>

        <div>
          <label className={LABEL} htmlFor="zeitrahmen">
            Zeitrahmen
          </label>
          <select
            id="zeitrahmen"
            className={INPUT}
            value={v.zeitrahmen}
            onChange={(e) => set("zeitrahmen", e.target.value as FormState["zeitrahmen"])}
          >
            <option value="">Bitte auswählen…</option>
            <option value="sofort">Sofort / dringend</option>
            <option value="2-4-wochen">In 2–4 Wochen</option>
            <option value="1-3-monate">In 1–3 Monaten</option>
            <option value="flexibel">Flexibel</option>
          </select>
          <div className={HELP}>Optional</div>
        </div>
      </div>

      <div>
        <label className={LABEL} htmlFor="details">
          Kurzbeschreibung <span className="text-rose-600">*</span>
        </label>
        <textarea
          id="details"
          className={cn(INPUT, "min-h-[140px]")}
          value={v.details}
          onChange={(e) => set("details", e.target.value)}
          placeholder="Was soll gemacht werden? Umfang/Ziel in 2–3 Sätzen…"
        />
        {fieldErrors.details ? <div className={ERR}>{fieldErrors.details}</div> : <div className={HELP}>Pflichtfeld</div>}
      </div>

      <div>
        <label className={LABEL} htmlFor="fotosLinks">
          Fotos/Links (optional)
        </label>
        <input
          id="fotosLinks"
          className={INPUT}
          value={v.fotosLinks}
          onChange={(e) => set("fotosLinks", e.target.value)}
          placeholder="z. B. Link zu Google Drive/Dropbox/WeTransfer"
        />
        <div className={HELP}>Optional – bitte nur Links, keine Dateiuploads.</div>
      </div>

      {/* ✅ Datenschutz Checkbox */}
      <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-4 shadow-sm ring-1 ring-inset ring-white/40">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={v.privacyAccepted}
            onChange={(e) => set("privacyAccepted", e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-slate-300 text-black focus:ring-2 focus:ring-indigo-200/70"
          />
          <span className="text-sm text-slate-700">
            Ich habe die{" "}
            <Link href="/datenschutz" className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-2">
              Datenschutzerklärung
            </Link>{" "}
            gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung der Anfrage zu.{" "}
            <span className="text-rose-600">*</span>
          </span>
        </label>
        {fieldErrors.privacyAccepted ? <div className={ERR}>{fieldErrors.privacyAccepted}</div> : null}
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        <button type="submit" className={BTN_PRIMARY} disabled={submitting}>
          {submitting ? "Wird gesendet…" : "Anfrage senden"}
        </button>

        <a href="tel:+49050353169997" className={BTN_GHOST}>
          Lieber anrufen
        </a>
      </div>

      <p className="text-[12px] text-slate-500">
        Pflichtfelder sind mit <span className="text-rose-600">*</span> markiert.
      </p>
    </form>
  );
}
