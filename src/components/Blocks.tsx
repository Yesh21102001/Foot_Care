import Link from "next/link";
import type { ReactNode } from "react";

// Hero photo. Replace with a massage or spa photo when you have one.
const HERO_IMAGE = "/images/hero-massage.jpg";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  accent?: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, accent, children }: PageHeroProps) {
  return (
    <section className="hero hero-photo" style={{ backgroundImage: `url("${HERO_IMAGE}")` }}>
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
          <Link href="/contact" className="btn btn-primary">
            Book a session
          </Link>
          <Link href="/our-services" className="btn btn-outline-light">
            Our services
          </Link>
        </div>
      </div>
    </section>
  );
}

type CtaBannerProps = {
  title: string;
  text: string;
};

export function CtaBanner({ title, text }: CtaBannerProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta">
          <h2>{title}</h2>
          <p>{text}</p>
          <Link href="/contact" className="btn btn-primary">
            Book a session
          </Link>
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
