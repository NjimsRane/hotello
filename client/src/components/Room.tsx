import { BiUser, BiChild, BiBed } from "react-icons/bi";
import { AiOutlineColumnWidth } from "react-icons/ai";
import { formatCurrency } from "../utilities/formatCurrency";

type RoomsProps = {
	roomImg?: string;
	roomName: string;
	roomPrice: number;
	roomDesc: string;
	adults: number;
	kids?: number;
	bed: number;
	size: number;
};

const Room = ({
	roomImg,
	roomName,
	roomPrice,
	roomDesc,
	adults,
	kids,
	bed,
	size,
}: RoomsProps) => {
	return (
		<div className="relative h-fit group">
			<img
				src={roomImg}
				alt={roomName}
				className="w-full object-cover h-[20rem]"
			/>
			<div className="absolute top[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] bg-secondary w-[50%] py-3 rounded-3xl text-center shadow">
				<p className="text-3xl text-white font-semibold">
					{formatCurrency(roomPrice)}
				</p>
			</div>
			<div className="bg-white shadow-md  transition-all duration-500  p-8 rounded group-hover:shadow-xl space-y-4">
				<div className="space-y-4 mt-4 text-center">
					<h2>{roomName}</h2>
					<p className="text-lg text-[gray]">
						{roomDesc.slice(0, 150)}...
					</p>
				</div>
				<hr />
				<div className="flex items-center justify-center gap-8">
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

export default Room;
