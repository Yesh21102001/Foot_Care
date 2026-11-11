import Link from "next/link";
import { Layout } from "../components/Layout";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <Layout>
      <section className="nf-page">
        <p className="nf-code">404</p>
        <h1>We couldn&apos;t find that page</h1>
        <p>The page may have moved. You can head back to the home page.</p>
        <Link className="nf-link" href="/">
          Back to home
        </Link>
      </section>
    </Layout>
  );
}
