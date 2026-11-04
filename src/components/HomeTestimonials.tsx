// PLACEHOLDER REVIEWS: replace with real client feedback (name, role, quote).
const REVIEWS = [
  {
    name: "Client A",
    role: "Reflexology guest",
    text: "I felt looked after from the moment I arrived. My feet and my back both feel better.",
  },
  {
    name: "Client B",
    role: "Massage guest",
    text: "The team built a plan around my work schedule. I sleep better and feel less stressed.",
  },
  {
    name: "Client C",
    role: "Healthpod guest",
    text: "Clean, calm and professional. The Healthpod session became part of my weekly routine.",
  },
];

export function HomeTestimonials() {
  return (
    <section id="home-testimonials" className="home-testimonials">
      <div className="container">
        <h2>Trusted by our Foot Care</h2>
        <div className="home-testimonials-grid">
          {REVIEWS.map((review) => (
            <figure className="ht-card" key={review.name}>
              <span className="ht-quote" aria-hidden="true">
                “
              </span>
              <blockquote>{review.text}</blockquote>
              <figcaption className="ht-person">
                <span className="ht-avatar" aria-hidden="true">
                  {review.name.slice(-1)}
                </span>
                <span>
                  <strong>{review.name}</strong>
                  <small>{review.role}</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
