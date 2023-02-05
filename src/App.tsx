import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
	fas,
	faMagnifyingGlass,
	faShoppingBasket,
	faUserLarge,
	faCaretDown,
	faXmark,
	faCaretLeft,
	faInfo,
	faExclamation,
	faExplosion,
	faCheckDouble,
} from "@fortawesome/free-solid-svg-icons";
import NavBar from "~/components/navbar";
import ErrorPage from "~/pages/errorPage";
import Home from "~/pages/home";
import Login from "~/pages/login";
import SignUp from "~/pages/signup";
import SellCards from "~/pages/sellCards";
import Results from "~/pages/results";
import CheckOut from "./pages/checkout";
import NotificationList from "~/components/notifications/notificationsList";
import store from "~/redux/store";
import { Provider as StoreProvider } from "react-redux";

function RootOfProject() {
	return (
		<>
			<NotificationList />
			<NavBar>
				<Outlet />
			</NavBar>
		</>
	);
}

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootOfProject />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "user/login",
				element: <Login />,
			},
			{
				path: "user/signup",
				element: <SignUp />,
			},
			{
				path: "sell",
				element: <SellCards />,
			},
			{
				path: "search",
				element: <Results />,
			},
			{
				path: "checkout",
				element: <CheckOut />,
			},
		],
	},
]);

library.add(
	fas,
	fab,
	faMagnifyingGlass,
	faShoppingBasket,
	faUserLarge,
	faCaretDown,
	faXmark,
	faGoogle,
	faCaretLeft,
	faInfo,
	faExclamation,
	faExplosion,
	faCheckDouble
);

function App() {
	return (
		<StoreProvider store={store}>
			<div className="App">
				<RouterProvider router={router} />
			</div>
		</StoreProvider>
	);
}

export default App;
