import Hero from "~/components/hero";
import SortBar from "~/components/sortBar";
import ProductList from "~/components/product/productList";

function Home() {
   
    return (
			<>
				<Hero />
				<section className="tw-w-11/12 md:tw-px-[32px] tw-mb-9 tw-mx-auto">
					<SortBar />
					<ProductList />
				</section>
			</>
		);
}

export default Home;