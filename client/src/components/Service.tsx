import { Link } from "react-router-dom";
import { formatCurrency } from "../utilities/formatCurrency";
type ServiceProps = {
	serviceImg?: string;
	serviceName: string;
	servicePrice?: number;
	serviceDesc: string;
};

const Service = ({
	serviceImg,
	serviceName,
	servicePrice,
	serviceDesc,
}: ServiceProps) => {
	return (
		<div className="relative h-fit group">
			<div className="overflow-hidden">
				<img
					src={serviceImg}
					alt={serviceName}
					className="w-full object-cover h-[20rem] duration-500 transition-all group-hover:scale-110 group-hover:rotate-3"
				/>
			</div>
			<div className="absolute top[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] bg-secondary w-[50%] py-3 rounded-3xl text-center shadow">
				<p className="text-3xl text-white font-semibold capitalize">
					{servicePrice ? (
						<span>{formatCurrency(servicePrice)}</span>
					) : (
						<span>free</span>
					)}
				</p>
			</div>
			<div className="bg-white shadow-md  transition-all duration-500  p-8 rounded group-hover:shadow-xl space-y-4">
				<div className="space-y-4 mt-4 text-center">
					<h2 className="duration-500 transition-all">
						<Link
							to="/"
							className="hover:text-secondary"
						>
							{serviceName}
						</Link>
					</h2>
					<p className="text-lg text-[gray]">
						{serviceDesc.slice(0, 150)}...
					</p>
				</div>
			</div>
		</div>
	);
};

export default Service;
