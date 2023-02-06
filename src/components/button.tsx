import React from "react";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
	styling: "secondary" | "primary";
	textContent: string;
}

function ButtonContainer(props: ButtonProps) {
	const { styling, textContent, className, ...rest } = props;

	return (
		<button className={`${styling} ${className}`} {...rest}>
			{textContent}
		</button>
	);
}

export default ButtonContainer;
