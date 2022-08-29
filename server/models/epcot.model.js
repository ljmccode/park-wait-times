import mongoose from 'mongoose';
import EpcotWaitTime from './epcot.mongo.js';

export const getAllEpcotRides = async (time, date) => {
  return await EpcotWaitTime.find({ time, date });
};

export const getEpcotRide = async (rideName, date) => {
  return await EpcotWaitTime.find({ name: rideName, date: date });
};
