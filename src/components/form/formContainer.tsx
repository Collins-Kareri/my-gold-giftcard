import React from "react";

interface FormContainerProps extends React.ComponentPropsWithoutRef<"div"> {}

function FormContainer({ children }: FormContainerProps) {
	return (
		<div className="tw-flex tw-justify-center tw-items-center tw-flex-col tw-h-fit tw-w-11/12 lg:tw-w-2/4 tw-mx-auto tw-my-8">
			{children}
		</div>
	);
}

export default FormContainer;
