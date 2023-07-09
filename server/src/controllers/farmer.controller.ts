import { Request, Response } from 'express';
import {
  getAllLand,
  getLandById,
  searchLandByCrops,
  searchLandByLocation,
  removeOfferByOfferId,
} from '../models/land.model';
import { makeNewOffer, changeOfferAmount, deleteAnOffer } from '../models/offer.model';

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
    const { _id } = req.body;

    const land = await getLandById(_id);
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
const makeAnOffer = async (req: Request, res: Response) => {
  try {
    const { landId, landOwnerId, farmerId, amount } = req.body;

    const offer = {
      landId,
      landOwnerId,
      farmerId,
      amount,
      status: 'pending',
    };

    const newOffer = await makeNewOffer(offer);
    return res.status(200).send(newOffer);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

const changeOffer = async (req: Request, res: Response) => {
  try {
    const { offerId, amount } = req.body;

    const updatedOffer = await changeOfferAmount(offerId, amount);

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

    return res.status(200).send('Offer deleted successfully');
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

export {
  getAllLands,
  getLand,
  landSearchByCrops,
  landSearchByLocation,
  makeAnOffer,
  changeOffer,
  deleteOffer,
};
