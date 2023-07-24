export interface Location {
	longitude: number;
	latitude: number;
}

export interface Land {
	name: string;
	size: number;
	ownerId?: string;
	location: Location[];
	description: string;
	price: number;
	LeasedBy?: string | undefined;
	crops?: string[];
	offers?: string | undefined;
}
