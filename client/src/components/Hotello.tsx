import { formatCurrency } from "../utilities/formatCurrency";
import { ImagesProps, PriceProps, DescProps } from "../types";

export const Images = ({ url, desc }: ImagesProps) => {
	return (
		<div className="overflow-hidden">
			<img
				src={url}
				alt={desc}
				className="w-full object-cover h-[20rem] duration-500 transition-all group-hover:scale-110 group-hover:rotate-3"
			/>
		</div>
	);
};

export const Price = ({ price }: PriceProps) => {
	return (
		<span className="text-3xl text-white font-semibold capitalize">
			{price ? <span>{formatCurrency(price)}</span> : <span>free</span>}
		</span>
	);
};

export const Desc = ({ desc }: DescProps) => {
	return <p className="text-lg text-[gray]">{desc.slice(0, 200)}...</p>;
};

const Hotello = () => {
	return <div>Hotello</div>;
};

export default Hotello;
