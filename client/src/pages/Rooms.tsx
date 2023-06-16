import { Room } from "../components";
import { Header } from "../layouts";
import rooms from "../data/rooms.json";
import { useEffect } from "react";

const Rooms = () => {
	useEffect(() => {
		document.title = "Rooms | Hotello";
	}, []);

	return (
		<div>
			<Header title="rooms" />
			<div className="px-12 md:px-16 lg:px-28 my-16">
				<div>
					<div></div>
					<div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
						{rooms.map((room) => (
							<Room
								key={room.id}
								roomName={room.name}
								roomImg={room.RoomImg}
								roomDesc={room.desc}
								roomPrice={room.price}
								adults={room.adults}
								bed={room.bed}
								size={room.size}
								kids={room.kids}
							/>
						))}
					</div>
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default Rooms;
