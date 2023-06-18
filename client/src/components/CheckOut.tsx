import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const CheckOut = () => {
	const [endDate, setEndDate] = useState({
		startDate: null,
		endDate: null,
	});
	const handleValueChange = (newValue) => {
		console.log("newValue:", newValue);
		setEndDate(newValue);
	};
	return (
		<div className="relative flex items-center justify-end h-full">
			<Datepicker
				value={endDate}
				startWeekOn="mon"
				separator="#000"
				showShortcuts={true}
				placeholder="Check out"
				showFooter={true}
				useRange={false}
				asSingle={true}
				readOnly={true}
				primaryColor="cyan"
				displayFormat={"DD/MM/YYYY"}
				containerClassName="w-full h-full relative"
				inputClassName="w-full h-full focus:ring-0 font-normal bg-white focus:outline-none px-8"
				toggleClassName="absolute text-primary right-0 h-full px-8 text-[#000] focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
				onChange={handleValueChange}
			/>
		</div>
	);
};

export default CheckOut;
