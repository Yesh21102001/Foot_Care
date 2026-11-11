import { Layout } from "../components/Layout";
import { HomeHero } from "../components/HomeHero";
import { WhoWeAre } from "../components/WhoWeAre";
import { HomeServices } from "../components/HomeServices";
import { HomeBeyond } from "../components/HomeBeyond";
import { HomeHydrogen } from "../components/HomeHydrogen";
import { HomeBenefits } from "../components/HomeBenefits";
import { HomeHowItWorks } from "../components/HomeHowItWorks";
import { HomePackages } from "../components/HomePackages";
import { HomeTestimonials } from "../components/HomeTestimonials";
import { Preloader } from "../components/Preloader";

export default function Home() {
  return (
    <>
      {/* Outside the page frame, so it covers the header too and is not affected by the page fade-in. */}
      <Preloader />
      <Layout>
      <HomeHero />
      <WhoWeAre />
      <HomeServices />
      <HomeBeyond />
      <HomeHydrogen />
      <HomeBenefits />
      <HomeHowItWorks />
      <HomePackages />
      <HomeTestimonials />
      </Layout>
    </>
  );
}
