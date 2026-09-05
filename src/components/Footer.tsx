import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Image
            src="/images/fundco-logo-deep.png"
            alt="FundCo Capital Managers"
            width={165}
            height={48}
            className="bg-white rounded-lg px-3 py-2"
          />
          <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xs">
            FundCo is authorised and registered by the Nigeria Securities &
            Exchange Commission to conduct the business of a fund/portfolio
            manager.
          </p>
          <div className="flex gap-4 text-white/70 mt-6">
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
              Twitter
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
            Company
          </h3>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li>
              <Link href="/about-fundco" className="hover:text-white transition-colors">
                Who We Are
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-white transition-colors">
                Our Team
              </Link>
            </li>
            <li>
              <Link href="/investment-approach" className="hover:text-white transition-colors">
                Investment Approach
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
            What We Do
          </h3>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li>
              <Link href="/funds" className="hover:text-white transition-colors">
                Funds Overview
              </Link>
            </li>
            <li>
              <Link href="/impact" className="hover:text-white transition-colors">
                Impact
              </Link>
            </li>
            <li>
              <Link href="/partners" className="hover:text-white transition-colors">
                Partners
              </Link>
            </li>
            <li>
              <Link href="/agriculture" className="hover:text-white transition-colors">
                Agriculture
              </Link>
            </li>
            <li>
              <Link href="/clean-energy" className="hover:text-white transition-colors">
                Clean Energy
              </Link>
            </li>
            <li>
              <Link href="/affordable-housing" className="hover:text-white transition-colors">
                Affordable Housing
              </Link>
            </li>
          </ul>

          <h3 className="text-sm font-semibold uppercase tracking-wide mb-4 mt-6">
            Legal &amp; Governance
          </h3>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="hover:text-white transition-colors">
                Disclaimer
              </Link>
            </li>
            <li>
              <Link
                href="/whistleblowing-policy"
                className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-white/80 transition-colors"
              >
                Whistleblowing Policy
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H9M17 7v8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
            Contact Us
          </h3>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li>Plot 1610, Adeola Hopewell Street,</li>
            <li>Victoria Island, Lagos.</li>
            <li className="pt-1">
              <a href="tel:+23401-4545361" className="hover:text-white transition-colors">
                +234 01-4545361
              </a>
            </li>
            <li>
              <a href="mailto:info@fundco.ng" className="hover:text-white transition-colors">
                info@fundco.ng
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()}, All Rights Reserved, FundCo Capital
        Managers
      </div>
    </footer>
  );
}
