"use client";

import { useEffect, useState, type FormEvent } from "react";

// PLACEHOLDER DATA: replace with your real branches, treatments, and time slots.
const BRANCHES = ["Main branch", "Second branch"];
const TREATMENTS = [
  "Foot Reflexology — 60 min — $49",
  "Molecular Hydrogen Therapy — 45 min — $69",
  "Healthpod Session — 30 min — $39",
];
const TIME_SLOTS = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
const COUNTRY_CODES = ["+1", "+44", "+91", "+92", "+971", "+880"];

type Errors = Partial<Record<"name" | "mobile" | "email" | "branch" | "treatment" | "date" | "time" | "consent", string>>;

export function BookingModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  // Set when the pop-up opens (not during render), so the prerendered page and the browser agree. Blocks dates before today.
  const [today, setToday] = useState("");

  useEffect(() => {
    const show = () => {
      setToday(new Date().toISOString().slice(0, 10));
      setSubmitted(false);
      setErrors({});
      setOpen(true);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("open-booking", show);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("open-booking", show);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const validate = (form: HTMLFormElement): Errors => {
    const data = new FormData(form);
    const text = (key: string) => String(data.get(key) ?? "").trim();
    const next: Errors = {};

    if (!text("name")) next.name = "Please enter your full name.";

    const mobile = text("mobile");
    if (!/^\d{7,12}$/.test(mobile)) next.mobile = "Enter a valid mobile number (digits only).";

    const email = text("email");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";

    if (!text("branch")) next.branch = "Choose a branch.";
    if (!text("treatment")) next.treatment = "Choose a treatment.";

    const date = text("date");
    if (!date) next.date = "Choose a date.";
    else if (date < today) next.date = "Past dates cannot be booked.";

    if (!text("time")) next.time = "Choose a time.";
    if (data.get("consent") !== "on") next.consent = "Please accept the privacy notice to continue.";

    return next;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(e.currentTarget);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      // TODO: connect to your booking system or email service. Nothing is sent yet.
      setSubmitted(true);
    }
  };

  return (
    <div className="booking-overlay" onClick={() => setOpen(false)}>
      <div
        className="booking-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="booking-close" aria-label="Close" onClick={() => setOpen(false)}>
          ×
        </button>

        {submitted ? (
          <div className="booking-success">
            <h2 id="booking-title">Thank you</h2>
            <p>We have received your request and will confirm your appointment shortly.</p>
            <button type="button" className="btn btn-primary" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <h2 id="booking-title">Book a session</h2>
            <p className="booking-intro">Fields marked * are required.</p>

            <div className="booking-grid">
              <label className="booking-field">
                <span>Full name *</span>
                <input name="name" type="text" autoComplete="name" />
                {errors.name && <em>{errors.name}</em>}
              </label>

              <div className="booking-field">
                <span>Mobile number *</span>
                <div className="booking-phone">
                  <select name="code" aria-label="Country code" defaultValue="+1">
                    {COUNTRY_CODES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  <input name="mobile" type="tel" inputMode="numeric" autoComplete="tel-national" />
                </div>
                {errors.mobile && <em>{errors.mobile}</em>}
              </div>

              <label className="booking-field">
                <span>Email (optional)</span>
                <input name="email" type="email" autoComplete="email" />
                {errors.email && <em>{errors.email}</em>}
              </label>

              <label className="booking-field">
                <span>Preferred branch *</span>
                <select name="branch" defaultValue="">
                  <option value="" disabled>
                    Choose a branch
                  </option>
                  {BRANCHES.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
                {errors.branch && <em>{errors.branch}</em>}
              </label>

              <label className="booking-field booking-wide">
                <span>Treatment *</span>
                <select name="treatment" defaultValue="">
                  <option value="" disabled>
                    Choose a treatment
                  </option>
                  {TREATMENTS.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
                {errors.treatment && <em>{errors.treatment}</em>}
              </label>

              <label className="booking-field">
                <span>Preferred date *</span>
                <input name="date" type="date" min={today} />
                {errors.date && <em>{errors.date}</em>}
              </label>

              <label className="booking-field">
                <span>Preferred time *</span>
                <select name="time" defaultValue="">
                  <option value="" disabled>
                    Choose a time
                  </option>
                  {TIME_SLOTS.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
                {errors.time && <em>{errors.time}</em>}
              </label>

              <div className="booking-field booking-wide">
                <span>Therapist matching</span>
                <p className="booking-note">
                  We match guests with a therapist of the same gender on request. Availability is checked before your
                  booking is confirmed.
                </p>
                <label className="booking-check">
                  <input name="genderMatch" type="checkbox" /> I would like a gender-matched therapist
                </label>
              </div>

              <label className="booking-field booking-wide">
                <span>Additional notes (optional)</span>
                <textarea name="notes" rows={3} />
                <small className="booking-note">
                  Please do not enter unnecessary sensitive medical details here. Tell your therapist about any
                  conditions in person.
                </small>
              </label>

              <div className="booking-field booking-wide">
                <label className="booking-check">
                  <input name="consent" type="checkbox" /> I accept the privacy notice and agree to be contacted about my
                  booking. *
                </label>
                {errors.consent && <em>{errors.consent}</em>}
                <label className="booking-check">
                  <input name="marketing" type="checkbox" /> Optional: send me offers and updates
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary booking-submit">
              Request booking
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
