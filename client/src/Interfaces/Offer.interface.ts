import { ObjectId } from 'mongodb';

export interface Offer {
	_id?: ObjectId;
	farmerId?: ObjectId;
	landId?: ObjectId;
	landOwnerId?: ObjectId;
	amount: string;
	status: string;
	counter_offer?: string;
	countered?: boolean;
	address: string;
}
