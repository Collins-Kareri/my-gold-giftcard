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
	faCircle,
	faArrowDownLong,
} from "@fortawesome/free-solid-svg-icons";
import NavBar from "~/components/navbar";
import ErrorPage from "~/pages/errorPage";
import Home from "~/pages/home";
import Login from "~/pages/login";
import CreateAccount from "~/pages/createAccount";
import SellCards from "~/pages/sellCards";
import Results from "~/pages/searchResults";
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
				path: "user/createAccount",
				element: <CreateAccount />,
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
	faCheckDouble,
	faCircle,
	faArrowDownLong
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
