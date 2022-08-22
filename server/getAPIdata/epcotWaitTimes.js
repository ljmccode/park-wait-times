import EpcotWaitTime from '../models/epcot.mongo.js';
import { filterRides, mapRides } from '../utils/rideHelpers.js';

import Themeparks from 'themeparks';

const Epcot = new Themeparks.Parks.WaltDisneyWorldEpcot();

const pushToDatabase = (rides) => {
  rides.forEach((ride) => {
    EpcotWaitTime.create({ ...ride, date: new Date() });
  });
};

export const getEpcotWaitTimes = () => {
  Epcot.GetWaitTimes()
    .then(filterRides)
    .then(mapRides)
    .then(pushToDatabase)
    .catch((error) => {
      console.error(error);
    });
};
