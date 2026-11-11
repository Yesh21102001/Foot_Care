import { WellnessIcon } from "./icons/WellnessIcon";
// Home page: "Benefits of Foot Massage". Three benefits on each side of a foot photo set in an arch.
type Benefit = { icon: string; title: string; text: string };

const LEFT: Benefit[] = [
  { icon: "flaticon-set-aromatherapy", title: "Deep Relaxation", text: "A calm, unhurried session that helps you unwind and feel at ease." },
  { icon: "flaticon-set-retreat", title: "Stress Relief", text: "Time away from a busy day can help you feel calmer and less tense." },
  { icon: "flaticon-set-spa-and-relax", title: "A Moment for You", text: "A quiet pause in your day, just for you, away from screens and deadlines." },
];

const RIGHT: Benefit[] = [
  { icon: "flaticon-set-stones", title: "Comfort for Tired Feet", text: "Soothing pressure can ease the heavy feeling of tired feet." },
  { icon: "flaticon-set-towel", title: "Better Rest", text: "Many guests feel more settled and ready for a good night's rest." },
  { icon: "flaticon-set-theraphy", title: "Feeling Refreshed", text: "A gentle, foot-focused experience that leaves many guests feeling refreshed." },
];

function BenefitItem({ item, side }: { item: Benefit; side: "left" | "right" }) {
  return (
    <li className={`fb-item fb-item-${side}`}>
      <span className="fb-icon" aria-hidden="true">
        <WellnessIcon name={item.icon} />
      </span>
      <div className="fb-copy">
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
    </li>
  );
}

export function HomeBenefits() {
  return (
    <section className="fb-section">
      <div className="fb-inner">
        <span className="fb-kicker">Foot Massage</span>
        <h2>Benefits of Foot Massage</h2>
        <div className="fb-grid">
          <ul className="fb-list">
            {LEFT.map((item) => (
              <BenefitItem key={item.title} item={item} side="left" />
            ))}
          </ul>
          <div className="fb-media" aria-hidden="true">
            <img loading="lazy" decoding="async" className="fb-arch" src="/images/home/benefits-arch.webp" alt="" width={320} height={529} />
            <img loading="lazy" decoding="async" className="fb-photo" src="/images/foot-reflexology-center-cutout.webp" alt="" width={1089} height={1445} />
          </div>
          <ul className="fb-list">
            {RIGHT.map((item) => (
              <BenefitItem key={item.title} item={item} side="right" />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
