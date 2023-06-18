import {
	createContext,
	useState,
	useEffect,
	FormEvent,
	ReactNode,
} from "react";
import roomData from "../data/rooms.json";

type RoomContextProviderProps = {
	children: ReactNode;
};

export const RoomContext = createContext({});

const RoomContextProvider = ({ children }: RoomContextProviderProps) => {
	const [rooms, setRooms] = useState(roomData);
	const [adults, setAdults] = useState("1 adult");
	const [kids, setKids] = useState("0 kids");
	const [total, setTotal] = useState(0);

	useEffect(() => {
		setTotal(Number(adults[0]) + Number(kids[0]));
	}, [kids, adults]);

	const handleClick = (e: FormEvent) => {
		e.preventDefault();
		//filter rooms based on total (person)
		const newRooms = roomData.filter((room) => {
			return total <= room.maxPerson;
		});
		setRooms(newRooms);
	};

	return (
		<RoomContext.Provider
			value={{ rooms, kids, setKids, adults, setAdults, handleClick }}
		>
			{children}
		</RoomContext.Provider>
	);
};

export default RoomContextProvider;
