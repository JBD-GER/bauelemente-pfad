// app/robots.ts
import type { MetadataRoute } from "next";

function safeBaseUrl() {
  const fallback = "https://www.bauelemente-pfad.de";
  const raw = (process.env.NEXT_PUBLIC_SITE_URL || fallback).trim();
  try {
    const u = new URL(raw);
    return u.toString().replace(/\/$/, "");
  } catch {
    return fallback;
  }
}

export default function robots(): MetadataRoute.Robots {
  const baseUrl = safeBaseUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // ✅ alles was nicht in Google gehört:
        disallow: [
          "/dashboard",
          "/login",
          "/api",
          "/danke", // optional, aber empfehlenswert
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
