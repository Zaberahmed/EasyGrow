import { Request, Response } from 'express';
import { addALand, removeALand, searchLandByOwner } from '../models/land.model';
import { addALandByLandId, removeALandByLandId } from '../models/user.model';
import { getAllOffersByLandId, changeOfferStatus } from '../models/offer.model';
import { Crop, getAllCrops } from '../models/crop.model';
import { getSuitableData } from '../apis/crop.api';
import { Types } from '../models/database';

// Land controllers
const addLand = async (req: Request, res: Response) => {
	try {
		const { name, size, ownerId, location, description, price } = req.body;

		const crops = await getAllCrops();

		const { longitude, latitude } = location[0];

		const soilData = (await getSuitableData(longitude, latitude)) || 6.5;

		const suitableCrops: Types.ObjectId[] = [];

		if (crops) {
			crops.forEach((crop: Crop) => {
				if (crop.max_ph >= soilData && soilData >= crop.min_ph) {
					crop._id && suitableCrops.push(crop._id);
				}
			});
		}

		const newLand = {
			name,
			size,
			ownerId,
			location,
			description,
			price,
			crops: suitableCrops,
		};

		const createdLand = await addALand(newLand);

		if (createdLand && createdLand._id) {
			const landOwner = await addALandByLandId(ownerId, createdLand._id);

			if (landOwner) {
				res.status(200).send(createdLand);
			}
		}
	} catch (error) {
		res.status(500);
		console.log(error);
	}
};

const removeLand = async (req: Request, res: Response) => {
	try {
		const { userId, landId } = req.body;

		await removeALandByLandId(userId, landId);
		await removeALand(landId);

		res.status(200).send('Land removed successfully');
	} catch (error) {
		res.status(500);
		console.log(error);
	}
};

const landSearchByOwner = async (req: Request, res: Response) => {
	try {
		const { ownerId } = req.body;

		const lands = await searchLandByOwner(ownerId);

		res.status(200).send(lands);
	} catch (error) {
		res.status(500);
		console.log(error);
	}
};

//Offer controllers
const allOffersForALand = async (req: Request, res: Response) => {
	try {
		const { landId } = req.body;

		const allOffers = await getAllOffersByLandId(landId);

		res.status(200).send(allOffers);
	} catch (error) {
		res.status(500);
		console.log(error);
	}
};

const acceptOffer = async (req: Request, res: Response) => {
	try {
		const { offerId, status } = req.body;

		const newStatus = await changeOfferStatus(offerId, status);

		if (newStatus) {
			res.status(200).send('Offer accepted');
		}
	} catch (error) {
		res.status(500);
		console.log(error);
	}
};

const rejectOffer = async (req: Request, res: Response) => {
	try {
		const { offerId, status } = req.body;

		const newStatus = await changeOfferStatus(offerId, status);

		if (newStatus) {
			res.status(200).send('Offer rejected');
		}
	} catch (error) {
		res.status(500);
		console.log(error);
	}
};

export { addLand, removeLand, landSearchByOwner, allOffersForALand, acceptOffer, rejectOffer };
