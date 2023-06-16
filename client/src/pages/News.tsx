import { Header } from "../layouts";
import { useEffect } from "react";

const News = () => {
	useEffect(() => {
		document.title = "News | Hotello";
	}, []);

	return (
		<div>
			<Header title="news" />
		</div>
	);
};

export default News;
