import Link from "next/link";
import { ArrowButton } from "./ArrowButton";
import { BookingButton } from "./BookingButton";
import type { ReactNode } from "react";

// Hero photo. Replace with a massage or spa photo when you have one.
const HERO_IMAGE = "/images/hero-massage.jpg";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  accent?: string;
  image?: string;
  imagePosition?: string;
  imageFit?: "cover" | "contain";
  arrowButtons?: boolean;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, accent, image = HERO_IMAGE, imagePosition = "center center", imageFit = "cover", arrowButtons = false, children }: PageHeroProps) {
  return (
    <section
      className="hero hero-photo"
      style={{
        backgroundImage: imageFit === "contain"
          ? `linear-gradient(90deg, #0b2622 0%, #0b2622 34%, rgba(11, 38, 34, 0) 52%), url("${image}")`
          : `url("${image}")`,
        backgroundPosition: imagePosition,
        backgroundSize: imageFit,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <span className="eyebrow-pill">{eyebrow}</span>
        <h1>
          {title}
          {accent && (
            <>
              <br />
              <em>{accent}</em>
            </>
          )}
        </h1>
        {children && <p>{children}</p>}
        <div className="hero-actions">
          {arrowButtons ? (
            <ArrowButton label="Our services" href="/our-services" />
          ) : (
            <>
              <BookingButton className="btn btn-primary">Book a session</BookingButton>
              <Link href="/our-services" className="btn btn-outline-light">
                Our services
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

type CtaBannerProps = {
  title: string;
  text: string;
  arrowButtons?: boolean;
  // Optional link button (for example Contact us) instead of the booking button.
  link?: { label: string; href: string };
};

export function CtaBanner({ title, text, arrowButtons = false, link }: CtaBannerProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta">
          <h2>{title}</h2>
          <p>{text}</p>
          {link ? (
            arrowButtons ? (
              <ArrowButton label={link.label} href={link.href} />
            ) : (
              <Link href={link.href} className="btn btn-primary">
                {link.label}
              </Link>
            )
          ) : arrowButtons ? (
            <ArrowButton label="Book a session" />
          ) : (
            <BookingButton className="btn btn-primary">Book a session</BookingButton>
          )}
        </div>
      </div>
    </section>
  );
}

type Item = { title: string; text: string };

export function ItemGrid({ items, icon }: { items: Item[]; icon?: string }) {
  return (
    <div className="grid">
      {items.map((item, index) => (
        <div className="card" key={item.title}>
          <div className="badge">{icon ?? index + 1}</div>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

type Crumb = { label: string; href?: string };

// Plain page heading with a breadcrumb trail, for pages that do not use the photo hero.
export function PageHeading({
  title,
  crumbs,
  maxWidth,
  intro,
}: {
  title: string;
  crumbs: Crumb[];
  maxWidth?: number;
  intro?: string;
}) {
  return (
    <section className="page-heading">
      <div className="container" style={maxWidth ? { maxWidth } : undefined}>
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <ol>
            {crumbs.map((crumb, index) => {
              const last = index === crumbs.length - 1;
              return (
                <li key={crumb.label} aria-current={last ? "page" : undefined}>
                  {crumb.href && !last ? <Link href={crumb.href}>{crumb.label}</Link> : crumb.label}
                </li>
              );
            })}
          </ol>
        </nav>
        <h1>{title}</h1>
        {intro && <p className="page-heading-intro">{intro}</p>}
      </div>
    </section>
  );
}
