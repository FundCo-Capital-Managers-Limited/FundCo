import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import RelatedLinks from "@/components/RelatedLinks";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the leadership team at FundCo Capital Managers, a multidisciplinary group of professionals across investment management, advisory, operations, compliance, and finance.",
};

const TEAM = [
  {
    name: "Abiodun Oni",
    role: "CEO",
    image: "/uploads/2021/07/Abiodun-Oni.jpg",
    bio: "Abiodun led Tesla's energy business development across West Africa, and concluded the first commercial energy projects for Tesla in the region.",
  },
  {
    name: "Aderemi Oguntoye",
    role: "Chairman of the Board",
    image: "/uploads/2026/04/aDEREMI-HEADSHOT-1.jpg",
    bio: "Prior to assuming his current role, Aderemi practiced with one of Nigeria's leading law firms before joining Forte Oil Plc (formerly African Petroleum).",
  },
  {
    name: "Maurice Okoli",
    role: "Director",
    image: "/uploads/2021/06/Maurice-Okoli-2.jpg",
    bio: "Prior to that, he was a key member of Deutsche Bank's International Capital Markets Group where he headed the Fixed Income Total Return Swaps unit.",
  },
  {
    name: "Yewande Senbore",
    role: "Non-Executive Director",
    image: "/uploads/2025/10/Y-Senbore.jpg",
    bio: "Assisted entities access much needed capital in excess of $15billion over the last 10 years, for project development and growth through direct capital raising.",
  },
  {
    name: "Fiona Robertson-Etete",
    role: "Non-Executive Director",
    image: "/uploads/2021/09/Fiona-Robertson-1.jpg",
    bio: "She further held a position as the project leader at the 'Community Opportunity' for more than two years, and went on to work as a technical advisor.",
  },
  {
    name: "Olufunmilola Abraham",
    role: "ACIS – Compliance Officer",
    image: "/uploads/2026/07/WhatsApp-Image-2026-07-03-at-14.42.27-300x293.jpeg",
    bio: "She is also a Chartered Secretary and Administrator, possessing significant experience advising private and international clientele on a wide variety of transactions.",
  },
];

export default function Team() {
  return (
    <>
      <PageHero
        title="Our Team"
        subtitle="Driven by expertise, integrity, and innovation, FundCo Capital Managers is powered by a multidisciplinary team committed to delivering exceptional financial and investment solutions across sectors."
        image="/uploads/2021/07/Our-Team.jpg"
      />

      <section className="mx-auto max-w-4xl px-6 py-14 text-center">
        <h2 className="text-2xl font-bold text-brand mb-4">
          Built by People. Driven by Excellence.
        </h2>
        <p className="text-text-secondary leading-relaxed mb-4">
          At FundCo Capital Managers, our success is powered by a diverse
          team of experienced professionals committed to delivering
          exceptional financial and investment solutions. With a growing
          team of 45 professionals across investment management, advisory,
          operations, compliance, finance, and client services, we combine
          deep industry expertise with a shared commitment to excellence,
          integrity, and innovation.
        </p>
        <p className="text-text-secondary leading-relaxed">
          Our collaborative approach enables us to navigate complex
          financial landscapes while delivering tailored solutions that meet
          the evolving needs of our clients and stakeholders.
        </p>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold text-brand text-center mb-2">
            Meet Our Key Players
          </h2>
          <p className="mx-auto max-w-2xl text-center text-text-secondary mb-12">
            Our leadership team brings together decades of experience across
            finance, investment management, legal advisory, business
            strategy, and corporate governance.
          </p>

          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="group rounded-2xl border border-border bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-64 w-full bg-surface overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-text">{member.name}</h3>
                  <p className="text-sm text-brand font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks />
    </>
  );
}
