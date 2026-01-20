// src/app/impressum/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const COMPANY = {
  brand: "Bauelemente Pfad",
  legal: "Bauelemente Pfad UG (haftungsbeschränkt)",
  managingDirector: "Christoph Pfad",
  street: "Dammstr. 6G",
  zipCity: "30890 Barsinghausen",
  phone: "+49 5035 3169997", // <- ggf. anpassen
  email: "info@bauelemente-pfad.de", // <- ggf. anpassen
  registerCourt: "Amtsgericht Hannover",
  hbr: "folgt",
  vatId: "folgt",
} as const;

const ADDRESS_ONE_LINE = `${COMPANY.legal}, ${COMPANY.street}, ${COMPANY.zipCity}`;

export const metadata: Metadata = {
  title: "Impressum – Bauelemente Pfad",
  description:
    "Impressum der Bauelemente Pfad UG (haftungsbeschränkt) – Anbieterkennzeichnung, Register, Kontakt, Haftung, Urheberrecht.",
  alternates: { canonical: "/impressum" },
  robots: { index: true, follow: true },
};

const T = {
  badge: "Rechtliches · Impressum",
  h1: "Impressum",
  intro: (
    <>
      Angaben gemäß <span className="font-semibold text-slate-900">§ 5 TMG</span> und{" "}
      <span className="font-semibold text-slate-900">§ 18 Abs. 2 MStV</span> für{" "}
      <span className="font-semibold text-slate-900">{COMPANY.brand}</span> ({COMPANY.legal}).
    </>
  ),

  tocTitle: "Inhalt",
  backHome: "Zurück zur Startseite",
  contactTitle: "Anfrage",

  toc: [
    { id: "headnote", t: "Pflichtangaben" },
    { id: "anbieter", t: "1. Anbieter & Kontakt" },
    { id: "vertretung", t: "2. Vertretungsberechtigt" },
    { id: "register", t: "3. Register & Umsatzsteuer" },
    { id: "verantwortlich", t: "4. Verantwortlich i.S.d. MStV" },
    { id: "streit", t: "5. Streitbeilegung" },
    { id: "haftung-inhalte", t: "6. Haftung für Inhalte" },
    { id: "haftung-links", t: "7. Haftung für Links" },
    { id: "urheber", t: "8. Urheberrecht" },
    { id: "marken", t: "9. Marken & Hinweise" },
  ],

  s_headnote_title: "Pflichtangaben",
  s_headnote_list: [
    { k: "Anbieter", v: COMPANY.legal },
    { k: "Marke", v: COMPANY.brand },
    { k: "Anschrift", v: `${COMPANY.street}, ${COMPANY.zipCity}` },
    { k: "Kontakt", v: `${COMPANY.email} · ${COMPANY.phone}` },
  ],

  s_provider_title: "1. Anbieter & Kontakt",
  s_rep_title: "2. Vertretungsberechtigt",
  s_register_title: "3. Register & Umsatzsteuer",
  s_resp_title: "4. Verantwortlich i.S.d. MStV",
  s_resp_p: (
    <>
      Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:{" "}
      <span className="font-semibold text-slate-900">{ADDRESS_ONE_LINE}</span>.
    </>
  ),

  s_dispute_title: "5. Streitbeilegung",
  s_dispute_p1: (
    <>
      Wir sind nicht verpflichtet und grundsätzlich nicht bereit, an Streitbeilegungsverfahren vor einer
      Verbraucherschlichtungsstelle teilzunehmen, sofern nicht gesetzlich zwingend.
    </>
  ),
  s_dispute_p2: (
    <>
      Hinweis: Die EU-Online-Streitbeilegungsplattform (OS) wurde zum 20.07.2025 eingestellt. Neue Beschwerden können dort
      nicht mehr eingereicht werden.
    </>
  ),

  s_liab_content_title: "6. Haftung für Inhalte",
  s_liab_content_p1:
    "Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir übernehmen jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte, soweit gesetzlich zulässig.",
  s_liab_content_p2:
    "Eine Haftung ist erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",

  s_liab_links_title: "7. Haftung für Links",
  s_liab_links_p1:
    "Diese Website enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.",
  s_liab_links_p2:
    "Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden derartige Links umgehend entfernt.",

  s_copyright_title: "8. Urheberrecht",
  s_copyright_p1:
    "Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.",
  s_copyright_p2:
    "Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet, soweit gesetzlich zulässig.",

  s_trademarks_title: "9. Marken & Hinweise",
  s_trademarks_list: [
    "Genannte Marken/Logos können Eigentum der jeweiligen Rechteinhaber sein.",
    "Produktnamen dienen der Beschreibung von Technologien/Leistungen und begründen keine Partnerschaft.",
  ],

  cta: "Kontakt aufnehmen →",
  footerLine: `${COMPANY.legal} · ${COMPANY.zipCity}`,

  labels: {
    provider: "Anbieter",
    brand: "Marke",
    address: "Anschrift",
    email: "E-Mail",
    phone: "Telefon",
    contactForm: "Kontaktformular",
    managingDirector: "Geschäftsführer",
    representation: "Vertretung",
    registerCourt: "Registergericht",
    commercialRegister: "Handelsregister",
    vatId: "USt-IdNr.",
    vatBasis: "Rechtsgrundlage",
    responsible: "Verantwortlich",
  },

  misc: {
    vatBasisText: "USt-IdNr. gemäß § 27 a UStG",
    representationText: "Vertretungsberechtigt",
  },
};

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-[18px] font-semibold tracking-tight text-slate-900 sm:text-[20px]">{title}</h2>
      <div className="mt-3 space-y-3 text-[13px] leading-relaxed text-slate-700 sm:text-[14px]">{children}</div>
    </section>
  );
}

function InfoRow({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1 rounded-2xl border border-slate-900/10 bg-white/70 p-4 shadow-sm backdrop-blur sm:flex-row sm:items-start sm:justify-between sm:gap-4">
      <div className="text-[11px] font-medium text-slate-600">{k}</div>
      <div className="text-[12px] font-semibold text-slate-900 sm:text-right">{v}</div>
    </div>
  );
}

export default function ImpressumPage() {
  const telHref = `tel:${COMPANY.phone.replace(/\s/g, "")}`;
  const mailHref = `mailto:${COMPANY.email}`;

  return (
    <main className="relative overflow-hidden bg-white">
      {/* Background wie Hero */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-slate-900/10 blur-3xl md:h-[720px] md:w-[720px]" />
        <div className="absolute -top-16 right-[-120px] h-[420px] w-[420px] rounded-full bg-slate-900/8 blur-3xl md:h-[560px] md:w-[560px]" />

        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_72%)]" />

        <div className="absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_70%)]">
          <div className="bp-imp-sheen absolute -left-1/2 top-0 h-full w-[200%]" />
        </div>
      </div>

      {/* Header */}
      <header className="relative mx-auto w-full max-w-[1200px] px-4 pt-10 sm:px-6 sm:pt-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500/70" />
          {T.badge}
        </div>

        <h1 className="mt-4 text-[30px] font-semibold leading-[1.06] tracking-tight text-slate-900 sm:text-[40px] md:text-[46px]">
          {T.h1}
        </h1>

        <p className="mt-3 max-w-[980px] text-[14px] leading-relaxed text-slate-700 sm:text-[15px]">{T.intro}</p>
      </header>

      <div className="relative mx-auto w-full max-w-[1200px] px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          {/* TOC */}
          <div className="lg:col-span-4">
            <div className="sticky top-6">
              <div className="relative overflow-hidden rounded-[1.6rem] border border-slate-900/10 bg-white/70 p-5 shadow-sm backdrop-blur-xl">
                <div className="text-[12px] font-semibold text-slate-900">{T.tocTitle}</div>

                <nav className="mt-3 space-y-1.5">
                  {T.toc.map((x) => (
                    <a
                      key={x.id}
                      href={`#${x.id}`}
                      className="block rounded-xl border border-transparent px-3 py-2 text-[12px] text-slate-700 transition hover:border-slate-900/10 hover:bg-white/70"
                    >
                      {x.t}
                    </a>
                  ))}
                </nav>

                <div className="mt-4 rounded-2xl border border-slate-900/10 bg-white/70 p-4 text-[11px] leading-relaxed text-slate-700 shadow-sm">
                  <div className="font-semibold text-slate-900">{T.contactTitle}</div>
                  <div className="mt-2 space-y-1.5">
                    <div>
                      {T.labels.email}:{" "}
                      <a className="font-medium text-slate-900 underline underline-offset-2" href={mailHref}>
                        {COMPANY.email}
                      </a>
                    </div>
                    <div>
                      {T.labels.phone}:{" "}
                      <a className="font-medium text-slate-900 underline underline-offset-2" href={telHref}>
                        {COMPANY.phone}
                      </a>
                    </div>
                    <div className="pt-1">
                      <Link className="font-medium text-slate-900 underline underline-offset-2" href="/anfrage">
                        /anfrage
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-[11px] text-slate-600">
                  {T.backHome}{" "}
                  <Link href="/" className="font-medium text-slate-900 underline underline-offset-2">
                    Startseite
                  </Link>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] ring-1 ring-inset ring-white/50" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8">
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-900/10 bg-white/70 p-6 shadow-[0_22px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-8">
                <div className="pointer-events-none absolute inset-0 opacity-60">
                  <div className="bp-imp-card-sheen absolute -left-1/2 top-0 h-full w-[200%]" />
                </div>

                <div className="relative space-y-10">
                  <Section id="headnote" title={T.s_headnote_title}>
                    <div className="rounded-2xl border border-slate-900/10 bg-white/70 p-4 text-[12px] leading-relaxed text-slate-700 shadow-sm">
                      <div className="font-semibold text-slate-900">Kurz & klar</div>
                      <ul className="mt-2 space-y-1.5">
                        {T.s_headnote_list.map((x) => (
                          <li key={x.k}>
                            • {x.k}: <span className="font-medium text-slate-900">{x.v}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Section>

                  <Section id="anbieter" title={T.s_provider_title}>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <InfoRow k={T.labels.provider} v={COMPANY.legal} />
                      <InfoRow k={T.labels.brand} v={COMPANY.brand} />
                      <InfoRow
                        k={T.labels.address}
                        v={
                          <span className="inline-block">
                            {COMPANY.street}, {COMPANY.zipCity}
                          </span>
                        }
                      />
                      <InfoRow
                        k={T.labels.email}
                        v={
                          <a className="underline underline-offset-2" href={mailHref}>
                            {COMPANY.email}
                          </a>
                        }
                      />
                      <InfoRow
                        k={T.labels.phone}
                        v={
                          <a className="underline underline-offset-2" href={telHref}>
                            {COMPANY.phone}
                          </a>
                        }
                      />
                      <InfoRow
                        k={T.labels.contactForm}
                        v={
                          <Link className="underline underline-offset-2" href="/anfrage">
                            /anfrage
                          </Link>
                        }
                      />
                    </div>
                  </Section>

                  <Section id="vertretung" title={T.s_rep_title}>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <InfoRow
                        k={T.labels.managingDirector}
                        v={<span className="font-semibold">{COMPANY.managingDirector}</span>}
                      />
                      <InfoRow k={T.labels.representation} v={<span>{T.misc.representationText}</span>} />
                    </div>
                  </Section>

                  <Section id="register" title={T.s_register_title}>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <InfoRow k={T.labels.registerCourt} v={COMPANY.registerCourt} />
                      <InfoRow k={T.labels.commercialRegister} v={COMPANY.hbr} />
                      <InfoRow k={T.labels.vatId} v={<span className="font-semibold">{COMPANY.vatId}</span>} />
                      <InfoRow k={T.labels.vatBasis} v={<span>{T.misc.vatBasisText}</span>} />
                    </div>
                  </Section>

                  <Section id="verantwortlich" title={T.s_resp_title}>
                    <p>{T.s_resp_p}</p>
                  </Section>

                  <Section id="streit" title={T.s_dispute_title}>
                    <p>{T.s_dispute_p1}</p>
                    <p>{T.s_dispute_p2}</p>
                  </Section>

                  <Section id="haftung-inhalte" title={T.s_liab_content_title}>
                    <p>{T.s_liab_content_p1}</p>
                    <p>{T.s_liab_content_p2}</p>
                  </Section>

                  <Section id="haftung-links" title={T.s_liab_links_title}>
                    <p>{T.s_liab_links_p1}</p>
                    <p>{T.s_liab_links_p2}</p>
                  </Section>

                  <Section id="urheber" title={T.s_copyright_title}>
                    <p>{T.s_copyright_p1}</p>
                    <p>{T.s_copyright_p2}</p>
                  </Section>

                  <Section id="marken" title={T.s_trademarks_title}>
                    <div className="rounded-2xl border border-slate-900/10 bg-white/70 p-4 text-[12px] leading-relaxed text-slate-700 shadow-sm">
                      <div className="font-semibold text-slate-900">Marken / Logos</div>
                      <ul className="mt-2 space-y-1.5">
                        {T.s_trademarks_list.map((x) => (
                          <li key={x}>• {x}</li>
                        ))}
                      </ul>
                    </div>
                  </Section>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Link
                      href="/anfrage"
                      className="inline-flex h-12 w-full items-center justify-center rounded-2xl bg-slate-900 px-6 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(15,23,42,0.22)] transition hover:translate-y-[-1px] hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
                    >
                      {T.cta}
                    </Link>

                    <div className="text-center text-[11px] text-slate-600 sm:text-right">{T.footerLine}</div>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-[1.8rem] ring-1 ring-inset ring-white/50" />
              </div>

              {/* Bottom Fade */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-28 sm:h-32">
                <div className="absolute inset-0 bp-imp-bottom-fade" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .bp-imp-bottom-fade{
          background: linear-gradient(
            to top,
            #ffffff 0%,
            rgba(255,255,255,0.92) 55%,
            rgba(255,255,255,0.0) 100%
          );
        }

        .bp-imp-sheen{
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(15,23,42,0.05) 35%,
            rgba(15,23,42,0.10) 50%,
            rgba(15,23,42,0.05) 65%,
            transparent 100%
          );
          transform: translateX(-35%);
          animation: bpImpSheen 10s ease-in-out infinite;
          filter: blur(0.5px);
          will-change: transform, opacity;
        }
        @keyframes bpImpSheen{
          0%{ transform: translateX(-35%); opacity:0.30; }
          50%{ transform: translateX(0%); opacity:0.60; }
          100%{ transform: translateX(35%); opacity:0.30; }
        }

        .bp-imp-card-sheen{
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(15,23,42,0.05) 35%,
            rgba(15,23,42,0.10) 50%,
            rgba(15,23,42,0.05) 65%,
            transparent 100%
          );
          transform: translateX(-35%);
          animation: bpImpCardSheen 9s ease-in-out infinite;
          filter: blur(0.5px);
          will-change: transform, opacity;
        }
        @keyframes bpImpCardSheen{
          0%{ transform: translateX(-35%); opacity:0.22; }
          50%{ transform: translateX(0%); opacity:0.48; }
          100%{ transform: translateX(35%); opacity:0.22; }
        }

        @media (prefers-reduced-motion: reduce){
          .bp-imp-sheen,
          .bp-imp-card-sheen{
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </main>
  );
}
