"use client";

import { useEffect } from "react";

// Entrance animations, in the style of the reference site: headings fade in, cards and text slide up,
// photos zoom in, and the hero text rises. Only content inside .fc-site is touched.
const GROUPS: { variant: "zoom" | "fade" | "slide" | "rise"; selectors: string[] }[] = [
  {
    variant: "zoom",
    selectors: [".about-photo", ".sv-photo", ".home-hydrogen-photo", ".rx-banner img", ".rx-photo-pair img"],
  },
  {
    variant: "fade",
    selectors: [
      ".page-heading .container > *",
      ".section .container > h2",
      ".section .container > .lead",
      ".sv-benefits h2",
      ".hy-center > *",
      ".hy-plain > *",
      ".hy-split > *",
      ".home-packages h2",
      ".home-packages-lead",
      ".home-testimonials h2",
      ".rx-section .container > *",
    ],
  },
  {
    variant: "slide",
    selectors: [
      ".section .container > .split > *",
      ".section .grid > *",
      ".cta",
      ".faq details",
      ".pkg-card",
      ".loc-card",
      ".sv-overview-text > *",
      ".sv-card",
      ".sv-step",
      ".hy-chips li",
      ".hy-faq details",
      ".hy-mech li",
      ".contact-card",
      ".contact-form",
      ".home-hydrogen-text > *",
      ".home-packages-action",
      ".ht-card",
    ],
  },
  { variant: "rise", selectors: [".hero-photo .container > *", ".hero-photo .hero-inner > *"] },
];

export function ScrollAnimations() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const nodes: HTMLElement[] = [];
    const taken = new Set<Element>();
    for (const group of GROUPS) {
      const query = group.selectors.map((selector) => `.fc-site ${selector}`).join(", ");
      document.querySelectorAll<HTMLElement>(query).forEach((node) => {
        if (taken.has(node)) return;
        taken.add(node);
        node.classList.add("fc-anim", `fc-anim-${group.variant}`);
        nodes.push(node);
      });
    }
    if (!nodes.length) return;

    // Stagger siblings (up to five steps of 120ms) so grids and lists cascade in.
    const seen = new Map<Element, number>();
    for (const node of nodes) {
      const parent = node.parentElement as Element;
      const index = seen.get(parent) ?? 0;
      seen.set(parent, index + 1);
      node.style.setProperty("--fc-delay", `${Math.min(index, 5) * 120}ms`);
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
      nodes.forEach((node) => node.classList.remove("fc-anim", "fc-anim-zoom", "fc-anim-fade", "fc-anim-slide", "fc-anim-rise", "is-visible"));
    };
  }, []);

  return null;
}
