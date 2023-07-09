import { Request, Response } from 'express';
import { addALand, removeALand } from '../models/land.model';
import { removeALandByLandId } from '../models/user.model';
import { getAllOffersByLandId, changeOfferStatus } from '../models/offer.model';

// Land controllers
const addLand = async (req: Request, res: Response) => {
  try {
    const { name, size, ownerId, longitude, latitude, description, price } = req.body;

    const newLand = {
      name,
      size,
      ownerId,
      location: [longitude, latitude],
      description,
      price,
    };

    const createdLand = await addALand(newLand);

    res.status(200).json(createdLand);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

const removeLand = async (req: Request, res: Response) => {
  try {
    const { landId } = req.body;

    await removeALandByLandId(landId);
    await removeALand(landId);

    return res.status(200).send('Land deleted successfully');
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

const landSearchByOwner = async (req: Request, res: Response) => {
  try {
    const { owenerId } = req.body;

    const lands = await addALand(owenerId);

    return res.status(200).send(lands);
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

    return res.status(200).send(allOffers);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

const acceptOffer = async (req: Request, res: Response) => {
  try {
    const { offerId, status } = req.body;

    await changeOfferStatus(offerId, status);

    return res.status(200).send('Offer accepted');
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

const rejectOffer = async (req: Request, res: Response) => {
  try {
    const { offerId, status } = req.body;

    await changeOfferStatus(offerId, status);

    return res.status(200).send('Offer rejected');
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

export { addLand, removeLand, landSearchByOwner, allOffersForALand, acceptOffer, rejectOffer };
