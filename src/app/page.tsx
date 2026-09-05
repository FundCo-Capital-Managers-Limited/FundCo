import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HealthcareIcon from "@/components/icons/HealthcareIcon";
import StatTicker from "@/components/StatTicker";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import LogoMarquee from "@/components/LogoMarquee";

export const metadata: Metadata = {
  description:
    "FundCo Capital Managers manages two live, SEC-regulated funds — the Clean Energy Local Currency Fund and the Housing Solution Fund — and a six-company portfolio across clean energy, housing, and agriculture in Nigeria.",
};

const SECTORS = [
  { label: "Agriculture", icon: "/uploads/2021/07/Agric.svg" },
  { label: "Housing", icon: "/uploads/2021/07/housing.svg" },
  { label: "Healthcare", icon: null },
  { label: "Energy", icon: "/uploads/2021/07/Energy.svg" },
  { label: "Education", icon: "/uploads/2021/07/edu.svg" },
];

const RATINGS = [
  { label: "Agusto & Co.", icon: "/uploads/2024/03/Agusto.svg" },
  { label: "GCR Ratings", icon: "/uploads/2024/03/GCR.svg" },
];

const TICKER_ITEMS = [
  { value: "SEC Regulated", label: "Clean Energy Local Currency Fund" },
  { value: "Climate Bonds Certified", label: "Clean Energy Local Currency Fund" },
  { value: "21,000+ tCO2e", label: "Emissions avoided" },
  { value: "10,000+", label: "Homes targeted by the Housing Solution Fund" },
  { value: "₦2.12B", label: "Raised to date by the Housing Solution Fund" },
  { value: "6", label: "Portfolio companies across energy, housing & agriculture" },
];

const PORTFOLIO_LOGOS = [
  { name: "Swap Station Mobility", src: "/images/portfolio/swap-station-mobility.png", href: "https://swapstationmobility.com" },
  { name: "Electrify Microgrid", src: "/images/portfolio/electrify-microgrid.svg", href: "https://electrifymicrogrid.ng" },
  { name: "GroSolar", src: "/images/portfolio/grosolar.svg", href: "https://grosolar.co" },
  { name: "E-Mobilite", src: "/images/portfolio/e-mobilite.png", href: "https://e-mobilite.ng" },
  { name: "Regenloop", src: "/images/portfolio/regenloop.png", href: "https://regenloop.ng" },
  { name: "Agronomie", src: "/images/portfolio/agronomie.png", href: "https://agronomie.ng" },
];

const HEADLINE_STATS = [
  { value: "2", label: "Live, SEC-regulated funds" },
  { value: "6", label: "Portfolio companies" },
  { value: "21,000+", label: "tCO2e emissions avoided (CeF)" },
  { value: "10,000+", label: "Homes targeted (HSF)" },
];

export default function Home() {
  return (
    <>
      <StatTicker items={TICKER_ITEMS} />

      <section className="relative overflow-hidden bg-gradient-to-br from-brand via-brand to-brand-dark text-white">
        <Image
          src="/uploads/2024/03/wepik-export-20240318130300JpbI-1-scaled.jpeg"
          alt=""
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand/70 via-brand/55 to-brand-dark/80" />
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-white/5 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6 pt-20 sm:pt-24 md:pt-32">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-semibold text-white/90 backdrop-blur-sm ring-1 ring-white/25 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Two Live, SEC-Regulated Funds
          </div>
          <h1 className="max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Financing Nigeria&rsquo;s <span className="text-emerald-300">Low-Carbon</span> Future
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/90 leading-relaxed">
            FundCo Capital Managers is a specialised alternative asset
            manager mobilising and investing domestic capital in real assets
            that lead Nigeria&rsquo;s transition to a low-carbon economy. We
            manage two live, rated and regulated funds — the Clean Energy
            Local Currency Fund and the Housing Solution Fund — alongside a
            growing portfolio of operating companies across energy, housing
            and agriculture.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
            <Link
              href="/about-fundco"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand shadow-lg shadow-black/10 hover:bg-white/90 hover:-translate-y-0.5 transition-all"
            >
              About Us
            </Link>
            <Link
              href="/funds"
              className="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 hover:-translate-y-0.5 transition-all"
            >
              Our Funds
            </Link>
            <a
              href="/docs/FundCo-Fact-Sheet-July-2021.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 hover:-translate-y-0.5 transition-all"
            >
              Download Factsheet
            </a>
          </div>
        </div>

        <div className="relative mx-auto mt-16 grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-t-2xl border-t border-white/15 bg-white/10 sm:mt-20 lg:grid-cols-4">
          {HEADLINE_STATS.map((s) => (
            <div key={s.label} className="bg-brand-dark/40 px-4 py-6 text-center backdrop-blur-sm sm:px-6 sm:py-8">
              <div className="text-2xl sm:text-3xl font-bold text-white">
                <AnimatedCounter value={s.value} />
              </div>
              <div className="mt-2 text-xs sm:text-sm text-white/75 leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-border bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-text-secondary">
            Our Portfolio Companies
          </p>
          <LogoMarquee logos={PORTFOLIO_LOGOS} />
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-6 sm:py-8 text-center">
          <p className="text-sm sm:text-base text-text-secondary">
            FundCo is authorised and registered by the Nigeria Securities
            &amp; Exchange Commission to conduct the business of a
            fund/portfolio manager.
          </p>
        </div>
      </section>

      <ScrollReveal as="section" className="mx-auto max-w-4xl px-6 py-14 sm:py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand mb-4">
          Our Mission
        </h2>
        <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
          Our mission is to lead the effort to diversify from traditional
          mainstream assets to alternative asset classes that accelerate the
          transition to a low-carbon economy, creating jobs and supporting
          local economic growth.
        </p>
      </ScrollReveal>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-20 text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand mb-2">
              Target Sectors
            </h2>
            <p className="mx-auto max-w-2xl text-text-secondary mb-10">
              Our investments will directly address key sustainability
              challenges and provide innovative solutions that seek a positive
              impact while also achieving strong risk-adjusted financial
              returns in the following market segments:
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-5">
            {SECTORS.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.06}>
                <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-white p-5 sm:p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-brand/40 transition-all duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10">
                    {s.icon ? (
                      <Image src={s.icon} alt={s.label} width={26} height={26} />
                    ) : (
                      <HealthcareIcon />
                    )}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-text">
                    {s.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14 sm:py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand mb-4">
          Our Investment Approach
        </h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          Our investment approach holds great potential to deliver the three
          pillars of the SDGs: economic, environmental and social
          sustainability.
        </p>
        <Link
          href="/investment-approach"
          className="inline-block rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark hover:shadow-md hover:-translate-y-0.5 transition-all"
        >
          Investment Approach
        </Link>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-20 text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand mb-2">
              Our Ratings
            </h2>
            <p className="mx-auto max-w-2xl text-text-secondary mb-10">
              Ratings and certifications assigned to the Clean Energy Local
              Currency Fund, one of the two live funds FundCo manages.
            </p>
          </ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {RATINGS.map((r, i) => (
              <ScrollReveal key={r.label} delay={i * 0.1}>
                <div className="rounded-2xl border border-border bg-white p-4 sm:p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <Image
                    src={r.icon}
                    alt={r.label}
                    width={310}
                    height={75}
                    className="h-16 w-auto sm:h-20"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-8 text-sm text-text-secondary">
            CeF is also Climate Bonds Certified by the Climate Bonds
            Initiative, with both agencies assigning a BBB national-scale
            rating on a Stable outlook.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14 sm:py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand mb-4">
          Latest News
        </h2>
        <p className="text-text-secondary mb-6">
          Stay up to date with FundCo&rsquo;s latest announcements and
          insights.
        </p>
        <Link
          href="/news"
          className="inline-block rounded-full border border-brand px-6 py-3 text-sm font-semibold text-brand hover:bg-brand hover:text-white hover:-translate-y-0.5 transition-all"
        >
          View News
        </Link>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-brand to-brand-dark text-white">
        <Image
          src="/uploads/2021/07/Our-Team-1024x459.jpg"
          alt=""
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand/65 to-brand-dark/70" />
        <div
          className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl px-6 py-16 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Meet our Team
          </h2>
          <p className="max-w-2xl mx-auto text-white/90 mb-8">
            Driven by expertise, integrity, and innovation, FundCo is powered
            by a multidisciplinary team committed to delivering exceptional
            financial and investment solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              href="/team"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand shadow-lg shadow-black/10 hover:bg-white/90 hover:-translate-y-0.5 transition-all"
            >
              Meet our Team
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 hover:-translate-y-0.5 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
