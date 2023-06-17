import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./utilities/ScrollToTop.tsx";
import RoomContextProvider from "./context/RoomContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<RoomContextProvider>
		<React.StrictMode>
			<BrowserRouter>
				<ScrollToTop />
				<App />
			</BrowserRouter>
		</React.StrictMode>
	</RoomContextProvider>
);
