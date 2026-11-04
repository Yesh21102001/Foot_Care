import { ArrowButton } from "../components/ArrowButton";
import { PageHeading } from "../components/Blocks";
import { Layout } from "../components/Layout";

export default function IntelligentWellness() {
  return (
    <Layout
      title="Intelligent Wellness"
      description="An optional technology-assisted wellness assessment that captures selected measurements and shows them in a digital overview."
    >
      <PageHeading
        title="Intelligent Wellness"
        crumbs={[{ label: "Home", href: "/" }, { label: "Intelligent Wellness" }]}
        intro="An optional wellness assessment that uses technology to capture and display selected measurements in a digital overview."
      />

      <section className="section">
        <div className="container split">
          <div>
            <h2>What it is</h2>
            <p className="lead">
              The technology-assisted wellness assessment is an optional addition to your visit. It captures selected
              measurements and presents them in a simple digital overview, so you can see them in one place.
            </p>
          </div>
          <div className="card">
            <h3>Good to know</h3>
            <p>
              The assessment is not a medical diagnosis. It does not replace advice or care from a qualified healthcare
              professional. Availability may vary by branch, so please confirm with your chosen branch before visiting.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{ textAlign: "center" }}>
          <h2>Interested in trying it?</h2>
          <p className="lead">Ask about the assessment when you book, or contact the branch nearest you.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center", marginTop: 24 }}>
            <ArrowButton label="Book a session" />
            <ArrowButton label="Find a branch" href="/locations" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
