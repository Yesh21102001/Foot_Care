"use client";

import { useEffect } from "react";

const DURATION = 520;
const EASING = "cubic-bezier(0.22, 1, 0.36, 1)";

// Makes the FAQ expanders (<details> inside .faq) open and close smoothly instead of snapping.
// Works on every page that uses them. Keyboard (Enter / Space) and clicks both go through the same path.
export function SmoothDetails() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const running = new WeakMap<HTMLDetailsElement, Animation>();

    const toggle = (details: HTMLDetailsElement) => {
      // Height right now (part-way through an animation, if one is running), then stop it.
      const startHeight = details.offsetHeight;
      const wasClosing = details.dataset.closing === "1";
      // If an animation is running, remember how visible the answer is right now so the fade continues from there.
      const interrupted = running.has(details);
      const answer = Array.from(details.children).find((child) => child.tagName !== "SUMMARY");
      const startOpacity = interrupted && answer ? parseFloat(getComputedStyle(answer).opacity) : null;
      running.get(details)?.cancel();
      running.delete(details);

      const opening = !details.open || wasClosing;
      delete details.dataset.closing;
      details.style.overflow = "hidden";

      let endHeight: number;
      if (opening) {
        details.open = true;
        endHeight = details.offsetHeight;
      } else {
        // Measure the collapsed height by closing it for a moment (no paint happens in between).
        details.open = false;
        endHeight = details.offsetHeight;
        details.open = true;
        details.dataset.closing = "1";
      }

      // "forwards" keeps the final height on screen until the real open state is applied below, so there is
      // never a frame where the box jumps back to its full height at the end of closing.
      const animation = details.animate(
        { height: [`${startHeight}px`, `${endHeight}px`] },
        { duration: DURATION, easing: EASING, fill: "forwards" },
      );
      running.set(details, animation);

      // The answer fades with the box so it is never shown cut off part-way through.
      const content = Array.from(details.children).filter((child) => child.tagName !== "SUMMARY");
      const fades = content.map((child) =>
        child.animate(
          { opacity: opening ? [startOpacity ?? 0, 1] : [startOpacity ?? 1, 0] },
          opening
            ? { duration: DURATION * 0.7, delay: startOpacity === null ? DURATION * 0.25 : 0, easing: "ease-out", fill: "backwards" }
            : { duration: DURATION * 0.5, easing: "ease-in", fill: "forwards" },
        ),
      );

      const finish = (completed: boolean) => {
        if (running.get(details) !== animation) return;
        running.delete(details);
        if (completed && !opening) details.open = false;
        details.style.overflow = "";
        delete details.dataset.closing;
        fades.forEach((fade) => fade.cancel());
        animation.cancel();
      };
      animation.onfinish = () => finish(true);
      animation.oncancel = () => {
        fades.forEach((fade) => fade.cancel());
        finish(false);
      };
    };

    const onClick = (event: MouseEvent) => {
      const summary = (event.target as HTMLElement | null)?.closest<HTMLElement>(".faq summary");
      const details = summary?.parentElement;
      if (!summary || !(details instanceof HTMLDetailsElement)) return;
      event.preventDefault();
      toggle(details);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
