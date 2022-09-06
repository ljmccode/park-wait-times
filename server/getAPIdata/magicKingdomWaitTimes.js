import moment from 'moment';
import MagicKingdomWaitTime from '../models/magic-kingdom.mongo.js';
import { filterRides, mapRides } from '../utils/rideHelpers.js';

import Themeparks from 'themeparks';
import mongoose from 'mongoose';

const MagicKingdom = new Themeparks.Parks.WaltDisneyWorldMagicKingdom();

const pushToDatabase = (rides, callback) => {
  rides.forEach((ride) => {
    const currentDate = new Date();
    const time = moment(currentDate).tz('America/New_York').format('HH:mm');
    const date = moment(currentDate).tz('America/New_York').format('L');
    MagicKingdomWaitTime.create({ ...ride, date, time });
  });
  console.log('complete');
  callback();
};

const disconnect = () => {
  console.log('disconnecting from mongoose');
  return mongoose.connection.close();
};

export const getMKWaitTimes = () => {
  return MagicKingdom.GetWaitTimes()
    .then(filterRides)
    .then(mapRides)
    .then((rides) => pushToDatabase(rides, disconnect))
    .catch((error) => {
      console.error(error);
    });
};
