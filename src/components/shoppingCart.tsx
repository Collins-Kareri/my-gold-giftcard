import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductCard from "./product/productCard";
import generateKey from "~/utils/generateKey";
import { useAppSelector, useAppDispatch } from "~/hooks/redux";
import {
	add as notify,
	NotificationProps,
} from "~/redux/slice/notificationsSlice";
import { AcceptedCardProps } from "~/redux/slice/cartSlice";
import MyGiftCardPlaceholder from "~/assets/giftCardPlaceHolder.svg";
import ButtonContainer from "~/components/button";

interface ShoppingCartModalProps {
	openModal: () => void;
	cart: [] | AcceptedCardProps[];
}

function ShoppingCartModal({ openModal, cart }: ShoppingCartModalProps) {
	function getTotal(): number {
		return cart.map((val) => val.price).reduce((a, b) => a + b);
	}

	const [total, setTotal] = useState<number>(getTotal());

	useEffect(() => {
		setTotal(getTotal());
		return;
	}, [cart]);

	return (
		<>
			<div className="tw-fixed tw-top-0 tw-right-0 tw-w-full tw-h-full tw-bg-slate-900 tw-opacity-50 tw-z-10"></div>

			<div className="tw-fixed tw-w-11/12 md:tw-w-2/4 tw-h-screen tw-right-0 tw-z-20 tw-top-0 tw-text-slate-900 tw-bg-white lg:tw-w-[400px]">
				{/**modal close button*/}
				<div className="tw-border-b tw-border-b-slate-700 tw-flex tw-bg-white tw-justify-between tw-sticky tw-top-0 tw-w-full tw-right-0 tw-px-3 tw-py-4 tw-shadow-md tw-h-[80px] tw-items-center">
					<div className="tw-w-fit tw-h-fit tw-flex tw-justify-between tw-bg-white tw-items-center">
						<span className="tw-capitalize tw-mr-2">Shopping cart</span>
						<span className="tw-bg-emerald-400 tw-py-2 tw-px-4 tw-rounded-full">
							{cart.length}
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
					{cart.map((card) => {
						const id = generateKey();
						return (
							<ProductCard
								companyName={card.companyName}
								price={card.price}
								key={card.id}
								forCart={true}
								className="tw-mb-5 tw-shadow-md"
								id={card.id}
								placeHolderImage={MyGiftCardPlaceholder}
							/>
						);
					})}
				</div>

				{/**checkout */}
				<div className="tw-border-b tw-border-b-slate-300 tw-flex tw-justify-centre tw-items-center tw-w-11/12 md:tw-w-2/4 tw-right-0 tw-bottom-0 tw-h-fit tw-flex-col tw-border-t tw-border-t-slate-700 tw-shadow-md tw-fixed tw-py-5 tw-bg-white tw-rounded-t-2xl lg:tw-w-[400px]">
					<p className="tw-font-bold tw-capitalize tw-mb-3">total ${total}</p>
					<Link to="/checkout">
						<ButtonContainer styling={"primary"} textContent={"checkout"} />
					</Link>
				</div>
			</div>
		</>
	);
}

function ShoppingCart() {
	const [shoppingModalState, setShoppingModalState] = useState(false);
	const cart = useAppSelector((state) => state.cart.value);
	const dispatch = useAppDispatch();

	function openModal() {
		if (cart.length > 0) {
			setShoppingModalState(!shoppingModalState);
			return;
		} else {
			const notification: NotificationProps = {
				title: "cart is empty.",
				message: "Please add items to cart to view it.",
				identifier: generateKey(),
				type: "info",
			};

			dispatch(notify(notification));
		}
	}

	useEffect(() => {
		if (cart.length <= 0 && shoppingModalState) {
			setShoppingModalState(!shoppingModalState);
		}

		return;
	}, [cart]);

	return (
		<>
			<span className="tw-relative tw-w-fit tw-mr-4">
				{cart.length > 0 ? (
					<FontAwesomeIcon
						icon={"circle"}
						className="tw-text-green-600 tw-absolute -tw-right-2 -tw-top-1"
						size={"xs"}
					/>
				) : (
					<></>
				)}

				<FontAwesomeIcon
					icon={"shopping-basket"}
					size={"xl"}
					className=" tw-cursor-pointer"
					onClick={openModal}
					title="shopping cart"
				/>
			</span>
			{shoppingModalState && cart.length > 0 ? (
				<ShoppingCartModal openModal={openModal} cart={cart} />
			) : (
				<></>
			)}
		</>
	);
}

export default ShoppingCart;
