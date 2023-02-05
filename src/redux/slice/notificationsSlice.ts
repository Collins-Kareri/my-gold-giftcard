import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NotificationProps {
	identifier: string;
	title: string;
	message?: string;
	type: "info" | "error" | "warning" | "success";
}

interface NotificationState {
	value: NotificationProps[] | [];
}

const initialState: NotificationState = {
	value: [],
};

const notificationSlice = createSlice({
	name: "notification",
	initialState,
	reducers: {
		add: (state, action: PayloadAction<NotificationProps>) => {
			state.value = [...state.value, action.payload];
		},
		remove: (state, action: PayloadAction<{ id: string }>) => {
			state.value = (state.value as NotificationProps[]).filter(
				(item) => item.identifier !== action.payload.id
			);
		},
	},
});

export const { add, remove } = notificationSlice.actions;

export default notificationSlice.reducer;
