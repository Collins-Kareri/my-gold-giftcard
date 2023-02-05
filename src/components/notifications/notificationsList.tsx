import Notification from "~/components/notifications/notification";
import { useAppSelector } from "~/hooks/redux";

function NotificationList() {
	const notifications = useAppSelector((state) => state.notification.value);

	return (
		<div
			className={`tw-absolute tw-w-full tw-h-fit tw-z-30 tw-px-6 tw-py-8 tw-flex tw-justify-end ${
				notifications.length <= 0 ? "tw-hidden" : ""
			}`}>
			{notifications.map((notification) => {
				return (
					<Notification
						key={notification.identifier}
						type={notification.type}
						title={notification.title}
						message={notification.message}
						identifier={notification.identifier}
					/>
				);
			})}
		</div>
	);
}

export default NotificationList;
