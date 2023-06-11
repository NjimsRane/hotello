import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Contact, Gallery, Home, News, Rooms, Services } from "./pages";
import { Footer } from "./layouts";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/rooms",
		element: <Rooms />,
	},
	{
		path: "/services",
		element: <Services />,
	},
	{
		path: "/news",
		element: <News />,
	},
	{
		path: "/gallery",
		element: <Gallery />,
	},
	{
		path: "/about",
		element: <About />,
	},
	{
		path: "/contact",
		element: <Contact />,
	},
]);

const App = () => {
	return (
		<div>
			<RouterProvider router={router} />
			<Footer />
		</div>
	);
};

export default App;
