import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RelatedLinks from "@/components/RelatedLinks";
import HealthcareIcon from "@/components/icons/HealthcareIcon";

export const metadata: Metadata = {
  title: "Funds",
  description:
    "FundCo manages sector-focused funds unlocking domestic finance for small and medium-sized infrastructure in clean energy, affordable housing, and agriculture across Nigeria.",
};

const SECTORS = [
  { label: "Housing", icon: "/uploads/2021/07/housing.svg" },
  { label: "Education", icon: "/uploads/2021/07/edu.svg" },
  { label: "Agriculture", icon: "/uploads/2021/07/Agric.svg" },
  { label: "Energy", icon: "/uploads/2021/07/Energy.svg" },
  { label: "Healthcare", icon: null },
];

const SDGS = [
  { number: "7", title: "Affordable and Clean Energy", icon: "/images/sdg/sdg-7.png" },
  { number: "8", title: "Decent Work and Economic Growth", icon: "/images/sdg/sdg-8.svg" },
  { number: "11", title: "Sustainable Cities and Communities", icon: "/images/sdg/sdg-11.png" },
  { number: "13", title: "Climate Action", icon: "/images/sdg/sdg-13.png" },
  { number: "1", title: "No Poverty", icon: "/images/sdg/sdg-1.png" },
];

export default function Funds() {
  return (
    <>
      <PageHero
        title="Funds"
        subtitle="Unlocking domestic finance for small and medium-sized infrastructure across essential, recession-resilient sectors."
        image="/uploads/2021/07/Group-3197.jpg"
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-bold text-brand mb-4">
          Mission &amp; Vision
        </h2>
        <p className="text-text-secondary leading-relaxed mb-4">
          Our mission is to innovatively unlock domestic finance for small
          and medium-sized infrastructure in unserved or under-served
          sectors that provide essential services to society, are recession
          resilient, demonstrate long term viability with predictable
          cashflows and reduce the impact of climate change.
        </p>
        <p className="text-text-secondary leading-relaxed">
          Our range of strategies and opportunities are tailored to preserve
          and grow institutional investments in sustainable infrastructure
          assets alongside proactive management of environmental, social and
          governance (ESG) considerations.
        </p>
      </section>

      <section id="sectors" className="bg-surface border-y border-border">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-brand mb-2">
            Target Sectors
          </h2>
          <p className="mx-auto max-w-2xl text-text-secondary mb-10">
            Our investments will directly address key sustainability
            challenges and provide innovative solutions that seek a positive
            impact while also achieving strong risk-adjusted financial
            returns in the following market segments
          </p>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-5">
            {SECTORS.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-white p-5 sm:p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-brand/40 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                  {s.icon ? (
                    <Image src={s.icon} alt={s.label} width={26} height={26} />
                  ) : (
                    <HealthcareIcon />
                  )}
                </div>
                <span className="text-xs font-semibold uppercase tracking-wide text-text">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-bold text-brand mb-4">
          Investment Approach
        </h2>
        <p className="text-text-secondary leading-relaxed mb-8">
          Our investment approach holds great potential to deliver the three
          pillars of the SDGs: economic, environmental and social
          sustainability. We do this sustainably in partnership with our
          development partners, thought-leaders in blended finance,
          infrastructure, technology, and development finance to drive
          innovation beyond conventional asset management.
        </p>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-5">
          {SDGS.map((sdg) => (
            <div
              key={sdg.number}
              className="rounded-2xl border border-border bg-surface p-4 sm:p-5 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <Image
                src={sdg.icon}
                alt={`SDG ${sdg.number}: ${sdg.title}`}
                width={110}
                height={110}
                className="mx-auto h-16 w-16 sm:h-20 sm:w-20 rounded-lg object-contain"
              />
              <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-text-secondary">
                {sdg.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-2xl font-bold text-brand mb-2">
            Target Funds
          </h2>
          <p className="text-text-secondary mb-10">
            FundCo manages two live, SEC-regulated funds — the Clean Energy
            Local Currency Fund and the Housing Solution Fund — alongside a
            broader agriculture-sector portfolio focus built around our
            operating platform, Agronomie.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/clean-energy"
              className="rounded-2xl border border-border bg-white p-6 sm:p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-brand/40 transition-all duration-300"
            >
              <span className="mb-3 inline-block rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-700">
                Live &amp; SEC Regulated
              </span>
              <h3 className="text-lg font-semibold text-brand mb-3">
                Clean Energy Local Currency Fund (CeF)
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Climate Bonds Certified and rated BBB by GCR and Agusto &amp;
                Co., CeF mobilises naira institutional capital into
                mini-grids, solar, clean cooking and e-mobility&hellip;
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-brand">
                Learn more &rarr;
              </span>
            </Link>

            <Link
              href="/affordable-housing"
              className="rounded-2xl border border-border bg-white p-6 sm:p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-brand/40 transition-all duration-300"
            >
              <span className="mb-3 inline-block rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-700">
                Live &amp; SEC Registered
              </span>
              <h3 className="text-lg font-semibold text-brand mb-3">
                Housing Solution Fund (HSF)
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Nigeria&rsquo;s first privately managed housing-focused REIT,
                financing long-dated affordable home loans and EDGE-certified
                housing&hellip;
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-brand">
                Learn more &rarr;
              </span>
            </Link>
          </div>

          <Link
            href="/agriculture"
            className="mt-6 block rounded-2xl border border-border bg-white p-6 sm:p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-brand/40 transition-all duration-300"
          >
            <span className="mb-3 inline-block rounded-full bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand">
              Sector Focus
            </span>
            <h3 className="text-lg font-semibold text-brand mb-3">
              Agriculture
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              A broader portfolio focus rather than a registered fund vehicle,
              built around Agronomie, our agricultural production and
              value-chain financing platform&hellip;
            </p>
            <span className="mt-3 inline-block text-sm font-semibold text-brand">
              Learn more &rarr;
            </span>
          </Link>

          <p className="mt-8 text-sm text-text-secondary leading-relaxed">
            Our strategic aim is to manage sector focused funds in select
            industries with high-growth potential. These are selected
            industries providing essential services to the society, with
            domestic geographic diversity, have secure cash flows, are
            recession resilient, and ideally, offer some inflation
            protection. Together, these alternative investments, form a
            unique asset class called the &ldquo;defensive asset
            class&rdquo;.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-bold text-brand mb-4">
          Strategic Partnerships
        </h2>
        <p className="text-text-secondary leading-relaxed mb-4">
          Our aim is to lead the effort to diversify from traditional
          mainstream assets to alternative infrastructure asset classes that
          accelerate the transition to a low-carbon economy.
        </p>
        <p className="text-text-secondary leading-relaxed">
          We believe this creates an unparalleled opportunity for strategic
          partnerships for innovation and sustainable development (SDG 17)
          that will create value and better risk adjusted returns for
          institutional investors.
        </p>
      </section>

      <RelatedLinks />
    </>
  );
}
