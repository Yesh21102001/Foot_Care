"use client";

import { useEffect } from "react";

type Animation = { name: string; delay: number };

// Reads the entrance animation Elementor (data-settings) or WOW (wow class) would have used.
function animationFor(el: HTMLElement): Animation | null {
  try {
    const settings = JSON.parse(el.dataset.settings || "{}");
    const name = settings._animation || settings.animation;
    if (name) {
      return { name, delay: Number(settings._animation_delay ?? settings.animation_delay ?? 0) };
    }
  } catch {
    // Ignore malformed settings and fall through to the WOW check.
  }
  if (el.classList.contains("wow")) {
    return { name: "fadeInUp", delay: parseFloat(el.dataset.wowDelay || "0") };
  }
  return null;
}

function reveal(el: HTMLElement) {
  const animation = animationFor(el);
  el.classList.remove("elementor-invisible");
  if (animation) {
    el.classList.add("animated", animation.name);
    el.style.animationDelay = `${animation.delay}ms`;
  }
}

// Replaces the Elementor/WOW scroll JavaScript: elements that start hidden
// (elementor-invisible) or use the wow class animate in when scrolled into view.
export function RevealOnScroll() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".elementor-invisible, .wow"));

    if (!("IntersectionObserver" in window)) {
      targets.forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          reveal(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
