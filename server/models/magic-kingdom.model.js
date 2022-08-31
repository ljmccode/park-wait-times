import mongoose from 'mongoose';
import MagicKingdomWaitTime from './magic-kingdom.mongo.js';

export const getAllMKRides = async (time, date, sort) => {
  return await MagicKingdomWaitTime.find({ time, date }).sort(`${sort}`);
};

export const getMKRide = async (rideName, date, sort) => {
  return await MagicKingdomWaitTime.find({ name: rideName, date: date }).sort(
    `${sort}`
  );
};
