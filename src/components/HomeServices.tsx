import { ArrowButton } from "./ArrowButton";

const SERVICES = [
  {
    title: "Reflexology Massage",
    text: "Pressure-point therapy for deep relaxation and foot comfort.",
    href: "/reflexology",
    image: "/images/services/reflexology.jpg",
  },
  {
    title: "Therapeutic Massage",
    text: "Targeted massage to release tension and aid recovery.",
    href: "/therapeutic-massage",
    image: "/images/services/therapeutic-massage.jpg",
  },
  {
    title: "Hydrogen Therapy",
    text: "A calming wellness session to support recovery.",
    href: "/hydrogen-therapy",
    image: "/images/services/hydrogen-therapy.jpg",
  },
  {
    title: "Intelligent Wellness",
    text: "An optional technology-assisted wellness assessment.",
    href: "/intelligent-wellness",
    image: "/images/services/intelligent-wellness.jpg",
  },
];

// Home page services: photo on top, then title, text and a button.
export function HomeServices() {
  return (
    <div className="home-services">
      {SERVICES.map((service) => (
        <article className="svc-card" key={service.title}>
          <a className="svc-photo" href={service.href} tabIndex={-1} aria-hidden="true">
            <img src={service.image} alt="" loading="lazy" />
          </a>
          <div className="svc-body">
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <ArrowButton label="View details" href={service.href} />
          </div>
        </article>
      ))}
    </div>
  );
}
