"use client";

import { useEffect } from "react";

const PRELOADER_MS = 3000;

// The original theme hides #preloader from its JavaScript. Without that script
// the overlay would cover the page, so hide it after three seconds.
export function HidePreloader() {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      const preloader = document.getElementById("preloader");
      if (preloader) preloader.style.display = "none";
    }, PRELOADER_MS);

    return () => window.clearTimeout(timer);
  }, []);

  return null;
}
