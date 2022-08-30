import { getAllEpcotRides, getEpcotRide } from '../models/epcot.model.js';
import { getAllHSRides, getHSRide } from '../models/hollywoodStudios.model.js';

export const httpGetAllRides = async (req, res) => {
  const { time, date, sort } = req.query;
  const { park } = req.params;
  if (park === 'epcot') {
    const rides = await getAllEpcotRides(time, date, sort);
    return res.status(200).json(rides);
  }

  if (park === 'hollywood-studios') {
    const rides = await getAllHSRides(time, date, sort);
    return res.status(200).json(rides);
  }
};

export const httpGetRide = async (req, res) => {
  const { park, ride } = req.params;
  const { sort, date } = req.query;
  if (park === 'epcot') {
    const rideInfo = await getEpcotRide(decodeURIComponent(ride), date, sort);
    return res.status(200).json(rideInfo);
  }
  if (park === 'hollywood-studios') {
    const rideInfo = await getHSRide(decodeURIComponent(ride), date, sort);
    return res.status(200).json(rideInfo);
  }
};
