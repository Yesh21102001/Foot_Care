import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./template.css";
import "../styles/site.css";
import { bodyClassName, stylesheets } from "./template-stylesheets";

const assets = "https://dev265.kodesolution.com/wellxess/wp-content/themes/wellxess/assets/images/logo";

export const metadata: Metadata = {
  title: "Foot Care – My WordPress Blog",
  icons: {
    icon: `${assets}/favicon.png`,
    apple: [
      { url: `${assets}/apple-touch-icon.png` },
      { url: `${assets}/apple-touch-icon-72x72.png`, sizes: "72x72" },
      { url: `${assets}/apple-touch-icon-114x114.png`, sizes: "114x114" },
      { url: `${assets}/apple-touch-icon-144x144.png`, sizes: "144x144" },
    ],
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
