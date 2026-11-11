import { ArrowButton } from "./ArrowButton";

// Home page: "Who We Are". Photo on the left; label, heading, text, two highlights and an About Us button on the right.
const HIGHLIGHTS = [
  { icon: "flaticon-set-theraphy", label: "Deep muscle relief" },
  { icon: "flaticon-set-spa-bowl", label: "Calm, restored mind" },
];

export function WhoWeAre() {
  return (
    <section className="who2">
      <div className="who2-inner">
        <div className="who2-media">
          <img
            className="who2-photo"
            src="/images/who-reception-2.png"
            alt="The FOOT CARE reception with the illuminated logo"
            width={1086}
            height={1448}
          />
        </div>
        <div className="who2-text">
          <span className="who2-kicker">Who We Are</span>
          <h2>Massage that melts tension and restores balance</h2>
          <p>
            Our licensed therapists combine massage therapy and reflexology with a calm, personal approach. Every session is
            shaped around your body, your goals and how you feel that day.
          </p>
          <ul className="who2-highlights">
            {HIGHLIGHTS.map((item) => (
              <li key={item.label}>
                <span className="who2-icon" aria-hidden="true">
                  <i className={item.icon}></i>
                </span>
                <span className="who2-label">{item.label}</span>
              </li>
            ))}
          </ul>
          <ArrowButton label="About Us" href="/about-us" />
        </div>
      </div>
    </section>
  );
}
