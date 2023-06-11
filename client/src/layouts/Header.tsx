import { HamburgerMenu } from "../components";
import { room1 } from "../assets";

type HearderProps = {
	title: string;
};

const Header = ({ title }: HearderProps) => {
	return (
		<header className="h-[50vh] relative ">
			<HamburgerMenu />
			<div
				className="absolute top-0 h-full w-full z-[-1] bg-center bg-cover bg-no-repeat flex justify-center items-center"
				style={{
					backgroundImage: `linear-gradient(145deg, rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${room1})`,
				}}
			></div>
			<h1 className="absolute top-[60%] left-[50%] translate-x-[-50%]">
				{title}
			</h1>
		</header>
	);
};

export default Header;
