import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";

export const metadata: Metadata = { title: "Clean Energy | FundCo" };

export default function CleanEnergy() {
  return (
    <SectorPage
      data={{
        title: "Clean Energy",
        heroImage: "/uploads/2021/08/clean-energy.jpg",
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
        fundHeading: "Our Approach",
        fundParagraphs: [
          "In collaboration with our development partners we are developing a clean energy fund with a mission to confront climate change by accelerating the flow of private capital in domestic currency into energy projects and climate-smart technologies that facilitate Nigeria's energy transition towards clean energy sources and energy efficiency that reduce carbon emissions and achieve less expensive, more reliable sources of energy while creating jobs and supporting local economic growth.",
          "A local currency fund dedicated to clean energy projects will act as a catalyst for private sector participation in climate and sustainable infrastructure finance by attracting investments from pension funds, insurance firms and other long-term institutional investors into eligible climate change adaptation projects linked to National Determined Contributions (NDCs), deepening the local capital markets with a new climate-compliant infrastructure asset and facilitating access to long term local currency.",
          "Our aim is to mobilise blended finance to attract private investments that will support the country in delivering a more ambitious Paris aligned NDCs.",
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
