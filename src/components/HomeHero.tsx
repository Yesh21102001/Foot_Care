import { ArrowButton } from "./ArrowButton";

// Same hero as the inner pages, used at the top of the homepage.
const HERO_IMAGE = "/images/home-hero.png";

export function HomeHero() {
  return (
    <div className="fc-site home-hero-wrap">
      <section className="hero hero-photo" style={{ backgroundImage: `url("${HERO_IMAGE}")` }}>
        <div className="hero-inner" style={{ position: "relative", width: "min(1200px, calc(100% - 40px))", margin: "0 auto" }}>
          <span className="eyebrow-pill">Foot Care</span>
          <h1>
            <span className="hero-line">A Moment to Unwind.</span>
            <span className="hero-line">A World of Wellness.</span>
          </h1>
          <p>Discover thoughtful massage therapy, the art of reflexology and modern wellness experiences at FOOT CARE.</p>
          <div className="hero-actions">
            <ArrowButton label="Our services" href="/our-services" />
          </div>
        </div>
      </section>
    </div>
  );
}
