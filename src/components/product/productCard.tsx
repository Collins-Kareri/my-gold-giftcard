import MyGiftCardPlaceholder from "~/assets/giftCardPlaceHolder.svg";

export interface ProductCardProps {
	companyName: string;
	price: number;
	id?: string;
	forCart: boolean;
	className?: string;
}

function ProductCard({ companyName, price, id,forCart,className }: ProductCardProps) {
	return (
		<div className={`tw-w-full tw-h-fit tw-border tw-border-slate-400 ${className?className:""}`}>
			<section className="tw-w-full tw-h-28 tw-flex tw-justify-center tw-items-center tw-border-b tw-border-b-slate-400 tw-rounded-3xl">
				<img
					src={MyGiftCardPlaceholder}
					alt="card placeholder image"
					className="tw-w-[100px] tw-h-[80px]"
				/>
			</section>
			<section className="tw-py-6 tw-px-4 tw-flex tw-flex-col tw-items-end">
				<p className="tw-capitalize tw-mb-1">{companyName}</p>
				<p className="tw-capitalize tw-mb-1">
					price: <b>${price}</b>
				</p>
				<button className="tw-capitalize tw-w-fit tw-border tw-border-slate-800 tw-py-2 tw-px-4">
					{forCart ? "remove" : "add to cart"}
				</button>
			</section>
		</div>
	);
}

export default ProductCard;