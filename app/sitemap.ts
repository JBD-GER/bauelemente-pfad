// app/sitemap.ts
import type { MetadataRoute } from "next";

function safeBaseUrl() {
  const fallback = "https://www.bauelemente-pfad.de";
  const raw = (process.env.NEXT_PUBLIC_SITE_URL || fallback).trim();
  try {
    const u = new URL(raw);
    // trailing slash entfernen
    return u.toString().replace(/\/$/, "");
  } catch {
    return fallback;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = safeBaseUrl();
  const lastModified = new Date();

  // ✅ Öffentlich indexierbare Seiten (aus deiner Struktur)
  const routes = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/leistungen", changeFrequency: "weekly" as const, priority: 0.85 },
    { path: "/projektarten", changeFrequency: "weekly" as const, priority: 0.85 },
    { path: "/faq", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/anfrage", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/impressum", changeFrequency: "yearly" as const, priority: 0.2 },
    { path: "/datenschutz", changeFrequency: "yearly" as const, priority: 0.2 },

    // ❌ /danke normalerweise NICHT indexieren (Conversion-Seite)
    // { path: "/danke", changeFrequency: "yearly" as const, priority: 0.1 },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
