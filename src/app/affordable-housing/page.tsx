import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Affordable Housing",
  description:
    "The Housing Solution Fund (HSF) is Nigeria's first privately managed housing-focused REIT, a live SEC-registered vehicle managed by FundCo, financing affordable, EDGE-certified housing.",
};

export default function AffordableHousing() {
  return (
    <SectorPage
      data={{
        title: "Affordable Housing",
        heroImage: "/uploads/2021/08/housing.jpg",
        statusBadge: "SEC-Registered REIT • SEC/REIT/HSF/2021",
        marketGapParagraphs: [
          "Nigeria's population is forecast to grow at 2.6% per annum. As the population growth rate increases, house prices appreciates, which puts a strain on housing demand and the need for affordable housing. Thus, widening the supply gap, as new supply is needed to house the growth of the population. The share of urban population as a percentage of the total population in Nigeria is 50.34%.",
        ],
        stats: [
          { value: "2.6%", label: "Nigeria's Population Growth Forecast" },
          { value: "50.34%", label: "Urban population as a share of the total population" },
          { value: "20m", label: "Housing Unit deficit" },
        ],
        opportunityParagraphs: [
          "Rapid urbanisation is placing huge demands on the retail sector, infrastructure, energy sources, services, job creation, climate and environment which is a key driver for the real estate sector as it creates demand for properties in urban areas as more people relocate to urban centres. Thus affording more people (especially the middle-low income class) the opportunity to buy homes and access funds for affordable housing.",
          "PwC estimates the housing deficit to be about 20 million units. By 2050, the UN estimates that 68% of the population will be living in cities; this translates into an annual housing requirement over the coming decades of at least 700,000 units just to keep up with growing demand and urban migration. UN also projects that by 2050, Nigeria would have a total of 189 million urban dwellers.",
          "The housing sector has a significant impact on emissions, particularly from residential energy usage throughout the lifetime of the buildings, and the carbon intensity of the materials used in construction. The lack of long-term housing finance, difficulties with property registration, titling and the cost and time of foreclosing were listed as the major bottleneck for the development of the housing market.",
          "According to a PwC Report, Nigeria's housing market is estimated to worth about NGN5.9 trillion and is projected to grow by 22% to reach N7.2 trillion by 2024. Nigeria has over 41 million households with 75% of them still depending on rented apartments for housing. Nigeria would need to provide about 4.9 million standard housing units yearly to address the housing deficit and housing needs over the next 10 years.",
        ],
        fundHeading: "Housing Solution Fund (HSF)",
        fundParagraphs: [
          "The Housing Solution Fund (HSF) is Nigeria's first privately managed housing-focused Real Estate Investment Trust (REIT), registered with the Securities & Exchange Commission (SEC Registration: SEC/REIT/HSF/2021). FundCo Capital Managers Limited is HSF's SEC-authorised fund manager.",
          "HSF unlocks affordable and accessible finance for sustainable housing delivery by combining long-dated affordable home loans, with tenures of up to 25 years, with developer offtake commitments. Capital raised is deployed into EDGE-certified (green-building) housing developments, aligning affordability with environmental performance.",
          "By mobilising long-term local capital, HSF gives homebuyers access to affordable mortgage finance while enabling developers to access sustainable construction financing from the debt capital markets — closing the gap between housing demand and housing supply. HSF completed a Series 1 issuance under its NGN100 billion debt programme in December 2023, and continues to raise capital toward its target of enabling over 10,000 new homes, at competitive, risk-adjusted returns for investors.",
        ],
        ratings: [
          { label: "SEC-Registered REIT", sublabel: "SEC/REIT/HSF/2021" },
          { label: "EDGE-Certified Housing", sublabel: "Green building standard" },
        ],
        impactHeading: "HSF Track Record",
        impactStats: [
          { value: "10,000+", label: "New homes targeted" },
          { value: "₦2.12B", label: "Total capital raised to date" },
        ],
        websiteUrl: "https://housingsolutionfund.ng",
        related: {
          title: "Clean Energy",
          blurb:
            "Nigeria is now the country with the largest number of people without energy access in the world – over 85m or 43%…",
          href: "/clean-energy",
        },
      }}
    />
  );
}
