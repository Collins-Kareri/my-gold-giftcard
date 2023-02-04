import SearchBar from "~/components/searchBar";

function Hero() {
	return (
		<div className="tw-flex tw-flex-col tw-mb-6 tw-text-slate-900 tw-h-fit tw-border-b-2 tw-border-slate-200 tw-py-16 main-container">
			<h1 className="tw-text-2xl tw-mb-4 tw-font-medium">
				Choose from our list of gift cards
			</h1>
			<p className="tw-text-xl tw-mb-6 tw-font-normal tw-w-2/4">
				With a wide range of options from top brands we are sure to have what
				you are looking for.
			</p>
			<SearchBar />
		</div>
	);
}

export default Hero;