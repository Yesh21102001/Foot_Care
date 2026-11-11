"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

// PLACEHOLDER REVIEWS: replace with real client feedback (name, role, quote).
const REVIEWS = [
  {
    name: "Client A",
    role: "Reflexology guest",
    text: "I felt looked after from the moment I arrived. My feet and my back both feel better.",
  },
  {
    name: "Client B",
    role: "Massage guest",
    text: "The team built a plan around my work schedule. I sleep better and feel less stressed.",
  },
  {
    name: "Client C",
    role: "Healthpod guest",
    text: "Clean, calm and professional. The Healthpod session became part of my weekly routine.",
  },
  // DUMMY REVIEWS (placeholder text for layout only). Replace with real client feedback before launch.
  {
    name: "Client D",
    role: "Reflexology guest",
    text: "Lovely, quiet space and a very gentle touch. I left feeling lighter than when I came in.",
  },
  {
    name: "Client E",
    role: "Hydrogen therapy guest",
    text: "The team explained everything clearly before my session, which made me feel at ease from the start.",
  },
  {
    name: "Client F",
    role: "Massage guest",
    text: "Booking was simple, the therapist was attentive, and my neck tension has eased noticeably.",
  },
];

// Slider: 3 cards per view on desktop, 2 on tablets, 1 on phones. Moves on by one card every 3 seconds,
// pauses while hovered, focused or touched, and can be swiped on touch screens.
const AUTO_MS = 3000;

function perView(width: number) {
  if (width <= 640) return 1;
  if (width <= 1024) return 2;
  return 3;
}

export function HomeTestimonials() {
  const [index, setIndex] = useState(0);
  const [per, setPer] = useState(3);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef<number | null>(null);
  const maxIndex = Math.max(0, REVIEWS.length - per);
  const current = Math.min(index, maxIndex);

  useEffect(() => {
    const update = () => setPer(perView(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      if (document.hidden) return;
      setIndex((i) => (Math.min(i, maxIndex) >= maxIndex ? 0 : Math.min(i, maxIndex) + 1));
    }, AUTO_MS);
    return () => window.clearInterval(timer);
  }, [paused, maxIndex]);

  const go = (next: number) => setIndex(Math.max(0, Math.min(maxIndex, next)));

  return (
    <section id="home-testimonials" className="home-testimonials">
      <div className="container">
        <h2>Trusted by our Foot Care</h2>
        <div
          className="ht-viewport"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onTouchStart={(e) => {
            touchStart.current = e.touches[0].clientX;
            setPaused(true);
          }}
          onTouchEnd={(e) => {
            const start = touchStart.current;
            touchStart.current = null;
            if (start !== null) {
              const delta = e.changedTouches[0].clientX - start;
              if (Math.abs(delta) > 40) go(current + (delta < 0 ? 1 : -1));
            }
            setPaused(false);
          }}
        >
          <div className="ht-track" style={{ "--per": per, "--index": current } as CSSProperties}>
            {REVIEWS.map((review) => (
              <figure className="ht-card" key={review.name}>
                <span className="ht-quote" aria-hidden="true">
                  “
                </span>
                <blockquote>{review.text}</blockquote>
                <figcaption className="ht-person">
                  <span className="ht-avatar" aria-hidden="true">
                    {review.name.slice(-1)}
                  </span>
                  <span>
                    <strong>{review.name}</strong>
                    <small>{review.role}</small>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div className="ht-dots" role="tablist" aria-label="Choose reviews">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={`Show reviews from ${i + 1}`}
              className={`ht-dot${i === current ? " is-active" : ""}`}
              onClick={() => go(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
