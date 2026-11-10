"use client";

import { Fragment, useEffect, useRef, useState } from "react";

// Home page services: an accordion. The first card is large by default; hovering (or focusing) a card makes it large.
// On touch screens (no hover) the cards open by themselves in turn, and a tap opens a card. A second tap follows its link.
const SERVICES = [
  {
    title: "Foot Reflexology",
    href: "/reflexology",
    image: "/images/services/foot-reflexology-close.png",
    text: "Traditional reflexology for relaxation and balance.",
  },
  {
    title: "Molecular Hydrogen Therapy",
    href: "/hydrogen-therapy",
    image: "/images/hydrogen-new.png",
    text: "",
  },
  {
    title: "Intelligent Wellness",
    href: "/intelligent-wellness",
    image: "/images/services/intelligent-wellness.jpg",
    text: "",
  },
];

const HEADING = "Your journey to total relaxation starts";
const WORDS = HEADING.split(" ");
const ROTATE_MS = 4500; // how long each card stays open on phones before the next one opens
const RESUME_MS = 8000; // after someone touches the cards, the automatic rotation waits this long before it starts again

// Same entrance as the "Benefits of Foot Massage" points: a short fade-up, one card after another.
// RevealOnScroll reads data-settings (animation name and delay) and plays it when the element scrolls into view.
const entrance = (delay: number) => JSON.stringify({ _animation: "fadeInUp", _animation_delay: delay });

// True on devices that have a mouse or trackpad. Touch screens return false.
const canHover = () => typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;
const reducedMotion = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;


export function HomeServices({ showLabel = true }: { showLabel?: boolean }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const resumeTimer = useRef<number | undefined>(undefined);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Phones only: open the cards in turn, so the effect is visible without hover.
  useEffect(() => {
    if (paused || canHover()) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % SERVICES.length), ROTATE_MS);
    return () => window.clearInterval(timer);
  }, [paused]);

  useEffect(() => () => window.clearTimeout(resumeTimer.current), []);

  // Scroll-linked section transition. The scroll position sets a target for --in and --out; each frame the values glide
  // toward that target, so the zoom stays smooth even when the scroll jumps. --in rises as the section comes up (100% when its top
  // has moved 55% of the viewport). --out rises as its bottom passes 45% of the viewport. The CSS turns them into scale and brightness.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || reducedMotion()) return;
    const clamp = (value: number) => Math.min(1, Math.max(0, value));
    // Smoothstep: the progress starts and ends gently.
    const ease = (t: number) => t * t * (3 - 2 * t);
    const target = { in: 0, out: 0 };
    const current = { in: 0, out: 0 };
    let frame = 0;

    const measure = () => {
      const vh = window.innerHeight;
      const rect = el.getBoundingClientRect();
      target.in = ease(clamp((vh - rect.top) / (vh * 0.55)));
      target.out = ease(clamp((vh * 0.45 - rect.bottom) / (vh * 0.45)));
    };
    const apply = () => {
      el.style.setProperty("--in", current.in.toFixed(4));
      el.style.setProperty("--out", current.out.toFixed(4));
    };
    const tick = () => {
      // Move 12% of the remaining distance each frame: a soft, frame-rate-independent glide.
      current.in += (target.in - current.in) * 0.12;
      current.out += (target.out - current.out) * 0.12;
      apply();
      const settled = Math.abs(target.in - current.in) < 0.0005 && Math.abs(target.out - current.out) < 0.0005;
      if (settled) {
        current.in = target.in;
        current.out = target.out;
        apply();
        frame = 0;
        return;
      }
      frame = window.requestAnimationFrame(tick);
    };
    const onScroll = () => {
      measure();
      if (!frame) frame = window.requestAnimationFrame(tick);
    };

    // First paint: set the values straight away, without gliding.
    measure();
    current.in = target.in;
    current.out = target.out;
    apply();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Heading reveal, word by word. Only a heading that starts below the viewport is hidden; it is revealed when it scrolls in.
  useEffect(() => {
    const heading = headingRef.current;
    if (!heading || reducedMotion()) return;
    if (heading.getBoundingClientRect().top < window.innerHeight * 0.9) return;
    heading.classList.add("sp-pending");
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        heading.classList.add("sp-in");
        observer.disconnect();
      },
      { threshold: 0.2 },
    );
    observer.observe(heading);
    return () => observer.disconnect();
  }, []);

  const pauseRotation = () => {
    setPaused(true);
    window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => setPaused(false), RESUME_MS);
  };

  return (
    <section className="svc-section sp-section" ref={sectionRef}>
      <div className="svc-inner">
        {showLabel && (
          <span className="svc-label elementor-invisible" data-settings={entrance(0)}>
            Our Services
          </span>
        )}
        <h2 className="sp-heading" ref={headingRef}>
          {WORDS.map((word, index) => (
            <Fragment key={index}>
              <span className="sp-word-wrap">
                <span className="sp-word" style={{ transitionDelay: `${index * 55}ms` }}>
                  {word}
                </span>
              </span>
              {index < WORDS.length - 1 ? " " : null}
            </Fragment>
          ))}
        </h2>

        <div
          className="svc2-grid"
          onMouseLeave={() => { if (canHover()) setActive(0); }}
          onTouchStart={pauseRotation}
        >
          {SERVICES.map((service, index) => {
            const isActive = index === active;
            return (
              <div
                className={`svc2-item${isActive ? " is-active" : ""}`}
                key={service.title}
                onMouseEnter={() => { if (canHover()) setActive(index); }}
                onFocus={() => setActive(index)}
              >
                <a
                  className="svc2-card"
                  href={service.href}
                  onClick={(event) => {
                    // Touch: the first tap opens the card; the second tap goes to the page.
                    if (!isActive && !canHover()) {
                      event.preventDefault();
                      setActive(index);
                    }
                  }}
                >
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
