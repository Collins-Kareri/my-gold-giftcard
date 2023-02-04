import Hero from "~/components/hero";
import SortBar from "~/components/sortBar";
import ProductList from "~/components/product/productList";

function Home() {
   
    return (<>
        <Hero />
        <section className="tw-px-[32px] tw-mb-9">
            <SortBar />
            <ProductList/>
        </section>
    </>);
}

export default Home;