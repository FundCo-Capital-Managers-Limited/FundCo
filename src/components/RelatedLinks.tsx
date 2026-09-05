import Link from "next/link";

const LINKS = [
  { href: "/funds", label: "Our Funds" },
  { href: "/impact", label: "Impact" },
  { href: "/partners", label: "Partners" },
  { href: "/about-fundco", label: "About us" },
  { href: "/team", label: "Team" },
  { href: "/investment-approach", label: "Investment Approach" },
];

export default function RelatedLinks() {
  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-12">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-text-secondary mb-4">
          You might also be interested in
        </h2>
        <div className="flex flex-wrap gap-3 sm:gap-4">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium text-text shadow-sm hover:border-brand hover:text-brand hover:shadow-md transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
