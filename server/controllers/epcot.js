import { getAllEpcotRides, getEpcotRide } from '../models/epcot.model.js';

export const httpGetAllEpcotRides = async (req, res) => {
  const rides = await getAllEpcotRides();
  return res.status(200).json(rides);
};

export const httpGetEpcotRide = async (req, res) => {
  const { ride } = req.params;
  const rideInfo = await getEpcotRide(decodeURIComponent(ride));
  const condensedRideInfo = rideInfo.map((ride) => {
    const { name, waitTime, status, date, time } = ride;
    return { name, waitTime, status, date, time };
  });
  return res.status(200).json(condensedRideInfo);
};
