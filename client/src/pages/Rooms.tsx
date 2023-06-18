import { BookingForm, Room } from "../components";
import { Header } from "../layouts";
import { useContext, useEffect } from "react";
import { RoomContext } from "../context/RoomContext";

const Rooms = () => {
	useEffect(() => {
		document.title = "Rooms | Hotello";
	}, []);

	const { rooms } = useContext(RoomContext);
	// console.log(rooms);

	return (
		<div>
			<Header title="rooms" />

			<div className="px-12 md:px-16 lg:px-28 my-16 relative">
				<div className="mx-auto my-16 relative">
					<div className="bg-primary mt-4 p-4 lg:bg-transparent">
						<BookingForm />
					</div>
				</div>

				<div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{rooms.map((room) => (
						<Room
							key={room.id}
							id={room.id}
							hotelloName={room.name}
							hotelloImg={room.RoomImg}
							hotelloDesc={room.desc}
							hotelloPrice={room.price}
							maxPerson={room.maxPerson}
							size={room.size}
						/>
					))}
				</div>

				<div></div>
			</div>
		</div>
	);
};

export default Rooms;
