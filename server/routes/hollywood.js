import express from 'express';
const router = express.Router();

import {
  httpGetAllHollywoodRides,
  httpGetHollywoodRide,
} from '../controllers/hollywood.js';

router.use('/:ride', httpGetHollywoodRide);
router.use('/', httpGetAllHollywoodRides);

export default router;
