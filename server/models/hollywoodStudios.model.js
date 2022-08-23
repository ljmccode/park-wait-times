import mongoose from 'mongoose';
import HollywoodWaitTime from './hollywoodStudios.mongo.js';

export const getAllHSRides = async (time, date) => {
  const slicedTime = time.slice(1, 6);
  const slicedDate = date.slice(1, 11);
  const queryObject = {
    time: slicedTime,
    date: slicedDate,
  };
  return await HollywoodWaitTime.find(queryObject);
};

export const getHSRide = async (rideName) => {
  return await HollywodWaitTime.find({ name: rideName });
};
