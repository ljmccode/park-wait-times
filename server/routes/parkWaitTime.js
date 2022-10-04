import express from 'express';
const router = express.Router();

import {
  httpGetAllRides,
  httpGetCurrentWait,
} from '../controllers/parkWaitTime.js';

router.use('/currentWait/:park', httpGetCurrentWait);
router.use('/:park', httpGetAllRides);

export default router;
