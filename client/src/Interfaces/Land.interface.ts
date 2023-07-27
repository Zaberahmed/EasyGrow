import { Crop } from './Crops.interface';
import { ObjectId } from 'mongodb';

export interface Location {
	longitude: number;
	latitude: number;
}

export interface Land {
	_id?: ObjectId;
	name: string;
	size: number;
	ownerId?: ObjectId;
	location: Location[];
	duration: string;
	description: string;
	price: number;
	LeasedBy?: string | undefined;
	crops?: Crop[];
	offers?: string | undefined;
}
