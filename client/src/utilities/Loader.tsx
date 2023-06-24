import { SpinnerDotted } from "spinners-react";

const Loader = () => {
	return (
		<div className="fixed h-screen w-full top-0 bottom-0 flex justify-center items-center bg-[#3a3138]/70 ">
			<SpinnerDotted
				color="white"
				size={50}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		</div>
	);
};

export default Loader;
