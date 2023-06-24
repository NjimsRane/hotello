import { useParams } from "react-router-dom";
import { Header } from "../layouts";
import { dataServices } from "../data/dataServices";
import { pat } from "../assets";
// import { ServiceDetailsProps } from "../types";
import { FaCheck } from "react-icons/fa";

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
						<p className=" flex items-center gap-4">
							<span className="h-6 w-6 border border-secondary rounded-full grid place-items-center">
								<FaCheck className="text-secondary" />
							</span>
							<span className="text-xl text-gray-500">
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Commodi, fugit.
							</span>
						</p>
						<p className=" flex items-center gap-4">
							<span className="h-6 w-6 border border-secondary rounded-full grid place-items-center">
								<FaCheck className="text-secondary" />
							</span>
							<span className="text-xl text-gray-500">
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Commodi, fugit.
							</span>
						</p>
						<p className=" flex items-center gap-4">
							<span className="h-6 w-6 border border-secondary rounded-full grid place-items-center">
								<FaCheck className="text-secondary" />
							</span>
							<span className="text-xl text-gray-500">
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Commodi, fugit.
							</span>
						</p>
						<p className=" flex items-center gap-4">
							<span className="h-6 w-6 border border-secondary rounded-full grid place-items-center">
								<FaCheck className="text-secondary" />
							</span>
							<span className="text-xl text-gray-500">
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Commodi, fugit.
							</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesDetails;
