import { useEffect } from "react";
import Notification from "~/components/notifications/notification";
import { useAppSelector, useAppDispatch } from "~/hooks/redux";
import { remove } from "~/redux/slice/notificationsSlice";

function NotificationList() {
	const notifications = useAppSelector((state) => state.notification.value);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (notifications.length > 0) {
			const { identifier } = notifications[0];
			setTimeout(() => dispatch(remove({ id: identifier })), 2000);
		}
		return;
	}, [notifications]);

	return (
		<div
			className={`tw-fixed tw-w-full tw-h-fit tw-z-30 tw-px-6 tw-py-8 tw-flex tw-justify-end tw-flex-col tw-items-end ${
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
