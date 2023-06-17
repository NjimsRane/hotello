import { Link } from "react-router-dom";
import { IRoom } from "../types";
import { Desc, Images, Price } from "./Hotello";
import { BiUser, BiChild, BiBed } from "react-icons/bi";
import { AiOutlineColumnWidth } from "react-icons/ai";

const RoomComponent = ({
	id,
	hotelloImg,
	hotelloName,
	hotelloPrice,
	hotelloDesc,
	adults,
	kids,
	bed,
	size,
}: IRoom) => {
	return (
		<div className="relative h-fit group transition-hover duration-500 shadow-md hover:shadow-2xl">
			<Images
				url={hotelloImg}
				desc={hotelloName}
			/>
			<Link
				to={`/rooms/${id}`}
				className="absolute top[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] bg-[#000] w-[50%] py-3 text-center rounded transition-hover duration-500 hover:bg-[#ffac41]"
			>
				<Price price={hotelloPrice} />
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
					<Desc desc={hotelloDesc} />
				</div>
			</div>
			<div className="p-8">
				<hr />
				<div className="flex items-center justify-center gap-8 mt-4">
					<div className="flex items-center gap-1">
						<BiUser className="text-3xl text-secondary font-semibold" />
						<p className="text-xl">{adults}</p>
					</div>
					<div className="flex items-center gap-1">
						{kids && (
							<>
								<BiChild className="text-3xl text-secondary font-semibold" />
								<p className="text-xl">{kids}</p>
							</>
						)}
					</div>
					<div className="flex items-center gap-1">
						<BiBed className="text-3xl text-secondary font-semibold" />
						<p className="text-xl">{bed}</p>
					</div>
					<div className="flex items-center gap-1">
						<AiOutlineColumnWidth className="text-3xl text-secondary font-semibold" />
						<p className="text-xl">
							{size}m<sup>2</sup>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RoomComponent;
