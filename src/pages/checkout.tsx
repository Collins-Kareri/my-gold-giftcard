import { useNavigate, NavigateFunction, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from "~/pages/login";

function LoggedIn({ navigate }: { navigate: NavigateFunction }) {
	return (
		<div className="tw-flex tw-justify-center tw-items-center tw-flex-col tw-w-full tw-h-screen">
			<button
				className="tw-capitalize tw-fixed tw-top-8 tw-left-12 tw-font-bold"
				onClick={() => navigate("/")}>
				<FontAwesomeIcon icon={"caret-left"} /> back
			</button>
			<p className="tw-capitalize tw-text-xl tw-mb-4">pay with</p>
			<button className="tw-capitalize tw-w-fit tw-border tw-border-slate-800 tw-py-2 tw-px-4 tw-text-slate-50 tw-bg-slate-900 tw-mb-4">
				paypal
			</button>
			<p className="tw-mb-4">or</p>
			<button className="tw-capitalize tw-w-fit tw-border tw-border-slate-800 tw-py-2 tw-px-4 tw-text-slate-50 tw-bg-slate-900">
				bitpay
			</button>
			<p className="tw-font-bold tw-uppercase tw-mt-2">
				we support bitcoin, ethereum and usdt
			</p>
		</div>
	);
}

function CheckOut() {
	const navigate = useNavigate();
	const location = useLocation();

	return <LoggedIn navigate={navigate} />;
}

export default CheckOut;
