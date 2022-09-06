import moment from 'moment';
import EpcotWaitTime from '../models/epcot.mongo.js';
import { filterRides, mapRides } from '../utils/rideHelpers.js';

import Themeparks from 'themeparks';

const Epcot = new Themeparks.Parks.WaltDisneyWorldEpcot();

const pushToDatabase = (rides) => {
  rides.forEach((ride) => {
    const currentDate = new Date();
    const time = moment(currentDate).tz('America/New_York').format('HH:mm');
    const date = moment(currentDate).tz('America/New_York').format('L');
    EpcotWaitTime.create({ ...ride, date, time });
  });
};

export const getEpcotWaitTimes = () => {
  return Epcot.GetWaitTimes()
    .then(filterRides)
    .then(mapRides)
    .then(pushToDatabase)
    .catch((error) => {
      console.error(error);
    });
};
