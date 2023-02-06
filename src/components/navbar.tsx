import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "~/components/logo";
import SearchBar from "~/components/searchBar";
import ShoppingCart from "~/components/shoppingCart";
import User from "./user";

interface NavBarProps extends React.PropsWithChildren {}

function MyCta() {
	return (
		<section className="tw-text-slate-800 tw-flex tw-items-center tw-h-[40px]">
			<ShoppingCart />
			<User />
		</section>
	);
}

function MainNavBar() {
	return (
		<div className="tw-flex tw-justify-between tw-items-center tw-w-full tw-border-b tw-border-slate-700 main-container tw-py-4 tw-bg-white tw-h-[80px]">
			<Logo />
			<SearchBar />
			<MyCta />
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
