import { NavLink } from "react-router-dom";

const Menu = () => {
	return (
		<ul className="flex flex-col gap-12 lg:flex-row lg:justify-center lg:items-center font-questrial">
			<li className="relative uppercase text-2xl tracking-wider ">
				<NavLink
					to="/"
					className={({ isActive }) =>
						isActive
							? "after:absolute after:content-[''] after:w-9 after:h-1 after:bg-white after:top-[100%] after:left-4 text-white"
							: "text-white hover:text-white/50 duration-500 transition-all"
					}
				>
					home
				</NavLink>
			</li>
			<li className="relative uppercase text-2xl tracking-wider">
				<NavLink
					to="/rooms"
					className={({ isActive }) =>
						isActive
							? "after:absolute after:content-[''] after:w-9 after:h-1 after:bg-white after:top-[100%] after:left-4 text-white"
							: "text-white hover:text-white/50 duration-500 transition-all"
					}
				>
					rooms
				</NavLink>
			</li>
			<li className="relative uppercase text-2xl tracking-wider">
				<NavLink
					to="/services"
					className={({ isActive }) =>
						isActive
							? "after:absolute after:content-[''] after:w-9 after:h-1 after:bg-white after:top-[100%] after:left-4 text-white"
							: "text-white hover:text-white/50 duration-500 transition-all"
					}
				>
					services
				</NavLink>
			</li>
			<li className="relative uppercase text-2xl tracking-wider">
				<NavLink
					to="/news"
					className={({ isActive }) =>
						isActive
							? "after:absolute after:content-[''] after:w-9 after:h-1 after:bg-white after:top-[100%] after:left-4 text-white"
							: "text-white hover:text-white/50 duration-500 transition-all"
					}
				>
					news
				</NavLink>
			</li>
			<li className="relative uppercase text-2xl tracking-wider">
				<NavLink
					to="/gallery"
					className={({ isActive }) =>
						isActive
							? "after:absolute after:content-[''] after:w-9 after:h-1 after:bg-white after:top-[100%] after:left-4 text-white"
							: "text-white hover:text-white/50 duration-500 transition-all"
					}
				>
					gallery
				</NavLink>
			</li>
			<li className="relative uppercase text-2xl tracking-wider">
				<NavLink
					to="/about"
					className={({ isActive }) =>
						isActive
							? "after:absolute after:content-[''] after:w-9 after:h-1 after:bg-white after:top-[100%] after:left-4 text-white"
							: "text-white hover:text-white/50 duration-500 transition-all"
					}
				>
					about
				</NavLink>
			</li>
			<li className="relative uppercase text-2xl tracking-wider">
				<NavLink
					to="/contact"
					className={({ isActive }) =>
						isActive
							? "after:absolute after:content-[''] after:w-9 after:h-1 after:bg-white after:top-[100%] after:left-4 text-white"
							: "text-white hover:text-white/50 duration-500 transition-all"
					}
				>
					contact
				</NavLink>
			</li>
		</ul>
	);
};

export default Menu;
