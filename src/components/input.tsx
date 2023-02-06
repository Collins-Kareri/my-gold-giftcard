import React from "react";

interface InputContainerProps extends React.ComponentPropsWithoutRef<"input"> {
	label: string;
	links?: string;
	linkAction?: () => void;
}

function InputContainer(props: InputContainerProps) {
	const { className, label, links, linkAction, id, ...rest } = props;

	return (
		<div className="tw-flex tw-flex-col tw-w-full tw-relative tw-h-fit tw-mb-6">
			<section className="tw-flex tw-relative tw-w-full tw-items-center tw-justify-between tw-mb-2">
				<label htmlFor="password" className="tw-capitalize">
					{label}
				</label>
				<p
					className="tw-font-bold tw-cursor-pointer tw-underline tw-capitalize"
					onClick={linkAction}>
					{links}
				</p>
			</section>
			<input
				id={id}
				className={`tw-py-3 main-transition focus:tw-shadow focus:tw-shadow-slate-500 focus:tw-ring-0 focus:tw-outline-none focus:tw-border focus:tw-border-slate-900 ${className}`}
				{...rest}
			/>
		</div>
	);
}

export default InputContainer;
