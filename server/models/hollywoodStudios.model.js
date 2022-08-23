import mongoose from 'mongoose';
import HollywoodWaitTime from './hollywoodStudios.mongo.js';

export const getAllHSRides = async () => {
  return await HollywoodWaitTime.find();
};

export const getHSRide = async (rideName) => {
  return await HollywoodWaitTime.find({ name: rideName });
};
