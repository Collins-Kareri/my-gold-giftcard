import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductCard, { ProductCardProps } from "./product/productCard";
import generateKey from "~/utils/generateKey";

interface ShoppingCartModalProps{
    openModal: () => void;
}

function ShoppingCartModal({openModal}:ShoppingCartModalProps) {
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
		<>
			<div className="tw-fixed tw-top-0 tw-right-0 tw-w-full tw-h-full tw-bg-slate-900 tw-opacity-50 tw-z-10"></div>

			<div className="tw-fixed tw-w-2/4 tw-h-screen tw-right-0 tw-z-20 tw-top-0 tw-text-slate-900 tw-bg-white">
				{/**modal close button*/}
				<div className="tw-border-b tw-border-b-slate-700 tw-flex tw-bg-white tw-justify-between tw-sticky tw-top-0 tw-w-full tw-right-0 tw-px-3 tw-py-4 tw-shadow-md tw-h-[80px] tw-items-center">
					<div className="tw-w-fit tw-h-fit tw-flex tw-justify-between tw-bg-white tw-items-center">
						<span className="tw-capitalize tw-mr-2">Shopping cart</span>
						<span className="tw-bg-lime-400 tw-py-2 tw-px-4 tw-rounded-full">
							6
						</span>
					</div>
					<FontAwesomeIcon
						icon={"xmark"}
						size={"2x"}
						className="tw-cursor-pointer"
						onClick={openModal}
					/>
				</div>

				{/**card styling */}
				<div className="tw-h-[60%] tw-my-5 tw-overflow-auto tw-px-6 tw-py-3">
					{cards.map((card) => {
						return (
							<ProductCard
								companyName={card.companyName}
								price={card.price}
								key={generateKey()}
								forCart={true}
								className="tw-mb-5 tw-shadow-md"
							/>
						);
					})}
				</div>

				{/**checkout */}
				<div className="tw-border-b tw-border-b-slate-300 tw-flex tw-justify-centre tw-items-center tw-w-2/4 tw-right-0 tw-bottom-0 tw-h-fit tw-flex-col tw-border-t tw-border-t-slate-700 tw-shadow-md tw-fixed tw-py-5 tw-bg-white tw-rounded-t-2xl">
					<p className="tw-font-bold tw-capitalize tw-mb-3">total $20</p>
					<Link to="/checkout" className="tw-capitalize tw-w-fit tw-border tw-border-slate-800 tw-py-2 tw-px-4">
						checkout
					</Link>
				</div>
			</div>
		</>
	);
}

function ShoppingCart() {
	const [shoppingModalState, setShoppingModalState] = useState(false);

	function openModal() {
		setShoppingModalState(!shoppingModalState);
	}

	return (
		<>
			<FontAwesomeIcon
				icon={"shopping-basket"}
				size={"xl"}
				className="tw-mr-4 tw-cursor-pointer"
				onClick={openModal}
			/>
			{shoppingModalState ? <ShoppingCartModal openModal={openModal} /> : <></>}
		</>
	);
}

export default ShoppingCart;
