import { FaPhone } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

import { logo } from "../assets";
import { Menu } from "../components";

const HamburgerMenu = () => {
	const [isOpen, setisOpen] = useState(false);
	const hamburger =
		"block bg-secondary w-12 h-1.5 rounded-lg transition-transform duration-300";
	const handleClick = () => {
		setisOpen(!isOpen);
	};

	return (
		<div className="relative">
			<div className="bg-primary p-12 flex justify-between items-center lg:bg-transparent lg:hidden">
				<Link to="/">
					<img
						src={logo}
						alt="logo"
						className="w-64"
					/>
				</Link>

				<button
					className="space-y-2 cursor-pointer"
					onClick={handleClick}
				>
					<span
						className={`${hamburger} ${
							isOpen ? "translate-y-3 rotate-45" : "translate-y-0"
						}`}
					></span>
					<span
						className={`${hamburger} ${
							isOpen ? "w-[0px]" : "w-[3rem]"
						}`}
					></span>
					<span
						className={`${hamburger} ${
							isOpen
								? "-translate-y-4 -rotate-45"
								: "translate-y-0"
						}`}
					></span>
				</button>
			</div>
			{isOpen ? (
				<nav className="flex flex-col gap-4 bg-primary w-[50%] h-screen top-0 transition-transform duration-500 translate-x-0 p-12 absolute z-10 lg:hidden">
					<p className="flex items-center gap-4 text-white text-xl">
						<FaPhone />
						<a href="tel:+31(0)20507000">+31 (0) 20 507 0000</a>
					</p>
					<div className="flex flex-col gap-16 mt-20">
						<Link to="/">
							<img
								src={logo}
								alt="logo"
								className="w-64"
							/>
						</Link>
						<Menu />
					</div>
				</nav>
			) : (
				<nav className="flex flex-col gap-4 bg-primary w-[50%] h-screen top-0 transition-transform duration-500 -translate-x-[100%] p-12 absolute z-10 lg:hidden">
					<p className="flex items-center gap-4 text-white text-xl">
						<FaPhone />
						<a href="tel:+31(0)20507000">+31 (0) 20 507 0000</a>
					</p>
					<div className="flex flex-col gap-16 mt-20">
						<Link to="/">
							<img
								src={logo}
								alt="logo"
								className="w-64"
							/>
						</Link>
						<Menu />
					</div>
				</nav>
			)}
			<nav className="hidden lg:static lg:p-12 lg:flex lg:flex-col lg:gap-14 lg:bg-transparent lg:w-full lg:h-auto">
				<div className="flex items-center justify-between">
					<p className="flex items-center gap-4 text-white text-xl">
						<FaPhone />
						<a href="tel:+31(0)20507000">+31 (0) 20 507 0000</a>
					</p>
					<Link to="/">
						<img
							src={logo}
							alt="logo"
							className="w-64"
						/>
					</Link>
				</div>
				<Menu />
			</nav>
		</div>
	);
};

export default HamburgerMenu;
