import { Router } from 'express';
const router = Router();

import * as accountController from '../controllers/account.controller';
import * as farmerController from '../controllers/farmer.controller';
import * as landOwnerController from '../controllers/landOwner.contorller';

import { authenticator } from '../middlewares/authenticator';
import { authorizer } from '../middlewares/authorizer';

// *account controllers*
router.post('/registration', accountController.registerUser);
router.post('/login', accountController.login);
router.post('/forgotPassword', accountController.forgotPassword);
router.post('/resetPassword', accountController.resetPassword);
router.get('/logout', accountController.logout);

router.use(authenticator, authorizer);
router.get('/profile', accountController.profile);

// *farmer controllers*
// for land
router.get('/getAllLands', farmerController.getAllLands);
router.get('/getLand', farmerController.getLand);
router.get('/landSearchByLocation', farmerController.landSearchByLocation);
router.get('/landSearchByCrops', farmerController.landSearchByCrops);

// for offer
router.post('/makeAnOffer', farmerController.makeAnOffer);
router.put('/changeOffer', farmerController.changeOffer);
router.delete('/deleteOffer', farmerController.deleteOffer);

// *land Owner controllers*
// for land
router.post('/addLand', landOwnerController.addLand);
router.delete('/removeLand', landOwnerController.removeLand);
router.get('/landSearchByOwner', landOwnerController.landSearchByOwner);

// for offer
router.get('/allOffersForALand', landOwnerController.allOffersForALand);
router.put('/acceptOffer', landOwnerController.acceptOffer);
router.delete('/rejectOffer', landOwnerController.rejectOffer);

export { router };
