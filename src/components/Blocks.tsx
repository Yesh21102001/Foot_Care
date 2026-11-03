import Link from "next/link";
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
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, accent, image = HERO_IMAGE, imagePosition = "center center", imageFit = "cover", children }: PageHeroProps) {
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
          <BookingButton className="btn btn-primary">Book a session</BookingButton>
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
          <BookingButton className="btn btn-primary">Book a session</BookingButton>
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
