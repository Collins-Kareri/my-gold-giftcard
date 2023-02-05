import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "~/redux/slice/cartSlice";
import noticationReducer from "~/redux/slice/notificationsSlice";

const store = configureStore({
	reducer: {
		cart: cartReducer,
		notification: noticationReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;