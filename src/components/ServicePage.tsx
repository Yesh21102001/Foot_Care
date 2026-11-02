import { Layout } from "./Layout";
import { CtaBanner, ItemGrid, PageHero } from "./Blocks";

type Item = { title: string; text: string };

export type ServicePageProps = {
  title: string;
  eyebrow: string;
  description: string;
  intro: string;
  benefits: Item[];
  steps: Item[];
  note?: string;
};

// Shared layout for the treatment pages (reflexology, massage, hydrogen, healthpod).
export function ServicePage({ title, eyebrow, description, intro, benefits, steps, note }: ServicePageProps) {
  return (
    <Layout title={title} description={description}>
      <PageHero eyebrow={eyebrow} title={title}>
        {intro}
      </PageHero>

      <section className="section">
        <div className="container">
          <h2>Benefits</h2>
          <p className="lead">What you can expect from {title.toLowerCase()}.</p>
          <ItemGrid items={benefits} />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>How a session works</h2>
          <p className="lead">A simple three-step process from first visit to follow-up care.</p>
          <ItemGrid items={steps} />
          {note && <p className="lead" style={{ marginTop: 32, marginBottom: 0 }}>{note}</p>}
        </div>
      </section>

      <CtaBanner title={`Ready to try ${title.toLowerCase()}?`} text="Book a session with one of our therapists today." />
    </Layout>
  );
}
