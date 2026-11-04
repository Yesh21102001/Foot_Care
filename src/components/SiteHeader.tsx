"use client";

import Link from "next/link";
import { ArrowButton } from "./ArrowButton";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";

type Item = { href: string; label: string };
type Group = { label: string; items: Item[] };
type NavEntry = Item | Group;

const treatments: Item[] = [
  { href: "/reflexology", label: "Reflexology" },
  { href: "/therapeutic-massage", label: "Therapeutic Massage" },
  { href: "/hydrogen-therapy", label: "Hydrogen Therapy" },
  { href: "/healthpod", label: "Healthpod" },
];

const nav: NavEntry[] = [
  { href: "/about-us", label: "About Us" },
  { label: "Services", items: [{ href: "/our-services", label: "All services" }, ...treatments] },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
];

const isGroup = (entry: NavEntry): entry is Group => "items" in entry;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Smart header: hide on scroll down, show on scroll up, compact once the page has scrolled.
  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;

    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y > lastY && y > 120) setHidden(true);
      else if (y < lastY) setHidden(false);
      lastY = y;
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Close the mobile menu after a link is chosen, but not when a dropdown is toggled.
  const handleNavClick = (event: MouseEvent<HTMLElement>) => {
    if ((event.target as HTMLElement).closest("a")) setOpen(false);
  };

  return (
    <header
      className={`site-header${scrolled ? " is-scrolled" : ""}${hidden && !open ? " is-hidden" : ""}`}
    >
      <div className="container header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-wordmark">Foot Care</span>
        </Link>

        <nav id="site-nav" className={`site-nav${open ? " is-open" : ""}`} aria-label="Main" onClick={handleNavClick}>
          <ul className="nav-list">
            {nav.map((entry) => {
              if (!isGroup(entry)) {
                const active = pathname === entry.href;
                return (
                  <li key={entry.href}>
                    <Link href={entry.href} className="nav-link" aria-current={active ? "page" : undefined}>
                      {entry.label}
                    </Link>
                  </li>
                );
              }

              const active = entry.items.some((item) => pathname === item.href);
              return (
                <li key={entry.label}>
                  <details className={`nav-dropdown${active ? " is-active" : ""}`}>
                    <summary className="nav-link">{entry.label}</summary>
                    <ul className="dropdown-menu">
                      {entry.items.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              );
            })}
          </ul>
        </nav>

        <ArrowButton label="Book a session" className="header-cta-arrow" />

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="menu-icon" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
