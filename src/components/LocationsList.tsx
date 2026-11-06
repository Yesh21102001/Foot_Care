"use client";

import { useState } from "react";
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

const unique = (values: string[]) => [...new Set(values)].sort((a, b) => a.localeCompare(b));
const COUNTRIES = unique(BRANCHES.map((branch) => branch.country));

export function LocationsList() {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  // States are only those that have a branch in the chosen country.
  const states = country ? unique(BRANCHES.filter((branch) => branch.country === country).map((branch) => branch.state)) : [];
  const visible = BRANCHES.filter((branch) => (!country || branch.country === country) && (!state || branch.state === state));

  return (
    <>
    <div className="loc-filter">
      <div className="loc-filter-field">
        <label htmlFor="loc-country">Country</label>
        <select
          id="loc-country"
          value={country}
          onChange={(event) => {
            setCountry(event.target.value);
            setState("");
          }}
        >
          <option value="">All countries</option>
          {COUNTRIES.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className="loc-filter-field">
        <label htmlFor="loc-state">State</label>
        <select id="loc-state" value={state} onChange={(event) => setState(event.target.value)} disabled={!country}>
          <option value="">{country ? "All states" : "Select country"}</option>
          {states.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <p className="loc-count" aria-live="polite">
        {visible.length} {visible.length === 1 ? "branch" : "branches"}
        {country ? ` in ${state ? `${state}, ` : ""}${country}` : ""}
      </p>
    </div>
    {visible.length === 0 && <p className="loc-empty">No branches found for this selection.</p>}
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
