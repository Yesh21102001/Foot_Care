import type { Metadata } from "next";
import Link from "next/link";
import "../styles/site.css";

export const metadata: Metadata = {
  title: "Page not found | Foot Care",
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <div className="fc-site">
          <main className="nf-page">
            <p className="nf-code">404</p>
            <h1>We couldn&apos;t find that page</h1>
            <p>The page may have moved. You can head back to the home page.</p>
            <Link className="nf-link" href="/">
              Back to home
            </Link>
          </main>
        </div>
      </body>
    </html>
  );
}
