"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Pages that belong under "Services", so the tab stays highlighted on them.
const SERVICE_PAGES = [
  "/our-services",
  "/reflexology",
  "/therapeutic-massage",
  "/hydrogen-therapy",
  "/healthpod",
  "/intelligent-wellness",
];

const TABS = [
  { label: "Home", href: "/", icon: "fas fa-home", match: ["/"] },
  { label: "Services", href: "/our-services", icon: "fas fa-spa", match: SERVICE_PAGES },
  { label: "Pricing", href: "/pricing", icon: "fas fa-tags", match: ["/pricing"] },
  { label: "Locations", href: "/locations", icon: "fas fa-map-marker-alt", match: ["/locations"] },
  { label: "Contact", href: "/contact", icon: "fas fa-phone-alt", match: ["/contact"] },
];

// Bottom tab bar, shown on phones and tablets only (see the .mobile-nav styles).
export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="mobile-nav" aria-label="Quick navigation">
      {TABS.map((tab) => {
        const active = tab.match.includes(pathname);
        return (
          <Link key={tab.href} href={tab.href} className={`mobile-nav-item${active ? " is-active" : ""}`} aria-current={active ? "page" : undefined}>
            <i className={tab.icon} aria-hidden="true"></i>
            <span>{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
