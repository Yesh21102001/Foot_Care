import type { Metadata } from "next";
import { PageHeading } from "../../../components/Blocks";
import { ServiceOverview } from "../../../components/ServicePage";
import { Layout } from "../../../components/Layout";
import { Photo } from "../../../components/Photo";

export const metadata: Metadata = {
  title: "Foot Reflexology",
  description: "Foot reflexology at Foot Care: what it is, how a session works, what research says, and answers to common questions.",
};

export default function Reflexology() {
  return (
    <Layout>
      <PageHeading
        title="Foot Reflexology"
        crumbs={[{ label: "Home", href: "/" }, { label: "Our Services", href: "/our-services" }, { label: "Reflexology" }]}
      />

      <ServiceOverview title="Foot Reflexology" image="/images/reflexology-room.webp" heading="What is foot reflexology?">
        <p>
          Foot reflexology is a complementary wellness practice in which a practitioner applies pressure to specific
          areas of the feet.
        </p>
        <p>
          Reflexology has roots in traditional practices from several cultures. In a session, the reflexologist uses
          their thumbs and fingers to press on points and areas of the feet. Many guests describe the experience as
          calming and deeply relaxing.
        </p>
      </ServiceOverview>

      {/* 02 — Map (dark section) */}
      <section className="rx-section rx-dark">
        <div className="container rx-map-split">
          <div className="rx-map-text">
            <h2 className="rx-h2">Traditional reflexology <em>map</em></h2>
            <p className="rx-lead rx-lead-light">
              The map shows the zones of the sole of the foot as they are described in traditional reflexology. These are
              traditional associations, not proven anatomical connections.
            </p>
            <p className="rx-zones-label">Zones shown on the chart</p>
            <ul className="rx-zones">
              {["Head & brain", "Eyes", "Ears", "Lungs", "Heart", "Liver", "Stomach", "Kidneys", "Digestive system", "Lower back"].map((z) => (
                <li key={z}>{z}</li>
              ))}
            </ul>
          </div>
          <figure className="rx-map-card">
            <Photo sizes="(max-width: 900px) 100vw, 50vw" src="/images/reflexology-chart-transparent.webp" alt="Sole of the foot with numbered reflexology zones and their traditional associations" />
          </figure>
        </div>
      </section>

      {/* 03 — Session */}
      <section className="rx-section">
        <div className="container rx-split">
          <div>
            <span className="rx-kicker">02 — The Session</span>
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

      {/* 04 — Research */}
      <section className="rx-section rx-tint">
        <div className="container">
          <div className="rx-center">
            <span className="rx-kicker">03 — Evidence</span>
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
