import Link from "next/link";
import { ArrowButton } from "./ArrowButton";
import { FooterAccordion } from "./FooterAccordion";
import { Icon } from "./icons/Icon";
import Image from "next/image";

// PLACEHOLDER phone number: replace with the real head-office number.
const PHONE = "+92 3800 8060";

const COMPANY = [
  { href: "/about-us", label: "About" },
  { href: "/our-services", label: "Our Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
];

const SERVICES = [
  { href: "/reflexology", label: "Reflexology" },
  { href: "/hydrogen-therapy", label: "Molecular Hydrogen Therapy" },
  { href: "/intelligent-wellness", label: "Intelligent Wellness" },
];

const LEGAL = [
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/contact", label: "Contact Us" },
];

function LinkList({ links }: { links: { href: string; label: string }[] }) {
  return (
    <ul className="sf-links">
      {links.map((link) => (
        <li key={link.href}>
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  );
}

// Site footer: a rounded photo panel with the booking call to action, the brand, link columns and the legal row.
export function SiteFooter() {
  return (
    <footer className="sf">
      <div className="sf-panel">
        <div className="sf-shade">
          <div className="sf-cta">
            <h2>
              Make Time for Yourself.
              <br />
              Schedule Your Session
            </h2>
            <ArrowButton label="Book Now" className="sf-book" />
          </div>

          <div className="sf-grid">
            <div className="sf-brand">
              <Link href="/" className="sf-logo">
                <Image src="/images/foot-care-logo.webp" alt="" width={56} height={56} />
                <span className="brand-wordmark brand-wordmark-light">Foot Care</span>
              </Link>
              <p>
                FOOT CARE brings together the art of massage therapy, traditional reflexology and carefully selected wellness
                experiences in a calm, professional setting.
              </p>
              <a className="sf-phone" href={`tel:${PHONE.replace(/[^+\d]/g, "")}`}>
                <span className="sf-phone-icon" aria-hidden="true">
                  <Icon name="phone" />
                </span>
                <span>
                  <strong>Get more information</strong>
                  <span>{PHONE}</span>
                </span>
              </a>
            </div>

            <FooterAccordion title={<p className="sf-heading">Company</p>}>
              <LinkList links={COMPANY} />
            </FooterAccordion>

            <FooterAccordion title={<p className="sf-heading">Services</p>}>
              <LinkList links={SERVICES} />
            </FooterAccordion>

            <div className="sf-col">
              <p className="sf-heading">Our Stores</p>
              <LinkList links={[{ href: "/locations", label: "Find the branch nearest you" }]} />
              <p className="sf-heading sf-heading-gap">Contact</p>
              <LinkList links={[{ href: "/contact", label: "Contact our team" }]} />
            </div>
          </div>

          <div className="sf-bottom">
            <p>© Copyright 2026 by Foot Care</p>
            <ul className="sf-legal">
              {LEGAL.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
