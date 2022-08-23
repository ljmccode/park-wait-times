import mongoose from 'mongoose';
import EpcotWaitTime from './epcot.mongo.js';

export const getAllEpcotRides = async () => {
  return await EpcotWaitTime.find();
};

export const getEpcotRide = async (rideName) => {
  return await EpcotWaitTime.find({ name: rideName });
};
