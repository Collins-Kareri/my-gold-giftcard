import { Link } from "react-router-dom";

interface FormLinkProps extends React.ComponentPropsWithoutRef<"p"> {
	msg: string;
	to: string;
	path: string;
}

function FormLink({ msg, to, path, className }: FormLinkProps) {
	return (
		<p className={className}>
			{`${msg} `}
			<Link
				to={path}
				className="tw-underline tw-underline-offset-4 tw-cursor-pointer hover:tw-underline-offset-8 main-transition tw-font-bold">
				{to}
			</Link>
		</p>
	);
}

export default FormLink;
