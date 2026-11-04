import { ArrowButton } from "../components/ArrowButton";
import { CtaBanner, ItemGrid, PageHero } from "../components/Blocks";
import { Layout } from "../components/Layout";

const blocks = [
  {
    title: "Our philosophy",
    text: "We believe that taking time to relax should feel considered, comfortable and personal. Every visit is shaped around you.",
  },
  {
    title: "Professional, respectful service",
    text: "Attentive service and a commitment to guest comfort, from the moment you arrive to the moment you leave.",
  },
  {
    title: "Our treatment approach",
    text: "Massage therapy and traditional reflexology, delivered with almond massage cream in a calm, unhurried setting.",
  },
  {
    title: "Our therapists",
    text: "Experienced therapists who take the time to understand how you feel before every session begins.",
  },
];

const setting = [
  {
    title: "Massage therapy",
    text: "Hands-on massage shaped around how your body feels that day, with attentive and respectful service.",
  },
  {
    title: "Traditional reflexology",
    text: "A traditional approach to the feet, using focused pressure for deep relaxation and comfort.",
  },
  {
    title: "Wellness rituals",
    text: "Carefully selected experiences, such as a warm foot soak, that make every visit feel considered.",
  },
  {
    title: "A calm space",
    text: "A quiet, comfortable setting where guest comfort comes first, from arrival to departure.",
  },
];

const approach = [
  "Massage therapy tailored to how you feel that day",
  "Traditional reflexology for feet and whole-body balance",
  "Carefully selected wellness experiences",
  "Almond massage cream used in our treatments",
];

export default function AboutUs() {
  return (
    <Layout
      title="About Us"
      description="FOOT CARE brings together massage therapy, traditional reflexology and carefully selected wellness experiences in a calm, professional setting."
    >
      <PageHero
        eyebrow="About Us"
        title="Wellness, Thoughtfully Experienced."
        image="/images/home-hero.jpg"
        arrowButtons
      >
        FOOT CARE brings together the art of massage therapy, traditional reflexology and carefully selected wellness
        experiences in a calm, professional setting.
      </PageHero>

      <section className="section">
        <div className="container split split-center">
          <div>
            <h2>About FOOT CARE</h2>
            <p className="lead">
              We believe that taking time to relax should feel considered, comfortable and personal. Every visit is
              shaped by attentive service, experienced therapists and a commitment to guest comfort.
            </p>
          </div>
          <img className="about-photo" src="/images/about/about-intro.jpg" alt="Foot massage in a warm, calm setting" />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>A calm, professional setting</h2>
          <p className="lead">Massage, reflexology and wellness, side by side.</p>
          <ItemGrid items={setting} />
        </div>
      </section>

      <section className="section">
        <div className="container split split-center split-reverse">
          <div>
            <h2>Our treatment approach</h2>
            <p className="lead">
              Every session combines the art of massage therapy with traditional reflexology, in a setting designed for
              real relaxation.
            </p>
            <ul className="check-list">
              {approach.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <img className="about-photo" src="/images/about/reflexology-hands-square.jpg" alt="Reflexology massage on the sole of the foot" />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>What you can expect</h2>
          <p className="lead">The principles behind every visit to Foot Care.</p>
          <ItemGrid items={blocks} />
          <p style={{ marginTop: 32, textAlign: "center" }}>
            <ArrowButton label="Find a store" href="/locations" />
          </p>
        </div>
      </section>

      <CtaBanner title="Ready to relax?" text="Book a session at the Foot Care store nearest you." arrowButtons />
    </Layout>
  );
}
