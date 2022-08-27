import { getAllEpcotRides, getEpcotRide } from '../models/epcot.model.js';
import { getAllHSRides, getHSRide } from '../models/hollywoodStudios.model.js';

export const httpGetAllRides = async (req, res) => {
  const { time, date } = req.query;
  const { park } = req.params;

  if (park === 'epcot') {
    const rides = await getAllEpcotRides(time, date);
    return res.status(200).json(rides);
  }

  if (park === 'hollywood-studios') {
    const rides = await getAllHSRides(time, date);
    return res.status(200).json(rides);
  }
};

export const httpGetRide = async (req, res) => {
  const { park, ride } = req.params;
  if (park === 'epcot') {
    console.log('this is epcot');
    const rideInfo = await getEpcotRide(decodeURIComponent(ride));
    return res.status(200).json(rideInfo);
  }
  if (park === 'hollywood-studios') {
    const rideInfo = await getHSRide(decodeURIComponent(ride));
    return res.status(200).json(rideInfo);
  }
};
