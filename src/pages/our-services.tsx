import { PageHeading } from "../components/Blocks";
import { HomeServices } from "../components/HomeServices";
import { Layout } from "../components/Layout";

export default function OurServices() {
  return (
    <Layout title="Our Services" description="Explore all Foot Care services: reflexology, therapeutic therapy, hydrogen therapy and Healthpod sessions.">
      <PageHeading title="Our Services" crumbs={[{ label: "Home", href: "/" }, { label: "Our Services" }]} hideTitle />

      <HomeServices showLabel={false} />
    </Layout>
  );
}
