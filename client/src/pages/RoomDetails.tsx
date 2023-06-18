import { useContext } from "react";
import { useParams } from "react-router-dom";
import {
	FaWifi,
	FaCoffee,
	FaBath,
	FaParking,
	FaSwimmingPool,
	FaStopwatch,
	FaHotdog,
	FaCocktail,
	FaCheck,
} from "react-icons/fa";

import { Header } from "../layouts";

import { AdultDropDown, KidsDropDown, CheckIn, CheckOut } from "../components";

import { RoomContext } from "../context/RoomContext";

const facilities = [
	{
		name: "wifi",
		icon: <FaWifi />,
	},
	{
		name: "coffee",
		icon: <FaCoffee />,
	},
	{
		name: "bath",
		icon: <FaBath />,
	},
	{
		name: "parking",
		icon: <FaParking />,
	},
	{
		name: "swimming pool",
		icon: <FaSwimmingPool />,
	},
	{
		name: "breakfast",
		icon: <FaHotdog />,
	},
	{
		name: "GYM",
		icon: <FaStopwatch />,
	},
	{
		name: "drinks",
		icon: <FaCocktail />,
	},
];

const RoomDetails = () => {
	const { rooms } = useContext(RoomContext);
	const { id } = useParams();
	const { handleClick } = useContext(RoomContext);

	const room = rooms.find((room) => {
		return room.id === Number(id);
	});
	const { name, desc, price, RoomImg } = room;

	return (
		<section>
			<Header title={name} />
			<div className="p-12 md:px-16 ">
				<div className="flex flex-col lg:flex-row h-full py24">
					<div className="w-full h-full lg:w-[60%] px-6">
						<h2>{name}</h2>
						<p className="mb-8 mt-6 md:w-[80ch] text-xl">{desc}</p>
						<img
							src={RoomImg}
							alt={name}
							className="w-full object-cover"
						/>
						<div className="mt-12">
							<h3 className="text-[#000] capitalize my-4">
								Room Facilities
							</h3>
							<p className="mb-12 md:w-[80ch] text-xl">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Ex non ipsa cum fugiat
								dignissimos rerum architecto cumque nulla, minus
								tempora, itaque voluptatibus quisquam, deleniti
								id veniam nisi temporibus recusandae. Maiores
								voluptas dolores distinctio autem quisquam minus
								sunt minima optio molestias.
							</p>
							<div className="grid grid-cols-3 gap-6">
								{facilities.map((item, index) => {
									const { name, icon } = item;
									return (
										<div
											className="flex items-center gap-x-3 flex-1"
											key={index}
										>
											<div className="text-3xl text-amber-800">
												{icon}
											</div>
											<p className="capitalize text-base">
												{name}
											</p>
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<div className="w-full h-full lg:w-[40%] mt-6">
						<div className="py-8 px-6 bg-primary flex flex-col space-y-4 mb-4">
							<h3 className="capitalize my-4">
								your reservation
							</h3>
							<div className="h-[4rem]">
								<CheckIn />
							</div>
							<div className="h-[4rem]">
								<CheckOut />
							</div>
							<div className="h-[4rem]">
								<AdultDropDown />
							</div>
							<div className="h-[4rem]">
								<KidsDropDown />
							</div>
							<button
								type="submit"
								onClick={(e) => handleClick(e)}
								className=" flex-1 uppercase text-white tracking-wider font-semibold bg-amber-800 py-4"
							>
								book now for ${price}
							</button>
						</div>
						<div>
							<h3 className="text-[#000] capitalize my-4">
								hotel rules
							</h3>
							<p className="mb-6">
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Tenetur minima odio sint
								cumque corporis voluptatum ullam nisi sequi,
								ratione, eveniet asperiores adipisci? Inventore
								accusantium expedita magni eaque tenetur rerum
								dolores.
							</p>
							<ul className="space-y-6">
								<li className="flex items-center gap-x-4">
									<FaCheck className="text-amber-800" />
									<span>Check-in: 3:00 PM - 9:00 PM</span>
								</li>
								<li className="flex items-center gap-x-4">
									<FaCheck className="text-amber-800" />
									<span>Check-out: 10:30 AM</span>
								</li>
								<li className="flex items-center gap-x-4">
									<FaCheck className="text-amber-800" />
									<span>No Pets</span>
								</li>
								<li className="flex items-center gap-x-4">
									<FaCheck className="text-amber-800" />
									<span>No Smoking</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default RoomDetails;
