import { NavLink } from "react-router-dom";
const MenuItem = [
	{
		name: "home",
		link: "/",
	},
	{
		name: "rooms",
		link: "/rooms",
	},
	{
		name: "services",
		link: "/services",
	},
	{
		name: "news",
		link: "/news",
	},
	{
		name: "gallery",
		link: "/gallery",
	},
	{
		name: "about",
		link: "/about",
	},
	{
		name: "contact",
		link: "/contact",
	},
];

const Menu = () => {
	return (
		<ul className="flex flex-col gap-12 lg:flex-row lg:justify-center lg:items-center font-questrial">
			{MenuItem.map((item, index) => (
				<li
					key={index}
					className="relative uppercase text-2xl tracking-wider"
				>
					<NavLink
						to={item.link}
						className={({ isActive }) =>
							isActive
								? "after:absolute after:content-[''] after:w-9 after:h-1 after:bg-white after:top-[100%] after:left-4 text-white"
								: "text-white hover:text-white/50 duration-500 transition-all"
						}
					>
						{item.name}
					</NavLink>
				</li>
			))}
		</ul>
	);
};

export default Menu;
