import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./template.css";
import "../styles/site.css";
import { bodyClassName, stylesheets } from "./template-stylesheets";

export const metadata: Metadata = {
  title: "Foot Care – My WordPress Blog",
  icons: {
    icon: "/images/foot-care-logo.png",
    apple: "/images/foot-care-logo.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
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
