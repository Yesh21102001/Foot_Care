"use client";

import { useEffect } from "react";

// Things that fade and slide up when they scroll into view. Only content inside .fc-site is touched.
const TARGETS = [
  ".hero-photo .container > *",
  ".hero-photo .hero-inner > *",
  ".page-heading .container > *",
  ".section .container > h2",
  ".section .container > .lead",
  ".section .container > .split > *",
  ".section .grid > *",
  ".cta",
  ".faq details",
  ".about-photo",
  ".pkg-card",
  ".loc-card",
  ".sv-photo",
  ".sv-overview-text > *",
  ".sv-benefits h2",
  ".sv-card",
  ".sv-step",
  ".hy-split > *",
  ".hy-center > *",
  ".hy-chips li",
  ".hy-faq details",
  ".hy-plain > *",
  ".hy-mech li",
  ".contact-card",
  ".contact-form",
  ".home-hydrogen-text > *",
  ".home-hydrogen-photo",
  ".home-packages h2",
  ".home-packages-lead",
  ".home-packages-action",
  ".home-testimonials h2",
  ".ht-card",
  ".rx-section .container > *",
  ".rx-banner img",
  ".rx-photo-pair img",
]
  .map((selector) => `.fc-site ${selector}`)
  .join(", ");

export function ScrollAnimations() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const nodes = Array.from(document.querySelectorAll<HTMLElement>(TARGETS));
    if (!nodes.length) return;

    // Stagger siblings a little (up to five steps of 130ms) so grids and lists cascade in.
    const seen = new Map<Element, number>();
    for (const node of nodes) {
      const parent = node.parentElement as Element;
      const index = seen.get(parent) ?? 0;
      seen.set(parent, index + 1);
      node.style.setProperty("--fc-delay", `${Math.min(index, 5) * 130}ms`);
      node.classList.add("fc-anim");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    nodes.forEach((node) => observer.observe(node));

    return () => {
      observer.disconnect();
      nodes.forEach((node) => node.classList.remove("fc-anim", "is-visible"));
    };
  }, []);

  return null;
}
