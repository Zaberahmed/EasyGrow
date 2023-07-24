import { insertCrops } from '../models/crop.model';
import { Request, Response } from 'express';
import { getSoilData } from './soil.api';
import { getWeatherData } from './weather.api';

const addingCrops = async (req: Request, res: Response) => {
  try {
    const insertedCrops = await insertCrops(req.body);
    res.send(insertedCrops);
  } catch (error) {
    console.log(error);
  }
};

const getSuitableData = async (longitude: number, latitude: number) => {
  try {
    const soilData = await getSoilData(longitude, latitude);
    const weatherData = await getWeatherData(longitude, latitude);

    return soilData;
  } catch (error) {
    console.log(error);
  }
};

export { addingCrops, getSuitableData };
