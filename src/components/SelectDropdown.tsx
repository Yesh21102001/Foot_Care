"use client";

import { useEffect, useRef, useState } from "react";

export type DropdownOption = { value: string; label: string };

// A dropdown whose list opens directly below its field (not as a native pop-up that can open elsewhere on screen).
export function SelectDropdown({
  id,
  label,
  value,
  options,
  onChange,
  disabled = false,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  options: DropdownOption[];
  onChange: (value: string) => void;
  disabled?: boolean;
  placeholder: string;
}) {
  const [openState, setOpen] = useState(false);
  // A disabled field can never be open.
  const open = openState && !disabled;
  const rootRef = useRef<HTMLDivElement>(null);
  const current = options.find((option) => option.value === value);

  // Close when the user taps or clicks outside, or presses Escape.
  useEffect(() => {
    if (!open) return;
    const onPointer = (event: Event) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("touchstart", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("touchstart", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);


  return (
    <div className="ddl" ref={rootRef}>
      <span className="ddl-label" id={`${id}-label`}>
        {label}
      </span>
      <div className="ddl-wrap">
        <button
          type="button"
          id={`${id}-button`}
          className={`ddl-button${open ? " is-open" : ""}`}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-labelledby={`${id}-label ${id}-button`}
          disabled={disabled}
          onClick={() => setOpen(!open)}
        >
          <span className="ddl-value">{current ? current.label : placeholder}</span>
          <i className="ddl-caret" aria-hidden="true" />
        </button>
        {open && (
          <ul className="ddl-list" role="listbox" aria-labelledby={`${id}-label`}>
            {options.map((option) => {
              const selected = option.value === value;
              return (
                <li key={option.value || "all"} role="option" aria-selected={selected}>
                  <button
                    type="button"
                    className={`ddl-option${selected ? " is-selected" : ""}`}
                    onClick={() => {
                      onChange(option.value);
                      setOpen(false);
                    }}
                  >
                    {option.label}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
