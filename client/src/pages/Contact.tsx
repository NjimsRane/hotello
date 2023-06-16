import { Header } from "../layouts";
import { useEffect } from "react";

const Contact = () => {
	useEffect(() => {
		document.title = "Contact | Hotello";
	}, []);

	return (
		<div>
			<Header title="contact" />
		</div>
	);
};

export default Contact;
