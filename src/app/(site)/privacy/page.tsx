import type { Metadata } from "next";
import { ArrowButton } from "../../../components/ArrowButton";
import { PageHeading } from "../../../components/Blocks";
import { Layout } from "../../../components/Layout";

// Placeholder until the approved privacy policy is supplied. No legal wording is written here on purpose.
export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "FOOT CARE privacy policy.",
};

export default function Privacy() {
  return (
    <Layout>
      <PageHeading title="Privacy Policy" crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <section className="section legal-section">
        <div className="container legal-inner">
          <span className="legal-kicker">Coming soon</span>
          <h2>Our full privacy policy</h2>
          <p>
            Our full privacy policy is being finalised and will be published here shortly. In the meantime, if you have any
            questions about how we handle your information, please contact us.
          </p>
          <ArrowButton label="Contact us" href="/contact" />
        </div>
      </section>
    </Layout>
  );
}
