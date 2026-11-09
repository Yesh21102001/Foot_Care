"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const PACKAGE_INCLUDES = [
  "Foot Reflexology",
  "Hand Reflexology",
  "Head Massage",
  "Neck & Back Massage",
  "Arm & Shoulder Massage",
];

// Reference prices: confirm with the client before launch.
const PACKAGES = [
  { name: "Silver", amount: "₹10,000", extra: "20% Extra" },
  { name: "Gold", amount: "₹20,000", extra: "30% Extra" },
  { name: "Platinum", amount: "₹30,000", extra: "40% Extra", recommended: true },
  { name: "Diamond", amount: "₹40,000", extra: "50% Extra" },
];

// The four prepaid package cards, shared by the Pricing page and the home page.
// On phones they form a swipe slider: the card in the middle is full size, the others step back, and dots show the position.
export function PackageCards() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const cards = Array.from(grid.querySelectorAll<HTMLElement>(".pkg-card"));
      if (!cards.length) return;
      const gridRect = grid.getBoundingClientRect();
      const center = gridRect.left + gridRect.width / 2;
      let closest = 0;
      let closestDistance = Infinity;
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const distance = Math.abs(rect.left + rect.width / 2 - center);
        // 0 when the card is in the middle, 1 when it is one card-width away or more.
        card.style.setProperty("--d", Math.min(1, distance / (rect.width + 14)).toFixed(3));
        if (distance < closestDistance) {
          closestDistance = distance;
          closest = index;
        }
      });
      setActive(closest);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    grid.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      grid.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const goTo = (index: number) => {
    const grid = gridRef.current;
    const card = grid?.querySelectorAll<HTMLElement>(".pkg-card")[index];
    if (!grid || !card) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cardRect = card.getBoundingClientRect();
    const gridRect = grid.getBoundingClientRect();
    const left = grid.scrollLeft + (cardRect.left - gridRect.left) - (grid.clientWidth - cardRect.width) / 2;
    grid.scrollTo({ left, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <>
      <div className="pkg-grid" ref={gridRef}>
        {PACKAGES.map((pkg) => (
          <div className={`pkg-card${pkg.recommended ? " pkg-card-featured" : ""}`} key={pkg.name}>
            {pkg.recommended && <span className="pkg-tag">Recommended</span>}
            <h3>{pkg.name}</h3>
            <div className="pkg-price">{pkg.amount}</div>
            <span className="pkg-extra">{pkg.extra}</span>
            <ul className="pkg-list">
              {PACKAGE_INCLUDES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="pkg-action">
              <Link href="/contact" className="btn btn-primary">
                Choose plan
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="pkg-dots" role="tablist" aria-label="Choose a package">
        {PACKAGES.map((pkg, index) => (
          <button
            type="button"
            key={pkg.name}
            role="tab"
            aria-selected={index === active}
            aria-label={`Show ${pkg.name}`}
            className={`pkg-dot${index === active ? " is-active" : ""}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </>
  );
}
