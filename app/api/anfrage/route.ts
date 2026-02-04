// app/api/anfrage/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

function mustEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

function firstEnv(...names: string[]) {
  for (const name of names) {
    const v = process.env[name];
    if (v && v.trim()) return v.trim();
  }
  return "";
}

function getEnv() {
  const FROM_EMAIL = firstEnv("EMAIL_FROM", "FROM_EMAIL");
  const TO_EMAIL = firstEnv("EMAIL_TO", "TO_EMAIL", "EMAIL_REPLY_TO");

  if (!FROM_EMAIL) throw new Error("Missing env: EMAIL_FROM/FROM_EMAIL");
  if (!TO_EMAIL) throw new Error("Missing env: EMAIL_TO/TO_EMAIL/EMAIL_REPLY_TO");

  return {
    RESEND_API_KEY: mustEnv("RESEND_API_KEY"),
    FROM_EMAIL,
    TO_EMAIL,
    EMAIL_REPLY_TO: firstEnv("EMAIL_REPLY_TO"),
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
  if (!Boolean(body?.privacyAccepted)) return bad("privacy_required");

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
  const customerSubject = "Ihre Anfrage ist bei uns eingegangen - Bauelemente Pfad";

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

  const customerHtml = `
<div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial; line-height:1.55; color:#0f172a;">
  <h2 style="margin:0 0 12px 0;">Danke für Ihre Anfrage, ${escapeHtml(name)}.</h2>

  <p style="margin:0 0 12px 0;">
    Wir haben Ihre Nachricht erhalten und melden uns zeitnah bei Ihnen.
  </p>

  <div style="border:1px solid rgba(148,163,184,.45); background:rgba(248,250,252,.9); border-radius:14px; padding:14px; margin:0 0 14px 0;">
    <div style="margin:0 0 6px 0;"><strong>Projektart:</strong> ${escapeHtml(projektartLabel)}</div>
    <div style="margin:0 0 6px 0;"><strong>Ort/PLZ:</strong> ${escapeHtml(ort)}</div>
    <div style="margin:0 0 6px 0;"><strong>Zeitrahmen:</strong> ${escapeHtml(zeitrahmenLabel)}</div>
  </div>

  <div style="margin:0 0 14px 0; color:#334155;">
    Falls Sie Rückfragen haben, antworten Sie einfach auf diese E-Mail.
  </div>

  ${
    env.SITE_URL
      ? `<div style="color:#64748b; font-size:13px;">${escapeHtml(env.SITE_URL)}</div>`
      : ""
  }
</div>
`;

  try {
    const [{ error: adminError }, { error: customerError }] = await Promise.all([
      resend.emails.send({
        from: env.FROM_EMAIL,
        to: env.TO_EMAIL,
        subject,
        html,
        replyTo: email, // damit du direkt auf den Kunden antworten kannst
      }),
      resend.emails.send({
        from: env.FROM_EMAIL,
        to: email,
        subject: customerSubject,
        html: customerHtml,
        replyTo: env.EMAIL_REPLY_TO || env.TO_EMAIL,
      }),
    ]);

    if (adminError || customerError) {
      console.error("Resend send failed", { adminError, customerError });
      return bad("email_send_failed", 500);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend send exception", err);
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
