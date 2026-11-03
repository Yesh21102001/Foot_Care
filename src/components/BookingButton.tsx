"use client";

import type { ReactNode } from "react";

// Opens the booking pop-up. The pop-up is mounted once per page (see BookingModal).
export function BookingButton({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event("open-booking"))}
    >
      {children}
    </button>
  );
}
