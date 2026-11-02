"use client";

import { useEffect } from "react";
import Swiper from "swiper";

const SELECTOR = ".tm-swiper-container";

// Replaces the theme's carousel setup. Each carousel keeps the settings the
// WordPress shortcode wrote into its data-* attributes.
function flag(el: HTMLElement, key: string) {
  return el.dataset[key] === "true";
}

function number(el: HTMLElement, key: string, fallback: number) {
  const value = Number(el.dataset[key]);
  return Number.isFinite(value) && el.dataset[key] !== "" ? value : fallback;
}

function createCarousel(container: HTMLElement) {
  const inner = container.querySelector<HTMLElement>(".swiper-container-inner");
  if (!inner) return null;
  inner.classList.add("swiper-container");

  const next = container.querySelector<HTMLElement>(".tm-swiper-button-next");
  const prev = container.querySelector<HTMLElement>(".tm-swiper-button-prev");
  const pagination = container.querySelector<HTMLElement>(".swiper-pagination");
  const showArrows = flag(container, "arrow");
  const showBullets = flag(container, "bullets");

  return new Swiper(inner, {
    slidesPerView: number(container, "items", 1),
    spaceBetween: number(container, "space", 0),
    centeredSlides: flag(container, "centered"),
    loop: flag(container, "loop"),
    speed: number(container, "speed", 300),
    allowTouchMove: flag(container, "allowtouchmove"),
    autoplay: flag(container, "autoplay")
      ? {
          delay: number(container, "delay", 3000),
          disableOnInteraction: flag(container, "disableoninteraction"),
          pauseOnMouseEnter: flag(container, "pauseonmouseenter"),
        }
      : false,
    navigation:
      showArrows && next && prev ? { nextEl: next, prevEl: prev } : false,
    pagination:
      showBullets && pagination
        ? { el: pagination, clickable: true }
        : false,
    breakpoints: {
      0: { slidesPerView: number(container, "xsItems", 1) },
      480: { slidesPerView: number(container, "smItems", 1) },
      768: { slidesPerView: number(container, "mdItems", 2) },
      1025: { slidesPerView: number(container, "lgItems", 2) },
      1600: { slidesPerView: number(container, "xxlItems", 3) },
    },
  });
}

export function SwiperCarousels() {
  useEffect(() => {
    const carousels = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR))
      .map(createCarousel)
      .filter((c): c is Swiper => c !== null);

    return () => carousels.forEach((c) => c.destroy(true, true));
  }, []);

  return null;
}
