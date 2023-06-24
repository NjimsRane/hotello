import { useParams } from "react-router-dom";
import { Header } from "../layouts";
import { dataServices } from "../data/dataServices";
import { pat, s3, s4 } from "../assets";
// import { ServiceDetailsProps } from "../types";
import { Choices } from "../components/ServiceDetail";

import { s1, s2 } from "../assets";
import { SDetail } from "../components";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdRestaurant, IoIosFitness } from "react-icons/io";
import {
	MdRoomService,
	MdSportsGymnastics,
	MdLocalLaundryService,
} from "react-icons/md";

import { BiSpa } from "react-icons/bi";

import { FaWifi, FaSwimmingPool, FaCocktail, FaCheck } from "react-icons/fa";

const serviceDetails = [
	{
		desc: "All the guests can celebrate a special occasion or just aft Lorem ipsum,",
		check: <FaCheck />,
	},
	{
		desc: "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Commodi, fugit.",
		check: <FaCheck />,
	},
	{
		desc: "All the guests can celebrate a special occasion or just aft Lorem ipsum,",
		check: <FaCheck />,
	},
	{
		desc: "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Commodi, fugit.",
		check: <FaCheck />,
	},
];

const ServicesDetails = () => {
	const { id } = useParams();
	const services = dataServices
		.map((service) => service)
		.find((service) => {
			return service.id === Number(id);
		});

	const { urlImg, title, subtitle, desc } = services;

	return (
		<section>
			<Header title={title} />
			<div className="my-14 p-12 md:px-16 flex flex-col gap-20 lg:flex-row">
				<div className="relative w-full lg:h-[60vh] group flex-1">
					<img
						src={pat}
						alt="background"
						className="block lg:absolute bottom-8 left-8 h-full w-full duration-500 transition-all group-hover:bottom-2 group-hover:left-2"
					/>
					<img
						src={urlImg}
						alt={desc}
						className="absolute w-full h-full object-cover right-4 top-8 duration-500 transition-all group-hover:top-2 group-hover:right-2"
					/>
				</div>
				<div className="space-y-4 flex-1">
					<div className="space-y-6 lg:w-[80ch]">
						<h3 className="text-primary text-center">{subtitle}</h3>
						<p className="text-xl tracking-wide leading-normal text-gray-500">
							{desc}
						</p>
					</div>

					<div className="space-y-4">
						<h4 className="uppercase text-primary text-xl tracking-wider mt-10">
							service details
						</h4>
						{serviceDetails.map((detail, index) => (
							<p
								key={index}
								className=" flex items-center gap-4"
							>
								<span className="h-6 w-6 border border-secondary rounded-full grid place-items-center text-secondary">
									{detail.check}
								</span>
								<span className="text-xl text-gray-500">
									{detail.desc}
								</span>
							</p>
						))}
					</div>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-8">
				<SDetail
					urlImg={s1}
					desc="24h room service"
					icon={<MdRoomService />}
				/>
				<SDetail
					urlImg={s2}
					desc="restaurant and bars"
					icon={<IoMdRestaurant />}
				/>
				<SDetail
					urlImg={s3}
					desc="events and meetings"
					icon={<FaRegCalendarAlt />}
				/>
				<SDetail
					urlImg={s4}
					desc="fitness and spa"
					icon={<MdSportsGymnastics />}
				/>
			</div>
			<div className="my-10 p-12 md:px-32 mx-auto">
				<h2 className="text-primary text-center">why choose us?</h2>
				<p className="text-gray-600 text-lg text-center md:w-[50ch] mx-auto my-6">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Nobis reiciendis fuga earum quod fugiat temporibus esse,
					perferendis a deleniti? Non?
				</p>
				<div className="my-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 place-items-center">
					<Choices
						choice={<FaWifi />}
						title="internet"
					/>
					<Choices
						choice={<FaCocktail />}
						title="drinks"
					/>
					<Choices
						choice={<MdRoomService />}
						title="concierge"
					/>
					<Choices
						choice={<FaSwimmingPool />}
						title="pool"
					/>
					<Choices
						choice={<IoIosFitness />}
						title="fitness"
					/>
					<Choices
						choice={<MdLocalLaundryService />}
						title="laundry"
					/>
					<Choices
						choice={<IoMdRestaurant />}
						title="restaurant"
					/>
					<Choices
						choice={<BiSpa />}
						title="spa"
					/>
				</div>
			</div>
		</section>
	);
};

export default ServicesDetails;
