"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { Photo } from "./Photo";

// Home page: "Beyond Foot Care". Foot reflexology can be combined with work on other areas (see the treatment menu).
// The area tags are labels only: they look like buttons but do not link anywhere.
const AREAS = ["Back", "Arm", "Shoulder", "Hand", "Head", "Neck"];

// Each piece gets a step number; the entrance is staggered by it.
const step = (n: number) => ({ "--i": n }) as CSSProperties;

export function HomeBeyond() {
  const ref = useRef<HTMLElement>(null);

  // A slow, staged entrance when the section scrolls into view. Content stays visible without JavaScript.
  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    node.classList.add("bf-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        node.classList.add("bf-in");
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      node.classList.remove("bf-ready", "bf-in");
    };
  }, []);

  return (
    <section className="bf-section" ref={ref}>
      <div className="bf-inner">
        <div className="bf-media">
          <Photo
            className="bf-photo"
            src="/images/beyond-foot-care.webp"
            alt="Therapist giving a guest a relaxing back and shoulder massage"
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
        <div className="bf-text">
          <span className="bf-kicker bf-step" style={step(0)}>
            Beyond foot care
          </span>
          <h2 className="bf-step" style={step(1)}>
            More than foot care
          </h2>
          <p className="bf-step" style={step(2)}>
            Foot reflexology is at the heart of every FOOT CARE visit, and it can be combined with relaxing massage for
            other areas of the body.
          </p>
          <ul className="bf-areas" aria-label="Areas we can include">
            {AREAS.map((area, index) => (
              <li key={area} className="bf-area bf-step bf-tag" style={step(3 + index)}>
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
