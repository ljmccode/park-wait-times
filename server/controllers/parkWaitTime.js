import AnimalKingdomWaitTime from '../models/animal-kingdom.mongo.js';
import MagicKingdomWaitTime from '../models/magic-kingdom.mongo.js';
import HollywoodWaitTime from '../models/hollywoodStudios.mongo.js';
import EpcotWaitTime from '../models/epcot.mongo.js';
import { getAllRides } from '../models/parks.model.js';
import { getRideInfo } from '../models/parks.model.js';

export const httpGetAllRides = async (req, res) => {
  const { time, date, sort } = req.query;
  const { park } = req.params;
  let results;
  if (park === 'epcot') {
    results = await getAllRides(time, date, sort, EpcotWaitTime);
  }
  if (park === 'hollywood-studios') {
    results = await getAllRides(time, date, sort, HollywoodWaitTime);
  }
  if (park === 'magic-kingdom') {
    results = await getAllRides(time, date, sort, MagicKingdomWaitTime);
  }
  if (park === 'animal-kingdom') {
    results = await getAllRides(time, date, sort, AnimalKingdomWaitTime);
  }
  return res.status(200).json(results);
};

export const httpGetRide = async (req, res) => {
  const { park, ride } = req.params;
  const { sort, date } = req.query;
  const rideName = decodeURIComponent(ride);
  let results;
  if (park === 'epcot') {
    results = await getRideInfo(rideName, date, sort, EpcotWaitTime);
  }
  if (park === 'hollywood-studios') {
    results = await getRideInfo(rideName, date, sort, HollywoodWaitTime);
  }
  if (park === 'magic-kingdom') {
    results = await getRideInfo(rideName, date, sort, MagicKingdomWaitTime);
  }
  if (park === 'animal-kingdom') {
    results = await getRideInfo(rideName, date, sort, AnimalKingdomWaitTime);
  }
  return res.status(200).json(results);
};
