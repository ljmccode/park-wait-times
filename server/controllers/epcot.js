import { getAllEpcotRides, getEpcotRide } from '../models/epcot.model.js';

export const httpGetAllEpcotRides = async (req, res) => {
  const { time, date } = req.query;
  const rides = await getAllEpcotRides(time, date);
  return res.status(200).json(rides);
};

export const httpGetEpcotRide = async (req, res) => {
  const { ride } = req.params;
  const rideInfo = await getEpcotRide(decodeURIComponent(ride));
  return res.status(200).json(rideInfo);
};
