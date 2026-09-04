import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "FundCo is a specialized alternative asset manager mobilizing local capital into real assets that lead Nigeria's transition to a low-carbon economy, with a focus on risk-adjusted returns and ESG management.",
};

export default function AboutFundco() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="A specialized alternative asset manager mobilizing local capital in real assets that lead the transition to a low-carbon economy."
        image="/uploads/2021/07/Group-3214.jpg"
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-xl font-medium text-text leading-relaxed mb-6">
          We are a specialized alternative asset manager mobilizing and
          investing local capital in real assets that will lead the
          transition to a low-carbon economy.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          As demand for asset allocation to alternatives continues to
          increase, we see a market where alternatives are becoming more
          valuable relative to other assets, and supply remains
          insufficient.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          We are well positioned to help institutional investors access this
          asset class and deliver risk adjusted returns alongside proactive
          management of environmental, social and governance (ESG)
          considerations.
        </p>
        <p className="text-text-secondary leading-relaxed">
          We do this sustainably in partnership with our development
          partners, thought-leaders in blended finance, infrastructure,
          fintech, and development finance to drive innovation beyond
          conventional asset management.
        </p>
      </section>

      <RelatedLinks />
    </>
  );
}
