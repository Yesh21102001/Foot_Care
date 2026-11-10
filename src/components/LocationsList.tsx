"use client";

import { useEffect, useState } from "react";
import { SelectDropdown } from "./SelectDropdown";
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

const directionsUrl = (branch: Branch) =>
  branch.mapUrl ||
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${branch.name} ${branch.address}`)}`;


// Every country, with its name (in English) and its list of states where we have one.
// Built in the browser after load, so the server and browser never disagree about the names.
type Country = { name: string; states: string[] };
// Only the countries and states where FOOT CARE has a branch are offered in the filter.
function buildCountries(): Country[] {
  const list: Country[] = [];
  for (const branch of BRANCHES) {
    let entry = list.find((item) => item.name === branch.country);
    if (!entry) {
      entry = { name: branch.country, states: [] };
      list.push(entry);
    }
    if (!entry.states.includes(branch.state)) entry.states = [...entry.states, branch.state];
  }
  return list.sort((x, y) => x.name.localeCompare(y.name));
}

export function LocationsList() {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [countries, setCountries] = useState<Country[]>([]);
  useEffect(() => setCountries(buildCountries()), []);

  // States are only those that have a branch in the chosen country.
  const states = [...(countries.find((item) => item.name === country)?.states ?? [])].sort((a, b) => a.localeCompare(b));
  const visible = BRANCHES.filter((branch) => (!country || branch.country === country) && (!state || branch.state === state));

  return (
    <>
    <div className="loc-filter">
      <SelectDropdown
        id="loc-country"
        label="Country"
        value={country}
        placeholder="All countries"
        options={[{ value: "", label: "All countries" }, ...countries.map((item) => ({ value: item.name, label: item.name }))]}
        onChange={(next) => {
          setCountry(next);
          setState("");
        }}
      />
      <SelectDropdown
        id="loc-state"
        label="State"
        value={state}
        placeholder={!country ? "Select country" : states.length ? "All states" : "No states listed"}
        disabled={!country || states.length === 0}
        options={[
          { value: "", label: !country ? "Select country" : states.length ? "All states" : "No states listed" },
          ...states.map((name) => ({ value: name, label: name })),
        ]}
        onChange={setState}
      />
      <p className="loc-count" aria-live="polite">
        {visible.length} {visible.length === 1 ? "branch" : "branches"}
        {country ? ` in ${state ? `${state}, ` : ""}${country}` : ""}
      </p>
    </div>
    {visible.length === 0 && (
      <p className="loc-empty">
        We do not have a branch {state ? `in ${state}, ` : "in "}
        {country} yet. Try another location.
      </p>
    )}
    <div className="loc-grid">
      {visible.map((branch) => (
        <article className="loc-card" key={branch.name}>
          <header className="loc-card-head">
            <span className="loc-pin" aria-hidden="true">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <div>
              <h3>{branch.name}</h3>
              <span className="loc-region">
                {branch.state}, {branch.country}
              </span>
            </div>
          </header>
          <div className="loc-card-body">
          <dl>
            <div>
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
              <span>
              <dt>Address</dt>
              <dd>{branch.address}</dd>
              </span>
            </div>
            <div>
              <i className="fas fa-phone-alt" aria-hidden="true"></i>
              <span>
              <dt>Phone</dt>
              <dd>
                <a href={`tel:${branch.phone.replace(/[^+\d]/g, "")}`}>{branch.phone}</a>
              </dd>
              </span>
            </div>
            <div>
              <i className="fas fa-envelope" aria-hidden="true"></i>
              <span>
              <dt>Email</dt>
              <dd>
                {/* The zero-width space after "@" lets a long email wrap there instead of mid-word. */}
                <a href={`mailto:${branch.email}`}>{branch.email.split("@").join("@​")}</a>
              </dd>
              </span>
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
          </div>
        </article>
      ))}
    </div>
    </>
  );
}
