import type { ReactNode } from "react";
import { PageHeading } from "../components/Blocks";
import { Layout } from "../components/Layout";

function Block({ heading, tinted = false, children }: { heading: string; tinted?: boolean; children: ReactNode }) {
  return (
    <section className={`hy-block${tinted ? " hy-block-alt" : ""}`}>
      <div className="hy-plain">
        <h2>{heading}</h2>
        {children}
      </div>
    </section>
  );
}

// DRAFT policy wording: please review and replace with your approved guest guidelines before launch.
export default function GuestGuidelines() {
  return (
    <Layout
      title="Guest Guidelines & Policies"
      description="Guest guidelines for FOOT CARE: hygiene, clothing, therapist matching, consent, safety and conduct."
    >
      <PageHeading
        title="Guest Guidelines & Policies"
        crumbs={[{ label: "Home", href: "/" }, { label: "Guest Guidelines & Policies" }]}
        intro="A few simple guidelines help every guest feel comfortable, safe and respected."
      />

      <Block heading="Hygiene">
        <p>
          Please arrive with clean feet and let us know if you have any skin condition, cut or sore on your feet or legs,
          so we can look after you properly.
        </p>
      </Block>
      <Block heading="Clothing and comfort" tinted>
        <p>
          Wear loose, comfortable clothing that is easy to roll up to the knee. Towels and coverings are provided during
          your session.
        </p>
      </Block>
      <Block heading="Therapist matching">
        <p>
          We can match you with a therapist of the same gender on request. Please tell us when you book. Availability is
          checked before your booking is confirmed.
        </p>
      </Block>
      <Block heading="Consent" tinted>
        <p>
          Your therapist will explain the session and check that you are comfortable before starting. You can ask them to
          change the pressure, or stop, at any time.
        </p>
      </Block>
      <Block heading="Safety">
        <p>
          If you are unwell, pregnant, have a medical condition or an allergy (including to nuts, as we use almond massage
          cream), please tell us before your session. Our services are for relaxation and wellbeing and are not a
          substitute for medical care.
        </p>
      </Block>
      <Block heading="Conduct" tinted>
        <p>
          We ask all guests and staff to treat each other with courtesy and respect. We may end a session if behaviour
          makes anyone feel unsafe or uncomfortable.
        </p>
      </Block>
    </Layout>
  );
}
