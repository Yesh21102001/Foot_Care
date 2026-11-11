// Branch data, shared by the Locations list and the Contact form. Plain data, so both server and client components can use it.

export const SOCIAL_ICONS = {
  facebook: { label: "Facebook", icon: "fab fa-facebook-f" },
  instagram: { label: "Instagram", icon: "fab fa-instagram" },
  youtube: { label: "YouTube", icon: "fab fa-youtube" },
  twitter: { label: "X (Twitter)", icon: "fab fa-twitter" },
  linkedin: { label: "LinkedIn", icon: "fab fa-linkedin-in" },
  whatsapp: { label: "WhatsApp", icon: "fab fa-whatsapp" },
} as const;

export type SocialKey = keyof typeof SOCIAL_ICONS;

export type Branch = {
  name: string;
  country: string;
  state: string;
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

// PLACEHOLDER DATA: replace with your real branches (name, country, state, address, phone, email, optional mapUrl and social).
// The Country and State dropdowns on the Locations page are built from the country and state of each branch below.
export const BRANCHES: Branch[] = [
  {
    name: "Main branch",
    country: "United States",
    state: "Hawaii",
    address: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    phone: "+629 555-0129",
    email: "main@example.com",
    social: PLACEHOLDER_SOCIAL,
  },
  { name: "Branch 2", country: "India", state: "Telangana", address: "Add address here", phone: "Add phone here", email: "branch2@example.com", social: PLACEHOLDER_SOCIAL },
  { name: "Branch 3", country: "India", state: "Telangana", address: "Add address here", phone: "Add phone here", email: "branch3@example.com", social: PLACEHOLDER_SOCIAL },
  { name: "Branch 4", country: "India", state: "Karnataka", address: "Add address here", phone: "Add phone here", email: "branch4@example.com", social: PLACEHOLDER_SOCIAL },
  { name: "Branch 5", country: "United Arab Emirates", state: "Dubai", address: "Add address here", phone: "Add phone here", email: "branch5@example.com", social: PLACEHOLDER_SOCIAL },
  { name: "Branch 6", country: "United States", state: "Hawaii", address: "Add address here", phone: "Add phone here", email: "branch6@example.com", social: PLACEHOLDER_SOCIAL },
];
