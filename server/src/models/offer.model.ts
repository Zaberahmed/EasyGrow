import { Schema, Types, model } from './database';

interface Offer {
	landId?: Types.ObjectId;
	landOwnerId?: Types.ObjectId;
	farmerId?: Types.ObjectId;
	amount: number;
	status: string;
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

const changeOfferAmount = async (offerId: Types.ObjectId, amount: number, status: string) => {
	try {
		const offer = await OfferModel.findOneAndUpdate({ _id: offerId }, { amount: amount });
		if (offer) {
			return await OfferModel.findOneAndUpdate({ _id: offerId }, { status: status });
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

export { getAllOffersByLandId, makeNewOffer, deleteAnOffer, changeOfferAmount, changeOfferStatus };
