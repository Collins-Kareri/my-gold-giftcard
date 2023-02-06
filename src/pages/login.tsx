import { Link, useNavigate } from "react-router-dom";
import Logo from "~/components/logo";
import InputContainer from "~/components/input";
import ButtonContainer from "~/components/button";
import OAuthOptions from "~/components/oAuthButtons";

function LoginForm() {
	const navigate = useNavigate();

	return (
		<form className="tw-w-full">
			<InputContainer
				label="email"
				id="email"
				placeholder="email"
				type="email"
			/>

			<InputContainer
				label="password"
				links="forgot password?"
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
				<ButtonContainer styling={"primary"} textContent="login" />
			</div>
		</form>
	);
}

function Login() {
	return (
		<div className="tw-flex tw-justify-center tw-items-center tw-flex-col tw-h-fit tw-w-11/12 lg:tw-w-2/4 tw-mx-auto tw-my-8">
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

			<OAuthOptions headerTextContent="login with" />

			<p className="tw-py-2">or</p>

			<LoginForm />
		</div>
	);
}

export default Login;
