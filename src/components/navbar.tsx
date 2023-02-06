import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "~/components/logo";
import SearchBar from "~/components/searchBar";
import ShoppingCart from "~/components/shoppingCart";
import User from "./user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NavBarProps extends React.PropsWithChildren {}

function MyCta({
	setAlternativeSearchBarToggleStatus,
	alternativeSearchBarToggleStatus,
}: {
	setAlternativeSearchBarToggleStatus: React.Dispatch<
		React.SetStateAction<boolean>
	>;
	alternativeSearchBarToggleStatus: boolean;
}) {
	function toggleSearchBar() {
		setAlternativeSearchBarToggleStatus(!alternativeSearchBarToggleStatus);
	}
	return (
		<section className="tw-text-slate-900 tw-flex tw-items-center tw-h-fit">
			<FontAwesomeIcon
				icon={"magnifying-glass"}
				size={"xl"}
				className="md:tw-hidden tw-inline-block tw-mr-4 tw-cursor-pointer"
				onClick={toggleSearchBar}
			/>
			<ShoppingCart />
			<User />
		</section>
	);
}

function AlternativeSearchBar(props: React.ComponentPropsWithoutRef<"div">) {
	return (
		<div className="tw-w-full tw-py-4 tw-absolute tw-h-fit tw-flex tw-justify-center tw-top-[80px] tw-left-0 tw-z-40 tw-bg-white main-transition tw-border-b tw-border-slate-400">
			<span className="tw-block tw-w-11/12">
				<SearchBar />
			</span>
		</div>
	);
}

function MainNavBar() {
	const [
		alternativeSearchBarToggleStatus,
		setAlternativeSearchBarToggleStatus,
	] = useState(false);

	return (
		<div className="tw-flex tw-justify-between tw-items-center tw-w-full tw-border-b tw-border-slate-700 main-container tw-py-4 tw-bg-white tw-h-[80px]">
			{alternativeSearchBarToggleStatus ? <AlternativeSearchBar /> : <></>}
			<Logo />
			<div className="tw-w-fit tw-h-fit tw-hidden md:tw-block">
				<SearchBar />
			</div>
			<MyCta
				setAlternativeSearchBarToggleStatus={
					setAlternativeSearchBarToggleStatus
				}
				alternativeSearchBarToggleStatus={alternativeSearchBarToggleStatus}
			/>
		</div>
	);
}

function SecondaryNavBar() {
	return (
		<div className="tw-flex tw-justify-between tw-items-center tw-w-full tw-border-b tw-border-slate-400 main-container tw-py-4 tw-text-slate-700 tw-h-full tw-bg-white main-transition tw-sticky">
			<Link
				to={"sell"}
				className="tw-inline-block tw-uppercase tw-font-bold tw-text-lg tw-cursor-pointer hover:tw-underline hover:tw-underline-offset-8 hover:tw-underline-offset-slate-900 hover:tw-text-slate-900 main-transition">
				sell cards
			</Link>
		</div>
	);
}

function NavBar({ children }: NavBarProps) {
	const location = useLocation();

	function handleWhetherToShow() {
		const path = location.pathname.toLowerCase();

		switch (path) {
			case "/user/login":
				return true;
			case "/user/signup":
				return true;
			case "/sell":
				return true;
			case "/checkout":
				return true;
			default:
				return false;
		}
	}

	return (
		<>
			<nav
				className={`tw-sticky tw-top-[0px] tw-z-20 tw-h-fit ${
					handleWhetherToShow() ? "tw-invisible" : ""
				} ${handleWhetherToShow() ? "tw-hidden" : ""}`}>
				<MainNavBar />
				<SecondaryNavBar />
			</nav>
			<main>{children}</main>
		</>
	);
}

export default NavBar;
