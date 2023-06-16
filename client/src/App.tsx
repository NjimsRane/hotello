import { Routes, Route, Outlet } from "react-router-dom";

import { Footer } from "./layouts";
import { lazy, Suspense } from "react";
import Loader from "./utilities/Loader";

const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const Gallery = lazy(() => import("./pages/Gallery"));
const About = lazy(() => import("./pages/About"));
const News = lazy(() => import("./pages/News"));
const Rooms = lazy(() => import("./pages/Rooms"));
const Services = lazy(() => import("./pages/Services"));

const Layout = () => {
	return (
		<>
			<Outlet />
			<Footer />
		</>
	);
};

const App = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<Suspense fallback={<Loader />}>
						<Layout />
					</Suspense>
				}
			>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path="/news"
					element={<News />}
				/>
				<Route
					path="/contact"
					element={<Contact />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/services"
					element={<Services />}
				/>
				<Route
					path="/gallery"
					element={<Gallery />}
				/>
				<Route
					path="/rooms"
					element={<Rooms />}
				/>
			</Route>
		</Routes>
	);
};

export default App;
