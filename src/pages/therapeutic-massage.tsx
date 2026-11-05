import { ServicePage } from "../components/ServicePage";

export default function TherapeuticMassage() {
  return (
    <ServicePage
      eyebrow="Our Treatments"
      title="Therapeutic Therapy"
      description="Therapeutic therapy tailored to ease muscle tension and speed recovery."
      intro="Hands-on techniques that work on tight muscles, posture and everyday strain, adapted to what your body needs."
      benefits={[
        { title: "Muscle release", text: "Loosens tight muscles in the back, neck and legs." },
        { title: "Pain relief", text: "Helps reduce ongoing aches from work or activity." },
        { title: "Improved mobility", text: "Supports flexibility and easier movement." },
        { title: "Stress reduction", text: "Calms the nervous system and lifts your mood." },
      ]}
      steps={[
        { title: "Assessment", text: "We check your areas of concern and any injuries or sensitivities." },
        { title: "Massage", text: "Your therapist adjusts pressure and technique as you go." },
        { title: "Recovery plan", text: "We recommend stretches and how often to return." },
      ]}
    />
  );
}
