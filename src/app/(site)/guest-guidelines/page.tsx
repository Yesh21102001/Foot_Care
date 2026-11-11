import type { Metadata } from "next";
import { Layout } from "../../../components/Layout";

// Guest guidelines: a numbered index on the left (sticky on desktop) and the policy cards on the right.
const SECTIONS: { title: string; paragraphs: string[]; highlight?: boolean }[] = [
  {
    title: "Almond cream",
    paragraphs: [
      "Our massage treatments use an almond-based massage cream rather than massage oils.",
      "If you have a nut allergy or any known skin sensitivity, please tell our team before your treatment. Where a relevant allergy is known, we will not use the almond-based product — we will discuss a suitable alternative or, if none is available, we may be unable to proceed with the treatment.",
    ],
  },
  {
    title: "Clothing & changing",
    paragraphs: [
      "You may remain in clothing suitable for your selected treatment. If you are concerned that your own clothing may come into contact with massage cream, separate clean treatment clothing can be provided.",
      "Our team will explain how to prepare for your treatment, and your privacy and appropriate coverage are respected at every step.",
    ],
  },
  {
    title: "Experienced therapists",
    paragraphs: ["Sessions are delivered by trained massage therapists with practical experience."],
  },
  {
    title: "A curated experience",
    paragraphs: [
      "Every session is thoughtfully designed around comfort, relaxation and attention to detail, from the treatment environment to the techniques used.",
    ],
  },
  {
    title: "Reflexology",
    paragraphs: [
      "Foot reflexology is a signature part of the FOOT CARE experience, rooted in traditional reflexology practices. It is a complementary wellness practice and is not intended to diagnose, treat or cure medical conditions.",
    ],
  },
  {
    title: "Gender-matched therapist policy",
    highlight: true,
    paragraphs: [
      "Female guests will be attended to by female massage therapists. Male guests will be attended to by male massage therapists.",
      "Appointments are confirmed only once a matching therapist is available at your chosen branch.",
    ],
  },
  {
    title: "Technology-assisted wellness",
    paragraphs: [
      "Our optional technology-assisted wellness assessment is for general wellness information only. It is not a medical examination or diagnosis and is not a substitute for clinical care.",
      "Participation is entirely voluntary. Our team will explain the process and ask for your consent beforehand, and your personal results are handled in line with applicable privacy requirements.",
    ],
  },
  {
    title: "Molecular Hydrogen Therapy",
    paragraphs: [
      "Molecular Hydrogen Therapy may be offered as a separate wellness service. Service-specific eligibility, safety information and consent requirements will be shared before any session.",
    ],
  },
  {
    title: "Health disclosure & consent",
    paragraphs: [
      "Before your treatment, please let our team know about any allergies, sensitivities, injuries, pregnancy, medical conditions, implanted electronic devices or other concerns that may affect whether a service is suitable for you.",
      "Our services do not replace medical advice. If you are unsure whether a treatment is right for you, please consult a qualified healthcare professional first.",
    ],
  },
  {
    title: "Professional conduct & service boundaries",
    highlight: true,
    paragraphs: [
      "FOOT CARE is a professional massage therapy and wellness establishment. Our services are strictly limited to the treatments listed on our official service menu.",
      "Inappropriate requests or conduct outside professional massage therapy will not be accepted, and our staff may end a session if boundaries are not respected.",
    ],
  },
  {
    title: "Hygiene & privacy",
    paragraphs: [
      "Clean towels and treatment clothing are used for every guest. Treatment surfaces and reusable equipment are cleaned and disinfected between guests.",
      "Appropriate draping and privacy are maintained throughout, and access to your personal information is restricted.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Guest Guidelines & Policies",
  description: "FOOT CARE guest guidelines: almond cream, clothing, therapists, reflexology, gender-matched therapists, consent, conduct, hygiene and privacy.",
};

export default function GuestGuidelines() {
  return (
    <Layout>
      <section className="gg-hero">
        <div className="gg-inner">
          <p className="gg-crumbs">FOOT CARE / GUEST GUIDELINES &amp; POLICIES</p>
          <h1>
            Our Promise of Comfort
            <br />& Professional Care
          </h1>
          <p className="gg-intro">
            At FOOT CARE, your comfort, dignity, privacy and wellbeing are at the heart of every experience. Our treatments are
            designed to offer a professional, relaxing and carefully curated massage therapy experience.
          </p>
        </div>
      </section>

      <section className="gg-body">
        <div className="gg-inner gg-layout">
          <nav className="gg-index" aria-label="Guidelines">
            <ol>
              {SECTIONS.map((section, index) => (
                <li key={section.title}>
                  <a href={`#gg-${index + 1}`}>
                    <span className="gg-index-num">{index + 1}</span>
                    <span>{section.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="gg-cards">
            {SECTIONS.map((section, index) => (
              <article id={`gg-${index + 1}`} className={`gg-card${section.highlight ? " is-highlight" : ""}`} key={section.title}>
                <div className="gg-card-head">
                  <span className="gg-card-num">{String(index + 1).padStart(2, "0")}</span>
                  <h2>{section.title}</h2>
                </div>
                {section.paragraphs.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
