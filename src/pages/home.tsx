import Hero from "~/components/hero";
import SortBar from "~/components/sortBar";
import ProductList from "~/components/product/productList";

function Home() {
   
    return (
			<>
				<Hero />
				<section className="main-container tw-mb-9 tw-mx-auto">
					<SortBar />
					<ProductList />
				</section>
			</>
		);
}

export default Home;