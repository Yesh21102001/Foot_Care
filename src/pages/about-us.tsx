import { CtaBanner, ItemGrid, PageHero } from "../components/Blocks";
import { Layout } from "../components/Layout";

const values = [
  { title: "Care first", text: "Every visit starts by listening to your body and your goals." },
  { title: "Qualified therapists", text: "Trained, certified practitioners who keep learning." },
  { title: "Calm and clean", text: "A relaxing space designed for real recovery." },
];

export default function AboutUs() {
  return (
    <Layout title="About Us" description="Learn about Wellxess, our story, mission and the team behind our foot care and wellness therapies.">
      <PageHero eyebrow="About Us" title="Caring for your feet, and your whole well-being">
        We bring reflexology, massage and wellness therapies together in one place, so you can look after your body with
        professional support.
      </PageHero>

      <section className="section">
        <div className="container split">
          <div>
            <h2>Our story</h2>
            <p className="lead">
              Wellxess started with a simple idea: everyone deserves a place to rest, recover and feel looked after. Our
              team combines hands-on therapy with practical advice for everyday life.
            </p>
          </div>
          <div className="card">
            <h3>Our mission</h3>
            <p>
              To help people feel more balanced, comfortable and energised through safe, effective and friendly care.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>What we believe</h2>
          <p className="lead">The principles behind every session we deliver.</p>
          <ItemGrid items={values} />
        </div>
      </section>

      <CtaBanner title="Meet the team" text="Our therapists are happy to answer your questions before your first visit." />
    </Layout>
  );
}
