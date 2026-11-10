import { ArrowButton } from "../components/ArrowButton";
import { PageHeading } from "../components/Blocks";
import { Layout } from "../components/Layout";

// Placeholder until the approved terms are supplied. No legal wording is written here on purpose.
export default function Terms() {
  return (
    <Layout title="Terms & Conditions" description="FOOT CARE terms and conditions.">
      <PageHeading
        title="Terms & Conditions"
        crumbs={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]}
      />
      <section className="section legal-section">
        <div className="container legal-inner">
          <span className="legal-kicker">Coming soon</span>
          <h2>Our full terms &amp; conditions</h2>
          <p>
            Our full terms &amp; conditions is being finalised and will be published here shortly. In the meantime, if you have
            any questions about our terms of service, please contact us.
          </p>
          <ArrowButton label="Contact us" href="/contact" />
        </div>
      </section>
    </Layout>
  );
}
