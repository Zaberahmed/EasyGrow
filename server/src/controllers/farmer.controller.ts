import { Request, Response } from 'express';
import { getAllLand, getLandById, searchLandByCrops, searchLandByLocation, addOfferByOfferId, removeOfferByOfferId } from '../models/land.model';
import { makeNewOffer, changeOfferAmount, deleteAnOffer, findOffers,findOneOffer } from '../models/offer.model';

// Land controllers
const getAllLands = async (req: Request, res: Response) => {
	try {
		const allLands = await getAllLand();
		return res.status(200).send(allLands);
	} catch (error) {
		res.status(500);
		console.log(error);
	}
};

const getLand = async (req: Request, res: Response) => {
	try {
		const { landId } = req.body;

		const land = await getLandById(landId);
		return res.status(200).send(land);
	} catch (error) {
		res.status(500);
		console.log(error);
	}
};

const landSearchByCrops = async (req: Request, res: Response) => {
	try {
		const { crops } = req.body;

		const land = await searchLandByCrops(crops);
		return res.status(200).send(land);
	} catch (error) {
		res.status(500);
		console.log(error);
	}
};

const landSearchByLocation = async (req: Request, res: Response) => {
	try {
		const { longitude, latitude } = req.body;

		const lands = await searchLandByLocation(longitude, latitude);
		return res.status(200).send(lands);
	} catch (error) {
		res.status(500);
		console.log(error);
	}
};

// Offer controllers
const getOneOffer = async (req: Request, res: Response) => {
	try {
		const { farmerId, landId } = req.body;

		const offer = await findOneOffer(farmerId,landId);

		return res.status(200).send(offer);
	} catch (error) {
		res.status(500);
		console.log(error);
	}
};
const getOffers = async (req: Request, res: Response) => {
	try {
		const { farmerId } = req.body;

		const offers = await findOffers(farmerId);

		return res.status(200).send(offers);
	} catch (error) {
		res.status(500);
		console.log(error);
	}
};
const makeAnOffer = async (req: Request, res: Response) => {
	try {
		const { landId, landOwnerId, farmerId, amount } = req.body;

		const offer = {
			landId,
			landOwnerId,
			farmerId,
			amount,
			status: 'Negotiating',
		};

		const newOffer = await makeNewOffer(offer);

		if (newOffer && newOffer._id) {
			const land = await addOfferByOfferId(landId, newOffer._id);

			if (land) {
				return res.status(200).send(newOffer);
			}
		}
	} catch (error) {
		res.status(500);
		console.log(error);
	}
};

const changeOffer = async (req: Request, res: Response) => {
	try {
		const { offerId, amount, status } = req.body;

		const updatedOffer = await changeOfferAmount(offerId, amount, status);

		return res.status(200).send(updatedOffer);
	} catch (error) {
		res.status(500);
		console.log(error);
	}
};

const deleteOffer = async (req: Request, res: Response) => {
	try {
		const { offerId, landId } = req.body;

		await removeOfferByOfferId(landId, offerId);
		await deleteAnOffer(offerId);

		res.status(200).send('Offer deleted successfully');
	} catch (error) {
		res.status(500);
		console.log(error);
	}
};

export { getAllLands, getLand, landSearchByCrops, landSearchByLocation, makeAnOffer, getOffers, changeOffer, deleteOffer, getOneOffer };
