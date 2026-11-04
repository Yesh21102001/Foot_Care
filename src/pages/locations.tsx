import { PageHeading } from "../components/Blocks";
import { Layout } from "../components/Layout";
import { LocationsList } from "../components/LocationsList";

export default function Locations() {
  return (
    <Layout title="Locations" description="Find a Foot Care branch near you, with address, phone, email and directions.">
      <PageHeading title="Find a branch near you" crumbs={[{ label: "Home", href: "/" }, { label: "Locations" }]} />

      <section className="section">
        <div className="container">
          <LocationsList />
        </div>
      </section>
    </Layout>
  );
}
