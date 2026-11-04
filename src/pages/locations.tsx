import { CtaBanner, PageHero } from "../components/Blocks";
import { Layout } from "../components/Layout";

// PLACEHOLDER DATA: replace with your real store list (name, address, phone, hours).
const LOCATIONS = [
  {
    name: "Main branch",
    address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    phone: "+629 555-0129",
    hours: "Mon - Fri 9:00 am - 8:00 pm, Sat 10:00 am - 8:00 pm",
  },
  {
    name: "Second branch",
    address: "Add address here",
    phone: "Add phone here",
    hours: "Add hours here",
  },
];

export default function Locations() {
  return (
    <Layout title="Locations" description="Find a Foot Care branch near you, with address, phone and opening hours.">
      <PageHero eyebrow="Locations" title="Find a branch near you">
        Choose the branch closest to you and book your session.
      </PageHero>

      <section className="section">
        <div className="container" style={{ maxWidth: 960 }}>
          <div style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {LOCATIONS.map((loc) => (
              <div key={loc.name} className="card">
                <h3>{loc.name}</h3>
                <p>{loc.address}</p>
                <p>{loc.phone}</p>
                <p>{loc.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Ready to visit?" text="Book a session at the branch that suits you." />
    </Layout>
  );
}
