// Home page: "Beyond Foot Care". Foot reflexology can be combined with work on other areas (see the treatment menu).
// The area tags are labels only: they look like buttons but do not link anywhere.
const AREAS = ["Back", "Arm", "Shoulder", "Hand", "Head", "Neck"];

export function HomeBeyond() {
  return (
    <section className="bf-section">
      <div className="bf-inner">
        <img
          className="bf-photo"
          src="/images/beyond-foot-care.png"
          alt="Therapist giving a guest a relaxing back and shoulder massage"
          loading="lazy"
        />
        <div className="bf-text">
          <span className="bf-kicker">Beyond foot care</span>
          <h2>More than foot care</h2>
          <p>
            Foot reflexology is at the heart of every FOOT CARE visit, and it can be combined with relaxing massage for
            other areas of the body.
          </p>
          <ul className="bf-areas" aria-label="Areas we can include">
            {AREAS.map((area) => (
              <li key={area} className="bf-area">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
