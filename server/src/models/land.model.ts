import { Crop, CropSchema } from './crop.model';
import { Schema, Types, model } from './database';

interface Location {
	longitude: number;
	latitude: number;
}
interface Land {
	name: string;
	size: number;
	ownerId?: Types.ObjectId;
	location: Location[];
	description: string;
	price: number;
	LeasedBy?: Types.ObjectId | undefined;
	crops?: Crop[];
	offers?: Types.ObjectId[] | undefined;
}

const LandSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	size: {
		type: Number,
		required: true,
	},
	ownerId: {
		type: Types.ObjectId,
		required: true,
	},
	location: [
		{
			longitude: {
				type: Number,
				required: true,
			},
			latitude: {
				type: Number,
				required: true,
			},
		},
	],
	duration: {
		type: String,
		require: true,
	},
	description: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	LeasedBy: {
		type: Types.ObjectId,
		ref: 'UserModel',
		required: false,
	},
	crops: {
		type: [CropSchema],
		ref: 'CropModel',
		required: false,
	},
	offers: {
		type: [Types.ObjectId],
		ref: 'OfferModel',
		required: false,
	},
});

const LandModel = model('Land', LandSchema);

const getAllLand = async () => {
	try {
		const allLand = await LandModel.find({});
		return allLand;
	} catch (error) {
		console.log(error);
	}
};

const getLandById = async (landId: Types.ObjectId) => {
	try {
		return await LandModel.find({ _id: landId });
	} catch (error) {
		console.log(error);
	}
};

const addALand = async (landDetails: Land) => {
	try {
		return await LandModel.create(landDetails);
	} catch (error) {
		console.log(error);
	}
};

const removeALand = async (landId: Types.ObjectId) => {
	try {
		return await LandModel.deleteOne({ _id: landId });
	} catch (error) {
		console.log(error);
	}
};

const searchLandByOwner = async (ownerId: Types.ObjectId) => {
	try {
		return await LandModel.find({ ownerId: ownerId });
	} catch (error) {
		console.log(error);
	}
};

const searchLandByCrops = async (crops: string[]) => {
	try {
		return await LandModel.find({ crops: { $in: crops } });
	} catch (error) {
		console.log(error);
	}
};

const searchLandByLocation = async (longitude: number, latitude: number) => {
	try {
		const distanceInDegrees = 0.09;
		const query = {
			location: {
				$geoWithin: {
					$centerSphere: [[longitude, latitude], distanceInDegrees],
				},
			},
		};
		return await LandModel.find(query);
	} catch (error) {
		console.log(error);
	}
};

const addOfferByOfferId = async (landId: Types.ObjectId, offerId: Types.ObjectId) => {
	try {
		return await LandModel.findOneAndUpdate({ _id: landId }, { $push: { offers: offerId } }, { new: true });
	} catch (error) {
		console.log(error);
	}
};

const removeOfferByOfferId = async (landId: Types.ObjectId, offerId: Types.ObjectId) => {
	try {
		return await LandModel.findOneAndUpdate({ _id: landId }, { $pull: { offers: offerId } });
	} catch (error) {
		console.log(error);
	}
};

export { getAllLand, getLandById, addALand, removeALand, searchLandByOwner, searchLandByCrops, searchLandByLocation, addOfferByOfferId, removeOfferByOfferId };
