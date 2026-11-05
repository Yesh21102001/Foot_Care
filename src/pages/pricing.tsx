import { PageHeading } from "../components/Blocks";
import { Layout } from "../components/Layout";
import { PackageCards } from "../components/PackageCards";

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
      <PageHeading title="Treatments & pricing" crumbs={[{ label: "Home", href: "/" }, { label: "Pricing" }]} hideTitle />

      <section className="section section-alt pkg-section">
        <div className="container">
          <h2>Prepaid packages</h2>
          <p className="lead">Pay in advance and receive additional value on your balance.</p>
          <PackageCards />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Treatments</h2>
          <p className="lead">Foot reflexology on its own, or combined with back, arm, shoulder, hand, head and neck work.</p>
          {/* Table on larger screens; stacked cards on phones (see .treat-table and .treat-list in site.css). */}
          <div className="rx-price-wrap treat-table" style={{ marginLeft: 0, marginRight: 0, maxWidth: "none" }}>
            <table className="rx-price-table">
              <thead>
                <tr>
                  <th>Treatment</th>
                  <th>Duration</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {treatments.map((row) => (
                  <tr key={row.name + row.duration}>
                    <td>{row.name}</td>
                    <td>{row.duration}</td>
                    <td>{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="treat-list">
            {treatments.map((row) => (
              <li key={row.name + row.duration}>
                <span className="treat-name">{row.name}</span>
                <span className="treat-meta">
                  <span className="treat-time">{row.duration}</span>
                  <strong className="treat-price">{row.price}</strong>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}
