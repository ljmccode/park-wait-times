import mongoose from 'mongoose';
import HollywoodWaitTime from './hollywoodStudios.mongo.js';

export const getAllHSRides = async (time, date) => {
  return await HollywoodWaitTime.find({ time, date }).sort('name');
};

export const getHSRide = async (rideName) => {
  return await HollywodWaitTime.find({ name: rideName });
};
