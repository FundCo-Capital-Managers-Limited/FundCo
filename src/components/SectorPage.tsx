import Image from "next/image";
import Link from "next/link";
import PageHero from "./PageHero";
import StatCard from "./StatCard";
import RelatedLinks from "./RelatedLinks";
import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";
import PortfolioGrid, { type PortfolioCompany } from "./PortfolioGrid";

export type SectorStat = { value: string; label: string };
export type SectorBadge = { label: string; sublabel?: string };

export type SectorPageData = {
  title: string;
  heroImage: string;
  /** Short status pill shown under the hero, e.g. "SEC Regulated & Climate Bonds Certified" */
  statusBadge?: string;
  marketGapParagraphs: string[];
  stats: SectorStat[];
  opportunityParagraphs: string[];
  fundHeading: string;
  fundParagraphs: string[];
  /** Rating / certification badges for a live, regulated fund */
  ratings?: SectorBadge[];
  /** Headline impact metrics rendered as animated, count-up stats */
  impactHeading?: string;
  impactStats?: SectorStat[];
  /** Named operating companies under this fund/sector */
  portfolioHeading?: string;
  portfolioIntro?: string;
  portfolioCompanies?: PortfolioCompany[];
  websiteUrl: string;
  related: { title: string; blurb: string; href: string };
};

export default function SectorPage({ data }: { data: SectorPageData }) {
  return (
    <>
      <PageHero title={data.title} />

      <section className="relative h-56 sm:h-72 md:h-96 w-full overflow-hidden">
        <Image
          src={data.heroImage}
          alt={data.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        {data.statusBadge && (
          <div className="absolute bottom-5 left-1/2 w-full -translate-x-1/2 px-6 sm:bottom-6">
            <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs sm:text-sm font-semibold text-brand shadow-lg backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              {data.statusBadge}
            </div>
          </div>
        )}
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand mb-4">
            Market Gap
          </h2>
          {data.marketGapParagraphs.map((p, i) => (
            <p key={i} className="text-text-secondary leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </ScrollReveal>

        <div className="grid gap-5 sm:gap-6 sm:grid-cols-3 my-10">
          {data.stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.08}>
              <StatCard value={s.value} label={s.label} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand mb-4 mt-14">
            Market Opportunity
          </h2>
          {data.opportunityParagraphs.map((p, i) => (
            <p key={i} className="text-text-secondary leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand mb-4 mt-14">
            {data.fundHeading}
          </h2>
          {data.fundParagraphs.map((p, i) => (
            <p key={i} className="text-text-secondary leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </ScrollReveal>

        {data.ratings && data.ratings.length > 0 && (
          <ScrollReveal className="mt-6 flex flex-wrap gap-3">
            {data.ratings.map((r) => (
              <div
                key={r.label}
                className="rounded-xl border border-border bg-surface px-4 py-3 text-sm"
              >
                <div className="font-semibold text-brand">{r.label}</div>
                {r.sublabel && (
                  <div className="text-xs text-text-secondary">{r.sublabel}</div>
                )}
              </div>
            ))}
          </ScrollReveal>
        )}

        <div className="mt-8">
          <p className="text-sm text-text-secondary mb-3">
            For more information:
          </p>
          <a
            href={data.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            Visit website
          </a>
        </div>
      </section>

      {data.impactStats && data.impactStats.length > 0 && (
        <section className="bg-brand-dark text-white">
          <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
            <ScrollReveal>
              <h2 className="text-center text-2xl sm:text-3xl font-bold mb-10">
                {data.impactHeading ?? "Impact to Date"}
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
              {data.impactStats.map((s, i) => (
                <ScrollReveal key={s.label} delay={i * 0.08}>
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold">
                      <AnimatedCounter value={s.value} />
                    </div>
                    <div className="mt-2 text-xs sm:text-sm text-white/75 leading-relaxed">
                      {s.label}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.portfolioCompanies && data.portfolioCompanies.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand mb-3 text-center">
              {data.portfolioHeading ?? "Portfolio Companies"}
            </h2>
            {data.portfolioIntro && (
              <p className="mx-auto max-w-2xl text-center text-text-secondary mb-10">
                {data.portfolioIntro}
              </p>
            )}
          </ScrollReveal>
          <PortfolioGrid companies={data.portfolioCompanies} />
        </section>
      )}

      <section className="mx-auto max-w-5xl px-6 pb-14 sm:pb-16">
        <ScrollReveal>
          <Link
            href={data.related.href}
            className="block rounded-2xl border border-border bg-surface p-6 sm:p-8 hover:border-brand hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-brand">
              {data.related.title}
            </h3>
            <p className="mt-2 text-text-secondary">{data.related.blurb}</p>
            <span className="mt-3 inline-block text-sm font-semibold text-brand">
              Learn more &rarr;
            </span>
          </Link>
        </ScrollReveal>
      </section>

      <RelatedLinks />
    </>
  );
}
