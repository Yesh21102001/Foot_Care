"use client";

import { useEffect, useState, type KeyboardEvent, type ReactNode } from "react";

// Footer column that works as an accordion on phones and small tablets (up to 880px wide).
// On larger screens it renders exactly like a normal column: heading, then the links, always visible.
export function FooterAccordion({ title, children }: { title: ReactNode; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 880px)");
    const update = () => setCompact(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const toggle = () => setOpen((value) => !value);
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  };

  return (
    <div className={`fc-acc${open ? " is-open" : ""}`}>
      <div
        className="fc-acc-head"
        {...(compact ? { role: "button", tabIndex: 0, "aria-expanded": open, onClick: toggle, onKeyDown } : {})}
      >
        {title}
        <i className="fc-acc-chevron" aria-hidden="true" />
      </div>
      <div className="fc-acc-body" inert={compact && !open}>
        <div className="fc-acc-inner">{children}</div>
      </div>
    </div>
  );
}
