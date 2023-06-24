export const Choices = ({ choice, title }) => {
	return (
		<div className="space-y-4">
			<span className="text-8xl text-primary h-48 w-48 shadow-xl rounded-full grid place-items-center transition-hover duration-500 hover:bg-primary hover:text-white ">
				{choice}
			</span>
			<span className="text-center block uppercase text-gray-400 tracking-wider">
				{title}
			</span>
		</div>
	);
};

const ServiceDetail = ({ urlImg, desc, icon }) => {
	return (
		<div className="relative w-full h-[40vh] md:h-[45vh] lg:h-[50vh] transition-hover duration-500 hover:-mt-4">
			<div className="absolute h-full w-full inset-0 bg-[black]/60"></div>
			<div className="h-full ">
				<img
					src={urlImg}
					alt="room"
					className="w-full h-full object-cover"
				/>
				<div className="absolute w-full top-[50%] translate-y-[-50%] flex justify-center items-center flex-col gap-4">
					<h4 className="text-white uppercase text-3xl tracking-widest font-questrial">
						{desc}
					</h4>
					<p className="text-8xl text-secondary">{icon}</p>
				</div>
			</div>
		</div>
	);
};

export default ServiceDetail;
