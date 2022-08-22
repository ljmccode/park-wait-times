import HollywoodWaitTime from '../models/HollywoodStudios.js';
import { filterRides, mapRides } from '../utils/rideHelpers.js';

import Themeparks from 'themeparks';

const HollywoodStudios = new Themeparks.Parks.WaltDisneyWorldHollywoodStudios();

const pushToDatabase = (rides) => {
  rides.forEach((ride) => {
    HollywoodWaitTime.create({ ...ride, date: new Date() });
  });
};

export const getHollywoodWaitTimes = () => {
  HollywoodStudios.GetWaitTimes()
    .then(filterRides)
    .then(mapRides)
    .then(pushToDatabase)
    .catch((error) => {
      console.error(error);
    });
};
