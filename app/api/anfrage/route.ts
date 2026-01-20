// app/api/anfrage/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

function mustEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

function getEnv() {
  return {
    RESEND_API_KEY: mustEnv("RESEND_API_KEY"),
    FROM_EMAIL: mustEnv("FROM_EMAIL"), // z.B. "Bauelemente Pfad <no-reply@deinedomain.de>"
    TO_EMAIL: mustEnv("TO_EMAIL"),     // z.B. "info@bauelemente-pfad.de"
    SITE_URL: (process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/+$/, ""),
  };
}

function bad(code: string, status = 400) {
  return NextResponse.json({ ok: false, code }, { status });
}

export async function POST(req: Request) {
  let env: ReturnType<typeof getEnv>;
  try {
    env = getEnv();
  } catch {
    return bad("email_send_failed", 500);
  }

  // basic in-memory rate limit (pro runtime) – minimal & optional
  // (wenn du richtig rate limit willst: KV/Upstash)
  // -> hier bewusst weggelassen, damit nichts blockiert.

  let body: any;
  try {
    body = await req.json();
  } catch {
    return bad("invalid_json");
  }

  // Honeypot
  if (body?.hp) return bad("spam_detected", 400);

  const name = String(body?.name ?? "").trim();
  const email = String(body?.email ?? "").trim();
  const phone = String(body?.phone ?? "").trim();
  const ort = String(body?.ort ?? "").trim();
  const adresse = String(body?.adresse ?? "").trim();
  const projektart = String(body?.projektart ?? "").trim();
  const zeitrahmen = String(body?.zeitrahmen ?? "").trim();
  const details = String(body?.details ?? "").trim();
  const fotosLinks = String(body?.fotosLinks ?? "").trim();

  if (!name || !email || !ort || !projektart || !details) return bad("missing_required");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return bad("invalid_email");
  if (details.length < 10) return bad("message_too_short");

  const resend = new Resend(env.RESEND_API_KEY);

  const projektartLabel =
    projektart === "bauelemente"
      ? "Bauelemente (Fenster/Türen/Rollläden)"
      : projektart === "modernisierung"
      ? "Modernisierung"
      : projektart === "kernsaneirung"
      ? "Kernsanierung"
      : projektart === "kombiniert"
      ? "Kombiniert"
      : projektart;

  const zeitrahmenLabel =
    zeitrahmen === "sofort"
      ? "Sofort / dringend"
      : zeitrahmen === "2-4-wochen"
      ? "In 2–4 Wochen"
      : zeitrahmen === "1-3-monate"
      ? "In 1–3 Monaten"
      : zeitrahmen === "flexibel"
      ? "Flexibel"
      : (zeitrahmen || "—");

  const subject = `Neue Anfrage: ${projektartLabel} (${ort})`;

  const html = `
<div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial; line-height:1.55; color:#0f172a;">
  <h2 style="margin:0 0 12px 0;">Neue Anfrage – Bauelemente Pfad</h2>

  <div style="border:1px solid rgba(148,163,184,.45); background:rgba(248,250,252,.9); border-radius:14px; padding:14px; margin:0 0 14px 0;">
    <div style="margin:0 0 6px 0;"><strong>Projektart:</strong> ${escapeHtml(projektartLabel)}</div>
    <div style="margin:0 0 6px 0;"><strong>Ort/PLZ:</strong> ${escapeHtml(ort)}</div>
    <div style="margin:0 0 6px 0;"><strong>Adresse:</strong> ${escapeHtml(adresse || "—")}</div>
    <div style="margin:0 0 6px 0;"><strong>Zeitrahmen:</strong> ${escapeHtml(zeitrahmenLabel)}</div>
  </div>

  <div style="border:1px solid rgba(148,163,184,.45); background:rgba(255,255,255,.9); border-radius:14px; padding:14px; margin:0 0 14px 0;">
    <div style="margin:0 0 6px 0;"><strong>Name:</strong> ${escapeHtml(name)}</div>
    <div style="margin:0 0 6px 0;"><strong>E-Mail:</strong> ${escapeHtml(email)}</div>
    <div style="margin:0 0 6px 0;"><strong>Telefon:</strong> ${escapeHtml(phone || "—")}</div>
  </div>

  <div style="border:1px solid rgba(148,163,184,.45); background:rgba(248,250,252,.9); border-radius:14px; padding:14px; margin:0 0 14px 0;">
    <div style="font-weight:700; margin:0 0 8px 0;">Kurzbeschreibung</div>
    <div style="white-space:pre-wrap;">${escapeHtml(details)}</div>
  </div>

  <div style="margin:0 0 14px 0;">
    <strong>Fotos/Links:</strong> ${fotosLinks ? `<a href="${escapeAttr(fotosLinks)}">${escapeHtml(fotosLinks)}</a>` : "—"}
  </div>

  ${
    env.SITE_URL
      ? `<div style="color:#64748b; font-size:13px;">Quelle: ${escapeHtml(env.SITE_URL)}/anfrage</div>`
      : ""
  }
</div>
`;

  try {
    const { error } = await resend.emails.send({
      from: env.FROM_EMAIL,
      to: env.TO_EMAIL,
      subject,
      html,
      replyTo: email, // damit du direkt auf den Kunden antworten kannst
    });

    if (error) return bad("email_send_failed", 500);

    return NextResponse.json({ ok: true });
  } catch {
    return bad("email_send_failed", 500);
  }
}

// --- mini helpers ---
function escapeHtml(s: string) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
function escapeAttr(s: string) {
  // minimal for href attribute
  return escapeHtml(s).replaceAll(" ", "%20");
}
