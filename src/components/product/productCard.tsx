import { useAppDispatch, useAppSelector } from "~/hooks/redux";
import {
	add as addToCart,
	remove as removeFromCart,
} from "~/redux/slice/cartSlice";
import {
	add as notify,
	NotificationProps,
} from "~/redux/slice/notificationsSlice";
import ButtonContainer from "~/components/button";

export interface ProductCardProps {
	companyName: string;
	price: number;
	id: string;
	forCart: boolean;
	placeHolderImage?: string;
}

function PlaceHolderImage({ placeHolderImage }: { placeHolderImage?: string }) {
	return (
		<section className="tw-w-11/12 tw-mx-auto tw-mt-6 tw-h-40 tw-flex tw-justify-center tw-items-center tw-border tw-border-slate-400 tw-rounded-3xl tw-shadow-inner tw-shadow-slate-900 tw-bg-gradient-to-tr tw-from-slate-400 tw-opacity-30 tw-cursor-pointer">
			<img
				src={placeHolderImage}
				alt="card placeholder image"
				className="tw-w-[120px] tw-h-[100px] main-transition"
				loading={"lazy"}
			/>
		</section>
	);
}

function ProductCard({
	companyName,
	price,
	id,
	forCart,
	className,
	placeHolderImage,
}: ProductCardProps & React.ComponentPropsWithoutRef<"div">) {
	const dispatch = useAppDispatch();
	const item = { companyName, price, id };
	const cart = useAppSelector((state) => state.cart.value);

	function checkIfInCart(id: string) {
		const result = cart.findIndex((item) => item.id === id);
		if (result < 0) {
			return false;
		} else {
			return true;
		}
	}

	function handleClick() {
		if (forCart) {
			dispatch(removeFromCart({ id: item.id }));

			var notification: NotificationProps = {
				identifier: id,
				title: "Removed item from cart",
				type: "success",
			};

			dispatch(notify(notification));
		} else {
			if (!checkIfInCart(id)) {
				dispatch(addToCart(item));

				var notification: NotificationProps = {
					identifier: id,
					title: "Added item to cart",
					type: "success",
				};

				dispatch(notify(notification));
			}
		}
	}

	return (
		<div
			className={`tw-w-full tw-h-fit tw-border tw-border-slate-200 tw-shadow-md tw-shadow-slate-400 ${
				className ? className : ""
			} tw-rounded-3xl tw-bg-slate-50`}>
			<PlaceHolderImage placeHolderImage={placeHolderImage} />

			<section className=" tw-w-11/12 tw-mx-auto tw-py-6 tw-px-4 tw-flex tw-flex-col tw-items-start">
				<p className="tw-capitalize tw-my-1">{companyName}</p>
				<p className="tw-capitalize tw-my-1 tw-text-lg">
					price: <b>${price}</b>
				</p>

				<ButtonContainer
					styling={"primary"}
					textContent={forCart ? "remove" : "add to cart"}
					onClick={handleClick}
				/>
			</section>
		</div>
	);
}

export default ProductCard;
