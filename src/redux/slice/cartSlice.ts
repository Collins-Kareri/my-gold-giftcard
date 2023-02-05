import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductCardProps } from "~/components/product/productCard";

export interface AcceptedCardProps
	extends Omit<ProductCardProps, "forCart" | "className"> {}

interface CartState {
	value: AcceptedCardProps[] | [];
}

const initialState: CartState = {
	value: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		add: (state, action: PayloadAction<AcceptedCardProps>) => {
			state.value = [...state.value, action.payload];
		},
		remove: (state, action: PayloadAction<{ id: string }>) => {

			const newVal = (state.value as AcceptedCardProps[]).filter(
				(item) =>
					item.id.toLowerCase().trim() !==
					action.payload.id.toLowerCase().trim()
			);
			state.value = [...newVal];
		},
	},
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;