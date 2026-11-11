import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../template.css";
import "../../styles/site.css";
import { bodyClassName, stylesheets } from "../template-stylesheets";

export const metadata: Metadata = {
  title: "Foot Care",
  description: "Discover thoughtful massage therapy, the art of reflexology and modern wellness experiences at FOOT CARE.",
  icons: {
    icon: "/images/foot-care-logo.png",
    apple: "/images/foot-care-logo.png",
  },
};

// Root layout for the home page only: it keeps the theme's <html> and <body> attributes the converted home markup relies on.
export default function HomeRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-US" data-tm-layout="dark" className="no-js">
      <body className={bodyClassName}>
        {/* React 19 hoists these into <head> because of `precedence`. */}
        {stylesheets.map((sheet) => (
          <link
            key={sheet.href}
            rel="stylesheet"
            href={sheet.href}
            media={sheet.media}
            precedence="default"
          />
        ))}
        {children}
      </body>
    </html>
  );
}
