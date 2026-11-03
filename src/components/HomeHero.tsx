import Link from "next/link";

// Same hero as the inner pages, used at the top of the homepage.
const HERO_IMAGE = "/images/home-hero.jpg";

export function HomeHero() {
  return (
    <div className="fc-site home-hero-wrap">
      <section className="hero hero-photo" style={{ backgroundImage: `url("${HERO_IMAGE}")` }}>
        <div className="hero-inner" style={{ position: "relative", width: "min(1200px, calc(100% - 40px))", margin: "0 auto" }}>
          <span className="eyebrow-pill">Foot Care</span>
          <h1>Health &amp; Wellness</h1>
          <p>Reflexology, massage and wellness therapies to help you feel balanced every day.</p>
          <div className="hero-actions">
            <Link
              href="/pricing"
              className="btn btn-hero-dark"
            >
              Pricing
            </Link>
            <Link href="/our-services" className="btn btn-outline-light">
              Our services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
