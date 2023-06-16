import { Service } from "../components";
import { Header } from "../layouts";
import { dataServices } from "../data/dataServices";
import { useEffect } from "react";

const Services = () => {
	useEffect(() => {
		document.title = "Services | Hotello";
	}, []);

	return (
		<div>
			<Header title="services" />
			<div className="px-12 md:px-16 lg:px-28 my-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{dataServices.map((service) => (
					<Service
						key={service.id}
						serviceImg={service.urlImg}
						servicePrice={service.price}
						serviceName={service.title}
						serviceDesc={service.desc}
					/>
				))}
			</div>
		</div>
	);
};

export default Services;
