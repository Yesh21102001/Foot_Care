import { ServicePage } from "../components/ServicePage";

export default function IntelligentWellness() {
  return (
    <ServicePage
      title="Intelligent Wellness"
      description="An optional technology-assisted wellness assessment that captures selected measurements and shows them in a digital overview."
      image="/images/services/intelligent-wellness.jpg"
      intro="An optional wellness assessment that uses technology to capture and display selected measurements in a digital overview, so you can see them in one place."
      benefitsTitle="Good to know"
      benefits={[
        { title: "What it is", text: "A technology-assisted assessment that captures selected measurements and shows them in a digital overview." },
        { title: "Completely optional", text: "It is an optional addition to your visit. Ask about it when you book." },
        { title: "Not a diagnosis", text: "The assessment is not a medical diagnosis and does not replace care from a qualified healthcare professional." },
        { title: "Availability varies", text: "Availability may vary by branch, so please confirm with your chosen branch before visiting." },
      ]}
    />
  );
}
