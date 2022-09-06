import moment from 'moment';
import AnimalKingdomWaitTime from '../models/animal-kingdom.mongo.js';
import { filterRides, mapRides } from '../utils/rideHelpers.js';

import Themeparks from 'themeparks';

const AnimalKingdom = new Themeparks.Parks.WaltDisneyWorldAnimalKingdom();

const pushToDatabase = (rides) => {
  rides.forEach((ride) => {
    const currentDate = new Date();
    const time = moment(currentDate).tz('America/New_York').format('HH:mm');
    const date = moment(currentDate).tz('America/New_York').format('L');
    AnimalKingdomWaitTime.create({ ...ride, date, time });
  });
};

export const getAKWaitTimes = () => {
  AnimalKingdom.GetWaitTimes()
    .then(filterRides)
    .then(mapRides)
    .then(pushToDatabase)
    .then(() => console.log('pushed to AK database!'))
    .catch((error) => {
      console.error(error);
    });
};
