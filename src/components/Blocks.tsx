import Link from "next/link";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, children }: PageHeroProps) {
  return (
    <section className="hero">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {children && <p>{children}</p>}
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
