import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function OAuthOptions({ headerTextContent }: { headerTextContent: string }) {
	return (
		<div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
			<p className="tw-font-bold tw-mb-2">{headerTextContent}</p>
			<div
				className="tw-border tw-border-slate-900 tw-w-fit tw-px-5 tw-py-3 tw-cursor-pointer tw-bg-slate-900 tw-text-slate-50 hover:tw-shadow-sm"
				title="google">
				<FontAwesomeIcon icon={["fab", "google"]} />
			</div>
		</div>
	);
}

export default OAuthOptions;
