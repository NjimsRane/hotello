import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
// import "../datepicker.css";
import { BsCalendar } from "react-icons/bs";

const CheckIn = () => {
	const [startDate, setStartDate] = useState({
		endDate: null,
	});
	const handleValueChange = (newValue) => {
		console.log("newValue:", newValue);
		setStartDate(newValue);
	};
	return (
		<div className="relative flex items-center justify-end h-full">
			<Datepicker
				value={startDate}
				startWeekOn="mon"
				showShortcuts={true}
				placeholder="Check in"
				showFooter={true}
				useRange={false}
				asSingle={true}
				readOnly={true}
				primaryColor="cyan"
				displayFormat={"DD/MM/YYYY"}
				containerClassName="w-full h-full relative"
				inputClassName="w-full h-full focus:ring-0 font-normal bg-white focus:outline-none px-8"
				toggleClassName="absolute  text-primary right-0 h-full px-8 text-[#000] focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
				onChange={handleValueChange}
			/>
		</div>
	);
};

export default CheckIn;
