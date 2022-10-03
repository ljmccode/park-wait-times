import AnimalKingdomWaitTime from '../models/animal-kingdom.mongo.js';
import MagicKingdomWaitTime from '../models/magic-kingdom.mongo.js';
import HollywoodWaitTime from '../models/hollywoodStudios.mongo.js';
import EpcotWaitTime from '../models/epcot.mongo.js';
import { getAllRides, getCurrentWaitTimes } from '../models/parks.model.js';
import Themeparks from 'themeparks';

const HollywoodStudios = new Themeparks.Parks.WaltDisneyWorldHollywoodStudios();
const Epcot = new Themeparks.Parks.WaltDisneyWorldEpcot();
const MagicKingdom = new Themeparks.Parks.WaltDisneyWorldMagicKingdom();
const AnimalKingdom = new Themeparks.Parks.WaltDisneyWorldAnimalKingdom();

export const httpGetAllRides = async (req, res) => {
  const { date } = req.query;
  const { park } = req.params;
  let results;
  if (park === 'epcot') {
    results = await getAllRides(date, EpcotWaitTime);
  }
  if (park === 'hollywood-studios') {
    results = await getAllRides(date, HollywoodWaitTime);
  }
  if (park === 'magic-kingdom') {
    results = await getAllRides(date, MagicKingdomWaitTime);
  }
  if (park === 'animal-kingdom') {
    results = await getAllRides(date, AnimalKingdomWaitTime);
  }
  return res.status(200).json(results);
};

export const httpGetCurrentWait = async (req, res) => {
  const { park } = req.params;
  let currentWait;
  if (park === 'epcot') {
    currentWait = await getCurrentWaitTimes(Epcot);
  }
  if (park === 'hollywood-studios') {
    currentWait = await getCurrentWaitTimes(HollywoodStudios);
  }
  if (park === 'magic-kingdom') {
    currentWait = await getCurrentWaitTimes(MagicKingdom);
  }
  if (park === 'animal-kingdom') {
    currentWait = await getCurrentWaitTimes(AnimalKingdom);
  }
  return res.status(200).json(currentWait);
};
