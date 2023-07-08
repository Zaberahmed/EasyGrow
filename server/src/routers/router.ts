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
router.get('/getAllLand');
router.get('/landSearchByLocation');
router.get('/landSearchByCrop');

// for offer
router.post('/makeAnOffer');
router.put('./changeOffer');

// *land Owner controllers*
// for land
router.post('/addALand');
router.delete('/removeALand');
router.get('/getLandById');
router.get('/landSearchByOwner');

// for offer

export { router };
