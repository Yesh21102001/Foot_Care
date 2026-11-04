import { CtaBanner, PageHeading } from "../components/Blocks";
import { Layout } from "../components/Layout";

const questions = [
  {
    q: "What is foot reflexology?",
    a: "A complementary wellness practice in which a practitioner applies pressure to specific areas of the feet. It is traditionally associated with different body areas and is often chosen as a relaxing foot-focused experience.",
  },
  {
    q: "How is reflexology different from a regular foot massage?",
    a: "A regular foot massage generally focuses on relaxing the muscles and tissues of the feet. Reflexology uses specific pressure techniques based on a traditional map of reflex areas.",
  },
  {
    q: "Does reflexology hurt?",
    a: "The experience should be comfortable. Pressure may feel firm in some areas, but it should not be painful. Tell your therapist if you feel discomfort so pressure can be adjusted.",
  },
  {
    q: "How long does a session take?",
    a: "FOOT CARE offers different treatment durations. Please view the treatment menu or ask your chosen branch for current availability.",
  },
  {
    q: "What product is used during massage?",
    a: "FOOT CARE uses almond-based massage cream. Inform the team before booking if you have a nut allergy or skin sensitivity.",
  },
  {
    q: "Can I change into treatment clothing?",
    a: "Separate clean treatment clothing may be provided if you prefer not to wear your own clothing. Confirm availability with the branch.",
  },
  {
    q: "Will I be attended to by a same-gender therapist?",
    a: "Female guests are attended to by female massage therapists, and male guests by male massage therapists. Appointments depend on matching therapist availability.",
  },
  {
    q: "Can reflexology cure a medical condition?",
    a: "No. Reflexology is a complementary wellness practice, not a medical treatment. It should not replace diagnosis or care from a qualified healthcare professional.",
  },
  {
    q: "What is the technology-assisted wellness assessment?",
    a: "An optional wellness assessment using technology to capture and display selected measurements in a digital overview. It is not a medical diagnosis.",
  },
  {
    q: "What is Molecular Hydrogen Therapy?",
    a: "A separate breathing-based wellness experience involving molecular hydrogen. Contact the branch for confirmed session details, suitability and safety information.",
  },
  {
    q: "How do I book a session?",
    a: "Use the Book a session button to select a branch, treatment and preferred appointment time, then submit your contact details. The branch will contact you to confirm availability.",
  },
  {
    q: "Can I walk in without an appointment?",
    a: "Walk-ins may be accepted subject to therapist and seating availability. Booking ahead is recommended.",
  },
  {
    q: "Are all services available at every branch?",
    a: "Availability may vary by branch. Check the individual branch page or contact the location before visiting.",
  },
  {
    q: "Can I use a prepaid package at another branch?",
    a: "Please confirm package acceptance and terms with the branch before booking.",
  },
  {
    q: "What if I need to cancel or reschedule?",
    a: "Please contact the branch as early as possible. The branch will confirm the cancellation and rescheduling window.",
  },
  {
    q: "Is parking available?",
    a: "Parking varies by branch. Check the individual location page for current information.",
  },
];

export default function Faq() {
  return (
    <Layout title="FAQ" description="Answers to common questions about booking, treatments and what to expect at Foot Care.">
      <PageHeading title="Frequently asked questions" crumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]} maxWidth={820} />

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

      <CtaBanner
        title="Still have a question?"
        text="Our team is happy to help before you book."
        link={{ label: "Contact us", href: "/contact" }}
        arrowButtons
      />
    </Layout>
  );
}
