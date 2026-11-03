import { CtaBanner, PageHero } from "../components/Blocks";
import { Layout } from "../components/Layout";

const questions = [
  {
    q: "Do I need an appointment?",
    a: "Yes. Booking ensures your therapist is ready for you. You can book online or call us.",
  },
  {
    q: "What should I wear?",
    a: "Comfortable clothing is fine. For foot treatments, wear socks that are easy to remove.",
  },
  {
    q: "Is reflexology safe?",
    a: "Reflexology is generally gentle. Tell us about any medical conditions, injuries or pregnancy before your session.",
  },
  {
    q: "Can I combine treatments?",
    a: "Yes. Many clients pair reflexology with massage or a Healthpod session. Our team will suggest a sensible order.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Please give us at least 24 hours' notice so we can offer the slot to someone else.",
  },
];

export default function Faq() {
  return (
    <Layout title="FAQ" description="Answers to common questions about booking, treatments and what to expect at Foot Care.">
      <PageHero eyebrow="FAQ" title="Frequently asked questions">
        Quick answers to help you prepare for your visit.
      </PageHero>

      <section className="section">
        <div className="container faq" style={{ maxWidth: 820 }}>
          {questions.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaBanner title="Still have a question?" text="Our team is happy to help before you book." />
    </Layout>
  );
}
