import mongoose from 'mongoose';
import EpcotWaitTime from './epcot.mongo.js';

export const getAllEpcotRides = async (time, date) => {
  console.log(time, date);
  return await EpcotWaitTime.find({ time, date });
};

export const getEpcotRide = async (rideName) => {
  return await EpcotWaitTime.find({ name: rideName });
};
