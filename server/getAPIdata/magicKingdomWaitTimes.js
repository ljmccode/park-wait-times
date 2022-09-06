import moment from 'moment';
import MagicKingdomWaitTime from '../models/magic-kingdom.mongo.js';
import { filterRides, mapRides } from '../utils/rideHelpers.js';

import Themeparks from 'themeparks';

const MagicKingdom = new Themeparks.Parks.WaltDisneyWorldMagicKingdom();

const pushToDatabase = (rides) => {
  rides.forEach((ride) => {
    const currentDate = new Date();
    const time = moment(currentDate).tz('America/New_York').format('HH:mm');
    const date = moment(currentDate).tz('America/New_York').format('L');
    return MagicKingdomWaitTime.create({ ...ride, date, time });
  });
};

export const getMKWaitTimes = () => {
  return MagicKingdom.GetWaitTimes()
    .then(filterRides)
    .then(mapRides)
    .then(pushToDatabase)
    .catch((error) => {
      console.error(error);
    });
};
