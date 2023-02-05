import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NotificationProps } from "~/redux/slice/notificationsSlice";
import { useAppDispatch } from "~/hooks/redux";
import { remove } from "~/redux/slice/notificationsSlice";

interface NoficationStateStylesProps {
	style: {
		container: string;
		icon: {
			bg_color: string;
			myIcon: IconProp;
		};
	};
}

interface NoficationStateProps {
	info: NoficationStateStylesProps;
	error: NoficationStateStylesProps;
	warning: NoficationStateStylesProps;
	success: NoficationStateStylesProps;
}

const notificationState: NoficationStateProps = {
	info: {
		style: {
			container: "tw-shadow-indigo-300 tw-border-indigo-700",
			icon: {
				bg_color: "tw-bg-indigo-700",
				myIcon: "info",
			},
		},
	},
	error: {
		style: {
			container: "tw-shadow-red-300 tw-border-red-700",
			icon: {
				bg_color: "tw-bg-red-700",
				myIcon: "explosion",
			},
		},
	},
	warning: {
		style: {
			container: "tw-shadow-amber-300 tw-border-amber-700",
			icon: {
				bg_color: "tw-bg-amber-700",
				myIcon: "exclamation",
			},
		},
	},
	success: {
		style: {
			container: "tw-shadow-emerald-300 tw-border-emerald-700",
			icon: {
				bg_color: "tw-bg-emerald-700",
				myIcon: "check-double",
			},
		},
	},
};

function Notification({ type, title, message, identifier }: NotificationProps) {
	const { container, icon } = notificationState[type].style;
	const dispatch = useAppDispatch();

	function removeNotification() {
		dispatch(remove({ id: identifier }));
	}

	return (
		<section
			className={`tw-w-[420px] tw-flex tw-justify-between tw-items-center tw-h-fit tw-bg-slate-50 tw-shadow-md tw-border-l-4 tw-px-6 tw-py-3 tw-text-slate-800 tw-my-4 ${container}`}>
			<span
				className={` tw-text-white tw-rounded-full tw-w-9 tw-h-9 tw-flex tw-justify-center tw-items-center ${icon.bg_color}`}>
				<FontAwesomeIcon icon={icon.myIcon} />
			</span>
			<div>
				<h1 className="tw-font-medium">{title}</h1>
				<p className="tw-text-slate-600">{message}</p>
			</div>

			<FontAwesomeIcon
				icon={"xmark"}
				size={"lg"}
				className="tw-cursor-pointer tw-text-slate-900"
				onClick={removeNotification}
			/>
		</section>
	);
}

export default Notification;
