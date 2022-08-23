import mongoose from 'mongoose';
import EpcotWaitTime from './epcot.mongo.js';

export const getAllEpcotRides = async (time, date) => {
  const slicedTime = time.slice(1, 6);
  const slicedDate = date.slice(1, 11);
  const queryObject = {
    time: slicedTime,
    date: slicedDate,
  };
  return await EpcotWaitTime.find(queryObject);
};

export const getEpcotRide = async (rideName) => {
  return await EpcotWaitTime.find({ name: rideName });
};
