import { ArrowButton } from "./ArrowButton";
import { PageHeading } from "./Blocks";
import { Layout } from "./Layout";

type Item = { title: string; text: string };

// Photo on one side, overview text and a Book button on the other. Also used by the reflexology page.
export function ServiceOverview({
  title,
  image,
  heading,
  children,
}: {
  title: string;
  image?: string;
  heading?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="sv-overview">
      <div className={`sv-overview-inner${image ? "" : " sv-no-photo"}`}>
        {image && <img className="sv-photo" src={image} alt={title} />}
        <div className="sv-overview-text">
          <span className="sv-kicker">Our Service</span>
          <h2>{heading ?? `About ${title}`}</h2>
          <div className="sv-overview-body">{children}</div>
          <div className="sv-overview-action">
            <ArrowButton label="Book a session" />
          </div>
        </div>
      </div>
    </section>
  );
}

export type ServicePageProps = {
  title: string;
  description: string;
  intro: string;
  image?: string;
  benefitsTitle?: string;
  benefits: Item[];
  steps?: Item[];
  note?: string;
};

// Shared layout for the service pages (therapeutic therapy, hydrogen therapy, intelligent wellness).
export function ServicePage({ title, description, intro, image, benefitsTitle = "Benefits", benefits, steps, note }: ServicePageProps) {
  return (
    <Layout title={title} description={description}>
      <PageHeading
        title={title}
        crumbs={[{ label: "Home", href: "/" }, { label: "Our Services", href: "/our-services" }, { label: title }]}
      />

      <ServiceOverview title={title} image={image}>
        <p>{intro}</p>
      </ServiceOverview>

      <section className="sv-benefits">
        <div className="sv-benefits-inner">
          <h2>{benefitsTitle}</h2>
          <div className="sv-cards">
            {benefits.map((item) => (
              <article className="sv-card" key={item.title}>
                <span className="sv-check" aria-hidden="true">
                  <i className="fas fa-check"></i>
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          {note && <p className="sv-note">{note}</p>}
        </div>
      </section>

      {steps && steps.length > 0 && (
        <section className="sv-steps">
          <div className="sv-steps-inner">
            <h2>How a session works</h2>
            <ol className="sv-step-list">
              {steps.map((step, index) => (
                <li className="sv-step" key={step.title}>
                  <span className="sv-step-num">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}
    </Layout>
  );
}
