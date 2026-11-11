import Link from "next/link";
import { BookingButton } from "./BookingButton";
import { Icon } from "./icons/Icon";

// The homepage button (theme "btn-style2": label with a white arrow circle) in Foot Care dark green.
// With `href` it is a link; with `submit` it is a form submit button; otherwise it opens the booking pop-up.
export function ArrowButton({
  label,
  href,
  className = "",
  newTab = false,
  submit = false,
}: {
  label: string;
  href?: string;
  className?: string;
  newTab?: boolean;
  submit?: boolean;
}) {
  const classes = `btn-style2 fc-btn2 ${className}`.trim();
  const content = (
    <>
      <span className="theme-btn-arrow-left">
        <Icon name="arrow-right" />
      </span>
      <span className="theme-btn">{label}</span>
      <span className="theme-btn-arrow-right">
        <Icon name="arrow-right" />
      </span>
    </>
  );

  if (submit) {
    return (
      <button type="submit" className={classes}>
        {content}
      </button>
    );
  }
  if (href && newTab) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }
  return <BookingButton className={classes}>{content}</BookingButton>;
}
