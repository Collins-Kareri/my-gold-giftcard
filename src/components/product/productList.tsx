import ProductCard, { ProductCardProps } from "~/components/product/productCard";
import generateKey from "~/utils/generateKey";

function ProductList() {
    const cards: Omit<ProductCardProps, "id" | "forCart">[] = [
			{
				companyName: "netflix",
				price: 20,
			},
			{
				companyName: "amazon",
				price: 50,
			},
			{
				companyName: "target",
				price: 5,
			},
			{
				companyName: "walmart",
				price: 28,
			},
			{
				companyName: "amazon",
				price: 10,
			},
			{
				companyName: "target",
				price: 20,
			},
    ];
    
    return (
			<div className="tw-mt-8 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-6 lg:tw-grid-cols-4">
				{cards.map((card) => {
					return (
						<ProductCard
							companyName={card.companyName}
							price={card.price}
							key={generateKey()}
							forCart={false}
						/>
					);
				})}
			</div>
		);
}

export default ProductList;