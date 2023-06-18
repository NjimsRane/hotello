import { gal1, logo, gal3, gal2, gal4, gal5, gal6 } from "../assets";
import { BiSend } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const gals = [
	{
		imgUrl: gal1,
	},
	{
		imgUrl: gal2,
	},
	{
		imgUrl: gal3,
	},
	{
		imgUrl: gal4,
	},
	{
		imgUrl: gal5,
	},
	{
		imgUrl: gal6,
	},
];

const Footer = () => {
	return (
		<footer className="bg-primary p-12  md:px-16 lg:px-28">
			<div className="flex flex-col lg:flex-row gap-8">
				<div className="space-y-8 flex-1">
					<NavLink to="/">
						<img
							src={logo}
							alt="logo"
							className="w-64"
						/>
					</NavLink>

					<p className="text-[#FFFFFF]/50 text-2xl leading-relaxed  md:w-[35ch]">
						We always strive for growth and development as
						StylemixThemes. We don’t want to have a large team, we
						want to have a team that works in unity. Our slogan is
						“Every day is the last day”.
					</p>
				</div>
				<div className="flex-1">
					<h3>gallery</h3>
					<div className="grid gap-4 grid-cols-2  md:grid-cols-3">
						{gals.map((item, index) => (
							<img
								src={item.imgUrl}
								key={index}
								alt="room"
								className="w-[20rem] h-[20vh] lg:h-[10vh] object-cover"
							/>
						))}
					</div>
				</div>
				<div className="flex-1">
					<h3>contact us</h3>
					<div className="text-[#FFFFFF]/50 text-2xl leading-relaxed space-y-4">
						<p>
							1010 Berkler avenue, Brooklyn,
							<br /> New York City, NY 10018 US
						</p>
						<p className="flex flex-col gap-1">
							<span>Tel.: +1 998 150 3020</span>
							<span>Fax.: +1 998 150 3020</span>
						</p>

						<p>
							<a
								href="#"
								className="transition-all duration-500 hover:underline"
							>
								info@stylemixthemes.com
							</a>
						</p>
					</div>
				</div>
				<div className="flex-1">
					<h3>STAY IN TOUCH</h3>
					<div className="flex items-center border px-1 rounded bg-white">
						<input
							type="text"
							placeholder="Email Address..."
							name="send email"
							className="w-full h-[3rem] p-2 text-2xl  focus:outline-none bg-transparent"
						/>
						<button className="text-primary right-4 text-4xl  ">
							<BiSend />
						</button>
					</div>
					<p className="text-[#FFFFFF]/50 text-xl leading-relaxed space-y-4 mt-4">
						Enter your email address for promotions and news.
					</p>
				</div>
			</div>
			<div className="mt-8">
				<hr />
				<p className="flex items-center justify-center gap-2 mt-4  text-[#FFFFFF]/50 text-xl leading-relaxed ">
					<span>
						Copyright © {new Date().getFullYear()} Made By NjimsRane
						with
					</span>
					<span className="text-red-600">
						<AiFillHeart />
					</span>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
