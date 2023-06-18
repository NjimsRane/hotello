import { useContext } from "react";
import { RoomContext } from "../context/RoomContext";
import { Menu } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";

const lis = [
	{ name: "1 Adult" },
	{ name: "2 Adults" },
	{ name: "3 Adults" },
	{ name: "4 Adults" },
];

const AdultDropDown = () => {
	const { adults, setAdults } = useContext(RoomContext);
	return (
		<Menu
			as="div"
			className="w-full h-full bg-white relative"
		>
			<Menu.Button className="w-full h-full flex items-center justify-between px-8">
				<span className="capitalize text-lg font-medium">{adults}</span>
				<BsChevronDown className="text-base" />
			</Menu.Button>
			<Menu.Items
				as="ul"
				className="bg-white absolute w-full flex flex-col z-40"
			>
				{lis.map((li, index) => (
					<Menu.Item
						onClick={() => setAdults(li.name)}
						as="li"
						key={index}
						className="text-lg capitalize border-b last-of-type:border-b-0 h-12 hover:bg-primary hover:text-white w-full flex justify-center items-center cursor-pointer"
					>
						{li.name}
					</Menu.Item>
				))}
			</Menu.Items>
		</Menu>
	);
};

export default AdultDropDown;
