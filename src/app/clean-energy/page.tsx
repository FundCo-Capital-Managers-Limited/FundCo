import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Clean Energy",
  description:
    "The Clean Energy Local Currency Fund (CeF) is a live, SEC-regulated, Climate Bonds Certified fund managed by FundCo, mobilising naira capital into Nigeria's energy transition.",
};

export default function CleanEnergy() {
  return (
    <SectorPage
      data={{
        title: "Clean Energy",
        heroImage: "/uploads/2021/08/clean-energy.jpg",
        statusBadge: "SEC Regulated • Climate Bonds Certified",
        marketGapParagraphs: [
          "Nigeria is now the country with the largest number of people without energy access in the world – over 85m or 43%. This number has been growing due to population expansion. Sustainable Development Goal 7 (clean energy access) will not be globally achieved without significant progress in Nigeria.",
        ],
        stats: [
          { value: "85m", label: "People living without access to power in Nigeria" },
          { value: "184m", label: "People population of Nigeria" },
          { value: "$14bn", label: "Spent by Nigerian Businesses on fossil fuel generators" },
        ],
        opportunityParagraphs: [
          "Nigeria is currently the largest economy in Sub-Saharan Africa (GDP of $405 billion) with a population of about 184 million people. The electricity demand (industrial and domestic) is estimated to be about 180,000 Mega Watts (MW). The country however only has an installed capacity of 11,000MW, 8,000MW of which is operational. Out of the available capacity Nigeria generates between 3,000MW to 4,500 MW due to constraints such as unavailability of gas, water shortages and droughts.",
          "The power challenges facing the populace has resulted in increased cost of production, stagnation of businesses and redundancy of workers. A major segment of the Nigerian industrial hubs is powered by generating sets which make use of gasoline, diesel, natural gas or hydrogen. Over the years, the use of generators has resulted in inefficient electricity generation, with over $14billion spent by Nigerian businesses on an annual basis, as well as increasing carbon emissions and pollution of the environment.",
          "The development of off-grid alternatives such as mini-grids and solar systems, used efficiently, would create a $9.2 billion market opportunity and would potentially help Nigeria save c.$4.4billion per annum, in addition to reducing carbon emissions and environmental degradation.",
        ],
        fundHeading: "Clean Energy Local Currency Fund (CeF)",
        fundParagraphs: [
          "The Clean Energy Local Currency Fund (CeF) is a live, SEC-regulated fund managed by FundCo Capital Managers Limited, mobilising domestic naira institutional capital into climate infrastructure across Nigeria and reducing the foreign-exchange risk that has historically stalled local energy projects. CeF is Climate Bonds Certified by the Climate Bonds Initiative and carries a BBB national-scale rating from both GCR Ratings and Agusto & Co., each with a Stable outlook.",
          "CeF operates through the Clean Energy Funding Programme (CEFP), a blended-finance structure delivered in partnership with InfraCredit: InfraCredit provides AAA-rated guarantees, CeF provides subordinated and bridge capital, and pension funds and insurers provide senior debt. Together, this structure crowds in long-term institutional capital that would otherwise sit on the sidelines of climate infrastructure.",
          "CeF's priority sectors are energy access (mini-grids and solar home systems), clean cooking (LPG, biogas and electric cooking), telecommunications infrastructure, transportation (including e-mobility), and agro-processing — the segments of Nigeria's economy most exposed to unreliable, fossil-fuel-dependent power.",
        ],
        ratings: [
          { label: "Climate Bonds Certified", sublabel: "Climate Bonds Initiative" },
          { label: "GCR Ratings: BBB", sublabel: "National scale, Stable outlook" },
          { label: "Agusto & Co.: BBB", sublabel: "National scale, Stable outlook" },
        ],
        impactHeading: "CeF Impact to Date",
        impactStats: [
          { value: "21,000+", label: "tCO2e emissions avoided" },
          { value: "370+", label: "Jobs created" },
          { value: "200+", label: "SMEs supported" },
          { value: "5,000+", label: "New energy connections enabled" },
        ],
        portfolioHeading: "Portfolio Companies",
        portfolioIntro:
          "CeF backs operating companies across energy access, clean cooking, and e-mobility — each addressing a distinct segment of Nigeria's energy transition.",
        portfolioCompanies: [
          {
            name: "Swap Station Mobility",
            logo: "/images/portfolio/swap-station-mobility.png",
            sector: "E-Mobility",
            blurb:
              "Battery-swap infrastructure for electric commercial fleets and logistics (2W/3W), delivering zero-downtime energy through an AssetCo + PowerCo model. FundCo is Swap Station Mobility's infrastructure partner.",
            websiteUrl: "https://swapstationmobility.com",
          },
          {
            name: "Electrify Microgrid",
            logo: "/images/portfolio/electrify-microgrid.svg",
            sector: "Mini-Grids",
            blurb:
              "Develops and operates mini-grid power generation and distribution for underserved, off-grid Nigerian communities, extending reliable electricity beyond the national grid.",
            websiteUrl: "https://electrifymicrogrid.ng",
          },
          {
            name: "GroSolar",
            logo: "/images/portfolio/grosolar.svg",
            sector: "Solar Home Systems",
            blurb:
              "Subscription-based solar-as-a-service that removes the upfront cost barrier to solar power for households and small businesses.",
            websiteUrl: "https://grosolar.co",
          },
          {
            name: "E-Mobilite",
            logo: "/images/portfolio/e-mobilite.png",
            sector: "E-Mobility",
            blurb:
              "Owns, finances, and operates electric bicycles, tricycles, and four-wheel EVs across Nigeria on lease and hire-purchase terms.",
            websiteUrl: "https://e-mobilite.ng",
          },
          {
            name: "Regenloop",
            logo: "/images/portfolio/regenloop.png",
            sector: "Clean Cooking",
            blurb:
              "Converts organic and agricultural waste into biogas and clean energy, turning a waste-management problem into a distributed clean-energy source.",
            websiteUrl: "https://regenloop.ng",
          },
        ],
        websiteUrl: "https://cleanenergyfund.ng",
        related: {
          title: "Affordable Housing",
          blurb:
            "Nigeria's population is forecast to grow at 2.6% per annum. As the population growth rate increases…",
          href: "/affordable-housing",
        },
      }}
    />
  );
}
