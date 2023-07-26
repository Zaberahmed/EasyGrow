import { Request, Response } from 'express';
import { addALand, removeALand, searchLandByOwner } from '../models/land.model';
import { addALandByLandId, removeALandByLandId } from '../models/user.model';
import { getAllOffersByLandId, changeOfferStatus } from '../models/offer.model';
import { Crop, getAllCrops, insertCrops } from '../models/crop.model';
import { getSuitableData } from '../apis/crop.api';
import { Types } from '../models/database';

// Land controllers
const createCrops = async (req: Request, res: Response) => {
	try {
		const insertedCrops = await insertCrops(req.body);
		res.send(insertedCrops);
	} catch (error) {
		res.status(500);
		console.log(error);
	}
};

export { createCrops };
