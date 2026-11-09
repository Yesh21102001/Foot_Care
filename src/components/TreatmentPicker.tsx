"use client";

import { useState, type CSSProperties } from "react";
import { BookingButton } from "./BookingButton";

export type Treatment = { name: string; duration: string; price: string };

// "Foot Reflexology + Back & Shoulder" becomes ["Foot Reflexology", "Back & Shoulder"] for the "Included" chips.
const parts = (name: string) => name.split(" + ").map((part) => part.trim());

// Minutes from "60 minutes", and the share of the longest treatment (90 minutes) for the ring.
const minutesOf = (duration: string) => parseInt(duration, 10) || 0;
const LONGEST = 90;

// Pick a treatment on the left; its price, duration and what is included appear on the card on the right.
export function TreatmentPicker({ treatments }: { treatments: Treatment[] }) {
  const [selected, setSelected] = useState(0);
  const current = treatments[selected];

  return (
    <div className="tp-grid">
      <div className="tp-left">
      <div className="tp-list" role="listbox" aria-label="Choose a treatment">
        {treatments.map((treatment, index) => {
          const isSelected = index === selected;
          return (
            <button
              type="button"
              key={treatment.name + treatment.duration}
              role="option"
              aria-selected={isSelected}
              className={`tp-tile${isSelected ? " is-selected" : ""}`}
              onClick={() => setSelected(index)}
            >
              <span className="tp-tile-name">{treatment.name}</span>
              <span className="tp-tile-meta">
                <span className="tp-tile-time">{treatment.duration}</span>
                <strong className="tp-tile-price">{treatment.price}</strong>
              </span>
            </button>
          );
        })}
      </div>
      <p className="tp-note">Prices are confirmed at your chosen branch before you book.</p>
      </div>

      <div className="tp-card" key={selected}>
        <div className="tp-head">
          <div>
            <span className="tp-kicker">Treatment</span>
            <h3 className="tp-title">{current.name}</h3>
          </div>
          <div className="tp-ring" style={{ "--p": Math.min(1, minutesOf(current.duration) / LONGEST) } as CSSProperties}>
            <span className="tp-ring-value">{minutesOf(current.duration)}</span>
            <span className="tp-ring-unit">MIN</span>
          </div>
        </div>

        <div className="tp-row">
          <div>
            <span className="tp-label">Duration</span>
            <span className="tp-value">{current.duration}</span>
          </div>
          <div>
            <span className="tp-label">Price</span>
            <span className="tp-price">{current.price}</span>
          </div>
        </div>

        <span className="tp-label">Included</span>
        <div className="tp-chips">
          {parts(current.name).map((part) => (
            <span className="tp-chip" key={part}>
              {part}
            </span>
          ))}
        </div>

        <BookingButton className="tp-cta">
          <span>Book this treatment</span>
          <span className="tp-cta-arrow" aria-hidden="true">
            →
          </span>
        </BookingButton>
      </div>
    </div>
  );
}
