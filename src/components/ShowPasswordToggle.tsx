interface ShowPasswordToggleProps {
	showPassword: boolean;
	setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

function ShowPasswordToggle({
	showPassword,
	setShowPassword,
}: ShowPasswordToggleProps) {
	return (
		<div>
			<input
				type={"checkbox"}
				className="tw-mr-2 tw-rounded-sm tw-py-2 tw-px-2"
				onClick={() => setShowPassword(!showPassword)}
			/>
			<label htmlFor="showPassword">show password</label>
		</div>
	);
}

export default ShowPasswordToggle;
