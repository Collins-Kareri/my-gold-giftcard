import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "~/components/logo";
import OAuthOptions from "~/components/oAuthButtons";
import InputContainer from "~/components/input";
import ButtonContainer from "~/components/button";
import FormLink from "~/components/formLink";
import ShowPasswordToggle from "~/components/ShowPasswordToggle";

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
		<div className="tw-flex tw-justify-center tw-items-center tw-flex-col tw-h-fit tw-my-8 tw-w-11/12 lg:tw-w-2/4 tw-mx-auto">
			<Logo />

			{location.pathname === "/sell" ? (
				<h1 className="tw-text-xl tw-my-6">Create account to start selling</h1>
			) : (
				<h1 className="tw-text-xl tw-my-6">Create account</h1>
			)}

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
		</div>
	);
}

export default CreateAccount;
