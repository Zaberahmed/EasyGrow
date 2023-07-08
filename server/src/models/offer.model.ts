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

export { OfferModel };
