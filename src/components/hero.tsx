import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "~/components/searchBar";

function Hero() {
	return (
		<div className="tw-flex tw-flex-col tw-mb-6 tw-text-slate-800 tw-h-[80vh] tw-border-b-2 tw-border-slate-200 tw-justify-center main-container tw-w-full tw-items-center tw-relative">
			<h1 className="tw-text-xl md:tw-text-2xl tw-mb-4 tw-font-bold tw-text-center">
				Start shopping from our list of gift cards
			</h1>
			<p className="tw-text-lg md:tw-text-xl tw-mb-6 tw-font-normal tw-w-full md:tw-w-2/4 tw-text-center">
				With a wide range of options we are sure to have what you are looking
				for.
			</p>

			<section className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-w-full main-transition">
				<p className="tw-my-3">Start shopping</p>
				<div className="tw-w-fit tw-h-fit tw-p-4 tw-text-white tw-bg-slate-900 tw-rounded-full tw-animate-pulse">
					<FontAwesomeIcon icon={"arrow-down-long"} />
				</div>
			</section>
		</div>
	);
}

export default Hero;
