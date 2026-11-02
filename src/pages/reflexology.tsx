import { ServicePage } from "../components/ServicePage";

export default function Reflexology() {
  return (
    <ServicePage
      eyebrow="Our Treatments"
      title="Reflexology"
      description="Reflexology sessions that ease tension and support whole-body balance."
      intro="Targeted pressure on points of the feet that relate to every part of the body, helping you relax and feel restored."
      benefits={[
        { title: "Deep relaxation", text: "Reduces stress and helps you unwind after a long day." },
        { title: "Better circulation", text: "Gentle pressure encourages blood flow to the lower body." },
        { title: "Foot comfort", text: "Eases tired, achy feet and improves overall foot health." },
        { title: "Better sleep", text: "Many clients find it easier to fall asleep after a session." },
      ]}
      steps={[
        { title: "Consultation", text: "We learn about your health and what you want from the session." },
        { title: "Treatment", text: "A certified reflexologist works through each area of your feet." },
        { title: "Aftercare", text: "We suggest simple tips to keep the benefits going." },
      ]}
    />
  );
}
