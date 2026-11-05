import Link from "next/link";

const PACKAGE_INCLUDES = [
  "Foot Reflexology",
  "Hand Reflexology",
  "Head Massage",
  "Neck & Back Massage",
  "Arm & Shoulder Massage",
];

// Reference prices: confirm with the client before launch.
const PACKAGES = [
  { name: "Silver", amount: "₹10,000", extra: "20% Extra" },
  { name: "Gold", amount: "₹20,000", extra: "30% Extra" },
  { name: "Platinum", amount: "₹30,000", extra: "40% Extra" },
  { name: "Diamond", amount: "₹40,000", extra: "50% Extra" },
];

// The four prepaid package cards, shared by the Pricing page and the home page.
export function PackageCards() {
  return (
    <div className="pkg-grid">
      {PACKAGES.map((pkg) => (
        <div className="pkg-card" key={pkg.name}>
          <h3>{pkg.name}</h3>
          <div className="pkg-price">{pkg.amount}</div>
          <span className="pkg-extra">{pkg.extra}</span>
          <ul className="pkg-list">
            {PACKAGE_INCLUDES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="pkg-action">
            <Link href="/contact" className="btn btn-primary">
              Choose plan
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
