import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "~/components/logo";
import InputContainer from "~/components/input";
import ButtonContainer from "~/components/button";
import OAuthOptions from "~/components/oAuthButtons";
import FormLink from "~/components/formLink";
import ShowPasswordToggle from "~/components/ShowPasswordToggle";
import Heading from "~/components/heading";
import FormContainer from "~/components/formContainer";

function LoginForm() {
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);

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
				type={showPassword ? "text" : "password"}
				placeholder="password"
				id="password"
			/>

			<ShowPasswordToggle
				showPassword={showPassword}
				setShowPassword={setShowPassword}
			/>

			<div className="tw-flex tw-items-center tw-justify-start tw-mt-8">
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
		<FormContainer>
			<Logo />

			<Heading heading="welcome back" />

			<FormLink
				msg={"Don't have an account"}
				to={"create account"}
				path={"/user/createAccount"}
				className="tw-mb-4"
			/>

			<LoginForm />

			<p className="text-divider">
				<span>or</span>
			</p>

			<OAuthOptions headerTextContent="login with" />
		</FormContainer>
	);
}

export default Login;
