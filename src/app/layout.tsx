import type { Metadata, Viewport } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import type { ReactNode } from "react";
import "../styles/base.css";
import "../styles/site.css";

// Fonts are self-hosted by Next.js (no requests to Google at runtime) and exposed as CSS variables.
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-inter", display: "swap" });
const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  title: { template: "%s | Foot Care", default: "Foot Care" },
  description: "Discover thoughtful massage therapy, the art of reflexology and modern wellness experiences at FOOT CARE.",
  icons: {
    icon: "/images/foot-care-logo.png",
    apple: "/images/foot-care-logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b2622",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${garamond.variable}`}>
      <body>{children}</body>
    </html>
  );
}
