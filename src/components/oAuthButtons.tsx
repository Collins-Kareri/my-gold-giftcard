import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";

function OAuthOptions({ headerTextContent }: { headerTextContent: string }) {
	const location = useLocation();

	return (
		<div className="tw-flex tw-flex-col tw-justify-center tw-items-start tw-mb-3 tw-w-full">
			<div
				className="tw-border tw-border-slate-900 tw-w-fit tw-px-5 tw-py-3 tw-cursor-pointer tw-bg-slate-900 tw-text-slate-50 hover:tw-shadow-sm"
				title="google">
				<span className="tw-inline-block tw-mr-3">{headerTextContent}</span>
				<FontAwesomeIcon icon={["fab", "google"]} />
			</div>
		</div>
	);
}

export default OAuthOptions;
