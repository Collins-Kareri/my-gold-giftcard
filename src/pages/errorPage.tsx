import { useRouteError } from "react-router-dom";

interface ErrorProps {
	status: number;
	statusText: string;
}

function ErrorInfo({ error }: { error: ErrorProps }) {
	return (
		<p className="tw-text-slate-600">
			<i>{`${error.status} ${error.statusText}`}</i>
		</p>
	);
}

function ErrorPage() {
	const error = useRouteError() as { status: number; statusText: string };

	return (
		<div className="tw-w-full tw-h-screen tw-flex tw-justify-center tw-items-center tw-flex-col tw-text-slate-900">
			<h1 className="tw-text-2xl tw-mb-4 tw-font-bold">Oops!</h1>
			<p className="tw-mb-2">Sorry, an unexpected error has occurred.</p>
			{error.statusText ? <ErrorInfo error={error} /> : <></>}
		</div>
	);
}

export default ErrorPage;
