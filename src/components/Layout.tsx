import Head from "next/head";
import type { ReactNode } from "react";
import { RevealOnScroll } from "../app/reveal-on-scroll";
import { ScrollAnimations } from "./ScrollAnimations";
import { BookingModal } from "./BookingModal";
import { SiteFooter } from "./SiteFooter";
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
      </Head>

      <div className="fc-site">
        <SiteHeader />
        <main>{children}</main>
      </div>

      <SiteFooter />
      <RevealOnScroll />
      <ScrollAnimations />
      <div className="fc-site">
        <BookingModal />
      </div>
    </>
  );
}
