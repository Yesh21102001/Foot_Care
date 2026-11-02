import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import type { ReactNode } from "react";

export const navItems = [
  { href: "/about-us", label: "About Us" },
  { href: "/our-services", label: "Our Services" },
  { href: "/reflexology", label: "Reflexology" },
  { href: "/therapeutic-massage", label: "Therapeutic Massage" },
  { href: "/hydrogen-therapy", label: "Hydrogen Therapy" },
  { href: "/healthpod", label: "Healthpod" },
  { href: "/pricing", label: "Pricing" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

type LayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function Layout({ title, description, children }: LayoutProps) {
  const { asPath } = useRouter();

  return (
    <>
      <Head>
        <title>{`${title} | Wellxess`}</title>
        <meta name="description" content={description} />
      </Head>

      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand">
            <img src="/wellxess/wp-content/uploads/2026/08/logo-wide.png" alt="Wellxess" />
          </Link>
          <nav className="nav" aria-label="Main">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={asPath === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <h4>Wellxess</h4>
              <p>Foot care, reflexology and wellness therapies to help you feel balanced every day.</p>
            </div>
            <div>
              <h4>Services</h4>
              <Link href="/reflexology">Reflexology</Link>
              <Link href="/therapeutic-massage">Therapeutic Massage</Link>
              <Link href="/hydrogen-therapy">Hydrogen Therapy</Link>
              <Link href="/healthpod">Healthpod</Link>
            </div>
            <div>
              <h4>Company</h4>
              <Link href="/about-us">About Us</Link>
              <Link href="/reviews">Reviews</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/faq">FAQ</Link>
            </div>
            <div>
              <h4>Contact</h4>
              <Link href="/contact">Contact us</Link>
              <p>Phone: +00 000 000 000</p>
              <p>Email: hello@example.com</p>
            </div>
          </div>
          <div className="footer-bottom">© {new Date().getFullYear()} Wellxess. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
