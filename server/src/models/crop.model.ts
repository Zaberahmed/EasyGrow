import { Schema, model, Types } from './database';

export interface Crop {
  _id?: Types.ObjectId;
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

const CropSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  pricePerTon: {
    type: Number,
    required: false,
  },
  tonPerAcre: {
    type: Number,
    required: false,
  },
  season: {
    type: String,
    required: false,
  },
  max_ph: {
    type: Number,
    required: false,
  },
  min_ph: {
    type: Number,
    required: false,
  },
  max_temperature: {
    type: Number,
    required: false,
  },
  min_temperature: {
    type: Number,
    required: false,
  },
  max_humidity: {
    type: Number,
    required: false,
  },
  min_humidity: {
    type: Number,
    required: false,
  },
  max_rainfall: {
    type: Number,
    required: false,
  },
  min_rainfall: {
    type: Number,
    required: false,
  },
});

const CropModel = model('Crop', CropSchema);

const getAllCrops = async () => {
  try {
    const insertedCrops = await CropModel.find({});
    return insertedCrops;
  } catch (error) {
    console.log(error);
  }
};

const insertCrops = async (crops: Crop[]) => {
  try {
    const insertedCrops = await CropModel.insertMany(crops);
    return insertedCrops;
  } catch (error) {
    console.log(error);
  }
};

export { getAllCrops, insertCrops };
