import mongoose from 'mongoose';
import AnimalKingdomWaitTime from './animal-kingdom.mongo.js';

export const getAllAKRides = async (time, date, sort) => {
  return await AnimalKingdomWaitTime.find({ time, date }).sort(`${sort}`);
};

export const getAKRide = async (rideName, date, sort) => {
  return await AnimalKingdomWaitTime.find({ name: rideName, date: date }).sort(
    `${sort}`
  );
};
