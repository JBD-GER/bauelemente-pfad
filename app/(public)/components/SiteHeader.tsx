"use client";

// app/(public)/components/SiteHeader.tsx
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";

function cn(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

function IconChevron({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-4 w-4", className)} fill="none" aria-hidden="true">
      <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconMenu({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-5 w-5", className)} fill="none" aria-hidden="true">
      <path d="M4 7h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconX({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-5 w-5", className)} fill="none" aria-hidden="true">
      <path d="M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function NavLink({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition",
        "hover:bg-white/70 hover:text-slate-900 hover:shadow-sm",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200/70",
        className
      )}
    >
      {children}
    </Link>
  );
}

/** ✅ simple media query hook (wie bei dir) */
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const m = window.matchMedia(query);
    const onChange = () => setMatches(m.matches);

    onChange();

    if (typeof m.addEventListener === "function") m.addEventListener("change", onChange);
    else m.addListener(onChange);

    return () => {
      if (typeof m.removeEventListener === "function") m.removeEventListener("change", onChange);
      else m.removeListener(onChange);
    };
  }, [query]);

  return matches;
}

const PROJECT_SUB = [
  {
    href: "/projektarten/kernsanierung",
    label: "Kernsanierung",
    desc: "Tiefgreifend erneuern · klare Bauphasen · Abnahme",
  },
  {
    href: "/projektarten/modernisierung",
    label: "Modernisierung",
    desc: "Gezielt aufwerten · Wert & Komfort · saubere Übergabe",
  },
];

export default function SiteHeader() {
  const pathname = usePathname();

  // ✅ CTA / Actions
  const ctaHref = "/anfrage";
  const ctaLabel = "Projekt anfragen";
  const phoneHref = "tel:+49050353169997";
  const phoneLabel = "Anrufen";

  // optional: rechts im Dropdown / mobile card
  const promoImage = useMemo(() => "/startseite/modernisierung2.png", []);

  // ✅ states: Mobile Panel + getrennte Desktop/Mobile Projektarten
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectsDesktopOpen, setProjectsDesktopOpen] = useState(false);
  const [projectsMobileOpen, setProjectsMobileOpen] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 1024px)"); // lg
  const desktopPanelRef = useRef<HTMLDivElement | null>(null);

  // ✅ ESC schließt alles
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setProjectsDesktopOpen(false);
        setProjectsMobileOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // ✅ Route change -> alles zu
  useEffect(() => {
    setMobileOpen(false);
    setProjectsDesktopOpen(false);
    setProjectsMobileOpen(false);
  }, [pathname]);

  // ✅ Wechsel Desktop/Mobile sauber trennen
  useEffect(() => {
    if (isDesktop) {
      setMobileOpen(false);
      setProjectsMobileOpen(false);
    } else {
      setProjectsDesktopOpen(false);
    }
  }, [isDesktop]);

  // ✅ Wenn Mobile-Menü geschlossen: Accordion zu
  useEffect(() => {
    if (!mobileOpen) setProjectsMobileOpen(false);
  }, [mobileOpen]);

  // ✅ Klick außerhalb schließt NUR Desktop Dropdown
  useEffect(() => {
    if (!isDesktop) return;
    if (!projectsDesktopOpen) return;

    function onClick(e: MouseEvent) {
      const t = e.target as Node;
      if (!desktopPanelRef.current) return;
      if (!desktopPanelRef.current.contains(t)) setProjectsDesktopOpen(false);
    }

    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [isDesktop, projectsDesktopOpen]);

  const GLASS_BAR = "border-b border-slate-200/70 bg-white/70 backdrop-blur-xl";
  const CARD = "rounded-2xl border border-white/60 bg-white/60 shadow-sm ring-1 ring-inset ring-white/40";

  return (
    <header className="sticky top-0 z-50">
      {/* Glass-Bar */}
      <div className={GLASS_BAR}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-3 sm:px-6 md:py-4">
          {/* Brand */}
          <Link href="/" className="group flex items-center gap-3">
            <Image
              src="/Bauelemente_Pfad_Logo.png"
              alt="Bauelemente Pfad"
              width={170}
              height={44}
              className="block"
              priority
            />
            <span className="hidden lg:block h-9 w-px bg-slate-200/70" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            <NavLink href="/leistungen">Leistungen</NavLink>

            {/* Projektarten Dropdown (Desktop) */}
            <div className="relative" ref={desktopPanelRef}>
              <button
                type="button"
                onClick={() => setProjectsDesktopOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={projectsDesktopOpen}
                className={cn(
                  "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition",
                  "hover:bg-white/70 hover:text-slate-900 hover:shadow-sm",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200/70"
                )}
              >
                Projektarten
                <IconChevron className={cn("transition", projectsDesktopOpen && "rotate-180")} />
              </button>

              <div
                role="menu"
                className={cn(
                  "absolute left-0 mt-2 w-[420px] origin-top-left rounded-3xl border border-white/60 bg-white/80 p-3 shadow-lg backdrop-blur-xl ring-1 ring-inset ring-white/40",
                  "transition duration-150",
                  projectsDesktopOpen ? "scale-100 opacity-100" : "pointer-events-none scale-[0.98] opacity-0"
                )}
              >
                <div className="px-2 pb-2 pt-1">
                  <div className="text-[11px] font-medium text-slate-500">Projektarten</div>
                </div>

                <div className="grid gap-2">
                  {PROJECT_SUB.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setProjectsDesktopOpen(false)}
                      className={cn(
                        "rounded-2xl border border-slate-200/70 bg-white/70 px-3 py-3 text-sm text-slate-900 shadow-sm",
                        "hover:bg-white hover:border-slate-300 transition"
                      )}
                    >
                      <div className="font-semibold">{s.label}</div>
                      <div className="mt-0.5 text-[12px] text-slate-600">{s.desc}</div>
                    </Link>
                  ))}
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  <Link
                    href="/projektarten"
                    onClick={() => setProjectsDesktopOpen(false)}
                    className={cn(
                      "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium text-slate-900",
                      "border border-slate-200/80 bg-white/70 shadow-sm ring-1 ring-inset ring-white/40",
                      "transition hover:bg-white/90 hover:border-slate-300 hover:shadow-md active:scale-[0.99]"
                    )}
                  >
                    Übersicht
                  </Link>
                  <Link
                    href={ctaHref}
                    onClick={() => setProjectsDesktopOpen(false)}
                    className={cn(
                      "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium text-white",
                      "bg-black shadow-sm ring-1 ring-inset ring-white/10 transition hover:bg-black/90 active:scale-[0.99]"
                    )}
                  >
                    Anfrage
                  </Link>
                </div>

                {/* Mini Promo */}
                <div className="mt-3 overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm">
                  <div className="relative h-28 w-full">
                    <Image src={promoImage} alt="Modernisierung" fill className="object-cover" sizes="420px" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="text-[12px] font-semibold text-white">Schnell einschätzen lassen</div>
                      <div className="text-[11px] text-white/90">Ort · Fotos · Ziel</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <NavLink href="/faq">Fragen</NavLink>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center gap-2">
              <a
                href={phoneHref}
                className={cn(
                  "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium text-slate-900",
                  "border border-slate-200/80 bg-white/70 shadow-sm backdrop-blur-xl ring-1 ring-inset ring-white/40",
                  "transition hover:bg-white/90 hover:border-slate-300 hover:shadow-md active:scale-[0.99]"
                )}
              >
                {phoneLabel}
              </a>

              <Link
                href={ctaHref}
                className={cn(
                  "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium text-white",
                  "bg-black shadow-sm ring-1 ring-inset ring-white/10 transition hover:bg-black/90 active:scale-[0.99]"
                )}
              >
                {ctaLabel}
              </Link>
            </div>

            {/* Mobile: Menu Button */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className={cn(
                "lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-2xl",
                "border border-slate-200/80 bg-white/70 shadow-sm backdrop-blur-xl ring-1 ring-inset ring-white/40",
                "transition hover:bg-white/90 hover:border-slate-300 hover:shadow-md active:scale-[0.99]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200/70"
              )}
              aria-label="Menü öffnen"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <IconX className="text-slate-800" /> : <IconMenu className="text-slate-800" />}
            </button>
          </div>
        </div>

        {/* ✅ Mobile Panel (wie bei dir) */}
        <div
          className={cn(
            "lg:hidden overflow-hidden border-t border-slate-200/60 bg-white/70 backdrop-blur-xl",
            "transition-[max-height,opacity] duration-200",
            mobileOpen ? "max-h-[720px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="mx-auto max-w-7xl px-3 py-3 sm:px-6">
            <div className="grid gap-2">
              <Link href="/leistungen" onClick={() => setMobileOpen(false)} className={cn(CARD, "px-4 py-3 text-sm font-medium text-slate-900")}>
                Leistungen
              </Link>

              {/* Projektarten Accordion (Mobile) */}
              <button
                type="button"
                onClick={() => setProjectsMobileOpen((v) => !v)}
                className={cn(
                  CARD,
                  "flex items-center justify-between px-4 py-3 text-sm font-medium text-slate-900",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200/70"
                )}
                aria-expanded={projectsMobileOpen}
              >
                <span>Projektarten</span>
                <IconChevron className={cn("transition", projectsMobileOpen && "rotate-180")} />
              </button>

              <div
                className={cn(
                  "grid gap-2 pl-2 transition-[max-height,opacity] duration-200",
                  projectsMobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                )}
              >
                {PROJECT_SUB.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 text-sm text-slate-900 shadow-sm ring-1 ring-inset ring-white/40"
                    )}
                  >
                    <div className="font-semibold">{s.label}</div>
                    <div className="mt-0.5 text-[12px] text-slate-600">{s.desc}</div>
                  </Link>
                ))}

                <Link
                  href="/projektarten"
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-inset ring-white/40"
                  )}
                >
                  Übersicht Projektarten
                </Link>
              </div>

              <Link href="/faq" onClick={() => setMobileOpen(false)} className={cn(CARD, "px-4 py-3 text-sm font-medium text-slate-900")}>
                Fragen
              </Link>

              {/* Actions */}
              <div className="mt-1 grid grid-cols-1 gap-2">
                <Link
                  href={ctaHref}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-medium text-white",
                    "bg-black shadow-sm ring-1 ring-inset ring-white/10 transition hover:bg-black/90 active:scale-[0.99]"
                  )}
                >
                  {ctaLabel}
                </Link>

                <a
                  href={phoneHref}
                  className={cn(
                    "inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-medium text-slate-900",
                    "border border-slate-200/80 bg-white/70 shadow-sm backdrop-blur-xl ring-1 ring-inset ring-white/40",
                    "transition hover:bg-white/90 hover:border-slate-300 hover:shadow-md active:scale-[0.99]"
                  )}
                >
                  {phoneLabel}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
