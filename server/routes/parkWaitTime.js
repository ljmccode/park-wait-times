import express from 'express';
const router = express.Router();

import { httpGetAllRides, httpGetRide } from '../controllers/parkWaitTime.js';

router.use('/:park/:ride', httpGetRide);
router.use('/:park', httpGetAllRides);

export default router;
