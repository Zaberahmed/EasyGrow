import { Schema, model } from './database';
interface Land {
  name: string;
  size: number;
  ownerId: Schema.Types.ObjectId;
  location: number[];
  description: string;
  price: number;
  LeasedBy?: Schema.Types.ObjectId | undefined;
  crops?: string[];
  offers?: Schema.Types.ObjectId[] | undefined;
}

const LandSchema = new Schema<Land>({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  ownerId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  location: {
    longitude: {
      type: Number,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
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
    type: Schema.Types.ObjectId,
    ref: 'UserModel',
    required: false,
  },
  crops: {
    type: [String],
    required: false,
  },
  offers: {
    type: [Schema.Types.ObjectId],
    ref: 'OfferModel',
    required: false,
  },
});

const LandModel = model<Land>('Land', LandSchema);

const getAllLand = async () => {
  try {
    const allLand = await LandModel.find({});
    return allLand;
  } catch (error) {
    console.log(error);
  }
};

const getLandById = async (landId: Schema.Types.ObjectId) => {
  try {
    return await LandModel.find({ landId });
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

const removeALand = async (landId: Schema.Types.ObjectId) => {
  try {
    return await LandModel.deleteOne(landId);
  } catch (error) {
    console.log(error);
  }
};

const searchLandByOwner = async (ownerId: Schema.Types.ObjectId) => {
  try {
    return await LandModel.find({ ownerId });
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

const removeOfferByOfferId = async (
  landId: Schema.Types.ObjectId,
  offerId: Schema.Types.ObjectId
) => {
  try {
    return await LandModel.updateOne({ _id: landId }, { $pull: { offerId: offerId } });
  } catch (error) {
    console.log(error);
  }
};

export {
  getAllLand,
  getLandById,
  addALand,
  removeALand,
  searchLandByOwner,
  searchLandByCrops,
  searchLandByLocation,
  removeOfferByOfferId,
};
