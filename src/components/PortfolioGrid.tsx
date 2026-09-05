import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export type PortfolioCompany = {
  name: string;
  logo: string;
  sector: string;
  blurb: string;
  websiteUrl: string;
};

export default function PortfolioGrid({
  companies,
}: {
  companies: PortfolioCompany[];
}) {
  return (
    <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {companies.map((c, i) => (
        <ScrollReveal key={c.name} delay={i * 0.06}>
          <a
            href={c.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
          >
            <div className="mb-4 flex h-12 items-center">
              <Image
                src={c.logo}
                alt={c.name}
                width={140}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </div>
            <span className="mb-2 inline-block w-fit rounded-full bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand">
              {c.sector}
            </span>
            <h3 className="text-base font-semibold text-text">{c.name}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
              {c.blurb}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
              Visit website
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-0.5">
                <path d="M7 17L17 7M17 7H9M17 7v8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </ScrollReveal>
      ))}
    </div>
  );
}
