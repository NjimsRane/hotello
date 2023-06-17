import { BiUser, BiChild, BiBed } from "react-icons/bi";
import { AiOutlineColumnWidth } from "react-icons/ai";
import { IRoom } from "../types";
import { RoomComponent } from ".";

const Room = ({
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
		<div className="relative h-fit group bg-white shadow-md rounded hover:shadow-xl  ">
			<RoomComponent
				id={id}
				hotelloImg={hotelloImg}
				hotelloName={hotelloName}
				hotelloPrice={hotelloPrice}
				hotelloDesc={hotelloDesc}
			/>
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

export default Room;
