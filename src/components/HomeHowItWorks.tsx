import { ArrowButton } from "./ArrowButton";
import { Icon } from "./icons/Icon";

// Three steps. The descriptions are plain wording for you to edit; the photos are from the services folder.
const STEPS = [
  {
    number: "01",
    icon: "fas fa-spa",
    title: "Discover Our Services",
    text: "Explore our massage, reflexology and wellness treatments.",
    image: "/images/hiw-foot-massage.webp",
  },
  {
    number: "02",
    icon: "fas fa-calendar-alt",
    title: "Schedule Your Appointment",
    text: "Choose a time that suits you and book your session.",
    image: "/images/hiw-recliners.webp",
  },
  {
    number: "03",
    icon: "fas fa-leaf",
    title: "Begin Your Journey",
    text: "Arrive, unwind and enjoy a session shaped around you.",
    image: "/images/hiw-spa-bottle.webp",
  },
];

export function HomeHowItWorks() {
  return (
    <section className="hiw">
      <div className="hiw-inner">
        <div className="hiw-text">
          <span className="hiw-kicker">How it works</span>
          <h2>Your path to resilience begins with one mindful choice.</h2>
          <p>Bringing balance, energy and wellness into your life, one calm session at a time.</p>
          <div className="hiw-action">
            <ArrowButton label="Get in touch" href="/contact" />
          </div>
        </div>
        <ul className="hiw-cards">
          {STEPS.map((step) => (
            <li className="hiw-card" key={step.number} style={{ backgroundImage: `url("${step.image}")` }}>
              <div className="hiw-card-inner">
                <span className="hiw-number">{step.number}</span>
                <span className="hiw-icon" aria-hidden="true">
                  <Icon name={step.icon} />
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
