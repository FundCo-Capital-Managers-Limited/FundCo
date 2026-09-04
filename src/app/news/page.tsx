import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "News",
  description:
    "The latest announcements, insights, and updates from FundCo Capital Managers.",
};

export default function News() {
  return (
    <>
      <PageHero title="Latest News" />

      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="text-xl font-semibold text-text mb-3">
          No news articles yet
        </h2>
        <p className="text-text-secondary">
          Check back soon for the latest announcements and insights from
          FundCo.
        </p>
      </section>

      <RelatedLinks />
    </>
  );
}
