import { Schema, Types, model } from './database';

export interface Offer {
	landId?: Types.ObjectId;
	landOwnerId?: Types.ObjectId;
	farmerId?: Types.ObjectId;
	amount: number;
	status: string;
	address: string;
	counter_offer?: string;
	countered?: boolean;
}

const OfferSchema = new Schema({
	landId: {
		type: Types.ObjectId,
		ref: 'LandModel',
		required: true,
	},
	landOwnerId: {
		type: Types.ObjectId,
		ref: 'UserModel',
		required: true,
	},
	farmerId: {
		type: Types.ObjectId,
		ref: 'UserModel',
		required: true,
	},
	amount: {
		type: Number,
		required: true,
	},
	status: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		require: true,
	},
	counter_offer: {
		type: String,
		require: false,
	},
	countered: {
		type: Boolean,
		require: false,
		default: false,
	},
});

const OfferModel = model('Offer', OfferSchema);

const getAllOffersByLandId = async (landId: Types.ObjectId) => {
	try {
		const allOffers = await OfferModel.find({ landId });
		return allOffers;
	} catch (error) {
		console.log(error);
	}
};
const findOffers = async (id: Types.ObjectId) => {
	try {
		return await OfferModel.find({ farmerId: id });
	} catch (error) {
		console.log(error);
	}
};
const findOneOffer = async (farmerId: Types.ObjectId, landId: Types.ObjectId) => {
	try {
		return await OfferModel.findOne({ farmerId: farmerId, landId: landId });
	} catch (error) {
		console.log(error);
	}
};

const makeNewOffer = async (offerDetails: Offer) => {
	try {
		return await OfferModel.create(offerDetails);
	} catch (error) {
		console.log(error);
	}
};

const deleteAnOffer = async (offerId: Types.ObjectId) => {
	try {
		return await OfferModel.deleteOne({ _id: offerId });
	} catch (error) {
		console.log(error);
	}
};

const changeOfferOrCounterOffer = async (offerId: Types.ObjectId, changable: { counter_offer?: string; amount?: string }) => {
	try {
		if (changable.amount) {
			await OfferModel.findOneAndUpdate({ _id: offerId }, { amount: changable.amount });
			return await OfferModel.findOneAndUpdate({ _id: offerId }, { countered: false });
		} else {
			await OfferModel.findOneAndUpdate({ _id: offerId }, { counter_offer: changable.counter_offer });
			return await OfferModel.findOneAndUpdate({ _id: offerId }, { countered: true });
		}
	} catch (error) {
		console.log(error);
	}
};

const changeOfferStatus = async (offerId: Types.ObjectId, status: string) => {
	try {
		return await OfferModel.findOneAndUpdate({ _id: offerId }, { status: status });
	} catch (error) {
		console.log(error);
	}
};

export { getAllOffersByLandId, makeNewOffer, deleteAnOffer, changeOfferOrCounterOffer, changeOfferStatus, findOffers, findOneOffer };
