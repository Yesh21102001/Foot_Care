import type { Metadata } from "next";
import { PageHeading } from "../../../components/Blocks";
import { HomeServices } from "../../../components/HomeServices";
import { Layout } from "../../../components/Layout";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore all Foot Care services: reflexology, molecular hydrogen therapy and Healthpod sessions.",
};

export default function OurServices() {
  return (
    <Layout>
      <PageHeading title="Our Services" crumbs={[{ label: "Home", href: "/" }, { label: "Our Services" }]} hideTitle />

      <HomeServices showLabel={false} />
    </Layout>
  );
}
