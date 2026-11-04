import { ArrowButton } from "./ArrowButton";

const RESEARCH_AREAS = [
  "Oxidative stress regulation.",
  "Inflammation-related pathways.",
  "Cellular signalling.",
  "Mitochondrial function.",
  "Recovery and general wellness.",
];

export function HomeHydrogen() {
  return (
    <section className="home-hydrogen">
      <div className="home-hydrogen-grid">
        <div className="home-hydrogen-text">
          <span className="home-hydrogen-label">Wellness research</span>
          <h2>Molecular Hydrogen Therapy</h2>
          <p>Molecular hydrogen therapy involves using hydrogen gas (H₂) for its potential biological effects.</p>
          <p className="home-hydrogen-intro">Hydrogen is being researched for its possible role in:</p>
          <ul className="home-hydrogen-list">
            {RESEARCH_AREAS.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
          <p className="home-hydrogen-note">
            It is an emerging area of research, not an established treatment for most diseases.
          </p>
          <div className="home-hydrogen-action">
            <ArrowButton label="Learn more" href="/hydrogen-therapy" />
          </div>
        </div>

        <img
          className="home-hydrogen-photo"
          src="/images/hydrogen-therapy.jpg"
          alt="Guest relaxing during a molecular hydrogen session beside a hydrogen water machine"
        />
      </div>
    </section>
  );
}
