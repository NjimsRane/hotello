import { Header } from "../layouts";
import { useEffect } from "react";

const Gallery = () => {
	useEffect(() => {
		document.title = "Gallery | Hotello";
	}, []);

	return (
		<div>
			<Header title="gallery" />
		</div>
	);
};

export default Gallery;
