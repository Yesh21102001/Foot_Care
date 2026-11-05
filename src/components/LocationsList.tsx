import { ArrowButton } from "./ArrowButton";

const SOCIAL_ICONS = {
  facebook: { label: "Facebook", icon: "fab fa-facebook-f" },
  instagram: { label: "Instagram", icon: "fab fa-instagram" },
  youtube: { label: "YouTube", icon: "fab fa-youtube" },
  twitter: { label: "X (Twitter)", icon: "fab fa-twitter" },
  linkedin: { label: "LinkedIn", icon: "fab fa-linkedin-in" },
  whatsapp: { label: "WhatsApp", icon: "fab fa-whatsapp" },
} as const;

type SocialKey = keyof typeof SOCIAL_ICONS;

type Branch = {
  name: string;
  address: string;
  phone: string;
  email: string;
  // Optional: a Google Maps link for the branch. If empty, directions are built from the address.
  mapUrl?: string;
  // Optional: the branch's own social pages. Only the links you give are shown.
  social?: Partial<Record<SocialKey, string>>;
};

// PLACEHOLDER social links: these go to each site's home page. Replace with each branch's own pages.
const PLACEHOLDER_SOCIAL: Branch["social"] = {
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  youtube: "https://www.youtube.com/",
};

// PLACEHOLDER DATA: replace with your real branches (name, address, phone, email, optional mapUrl and social).
const BRANCHES: Branch[] = [
  {
    name: "Main branch",
    address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    phone: "+629 555-0129",
    email: "main@example.com",
    social: PLACEHOLDER_SOCIAL,
  },
  { name: "Branch 2", address: "Add address here", phone: "Add phone here", email: "branch2@example.com", social: PLACEHOLDER_SOCIAL },
  { name: "Branch 3", address: "Add address here", phone: "Add phone here", email: "branch3@example.com", social: PLACEHOLDER_SOCIAL },
  { name: "Branch 4", address: "Add address here", phone: "Add phone here", email: "branch4@example.com", social: PLACEHOLDER_SOCIAL },
  { name: "Branch 5", address: "Add address here", phone: "Add phone here", email: "branch5@example.com", social: PLACEHOLDER_SOCIAL },
  { name: "Branch 6", address: "Add address here", phone: "Add phone here", email: "branch6@example.com", social: PLACEHOLDER_SOCIAL },
];

const directionsUrl = (branch: Branch) =>
  branch.mapUrl ||
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${branch.name} ${branch.address}`)}`;

export function LocationsList() {
  return (
    <div className="loc-grid">
      {BRANCHES.map((branch) => (
        <article className="loc-card" key={branch.name}>
          <h3>{branch.name}</h3>
          <dl>
            <div>
              <dt>Address</dt>
              <dd>{branch.address}</dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={`tel:${branch.phone.replace(/[^+\d]/g, "")}`}>{branch.phone}</a>
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                {/* The zero-width space after "@" lets a long email wrap there instead of mid-word. */}
                <a href={`mailto:${branch.email}`}>{branch.email.split("@").join("@​")}</a>
              </dd>
            </div>
          </dl>
          {branch.social && (
            <ul className="loc-social" aria-label={`${branch.name} social media`}>
              {(Object.keys(SOCIAL_ICONS) as SocialKey[]).map((key) => {
                const url = branch.social?.[key];
                if (!url) return null;
                return (
                  <li key={key}>
                    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`${branch.name} on ${SOCIAL_ICONS[key].label}`}>
                      <i className={SOCIAL_ICONS[key].icon} aria-hidden="true"></i>
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
          <div className="loc-action">
            <ArrowButton label="Get directions" href={directionsUrl(branch)} newTab />
          </div>
        </article>
      ))}
    </div>
  );
}
