import { PageHeading } from "../components/Blocks";
import { Layout } from "../components/Layout";
import { PackageCards } from "../components/PackageCards";
import { TreatmentPicker } from "../components/TreatmentPicker";

// Reference prices: confirm with the client before launch.
const treatments = [
  { name: "Foot Reflexology", duration: "45 minutes", price: "₹1,000" },
  { name: "Foot Reflexology", duration: "60 minutes", price: "₹1,300" },
  { name: "Foot Reflexology (45 min) + Back & Shoulder (15 min)", duration: "60 minutes", price: "₹1,300" },
  { name: "Foot Reflexology (45 min) + Back, Arm & Shoulder (30 min)", duration: "75 minutes", price: "₹1,600" },
  {
    name: "Foot Reflexology (45 min) + Back, Arm, Shoulder, Hand, Head & Neck (45 min)",
    duration: "90 minutes",
    price: "₹1,900",
  },
];

export default function Pricing() {
  return (
    <Layout title="Pricing" description="Foot Care treatments, durations and prices, plus prepaid packages with extra value.">
      <PageHeading
        title="Prepaid packages"
        crumbs={[{ label: "Home", href: "/" }, { label: "Pricing" }]}
        intro="Pay in advance and receive additional value on your balance."
      />

      <section className="section section-alt pkg-section">
        <div className="container">
          <PackageCards />
        </div>
      </section>

      <section className="tp-section">
        <div className="container">
          <div className="tp-intro">
            <span className="tp-eyebrow">Treatment menu</span>
            <h2>Treatments</h2>
            <p className="tp-lead">Foot reflexology on its own, or combined with back, arm, shoulder, hand, head and neck work.</p>
          </div>
          <TreatmentPicker treatments={treatments} />
        </div>
      </section>
    </Layout>
  );
}
