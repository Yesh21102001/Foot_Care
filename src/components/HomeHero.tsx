import Link from "next/link";
import { BookingButton } from "./BookingButton";

// Same hero as the inner pages, used at the top of the homepage.
const HERO_IMAGE = "/images/home-hero.png";

export function HomeHero() {
  return (
    <div className="fc-site home-hero-wrap">
      <section className="hero hero-photo" style={{ backgroundImage: `url("${HERO_IMAGE}")` }}>
        {/* Two slow, sliding wave layers along the bottom edge. */}
        <div className="hero-waves" aria-hidden="true">
          <svg viewBox="0 0 2880 140" preserveAspectRatio="none" className="hero-wave hero-wave-a">
            <path d="M0 70C240 20 480 20 720 70S1200 120 1440 70C1680 20 1920 20 2160 70S2640 120 2880 70V140H0Z" />
          </svg>
          <svg viewBox="0 0 2880 140" preserveAspectRatio="none" className="hero-wave hero-wave-b">
            <path d="M0 80C240 120 480 120 720 80S1200 30 1440 80C1680 120 1920 120 2160 80S2640 30 2880 80V140H0Z" />
          </svg>
        </div>
        <div className="hero-inner" style={{ position: "relative", width: "min(1200px, calc(100% - 40px))", margin: "0 auto" }}>
          <span className="eyebrow-pill">Foot Care</span>
          <h1>
            <span className="hero-line">A Moment to Unwind.</span>
            <span className="hero-line">A World of Wellness.</span>
          </h1>
          <p>Discover thoughtful massage therapy, the art of reflexology and modern wellness experiences at FOOT CARE.</p>
          <div className="hero-actions">
            <BookingButton className="hero-btn hero-btn-primary">
              <span>Schedule Your Session</span>
              <span className="hero-btn-arrow" aria-hidden="true">
                →
              </span>
            </BookingButton>
            <Link href="/our-services" className="hero-btn hero-btn-ghost">
              Explore Our Treatments
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
