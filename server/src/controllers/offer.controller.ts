import { changeOfferOrCounterOffer } from '../models/offer.model';
import { Request, Response } from 'express';

export const changeAnOffer = async (req: Request, res: Response) => {
	try {
		const { offerId, changable } = req.body;
		const offer = await changeOfferOrCounterOffer(offerId, changable);
		res.status(204).send(offer);
	} catch (error) {
		res.status(500).send({ message: 'Failed to update offer!' });
		console.log(error);
	}
};
