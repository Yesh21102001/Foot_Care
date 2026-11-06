"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { ArrowButton } from "./ArrowButton";

const RESEARCH_AREAS = [
  "Oxidative stress regulation.",
  "Inflammation-related pathways.",
  "Cellular signalling.",
  "Mitochondrial function.",
  "Recovery and general wellness.",
];

// Each piece of the section gets a step number; its entrance is delayed by step x 110ms so the section builds up in order.
const step = (n: number) => ({ "--i": n }) as CSSProperties;

export function HomeHydrogen() {
  const section = useRef<HTMLElement>(null);

  // Entrance sequence: hidden only once scripts run (so the content is never lost), then played when the section scrolls into view.
  useEffect(() => {
    const node = section.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    node.classList.add("hy-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        node.classList.add("hy-in");
        observer.disconnect();
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      node.classList.remove("hy-ready", "hy-in");
    };
  }, []);

  return (
    <section className="home-hydrogen" ref={section}>
      <div className="home-hydrogen-grid">
        <div className="home-hydrogen-text">
          <span className="home-hydrogen-label hy-step" style={step(0)}>
            Wellness research
          </span>
          <h2 className="hy-step hy-title" style={step(1)}>
            Molecular Hydrogen Therapy
          </h2>
          <p className="hy-step" style={step(2)}>
            Molecular hydrogen therapy involves using hydrogen gas (H₂) for its potential biological effects.
          </p>
          <p className="home-hydrogen-intro hy-step" style={step(3)}>
            Hydrogen is being researched for its possible role in:
          </p>
          <ul className="home-hydrogen-list">
            {RESEARCH_AREAS.map((area, index) => (
              <li key={area} className="hy-step hy-item" style={step(4 + index)}>
                {area}
              </li>
            ))}
          </ul>
          <p className="home-hydrogen-note hy-step" style={step(9)}>
            It is an emerging area of research, not an established treatment for most diseases.
          </p>
          <div className="home-hydrogen-action hy-step" style={step(10)}>
            <ArrowButton label="Learn more" href="/hydrogen-therapy" />
          </div>
        </div>

        <div className="home-hydrogen-media">
          <img
            className="home-hydrogen-photo"
            src="/images/hydrogen-therapy.jpg"
            alt="Guest relaxing during a molecular hydrogen session beside a hydrogen water machine"
          />
        </div>
      </div>
    </section>
  );
}
