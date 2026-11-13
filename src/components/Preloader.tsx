import Image from "next/image";
// Home page preloader: the logo and name on the dark green background. It fades out on its own with CSS shortly after
// the first paint, so it never waits for scripts.
export function Preloader() {
  return (
    <div className="fc-preloader" aria-hidden="true">
      <Image className="fc-preloader-logo" src="/images/foot-care-logo.webp" alt="" width={96} height={96} loading="eager" fetchPriority="high" />
      <span className="fc-preloader-name">Foot Care</span>
    </div>
  );
}
