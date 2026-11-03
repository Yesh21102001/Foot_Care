import Link from "next/link";
import { CtaBanner, PageHero } from "../components/Blocks";
import { Layout } from "../components/Layout";

const services = [
  { href: "/reflexology", title: "Reflexology", text: "Pressure-point therapy for deep relaxation and foot comfort." },
  { href: "/therapeutic-massage", title: "Therapeutic Massage", text: "Targeted massage to release tension and aid recovery." },
  { href: "/hydrogen-therapy", title: "Hydrogen Therapy", text: "A calming wellness session to support recovery." },
  { href: "/healthpod", title: "Healthpod", text: "A private pod for restful, focused wellness time." },
];

export default function OurServices() {
  return (
    <Layout title="Our Services" description="Explore all Foot Care services: reflexology, therapeutic massage, hydrogen therapy and Healthpod sessions.">
      <PageHero eyebrow="Our Services" title="Find the right treatment for you">
        From everyday relaxation to targeted recovery, choose a service and our team will help you plan the next step.
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="grid">
            {services.map((service) => (
              <div className="card" key={service.href}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <p style={{ marginTop: 16 }}>
                  <Link href={service.href}>View details →</Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Not sure which service to choose?" text="Tell us what you need and we will recommend a treatment." />
    </Layout>
  );
}
