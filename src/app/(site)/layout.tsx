import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../template.css";
import "../../styles/site.css";
import { stylesheets } from "../template-stylesheets";

export const metadata: Metadata = {
  title: { template: "%s | Foot Care", default: "Foot Care" },
  icons: {
    icon: "/images/foot-care-logo.png",
    apple: "/images/foot-care-logo.png",
  },
};

// Root layout for every page except home. The shared footer is the converted theme footer,
// so the theme stylesheets load here too (React 19 hoists them into <head> because of `precedence`).
export default function SiteRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {stylesheets.map((sheet) => (
          <link key={sheet.href} rel="stylesheet" href={sheet.href} media={sheet.media} precedence="default" />
        ))}
        {children}
      </body>
    </html>
  );
}
