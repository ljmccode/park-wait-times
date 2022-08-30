import mongoose from 'mongoose';
import HollywoodWaitTime from './hollywoodStudios.mongo.js';

export const getAllHSRides = async (time, date, sort) => {
  return await HollywoodWaitTime.find({ time, date }).sort(`${sort}`);
};

export const getHSRide = async (rideName, date) => {
  return await HollywoodWaitTime.find({ name: rideName, date: date });
};
