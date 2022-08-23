import { getAllHSRides, getHSRide } from '../models/hollywoodStudios.model.js';

export const httpGetAllHollywoodRides = async (req, res) => {
  const rides = await getAllHSRides();
  return res.status(200).json(rides);
};
export const httpGetHollywoodRide = async (req, res) => {
  const { ride } = req.params;
  const rideInfo = await getHSRide(decodeURIComponent(ride));
  const condensedRideInfo = rideInfo.map((ride) => {
    const { name, waitTime, status, date } = ride;
    return { name, waitTime, status, date };
  });
  return res.status(200).json(condensedRideInfo);
};
