import ProductCard, { ProductCardProps } from "~/components/product/productCard";
import generateKey from "~/utils/generateKey";
import MyGiftCardPlaceholder from "~/assets/giftCardPlaceHolder.svg";

const cards: Omit<ProductCardProps, "forCart">[] = [
	{
		id: generateKey(),
		companyName: "netflix",
		price: 20,
	},
	{
		id: generateKey(),
		companyName: "amazon",
		price: 50,
	},
	{
		id: generateKey(),
		companyName: "target",
		price: 5,
	},
	{
		id: generateKey(),
		companyName: "walmart",
		price: 28,
	},
	{
		id: generateKey(),
		companyName: "amazon",
		price: 10,
	},
	{
		id: generateKey(),
		companyName: "target",
		price: 20,
	},
];

function ProductList() {
	return (
		<div className="tw-mt-8 tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-14 lg:tw-grid-cols-3 xl:tw-grid-cols-4">
			{cards.map((card) => {
				return (
					<ProductCard
						companyName={card.companyName}
						price={card.price}
						key={card.id}
						forCart={false}
						id={card.id}
						placeHolderImage={MyGiftCardPlaceholder}
					/>
				);
			})}
		</div>
	);
}

export default ProductList;