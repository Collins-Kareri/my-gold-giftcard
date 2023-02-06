import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "~/components/logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OAuthOptions from "~/components/oAuthButtons";
import InputContainer from "~/components/input";
import ButtonContainer from "~/components/button";

function FullName() {
	return (
		<div className="tw-flex tw-w-full tw-relative tw-h-fit tw-justify-between tw-flex-col md:tw-flex-row">
			<section className="tw-flex tw-flex-col tw-w-full md:tw-w-2/4 tw-mr-6">
				<InputContainer
					label="first name"
					id="first_name"
					placeholder="first name"
					type="text"
				/>
			</section>

			<section className="tw-flex tw-flex-col tw-w-full md:tw-w-2/4">
				<InputContainer
					label="last name"
					id="last_name"
					placeholder="last name"
					type="text"
				/>
			</section>
		</div>
	);
}

function SignUp() {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<form className="tw-flex tw-justify-center tw-items-center tw-flex-col tw-h-fit tw-my-8 tw-w-11/12 lg:tw-w-2/4 tw-mx-auto">
			<Logo />

			{location.pathname === "/sell" ? (
				<h1 className="tw-text-xl tw-my-6">Sign up to start selling</h1>
			) : (
				<></>
			)}

			<p>
				Already have an account{" "}
				<Link
					to={"/user/login"}
					className="tw-underline tw-underline-offset-4 tw-cursor-pointer hover:tw-underline-offset-8 main-transition tw-font-bold">
					login
				</Link>
			</p>

			<p className="tw-py-2">or</p>

			<OAuthOptions headerTextContent="sign up with" />

			<p className="tw-py-2">or</p>

			<form className="tw-w-full">
				{location.pathname === "/sell" ? <FullName /> : <></>}

				<InputContainer
					label="email"
					id="email"
					placeholder="email"
					type="email"
				/>

				<InputContainer
					label="password"
					type="password"
					placeholder="password"
					id="password"
				/>

				<div className="tw-flex tw-items-center tw-justify-start tw-my-8 tw-border-t-2 tw-border-slate-200 tw-pt-4">
					<ButtonContainer
						styling={"secondary"}
						textContent="cancel"
						type="button"
						onClick={() => navigate("/")}
					/>
					<ButtonContainer styling={"primary"} textContent="sign up" />
				</div>
			</form>
		</form>
	);
}

export default SignUp;
