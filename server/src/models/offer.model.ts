import { Schema, model } from './database';

interface Offer {
  landId: Schema.Types.ObjectId;
  landOwnerId: Schema.Types.ObjectId;
  farmerId: Schema.Types.ObjectId;
  amount: number;
  status: string;
}

const OfferSchema = new Schema<Offer>({
  landId: {
    type: Schema.Types.ObjectId,
    ref: 'LandModel',
    required: true,
  },
  landOwnerId: {
    type: Schema.Types.ObjectId,
    ref: 'UserModel',
    required: true,
  },
  farmerId: {
    type: Schema.Types.ObjectId,
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

const OfferModel = model<Offer>('Offer', OfferSchema);

const getAllOffersByLandId = async (landId: Schema.Types.ObjectId) => {
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

const deleteAnOffer = async (offerId: Schema.Types.ObjectId) => {
  try {
    return await OfferModel.deleteOne({ _id: offerId });
  } catch (error) {
    console.log(error);
  }
};

const changeOfferAmount = async (offerId: Schema.Types.ObjectId, amount: number) => {
  try {
    return await OfferModel.findByIdAndUpdate({ _id: offerId }, { amount: amount });
  } catch (error) {
    console.log(error);
  }
};

const changeOfferStatus = async (offerId: Schema.Types.ObjectId, status: string) => {
  try {
    return await OfferModel.findByIdAndUpdate({ _id: offerId }, { status: status });
  } catch (error) {
    console.log(error);
  }
};

export { getAllOffersByLandId, makeNewOffer, deleteAnOffer, changeOfferAmount, changeOfferStatus };
