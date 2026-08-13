import Image from "next/image";
import Link from "next/link";
import PageHero from "./PageHero";
import StatCard from "./StatCard";
import RelatedLinks from "./RelatedLinks";

export type SectorStat = { value: string; label: string };

export type SectorPageData = {
  title: string;
  heroImage: string;
  marketGapParagraphs: string[];
  stats: SectorStat[];
  opportunityParagraphs: string[];
  fundHeading: string;
  fundParagraphs: string[];
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
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand mb-4">
          Market Gap
        </h2>
        {data.marketGapParagraphs.map((p, i) => (
          <p key={i} className="text-text-secondary leading-relaxed mb-4">
            {p}
          </p>
        ))}

        <div className="grid gap-5 sm:gap-6 sm:grid-cols-3 my-10">
          {data.stats.map((s) => (
            <StatCard key={s.label} value={s.value} label={s.label} />
          ))}
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-brand mb-4 mt-14">
          Market Opportunity
        </h2>
        {data.opportunityParagraphs.map((p, i) => (
          <p key={i} className="text-text-secondary leading-relaxed mb-4">
            {p}
          </p>
        ))}

        <h2 className="text-2xl sm:text-3xl font-bold text-brand mb-4 mt-14">
          {data.fundHeading}
        </h2>
        {data.fundParagraphs.map((p, i) => (
          <p key={i} className="text-text-secondary leading-relaxed mb-4">
            {p}
          </p>
        ))}

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

      <section className="mx-auto max-w-5xl px-6 pb-14 sm:pb-16">
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
      </section>

      <RelatedLinks />
    </>
  );
}
