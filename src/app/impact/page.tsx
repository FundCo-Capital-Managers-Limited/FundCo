import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "The measured climate and development impact of FundCo's two live funds — the Clean Energy Local Currency Fund and the Housing Solution Fund.",
};

const CLIMATE_IMPACT = [
  { value: "21,000+", label: "tCO2e emissions avoided" },
  { value: "5,000+", label: "New energy connections enabled" },
];

const DEVELOPMENT_IMPACT = [
  { value: "370+", label: "Jobs created across portfolio projects" },
  { value: "200+", label: "SMEs supported through clean energy value chains" },
];

const HSF_IMPACT = [
  { value: "10,000+", label: "New homes targeted" },
  { value: "1,000+", label: "Jobs enabled through housing finance" },
];

const HSF_SDGS = [
  { number: "1", title: "Accessible Homeownership", icon: "/images/sdg/sdg-1.png" },
  { number: "3", title: "Good Health & Wellbeing", icon: "/images/sdg/sdg-3.svg" },
  { number: "5", title: "Gender Equality", icon: "/images/sdg/sdg-5.svg" },
  { number: "6", title: "Clean Water & Sanitation", icon: "/images/sdg/sdg-6.svg" },
  { number: "7", title: "Sustainable Energy Solutions", icon: "/images/sdg/sdg-7.png" },
  { number: "8", title: "Work & Economic Growth", icon: "/images/sdg/sdg-8.svg" },
];

function StatBlock({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {stats.map((s, i) => (
        <ScrollReveal
          key={s.label}
          delay={i * 0.08}
          className="rounded-2xl border border-border bg-white p-6 sm:p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <div className="text-3xl sm:text-4xl font-bold text-brand">
            <AnimatedCounter value={s.value} />
          </div>
          <div className="mt-3 text-sm text-text-secondary leading-relaxed">
            {s.label}
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}

export default function Impact() {
  return (
    <>
      <PageHero
        title="Impact"
        subtitle="The measured climate and development results of FundCo's two live, SEC-regulated funds — the Clean Energy Local Currency Fund and the Housing Solution Fund."
      />

      <section className="mx-auto max-w-3xl px-6 pt-14 sm:pt-20 text-center">
        <ScrollReveal>
          <p className="text-text-secondary leading-relaxed">
            Every naira mobilised through CeF and HSF is intended to do two
            things at once: deliver risk-adjusted financial returns for
            institutional investors, and produce measurable climate and
            development outcomes on the ground. The figures below are drawn
            directly from each fund&rsquo;s own reporting.
          </p>
        </ScrollReveal>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
          <ScrollReveal>
            <span className="mb-3 inline-block rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-700">
              Clean Energy Local Currency Fund
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand mb-2">
              Climate Impact
            </h2>
            <p className="max-w-2xl text-text-secondary mb-8">
              Emissions and energy-access outcomes from CeF-financed clean
              energy infrastructure across Nigeria.
            </p>
          </ScrollReveal>
          <StatBlock stats={CLIMATE_IMPACT} />

          <ScrollReveal className="mt-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand mb-2">
              Development Impact
            </h2>
            <p className="max-w-2xl text-text-secondary mb-8">
              Jobs and enterprise support generated across CeF&rsquo;s
              portfolio of clean energy projects.
            </p>
          </ScrollReveal>
          <StatBlock stats={DEVELOPMENT_IMPACT} />

          <ScrollReveal className="mt-10 rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm">
            <h3 className="text-base font-semibold text-text mb-2">
              Additionality
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              CeF enables clean energy projects that would not otherwise
              reach financial close in Nigeria&rsquo;s market, due to
              foreign-exchange risk and tenor limitations facing
              dollar-denominated climate finance. By providing local-currency
              capital and mobilising domestic institutional investors, CeF is
              directly aligned with the delivery of Nigeria&rsquo;s
              Nationally Determined Contributions (NDCs) under the Paris
              Agreement.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-14 sm:py-20">
        <ScrollReveal>
          <span className="mb-3 inline-block rounded-full bg-sky-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-sky-700">
            Housing Solution Fund
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand mb-2">
            Housing & Development Impact
          </h2>
          <p className="max-w-2xl text-text-secondary mb-8">
            HSF&rsquo;s progress toward affordable, EDGE-certified housing
            delivery and the jobs its housing-finance activity supports.
          </p>
        </ScrollReveal>
        <StatBlock stats={HSF_IMPACT} />

        <ScrollReveal className="mt-14">
          <h3 className="text-xl font-bold text-brand mb-2">
            SDG Alignment
          </h3>
          <p className="max-w-2xl text-text-secondary mb-8">
            HSF explicitly ties its work to six UN Sustainable Development
            Goals, spanning accessible homeownership, health, gender
            equality, sanitation, sustainable energy, and economic growth.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {HSF_SDGS.map((sdg, i) => (
            <ScrollReveal
              key={sdg.number}
              delay={i * 0.05}
              className="rounded-2xl border border-border bg-surface p-4 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <Image
                src={sdg.icon}
                alt={`SDG ${sdg.number}: ${sdg.title}`}
                width={90}
                height={90}
                className="mx-auto h-14 w-14 sm:h-16 sm:w-16 rounded-lg object-contain"
              />
              <div className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-text-secondary leading-snug">
                {sdg.title}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-brand to-brand-dark text-white">
        <div
          className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl px-6 py-16 sm:py-20 text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Backed by a Real Partner Network
            </h2>
            <p className="max-w-2xl mx-auto text-white/90 mb-8">
              These outcomes are made possible by the trustees, guarantors,
              and institutional collaborators governing both funds.
            </p>
            <Link
              href="/partners"
              className="inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand shadow-lg shadow-black/10 hover:bg-white/90 hover:-translate-y-0.5 transition-all"
            >
              Meet our Partners
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <RelatedLinks />
    </>
  );
}
