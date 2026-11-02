import { CtaBanner, PageHero } from "../components/Blocks";
import { Layout } from "../components/Layout";

// Placeholder reviews: replace with real client feedback.
const reviews = [
  {
    name: "Client A",
    text: "I felt looked after from the moment I arrived. My feet and my back both feel better.",
  },
  {
    name: "Client B",
    text: "The team built a plan around my work schedule. I sleep better and feel less stressed.",
  },
  {
    name: "Client C",
    text: "Clean, calm and professional. The Healthpod session became part of my weekly routine.",
  },
];

export default function Reviews() {
  return (
    <Layout title="Reviews" description="Read what our clients say about Wellxess therapies and services.">
      <PageHero eyebrow="Reviews" title="What our clients say">
        Honest feedback from people who have visited Wellxess for reflexology, massage and wellness sessions.
      </PageHero>

      <section className="section">
        <div className="container grid">
          {reviews.map((review) => (
            <figure className="card" key={review.name} style={{ margin: 0 }}>
              <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote style={{ margin: 0 }}>
                <p>“{review.text}”</p>
              </blockquote>
              <figcaption style={{ marginTop: 16, fontWeight: 600, color: "var(--color-evergreen)" }}>
                {review.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CtaBanner title="Share your experience" text="Visited us recently? We would love to hear what you think." />
    </Layout>
  );
}
