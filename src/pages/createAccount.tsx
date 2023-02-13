import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "~/components/logo";
import OAuthOptions from "~/components/oAuthButtons";
import InputContainer from "~/components/form/input";
import ButtonContainer from "~/components/button";
import FormLink from "~/components/form/formLink";
import ShowPasswordToggle from "~/components/form/ShowPasswordToggle";
import Heading from "~/components/heading";
import FormContainer from "~/components/form/formContainer";

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

function CreateAccountForm() {
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);

	return (
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
				<ButtonContainer styling={"primary"} textContent="create account" />
			</div>
		</form>
	);
}

function CreateAccount() {
	const location = useLocation();

	return (
		<FormContainer>
			<Logo />

			<Heading
				heading={
					location.pathname === "/sell"
						? "Create account to start selling"
						: "Create account"
				}
			/>

			<FormLink
				msg={"Already have an account"}
				to={"login"}
				path={"/user/login"}
				className="tw-mb-4"
			/>

			<CreateAccountForm />

			<p className="text-divider">
				<span>or</span>
			</p>

			<OAuthOptions headerTextContent="create account with" />
		</FormContainer>
	);
}

export default CreateAccount;
