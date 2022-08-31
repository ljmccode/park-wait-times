import { getAllEpcotRides, getEpcotRide } from '../models/epcot.model.js';
import { getAllHSRides, getHSRide } from '../models/hollywoodStudios.model.js';
import { getAllMKRides, getMKRide } from '../models/magic-kingdom.model.js';
import { getAllAKRides, getAKRide } from '../models/animal-kingdom.model.js';

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
  if (park === 'magic-kingdom') {
    const rides = await getAllMKRides(time, date, sort);
    return res.status(200).json(rides);
  }
  if (park === 'animal-kingdom') {
    const rides = await getAllAKRides(time, date, sort);
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
  if (park === 'magic-kingdom') {
    const rideInfo = await getMKRide(decodeURIComponent(ride), date, sort);
    return res.status(200).json(rideInfo);
  }
  if (park === 'animal-kingdom') {
    const rideInfo = await getAKRide(decodeURIComponent(ride), date, sort);
    return res.status(200).json(rideInfo);
  }
};
