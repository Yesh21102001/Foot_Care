import Head from "next/head";
import type { ReactNode } from "react";
import { RevealOnScroll } from "../app/reveal-on-scroll";
import { ScrollAnimations } from "./ScrollAnimations";
import { SmoothDetails } from "./SmoothDetails";
import { BookingModal } from "./BookingModal";
import { SiteFooter } from "./SiteFooter";
import { MobileBottomNav } from "./MobileBottomNav";
import { SiteHeader } from "./SiteHeader";

type LayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function Layout({ title, description, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{`${title} | Foot Care`}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/images/foot-care-logo.png" type="image/png" />
      </Head>

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
