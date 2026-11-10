import type { ReactNode } from "react";
import { ArrowButton } from "../components/ArrowButton";
import { PageHeading } from "../components/Blocks";
import { Layout } from "../components/Layout";

// A content block with a photo on one side and the text on the other. `textFirst` puts the text on the left on large screens.
function PhotoBlock({
  image,
  alt,
  kicker,
  heading,
  textFirst = false,
  tinted = false,
  children,
}: {
  image: string;
  alt: string;
  kicker: string;
  heading: string;
  textFirst?: boolean;
  tinted?: boolean;
  children: ReactNode;
}) {
  return (
    <section className={`hy-block${tinted ? " hy-block-alt" : ""}`}>
      <div className={`sv-overview-inner${textFirst ? " sv-flip" : ""}`}>
        <img className="sv-photo" src={image} alt={alt} loading="lazy" />
        <div className="sv-overview-text">
          <span className="sv-kicker">{kicker}</span>
          <h2>{heading}</h2>
          <div className="sv-overview-body">{children}</div>
        </div>
      </div>
    </section>
  );
}

// A plain text block, with no photo.
function TextBlock({ heading, tinted = false, children }: { heading: string; tinted?: boolean; children: ReactNode }) {
  return (
    <section className={`hy-block${tinted ? " hy-block-alt" : ""}`}>
      <div className="hy-plain">
        <h2>{heading}</h2>
        {children}
      </div>
    </section>
  );
}

export default function AboutUs() {
  return (
    <Layout
      title="About Us"
      description="FOOT CARE brings together massage therapy, traditional reflexology and carefully selected wellness experiences in a calm, professional setting."
    >
      <PageHeading title="About Us" crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]} hideTitle />

      {/* 1. Photo left, text right */}
      <PhotoBlock
        image="/images/who-reception-2.png"
        alt="Two guests relaxing during a massage"
        kicker="Our philosophy"
        heading="The Art of Feeling Better"
      >
        <p>
          <strong>Wellness, Thoughtfully Experienced.</strong> FOOT CARE brings together the art of massage therapy, traditional reflexology and carefully selected wellness
          experiences in a calm, professional setting.
        </p>
        <p>
          We believe that taking time to relax should feel considered, comfortable and personal. Every visit is shaped
          around you, so you can slow down and unwind at your own pace.
        </p>
      </PhotoBlock>

      {/* 2. Plain text */}
      <TextBlock heading="Our Commitment to Professional, Respectful Service" tinted>
        <p>Attentive service and a commitment to guest comfort, from the moment you arrive to the moment you leave.</p>
        <p>
          We explain what to expect, respect your preferences, and adjust to how you feel, so every session is
          comfortable from start to finish.
        </p>
      </TextBlock>

      {/* 3. Text left, photo right */}
      <PhotoBlock
        image="/images/about-recliners.png"
        alt="Massage oil and a candle beside a foot massage"
        kicker="Our treatments"
        heading="Our Treatment Approach and Use of Almond Massage Cream"
        textFirst
      >
        <p>
          Massage therapy and traditional reflexology, delivered with almond massage cream in a calm, unhurried
          setting.
        </p>
        <p>
          If you have a nut allergy or skin sensitivity, please tell us before you book so we can look after you
          properly.
        </p>
      </PhotoBlock>

      {/* 4. Plain text */}
      <TextBlock heading="Our Therapists" tinted>
        <p>Our therapists take the time to understand how you feel before every session begins.</p>
        <p>Pressure is adjusted to your comfort throughout, and you can ask for lighter or firmer work at any time.</p>
      </TextBlock>

      {/* 5. Plain text with a button */}
      <TextBlock heading="Our Locations and Franchise">
        <p>
          Foot Care is a franchise with stores in several locations, so a calm, professional visit is never far away.
        </p>
        <p>Find the store nearest you and book your session.</p>
        <div className="hy-action" style={{ textAlign: "center" }}>
          <ArrowButton label="Find a store" href="/locations" />
        </div>
      </TextBlock>
    </Layout>
  );
}
