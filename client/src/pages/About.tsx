import { Header } from "../layouts";
import { useEffect } from "react";

const About = () => {
	useEffect(() => {
		document.title = "About | Hotello";
	}, []);

	return (
		<div>
			<Header title="about" />
		</div>
	);
};

export default About;
