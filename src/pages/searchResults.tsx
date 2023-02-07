import { useSearchParams } from "react-router-dom";
import SortBar from "~/components/sortBar";
import ProductList from "~/components/product/productList";

function Results({}) {
	let [searchParams, _] = useSearchParams();
	const term = searchParams.get("term");

	return (
		<div className="main-container tw-mb-16">
			<p className="tw-mb-5">results for "{term}"</p>
			<SortBar />
			<br />
			<ProductList />
		</div>
	);
}

export default Results;
