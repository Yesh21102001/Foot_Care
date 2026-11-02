import { ServicePage } from "../components/ServicePage";

export default function HydrogenTherapy() {
  return (
    <ServicePage
      eyebrow="Our Treatments"
      title="Hydrogen Therapy"
      description="Hydrogen therapy sessions designed to support recovery and wellness."
      intro="Inhaled hydrogen gas is used in wellness settings to support relaxation and recovery. Please speak with your doctor before starting any new therapy."
      benefits={[
        { title: "Recovery support", text: "Used by many people to help the body recover after activity." },
        { title: "Relaxation", text: "A calm, comfortable session with no downtime." },
        { title: "Wellness routine", text: "Fits easily alongside massage or reflexology." },
        { title: "Personalised plan", text: "Session length and frequency are set around your goals." },
      ]}
      steps={[
        { title: "Health check", text: "We ask about your health history and any medication you take." },
        { title: "Session", text: "You relax in a comfortable setting while the therapy is delivered." },
        { title: "Review", text: "We review how you feel and plan your next steps." },
      ]}
      note="Results vary between people. This information is general and is not medical advice."
    />
  );
}
