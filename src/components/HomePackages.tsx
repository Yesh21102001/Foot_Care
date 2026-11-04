import { ArrowButton } from "./ArrowButton";
import { PackageCards } from "./PackageCards";

export function HomePackages() {
  return (
    <section className="home-packages">
      <div className="home-packages-inner">
        <h2>Prepaid packages</h2>
        <p className="home-packages-lead">Pay in advance and receive additional value on your balance.</p>
        <PackageCards />
        <div className="home-packages-action">
          <ArrowButton label="View all pricing" href="/pricing" />
        </div>
      </div>
    </section>
  );
}
