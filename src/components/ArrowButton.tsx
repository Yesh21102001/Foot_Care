import Link from "next/link";
import { BookingButton } from "./BookingButton";

// The homepage button (theme "btn-style2": label with a white arrow circle) in Foot Care dark green.
// With `href` it is a link; without it, it opens the booking pop-up.
export function ArrowButton({ label, href, className = "" }: { label: string; href?: string; className?: string }) {
  const classes = `btn-style2 fc-btn2 ${className}`.trim();
  const content = (
    <>
      <span className="theme-btn-arrow-left">
        <i className="fas fa-arrow-right"></i>
      </span>
      <span className="theme-btn">{label}</span>
      <span className="theme-btn-arrow-right">
        <i className="fas fa-arrow-right"></i>
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }
  return <BookingButton className={classes}>{content}</BookingButton>;
}
