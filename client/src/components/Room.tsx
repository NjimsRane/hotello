import { Link } from "react-router-dom";
import { IRoom } from "../types";
import { HotelloDesc, HotelloImages, HotelloPrice } from "./Hotello";
import { BiUser } from "react-icons/bi";
import { AiOutlineColumnWidth } from "react-icons/ai";

const Room = ({
	id,
	hotelloImg,
	hotelloName,
	hotelloPrice,
	hotelloDesc,
	maxPerson,
	size,
}: IRoom) => {
	return (
		<div className="relative h-fit group transition-hover duration-500 shadow-md hover:shadow-2xl">
			<HotelloImages
				url={hotelloImg}
				desc={hotelloName}
			/>
			<Link
				to={`/rooms/${id}`}
				className="absolute top[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] bg-[#000] w-[50%] py-3 text-center rounded transition-hover duration-500 hover:bg-[#ffac41]"
			>
				<HotelloPrice price={hotelloPrice} />
			</Link>
			<div className="px-8 pt-8 space-y-4">
				<div className="space-y-4 mt-4 text-center">
					<h2 className="duration-500 transition-all">
						<Link
							to={`/rooms/${id}`}
							className="hover:text-secondary"
						>
							{hotelloName}
						</Link>
					</h2>
					<HotelloDesc desc={hotelloDesc} />
				</div>
			</div>
			<div className="p-8">
				<hr />
				<div className="flex items-center justify-between gap-8 mt-4">
					<div className="flex items-center gap-1">
						<BiUser className="text-3xl text-secondary font-semibold" />
						<p className="text-xl flex items-center gap-2">
							<span className="font-semibold">Max Person :</span>
							<span> {maxPerson}</span>
						</p>
					</div>

					<div className="flex items-center gap-1">
						<AiOutlineColumnWidth className="text-3xl text-secondary font-semibold" />
						<p className="text-xl">
							<span className="font-semibold">Size :</span>
							<span>
								{size}m<sup>2</sup>
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Room;
