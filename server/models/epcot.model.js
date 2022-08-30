import mongoose from 'mongoose';
import EpcotWaitTime from './epcot.mongo.js';

export const getAllEpcotRides = async (time, date, sort) => {
  return await EpcotWaitTime.find({ time, date }.sort(`${sort}`));
};

export const getEpcotRide = async (rideName, date) => {
  return await EpcotWaitTime.find({ name: rideName, date: date });
};
