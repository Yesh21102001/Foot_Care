const SERVICES = [
  {
    title: "Reflexology Massage",
    href: "/reflexology",
    image: "/images/services/reflexology.jpg",
  },
  {
    title: "Molecular Hydrogen Therapy",
    href: "/hydrogen-therapy",
    image: "/images/services/hydrogen-therapy.jpg",
  },
  {
    title: "Intelligent Wellness",
    href: "/intelligent-wellness",
    image: "/images/services/intelligent-wellness.jpg",
  },
];

// Same entrance as the "Benefits of Foot Massage" points: a short fade-up, one card after another.
// RevealOnScroll reads data-settings (animation name and delay) and plays it when the element scrolls into view.
const entrance = (delay: number) => JSON.stringify({ _animation: "fadeInUp", _animation_delay: delay });

// Home page services: heading plus four tall photo cards. Each card is one link.
export function HomeServices({ showLabel = true }: { showLabel?: boolean }) {
  return (
    <section className="svc-section">
      <div className="svc-inner">
        {showLabel && (
          <span className="svc-label elementor-invisible" data-settings={entrance(0)}>
            Our Services
          </span>
        )}
        <h2 className="elementor-invisible" data-settings={entrance(200)}>
          Your journey to total relaxation starts
        </h2>

        <div className="svc-grid">
          {SERVICES.map((service, index) => (
            <div className="svc-item elementor-invisible" data-settings={entrance(300 + index * 200)} key={service.title}>
              <a className="svc-card" href={service.href}>
                <img src={service.image} alt="" loading="lazy" />
                <div className="svc-info">
                  <h3>{service.title}</h3>
                </div>
                <span className="sr-only">View details</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
