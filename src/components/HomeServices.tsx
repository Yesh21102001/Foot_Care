"use client";

import { useState } from "react";

// Home page services: an accordion. The first card is large by default; hovering (or focusing) a card makes it large.
const SERVICES = [
  {
    title: "Reflexology Massage",
    href: "/reflexology",
    image: "/images/services/reflexology.jpg",
    text: "Traditional reflexology for relaxation and balance.",
  },
  {
    title: "Molecular Hydrogen Therapy",
    href: "/hydrogen-therapy",
    image: "/images/services/hydrogen-therapy.jpg",
    text: "",
  },
  {
    title: "Intelligent Wellness",
    href: "/intelligent-wellness",
    image: "/images/services/intelligent-wellness.jpg",
    text: "",
  },
];

// Same entrance as the "Benefits of Foot Massage" points: a short fade-up, one card after another.
// RevealOnScroll reads data-settings (animation name and delay) and plays it when the element scrolls into view.
const entrance = (delay: number) => JSON.stringify({ _animation: "fadeInUp", _animation_delay: delay });

export function HomeServices({ showLabel = true }: { showLabel?: boolean }) {
  const [active, setActive] = useState(0);

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

        <div className="svc2-grid" onMouseLeave={() => setActive(0)}>
          {SERVICES.map((service, index) => {
            const isActive = index === active;
            return (
              <div
                className={`svc2-item${isActive ? " is-active" : ""}`}
                key={service.title}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
              >
                <a className="svc2-card" href={service.href}>
                  <img src={service.image} alt="" loading="lazy" />
                  <div className="svc2-copy">
                    <h3>{service.title}</h3>
                    {service.text && <p>{service.text}</p>}
                  </div>
                  <span className="svc2-vertical">{service.title}</span>
                  <span className="svc2-arrow" aria-hidden="true">
                    <i className="fas fa-arrow-right"></i>
                  </span>
                  <span className="sr-only">View details</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
