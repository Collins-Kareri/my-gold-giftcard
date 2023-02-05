import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "~/components/logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FullName() {
	return (
		<div className="tw-flex tw-w-full tw-relative tw-h-fit tw-mb-4 tw-justify-between">
			<section className="tw-flex tw-flex-col tw-w-2/4 tw-mr-6">
				<label htmlFor="first_name" className="tw-capitalize">
					first name
				</label>
				<input
					type={"first_name"}
					placeholder="first name"
					id="text"
					className="tw-py-3 tw-px-3 tw-border tw-border-slate-600 main-transition focus:tw-shadow focus:tw-shadow-slate-500 focus:tw-ring-0 focus:tw-outline-none focus:tw-border focus:tw-border-slate-900"
				/>
			</section>

			<section className="tw-flex tw-flex-col tw-w-2/4">
				<label htmlFor="last_name" className="tw-capitalize">
					last name
				</label>
				<input
					type={"last_name"}
					placeholder="last name"
					id="text"
					className="tw-py-3 tw-px-3 tw-border tw-border-slate-600 main-transition focus:tw-shadow focus:tw-shadow-slate-500 focus:tw-ring-0 focus:tw-outline-none focus:tw-border focus:tw-border-slate-900"
				/>
			</section>
		</div>
	);
}

function SignUp() {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<div className="tw-flex tw-justify-center tw-items-center tw-flex-col tw-h-screen tw-w-11/12 lg:tw-w-2/4 tw-mx-auto">
			<Logo />
			<p>
				Already have an account{" "}
				<Link
					to={"/user/login"}
					className="tw-underline tw-underline-offset-4 tw-cursor-pointer hover:tw-underline-offset-8 main-transition tw-font-bold">
					login
				</Link>
			</p>

			<p className="tw-py-2">or</p>

			<div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
				<p className="tw-font-bold tw-mb-2">signup with</p>
				<div className="tw-border tw-border-slate-900 tw-w-fit tw-px-5 tw-py-3 tw-cursor-pointer tw-bg-slate-900 tw-text-slate-50 hover:tw-shadow-sm">
					<FontAwesomeIcon icon={["fab", "google"]} />
				</div>
			</div>

			<p className="tw-py-2">or</p>

			<form className="tw-w-full">
				{location.pathname === "/sell" ? <FullName /> : <></>}

				<div className="tw-flex tw-flex-col tw-w-full tw-relative tw-h-fit tw-mb-4">
					<label htmlFor="email" className="tw-capitalize">
						email
					</label>
					<input
						type={"email"}
						placeholder="email"
						id="email"
						className="tw-py-3 main-transition focus:tw-shadow focus:tw-shadow-slate-500 focus:tw-ring-0 focus:tw-outline-none focus:tw-border focus:tw-border-slate-900"
					/>
				</div>

				<div className="tw-flex tw-flex-col">
					<label htmlFor="password" className="tw-capitalize">
						password
					</label>
					<input
						type={"password"}
						placeholder="password"
						id="password"
						className="tw-py-3 main-transition focus:tw-shadow focus:tw-shadow-slate-500 focus:tw-ring-0 focus:tw-outline-none focus:tw-border focus:tw-border-slate-900"
					/>
				</div>

				<div className="tw-flex tw-items-center tw-justify-start tw-pt-6">
					<button
						type="button"
						className="tw-mr-4 tw-py-2 tw-px-4 hover:tw-bg-slate-200"
						onClick={() => navigate("/")}>
						Cancel
					</button>
					<button className="tw-capitalize tw-w-fit tw-border tw-border-slate-800 tw-py-2 tw-px-4">
						signup
					</button>
				</div>
			</form>
		</div>
	);
}

export default SignUp;
