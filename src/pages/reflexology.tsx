import { ArrowButton } from "../components/ArrowButton";
import { PageHero } from "../components/Blocks";
import { Layout } from "../components/Layout";

const faqs = [
  {
    q: "How is reflexology different from foot massage?",
    a: "Foot massage works on the whole foot to ease muscles. Reflexology focuses on specific points and areas of the feet, using pressure techniques that are based on traditional practice.",
  },
  {
    q: "Will it be uncomfortable?",
    a: "Some areas can feel tender, especially if you are stressed or tired. Tell your reflexologist at any time and the pressure will be adjusted.",
  },
  {
    q: "How long does a session last?",
    a: "The length is confirmed when you book, based on the treatment you choose.",
  },
  {
    q: "How often should I come?",
    a: "Many guests book regular sessions to support relaxation. We will suggest a frequency after your first visit.",
  },
  {
    q: "Is reflexology suitable for me?",
    a: "Please tell us about any medical conditions, injuries, circulation problems, pregnancy or medication before your session, so we can advise you.",
  },
  {
    q: "Does reflexology replace medical care?",
    a: "No. Reflexology is a complementary practice. It does not diagnose, treat or cure any disease. Keep seeing your doctor for any health concern.",
  },
];

const prices = [
  { service: "Foot Reflexology", mins: "45", amount: "1,000" },
  { service: "Foot Reflexology", mins: "60", amount: "1,300" },
  { service: "Foot Reflexology (45 Mins) + Back & Shoulder (15 Mins)", mins: "60", amount: "1,300" },
  { service: "Foot Reflexology (45 Mins) + Back, Arm & Shoulder (30 Mins)", mins: "75", amount: "1,600" },
  { service: "Foot Reflexology (45 Mins) + Back, Arm, Shoulder, Neck, Hand & Head (45 Mins)", mins: "90", amount: "1,900" },
];

const packages = [
  { name: "Silver", pay: "10,000", worth: "12,000" },
  { name: "Gold", pay: "20,000", worth: "26,000" },
  { name: "Platinum", pay: "30,000", worth: "42,000" },
  { name: "Diamond", pay: "40,000", worth: "60,000" },
];

export default function Reflexology() {
  return (
    <Layout title="Foot Reflexology" description="Foot reflexology at Foot Care: what it is, how a session works, what research says, and answers to common questions.">
      <PageHero eyebrow="The Art of Foot Reflexology" title="Every Step Has a Story." image="/images/reflexology.jpg" imagePosition="right center" imageFit="contain">
        Foot reflexology is a complementary wellness practice in which a practitioner applies pressure to specific areas of
        the feet.
      </PageHero>

      {/* 01 — What it is */}
      <section className="rx-section">
        <div className="container rx-split">
          <div>
            <span className="rx-kicker">01 — Origins</span>
            <h2 className="rx-h2">What is <em>foot reflexology?</em></h2>
          </div>
          <div>
            <p className="rx-lead">
              Reflexology has roots in traditional practices from several cultures. In a session, the reflexologist uses
              their thumbs and fingers to press on points and areas of the feet. Many guests describe the experience as
              calming and deeply relaxing.
            </p>
          </div>
        </div>
      </section>

      {/* 02 — Map (dark section) */}
      <section className="rx-section rx-dark">
        <div className="container rx-map-split">
          <figure className="rx-map-card">
            <img src="/images/reflexology-map.jpg" alt="Sole of the foot with numbered reflexology zones and their traditional associations" />
          </figure>
          <div className="rx-map-text">
            <span className="rx-kicker rx-kicker-light">02 — The Map</span>
            <h2 className="rx-h2">Traditional reflexology <em>map</em></h2>
            <p className="rx-lead rx-lead-light">
              The map shows the zones of the sole of the foot as they are described in traditional reflexology. These are
              traditional associations, not proven anatomical connections.
            </p>
          </div>
        </div>
      </section>

      {/* 03 — Session */}
      <section className="rx-section">
        <div className="container rx-split">
          <div>
            <span className="rx-kicker">03 — The Session</span>
            <h2 className="rx-h2">How a session <em>works</em></h2>
          </div>
          <div>
            <p className="rx-lead">
              Your reflexologist uses steady, gentle pressure with the thumbs, fingers and hands. Pressure is adjusted to
              your comfort at every stage, and you can ask for lighter or firmer work at any time.
            </p>
            <div className="rx-note">
              <span className="rx-note-label">Session flow</span>
              <p>The exact steps of a FOOT CARE session will be added once the process is confirmed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — Prices */}
      <section className="rx-section rx-tint">
        <div className="container">
          <div className="rx-center">
            <span className="rx-kicker">04 — Prices</span>
            <h2 className="rx-h2">Services &amp; <em>packages</em></h2>
          </div>

          <div className="rx-price-wrap">
            <table className="rx-price-table">
              <thead>
                <tr>
                  <th>Services</th>
                  <th>Duration (Mins)</th>
                  <th>Amount (Rs.)</th>
                </tr>
              </thead>
              <tbody>
                {prices.map((row) => (
                  <tr key={row.service + row.mins + row.amount}>
                    <td>{row.service}</td>
                    <td>{row.mins}</td>
                    <td>{row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="rx-price-sub">Prepaid packages</h3>
          <div className="rx-price-wrap rx-price-narrow">
            <table className="rx-price-table">
              <thead>
                <tr>
                  <th>Packages</th>
                  <th>Pay (Rs.)</th>
                  <th>Get services worth (Rs.)</th>
                </tr>
              </thead>
              <tbody>
                {packages.map((row) => (
                  <tr key={row.name}>
                    <td>{row.name}</td>
                    <td>{row.pay}</td>
                    <td>{row.worth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="rx-price-cta">
            <ArrowButton label="Book a session" />
          </p>
        </div>
      </section>

      {/* 04 — Research */}
      <section className="rx-section rx-tint">
        <div className="container">
          <div className="rx-center">
            <span className="rx-kicker">05 — Evidence</span>
            <h2 className="rx-h2">What research <em>says</em></h2>
          </div>
          <div className="rx-research">
            <p className="rx-lead">
              Research on reflexology is mixed. Some studies report relaxation, reduced anxiety and better sleep after
              sessions. Studies have not proven that pressure on a foot point treats a specific organ. A summary of
              published studies, with study names, dates and links, will be added after review.
            </p>
            <div className="rx-quote">
              <span className="rx-quote-label">What guests may appreciate</span>
              <p>Relaxation, time to unwind and a soothing, foot-focused experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — FAQ */}
      <section className="rx-section">
        <div className="container rx-faq">
          <div className="rx-center">
            <span className="rx-kicker">06 — Questions</span>
            <h2 className="rx-h2">Frequently asked <em>questions</em></h2>
          </div>
          <div className="rx-faq-list">
            {faqs.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Evidence notice */}
      <section className="rx-section rx-section-tight">
        <div className="container">
          <div className="rx-evidence">
            Do not state that reflexology diagnoses, treats or cures disease, or that pressure on a foot point has been
            scientifically proven to treat the corresponding organ. Clearly distinguish traditional theory from
            established medical evidence.
          </div>
        </div>
      </section>
    </Layout>
  );
}
