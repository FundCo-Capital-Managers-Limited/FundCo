import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import RelatedLinks from "@/components/RelatedLinks";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact | FundCo" };

export default function Contact() {
  return (
    <>
      <PageHero
        title="Contact us"
        subtitle="We'd love to hear from you. Reach out to our team in Victoria Island, Lagos."
        image="/uploads/2021/07/contact-image2.jpg"
      />

      <section className="mx-auto max-w-5xl px-6 py-16 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-brand mb-2">
            Head office address:
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            Plot 1610, Adeola Hopewell Street,
            <br />
            Victoria Island, Lagos.
          </p>

          <h2 className="text-lg font-semibold text-brand mb-2">
            Call for enquiries:
          </h2>
          <p className="text-text-secondary mb-6">
            <a href="tel:+23401-4545361" className="hover:text-brand">
              +234 01-4545361
            </a>
          </p>

          <h2 className="text-lg font-semibold text-brand mb-2">Mail:</h2>
          <p className="text-text-secondary">
            <a href="mailto:info@fundco.ng" className="hover:text-brand">
              info@fundco.ng
            </a>
          </p>
        </div>

        <div>
          <p className="text-text-secondary mb-6">
            To get in touch with a member of our team, please fill the form
            below
          </p>
          <ContactForm />
        </div>
      </section>

      <RelatedLinks />
    </>
  );
}
