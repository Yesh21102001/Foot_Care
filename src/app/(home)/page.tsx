import type { CSSProperties } from "react";
import { HidePreloader } from "../hide-preloader";
import { RevealOnScroll } from "../reveal-on-scroll";
import { ScrollAnimations } from "../../components/ScrollAnimations";
import { SwiperCarousels } from "../swiper-carousels";
import { SiteHeader } from "../../components/SiteHeader";
import { MobileBottomNav } from "../../components/MobileBottomNav";
import { SiteFooter } from "../../components/SiteFooter";
import { HomeHero } from "../../components/HomeHero";
import { WhoWeAre } from "../../components/WhoWeAre";
import { BookingModal } from "../../components/BookingModal";
import { HomeTestimonials } from "../../components/HomeTestimonials";
import { HomeBeyond } from "../../components/HomeBeyond";
import { HomeBenefits } from "../../components/HomeBenefits";
import { HomeHowItWorks } from "../../components/HomeHowItWorks";
import { HomeHydrogen } from "../../components/HomeHydrogen";
import { HomePackages } from "../../components/HomePackages";
import { HomeServices } from "../../components/HomeServices";

// Converted from template.txt. Markup is kept as-is; styles live in ./template.css.
// Interactive WordPress/Elementor JavaScript (sliders, mobile menu, animations) is not included.
export default function Home() {
	return (
		<>
			<HidePreloader />
			<RevealOnScroll />
			<ScrollAnimations />
			<div className={"fc-site"}><BookingModal /></div>
			<SwiperCarousels />

			<div id={"wrapper"}>


				<div id={"preloader"} className={"three-layer-loaderbg"}>
					<div id={"spinner"}>

						<img className={"fc-preloader-logo"} src={"/images/foot-care-logo.png"} alt={""} width={96} height={96} />			<div className={"txt-loading"}><span className={"letters-loading"}>Foot Care</span></div>
					</div>


					<div id={"disable-preloader"} className={"btn btn-theme-colored1 btn-flat btn-sm"}>Disable Preloader</div>
					<div className={"layer"}><span className={"overlay"}></span></div>
				</div>

				<div className={"fc-site"}><SiteHeader /><MobileBottomNav /></div>

				<div className={"top-sliders-container"}>


				</div>

				<div className={"main-content"}>
					<section className={"main-content-section-wrapper"}>
						<div className={"container"}>

							<div className={"row tm-blog-sidebar-row"}>
								<div className={"col-lg-12"}>
									<div className={"main-content-area"}>
										<div id={"page-17"} className={"post-17 page type-page status-publish hentry"}>
											<div className={"entry-content"}>
												<div className={"page-content"}>
													<div className={"home-sections"}>
														<HomeHero />
														<div className={"fc-site"}><WhoWeAre /></div>
														<div className={"fc-site"}><HomeServices /></div>
														<div className={"fc-site"}><HomeBeyond /></div>
														<div className={"fc-site"}><HomeHydrogen /></div>
														<div className={"fc-site"}><HomeBenefits /></div>
														<div className={"fc-site"}><HomeHowItWorks /></div>
														<div className={"fc-site"}><HomePackages /></div>
														<div className={"fc-site"}><HomeTestimonials /></div>
													</div>


													<div className={"clearfix"}></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>




				</div>




				<SiteFooter />

			</div>

			<div className={"site-search-popup"}>
				<div className={"site-search-popup-wrap"}>
					<a href={"#"} className={"site-search-popup-close"}></a>
					<div className={"tm-widget-search-form"}>
						<form role={"search"} method={"get"} className={"search-form-default"} action={"https://dev265.kodesolution.com/wellxess/"}>
							<input type={"search"} id={"woocommerce-product-search-field-1"} className={"form-control search-field"} placeholder={"Search products&hellip;"} defaultValue={""} name={"s"} />
							<button type={"submit"} className={"search-submit"}><i className={"lnr lnr-icon-search"}></i></button>
						</form>
					</div>
				</div>
			</div>

			<div className={"scroll-to-top"}><a className={"scroll-link"} href={"#"}><i className={"lnr-icon-arrow-up"}></i></a></div>
		</>
	);
}
