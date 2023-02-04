import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SortOptionProps {
	handleOptionChange: (
		evt: React.MouseEvent<HTMLParagraphElement, MouseEvent>
	) => void;
}

function SortOptions({ handleOptionChange }: SortOptionProps) {
	return (
		<div className="tw-bg-white tw-border tw-border-slate-600 tw-capitalize tw-w-[300px] tw-absolute tw-top-8 tw-z-10">
			<p
				className="sortByMenuItem main-transition"
				onClick={handleOptionChange}>
				newest
			</p>
			<p
				className="sortByMenuItem main-transition"
				onClick={handleOptionChange}>
				price(high-low)
			</p>
			<p
				className="sortByMenuItem main-transition"
				onClick={handleOptionChange}>
				price(low-high)
			</p>
		</div>
	);
}

function SortBar() {
	const [currentOption, setCurrentOption] = useState<String>("newest");
	const [sortBarOpenStatus, setSortBarOpenStatus] = useState(false);

	function handleOptionChange(
		evt: React.MouseEvent<HTMLParagraphElement, MouseEvent>
	) {
		const el = evt.target as HTMLParagraphElement;
		const selectedOption = el.textContent as String;
		setCurrentOption(selectedOption);
	}

	function openSortBarOptions() {
		setSortBarOpenStatus(!sortBarOpenStatus);
	}

	return (
		<>
			<div className="tw-flex tw-justify-start tw-items-start tw-relative tw-w-fit">
				<section
					className="tw-flex tw-justify-start tw-items-start tw-relative tw-w-fit tw-cursor-pointer"
					onClick={openSortBarOptions}>
					<p className="tw-mr-2">
						<b>Sort by:</b> {currentOption}
					</p>
					<FontAwesomeIcon icon={"caret-down"} />
				</section>

				{sortBarOpenStatus ? (
					<SortOptions handleOptionChange={handleOptionChange} />
				) : (
					<></>
				)}
			</div>
		</>
	);
}

export default SortBar;
