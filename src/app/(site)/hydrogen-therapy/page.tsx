import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArrowButton } from "../../../components/ArrowButton";
import { PageHero } from "../../../components/Blocks";
import { Layout } from "../../../components/Layout";
import { ServiceOverview } from "../../../components/ServicePage";
import { Icon } from "../../../components/icons/Icon";
import { Photo } from "../../../components/Photo";

const WHY_HYDROGEN = [
  { title: "Oxidative Stress", text: "Being studied for its potential antioxidant properties." },
  { title: "Inflammation", text: "Research is exploring its possible effects on inflammatory responses." },
  { title: "Recovery & Wellbeing", text: "Investigated for its potential role in physical recovery." },
  { title: "Cellular Wellness", text: "Early studies are examining how molecular hydrogen interacts with cellular processes." },
];

const MECHANISMS = [
  {
    title: "Antioxidant Activity",
    text: "Molecular hydrogen is being studied for its ability to selectively interact with certain harmful reactive oxygen species.",
  },
  {
    title: "Oxidative Stress Regulation",
    text: "Research suggests that hydrogen may influence biological pathways involved in oxidative stress regulation.",
  },
  {
    title: "Inflammation Research",
    text: "Studies are examining its possible effects on inflammatory signalling pathways.",
  },
  {
    title: "Cellular Protection",
    text: "Researchers are investigating whether molecular hydrogen may help protect cells against oxidative damage.",
  },
  {
    title: "Mitochondrial Function",
    text: "Mitochondria are responsible for producing much of the energy required by our cells. Molecular hydrogen is being studied for its potential interactions with mitochondrial function.",
  },
];

const METHODS = [
  {
    title: "Hydrogen Inhalation Therapy",
    text: [
      "Hydrogen inhalation involves breathing a controlled hydrogen-containing gas mixture through a suitable delivery system.",
      "This method is being investigated in clinical research for its potential biological effects.",
    ],
  },
  {
    title: "Hydrogen-Rich Water",
    text: [
      "Hydrogen-rich water is drinking water containing dissolved molecular hydrogen.",
      "Specially designed hydrogen water generators and bottles are used to produce hydrogen-enriched water.",
    ],
  },
  {
    title: "Hydrogen-Based Wellness Applications",
    text: ["Research and product development also explore hydrogen delivery through specialised water-based and topical applications."],
  },
];

const BENEFITS = [
  {
    title: "Antioxidant potential",
    text: "Molecular hydrogen is being studied for its ability to selectively interact with certain harmful reactive oxygen species.",
  },
  {
    title: "Oxidative stress support",
    text: "Researchers are exploring whether it may help regulate oxidative stress through its antioxidant properties.",
  },
  {
    title: "Cellular health",
    text: "It is being investigated for its possible role in supporting cellular health and protecting cells against oxidative damage.",
  },
  {
    title: "Inflammation research",
    text: "Studies are examining its possible effects on inflammatory signalling pathways.",
  },
  {
    title: "Energy and mitochondria",
    text: "Its potential interactions with mitochondrial function, which produces much of our cells' energy, are being studied.",
  },
  {
    title: "Wellness and sports recovery",
    text: "Hydrogen-based technologies are attracting attention in wellness and sports recovery.",
  },
];

const RESEARCH_AREAS = [
  "Oxidative stress and antioxidant activity",
  "Inflammation and cellular signalling",
  "Sports performance and recovery",
  "Cardiovascular health",
  "Neurological health",
  "Respiratory health",
  "Metabolic health",
  "Skin health and ageing",
];

const ATTENTION = [
  "Its potential antioxidant mechanisms.",
  "Its ability to diffuse through biological membranes.",
  "Its possible influence on cellular signalling.",
  "Different methods of hydrogen delivery.",
  "Its potential applications in future medical research.",
];

const FAQS = [
  {
    q: "What is molecular hydrogen (H₂)?",
    a: "Molecular hydrogen is a gas consisting of two hydrogen atoms bonded together. It is being investigated for its potential antioxidant and biological properties.",
  },
  {
    q: "What is hydrogen inhalation therapy?",
    a: "It is a method of delivering molecular hydrogen through a specialised gas-delivery system using an appropriate inhalation interface.",
  },
  {
    q: "What is hydrogen-rich water?",
    a: "Hydrogen-rich water is drinking water containing dissolved molecular hydrogen.",
  },
  {
    q: "Is molecular hydrogen an antioxidant?",
    a: "Research suggests that molecular hydrogen may exhibit selective antioxidant activity and influence oxidative stress-related biological pathways.",
  },
  {
    q: "Is hydrogen therapy scientifically proven?",
    a: "Human studies have reported promising findings, but evidence remains limited for many proposed applications. More large-scale clinical trials are required.",
  },
  {
    q: "Can hydrogen therapy replace conventional medical treatment?",
    a: "No. Molecular hydrogen therapy should not replace prescribed medication, established medical treatment, or professional medical advice.",
  },
];

// A section with a photo on one side and text on the other. `textFirst` puts the text on the left on large screens.
function PhotoSection({
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
        <Photo className="sv-photo" src={image} alt={alt} sizes="(max-width: 900px) 100vw, 50vw" />
        <div className="sv-overview-text">
          <span className="sv-kicker">{kicker}</span>
          <h2>{heading}</h2>
          <div className="sv-overview-body">{children}</div>
        </div>
      </div>
    </section>
  );
}

export const metadata: Metadata = {
  title: "Molecular Hydrogen Therapy",
  description: "Molecular Hydrogen Therapy is an emerging wellness technology exploring the potential applications of molecular hydrogen (H₂) in supporting the body's natural biological processes.",
};

export default function HydrogenTherapy() {
  return (
    <Layout>
      {/* Hero: same styling as the home hero (text on the left over a dark green fade). */}
      <div className="fc-site home-hero-wrap hy-hero">
        <PageHero
          eyebrow="Wellness research"
          title="Molecular Hydrogen Therapy"
          image="/images/hydrogen/hero.webp"
          imagePosition="center center"
          actions={<ArrowButton label="Book a session" />}
        >
          A new dimension of wellness, designed around relaxation and modern scientific exploration.
        </PageHero>
      </div>

      {/* 1. Photo left, text right */}
      <ServiceOverview title="Molecular Hydrogen Therapy" image="/images/hydrogen/overview.webp" heading="Discover the Science of Molecular Hydrogen (H₂)">
        <p>
          Molecular Hydrogen Therapy is an emerging wellness technology that explores the potential applications of
          molecular hydrogen (H₂) in supporting the body&apos;s natural biological processes.
        </p>
        <p>
          Molecular hydrogen is the smallest molecule, consisting of two hydrogen atoms. Researchers are investigating
          its antioxidant properties and its possible role in managing oxidative stress and supporting cellular health.
        </p>
        <p>
          As scientific interest continues to grow, hydrogen-based technologies are attracting attention in wellness,
          sports recovery, and medical research.
        </p>
      </ServiceOverview>

      {/* New dimension of wellness: why molecular hydrogen */}
      <section className="sv-benefits nd-section">
        <div className="sv-benefits-inner">
          <h2>A New Dimension of Wellness</h2>
          <p className="nd-lead">
            Discover an innovative wellness experience designed around relaxation and modern scientific exploration.
          </p>
          <h3 className="nd-sub">Why Molecular Hydrogen?</h3>
          <div className="sv-cards">
            {WHY_HYDROGEN.map((item) => (
              <article className="sv-card" key={item.title}>
                <span className="sv-check" aria-hidden="true">
                  <Icon name="check" />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="nd-closing">
            <p className="nd-closing-title">Breathe. Unwind. Rediscover Wellness.</p>
            <p>Experience modern wellness at FOOT CARE.</p>
            <ArrowButton label="Book a session" />
          </div>
        </div>
      </section>

      {/* 2. Plain text */}
      <section className="hy-block">
        <div className="hy-plain">
          <h2>What Is Molecular Hydrogen Therapy?</h2>
          <p>
            Molecular Hydrogen Therapy involves introducing hydrogen molecules into the body through different delivery
            methods, including hydrogen gas inhalation and hydrogen-enriched drinking water.
          </p>
          <p>
            Because molecular hydrogen is extremely small, researchers are studying its ability to move through
            biological membranes and interact with cellular processes.
          </p>
          <p>
            Its potential applications are being investigated in connection with oxidative stress, inflammation, and
            cellular protection.
          </p>
        </div>
      </section>

      {/* 3. Text left, photo right */}
      <PhotoSection
        image="/images/hydrogen/second-photo.webp"
        alt="Illustration of a molecular hydrogen (H2) molecule above a relaxing guest"
        kicker="Background"
        heading="Understanding Oxidative Stress"
        textFirst
        tinted
      >
        <p>
          Our bodies naturally produce reactive oxygen species (ROS) during normal metabolic activities. Environmental
          factors, lifestyle habits, and other biological processes can also contribute to oxidative stress.
        </p>
        <p>
          Oxidative stress occurs when the production of reactive oxygen species exceeds the body&apos;s antioxidant
          defence capacity.
        </p>
        <p>This imbalance is associated with cellular damage and is being studied in connection with several health conditions.</p>
        <p>Researchers are exploring whether molecular hydrogen may help regulate oxidative stress through its antioxidant properties.</p>
      </PhotoSection>

      {/* 4. Plain text */}
      <section className="hy-block">
        <div className="hy-plain">
          <h2>How Does Molecular Hydrogen Work?</h2>
          <p>
            Scientific research suggests that molecular hydrogen may interact with certain highly reactive oxygen species.
            Researchers are investigating several possible mechanisms:
          </p>
          <ol className="hy-mech">
            {MECHANISMS.map((item, index) => (
              <li key={item.title}>
                <strong>
                  {index + 1}. {item.title}
                </strong>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. Photo left, text right */}
      <PhotoSection
        image="/images/hydrogen/third-photo.webp"
        alt="Hydrogen water generator beside a glass of hydrogen-rich water"
        kicker="Delivery"
        heading="Methods of Molecular Hydrogen Administration"
        tinted
      >
        <ol className="hy-mech">
          {METHODS.map((method, index) => (
            <li key={method.title}>
              <strong>
                {index + 1}. {method.title}
              </strong>
              {method.text.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </li>
          ))}
        </ol>
      </PhotoSection>

      <section className="sv-benefits hy-benefits">
        <div className="sv-benefits-inner">
          <h2>Benefits of Molecular Hydrogen Therapy</h2>
          <p className="hy-benefits-lead">
            These are the potential benefits researchers are exploring. They are areas of study, not established treatment
            claims.
          </p>
          <div className="sv-cards hy-three">
            {BENEFITS.map((item) => (
              <article className="sv-card" key={item.title}>
                <span className="sv-check" aria-hidden="true">
                  <Icon name="check" />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hy-block hy-block-alt">
        <div className="hy-center">
          <h2>Potential Areas of Research</h2>
          <p className="hy-lead">Molecular hydrogen is currently being investigated across several research areas:</p>
          <ul className="hy-chips">
            {RESEARCH_AREAS.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
          <p className="hy-callout">These are areas of scientific investigation, not established treatment indications.</p>
        </div>
      </section>

      <section className="hy-block">
        <div className="hy-split">
          <div>
            <span className="sv-kicker">Interest</span>
            <h2>Why Is Molecular Hydrogen Gaining Attention?</h2>
          </div>
          <div className="hy-text">
            <p>
              Molecular hydrogen has attracted scientific interest because of its small molecular size and potential
              biological activity.
            </p>
            <p>Researchers are particularly interested in:</p>
            <ul className="hy-list">
              {ATTENTION.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="hy-block hy-block-alt">
        <div className="hy-split">
          <div>
            <span className="sv-kicker">Looking ahead</span>
            <h2>The Future of Hydrogen Technology</h2>
          </div>
          <div className="hy-text">
            <p>
              Research into molecular hydrogen continues to expand, with scientists investigating new delivery
              technologies, clinical applications, and possible therapeutic mechanisms.
            </p>
            <p>
              Although early research has reported encouraging findings, larger and more standardised clinical trials are
              necessary to establish its effectiveness for specific health conditions.
            </p>
            <p>
              The future of molecular hydrogen technology will depend on continued scientific investigation, appropriate
              safety standards, and evidence-based applications.
            </p>
          </div>
        </div>
      </section>

      <section className="hy-block">
        <div className="hy-center">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq hy-faq">
          {FAQS.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="hy-block hy-block-alt hy-conclusion">
        <div className="hy-center">
          <h2>Conclusion</h2>
          <p className="hy-lead">
            Molecular Hydrogen Therapy represents an evolving area of scientific and technological research. Its potential
            relationship with oxidative stress, cellular function, and inflammation has created growing interest in
            hydrogen-based wellness technologies.
          </p>
          <p className="hy-lead">
            Continued research and responsible application will be essential in understanding its role in future
            healthcare and wellness solutions.
          </p>
          <div className="hy-action">
            <ArrowButton label="Book a session" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
