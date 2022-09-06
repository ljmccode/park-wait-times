import moment from 'moment';
import HollywoodWaitTime from '../models/hollywoodStudios.mongo.js';
import { filterRides, mapRides } from '../utils/rideHelpers.js';

import Themeparks from 'themeparks';

const HollywoodStudios = new Themeparks.Parks.WaltDisneyWorldHollywoodStudios();

const pushToDatabase = (rides) => {
  rides.forEach((ride) => {
    const currentDate = new Date();
    const time = moment(currentDate).tz('America/New_York').format('HH:mm');
    const date = moment(currentDate).tz('America/New_York').format('L');
    return HollywoodWaitTime.create({ ...ride, date, time });
  });
};

export const getHollywoodWaitTimes = () => {
  return HollywoodStudios.GetWaitTimes()
    .then(filterRides)
    .then(mapRides)
    .then(pushToDatabase)
    .catch((error) => {
      console.error(error);
    });
};
