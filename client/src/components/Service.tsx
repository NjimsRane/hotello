import { Link } from "react-router-dom";
import { ServiceProps } from "../types";
import { Desc, Images, Price } from "./Hotello";

const Service = ({
	id,
	serviceImg,
	serviceName,
	servicePrice,
	serviceDesc,
}: ServiceProps) => {
	return (
		<div className="relative h-fit group transition-hover duration-500 shadow-md hover:shadow-2xl">
			<Images
				url={serviceImg}
				desc={serviceName}
			/>
			<Link
				to={`/services/${id}`}
				className="absolute top[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] bg-[#000] w-[50%] py-3 text-center rounded transition-hover duration-500 hover:bg-[#ffac41]"
			>
				<Price price={servicePrice} />
			</Link>
			<div className="p-8 pt-8 space-y-4">
				<div className="space-y-4 mt-4 text-center">
					<h2 className="duration-500 transition-all">
						<Link
							to={`/services/${id}`}
							className="hover:text-secondary"
						>
							{serviceName}
						</Link>
					</h2>
					<Desc desc={serviceDesc} />
				</div>
			</div>
		</div>
	);
};

export default Service;
