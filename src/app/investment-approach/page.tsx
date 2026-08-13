import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = { title: "Investment Approach | FundCo" };

export default function InvestmentApproach() {
  return (
    <>
      <PageHero
        title="Investment Approach"
        subtitle="Identifying, structuring and connecting real assets to the domestic institutional market through our investment funds."
        image="/uploads/2021/07/Group-3200.jpg"
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-text-secondary leading-relaxed mb-4">
          There is a growing market for small and medium-sized businesses in
          the real sector, providing accessible and affordable essential
          services to unserved or under-served markets (non-consumption),
          with a potential to scale. These real sector companies are
          creating new markets, with long term viability, a strong potential
          to reduce the impact of climate change and promote local economic
          growth because they are creating jobs, promoting gender diversity
          and reducing poverty.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          Our investment strategy is to identify, structure, aggregate and
          connect these real assets within our target sectors to the
          domestic institutional market through our investment funds.
        </p>
        <p className="text-text-secondary leading-relaxed mb-4">
          As the largest source of long-term local investment capital, the
          domestic institutional market has an especially important role to
          play as an effective investment tool to finance Africa&rsquo;s
          transition to a low-carbon economy.
        </p>
        <p className="text-text-secondary leading-relaxed">
          Our investment approach holds great potential to deliver the three
          pillars of the SDGs: economic, environmental and social
          sustainability.
        </p>
      </section>

      <RelatedLinks />
    </>
  );
}
