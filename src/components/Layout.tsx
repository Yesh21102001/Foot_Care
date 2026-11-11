import type { ReactNode } from "react";
import { RevealOnScroll } from "../app/reveal-on-scroll";
import { ScrollAnimations } from "./ScrollAnimations";
import { SmoothDetails } from "./SmoothDetails";
import { BookingModal } from "./BookingModal";
import { SiteFooter } from "./SiteFooter";
import { MobileBottomNav } from "./MobileBottomNav";
import { SiteHeader } from "./SiteHeader";

// Page frame: header, main content, footer and the site-wide helpers. Titles come from each page's `metadata`.
export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="fc-site">
        <SiteHeader />
        <main>{children}</main>
        <MobileBottomNav />
      </div>

      <SiteFooter />
      <RevealOnScroll />
      <ScrollAnimations />
      <SmoothDetails />
      <div className="fc-site">
        <BookingModal />
      </div>
    </>
  );
}
