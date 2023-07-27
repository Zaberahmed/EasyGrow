import { Router } from 'express';
const router = Router();

import * as accountController from '../controllers/account.controller';
import * as farmerController from '../controllers/farmer.controller';
import * as landOwnerController from '../controllers/landOwner.contorller';
import * as cropsController from '../controllers/crops.contorller';
import * as offerController from '../controllers/offer.controller';

import { authenticator } from '../middlewares/authenticator';
import { authorizer } from '../middlewares/authorizer';

import { addingCrops } from '../apis/crop.api';

router.post('/crops', addingCrops);

// *account controllers*
router.post('/registration', accountController.registerUser);
router.post('/login', accountController.login);
router.post('/forgotPassword', accountController.forgotPassword);
router.post('/resetPassword', accountController.resetPassword);
router.post('/userById', accountController.userById);
router.get('/logout', accountController.logout);

router.use(authenticator, authorizer);
router.get('/profile', accountController.profile);

// *farmer controllers*
// for land
router.get('/getAllLands', farmerController.getAllLands);
router.post('/getLand', farmerController.getLand);
router.post('/landSearchByLocation', farmerController.landSearchByLocation);
router.get('/landSearchByCrops', farmerController.landSearchByCrops);

// for offer
router.post('/getOffer', farmerController.getOneOffer);
router.post('/getOffers', farmerController.getOffers);
router.post('/makeAnOffer', farmerController.makeAnOffer);
// router.post('/changeOffer', farmerController.changeOffer);
router.delete('/deleteOffer', farmerController.deleteOffer);

// *land Owner controllers*
// for land
router.post('/addLand', landOwnerController.addLand);
router.delete('/removeLand', landOwnerController.removeLand);
router.post('/landSearchByOwner', landOwnerController.landSearchByOwner);

// for offer
router.post('/allOffersForALand', landOwnerController.allOffersForALand);
router.post('/acceptOffer', landOwnerController.acceptOffer);
router.post('/rejectOffer', landOwnerController.rejectOffer);
router.get('/allLand', landOwnerController.allLand);
router.put('/counter-offer', offerController.changeAnOffer);

// crops
router.post('/crops', cropsController.createCrops);

export { router };
