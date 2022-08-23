import { getAllHSRides, getHSRide } from '../models/hollywoodStudios.model.js';

export const httpGetAllHollywoodRides = async (req, res) => {
  const { time, date } = req.query;
  const rides = await getAllHSRides(time, date);
  return res.status(200).json(rides);
};
export const httpGetHollywoodRide = async (req, res) => {
  const { ride } = req.params;
  const rideInfo = await getHSRide(decodeURIComponent(ride));
  return res.status(200).json(rideInfo);
};
