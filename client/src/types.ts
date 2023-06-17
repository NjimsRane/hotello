export type HotelloProps = {
	id: number;
	hotelloImg?: string;
	hotelloName: string;
	hotelloPrice: number;
	hotelloDesc: string;
};

export type ServiceProps = {
	id: number;
	serviceImg?: string;
	serviceName: string;
	servicePrice?: number;
	serviceDesc: string;
};

export interface IRoom extends HotelloProps {
	adults: number;
	kids?: number;
	bed: number;
	size: number;
}

export type ImagesProps = {
	url?: string;
	desc: string;
};

export type PriceProps = {
	price?: number;
};
export type DescProps = {
	desc: string;
};
