import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchBar() {
	const navigate = useNavigate();

	function handleKeyDown(evt: React.KeyboardEvent<HTMLInputElement>) {
		const currentKey = evt.key;
		const el = evt.target as HTMLInputElement;

		if (currentKey.toLowerCase() === "enter") {
			navigate(`/search?term=${el.value}`);
			return;
		}
	}

	return (
		<div className="tw-relative tw-border tw-border-slate-900 tw-px-4 tw-w-full tw-flex tw-items-center md:tw-w-96">
			<FontAwesomeIcon icon={"magnifying-glass"} size={"xl"} />
			<input
				type={"text"}
				placeholder="Find gift cards"
				className="tw-relative tw-outline-none tw-ring-0 tw-border-0 hover:tw-ring-0 tw-py-3 focus:tw-ring-0 tw-w-11/12"
				onKeyDown={handleKeyDown}
			/>
		</div>
	);
}

export default SearchBar;
