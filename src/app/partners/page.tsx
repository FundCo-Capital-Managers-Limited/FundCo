import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "The trustees, custodians, rating agencies, and strategic collaborators that govern and support the Clean Energy Local Currency Fund and the Housing Solution Fund.",
};

type Partner = {
  name: string;
  logo?: string;
  role: string;
  fund: "CeF" | "HSF" | "Both";
  text: string;
  href?: string;
};

type Group = {
  heading: string;
  intro: string;
  partners: Partner[];
};

const FUND_BADGE: Record<Partner["fund"], string> = {
  CeF: "bg-emerald-100 text-emerald-700",
  HSF: "bg-sky-100 text-sky-700",
  Both: "bg-brand/10 text-brand",
};

const GROUPS: Group[] = [
  {
    heading: "Fund Governance & Custody",
    intro:
      "The trustees, registrars, custodians and auditors responsible for safeguarding investor assets and fund records across CeF and HSF.",
    partners: [
      {
        name: "Stanbic IBTC Trustees",
        role: "Trustee",
        fund: "Both",
        text: "Acts as Trustee for both the Clean Energy Local Currency Fund and the Housing Solution Fund, safeguarding investor assets on behalf of unit and noteholders.",
      },
      {
        name: "Africa Prudential",
        role: "Registrar",
        fund: "Both",
        text: "Serves as Registrar for both funds, maintaining the official register of unit and noteholders.",
      },
      {
        name: "United Bank for Africa (UBA)",
        role: "Custodian",
        fund: "HSF",
        text: "Acts as Custodian for the Housing Solution Fund, holding fund assets independently of the fund manager.",
      },
      {
        name: "PricewaterhouseCoopers (PwC)",
        role: "Auditor",
        fund: "CeF",
        text: "Independent auditor of the Clean Energy Local Currency Fund's financial statements.",
      },
      {
        name: "KPMG",
        role: "Auditor",
        fund: "HSF",
        text: "Independent auditor of the Housing Solution Fund's financial statements.",
      },
    ],
  },
  {
    heading: "Ratings, Listing & Regulation",
    intro:
      "Independent rating agencies, the exchange, and the regulator that provide external oversight and credibility to both funds.",
    partners: [
      {
        name: "Agusto & Co.",
        logo: "/uploads/2024/03/Agusto.svg",
        role: "Rating Agency",
        fund: "CeF",
        text: "Assigns CeF a BBB national-scale rating on a Stable outlook.",
      },
      {
        name: "GCR Ratings",
        logo: "/uploads/2024/03/GCR.svg",
        role: "Rating Agency",
        fund: "CeF",
        text: "Assigns CeF a BBB national-scale rating on a Stable outlook, alongside Agusto & Co.",
      },
      {
        name: "Nigerian Stock Exchange (NGX)",
        role: "Listing",
        fund: "HSF",
        text: "The Housing Solution Fund's notes and units are listed on the Nigerian Stock Exchange.",
      },
      {
        name: "Securities & Exchange Commission (Nigeria)",
        role: "Regulator",
        fund: "Both",
        text: "FundCo Capital Managers is authorised and regulated by the Nigerian SEC as fund/portfolio manager for both CeF and HSF.",
      },
    ],
  },
  {
    heading: "Strategic Collaborators",
    intro:
      "Partners who bring guarantees, concessional capital, insurance, or sector expertise that make both funds' structures possible.",
    partners: [
      {
        name: "InfraCredit",
        logo: "/images/partners/infracredit.svg",
        role: "Strategic Partner & Collaborator",
        fund: "Both",
        text: "Provides AAA-rated guarantees under CeF's Clean Energy Funding Programme (CEFP), crowding in institutional debt capital, and is also a collaborator to the Housing Solution Fund.",
      },
      {
        name: "All On Energy",
        role: "Partner",
        fund: "CeF",
        text: "Off-grid energy investment company and partner to the Clean Energy Local Currency Fund.",
      },
      {
        name: "Shelter Afrique Development Bank",
        role: "Collaborator",
        fund: "HSF",
        text: "Pan-African housing finance institution that mobilises funding for affordable housing across Africa, collaborating with HSF.",
      },
      {
        name: "LeadWay Insurance Limited",
        role: "Strategic Partner",
        fund: "HSF",
        text: "Strategic insurance partner to the Housing Solution Fund's mortgage and housing-finance structure.",
      },
    ],
  },
  {
    heading: "Financial & Legal Advisers",
    intro:
      "The advisers and co-managers who structured and continue to support each fund's finance and legal framework.",
    partners: [
      {
        name: "Olaniwun Ajayi LP",
        role: "Legal Adviser",
        fund: "CeF",
        text: "Legal adviser to the Clean Energy Local Currency Fund.",
      },
      {
        name: "FSDH Capital Ltd",
        role: "Financial Adviser",
        fund: "CeF",
        text: "One of two financial advisers on the Clean Energy Local Currency Fund.",
      },
      {
        name: "FCMB",
        role: "Financial Adviser",
        fund: "CeF",
        text: "One of two financial advisers on the Clean Energy Local Currency Fund.",
      },
      {
        name: "FSL Asset Management Limited",
        role: "Co-Fund Manager",
        fund: "HSF",
        text: "Co-manages the Housing Solution Fund alongside FundCo Capital Managers.",
      },
    ],
  },
  {
    heading: "Pension Fund Administrators",
    intro:
      "Institutional investors in the Housing Solution Fund, channelling long-term pension capital into affordable housing finance.",
    partners: [
      { name: "CardinalStone Pensions Limited", role: "Institutional Investor", fund: "HSF", text: "Pension Fund Administrator invested in the Housing Solution Fund." },
      { name: "Fidelity Pension Limited", role: "Institutional Investor", fund: "HSF", text: "Pension Fund Administrator invested in the Housing Solution Fund." },
      { name: "Norrenberger Pension Managers Limited", role: "Institutional Investor", fund: "HSF", text: "Pension Fund Administrator invested in the Housing Solution Fund." },
    ],
  },
  {
    heading: "Mortgage Origination Partners",
    intro:
      "Lending institutions that originate the long-dated home loans financed through the Housing Solution Fund.",
    partners: [
      { name: "Union Bank of Nigeria", role: "Lending Institution", fund: "HSF", text: "Mortgage origination partner for HSF-financed home loans." },
      { name: "Prudential Mortgage Bank", role: "Lending Institution", fund: "HSF", text: "Mortgage origination partner for HSF-financed home loans.", href: "https://prudenthomes.com" },
      { name: "First Trust Mortgage Bank", role: "Lending Institution", fund: "HSF", text: "Mortgage origination partner for HSF-financed home loans." },
    ],
  },
];

export default function Partners() {
  return (
    <>
      <PageHero
        breadcrumb="Our Ecosystem"
        title="Partners & Governance"
        subtitle="CeF and HSF are each governed and supported by their own network of trustees, custodians, rating agencies, and strategic collaborators — the institutions that make both funds real, regulated, and accountable."
      />

      <section className="mx-auto max-w-3xl px-6 pt-14 sm:pt-20 text-center">
        <p className="text-text-secondary leading-relaxed">
          FundCo Capital Managers manages two live, SEC-regulated funds.
          Neither operates alone: each is structured, guaranteed, audited,
          and distributed through a dedicated set of institutional partners.
          Below is the FundCo-group view of both funds&rsquo; governance and
          partner networks, grouped by role.
        </p>
      </section>

      {GROUPS.map((group, gi) => (
        <section
          key={group.heading}
          className={gi % 2 === 0 ? "bg-surface border-y border-border" : ""}
        >
          <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
            <ScrollReveal>
              <h2 className="text-xl sm:text-2xl font-bold text-brand mb-2">
                {group.heading}
              </h2>
              <p className="max-w-3xl text-sm sm:text-base text-text-secondary mb-8">
                {group.intro}
              </p>
            </ScrollReveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {group.partners.map((p, i) => (
                <ScrollReveal
                  key={p.name}
                  delay={i * 0.05}
                  className="flex h-full flex-col rounded-2xl border border-border bg-white p-5 sm:p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {p.logo && (
                        <div className="flex h-10 w-16 shrink-0 items-center justify-center rounded-lg border border-border bg-white p-1.5">
                          <Image
                            src={p.logo}
                            alt=""
                            width={56}
                            height={32}
                            className="h-full w-full object-contain"
                          />
                        </div>
                      )}
                      <h3 className="text-sm sm:text-base font-semibold text-text leading-snug">
                        {p.href ? (
                          <a
                            href={p.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-brand transition-colors"
                          >
                            {p.name}
                          </a>
                        ) : (
                          p.name
                        )}
                      </h3>
                    </div>
                  </div>
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    <span className="inline-block rounded-full bg-brand/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand">
                      {p.role}
                    </span>
                    <span
                      className={`inline-block rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${FUND_BADGE[p.fund]}`}
                    >
                      {p.fund === "Both" ? "CeF & HSF" : p.fund}
                    </span>
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-text-secondary">
                    {p.text}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-4xl px-6 py-14 sm:py-16">
        <ScrollReveal className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-text mb-2">
                HSF Direct
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed max-w-xl">
                HSF Direct is the Housing Solution Fund&rsquo;s own home-loan
                application channel — the platform through which prospective
                homeowners apply for HSF-financed mortgages.
              </p>
            </div>
            <a
              href="https://hsfdirect.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              Visit HSF Direct
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H9M17 7v8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
        <p className="mt-6 text-sm text-text-secondary leading-relaxed">
          HSF also works with a broader network of affordable-housing
          developers &mdash; a developer-partner network rather than a single
          named entity &mdash; to bring EDGE-certified housing developments to
          market for its home-loan financing.
        </p>
      </section>

      <RelatedLinks />
    </>
  );
}
