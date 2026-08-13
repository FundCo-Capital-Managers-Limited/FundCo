import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = { title: "Whistleblowing Policy | FundCo" };

export default function WhistleblowingPolicy() {
  return (
    <>
      <PageHero
        breadcrumb="Governance"
        title="Whistleblowing Policy"
        subtitle="We are committed to the highest standards of openness, integrity and accountability. Our Whistleblowing Policy gives everyone a safe, confidential route to raise a genuine concern."
        image="/uploads/2021/07/Group-3200.jpg"
      />

      <section className="mx-auto max-w-3xl px-6 py-14 sm:py-16">
        <h2 className="text-xl sm:text-2xl font-bold text-brand mb-4">
          Our Commitment
        </h2>
        <p className="text-text-secondary leading-relaxed mb-4">
          FundCo Capital Managers is committed to conducting its business
          with honesty and integrity, and expects all staff, directors,
          consultants and third parties working on its behalf to maintain
          the same standards. We encourage a culture where employees and
          stakeholders feel able to raise concerns about malpractice,
          wrongdoing, or risk without fear of reprisal.
        </p>

        <h2 className="text-xl sm:text-2xl font-bold text-brand mb-4 mt-10">
          What You Can Report
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary mb-4">
          <li>Financial malpractice, fraud, or corruption</li>
          <li>Breaches of legal or regulatory obligations</li>
          <li>Conflicts of interest not properly disclosed</li>
          <li>Danger to health, safety, or the environment</li>
          <li>Unethical conduct or abuse of authority</li>
          <li>Any attempt to conceal any of the above</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-bold text-brand mb-4 mt-10">
          How to Raise a Concern
        </h2>
        <p className="text-text-secondary leading-relaxed mb-4">
          Concerns can be raised in confidence through our compliance
          function. We treat every report seriously, investigate promptly,
          and protect the identity of the person raising the concern to the
          fullest extent possible under the policy.
        </p>
        <p className="text-text-secondary leading-relaxed">
          Read the full policy document for details on scope, the reporting
          process, investigation procedure, and the protections available
          to whistleblowers.
        </p>

        <div className="mt-10 rounded-2xl border border-border bg-surface p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-text">
              FundCo Whistleblowing Policy
            </h3>
            <p className="text-sm text-text-secondary mt-1">
              PDF document &middot; official policy
            </p>
          </div>
          <a
            href="/uploads/2026/04/Fundco-Whistleblowing-Policy-1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            Download Policy
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-brand mb-4 mt-10">
          Contact
        </h2>
        <p className="text-text-secondary leading-relaxed">
          For questions about this policy or to raise a concern directly,
          contact us by email at{" "}
          <a href="mailto:info@fundco.ng" className="text-brand">
            info@fundco.ng
          </a>
        </p>
      </section>

      <RelatedLinks />
    </>
  );
}
