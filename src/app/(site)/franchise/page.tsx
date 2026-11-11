import type { Metadata } from "next";
import { ArrowButton } from "../../../components/ArrowButton";
import { PageHeading } from "../../../components/Blocks";
import { StaticForm } from "../../../components/StaticForm";
import { Layout } from "../../../components/Layout";

// PLACEHOLDER copy: replace with the approved franchise facts (model, support, requirements). No figures are stated here on purpose.
export const metadata: Metadata = {
  title: "Franchise",
  description: "Interested in opening a FOOT CARE branch? Read the franchise overview and send us your enquiry.",
};

export default function Franchise() {
  return (
    <Layout>
      <PageHeading
        title="Franchise"
        crumbs={[{ label: "Home", href: "/" }, { label: "Franchise" }]}
        intro="Interested in bringing FOOT CARE to your city? Tell us about yourself and the location you have in mind."
      />

      <section className="section contact-section">
        <div className="container">
          <div className="contact-cards">
            <article className="contact-card">
              <span className="contact-icon" aria-hidden="true">
                <i className="fas fa-spa"></i>
              </span>
              <h3>The brand</h3>
              <p>
                FOOT CARE brings together massage therapy, traditional reflexology and carefully selected wellness
                experiences in a calm, professional setting.
              </p>
            </article>
            <article className="contact-card">
              <span className="contact-icon" aria-hidden="true">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <h3>Our locations</h3>
              <p>See where FOOT CARE branches are already open.</p>
              <ArrowButton label="View locations" href="/locations" />
            </article>
            <article className="contact-card">
              <span className="contact-icon" aria-hidden="true">
                <i className="fas fa-envelope"></i>
              </span>
              <h3>Next step</h3>
              <p>Send the enquiry form below and our team will get in touch with you.</p>
            </article>
          </div>

          <StaticForm className="contact-form">
            <h3>Franchise enquiry</h3>
            <p>Share a few details and we will contact you.</p>

            <div className="contact-fields">
              <div className="field">
                <label htmlFor="fr-name">Full name</label>
                <input id="fr-name" name="name" type="text" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="fr-phone">Phone</label>
                <input id="fr-phone" name="phone" type="tel" autoComplete="tel" required />
              </div>
              <div className="field">
                <label htmlFor="fr-email">Email</label>
                <input id="fr-email" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="field">
                <label htmlFor="fr-location">City and country of interest</label>
                <input id="fr-location" name="location" type="text" required />
              </div>
              <div className="field contact-wide">
                <label htmlFor="fr-message">About you and your plans</label>
                <textarea id="fr-message" name="message" rows={5} />
              </div>
            </div>

            <ArrowButton label="Send enquiry" submit />
            {/* TODO: connect this form to your backend or email service. It does not send anything yet. */}
          </StaticForm>
        </div>
      </section>
    </Layout>
  );
}
