import { createContext, ReactNode, useState, useEffect } from "react";
import roomData from "../data/rooms.json";

type RoomContextProviderProps = {
	children: ReactNode;
};

export const RoomContext = createContext({});

const RoomContextProvider = ({ children }: RoomContextProviderProps) => {
	const [rooms, setRooms] = useState(roomData);
	// console.log(rooms);

	return (
		<RoomContext.Provider value={{ rooms }}>
			{children}
		</RoomContext.Provider>
	);
};

export default RoomContextProvider;
