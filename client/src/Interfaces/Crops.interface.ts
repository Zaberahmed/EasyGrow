import { ObjectId } from 'mongodb';

export interface Crop {
	_id?: ObjectId;
	name: string;
	pricePerTon?: number;
	tonPerAcre?: number;
	season?: string;
	max_ph: number;
	min_ph: number;
	max_temperature: number;
	min_temperature: number;
	max_humidity: number;
	min_humidity: number;
	max_rainfall: number;
	min_rainfall: number;
}
