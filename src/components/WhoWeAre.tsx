import Link from "next/link";

// "Who We Are" section for the homepage, written for the massage and reflexology services.
export function WhoWeAre() {
  return (
    <div className="fc-site">
      <section className="who-section">
        <div className="container who-inner" style={{ width: "min(1200px, calc(100% - 40px))", margin: "0 auto" }}>
          <div className="who-grid">
            <div className="who-photo" role="img" aria-label="Therapist giving a relaxing head massage">
              <div className="who-stat">
                <strong>25+</strong>
                <span>Years of Work
                  <br />
                  Experience
                </span>
              </div>
            </div>

            <div>
              <span className="who-eyebrow">Who We Are</span>
              <h2>Massage that melts tension and restores balance</h2>
              <p className="who-text">
                Our licensed therapists combine massage therapy and reflexology with a calm, personal approach.
                Every session is shaped around your body, your goals and how you feel that day.
              </p>

              <div className="who-features">
                <div>
                  <span className="badge">1</span>
                  <h3>Deep muscle relief</h3>
                  <p>Targeted pressure eases stiffness in the neck, shoulders, back and feet.</p>
                </div>
                <div>
                  <span className="badge">2</span>
                  <h3>Calm, restored mind</h3>
                  <p>Slow, rhythmic techniques help you unwind and sleep more deeply.</p>
                </div>
              </div>

              <Link href="/about-us" className="who-btn">
                Learn more
                <span className="who-btn-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
