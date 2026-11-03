import { ServicePage } from "../components/ServicePage";

export default function Healthpod() {
  return (
    <ServicePage
      eyebrow="Our Treatments"
      title="Healthpod"
      description="The Foot Care Healthpod: a private, calming space for focused wellness sessions."
      intro="A private pod designed for rest and recovery. Step in, settle down and let the session take care of the rest."
      benefits={[
        { title: "Private space", text: "A quiet, enclosed pod that helps you switch off." },
        { title: "Comfort first", text: "Ergonomic seating and gentle lighting for every session." },
        { title: "Short sessions", text: "Fits easily into a busy day, with no long appointment needed." },
        { title: "Easy to add on", text: "Pair it with reflexology or massage for a complete visit." },
      ]}
      steps={[
        { title: "Arrive and settle", text: "A team member shows you to your pod and explains the session." },
        { title: "Relax", text: "Enjoy the session at your own pace in a calm environment." },
        { title: "Refresh", text: "Take a moment before you leave, with any questions answered." },
      ]}
    />
  );
}
