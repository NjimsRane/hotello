import { useEffect } from "react";

const Home = () => {
	useEffect(() => {
		document.title = "Home | Hotello";
	}, []);

	return <div>Home</div>;
};

export default Home;
