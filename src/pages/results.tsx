import { useSearchParams } from "react-router-dom";
import SortBar from "~/components/sortBar";
import ProductList from "~/components/product/productList";

function Results({}) {
    let [searchParams, _] = useSearchParams();
    const term = searchParams.get("term");
    
    return (
        <div className="tw-px-[32px] tw-py-[48px]">
            <p>results for "{term}"</p>
            <SortBar />
            <br/>
            <ProductList/>
        </div>
    );
}

export default Results;