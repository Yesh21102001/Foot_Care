import Link from "next/link";
import { CtaBanner, PageHero } from "../components/Blocks";
import { Layout } from "../components/Layout";

// Placeholder prices: replace with your real plans.
const plans = [
  {
    name: "Basic Relaxation",
    price: "$49",
    period: "per month",
    featured: false,
    features: ["Reflexology session", "Foot health check", "Dietary guidance"],
  },
  {
    name: "Premium Spa",
    price: "$89",
    period: "per month",
    featured: true,
    features: ["Reflexology session", "Therapeutic massage", "Hydrogen therapy", "Wellness plan"],
  },
  {
    name: "Total Wellness",
    price: "$129",
    period: "per month",
    featured: false,
    features: ["All treatments", "Healthpod access", "Priority booking", "Personal coaching"],
  },
];

export default function Pricing() {
  return (
    <Layout title="Pricing" description="Simple monthly wellness plans from Foot Care. Choose the plan that fits your routine.">
      <PageHero eyebrow="Pricing" title="Simple plans for every routine">
        Choose a monthly plan that fits how often you want to rest and recover.
      </PageHero>

      <section className="section">
        <div className="container grid">
          {plans.map((plan) => (
            <div className={`card${plan.featured ? " featured" : ""}`} key={plan.name}>
              <h3>{plan.name}</h3>
              <div className="price">
                {plan.price} <small>{plan.period}</small>
              </div>
              <ul className="check-list">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <p style={{ marginTop: 24 }}>
                <Link href="/contact" className="btn btn-primary">
                  Select plan
                </Link>
              </p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner title="Need a custom plan?" text="Tell us your goals and we will put together a tailored option." />
    </Layout>
  );
}
