import type { Metadata } from "next";
import Link from "next/link";
import { ArrowButton } from "../../../components/ArrowButton";
import { PageHeading } from "../../../components/Blocks";
import { Layout } from "../../../components/Layout";
import { StaticForm } from "../../../components/StaticForm";
import { BRANCHES } from "../../../data/branches";

// PLACEHOLDER head-office details: replace with the real phone, email and hours.
const PHONE = "+00 000 000 000";
const EMAIL = "hello@example.com";
const HOURS = "Mon–Fri 9:00–20:00, Sat 10:00–20:00";

const ENQUIRY_TYPES = ["General question", "Book a session", "Franchise enquiry", "Feedback"];

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Foot Care: find your nearest branch, call or email our team, or send us a message.",
};

export default function Contact() {
  return (
    <Layout>
      <PageHeading
        title="Contact us"
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        intro="Questions, bookings or feedback? Reach our team, or visit the Foot Care branch nearest you."
      />

      <section className="section contact-section">
        <div className="container">
          <div className="contact-cards">
            <article className="contact-card">
              <span className="contact-icon" aria-hidden="true">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <h3>Visit a branch</h3>
              <p>Find the branch nearest you, with its address, phone number and directions.</p>
              <Link href="/locations" className="contact-link">
                View all branches <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </Link>
            </article>

            <article className="contact-card">
              <span className="contact-icon" aria-hidden="true">
                <i className="fas fa-phone-alt"></i>
              </span>
              <h3>Call us</h3>
              <p>{HOURS}</p>
              <a href={`tel:${PHONE.replace(/[^+\d]/g, "")}`} className="contact-link">
                {PHONE} <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </a>
            </article>

            <article className="contact-card">
              <span className="contact-icon" aria-hidden="true">
                <i className="fas fa-envelope"></i>
              </span>
              <h3>Email us</h3>
              <p>Send us a note and the team will reply within one working day.</p>
              <a href={`mailto:${EMAIL}`} className="contact-link">
                {EMAIL} <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </a>
            </article>
          </div>

          <StaticForm className="contact-form">
            <h3>Send us a message</h3>
            <p>Tell us what you need and which branch you have in mind. We will get back to you.</p>

            <div className="contact-fields">
              <div className="field">
                <label htmlFor="name">Full name</label>
                <input id="name" name="name" type="text" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="field">
                <label htmlFor="enquiry">Enquiry type</label>
                <select id="enquiry" name="enquiry" defaultValue={ENQUIRY_TYPES[0]}>
                  {ENQUIRY_TYPES.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div className="field contact-wide">
                <label htmlFor="branch">Branch</label>
                <select id="branch" name="branch" defaultValue="">
                  <option value="">No preference</option>
                  {BRANCHES.map((branch) => (
                    <option key={branch.name}>{branch.name}</option>
                  ))}
                </select>
              </div>
              <div className="field contact-wide">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required />
              </div>
            </div>

            <ArrowButton label="Send message" submit />
            {/* TODO: connect this form to your backend or email service. It does not send anything yet. */}
          </StaticForm>
        </div>
      </section>
    </Layout>
  );
}
