import express from 'express';
const router = express.Router();

import {
  httpGetAllEpcotRides,
  httpGetEpcotRide,
} from '../controllers/epcot.js';

router.use('/:ride', httpGetEpcotRide);
router.use('/', httpGetAllEpcotRides);

export default router;
