import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Agriculture",
  description:
    "FundCo supports sustainable financing, climate-smart infrastructure, and technology-enabled farming solutions to improve productivity, food security, and rural economic development across Nigeria's agricultural sector.",
};

export default function Agriculture() {
  return (
    <SectorPage
      data={{
        title: "Agriculture",
        heroImage: "/uploads/2021/07/Rectangle-9-1.jpg",
        marketGapParagraphs: [
          "Nigeria's agricultural sector remains one of the largest contributors to employment and economic activity, yet significant gaps still exist across productivity, infrastructure, financing, mechanization, and access to sustainable farming solutions. As population growth continues to increase food demand, there is a growing need for scalable investments that strengthen agricultural value chains and improve long-term food security.",
        ],
        stats: [
          { value: "70m+", label: "Agricultural land available across Nigeria for cultivation and food production" },
          { value: "40%+", label: "Contribution of agriculture to employment across Nigeria's workforce" },
          { value: "$10bn+", label: "Estimated annual market opportunity across Nigeria's agricultural value chain and agro-processing ecosystem" },
        ],
        opportunityParagraphs: [
          "Nigeria's agricultural sector remains one of the largest contributors to economic activity and employment across Sub-Saharan Africa, with millions of households depending on farming and agribusiness for their livelihoods. Despite the sector's significant potential, agricultural productivity continues to face major constraints including limited mechanization, inadequate infrastructure, poor access to financing, post-harvest losses, and insufficient access to modern farming technologies.",
          "As population growth and urbanization continue to increase food demand, the need for sustainable agricultural investment, efficient value chains, and climate-resilient farming solutions has become increasingly important. Across rural communities and agricultural clusters, there remains a substantial opportunity to improve productivity, strengthen food systems, and expand market access through innovative financing and infrastructure development.",
          "The challenges facing the agricultural sector have contributed to reduced productivity, food insecurity, supply chain inefficiencies, and increased operational costs for farmers and agribusiness operators. A significant portion of agricultural production in Nigeria still relies on traditional farming practices with limited access to irrigation systems, storage facilities, mechanized equipment, and clean energy-powered infrastructure.",
          "The continued development of sustainable agriculture, agro-processing infrastructure, climate-smart farming solutions, and technology-enabled agricultural systems presents a significant market opportunity across Nigeria's agricultural ecosystem.",
          "Strategic investments in mechanization, irrigation, storage infrastructure, clean-energy-powered productive assets, and rural supply chain development have the potential to improve productivity, reduce post-harvest losses, strengthen food security, and unlock inclusive economic growth across underserved communities.",
          "By improving access to financing, infrastructure, and modern agricultural technologies, Nigeria's agricultural sector can significantly increase operational efficiency, expand market access, and support long-term environmental and economic sustainability across the value chain.",
        ],
        fundHeading: "Our Approach",
        fundParagraphs: [
          "In collaboration with strategic development and ecosystem partners, we are supporting initiatives focused on transforming Nigeria's agricultural sector through sustainable financing, climate-smart infrastructure, and technology-enabled farming solutions designed to improve productivity, food security, and rural economic development.",
          "By facilitating access to productive-use assets, agricultural infrastructure, clean-energy-powered solutions, and innovative financing models, these initiatives aim to strengthen agricultural value chains while improving operational efficiency and market access for farmers, cooperatives, and agribusiness operators across underserved communities.",
          "A sustainable agriculture investment ecosystem has the potential to catalyze greater private sector participation within the agricultural sector by attracting institutional capital into scalable agribusiness projects, agro-processing infrastructure, rural supply chain development, and climate-resilient farming systems.",
          "Our objective is to support long-term agricultural transformation by mobilizing blended finance and strategic investments that promote inclusive economic growth, environmental sustainability, improved livelihoods, and long-term resilience across Nigeria's agricultural ecosystem.",
        ],
        websiteUrl: "https://agronomie.ng",
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
