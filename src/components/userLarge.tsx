import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function UserModal() {
	return (
		<div className="tw-absolute tw-bg-white tw-shadow-md tw-shadow-slate-700 tw-border tw-border-slate-400 tw-w-2/4 tw-right-12 tw-py-6 tw-px-8 tw-top-16 tw-flex tw-justify-end">
			<Link to={"user/login"}>
				<button className="tw-capitalize tw-w-fit tw-border tw-border-slate-800 tw-py-2 tw-px-4">
					login
				</button>
			</Link>
		</div>
	);
}

function UserLarge() {
	const [openUserModal, setOpenUserModal] = useState(false);

	function openModal() {
		setOpenUserModal(!openUserModal);
	}

	return (
		<>
			<FontAwesomeIcon
				icon={"user-large"}
				size={"xl"}
				className="tw-cursor-pointer"
				onClick={openModal}
			/>
			{openUserModal?<UserModal/>:<></>}
		</>
	);
}

export default UserLarge;
