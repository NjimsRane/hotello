import { AdultDropDown, KidsDropDown, CheckIn, CheckOut } from "../components";
import { useContext } from "react";
import { RoomContext } from "../context/RoomContext";
const BookingForm = () => {
	const { handleClick } = useContext(RoomContext);

	return (
		<form className="h-[25rem]  w-full lg:h-[4rem]  lg:shadow-xl lg:absolute  lg:left-0 lg:right-0 lg:p-0 lg:z-30 lg:-top-24">
			<div className="flex flex-col w-full h-full lg:flex-row ">
				<div className="flex-1 border-r">
					<CheckIn />
				</div>
				<div className="flex-1 border-r">
					<CheckOut />
				</div>
				<div className="flex-1 border-r">
					<AdultDropDown />
				</div>
				<div className="flex-1 border-r">
					<KidsDropDown />
				</div>
				<button
					type="submit"
					onClick={(e) => handleClick(e)}
					className=" flex-1 uppercase text-white tracking-wider font-semibold bg-amber-800"
				>
					check now
				</button>
			</div>
		</form>
	);
};

export default BookingForm;
