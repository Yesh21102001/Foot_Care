import { ArrowButton } from "../components/ArrowButton";
import { PageHeading } from "../components/Blocks";
import { Layout } from "../components/Layout";
import { ServiceOverview } from "../components/ServicePage";

// Customer-facing copy only. Internal supplier and compliance notes are deliberately not shown on the page.
const FEATURES = [
  { title: "Intelligent Analysis", text: "Technology to capture and present selected wellness measurements." },
  { title: "Personalised Insights", text: "An easy-to-understand overview of assessment results." },
  { title: "Quick & Convenient", text: "A simple assessment experience designed around guest comfort." },
  { title: "A New Perspective", text: "An additional dimension to the overall wellness experience." },
];

// Benefits, as supplied by FOOT CARE.
const BENEFITS = [
  { title: "Deeper Wellness Insights", text: "Understand selected wellness measurements." },
  { title: "Personalised Recommendations", text: "Gain insights based on individual assessment results." },
  { title: "Supports Overall Wellbeing", text: "Develop greater awareness of your wellness." },
  { title: "Proactive Health Awareness", text: "Better understand your wellness journey." },
  { title: "Quick & Convenient", text: "Enjoy a simple, comfortable assessment experience." },
];

export default function IntelligentWellness() {
  return (
    <Layout
      title="Intelligent Wellness Experience"
      description="Discover a new dimension of wellness at FOOT CARE with a technology-assisted wellness assessment."
    >
      <PageHeading
        title="Intelligent Wellness Experience"
        crumbs={[{ label: "Home", href: "/" }, { label: "Our Services", href: "/our-services" }, { label: "Intelligent Wellness" }]}
      />

      <ServiceOverview title="Intelligent Wellness" image="/images/intelligent-wellness-new.png" heading="A Smarter Way to Experience Wellness">
        <p>
          <strong>Where advanced technology meets personal wellbeing.</strong>
        </p>
        <p>
          Discover a new dimension of wellness at FOOT CARE. Our technology-assisted wellness assessment offers a unique insight
          into selected body wellness measurements through an advanced digital analysis experience. Designed to be simple, quick
          and easy to understand, it gives you a personalised overview of your assessment results, helping you become more aware
          of your wellness journey.
        </p>
      </ServiceOverview>

      <section className="br-section">
        <div className="br-inner">
          <div className="br-head">
            <span className="br-kicker">Benefits</span>
            <h2>Benefits of Intelligent Wellness</h2>
          </div>
          <ol className="br-list">
            {BENEFITS.map((item, index) => (
              <li className="br-row" key={item.title}>
                <span className="br-num">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="br-section br-section-alt">
        <div className="br-inner">
          <div className="br-head">
            <span className="br-kicker">Feature points</span>
            <h2>Feature points</h2>
          </div>
          <ol className="br-list">
            {FEATURES.map((item, index) => (
              <li className="br-row" key={item.title}>
                <span className="br-num">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section legal-section">
        <div className="container legal-inner">
          <h2>Wellness meets intelligent measurement.</h2>
          <p>Experience the difference at FOOT CARE.</p>
          <ArrowButton label="Book a session" />
        </div>
      </section>
    </Layout>
  );
}
