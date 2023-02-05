import { Link, useNavigate } from "react-router-dom";
import Logo from "~/components/logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function OAuthOptions() {
	return (
		<div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
			<p className="tw-font-bold tw-mb-2">login with</p>
			<div
				className="tw-border tw-border-slate-900 tw-w-fit tw-px-5 tw-py-3 tw-cursor-pointer tw-bg-slate-900 tw-text-slate-50 hover:tw-shadow-sm"
				title="google">
				<FontAwesomeIcon icon={["fab", "google"]} />
			</div>
		</div>
	);
}

function LoginForm() {
	const navigate = useNavigate();

	return (
		<form className="tw-w-full">
			<div className="tw-flex tw-flex-col tw-w-full tw-relative tw-h-fit tw-mb-6">
				<label htmlFor="email" className="tw-capitalize tw-mb-2">
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
				<section className="tw-flex tw-relative tw-w-full tw-items-center tw-justify-between tw-mb-2">
					<label htmlFor="password" className="tw-capitalize">
						password
					</label>
					<p className="tw-font-bold tw-cursor-pointer tw-underline">
						Forgot password?
					</p>
				</section>

				<input
					type={"password"}
					placeholder="password"
					id="password"
					className="tw-py-3 main-transition focus:tw-shadow focus:tw-shadow-slate-500 focus:tw-ring-0 focus:tw-outline-none focus:tw-border focus:tw-border-slate-900"
				/>
			</div>

			<div className="tw-flex tw-items-center tw-justify-start tw-mt-8 tw-border-t-2 tw-border-slate-200 tw-pt-4">
				<button
					type="button"
					className="tw-mr-4 tw-py-2 tw-px-4 hover:tw-bg-slate-200"
					onClick={() => navigate("/")}>
					Cancel
				</button>
				<button className="tw-capitalize tw-w-fit tw-border tw-border-slate-800 tw-py-2 tw-px-4">
					login
				</button>
			</div>
		</form>
	);
}

function Login() {
	return (
		<div className="tw-flex tw-justify-center tw-items-center tw-flex-col tw-h-screen tw-w-11/12 lg:tw-w-2/4 tw-mx-auto">
			<Logo />
			<p>
				Don't have an account{" "}
				<Link
					to={"/user/signup"}
					className="tw-underline tw-underline-offset-4 tw-cursor-pointer hover:tw-underline-offset-8 main-transition tw-font-bold">
					signup
				</Link>
			</p>

			<p className="tw-py-2">or</p>

			<OAuthOptions />

			<p className="tw-py-2">or</p>

			<LoginForm />
		</div>
	);
}

export default Login;
