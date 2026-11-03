import { PageHero } from "../components/Blocks";
import { Layout } from "../components/Layout";

export default function Contact() {
  return (
    <Layout title="Contact" description="Contact Foot Care to book a session or ask a question.">
      <PageHero eyebrow="Contact" title="Let's plan your visit">
        Send us a message or call the team. We reply within one working day.
      </PageHero>

      <section className="section">
        <div className="container split">
          <div>
            <h2>Get in touch</h2>
            <p className="lead">Our team is available to help you choose the right treatment.</p>
            <div className="card">
              <p><strong>Phone:</strong> +00 000 000 000</p>
              <p><strong>Email:</strong> hello@example.com</p>
              <p><strong>Hours:</strong> Mon–Fri 9:00–20:00, Sat 10:00–20:00</p>
            </div>
          </div>

          <form className="card" onSubmit={(event) => event.preventDefault()}>
            <div className="field">
              <label htmlFor="name">Full name</label>
              <input id="name" name="name" type="text" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required />
            </div>
            <div className="field">
              <label htmlFor="service">Service</label>
              <input id="service" name="service" type="text" placeholder="e.g. Reflexology" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} />
            </div>
            <button type="submit" className="btn btn-primary">
              Send message
            </button>
            {/* TODO: connect this form to your backend or email service. It does not send anything yet. */}
          </form>
        </div>
      </section>
    </Layout>
  );
}
