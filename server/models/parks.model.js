import { filterRides, mapRides } from '../utils/rideHelpers.js';

export const getAllRides = async (date, model) => {
  const rides = await model.find({ date }).sort('name');
  const times = [...new Set(rides.map((ride) => ride.time))];
  return { rides, times };
};

export const getCurrentWaitTimes = (park) => {
  return park
    .GetWaitTimes()
    .then(filterRides)
    .then(mapRides)
    .then((result) => result)
    .catch((error) => {
      console.error(error);
    });
};
