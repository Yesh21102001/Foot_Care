"use client";

import Link from "next/link";
import { ArrowButton } from "./ArrowButton";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type MouseEvent } from "react";

type Item = { href: string; label: string };
type Group = { label: string; items: Item[] };
type NavEntry = Item | Group;

const services: Item[] = [
  { href: "/pricing", label: "Treatment Menu & Pricing" },
  { href: "/reflexology", label: "Foot Reflexology" },
  { href: "/intelligent-wellness", label: "Intelligent Wellness Experience" },
  { href: "/hydrogen-therapy", label: "Molecular Hydrogen Therapy" },
];

const nav: NavEntry[] = [
  { href: "/about-us", label: "About Us" },
  { label: "Our Services", items: services },
  { href: "/locations", label: "Locations" },
  { href: "/faq", label: "FAQs" },
  { href: "/guest-guidelines", label: "Guidelines" },
  { href: "/contact", label: "Contact" },
];

const isGroup = (entry: NavEntry): entry is Group => "items" in entry;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimer = useRef<number | undefined>(undefined);

  // On desktop with a mouse, the Services dropdown opens on hover and closes when the pointer leaves.
  const canHover = () => window.matchMedia("(min-width: 961px) and (hover: hover)").matches;
  const openDropdown = () => {
    if (!canHover()) return;
    window.clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };
  const closeDropdown = () => {
    if (!canHover()) return;
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setDropdownOpen(false), 150);
  };
  const [hidden, setHidden] = useState(false);
  // The header is transparent until the page scrolls. The home page has a dark photo behind it, so its text is light there.
  const onDarkHero = pathname === "/" || pathname === "/hydrogen-therapy" || pathname === "/intelligent-wellness";
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

  // While the side menu is open: stop the page behind it from scrolling, and close it with Escape.
  useEffect(() => {
    if (!open) return;
    // The page scrolls on <html> here, so both <html> and <body> must be locked.
    const root = document.documentElement;
    const previousRoot = root.style.overflow;
    const previousBody = document.body.style.overflow;
    root.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = previousRoot;
      document.body.style.overflow = previousBody;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Close the side menu after a link or the Book a session button is chosen, but not when a dropdown is toggled.
  const handleNavClick = (event: MouseEvent<HTMLElement>) => {
    if ((event.target as HTMLElement).closest("a, .drawer-cta button")) {
      setOpen(false);
      setDropdownOpen(false);
    }
  };

  return (
    <header
      className={`site-header${scrolled ? " is-scrolled" : ""}${onDarkHero ? " is-on-dark" : ""}${hidden && !open ? " is-hidden" : ""}${open ? " is-menu-open" : ""}`}
    >
      <div className="container header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <img className="brand-logo" src="/images/foot-care-logo.webp" alt="" width={44} height={44} />
          <span className="brand-wordmark">Foot Care</span>
        </Link>

        <div className={`nav-backdrop${open ? " is-open" : ""}`} onClick={() => setOpen(false)} aria-hidden="true" />

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
                  <details
                    className={`nav-dropdown${active ? " is-active" : ""}`}
                    open={dropdownOpen}
                    onToggle={(event) => setDropdownOpen(event.currentTarget.open)}
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                  >
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
          <div className="drawer-cta">
            <ArrowButton label="Schedule Your Session" />
          </div>
        </nav>

        <ArrowButton label="Schedule Your Session" className="header-cta-arrow" />

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
